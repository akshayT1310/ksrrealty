import React, { useEffect, useState } from "react";

export default function HeroSection({
  activeTab,
  setActiveTab,
  subTab,
  setSubTab,
  searchQuery,
  setSearchQuery,
  searchType,
  setSearchType,
  handleSearch,
}) {
  const [sellPropertyType, setSellPropertyType] = useState("");
  const [sellMobile, setSellMobile] = useState("");
  const [sellName, setSellName] = useState("");
  const [sellRequirement, setSellRequirement] = useState("");
  const [sellSubmitted, setSellSubmitted] = useState(false);

  const [bgIndex, setBgIndex] = useState(0);

  const whatsappNumber = "919XXXXXXXXX";

  const bgSlides = [
    "https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4",
   
  ];

  /* =========================================================
     BACKGROUND SLIDER
  ========================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((current) => (current + 1) % bgSlides.length);
    }, 30000);

    return () => clearInterval(timer);
  }, [bgSlides.length]);

  /* =========================================================
     SELL PROPERTY
  ========================================================= */

  const handleSellSubmit = (e) => {
    e.preventDefault();

    if (
      !sellPropertyType ||
      !/^[6-9]\d{9}$/.test(sellMobile) ||
      !sellName.trim()
    ) {
      alert("Please fill all required fields correctly.");
      return;
    }

    const payload = {
      id: Date.now(),
      name: sellName.trim(),
      mobile: sellMobile,
      propertyType: sellPropertyType,
      requirement: sellRequirement.trim() || "Not provided",
      createdAt: new Date().toLocaleString(),
    };

    try {
      const old = JSON.parse(
        localStorage.getItem("ksr_sell_enquiries") || "[]"
      );

      localStorage.setItem(
        "ksr_sell_enquiries",
        JSON.stringify([payload, ...old])
      );
    } catch (error) {
      console.error("Unable to save enquiry:", error);
    }

    if (whatsappNumber !== "919XXXXXXXXX") {
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          `Hello KSR Realty Ventures,

I want to list my property.

Property Type: ${payload.propertyType}
Name: ${payload.name}
Mobile: ${payload.mobile}
Requirement: ${payload.requirement}`
        )}`,
        "_blank"
      );
    }

    setSellSubmitted(true);

    setSellPropertyType("");
    setSellMobile("");
    setSellName("");
    setSellRequirement("");
  };

  /* =========================================================
     BUY SEARCH
  ========================================================= */

  const handleBuySearch = (e) => {
    e.preventDefault();

    if (typeof handleSearch === "function") {
      handleSearch(e);
    }
  };

  /* =========================================================
     TAB CHANGE
  ========================================================= */

  const changeTab = (tab) => {
    setActiveTab(tab);

    if (tab === "buy") {
      setSellSubmitted(false);
    }
  };

  /* =========================================================
     QUICK LOCATION
  ========================================================= */

  const setQuickLocation = (location) => {
    setSearchQuery(location);
  };

  return (
    <section className="ksr-hero">

      {/* =====================================================
          VIDEO BACKGROUND
      ===================================================== */}

      <div className="hero-video-layer" aria-hidden="true">

        {bgSlides.map((src, index) => (
          <video
            key={src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className={`hero-video ${
              index === bgIndex ? "hero-video-active" : ""
            }`}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}

        <div className="hero-overlay" />
        <div className="hero-vignette" />

      </div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="container-trs hero-container">

        <div className="hero-content">

          {/* BADGE */}

          <div className="hero-badge">

            <span className="badge-dot" />

            <span>Indore's Most Trusted</span>

            <span className="badge-separator">•</span>

            <span>RERA Verified</span>

            <span className="badge-separator">•</span>

            <span>3000+ Listings</span>

          </div>

          {/* =================================================
              HEADING
          ================================================= */}

          <h1 className="hero-heading">

            <span className="heading-line heading-line-1">
              Curating
            </span>

            <span className="heading-line heading-line-2">
              Indore's Finest
            </span>

            <span className="heading-line heading-accent">
              Addresses.
            </span>

          </h1>

          {/* SUBTITLE */}

          <p className="hero-sub">

            From skyline penthouses in Super Corridor to legacy villas —

            <strong> we secure your legacy.</strong>

          </p>

          {/* =================================================
              PROPERTY SEARCH CARD
          ================================================= */}

          <div className="hero-card">

            {/* =================================================
                TOP BUY / SELL
            ================================================= */}

            <div className="hero-tabs">

              <button
                type="button"
                className={`hero-tab ${
                  activeTab === "buy"
                    ? "hero-tab-active-buy"
                    : ""
                }`}
                onClick={() => changeTab("buy")}
              >

                <span className="tab-icon">
                  ⌂
                </span>

                <span className="tab-copy">

                  <small>
                    FIND YOUR
                  </small>

                  <strong>
                    BUY PROPERTY
                  </strong>

                </span>

              </button>

              <button
                type="button"
                className={`hero-tab ${
                  activeTab === "sell"
                    ? "hero-tab-active-sell"
                    : ""
                }`}
                onClick={() => changeTab("sell")}
              >

                <span className="tab-icon">
                  ◆
                </span>

                <span className="tab-copy">

                  <small>
                    FOR PROPERTY OWNERS
                  </small>

                  <strong>
                    SELL PROPERTY
                  </strong>

                </span>

              </button>

            </div>

            {/* =================================================
                CARD CONTENT
            ================================================= */}

            <div className="card-inner">

              {/* =================================================
                  BUY
              ================================================= */}

              {activeTab === "buy" && (

                <div className="buy-panel">

                  {/* =================================================
                      BUY FILTER ROW
                  ================================================= */}

                  <div className="buy-filter-row">

                    <div className="buy-city">

                      <span className="city-icon">
                        ⌖
                      </span>

                      <strong>
                        Indore
                      </strong>

                    </div>

                    <div className="buy-subtabs">

                      {[
                        ["all", "ALL"],
                        ["buy", "BUY"],
                        ["rent", "RENT / LEASE"],
                      ].map(([value, label]) => (

                        <button
                          key={value}
                          type="button"
                          className={`buy-subtab ${
                            subTab === value
                              ? "active"
                              : ""
                          }`}
                          onClick={() =>
                            setSubTab(value)
                          }
                        >
                          {label}
                        </button>

                      ))}

                    </div>

                  </div>

                  {/* =================================================
                      SEARCH FORM — ROW WISE
                  ================================================= */}

                  <form
                    onSubmit={handleBuySearch}
                    className="search-row"
                  >

                    {/* CITY */}

                    <div className="search-field city-field">

                      <span className="search-icon">
                        ⌖
                      </span>

                      <select
                        className="hero-input"
                        defaultValue="Indore"
                      >
                        <option>
                          Indore
                        </option>

                        <option>
                          Bhopal
                        </option>

                        <option>
                          Ujjain
                        </option>

                      </select>

                    </div>

                    {/* PROPERTY TYPE */}

                    <div className="search-field type-field">

                      <span className="search-icon">
                        ⌂
                      </span>

                      <select
                        value={searchType}
                        onChange={(e) =>
                          setSearchType(
                            e.target.value
                          )
                        }
                        className="hero-input"
                      >

                        <option value="">
                          All Types
                        </option>

                        <option value="Flat">
                          Apartment / Flat
                        </option>

                        <option value="Villa">
                          Luxury Villa
                        </option>

                        <option value="Plot">
                          Residential Plot
                        </option>

                        <option value="Office">
                          Commercial Office
                        </option>

                        <option value="Shop">
                          Retail Shop
                        </option>

                        <option value="Land">
                          Commercial Land
                        </option>

                      </select>

                    </div>

                    {/* LOCATION */}

                    <div className="search-field location-field">

                      <span className="search-icon">
                        ⌕
                      </span>

                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) =>
                          setSearchQuery(
                            e.target.value
                          )
                        }
                        placeholder="Search locality, project, builder..."
                        className="hero-input search-input"
                      />

                    </div>

                    {/* SEARCH */}

                    <button
                      type="submit"
                      className="search-button"
                    >

                      <span>
                        SEARCH
                      </span>

                      <b>
                        →
                      </b>

                    </button>

                  </form>

                  {/* =================================================
                      QUICK SEARCH
                  ================================================= */}

                  <div className="quick-search">

                    <span>
                      Popular:
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        setQuickLocation(
                          "Super Corridor"
                        )
                      }
                    >
                      Super Corridor
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setQuickLocation(
                          "Vijay Nagar"
                        )
                      }
                    >
                      Vijay Nagar
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setQuickLocation(
                          "Nipania"
                        )
                      }
                    >
                      Nipania
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setQuickLocation(
                          "Bypass"
                        )
                      }
                    >
                      Bypass
                    </button>

                  </div>

                </div>
              )}

              {/* =================================================
                  SELL
              ================================================= */}

              {activeTab === "sell" && (

                <>
                  {!sellSubmitted ? (

                    <form
                      onSubmit={handleSellSubmit}
                      className="sell-panel"
                    >

                      <div className="sell-heading">

                        <div>

                          <span className="sell-kicker">
                            PRIVATE PROPERTY DESK
                          </span>

                          <h3>
                            Let us position your property
                          </h3>

                        </div>

                        <div className="sell-badge">
                          RERA
                          <br />
                          <span>
                            VERIFIED
                          </span>
                        </div>

                      </div>

                      <div className="sell-fields">

                        <div className="sell-field">

                          <label>
                            Property Type
                          </label>

                          <select
                            value={sellPropertyType}
                            onChange={(e) =>
                              setSellPropertyType(
                                e.target.value
                              )
                            }
                            required
                          >

                            <option value="">
                              Select Property
                            </option>

                            <option value="Villa">
                              Luxury Villa
                            </option>

                            <option value="Apartment">
                              Apartment
                            </option>

                            <option value="Plot">
                              Residential Plot
                            </option>

                            <option value="Office">
                              Commercial Office
                            </option>

                            <option value="Shop">
                              Retail Shop
                            </option>

                          </select>

                        </div>

                        <div className="sell-field">

                          <label>
                            Your Name
                          </label>

                          <input
                            required
                            value={sellName}
                            onChange={(e) =>
                              setSellName(
                                e.target.value
                              )
                            }
                            placeholder="Enter your name"
                          />

                        </div>

                        <div className="sell-field">

                          <label>
                            Mobile Number
                          </label>

                          <div className="mobile-input">

                            <span>
                              +91
                            </span>

                            <input
                              required
                              inputMode="numeric"
                              maxLength={10}
                              value={sellMobile}
                              onChange={(e) =>
                                setSellMobile(
                                  e.target.value
                                    .replace(/\D/g, "")
                                    .slice(0, 10)
                                )
                              }
                              placeholder="10 digit number"
                            />

                          </div>

                        </div>

                      </div>

                      <div className="sell-bottom">

                        <input
                          value={sellRequirement}
                          onChange={(e) =>
                            setSellRequirement(
                              e.target.value
                            )
                          }
                          placeholder="Location, property size, expected price..."
                        />

                        <button
                          type="submit"
                          className="submit-button"
                        >

                          <span>
                            SUBMIT PROPERTY
                          </span>

                          <b>
                            →
                          </b>

                        </button>

                      </div>

                      <p className="privacy-note">
                        Your details remain confidential.
                        Our property advisor will contact
                        you shortly.
                      </p>

                    </form>

                  ) : (

                    <div className="success-panel">

                      <div className="success-icon">
                        ✓
                      </div>

                      <h3>
                        Property enquiry received
                      </h3>

                      <p>
                        Your property details have been
                        securely submitted. Our advisor
                        will contact you within 24 hours.
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          setSellSubmitted(false)
                        }
                        className="again-button"
                      >
                        LIST ANOTHER PROPERTY →
                      </button>

                    </div>

                  )}

                </>
              )}

            </div>

          </div>

          {/* =================================================
              STATS
          ================================================= */}

          <div className="hero-stats">

            <div>
              <b>
                3,000+
              </b>

              <span>
                Curated Listings
              </span>
            </div>

            <i />

            <div>
              <b>
                100+
              </b>

              <span>
                Trusted Builders
              </span>
            </div>

            <i />

            <div>
              <b>
                1,000+
              </b>

              <span>
                Happy Clients
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <div className="hero-marquee">

        <div className="marquee-track">

          <div className="marquee-content">

            KSR REALTY VENTURES
            <b>•</b>

            INDORE'S MOST TRUSTED
            <b>•</b>

            RERA VERIFIED
            <b>•</b>

            3000+ PREMIUM LISTINGS
            <b>•</b>

            SUPER CORRIDOR
            <b>•</b>

            VIJAY NAGAR
            <b>•</b>

            BYPASS
            <b>•</b>

            LUXURY VILLAS
            <b>•</b>

            SKY RESIDENCES
            <b>•</b>

            AGARWAL INDIA
            <b>•</b>

            MIRCHANDANI GROUP
            <b>•</b>

            SKYE EARTH DEVELOPERS
            <b>•</b>

            BCM GROUP
            <b>•</b>

            SARTHAK SINGAPORE GROUP
            <b>•</b>

            HIGHWAY INFRASTRUCTURES
            <b>•</b>

            NM GROUP

          </div>

          <div
            className="marquee-content"
            aria-hidden="true"
          >

            KSR REALTY VENTURES
            <b>•</b>

            INDORE'S MOST TRUSTED
            <b>•</b>

            RERA VERIFIED
            <b>•</b>

            3000+ PREMIUM LISTINGS
            <b>•</b>

            SUPER CORRIDOR
            <b>•</b>

            VIJAY NAGAR
            <b>•</b>

            BYPASS
            <b>•</b>

            LUXURY VILLAS
            <b>•</b>

            SKY RESIDENCES
            <b>•</b>

            AGARWAL INDIA
            <b>•</b>

            MIRCHANDANI GROUP
            <b>•</b>

            SKYE EARTH DEVELOPERS
            <b>•</b>

            BCM GROUP
            <b>•</b>

            SARTHAK SINGAPORE GROUP
            <b>•</b>

            HIGHWAY INFRASTRUCTURES
            <b>•</b>

            NM GROUP

          </div>

        </div>

      </div>

      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

/* =========================================================
   GLOBAL
========================================================= */

.ksr-hero,
.ksr-hero * {
  box-sizing: border-box;
}

.ksr-hero {
  --navy: #071522;
  --navy-2: #102e50;
  --gold: #c59a43;
  --gold-light: #e4bd68;
  --white: #ffffff;
  --paper: #f8f7f3;
  --ink: #122033;

  position: relative;

  width: 100%;

  min-height: 760px;

  overflow: hidden;

  isolation: isolate;

  background: var(--navy);

  font-family:
    Inter,
    "Segoe UI",
    Arial,
    sans-serif;

  -webkit-tap-highlight-color: transparent;
}

/* =========================================================
   CONTAINER
========================================================= */

.container-trs {
  width: min(
    1180px,
    calc(100% - 32px)
  );

  margin: 0 auto;
}

.hero-container {
  position: relative;

  z-index: 5;

  padding-top: 90px;

  padding-bottom: 105px;
}

.hero-content {
  display: flex;

  flex-direction: column;

  align-items: center;

  text-align: center;
}

/* =========================================================
   VIDEO
========================================================= */

.hero-video-layer {
  position: absolute;

  inset: 0;

  z-index: -5;

  overflow: hidden;

  pointer-events: none;

  background: #06111d;
}

.hero-video {
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;

  opacity: 0;

  transform: scale(1);

  transition:
    opacity 1.3s ease,
    transform 30s linear;

  pointer-events: none;
}

.hero-video-active {
  opacity: 1;

  transform: scale(1.06);
}

.hero-overlay {
  position: absolute;

  inset: 0;

  pointer-events: none;

  background:
    linear-gradient(
      180deg,
      rgba(3,12,23,.28),
      rgba(3,12,23,.48) 45%,
      rgba(3,12,23,.86) 88%,
      #06111d 100%
    );
}

.hero-vignette {
  position: absolute;

  inset: 0;

  pointer-events: none;

  background:
    radial-gradient(
      circle at 50% 35%,
      transparent 10%,
      rgba(0,0,0,.55) 100%
    );
}

/* =========================================================
   BADGE
========================================================= */

.hero-badge {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  flex-wrap: wrap;

  gap: 8px;

  padding: 8px 15px;

  border:
    1px solid rgba(197,154,67,.42);

  border-radius: 999px;

  background:
    rgba(255,255,255,.07);

  backdrop-filter: blur(14px);

  color:
    rgba(255,255,255,.9);

  font-size: 8px;

  font-weight: 800;

  letter-spacing: .13em;

  text-transform: uppercase;
}

.badge-dot {
  width: 6px;
  height: 6px;

  flex: 0 0 6px;

  border-radius: 50%;

  background: #28d47a;

  box-shadow:
    0 0 10px rgba(40,212,122,.8);
}

.badge-separator {
  color: var(--gold);
}

/* =========================================================
   HEADING
========================================================= */

.hero-heading {
  display: flex;

  flex-direction: column;

  align-items: center;

  margin: 18px 0 0;

  font-family:
    "Cormorant Garamond",
    Georgia,
    "Times New Roman",
    serif;

  font-size:
    clamp(
      3.4rem,
      6.8vw,
      6.1rem
    );

  line-height: .84;

  letter-spacing: -.055em;

  font-weight: 500;

  color: #fff;

  text-shadow:
    0 15px 45px rgba(0,0,0,.45);
}

.heading-line {
  display: block;
}

.heading-accent {
  margin-top: 8px;

  color: var(--gold-light);

  font-style: italic;

  font-weight: 400;
}

/* =========================================================
   SUBTITLE
========================================================= */

.hero-sub {
  width: min(
    610px,
    100%
  );

  margin: 22px auto 0;

  color:
    rgba(255,255,255,.72);

  font-size: 14px;

  line-height: 1.65;

  font-weight: 400;
}

.hero-sub strong {
  color: #fff;

  font-weight: 700;
}

/* =========================================================
   HERO CARD
========================================================= */

.hero-card {
  position: relative;

  width: 100%;

  max-width: 1040px;

  margin-top: 38px;

  overflow: hidden;

  border:
    1px solid rgba(255,255,255,.88);

  border-radius: 18px;

  background: #fff;

  box-shadow:
    0 35px 90px rgba(0,0,0,.42),
    0 10px 35px rgba(0,0,0,.18);

  animation:
    cardReveal .8s ease both;

  z-index: 10;
}

@keyframes cardReveal {
  from {
    opacity: 0;

    transform:
      translateY(25px);
  }

  to {
    opacity: 1;

    transform:
      translateY(0);
  }
}

/* =========================================================
   TOP BUY / SELL
========================================================= */

.hero-tabs {
  display: grid;

  grid-template-columns:
    1fr 1fr;

  width: 100%;

  min-height: 90px;
}

.hero-tab {
  position: relative;

  min-width: 0;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 12px;

  padding: 14px 20px;

  border: 0;

  border-bottom: 3px solid transparent;

  cursor: pointer;

  background: #f1f0ec;

  color: #7e8288;

  transition:
    background .25s ease,
    color .25s ease;

  font-family: inherit;
}

.hero-tab:first-child {
  border-right:
    1px solid rgba(0,0,0,.08);
}

.hero-tab:hover {
  background: #ebe9e3;
}

.hero-tab-active-buy {
  color: #fff;

  border-bottom-color:
    var(--gold);

  background:
    linear-gradient(
      135deg,
      #071b34,
      #173f6b
    );
}

.hero-tab-active-sell {
  color: #fff;

  border-bottom-color:
    var(--gold);

  background:
    linear-gradient(
      135deg,
      #674a20,
      #8c682c
    );
}

.tab-icon {
  width: 34px;
  height: 34px;

  flex: 0 0 34px;

  display: flex;

  align-items: center;

  justify-content: center;

  border:
    1px solid currentColor;

  border-radius: 50%;

  font-size: 14px;
}

.tab-copy {
  display: flex;

  flex-direction: column;

  align-items: flex-start;

  gap: 4px;

  text-align: left;
}

.tab-copy small {
  font-size: 8px;

  font-weight: 700;

  letter-spacing: .14em;

  opacity: .62;

  text-transform: uppercase;
}

.tab-copy strong {
  font-size: 13px;

  font-weight: 900;

  letter-spacing: .09em;

  text-transform: uppercase;
}

/* =========================================================
   CARD INNER
========================================================= */

.card-inner {
  width: 100%;

  background: #fff;
}

/* =========================================================
   BUY PANEL
========================================================= */

.buy-panel {
  width: 100%;

  padding: 0 20px 17px;

  background: #fff;
}

/* =========================================================
   BUY FILTER
========================================================= */

.buy-filter-row {
  min-height: 56px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 18px;

  border-bottom:
    1px solid rgba(10,25,45,.1);
}

.buy-city {
  display: flex;

  align-items: center;

  gap: 8px;

  flex: 0 0 auto;

  color: #17253a;

  font-size: 13px;
}

.city-icon {
  color: var(--gold);

  font-size: 17px;
}

.buy-subtabs {
  display: flex;

  align-items: center;

  gap: 22px;

  min-width: 0;
}

.buy-subtab {
  position: relative;

  height: 56px;

  padding: 0;

  border: 0;

  background: transparent;

  color: #737981;

  cursor: pointer;

  font-family: inherit;

  font-size: 11px;

  font-weight: 700;

  letter-spacing: .04em;

  white-space: nowrap;
}

.buy-subtab::after {
  content: "";

  position: absolute;

  left: 0;

  right: 0;

  bottom: 0;

  height: 2px;

  background: transparent;

  transform: scaleX(0);

  transition: transform .2s ease;
}

.buy-subtab.active {
  color: #13243b;
}

.buy-subtab.active::after {
  background: var(--gold);

  transform: scaleX(1);
}

/* =========================================================
   SEARCH ROW
   DESKTOP = ONE ROW
========================================================= */

.search-row {
  width: 100%;

  display: grid;

  grid-template-columns:
    145px
    150px
    minmax(0, 1fr)
    110px;

  align-items: stretch;

  margin-top: 10px;

  border:
    1px solid rgba(12,29,49,.1);

  border-radius: 12px;

  background: #fafaf8;

  overflow: hidden;
}

/* =========================================================
   SEARCH FIELD
========================================================= */

.search-field {
  position: relative;

  min-width: 0;

  height: 49px;

  display: flex;

  align-items: center;

  background: #fafaf8;

  border-right:
    1px solid rgba(12,29,49,.1);
}

.search-icon {
  position: absolute;

  left: 13px;

  color: var(--gold);

  font-size: 14px;

  pointer-events: none;

  z-index: 2;
}

.hero-input {
  width: 100%;

  height: 100%;

  min-width: 0;

  padding:
    0 10px 0 36px;

  border: 0;

  outline: none;

  background: transparent;

  color: #1d2b3d;

  font-family: inherit;

  font-size: 11px;

  font-weight: 600;
}

.hero-input::placeholder {
  color: #9ca2aa;

  opacity: 1;
}

.hero-input:focus {
  background: #fff;
}

.hero-input option {
  color: #172334;
}

/* =========================================================
   SEARCH BUTTON
========================================================= */

.search-button {
  height: 49px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 9px;

  border: 0;

  background:
    linear-gradient(
      135deg,
      #071a31,
      #123f6d
    );

  color: #fff;

  cursor: pointer;

  font-family: inherit;

  font-size: 10px;

  font-weight: 900;

  letter-spacing: .08em;

  transition:
    filter .2s ease;
}

.search-button:hover {
  filter: brightness(1.1);
}

.search-button b {
  font-size: 18px;

  font-weight: 400;
}

/* =========================================================
   QUICK SEARCH
========================================================= */

.quick-search {
  display: flex;

  align-items: center;

  flex-wrap: wrap;

  gap: 15px;

  margin-top: 10px;

  min-height: 20px;
}

.quick-search > span {
  color: #9b9fa5;

  font-size: 9px;

  font-weight: 600;
}

.quick-search button {
  padding: 0;

  border: 0;

  border-bottom:
    1px solid rgba(197,154,67,.55);

  background: transparent;

  color: #6e747b;

  cursor: pointer;

  font-family: inherit;

  font-size: 9px;

  font-weight: 600;
}

.quick-search button:hover {
  color: #98762f;
}

/* =========================================================
   SELL
========================================================= */

.sell-panel {
  width: 100%;

  padding: 18px 20px;

  background: #fff;
}

.sell-heading {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;

  margin-bottom: 15px;
}

.sell-kicker {
  color: var(--gold);

  font-size: 8px;

  font-weight: 900;

  letter-spacing: .16em;
}

.sell-heading h3 {
  margin: 4px 0 0;

  color: #0a192f;

  font-family:
    "Cormorant Garamond",
    Georgia,
    serif;

  font-size: 23px;

  line-height: 1.05;

  font-weight: 600;
}

.sell-badge {
  min-width: 48px;

  padding: 6px;

  border:
    1px solid var(--gold);

  border-radius: 7px;

  color: #0a192f;

  font-size: 7px;

  font-weight: 900;

  line-height: 1.1;
}

.sell-badge span {
  color: #9c772f;

  font-size: 5px;
}

.sell-fields {
  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 9px;
}

.sell-field label {
  display: block;

  margin:
    0 0 5px 3px;

  color: #777e86;

  font-size: 8px;

  font-weight: 800;

  letter-spacing: .08em;

  text-transform: uppercase;
}

.sell-field select,
.sell-field input {
  width: 100%;

  height: 43px;

  padding: 0 12px;

  border:
    1px solid rgba(0,0,0,.1);

  border-radius: 9px;

  outline: none;

  background: #f7f6f2;

  color: #1c2939;

  font-family: inherit;

  font-size: 10px;
}

.mobile-input {
  width: 100%;

  height: 43px;

  display: flex;

  align-items: center;

  overflow: hidden;

  border:
    1px solid rgba(0,0,0,.1);

  border-radius: 9px;

  background: #f7f6f2;
}

.mobile-input span {
  height: 100%;

  display: flex;

  align-items: center;

  padding: 0 9px;

  border-right:
    1px solid rgba(0,0,0,.08);

  color: #777e86;

  font-size: 10px;

  font-weight: 800;
}

.mobile-input input {
  min-width: 0;

  flex: 1;

  height: 100%;

  padding: 0 10px;

  border: 0;

  outline: 0;

  background: transparent;
}

.sell-bottom {
  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    175px;

  gap: 9px;

  margin-top: 10px;
}

.sell-bottom > input {
  width: 100%;

  height: 43px;

  padding: 0 12px;

  border:
    1px solid rgba(0,0,0,.1);

  border-radius: 9px;

  outline: none;

  background: #f7f6f2;

  font-family: inherit;

  font-size: 10px;
}

.submit-button {
  height: 43px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 8px;

  border: 0;

  border-radius: 9px;

  background:
    linear-gradient(
      135deg,
      #60431d,
      #9b7534
    );

  color: #fff;

  cursor: pointer;

  font-size: 8px;

  font-weight: 900;

  letter-spacing: .08em;
}

.submit-button b {
  font-size: 16px;

  font-weight: 400;
}

.privacy-note {
  margin: 7px 0 0;

  color: #a0a4aa;

  font-size: 7px;
}

/* =========================================================
   SUCCESS
========================================================= */

.success-panel {
  min-height: 220px;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  padding: 25px;

  text-align: center;
}

.success-icon {
  width: 42px;
  height: 42px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 50%;

  background: #153e69;

  color: #fff;

  font-size: 20px;
}

.success-panel h3 {
  margin: 10px 0 0;

  color: #0a192f;

  font-family:
    "Cormorant Garamond",
    Georgia,
    serif;

  font-size: 22px;

  font-weight: 600;
}

.success-panel p {
  max-width: 440px;

  margin: 5px auto;

  color: #858b92;

  font-size: 10px;

  line-height: 1.5;
}

.again-button {
  margin-top: 10px;

  border: 0;

  background: transparent;

  color: #98752f;

  cursor: pointer;

  font-size: 8px;

  font-weight: 900;

  letter-spacing: .1em;
}

/* =========================================================
   STATS
========================================================= */

.hero-stats {
  margin-top: 26px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 30px;
}

.hero-stats > div {
  text-align: center;
}

.hero-stats b {
  display: block;

  color: #fff;

  font-family:
    "Cormorant Garamond",
    Georgia,
    serif;

  font-size: 1.55rem;

  line-height: 1;

  font-weight: 500;
}

.hero-stats span {
  display: block;

  margin-top: 5px;

  color:
    rgba(255,255,255,.5);

  font-size: 7px;

  letter-spacing: .13em;

  text-transform: uppercase;

  font-weight: 800;
}

.hero-stats i {
  width: 1px;

  height: 30px;

  background:
    rgba(255,255,255,.18);
}

/* =========================================================
   MARQUEE
========================================================= */

.hero-marquee {
  position: absolute;

  left: 0;
  right: 0;
  bottom: 0;

  z-index: 20;

  overflow: hidden;

  padding: 10px 0;

  border-top:
    1px solid rgba(255,255,255,.08);

  background:
    rgba(0,0,0,.35);

  backdrop-filter: blur(10px);

  pointer-events: none;
}

.marquee-track {
  display: flex;

  width: max-content;

  animation:
    marquee 60s linear infinite;
}

.marquee-content {
  display: flex;

  align-items: center;

  gap: 18px;

  padding-right: 18px;

  white-space: nowrap;

  color: #d6b871;

  font-size: 8px;

  letter-spacing: .15em;

  font-weight: 800;

  text-transform: uppercase;
}

.marquee-content b {
  color:
    rgba(214,184,113,.45);
}

@keyframes marquee {

  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }

}

/* =========================================================
   TABLET
========================================================= */

@media (max-width: 900px) {

  .hero-container {
    padding-top: 80px;
  }

  .hero-card {
    max-width: 850px;
  }

  .search-row {
    grid-template-columns:
      130px
      140px
      minmax(0, 1fr)
      100px;
  }

  .buy-panel {
    padding-inline: 15px;
  }

}

/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 768px) {

  .ksr-hero {
    min-height: 850px;

    overflow-x: hidden;

    overflow-y: visible;

    touch-action: pan-y;
  }

  .container-trs {
    width:
      calc(100% - 22px);
  }

  .hero-container {
    padding-top: 65px;

    padding-bottom: 88px;
  }

  /* -------------------------
     BADGE
  ------------------------- */

  .hero-badge {
    max-width: 96%;

    gap: 5px;

    padding: 7px 10px;

    font-size: 6px;

    letter-spacing: .1em;
  }

  /* -------------------------
     HEADING
  ------------------------- */

  .hero-heading {
    margin-top: 16px;

    font-size:
      clamp(
        2.8rem,
        12vw,
        4rem
      );

    line-height: .88;
  }

  .heading-accent {
    margin-top: 5px;
  }

  .hero-sub {
    max-width: 500px;

    margin-top: 16px;

    padding-inline: 7px;

    font-size: 11px;

    line-height: 1.55;
  }

  /* =====================================================
     MOBILE CARD
  ===================================================== */

  .hero-card {
    width: 100%;

    margin-top: 22px;

    border-radius: 16px;

    overflow: hidden;

    height: auto;

    min-height: 0;
  }

  /* =====================================================
     BUY / SELL TABS
  ===================================================== */

  .hero-tabs {
    min-height: 62px;

    height: 62px;
  }

  .hero-tab {
    gap: 7px;

    padding: 8px 7px;
  }

  .tab-icon {
    width: 26px;
    height: 26px;

    flex: 0 0 26px;

    font-size: 11px;
  }

  .tab-copy {
    gap: 2px;
  }

  .tab-copy small {
    font-size: 5.5px;

    letter-spacing: .08em;
  }

  .tab-copy strong {
    font-size: 8px;

    letter-spacing: .04em;
  }

  /* =====================================================
     CARD
  ===================================================== */

  .card-inner {
    height: auto;

    overflow: visible;
  }

  /* =====================================================
     BUY PANEL
  ===================================================== */

  .buy-panel {
    padding:
      0 10px 12px;
  }

  /* =====================================================
     FILTER ROW
  ===================================================== */

  .buy-filter-row {
    min-height: 47px;

    height: 47px;

    gap: 8px;
  }

  .buy-city {
    font-size: 10px;

    gap: 5px;
  }

  .city-icon {
    font-size: 14px;
  }

  .buy-subtabs {
    gap: 10px;

    overflow: hidden;
  }

  .buy-subtab {
    height: 47px;

    font-size: 7px;

    letter-spacing: .02em;
  }

  /* =====================================================
     SEARCH ROW — STILL ONE ROW
  ===================================================== */

  .search-row {
    display: grid;

    grid-template-columns:
      105px
      112px
      minmax(0, 1fr)
      82px;

    gap: 0;

    width: 100%;

    margin-top: 9px;

    border-radius: 9px;
  }

  .search-field {
    height: 43px;

    border-right:
      1px solid rgba(12,29,49,.1);
  }

  .search-icon {
    left: 8px;

    font-size: 12px;
  }

  .hero-input {
    padding-left: 26px;

    padding-right: 4px;

    font-size: 8px;

    font-weight: 600;

    text-overflow: ellipsis;
  }

  .search-input {
    padding-left: 27px;
  }

  .search-button {
    height: 43px;

    gap: 5px;

    font-size: 7px;

    letter-spacing: .04em;
  }

  .search-button b {
    font-size: 13px;
  }

  /* =====================================================
     QUICK SEARCH
  ===================================================== */

  .quick-search {
    gap: 9px;

    margin-top: 8px;

    min-height: 17px;

    overflow: hidden;

    flex-wrap: nowrap;
  }

  .quick-search > span,
  .quick-search button {
    flex: 0 0 auto;

    font-size: 6.5px;
  }

  /* =====================================================
     SELL
  ===================================================== */

  .sell-panel {
    padding:
      14px 11px;
  }

  .sell-heading {
    margin-bottom: 12px;
  }

  .sell-kicker {
    font-size: 6px;
  }

  .sell-heading h3 {
    font-size: 17px;
  }

  .sell-badge {
    display: none;
  }

  .sell-fields {
    grid-template-columns: 1fr;

    gap: 8px;
  }

  .sell-field label {
    font-size: 7px;
  }

  .sell-field select,
  .sell-field input,
  .mobile-input {
    height: 39px;

    font-size: 9px;
  }

  .sell-bottom {
    grid-template-columns: 1fr;

    gap: 8px;
  }

  .sell-bottom > input,
  .submit-button {
    height: 39px;
  }

  .submit-button {
    font-size: 7px;
  }

  .privacy-note {
    font-size: 6.5px;
  }

  /* =====================================================
     STATS
  ===================================================== */

  .hero-stats {
    width: 100%;

    margin-top: 18px;

    gap: 13px;
  }

  .hero-stats b {
    font-size: 1.05rem;
  }

  .hero-stats span {
    margin-top: 4px;

    font-size: 5.5px;

    letter-spacing: .05em;
  }

  .hero-stats i {
    height: 23px;
  }

}

/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 520px) {

  .ksr-hero {
    min-height: 820px;
  }

  .container-trs {
    width:
      calc(100% - 16px);
  }

  .hero-container {
    padding-top: 55px;

    padding-bottom: 82px;
  }

  .hero-badge {
    padding: 6px 9px;

    font-size: 5.5px;

    gap: 4px;
  }

  .hero-heading {
    font-size:
      clamp(
        2.35rem,
        12.5vw,
        3.3rem
      );

    line-height: .9;
  }

  .hero-sub {
    margin-top: 13px;

    font-size: 10px;
  }
/* =====================================================
   SMALL MOBILE — PERFECT HERO TABS
   520px AND BELOW
===================================================== */

@media (max-width: 520px) {

  /* ================================
     HERO CARD
  ================================= */

  .hero-card {
    width: 100%;
    margin-top: 16px;

    border-radius: 14px;

    overflow: hidden;

    /* prevent horizontal stretching */
    max-width: 100%;

    box-sizing: border-box;
  }


  /* ================================
     TABS CONTAINER
  ================================= */

  .hero-tabs {
    width: 100%;

    height: 58px;
    min-height: 58px;

    display: grid;

    /*
      EXACTLY 50 / 50
      Both sections same size
    */
    grid-template-columns: repeat(2, minmax(0, 1fr));

    gap: 0;

    overflow: hidden;
  }


  /* ================================
     EACH TAB
  ================================= */

  .hero-tab {
    width: 100%;
    min-width: 0;

    height: 58px;
    min-height: 58px;

    display: flex;

    align-items: center;
    justify-content: center;

    gap: 6px;

    padding: 6px 8px;

    margin: 0;

    border: 0;

    box-sizing: border-box;

    overflow: hidden;

    white-space: nowrap;
  }


  /* ================================
     TAB ICON
  ================================= */

  .tab-icon {
    width: 23px;
    height: 23px;

    min-width: 23px;
    max-width: 23px;

    flex: 0 0 23px;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 50%;

    font-size: 9px;

    line-height: 1;
  }


  /* ================================
     TAB TEXT
  ================================= */

  .tab-copy {
    min-width: 0;

    max-width: calc(100% - 30px);

    display: flex;

    flex-direction: column;

    align-items: flex-start;

    justify-content: center;

    gap: 2px;

    overflow: hidden;

    text-align: left;
  }


  .tab-copy small {
    width: 100%;

    overflow: hidden;

    text-overflow: ellipsis;

    white-space: nowrap;

    font-size: 5.5px;

    line-height: 1.1;

    letter-spacing: .08em;

    font-weight: 800;
  }


  .tab-copy strong {
    width: 100%;

    overflow: hidden;

    text-overflow: ellipsis;

    white-space: nowrap;

    font-size: 8px;

    line-height: 1.15;

    letter-spacing: .025em;

    font-weight: 900;
  }


  /* ================================
     CARD BODY
     NO EXTRA SPACE
  ================================= */

  .card-inner {
    width: 100%;

    box-sizing: border-box;

    overflow: hidden;
  }


  /* ================================
     BUY PANEL
  ================================= */

  .buy-panel {
    width: 100%;

    box-sizing: border-box;

    padding: 10px;
  }


  /* ================================
     SELL PANEL
  ================================= */

  .sell-panel {
    width: 100%;

    box-sizing: border-box;

    padding: 12px 10px;
  }


  /* ================================
     REMOVE UNNECESSARY TAB GAP
  ================================= */

  .hero-tab + .hero-tab {
    border-left:
      1px solid rgba(255,255,255,.12);
  }

}


/* =====================================================
   VERY SMALL MOBILE
   360px AND BELOW
===================================================== */

@media (max-width: 360px) {

  .hero-card {
    margin-top: 14px;

    border-radius: 13px;
  }


  .hero-tabs {
    height: 54px;
    min-height: 54px;
  }


  .hero-tab {
    height: 54px;
    min-height: 54px;

    gap: 5px;

    padding: 5px 6px;
  }


  .tab-icon {
    width: 21px;
    height: 21px;

    min-width: 21px;
    max-width: 21px;

    flex-basis: 21px;

    font-size: 8px;
  }


  .tab-copy {
    max-width: calc(100% - 27px);
  }


  .tab-copy small {
    font-size: 5px;

    letter-spacing: .06em;
  }


  .tab-copy strong {
    font-size: 7px;

    letter-spacing: .015em;
  }
}
  /* =====================================================
     FILTER
  ===================================================== */

  .buy-filter-row {
    min-height: 43px;

    height: 43px;
  }

  .buy-city {
    font-size: 9px;
  }

  .buy-subtabs {
    gap: 8px;
  }

  .buy-subtab {
    height: 43px;

    font-size: 6.5px;
  }

  /* =====================================================
     FORM ROW
  ===================================================== */

  .search-row {
    grid-template-columns:
      82px
      91px
      minmax(0, 1fr)
      70px;

    margin-top: 7px;
  }

  .search-field {
    height: 40px;
  }

  .search-icon {
    left: 6px;

    font-size: 10px;
  }

  .hero-input {
    padding-left: 20px;

    font-size: 7px;
  }

  .search-input {
    padding-left: 21px;

    font-size: 7px;
  }

  .search-button {
    height: 40px;

    font-size: 6.5px;

    gap: 3px;
  }

  .search-button b {
    font-size: 11px;
  }

  /* =====================================================
     QUICK
  ===================================================== */

  .quick-search {
    gap: 7px;

    margin-top: 7px;
  }

  .quick-search > span,
  .quick-search button {
    font-size: 6px;
  }

  /* =====================================================
     STATS
  ===================================================== */

  .hero-stats {
    gap: 9px;

    margin-top: 16px;
  }

  .hero-stats b {
    font-size: .9rem;
  }

  .hero-stats span {
    font-size: 5px;

    letter-spacing: .035em;
  }

  .hero-stats i {
    height: 20px;
  }

  .hero-marquee {
    padding: 8px 0;
  }

  .marquee-content {
    gap: 12px;

    font-size: 6px;
  }

}

/* =========================================================
   VERY SMALL
========================================================= */

@media (max-width: 380px) {

  .hero-container {
    padding-top: 48px;
  }

  .hero-heading {
    font-size: 2.25rem;
  }

  .hero-sub {
    font-size: 9px;
  }

  .hero-tabs {
    height: 55px;

    min-height: 55px;
  }

  .hero-tab {
    padding-inline: 2px;
  }

  .tab-icon {
    width: 21px;
    height: 21px;

    flex-basis: 21px;
  }

  .tab-copy strong {
    font-size: 6.5px;
  }

  .tab-copy small {
    font-size: 4.5px;
  }

  .buy-panel {
    padding-inline: 7px;
  }

  .search-row {
    grid-template-columns:
      73px
      82px
      minmax(0, 1fr)
      64px;
  }

  .hero-input {
    padding-left: 18px;

    font-size: 6.5px;
  }

  .search-input {
    padding-left: 19px;
  }

  .search-button {
    font-size: 5.8px;
  }

  .buy-subtabs {
    gap: 6px;
  }

  .buy-subtab {
    font-size: 6px;
  }

}

/* =========================================================
   TOUCH / SCROLL FIX
========================================================= */

.ksr-hero button,
.ksr-hero input,
.ksr-hero select {
  touch-action: manipulation;
}

.ksr-hero input,
.ksr-hero select {
  -webkit-user-select: text;

  user-select: text;
}

.ksr-hero button {
  -webkit-user-select: none;

  user-select: none;
}

/* Important: never lock page scrolling */

html,
body {
  overflow-x: hidden;
}

body {
  overflow-y: auto;

  touch-action: pan-y;
}

/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .hero-video {
    transition: none;
  }

  .hero-card {
    animation: none;
  }

  .marquee-track {
    animation: none;
  }

}

      `}</style>

    </section>
  );
}