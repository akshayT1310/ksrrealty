import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import propertiesDb from "../properties-db";

export default function FeaturedProperties({ handleCardClick }) {
  const navigate = useNavigate();
  const trackRef = useRef(null);

  const [paused, setPaused] = useState(false);

  const properties = Array.isArray(propertiesDb)
    ? propertiesDb.filter(Boolean)
    : [];

  // Duplicate list for seamless infinite running
  const runningProperties = [...properties, ...properties];

  const safeImage = (image) => {
    if (!image) {
      return "/assets/images/properties/horizon_tower.jpg";
    }

    return image.startsWith("/") ? image : `/${image}`;
  };

  const getStatus = (property) => {
    return property?.status || "For Sale";
  };

  const getPropertyType = (type) => {
    if (!type) return "Property";

    const map = {
      flat: "Apartment",
      apartment: "Apartment",
      villa: "Villa",
      plot: "Plot",
      office: "Office",
      shop: "Commercial",
      commercial: "Commercial",
    };

    return map[type.toLowerCase()] || type;
  };

  const openProperty = (property) => {
    if (handleCardClick) {
      handleCardClick(property.name);
      return;
    }

    const slug = property.name
      ?.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    navigate(`/property/${slug}`);
  };

  /*
    Pause marquee when tab becomes hidden.
  */
  useEffect(() => {
    const handleVisibility = () => {
      setPaused(document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );
    };
  }, []);

  return (
    <section className="ksr-running-properties">
      <div className="ksr-properties-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="ksr-properties-heading">

          <div className="ksr-heading-left">
            <span className="ksr-eyebrow">
              HANDPICKED FOR YOU
            </span>

            <h2>
              Featured
              <em> Properties</em>
            </h2>

            <p>
              Discover thoughtfully selected homes, commercial
              spaces and investment opportunities across Indore.
            </p>
          </div>

          <button
            className="ksr-view-all"
            onClick={() => navigate("/property")}
          >
            <span>View all listings</span>

            <span className="ksr-arrow">
              →
            </span>
          </button>

        </div>

      </div>

      {/* =====================================================
          RUNNING PROPERTY STRIP
      ===================================================== */}

      <div
        className={`ksr-marquee ${
          paused ? "is-paused" : ""
        }`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >

        <div
          ref={trackRef}
          className="ksr-marquee-track"
        >

          {runningProperties.map((property, index) => {

            const image = safeImage(
              property?.images?.[0]
            );

            return (
              <article
                className="ksr-property-card"
                key={`${property?.id || property?.name}-${index}`}
                onClick={() => openProperty(property)}
              >

                {/* IMAGE */}

                <div className="ksr-property-image">

                  <img
                    src={image}
                    alt={property?.name || "Property"}
                    loading="lazy"
                  />

                  <div className="ksr-image-overlay" />

                  {/* STATUS */}

                  <div className="ksr-property-tags">

                    <span className="ksr-status">
                      {getStatus(property)}
                    </span>

                    {index % 2 === 0 && (
                      <span className="ksr-featured">
                        Featured
                      </span>
                    )}

                  </div>

                  {/* PRICE */}

                  <div className="ksr-price-floating">
                    {property?.price_str ||
                      property?.expected_price ||
                      "Price on request"}
                  </div>

                </div>

                {/* CONTENT */}

                <div className="ksr-property-content">

                  <div className="ksr-location">

                    <span className="ksr-location-dot">
                      ●
                    </span>

                    {property?.locality ||
                      "Indore"}

                  </div>

                  <h3>
                    {property?.name ||
                      "Premium Property"}
                  </h3>

                  <p className="ksr-property-type">
                    {getPropertyType(
                      property?.property_type
                    )}
                  </p>

                  {/* DETAILS */}

                  <div className="ksr-property-details">

                    {property?.bhk && (
                      <span>
                        <b>⌂</b>
                        {property.bhk}
                      </span>
                    )}

                    {property?.area && (
                      <span>
                        <b>□</b>
                        {property.area} sq.ft
                      </span>
                    )}

                    {property?.facing && (
                      <span>
                        <b>↗</b>
                        {property.facing}
                      </span>
                    )}

                  </div>

                  {/* FOOTER */}

                  <div className="ksr-card-footer">

                    <span>
                      Explore property
                    </span>

                    <span className="ksr-card-arrow">
                      →
                    </span>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

      </div>

      {/* =====================================================
          BOTTOM NOTE
      ===================================================== */}

      <div className="ksr-properties-bottom">

        <span className="ksr-bottom-line" />

        <span>
          New properties are added regularly
        </span>

        <span className="ksr-bottom-line" />

      </div>

      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        /* =====================================================
           SECTION
        ===================================================== */

        .ksr-running-properties {
          width: 100%;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 10% 0%,
              rgba(185,151,78,.08),
              transparent 32%
            ),
            #f7f5ef;

          padding: 105px 0 80px;

          color: #171717;
        }


        .ksr-properties-container {
          width: min(1320px, calc(100% - 48px));
          margin: 0 auto;
        }


        /* =====================================================
           HEADER
        ===================================================== */

        .ksr-properties-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;

          margin-bottom: 54px;
        }


        .ksr-heading-left {
          max-width: 680px;
        }


        .ksr-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;

          margin-bottom: 16px;

          color: #9b7a38;

          font-size: 11px;
          font-weight: 700;

          letter-spacing: .22em;
          text-transform: uppercase;
        }


        .ksr-eyebrow::before {
          content: "";

          width: 30px;
          height: 1px;

          background: #b9974e;
        }


        .ksr-heading-left h2 {
          margin: 0;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            clamp(42px, 5vw, 72px);

          font-weight: 400;

          line-height: .98;

          letter-spacing: -.045em;
        }


        .ksr-heading-left h2 em {
          color: #a8833d;
          font-style: italic;
        }


        .ksr-heading-left p {
          max-width: 570px;

          margin: 22px 0 0;

          color: #77716a;

          font-size: 15px;
          line-height: 1.8;
        }


        /* =====================================================
           VIEW ALL
        ===================================================== */

        .ksr-view-all {
          display: inline-flex;
          align-items: center;
          gap: 14px;

          flex-shrink: 0;

          padding: 14px 20px;

          border: 1px solid #d9d1c3;

          border-radius: 999px;

          background: rgba(255,255,255,.65);

          color: #24211d;

          font-size: 13px;
          font-weight: 600;

          cursor: pointer;

          transition:
            background .3s ease,
            border-color .3s ease,
            transform .3s ease;
        }


        .ksr-view-all:hover {
          background: #fff;
          border-color: #b9974e;

          transform: translateY(-2px);
        }


        .ksr-arrow {
          display: grid;
          place-items: center;

          width: 27px;
          height: 27px;

          border-radius: 50%;

          background: #171717;

          color: #fff;

          transition:
            transform .3s ease;
        }


        .ksr-view-all:hover .ksr-arrow {
          transform: translateX(3px);
        }


        /* =====================================================
           MARQUEE
        ===================================================== */

        .ksr-marquee {
          width: 100%;

          overflow: hidden;

          cursor: grab;

          padding: 12px 0 28px;
        }


        .ksr-marquee:active {
          cursor: grabbing;
        }


        .ksr-marquee-track {
          display: flex;
          align-items: stretch;

          width: max-content;

          gap: 22px;

          padding-left: 24px;

          animation:
            ksrPropertyRun 120s linear infinite;

          will-change: transform;
        }


        .ksr-marquee.is-paused
        .ksr-marquee-track {
          animation-play-state: paused;
        }


        @keyframes ksrPropertyRun {

          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(
              calc(-50% - 11px)
            );
          }

        }


        /* =====================================================
           CARD
        ===================================================== */

        .ksr-property-card {
          position: relative;

          width: 285px;

          flex: 0 0 285px;

          overflow: hidden;

          border: 1px solid #e4ddd2;

          border-radius: 28px;

          background: #eff1d8;

          box-shadow:
            0 8px 30px rgba(31,25,18,.055);

          cursor: pointer;

          transition:
            transform .4s cubic-bezier(.2,.8,.2,1),
            box-shadow .4s ease;
        }


        .ksr-property-card:hover {
          transform: translateY(-9px);

          box-shadow:
            0 24px 55px rgba(31,25,18,.13);
        }


        /* =====================================================
           IMAGE
        ===================================================== */

        .ksr-property-image {
          position: relative;

          width: 100%;

          height: 245px;

          overflow: hidden;
        }


        .ksr-property-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition:
            transform .7s
            cubic-bezier(.2,.8,.2,1);
        }


        .ksr-property-card:hover
        .ksr-property-image img {
          transform: scale(1.07);
        }


        .ksr-image-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              rgba(0,0,0,.25),
              transparent 42%,
              rgba(0,0,0,.45)
            );
        }


        /* =====================================================
           TAGS
        ===================================================== */

        .ksr-property-tags {
          position: absolute;

          top: 15px;
          left: 15px;

          display: flex;
          gap: 7px;
        }


        .ksr-status,
        .ksr-featured {
          display: inline-flex;

          align-items: center;

          padding: 7px 11px;

          border-radius: 999px;

          font-size: 10px;
          font-weight: 700;

          letter-spacing: .06em;

          backdrop-filter: blur(10px);
        }


        .ksr-status {
          background: rgba(255,255,255,.94);

          color: #27231d;
        }


        .ksr-featured {
          background: #b9974e;

          color: #fff;
        }


        /* =====================================================
           PRICE
        ===================================================== */

        .ksr-price-floating {
          position: absolute;

          left: 15px;
          bottom: 15px;

          color: #fff;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 21px;

          font-weight: 600;

          text-shadow:
            0 2px 10px rgba(0,0,0,.3);
        }


        /* =====================================================
           CONTENT
        ===================================================== */

        .ksr-property-content {
          padding: 21px 20px 18px;
        }


        .ksr-location {
          display: flex;
          align-items: center;
          gap: 7px;

          margin-bottom: 9px;

          color: #958b7e;

          font-size: 11px;

          letter-spacing: .04em;
        }


        .ksr-location-dot {
          color: #b9974e;

          font-size: 8px;
        }


        .ksr-property-content h3 {
          margin: 0;

          color: #1d1b18;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 24px;

          font-weight: 500;

          line-height: 1.1;

          letter-spacing: -.025em;
        }


        .ksr-property-type {
          margin: 7px 0 17px;

          color: #9b9287;

          font-size: 12px;
        }


        /* =====================================================
           DETAILS
        ===================================================== */

        .ksr-property-details {
          display: flex;

          align-items: center;

          gap: 13px;

          padding: 13px 0;

          border-top: 1px solid #eee9e1;
          border-bottom: 1px solid #eee9e1;

          color: #6f675e;

          font-size: 10px;
        }


        .ksr-property-details span {
          display: flex;

          align-items: center;

          gap: 5px;

          white-space: nowrap;
        }


        .ksr-property-details b {
          color: #a8833d;

          font-size: 13px;

          font-weight: 400;
        }


        /* =====================================================
           CARD FOOTER
        ===================================================== */

        .ksr-card-footer {
          display: flex;

          align-items: center;
          justify-content: space-between;

          padding-top: 15px;

          color: #292621;

          font-size: 11px;

          font-weight: 700;

          letter-spacing: .02em;
        }


        .ksr-card-arrow {
          display: grid;

          place-items: center;

          width: 30px;
          height: 30px;

          border: 1px solid #ded6c9;

          border-radius: 50%;

          color: #9b7a38;

          transition:
            background .3s ease,
            color .3s ease,
            transform .3s ease;
        }


        .ksr-property-card:hover
        .ksr-card-arrow {
          background: #171717;

          color: #fff;

          transform: translateX(3px);
        }


        /* =====================================================
           BOTTOM
        ===================================================== */

        .ksr-properties-bottom {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 16px;

          margin-top: 28px;

          color: #aaa196;

          font-size: 10px;

          letter-spacing: .12em;

          text-transform: uppercase;
        }


        .ksr-bottom-line {
          width: 45px;

          height: 1px;

          background: #ddd5c9;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {

          .ksr-running-properties {
            padding: 80px 0 65px;
          }


          .ksr-properties-heading {
            align-items: flex-start;

            flex-direction: column;

            margin-bottom: 40px;

            gap: 24px;
          }


          .ksr-property-card {
            width: 310px;
            flex-basis: 310px;
          }


          .ksr-property-image {
            height: 225px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .ksr-running-properties {
            padding: 65px 0 55px;
          }


          .ksr-properties-container {
            width: calc(100% - 30px);
          }


          .ksr-heading-left h2 {
            font-size: 43px;
          }


          .ksr-heading-left p {
            font-size: 13px;

            line-height: 1.7;

            margin-top: 17px;
          }


          .ksr-view-all {
            padding: 11px 15px;

            font-size: 11px;
          }


          .ksr-marquee {
            padding-bottom: 20px;
          }


          .ksr-marquee-track {
            gap: 14px;

            padding-left: 15px;

            animation-duration: 34s;
          }


          .ksr-property-card {
            width: 285px;

            flex-basis: 285px;

            border-radius: 23px;
          }


          .ksr-property-image {
            height: 205px;
          }


          .ksr-property-content {
            padding: 18px 17px 16px;
          }


          .ksr-property-content h3 {
            font-size: 21px;
          }


          .ksr-property-details {
            gap: 9px;

            font-size: 9px;
          }


          .ksr-price-floating {
            font-size: 18px;
          }


          .ksr-properties-bottom {
            font-size: 8px;

            gap: 9px;
          }


          .ksr-bottom-line {
            width: 25px;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {

          .ksr-property-card {
            width: 270px;
            flex-basis: 270px;
          }


          .ksr-property-image {
            height: 195px;
          }


          .ksr-heading-left h2 {
            font-size: 39px;
          }

        }

      `}</style>

    </section>
  );
}