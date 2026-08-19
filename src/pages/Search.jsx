import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import propertiesDb from "../properties-db";
import { ksrInfo, whatsappUrl } from "../ksr-info";

/* =========================================================
   HELPERS
========================================================= */

function getParam(search, name, fallback = "") {
  const params = new URLSearchParams(search);
  return params.get(name) || fallback;
}

function propertySlug(item) {
  return String(item?.name || "property")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function safeImage(image) {
  if (!image) return "";

  const value = String(image).trim();

  if (!value) return "";

  if (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("/")
  ) {
    return value;
  }

  return `/${value}`;
}

function propertyMapUrl(item) {
  const query = [
    item?.name,
    item?.locality,
    item?.city || "Indore",
  ]
    .filter(Boolean)
    .join(" ");

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query
  )}`;
}

/* =========================================================
   TEXT NORMALIZATION
========================================================= */

function normalizeText(value = "") {
  return String(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[₹,]/g, " ")
    .replace(/[\/_|\-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function compactText(value = "") {
  return normalizeText(value).replace(/\s+/g, "");
}

/* =========================================================
   NUMBER PARSING
========================================================= */

function parseNumber(value) {
  if (value === null || value === undefined || value === "") {
    return null;
  }

  const cleaned = String(value)
    .replace(/,/g, "")
    .replace(/₹/g, "")
    .trim();

  const number = Number(cleaned);

  return Number.isFinite(number) ? number : null;
}

/* =========================================================
   PRICE SEARCH
   Supports:
   2.64
   2.64 cr
   26400000
   2 cr
========================================================= */

function priceMatches(item, query) {
  const q = normalizeText(query);

  if (!q) return false;

  const priceValue = parseNumber(item?.expected_price);

  if (!priceValue) return false;

  const croreMatch = q.match(
    /(\d+(?:\.\d+)?)\s*(cr|crore|crores)/
  );

  if (croreMatch) {
    const croreValue = Number(croreMatch[1]);

    if (Number.isFinite(croreValue)) {
      const expected = croreValue * 10000000;

      return (
        Math.abs(priceValue - expected) <=
        Math.max(expected * 0.08, 100000)
      );
    }
  }

  const lakhMatch = q.match(
    /(\d+(?:\.\d+)?)\s*(lakh|lac|lacs)/
  );

  if (lakhMatch) {
    const lakhValue = Number(lakhMatch[1]);

    if (Number.isFinite(lakhValue)) {
      const expected = lakhValue * 100000;

      return (
        Math.abs(priceValue - expected) <=
        Math.max(expected * 0.08, 50000)
      );
    }
  }

  const numericQuery = q.replace(/[^\d.]/g, "");

  if (!numericQuery) return false;

  const n = Number(numericQuery);

  if (!Number.isFinite(n)) return false;

  /*
     Exact-ish full rupee amount
  */
  if (n >= 100000) {
    return String(Math.round(priceValue)).includes(
      String(Math.round(n))
    );
  }

  /*
     Crore shorthand:
     2.64 -> 2.64 Cr
  */
  if (n >= 0.5 && n <= 100) {
    const expected = n * 10000000;

    return (
      Math.abs(priceValue - expected) <=
      Math.max(expected * 0.08, 100000)
    );
  }

  return false;
}

/* =========================================================
   AREA SEARCH
========================================================= */

function areaMatches(item, query) {
  const q = normalizeText(query);

  if (!q) return false;

  const areaValue = parseNumber(item?.area);

  if (!areaValue) return false;

  const areaMatch = q.match(
    /(\d+(?:\.\d+)?)\s*(sq\.?\s*ft|sqft|square\s*feet|square\s*foot)/
  );

  if (areaMatch) {
    const expected = Number(areaMatch[1]);

    if (Number.isFinite(expected)) {
      return (
        Math.abs(areaValue - expected) <=
        Math.max(expected * 0.08, 20)
      );
    }
  }

  const numberOnly = q.replace(/[^\d.]/g, "");

  if (!numberOnly) return false;

  const n = Number(numberOnly);

  if (!Number.isFinite(n)) return false;

  if (n >= 100) {
    return (
      Math.abs(areaValue - n) <=
      Math.max(n * 0.08, 20)
    );
  }

  return false;
}

/* =========================================================
   BHK SEARCH
========================================================= */

function bhkMatches(item, query) {
  const q = normalizeText(query);

  if (!q) return false;

  const bhk = normalizeText(item?.bhk);

  if (!bhk) return false;

  const bhkNumberMatch = q.match(/(\d+)\s*(bhk|bed|bedroom)?/);

  if (!bhkNumberMatch) return false;

  const number = bhkNumberMatch[1];

  return (
    bhk.includes(`${number} bhk`) ||
    bhk.includes(`${number}bhk`) ||
    bhk.includes(`${number} bedroom`) ||
    bhk.includes(`${number} bedroom`)
  );
}

/* =========================================================
   SYNONYMS
========================================================= */

const SEARCH_SYNONYMS = {
  flat: ["flat", "apartment", "residence", "home"],
  apartment: ["flat", "apartment", "residence", "home"],

  villa: ["villa", "bungalow", "independent house"],
  bungalow: ["villa", "bungalow", "independent house"],

  plot: ["plot", "land", "residential plot", "property land"],

  office: ["office", "commercial office", "workspace"],
  shop: ["shop", "retail", "commercial shop"],

  buy: ["buy", "sale", "sell", "ownership", "purchase"],
  sale: ["buy", "sale", "sell", "ownership", "purchase"],

  rent: ["rent", "rental", "lease", "leasing"],
  lease: ["rent", "rental", "lease", "leasing"],

  indore: ["indore"],
  vijaynagar: ["vijay nagar", "vijaynagar"],
  "vijay nagar": ["vijay nagar", "vijaynagar"],
  "super corridor": ["super corridor", "supercorridor"],
  bypass: ["bypass", "indore bypass"],
  nipania: ["nipania"],
  kanadia: ["kanadia", "kanadia road"],
  "kanadia road": ["kanadia", "kanadia road"],
  bicholi: ["bicholi", "bicholi mardana"],
  "bicholi mardana": ["bicholi", "bicholi mardana"],
};

/* =========================================================
   EXPAND SEARCH TERM
========================================================= */

function expandSearchTerm(term) {
  const normalized = normalizeText(term);

  if (!normalized) {
    return [];
  }

  const results = new Set([normalized]);

  if (SEARCH_SYNONYMS[normalized]) {
    SEARCH_SYNONYMS[normalized].forEach((value) => {
      results.add(normalizeText(value));
    });
  }

  return Array.from(results);
}

/* =========================================================
   PROPERTY SEARCH TEXT
========================================================= */

function getPropertySearchText(item) {
  const values = [
    item?.name,
    item?.project_name,
    item?.locality,
    item?.city,
    item?.location,
    item?.address,

    item?.builder_name,
    item?.builder,
    item?.developer,
    item?.developer_name,

    item?.property_type,
    item?.type,
    item?.category,

    item?.status,
    item?.availability,
    item?.purpose,

    item?.bhk,
    item?.bedrooms,
    item?.bathrooms,

    item?.facing,
    item?.floor,
    item?.tower,

    item?.description,
    item?.short_description,

    item?.rera_id,
    item?.rera,

    item?.price_str,
    item?.price_sqft,

    item?.area,
    item?.area_str,

    ...(Array.isArray(item?.facilities)
      ? item.facilities
      : []),

    ...(Array.isArray(item?.amenities)
      ? item.amenities
      : []),

    ...(Array.isArray(item?.features)
      ? item.features
      : []),
  ];

  return normalizeText(
    values
      .filter(
        (value) =>
          value !== null &&
          value !== undefined &&
          String(value).trim() !== ""
      )
      .join(" ")
  );
}

/* =========================================================
   TYPE NORMALIZATION
========================================================= */

function normalizePropertyType(value) {
  const type = normalizeText(value);

  if (!type) return "";

  if (
    type === "flat" ||
    type === "apartment" ||
    type === "residence"
  ) {
    return "flat";
  }

  if (
    type === "villa" ||
    type === "bungalow" ||
    type === "independent house"
  ) {
    return "villa";
  }

  if (type === "plot" || type === "land") {
    return "plot";
  }

  if (
    type === "office" ||
    type === "commercial office"
  ) {
    return "office";
  }

  if (
    type === "shop" ||
    type === "commercial shop"
  ) {
    return "shop";
  }

  return type;
}

/* =========================================================
   STATUS / PURPOSE
========================================================= */

function matchesPurpose(item, purpose) {
  if (!purpose || purpose === "all") {
    return true;
  }

  const status = normalizeText(
    [
      item?.status,
      item?.availability,
      item?.purpose,
      item?.listing_type,
      item?.property_for,
    ]
      .filter(Boolean)
      .join(" ")
  );

  /*
     If database has no status, don't accidentally hide
     properties.
  */
  if (!status) {
    return true;
  }

  if (purpose === "buy") {
    return (
      status.includes("sale") ||
      status.includes("buy") ||
      status.includes("ownership") ||
      status.includes("purchase")
    );
  }

  if (purpose === "rent") {
    return (
      status.includes("rent") ||
      status.includes("lease") ||
      status.includes("rental") ||
      status.includes("leasing")
    );
  }

  return true;
}

/* =========================================================
   TOKEN MATCHING
========================================================= */

function tokenMatches(item, token) {
  const normalizedToken = normalizeText(token);

  if (!normalizedToken) {
    return true;
  }

  const text = getPropertySearchText(item);

  /*
     Direct full phrase
  */
  if (text.includes(normalizedToken)) {
    return true;
  }

  /*
     Synonyms
  */
  const expanded = expandSearchTerm(normalizedToken);

  if (
    expanded.some((variant) =>
      text.includes(normalizeText(variant))
    )
  ) {
    return true;
  }

  /*
     Special numeric searches
  */
  if (priceMatches(item, normalizedToken)) {
    return true;
  }

  if (areaMatches(item, normalizedToken)) {
    return true;
  }

  if (bhkMatches(item, normalizedToken)) {
    return true;
  }

  return false;
}

/* =========================================================
   ADVANCED PROPERTY MATCH
========================================================= */

function propertyMatchesQuery(item, query) {
  const q = normalizeText(query);

  if (!q) {
    return true;
  }

  /*
     Complete phrase first
  */
  const completeText = getPropertySearchText(item);

  if (completeText.includes(q)) {
    return true;
  }

  /*
     Special direct searches
  */
  if (priceMatches(item, q)) {
    return true;
  }

  if (areaMatches(item, q)) {
    return true;
  }

  if (bhkMatches(item, q)) {
    return true;
  }

  /*
     Multiple tokens:
     "villa nipania"
     "3 bhk vijay nagar"
     "emerald horizon"
  */
  const tokens = q
    .split(" ")
    .map((token) => token.trim())
    .filter(Boolean);

  if (!tokens.length) {
    return true;
  }

  /*
     Every meaningful token should match.
     This prevents random unrelated results.
  */
  return tokens.every((token) =>
    tokenMatches(item, token)
  );
}

/* =========================================================
   SORT
========================================================= */

function getPrice(item) {
  const value = parseNumber(item?.expected_price);

  return value || 0;
}

function getArea(item) {
  const value = parseNumber(item?.area);

  return value || 0;
}

/* =========================================================
   COMPONENT
========================================================= */

export default function Search({ onOpenProperty }) {
  const location = useLocation();
  const navigate = useNavigate();

  /* =======================================================
     STATE
  ======================================================= */

  const [query, setQuery] = useState(
    getParam(location.search, "query")
  );

  const [type, setType] = useState(
    getParam(location.search, "type")
  );

  const [tab, setTab] = useState(
    getParam(location.search, "tab", "buy")
  );

  const [purpose, setPurpose] = useState(
    getParam(location.search, "subtab", "all")
  );

  const [sortBy, setSortBy] = useState(
    getParam(location.search, "sort", "recommended")
  );

  const [searchInput, setSearchInput] = useState(
    getParam(location.search, "query")
  );

  const [favorites, setFavorites] = useState([]);

  /* =======================================================
     URL -> STATE
  ======================================================= */

  useEffect(() => {
    const urlQuery = getParam(
      location.search,
      "query"
    );

    const urlType = getParam(
      location.search,
      "type"
    );

    const urlTab = getParam(
      location.search,
      "tab",
      "buy"
    );

    const urlPurpose = getParam(
      location.search,
      "subtab",
      "all"
    );

    const urlSort = getParam(
      location.search,
      "sort",
      "recommended"
    );

    setQuery(urlQuery);
    setSearchInput(urlQuery);
    setType(urlType);
    setTab(urlTab);
    setPurpose(urlPurpose);
    setSortBy(urlSort);
  }, [location.search]);

  /* =======================================================
     FAVORITES
  ======================================================= */

  useEffect(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem(
          "ksr_favourite_properties"
        ) || "[]"
      );

      if (Array.isArray(saved)) {
        setFavorites(saved);
      }
    } catch {
      setFavorites([]);
    }
  }, []);

  const toggleFavorite = (item) => {
    const id = item?.id || item?.name;

    if (!id) return;

    setFavorites((current) => {
      const exists = current.includes(id);

      const updated = exists
        ? current.filter((value) => value !== id)
        : [...current, id];

      try {
        localStorage.setItem(
          "ksr_favourite_properties",
          JSON.stringify(updated)
        );
      } catch {
        // Ignore localStorage errors
      }

      return updated;
    });
  };

  /* =======================================================
     SEARCH EXECUTE
  ======================================================= */

  const handleSearchExecute = (event) => {
    event?.preventDefault();

    const params = new URLSearchParams();

    const cleanQuery = searchInput.trim();

    if (cleanQuery) {
      params.set("query", cleanQuery);
    }

    if (type) {
      params.set("type", type);
    }

    params.set("tab", tab || "buy");
    params.set("subtab", purpose || "all");

    if (sortBy) {
      params.set("sort", sortBy);
    }

    navigate(`/search?${params.toString()}`);
  };

  /* =======================================================
     ENTER / LIVE SEARCH
  ======================================================= */

  const handleQuickSearch = (value) => {
    setSearchInput(value);
  };

  /* =======================================================
     FILTERED PROPERTIES
  ======================================================= */

  const filteredProperties = useMemo(() => {
    if (!Array.isArray(propertiesDb)) {
      return [];
    }

    const result = propertiesDb.filter((item) => {
      /*
         TYPE
      */
      if (type) {
        const itemType = normalizePropertyType(
          item?.property_type ||
            item?.type ||
            item?.category
        );

        const selectedType =
          normalizePropertyType(type);

        if (
          itemType &&
          selectedType &&
          itemType !== selectedType
        ) {
          return false;
        }
      }

      /*
         PURPOSE
      */
      if (!matchesPurpose(item, purpose)) {
        return false;
      }

      /*
         SEARCH
      */
      if (
        query &&
        !propertyMatchesQuery(item, query)
      ) {
        return false;
      }

      return true;
    });

    /*
       SORT
    */
    const sorted = [...result];

    if (sortBy === "price-low") {
      sorted.sort(
        (a, b) => getPrice(a) - getPrice(b)
      );
    }

    if (sortBy === "price-high") {
      sorted.sort(
        (a, b) => getPrice(b) - getPrice(a)
      );
    }

    if (sortBy === "area-low") {
      sorted.sort(
        (a, b) => getArea(a) - getArea(b)
      );
    }

    if (sortBy === "area-high") {
      sorted.sort(
        (a, b) => getArea(b) - getArea(a)
      );
    }

    return sorted;
  }, [
    query,
    type,
    purpose,
    sortBy,
  ]);

  /* =======================================================
     RESET
  ======================================================= */

  const handleResetFilters = () => {
    setQuery("");
    setSearchInput("");
    setType("");
    setTab("buy");
    setPurpose("all");
    setSortBy("recommended");

    navigate("/search");
  };

  /* =======================================================
     TYPE FILTER
  ======================================================= */

  const propertyTypes = [
    {
      value: "",
      label: "All Types",
    },
    {
      value: "flat",
      label: "Apartments",
    },
    {
      value: "villa",
      label: "Villas",
    },
    {
      value: "plot",
      label: "Plots",
    },
    {
      value: "office",
      label: "Offices",
    },
    {
      value: "shop",
      label: "Shops",
    },
  ];

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main className="search-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="search-hero">
        <div className="search-container">

          <div className="search-eyebrow">
            KSR Realty Ventures
          </div>

          <h1 className="search-title">
            Find Your Perfect
            <span> Property.</span>
          </h1>

          <p className="search-description">
            Search verified properties across Indore by
            project, locality, builder, property type,
            BHK, price, area and more.
          </p>

          {/* =================================================
              SEARCH BOX
          ================================================= */}

          <form
            className="advanced-search-box"
            onSubmit={handleSearchExecute}
          >

            <div className="search-location">
              <span className="location-icon">
                📍
              </span>

              <div>
                <small>LOCATION</small>
                <strong>Indore</strong>
              </div>
            </div>

            <div className="search-divider" />

            <div className="search-main-input">
              <span className="search-icon">
                🔎
              </span>

              <input
                value={searchInput}
                onChange={(event) =>
                  handleQuickSearch(
                    event.target.value
                  )
                }
                placeholder="Search locality, project, builder, BHK, price..."
                autoComplete="off"
              />

              {searchInput && (
                <button
                  type="button"
                  className="clear-search"
                  onClick={() =>
                    setSearchInput("")
                  }
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            <button
              type="submit"
              className="search-submit"
            >
              <span>Search</span>
              <span>→</span>
            </button>

          </form>

          {/* =================================================
              SEARCH EXAMPLES
          ================================================= */}

          <div className="search-suggestions">
            <span>Popular:</span>

            {[
              "Nipania",
              "Vijay Nagar",
              "Super Corridor",
              "3 BHK",
              "Villa",
            ].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setSearchInput(item);

                  const params =
                    new URLSearchParams();

                  params.set("query", item);
                  params.set(
                    "tab",
                    tab || "buy"
                  );
                  params.set(
                    "subtab",
                    purpose || "all"
                  );

                  navigate(
                    `/search?${params.toString()}`
                  );
                }}
              >
                {item}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          FILTER BAR
      ===================================================== */}

      <section className="search-filter-section">
        <div className="search-container">

          <div className="filter-top">

            <div className="purpose-tabs">

              <button
                type="button"
                className={
                  tab === "buy"
                    ? "purpose-tab active"
                    : "purpose-tab"
                }
                onClick={() => {
                  setTab("buy");
                  setPurpose("all");
                }}
              >
                Buy
              </button>

              <button
                type="button"
                className={
                  tab === "sell"
                    ? "purpose-tab active sell"
                    : "purpose-tab"
                }
                onClick={() => {
                  setTab("sell");
                  setPurpose("all");
                }}
              >
                Sell
              </button>

              <button
                type="button"
                className={
                  purpose === "rent"
                    ? "purpose-tab active"
                    : "purpose-tab"
                }
                onClick={() => {
                  setTab("buy");
                  setPurpose("rent");
                }}
              >
                Rent / Lease
              </button>

            </div>

            <div className="result-sort">

              <span>
                {filteredProperties.length}{" "}
                properties
              </span>

              <select
                value={sortBy}
                onChange={(event) =>
                  setSortBy(
                    event.target.value
                  )
                }
              >
                <option value="recommended">
                  Recommended
                </option>

                <option value="price-low">
                  Price: Low to High
                </option>

                <option value="price-high">
                  Price: High to Low
                </option>

                <option value="area-low">
                  Area: Low to High
                </option>

                <option value="area-high">
                  Area: High to Low
                </option>
              </select>

            </div>

          </div>

          <div className="filter-row">

            <div className="filter-label">
              Property Type
            </div>

            <div className="type-pills">
              {propertyTypes.map((item) => (
                <button
                  type="button"
                  key={item.value}
                  className={
                    type === item.value
                      ? "type-pill active"
                      : "type-pill"
                  }
                  onClick={() =>
                    setType(item.value)
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="reset-button"
              onClick={handleResetFilters}
            >
              Reset
            </button>

          </div>

          <div className="purpose-row">

            <button
              type="button"
              className={
                purpose === "all"
                  ? "mini-filter active"
                  : "mini-filter"
              }
              onClick={() =>
                setPurpose("all")
              }
            >
              All Properties
            </button>

            <button
              type="button"
              className={
                purpose === "buy"
                  ? "mini-filter active"
                  : "mini-filter"
              }
              onClick={() =>
                setPurpose("buy")
              }
            >
              For Ownership
            </button>

            <button
              type="button"
              className={
                purpose === "rent"
                  ? "mini-filter active"
                  : "mini-filter"
              }
              onClick={() =>
                setPurpose("rent")
              }
            >
              For Lease
            </button>

          </div>

        </div>
      </section>

      {/* =====================================================
          RESULTS
      ===================================================== */}

      <section className="search-results">
        <div className="search-container">

          <div className="results-header">

            <div>
              <p className="results-eyebrow">
                PROPERTY COLLECTION
              </p>

              <h2>
                {filteredProperties.length}{" "}
                {filteredProperties.length === 1
                  ? "Property"
                  : "Properties"}{" "}
                Found
              </h2>

              {query && (
                <p className="active-search">
                  Results for{" "}
                  <strong>
                    "{query}"
                  </strong>
                </p>
              )}
            </div>

            {(query || type || purpose !== "all") && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="clear-all"
              >
                Clear All Filters
              </button>
            )}

          </div>

          {/* =================================================
              NO RESULTS
          ================================================= */}

          {filteredProperties.length === 0 ? (
            <div className="empty-results">

              <div className="empty-icon">
                🔎
              </div>

              <h3>
                No matching properties found
              </h3>

              <p>
                Try another locality, project,
                builder, property type, BHK,
                price or area.
              </p>

              <div className="empty-actions">

                <button
                  type="button"
                  onClick={handleResetFilters}
                >
                  Reset Search
                </button>

                <a
                  href={whatsappUrl(
                    `Hi KSR Realty, I am looking for a property in Indore${
                      query
                        ? ` matching "${query}"`
                        : ""
                    }. Please share available options.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request Custom Shortlist
                </a>

              </div>

            </div>
          ) : (

            <div className="property-grid">

              {filteredProperties.map(
                (item, index) => {

                  const image = safeImage(
                    item?.images?.[0] ||
                      item?.image ||
                      item?.thumbnail
                  );

                  const status =
                    item?.status ||
                    (purpose === "rent"
                      ? "Rent / Lease"
                      : "For Sale");

                  const propertyId =
                    item?.id ||
                    item?.name ||
                    index;

                  const isFavorite =
                    favorites.includes(
                      propertyId
                    );

                  return (
                    <article
                      key={
                        item?.id ||
                        item?.name ||
                        index
                      }
                      className="property-card"
                    >

                      {/* IMAGE */}

                      <div className="property-image-wrap">

                        <button
                          type="button"
                          className="property-image-button"
                          onClick={() =>
                            onOpenProperty?.(
                              item
                            )
                          }
                          aria-label={`View ${item?.name}`}
                        >

                          {image ? (
                            <img
                              src={image}
                              alt={
                                item?.name ||
                                "KSR Property"
                              }
                              loading={
                                index < 3
                                  ? "eager"
                                  : "lazy"
                              }
                              onError={(event) => {
                                event.currentTarget.style.display =
                                  "none";
                              }}
                            />
                          ) : (
                            <div className="image-placeholder">
                              KSR Realty
                            </div>
                          )}

                          <div className="image-overlay" />

                          <span className="status-badge">
                            {status}
                          </span>

                          <span className="view-label">
                            View Property
                          </span>

                        </button>

                        <button
                          type="button"
                          className={
                            isFavorite
                              ? "favorite-button active"
                              : "favorite-button"
                          }
                          onClick={() =>
                            toggleFavorite(
                              item
                            )
                          }
                          aria-label={
                            isFavorite
                              ? "Remove from favourites"
                              : "Add to favourites"
                          }
                        >
                          {isFavorite
                            ? "♥"
                            : "♡"}
                        </button>

                      </div>

                      {/* BODY */}

                      <div className="property-body">

                        <div className="property-heading">

                          <div className="property-main">

                            <p className="property-location">
                              📍{" "}
                              {item?.locality ||
                                item?.location ||
                                "Indore"}
                              {item?.city
                                ? `, ${item.city}`
                                : ", Indore"}
                            </p>

                            <h3>
                              {item?.name ||
                                item?.project_name ||
                                "Property"}
                            </h3>

                            <p className="property-builder">
                              {item?.builder_name ||
                              item?.developer ||
                              item?.developer_name
                                ? `By ${
                                    item?.builder_name ||
                                    item?.developer ||
                                    item?.developer_name
                                  }`
                                : "KSR Verified Property"}

                              {item?.rera_id
                                ? ` • RERA ${item.rera_id}`
                                : ""}
                            </p>

                          </div>

                          <div className="property-price">

                            <strong>
                              {item?.price_str ||
                                "Price on Request"}
                            </strong>

                            {item?.price_sqft && (
                              <span>
                                {item.price_sqft}
                              </span>
                            )}

                          </div>

                        </div>

                        {item?.description && (
                          <p className="property-description">
                            {item.description}
                          </p>
                        )}

                        {/* META */}

                        <div className="property-meta">

                          {item?.bhk && (
                            <span>
                              🛏 {item.bhk}
                            </span>
                          )}

                          {item?.area && (
                            <span>
                              ◫ {item.area} sq.ft
                            </span>
                          )}

                          {(item?.property_type ||
                            item?.type) && (
                            <span>
                              🏠{" "}
                              {item?.property_type ||
                                item?.type}
                            </span>
                          )}

                          {item?.facing && (
                            <span>
                              ↑ {item.facing}
                            </span>
                          )}

                        </div>

                        {/* AMENITIES */}

                        {Array.isArray(
                          item?.facilities
                        ) &&
                          item.facilities.length > 0 && (
                            <div className="property-amenities">
                              {item.facilities
                                .slice(0, 4)
                                .map(
                                  (
                                    facility,
                                    facilityIndex
                                  ) => (
                                    <span
                                      key={`${facility}-${facilityIndex}`}
                                    >
                                      {facility}
                                    </span>
                                  )
                                )}
                            </div>
                          )}

                        {/* ACTIONS */}

                        <div className="property-actions">

                          <button
                            type="button"
                            className="quick-view-button"
                            onClick={() =>
                              onOpenProperty?.(
                                item
                              )
                            }
                          >
                            Quick View
                          </button>

                          <Link
                            to={`/property/${propertySlug(
                              item
                            )}`}
                            className="details-button"
                          >
                            Details
                          </Link>

                          <a
                            href={propertyMapUrl(
                              item
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="map-button"
                          >
                            Map
                          </a>

                          <a
                            href={whatsappUrl(
                              `Hi KSR Realty, I am interested in ${
                                item?.name ||
                                "this property"
                              } in ${
                                item?.locality ||
                                "Indore"
                              }. Please share complete details and site visit options.`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="enquire-button"
                          >
                            Enquire
                          </a>

                        </div>

                      </div>
                    </article>
                  );
                }
              )}

            </div>
          )}

        </div>
      </section>

      {/* =====================================================
          OFFICE / MAP
      ===================================================== */}

      {ksrInfo && (
        <section className="search-office">
          <div className="search-container">

            <div className="office-card">

              <div className="office-content">

                <p className="results-eyebrow">
                  KSR REALTY VENTURES
                </p>

                <h2>
                  Visit Our Indore Office
                </h2>

                <p>
                  Speak directly with our property
                  advisors and get a curated shortlist
                  based on your requirements.
                </p>

                {ksrInfo.address && (
                  <p className="office-address">
                    📍 {ksrInfo.address}
                  </p>
                )}

                <div className="office-actions">

                  {ksrInfo.mapsUrl && (
                    <a
                      href={ksrInfo.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Google Maps
                    </a>
                  )}

                  {ksrInfo.phoneHref && (
                    <a
                      href={ksrInfo.phoneHref}
                    >
                      {ksrInfo.phone ||
                        "Call KSR"}
                    </a>
                  )}

                  {ksrInfo.emailHref && (
                    <a
                      href={ksrInfo.emailHref}
                    >
                      {ksrInfo.email ||
                        "Email KSR"}
                    </a>
                  )}

                </div>

              </div>

              {ksrInfo.mapEmbedUrl && (
                <div className="office-map">
                  <iframe
                    title="KSR Realty Indore Location"
                    src={
                      ksrInfo.mapEmbedUrl
                    }
                    loading="lazy"
                    width="100%"
                    height="300"
                    style={{
                      border: 0,
                    }}
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              )}

            </div>

          </div>
        </section>
      )}

      {/* =====================================================
          STYLES
      ===================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .search-page {
          min-height: 100vh;
          background: #f5f3ee;
          color: #0a192f;
        }

        .search-container {
          width: min(1220px, calc(100% - 32px));
          margin: 0 auto;
        }

        /* ================================================
           HERO
        ================================================ */

        .search-hero {
          padding: 135px 0 55px;
          background:
            radial-gradient(
              circle at 15% 10%,
              rgba(185,151,78,.12),
              transparent 35%
            ),
            linear-gradient(
              180deg,
              #f8f6f1 0%,
              #f1eee7 100%
            );
        }

        .search-eyebrow {
          color: #a27b36;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .2em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .search-title {
          margin: 0;
          max-width: 760px;
          font-family: Georgia, serif;
          font-weight: 500;
          font-size: clamp(
            2.5rem,
            6vw,
            4.8rem
          );
          line-height: .98;
          letter-spacing: -.04em;
        }

        .search-title span {
          color: #b9974e;
          font-style: italic;
        }

        .search-description {
          max-width: 650px;
          margin: 18px 0 30px;
          color: #687282;
          font-size: 14px;
          line-height: 1.7;
        }

        /* ================================================
           SEARCH BOX
        ================================================ */

        .advanced-search-box {
          display: flex;
          align-items: center;
          gap: 0;
          width: 100%;
          max-width: 1050px;
          padding: 8px;
          background: #fff;
          border: 1px solid rgba(10,25,47,.1);
          border-radius: 20px;
          box-shadow:
            0 20px 55px rgba(10,25,47,.1);
        }

        .search-location {
          min-width: 145px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
        }

        .location-icon {
          font-size: 18px;
        }

        .search-location small {
          display: block;
          color: #a1a7b0;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: .15em;
        }

        .search-location strong {
          display: block;
          margin-top: 2px;
          font-size: 13px;
        }

        .search-divider {
          width: 1px;
          height: 35px;
          background: #e7e5df;
        }

        .search-main-input {
          position: relative;
          flex: 1;
          display: flex;
          align-items: center;
          min-width: 0;
        }

        .search-icon {
          margin-left: 18px;
          font-size: 15px;
        }

        .search-main-input input {
          width: 100%;
          border: 0;
          outline: 0;
          padding: 15px 45px 15px 12px;
          background: transparent;
          color: #0a192f;
          font-size: 14px;
        }

        .search-main-input input::placeholder {
          color: #9aa0a8;
        }

        .clear-search {
          position: absolute;
          right: 12px;
          border: 0;
          background: #f0eee8;
          width: 27px;
          height: 27px;
          border-radius: 50%;
          cursor: pointer;
          color: #687282;
          font-size: 17px;
        }

        .search-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          min-width: 135px;
          border: 0;
          border-radius: 14px;
          padding: 15px 20px;
          background: linear-gradient(
            135deg,
            #0a192f,
            #1d3c63
          );
          color: white;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: .2s ease;
        }

        .search-submit:hover {
          transform: translateY(-1px);
          box-shadow:
            0 10px 25px rgba(10,25,47,.22);
        }

        .search-suggestions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          margin-top: 14px;
        }

        .search-suggestions span {
          color: #8c929b;
          font-size: 11px;
          font-weight: 700;
        }

        .search-suggestions button {
          border: 1px solid rgba(10,25,47,.1);
          background: rgba(255,255,255,.7);
          color: #495463;
          padding: 7px 12px;
          border-radius: 999px;
          font-size: 10px;
          cursor: pointer;
        }

        .search-suggestions button:hover {
          background: #0a192f;
          color: white;
        }

        /* ================================================
           FILTERS
        ================================================ */

        .search-filter-section {
          background: #fff;
          border-top: 1px solid rgba(10,25,47,.07);
          border-bottom: 1px solid rgba(10,25,47,.07);
          position: sticky;
          top: 0;
          z-index: 20;
        }

        .filter-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 16px 0;
        }

        .purpose-tabs {
          display: flex;
          gap: 5px;
          padding: 4px;
          border-radius: 999px;
          background: #f2f0eb;
        }

        .purpose-tab {
          border: 0;
          border-radius: 999px;
          background: transparent;
          padding: 9px 18px;
          color: #7e8792;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
        }

        .purpose-tab.active {
          background: #0a192f;
          color: white;
          box-shadow: 0 5px 15px rgba(10,25,47,.15);
        }

        .purpose-tab.active.sell {
          background: #8b6730;
        }

        .result-sort {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .result-sort span {
          color: #7d858e;
          font-size: 11px;
          font-weight: 700;
        }

        .result-sort select {
          border: 1px solid #ddd9d0;
          border-radius: 10px;
          padding: 9px 12px;
          background: #fff;
          color: #334052;
          outline: none;
          font-size: 11px;
        }

        .filter-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 0 14px;
        }

        .filter-label {
          color: #8b9199;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .12em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .type-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .type-pill,
        .mini-filter {
          border: 1px solid #e2ded5;
          background: #fff;
          color: #66717f;
          border-radius: 999px;
          padding: 8px 13px;
          font-size: 10px;
          font-weight: 700;
          cursor: pointer;
        }

        .type-pill.active,
        .mini-filter.active {
          background: #b9974e;
          border-color: #b9974e;
          color: white;
        }

        .reset-button {
          margin-left: auto;
          border: 0;
          background: transparent;
          color: #9a7231;
          font-size: 10px;
          font-weight: 800;
          cursor: pointer;
        }

        .purpose-row {
          display: flex;
          gap: 8px;
          padding-bottom: 15px;
        }

        /* ================================================
           RESULTS
        ================================================ */

        .search-results {
          padding: 50px 0 80px;
        }

        .results-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 28px;
        }

        .results-eyebrow {
          margin: 0 0 6px;
          color: #b9974e;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .16em;
        }

        .results-header h2 {
          margin: 0;
          font-family: Georgia, serif;
          font-size: clamp(
            1.8rem,
            4vw,
            2.7rem
          );
          font-weight: 500;
          color: #0a192f;
        }

        .active-search {
          margin: 8px 0 0;
          color: #8a919b;
          font-size: 12px;
        }

        .clear-all {
          border: 1px solid #d9d5cc;
          border-radius: 999px;
          background: #fff;
          padding: 9px 15px;
          color: #5f6975;
          font-size: 10px;
          font-weight: 800;
          cursor: pointer;
        }

        /* ================================================
           GRID
        ================================================ */

        .property-grid {
          display: grid;
          grid-template-columns:
            repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .property-card {
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(10,25,47,.08);
          border-radius: 18px;
          box-shadow:
            0 8px 25px rgba(10,25,47,.05);
          transition:
            transform .25s ease,
            box-shadow .25s ease;
        }

        .property-card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 18px 45px rgba(10,25,47,.12);
        }

        .property-image-wrap {
          position: relative;
          height: 235px;
          overflow: hidden;
          background: #e8e5dd;
        }

        .property-image-button {
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
          padding: 0;
          border: 0;
          cursor: pointer;
          overflow: hidden;
          background: #e8e5dd;
        }

        .property-image-button img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform .45s ease;
        }

        .property-card:hover
        .property-image-button img {
          transform: scale(1.06);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              rgba(0,0,0,.12),
              transparent 50%,
              rgba(0,0,0,.55)
            );
        }

        .image-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background:
            linear-gradient(
              135deg,
              #182a40,
              #b9974e
            );
          color: white;
          font-family: Georgia, serif;
          font-size: 22px;
        }

        .status-badge {
          position: absolute;
          left: 14px;
          top: 14px;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,.94);
          color: #0a192f;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .view-label {
          position: absolute;
          left: 15px;
          bottom: 14px;
          color: white;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .favorite-button {
          position: absolute;
          right: 14px;
          top: 14px;
          width: 36px;
          height: 36px;
          border: 1px solid rgba(255,255,255,.5);
          border-radius: 50%;
          background: rgba(10,25,47,.55);
          color: white;
          font-size: 20px;
          line-height: 1;
          cursor: pointer;
          z-index: 5;
          backdrop-filter: blur(8px);
        }

        .favorite-button.active {
          background: #b9974e;
          border-color: #b9974e;
        }

        /* ================================================
           CARD BODY
        ================================================ */

        .property-body {
          padding: 18px;
        }

        .property-heading {
          display: flex;
          justify-content: space-between;
          gap: 14px;
        }

        .property-main {
          min-width: 0;
        }

        .property-location {
          margin: 0 0 6px;
          color: #a17b3a;
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .07em;
        }

        .property-main h3 {
          margin: 0;
          color: #0a192f;
          font-family: Georgia, serif;
          font-size: 21px;
          line-height: 1.1;
          font-weight: 600;
        }

        .property-builder {
          margin: 7px 0 0;
          color: #8a929d;
          font-size: 9px;
          line-height: 1.4;
        }

        .property-price {
          flex: 0 0 auto;
          text-align: right;
        }

        .property-price strong {
          display: block;
          color: #0a192f;
          font-family: Georgia, serif;
          font-size: 16px;
          white-space: nowrap;
        }

        .property-price span {
          display: block;
          margin-top: 3px;
          color: #9ca2aa;
          font-size: 8px;
          white-space: nowrap;
        }

        .property-description {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin: 13px 0 0;
          color: #747d88;
          font-size: 11px;
          line-height: 1.6;
        }

        .property-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 15px;
        }

        .property-meta span {
          padding: 6px 8px;
          border-radius: 7px;
          background: #f5f3ee;
          color: #596473;
          font-size: 9px;
          font-weight: 700;
        }

        .property-amenities {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-top: 10px;
        }

        .property-amenities span {
          color: #9a7132;
          font-size: 8px;
          font-weight: 700;
        }

        .property-amenities span:not(:last-child)::after {
          content: " •";
          margin-left: 5px;
        }

        /* ================================================
           ACTIONS
        ================================================ */

        .property-actions {
          display: grid;
          grid-template-columns:
            1.2fr .8fr .65fr 1fr;
          gap: 6px;
          margin-top: 17px;
          padding-top: 14px;
          border-top: 1px solid #eeeae3;
        }

        .property-actions button,
        .property-actions a {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 35px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: .05em;
          text-transform: uppercase;
          cursor: pointer;
        }

        .quick-view-button {
          border: 0;
          background: #0a192f;
          color: white;
        }

        .details-button,
        .map-button {
          border: 1px solid #d9d6cf;
          background: white;
          color: #566170;
        }

        .enquire-button {
          background: #b9974e;
          color: white;
          border: 1px solid #b9974e;
        }

        /* ================================================
           EMPTY
        ================================================ */

        .empty-results {
          text-align: center;
          padding: 80px 20px;
          border: 1px dashed #d9d4ca;
          border-radius: 20px;
          background: rgba(255,255,255,.55);
        }

        .empty-icon {
          font-size: 35px;
          margin-bottom: 15px;
        }

        .empty-results h3 {
          margin: 0;
          font-family: Georgia, serif;
          font-size: 27px;
          font-weight: 500;
        }

        .empty-results p {
          max-width: 500px;
          margin: 10px auto 25px;
          color: #7e8792;
          font-size: 12px;
          line-height: 1.7;
        }

        .empty-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .empty-actions button,
        .empty-actions a {
          border: 0;
          border-radius: 999px;
          padding: 11px 18px;
          background: #0a192f;
          color: white;
          text-decoration: none;
          font-size: 10px;
          font-weight: 800;
          cursor: pointer;
        }

        .empty-actions a {
          background: #b9974e;
        }

        /* ================================================
           OFFICE
        ================================================ */

        .search-office {
          padding: 0 0 80px;
        }

        .office-card {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          overflow: hidden;
          border-radius: 22px;
          background: #0a192f;
          color: white;
          box-shadow:
            0 20px 50px rgba(10,25,47,.15);
        }

        .office-content {
          padding: 42px;
        }

        .office-content h2 {
          margin: 0;
          font-family: Georgia, serif;
          font-size: 32px;
          font-weight: 500;
        }

        .office-content > p:not(.results-eyebrow) {
          color: rgba(255,255,255,.65);
          font-size: 12px;
          line-height: 1.7;
        }

        .office-address {
          margin-top: 22px;
        }

        .office-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 25px;
        }

        .office-actions a {
          padding: 9px 13px;
          border-radius: 999px;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.12);
          color: white;
          text-decoration: none;
          font-size: 9px;
          font-weight: 800;
        }

        .office-map {
          min-height: 300px;
          background: #ddd;
        }

        .office-map iframe {
          display: block;
        }

        /* ================================================
           TABLET
        ================================================ */

        @media (max-width: 950px) {

          .property-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .advanced-search-box {
            flex-wrap: wrap;
          }

          .search-location {
            min-width: 130px;
          }

          .search-divider {
            display: none;
          }

          .search-main-input {
            min-width: 250px;
          }

          .search-submit {
            width: 100%;
          }

          .office-card {
            grid-template-columns: 1fr;
          }
        }

        /* ================================================
           MOBILE
        ================================================ */

        @media (max-width: 640px) {

          .search-container {
            width: min(
              100% - 22px,
              1220px
            );
          }

          .search-hero {
            padding: 110px 0 35px;
          }

          .search-title {
            font-size: 2.8rem;
          }

          .advanced-search-box {
            padding: 7px;
            border-radius: 17px;
          }

          .search-location {
            width: 100%;
            padding: 10px 13px;
          }

          .search-main-input {
            width: 100%;
            min-width: 0;
          }

          .search-main-input input {
            font-size: 13px;
          }

          .search-submit {
            min-width: 0;
          }

          .filter-top {
            align-items: flex-start;
            flex-direction: column;
          }

          .purpose-tabs {
            width: 100%;
            overflow-x: auto;
          }

          .purpose-tab {
            flex: 1;
            white-space: nowrap;
          }

          .result-sort {
            width: 100%;
            justify-content: space-between;
          }

          .filter-row {
            align-items: flex-start;
            flex-direction: column;
          }

          .reset-button {
            margin-left: 0;
          }

          .property-grid {
            grid-template-columns: 1fr;
          }

          .property-image-wrap {
            height: 235px;
          }

          .property-heading {
            flex-direction: column;
          }

          .property-price {
            text-align: left;
          }

          .property-price strong {
            font-size: 18px;
          }

          .property-actions {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .office-content {
            padding: 28px 22px;
          }

          .office-content h2 {
            font-size: 27px;
          }
        }

      `}</style>
    </main>
  );
}