import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import propertiesDb from "../properties-db";

export default function PropertyDetail() {
  const { slug } = useParams();

  const [property, setProperty] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  /* =========================================================
     HELPERS
  ========================================================= */

  const createSlug = (name = "") =>
    name
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const getImagePath = (image) => {
    if (!image) return "";

    const clean = image.toString().trim();

    if (
      clean.startsWith("http://") ||
      clean.startsWith("https://") ||
      clean.startsWith("data:")
    ) {
      return clean;
    }

    return clean.startsWith("/") ? clean : `/${clean}`;
  };

  /* =========================================================
     FIND PROPERTY
  ========================================================= */

  useEffect(() => {
    if (!Array.isArray(propertiesDb) || propertiesDb.length === 0) {
      setProperty(null);
      return;
    }

    const currentSlug = createSlug(slug || "");

    const found = propertiesDb.find((item) => {
      if (!item) return false;

      const nameSlug = createSlug(item.name);
      const projectSlug = createSlug(item.project_name);

      return (
        currentSlug === nameSlug ||
        currentSlug === projectSlug ||
        currentSlug.includes(nameSlug) ||
        nameSlug.includes(currentSlug)
      );
    });

    setProperty(found || null);
    setActiveImage(0);

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [slug]);

  /* =========================================================
     IMAGES
  ========================================================= */

  const images = useMemo(() => {
    if (!property) return [];

    if (!Array.isArray(property.images)) return [];

    return property.images
      .filter(Boolean)
      .map(getImagePath);
  }, [property]);

  /* =========================================================
     FACILITIES
  ========================================================= */

  const facilities = useMemo(() => {
    if (
      property &&
      Array.isArray(property.facilities) &&
      property.facilities.length
    ) {
      return property.facilities;
    }

    return [
      "24x7 Security",
      "Power Backup",
      "Reserved Parking",
      "Modern Infrastructure",
    ];
  }, [property]);

  /* =========================================================
     IMAGE NAVIGATION
  ========================================================= */

  const nextImage = () => {
    if (images.length <= 1) return;

    setActiveImage((current) =>
      current >= images.length - 1 ? 0 : current + 1
    );
  };

  const prevImage = () => {
    if (images.length <= 1) return;

    setActiveImage((current) =>
      current <= 0 ? images.length - 1 : current - 1
    );
  };

  /* =========================================================
     WHATSAPP
  ========================================================= */

  const whatsappText = property
    ? `Hi KSR Realty, I am interested in ${property.name} located at ${
        property.locality || "Indore"
      }. Please share the price, availability, RERA details and payment plan.`
    : "";

  const whatsappUrl = property
    ? `https://api.whatsapp.com/send?phone=917470750708&text=${encodeURIComponent(
        whatsappText
      )}`
    : "#";

  /* =========================================================
     MAP
  ========================================================= */

  const mapUrl = property
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${property.name || ""}, ${property.locality || "Indore"}, Madhya Pradesh`
      )}`
    : "#";

  /* =========================================================
     RELATED PROPERTIES
  ========================================================= */

  const suggestions = useMemo(() => {
    if (!property || !Array.isArray(propertiesDb)) return [];

    return propertiesDb
      .filter(
        (item) =>
          item &&
          item.id !== property.id &&
          createSlug(item.name) !== createSlug(property.name)
      )
      .slice(0, 4);
  }, [property]);

  /* =========================================================
     LOADING
  ========================================================= */

  if (!property) {
    return (
      <>
        <style>{`
          .property-loading-page {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 30px 20px;
            background: var(--color-limestone, #f5f2eb);
          }

          .property-loading-box {
            text-align: center;
          }

          .property-loading-line {
            width: 60px;
            height: 2px;
            margin: 0 auto 18px;
            background: var(--color-brass, #c9a24b);
            animation: propertyLoading 1.2s ease-in-out infinite;
          }

          .property-loading-text {
            margin: 0;
            color: var(--color-taupe, #817a70);
            font-size: 13px;
          }

          @keyframes propertyLoading {
            0%,
            100% {
              transform: scaleX(0.35);
              opacity: 0.4;
            }

            50% {
              transform: scaleX(1);
              opacity: 1;
            }
          }
        `}</style>

        <main className="property-loading-page">
          <div className="property-loading-box">
            <div className="property-loading-line" />
            <p className="property-loading-text">
              Property details loading...
            </p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <style>{`

        /* =========================================================
           RESET / PAGE
        ========================================================= */

        .property-detail-page {
          width: 100%;
          min-height: 100vh;
          padding: 105px 0 80px;
          background: var(--color-limestone, #f5f2eb);
          overflow-x: hidden;
        }

        .property-detail-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* =========================================================
           BACK
        ========================================================= */

        .property-detail-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          color: var(--color-taupe, #817a70);
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all .25s ease;
        }

        .property-detail-back:hover {
          color: var(--color-brass, #c9a24b);
          transform: translateX(-3px);
        }

        /* =========================================================
           MAIN CARD
        ========================================================= */

        .property-detail-card {
          width: 100%;
          overflow: hidden;
          background: #fbfaf7;
          border: 1px solid var(--color-hairline, #ddd8cf);
          border-radius: 22px;
          box-shadow: 0 25px 70px rgba(20, 20, 20, .07);
        }

        /* =========================================================
           HERO
        ========================================================= */

        .property-detail-hero {
          position: relative;
          width: 100%;
          height: 560px;
          overflow: hidden;
          background: #141414;
        }

        .property-detail-hero-track {
          display: flex;
          width: 100%;
          height: 100%;
          transition: transform .5s cubic-bezier(.22,.61,.36,1);
        }

        .property-detail-slide {
          flex: 0 0 100%;
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          user-select: none;
        }

        .property-detail-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            linear-gradient(
              to bottom,
              rgba(0,0,0,.25) 0%,
              transparent 38%,
              rgba(0,0,0,.65) 100%
            );
        }

        /* =========================================================
           HERO BADGE
        ========================================================= */

        .property-detail-badge {
          position: absolute;
          z-index: 4;
          top: 22px;
          left: 22px;
          max-width: calc(100% - 44px);
          padding: 8px 13px;
          border: 1px solid rgba(255,255,255,.25);
          border-radius: 30px;
          background: rgba(10,25,49,.75);
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .12em;
          text-transform: uppercase;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        /* =========================================================
           IMAGE COUNTER
        ========================================================= */

        .property-detail-counter {
          position: absolute;
          z-index: 4;
          right: 22px;
          bottom: 22px;
          padding: 7px 12px;
          border-radius: 30px;
          background: rgba(10,25,49,.75);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        /* =========================================================
           IMAGE BUTTONS
        ========================================================= */

        .property-detail-image-button {
          position: absolute;
          z-index: 5;
          top: 50%;
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          border: 1px solid rgba(255,255,255,.45);
          border-radius: 50%;
          background: rgba(10,25,49,.58);
          color: #fff;
          font-size: 28px;
          line-height: 1;
          cursor: pointer;
          transform: translateY(-50%);
          transition: all .25s ease;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .property-detail-image-button:hover {
          background: var(--color-brass, #c9a24b);
          border-color: var(--color-brass, #c9a24b);
        }

        .property-detail-prev {
          left: 20px;
        }

        .property-detail-next {
          right: 20px;
        }

        /* =========================================================
           DOTS
        ========================================================= */

        .property-detail-dots {
          position: absolute;
          z-index: 5;
          left: 50%;
          bottom: 22px;
          display: flex;
          align-items: center;
          gap: 6px;
          transform: translateX(-50%);
        }

        .property-detail-dot {
          width: 7px;
          height: 7px;
          padding: 0;
          border: 0;
          border-radius: 50%;
          background: rgba(255,255,255,.5);
          cursor: pointer;
          transition: all .25s ease;
        }

        .property-detail-dot.active {
          width: 20px;
          border-radius: 20px;
          background: var(--color-brass, #c9a24b);
        }

        /* =========================================================
           CONTENT
        ========================================================= */

        .property-detail-content {
          padding: 48px;
        }

        /* =========================================================
           TOP INFO
        ========================================================= */

        .property-detail-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 40px;
        }

        .property-detail-title-area {
          min-width: 0;
          flex: 1;
        }

        .property-detail-type {
          display: inline-flex;
          align-items: center;
          max-width: 100%;
          padding: 6px 11px;
          border-radius: 30px;
          background: rgba(201,162,75,.12);
          color: var(--color-brass, #c9a24b);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .property-detail-title {
          margin: 11px 0 8px;
          color: var(--color-navy-dark, #0a1931);
          font-family: var(--font-display, Georgia, serif);
          font-size: clamp(2rem, 4vw, 3.4rem);
          font-weight: 500;
          line-height: 1.08;
          letter-spacing: -.025em;
          overflow-wrap: anywhere;
        }

        .property-detail-builder {
          margin: 0;
          color: var(--color-taupe, #817a70);
          font-size: 14px;
          line-height: 1.5;
        }

        .property-detail-price-area {
          flex: 0 0 auto;
          text-align: right;
        }

        .property-detail-price {
          margin: 0;
          color: var(--color-brass, #c9a24b);
          font-size: clamp(1.5rem, 3vw, 2.15rem);
          font-weight: 800;
          line-height: 1.2;
          white-space: nowrap;
        }

        .property-detail-price-sqft {
          margin: 6px 0 0;
          color: var(--color-taupe, #817a70);
          font-size: 12px;
        }

        /* =========================================================
           STATS
        ========================================================= */

        .property-detail-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-bottom: 40px;
          border-top: 1px solid var(--color-hairline, #ddd8cf);
          border-bottom: 1px solid var(--color-hairline, #ddd8cf);
        }

        .property-detail-stat {
          min-width: 0;
          padding: 22px 20px;
          border-right: 1px solid var(--color-hairline, #ddd8cf);
        }

        .property-detail-stat:last-child {
          border-right: 0;
        }

        .property-detail-stat-label {
          display: block;
          margin-bottom: 7px;
          color: var(--color-taupe, #817a70);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .11em;
          text-transform: uppercase;
        }

        .property-detail-stat-value {
          display: block;
          color: var(--color-ink, #1d1d1d);
          font-size: 14px;
          font-weight: 600;
          line-height: 1.45;
          overflow-wrap: anywhere;
        }

        /* =========================================================
           INFO GRID
        ========================================================= */

        .property-detail-info {
          display: grid;
          grid-template-columns: 1.15fr .85fr;
          gap: 45px;
        }

        .property-detail-info-block {
          min-width: 0;
          padding-top: 25px;
          border-top: 1px solid var(--color-hairline, #ddd8cf);
        }

        .property-detail-section-label {
          margin: 0 0 9px;
          color: var(--color-brass, #c9a24b);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .property-detail-section-title {
          margin: 0 0 13px;
          color: var(--color-navy-dark, #0a1931);
          font-family: var(--font-display, Georgia, serif);
          font-size: 1.4rem;
          font-weight: 500;
          line-height: 1.25;
        }

        .property-detail-description {
          margin: 0;
          color: var(--color-slate, #646464);
          font-size: 14px;
          line-height: 1.85;
        }

        /* =========================================================
           LOCATION
        ========================================================= */

        .property-detail-location {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          background: #fff;
          border: 1px solid var(--color-hairline, #ddd8cf);
          border-radius: 12px;
        }

        .property-detail-location-icon {
          flex: 0 0 34px;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(201,162,75,.12);
          font-size: 15px;
        }

        .property-detail-location-content {
          min-width: 0;
        }

        .property-detail-location-label {
          display: block;
          margin-bottom: 4px;
          color: var(--color-taupe, #817a70);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .property-detail-location-link {
          display: block;
          color: var(--color-ink, #1d1d1d);
          font-size: 13px;
          font-weight: 700;
          line-height: 1.5;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .property-detail-location-link:hover {
          color: var(--color-brass, #c9a24b);
        }

        /* =========================================================
           AMENITIES
        ========================================================= */

        .property-detail-amenities-block {
          margin-top: 38px;
          padding-top: 25px;
          border-top: 1px solid var(--color-hairline, #ddd8cf);
        }

        .property-detail-amenities {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .property-detail-amenity {
          display: flex;
          align-items: center;
          gap: 9px;
          min-width: 0;
          padding: 12px;
          background: #fff;
          border: 1px solid var(--color-hairline, #ddd8cf);
          border-radius: 10px;
          color: var(--color-slate, #646464);
          font-size: 12px;
          line-height: 1.4;
        }

        .property-detail-check {
          flex: 0 0 auto;
          width: 19px;
          height: 19px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(201,162,75,.12);
          color: var(--color-brass, #c9a24b);
          font-size: 11px;
          font-weight: 900;
        }

        /* =========================================================
           ACTIONS
        ========================================================= */

        .property-detail-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 13px;
          margin-top: 40px;
        }

        .property-detail-action {
          min-height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 14px 20px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 800;
          text-align: center;
          text-decoration: none;
          transition: all .25s ease;
        }

        .property-detail-action:hover {
          transform: translateY(-2px);
        }

        .property-detail-whatsapp {
          background: var(--color-brass, #c9a24b);
          color: #fff;
        }

        .property-detail-whatsapp:hover {
          filter: brightness(.94);
        }

        .property-detail-visit {
          background: var(--color-navy, #0a1931);
          border: 1px solid var(--color-navy, #0a1931);
          color: #fff;
        }

        .property-detail-visit:hover {
          background: var(--color-navy-dark, #071426);
        }

        /* =========================================================
           MORE PROPERTIES
        ========================================================= */

        .property-detail-more {
          margin-top: 75px;
        }

        .property-detail-more-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 25px;
          margin-bottom: 25px;
        }

        .property-detail-more-label {
          margin: 0 0 7px;
          color: var(--color-brass, #c9a24b);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .13em;
          text-transform: uppercase;
        }

        .property-detail-more-title {
          margin: 0;
          color: var(--color-navy-dark, #0a1931);
          font-family: var(--font-display, Georgia, serif);
          font-size: clamp(1.7rem, 3vw, 2.4rem);
          font-weight: 500;
          line-height: 1.2;
        }

        .property-detail-more-subtitle {
          margin: 8px 0 0;
          color: var(--color-taupe, #817a70);
          font-size: 13px;
          line-height: 1.5;
        }

        .property-detail-more-link {
          flex-shrink: 0;
          color: var(--color-brass, #c9a24b);
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
        }

        .property-detail-more-link:hover {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        /* =========================================================
           RELATED GRID
        ========================================================= */

        .property-detail-more-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .property-detail-suggestion {
          min-width: 0;
          overflow: hidden;
          background: #fbfaf7;
          border: 1px solid var(--color-hairline, #ddd8cf);
          border-radius: 14px;
          color: inherit;
          text-decoration: none;
          transition:
            transform .3s ease,
            box-shadow .3s ease,
            border-color .3s ease;
        }

        .property-detail-suggestion:hover {
          transform: translateY(-5px);
          border-color: rgba(201,162,75,.5);
          box-shadow: 0 18px 38px rgba(0,0,0,.08);
        }

        .property-detail-suggestion-image {
          position: relative;
          width: 100%;
          height: 185px;
          overflow: hidden;
          background: #e7e3dc;
        }

        .property-detail-suggestion-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          transition: transform .5s ease;
        }

        .property-detail-suggestion:hover
        .property-detail-suggestion-image img {
          transform: scale(1.05);
        }

        .property-detail-suggestion-badge {
          position: absolute;
          top: 11px;
          left: 11px;
          padding: 5px 8px;
          border-radius: 30px;
          background: rgba(10,25,49,.8);
          color: #fff;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .08em;
          text-transform: uppercase;
          backdrop-filter: blur(7px);
        }

        .property-detail-suggestion-content {
          padding: 15px;
        }

        .property-detail-suggestion-name {
          margin: 0 0 6px;
          color: var(--color-navy-dark, #0a1931);
          font-family: var(--font-display, Georgia, serif);
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.3;
          overflow-wrap: anywhere;
        }

        .property-detail-suggestion-location {
          margin: 0;
          color: var(--color-taupe, #817a70);
          font-size: 11px;
        }

        .property-detail-suggestion-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 10px;
          margin-top: 14px;
          padding-top: 12px;
          border-top: 1px solid var(--color-hairline, #ddd8cf);
        }

        .property-detail-suggestion-price {
          display: block;
          color: var(--color-brass, #c9a24b);
          font-size: 12px;
          font-weight: 800;
        }

        .property-detail-suggestion-sqft {
          display: block;
          margin-top: 3px;
          color: var(--color-taupe, #817a70);
          font-size: 9px;
        }

        .property-detail-suggestion-arrow {
          flex: 0 0 auto;
          width: 29px;
          height: 29px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--color-hairline, #ddd8cf);
          border-radius: 50%;
          color: var(--color-brass, #c9a24b);
          transition: all .25s ease;
        }

        .property-detail-suggestion:hover
        .property-detail-suggestion-arrow {
          background: var(--color-brass, #c9a24b);
          border-color: var(--color-brass, #c9a24b);
          color: #fff;
        }

        /* =========================================================
           TABLET
        ========================================================= */

        @media (max-width: 1000px) {

          .property-detail-hero {
            height: 470px;
          }

          .property-detail-more-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .property-detail-info {
            grid-template-columns: 1fr;
            gap: 28px;
          }

        }

        /* =========================================================
           800px
        ========================================================= */

        @media (max-width: 800px) {

          .property-detail-page {
            padding-top: 90px;
          }

          .property-detail-content {
            padding: 35px;
          }

          .property-detail-top {
            flex-direction: column;
            gap: 16px;
          }

          .property-detail-price-area {
            width: 100%;
            text-align: left;
          }

          .property-detail-price {
            white-space: normal;
          }

          .property-detail-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .property-detail-stat:nth-child(2) {
            border-right: 0;
          }

          .property-detail-stat:nth-child(-n+2) {
            border-bottom: 1px solid var(--color-hairline, #ddd8cf);
          }

        }

        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 600px) {

          .property-detail-page {
            padding: 76px 0 45px;
          }

          .property-detail-container {
            width: calc(100% - 20px);
          }

          .property-detail-back {
            margin-bottom: 14px;
            font-size: 12px;
          }

          .property-detail-card {
            border-radius: 15px;
          }

          /* HERO */

          .property-detail-hero {
            height: 275px;
          }

          .property-detail-badge {
            top: 12px;
            left: 12px;
            max-width: calc(100% - 24px);
            padding: 6px 9px;
            font-size: 8px;
            letter-spacing: .08em;
          }

          .property-detail-counter {
            right: 12px;
            bottom: 12px;
            padding: 6px 9px;
            font-size: 9px;
          }

          .property-detail-image-button {
            width: 35px;
            height: 35px;
            font-size: 21px;
          }

          .property-detail-prev {
            left: 9px;
          }

          .property-detail-next {
            right: 9px;
          }

          .property-detail-dots {
            bottom: 14px;
            gap: 5px;
          }

          .property-detail-dot {
            width: 5px;
            height: 5px;
          }

          .property-detail-dot.active {
            width: 15px;
          }

          /* CONTENT */

          .property-detail-content {
            padding: 22px 15px 24px;
          }

          .property-detail-top {
            margin-bottom: 27px;
            gap: 15px;
          }

          .property-detail-type {
            padding: 5px 9px;
            font-size: 8px;
          }

          .property-detail-title {
            margin: 9px 0 6px;
            font-size: 1.7rem;
            line-height: 1.1;
          }

          .property-detail-builder {
            font-size: 11px;
          }

          .property-detail-price {
            font-size: 1.35rem;
          }

          .property-detail-price-sqft {
            font-size: 10px;
          }

          /* STATS */

          .property-detail-stats {
            grid-template-columns: 1fr 1fr;
            margin-bottom: 28px;
          }

          .property-detail-stat {
            padding: 14px 10px;
          }

          .property-detail-stat-label {
            margin-bottom: 5px;
            font-size: 7px;
            letter-spacing: .08em;
          }

          .property-detail-stat-value {
            font-size: 10px;
            line-height: 1.4;
          }

          /* INFO */

          .property-detail-info {
            gap: 22px;
          }

          .property-detail-info-block {
            padding-top: 20px;
          }

          .property-detail-section-label {
            font-size: 8px;
          }

          .property-detail-section-title {
            margin-bottom: 10px;
            font-size: 1.12rem;
          }

          .property-detail-description {
            font-size: 12px;
            line-height: 1.7;
          }

          /* LOCATION */

          .property-detail-location {
            padding: 13px;
            gap: 10px;
          }

          .property-detail-location-icon {
            flex-basis: 31px;
            width: 31px;
            height: 31px;
            font-size: 13px;
          }

          .property-detail-location-label {
            font-size: 8px;
          }

          .property-detail-location-link {
            font-size: 11px;
          }

          /* AMENITIES */

          .property-detail-amenities-block {
            margin-top: 28px;
            padding-top: 20px;
          }

          .property-detail-amenities {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .property-detail-amenity {
            padding: 10px;
            font-size: 11px;
          }

          /* ACTIONS */

          .property-detail-actions {
            grid-template-columns: 1fr;
            gap: 9px;
            margin-top: 28px;
          }

          .property-detail-action {
            min-height: 49px;
            padding: 12px 15px;
            font-size: 12px;
          }

          /* MORE */

          .property-detail-more {
            margin-top: 48px;
          }

          .property-detail-more-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 13px;
            margin-bottom: 18px;
          }

          .property-detail-more-title {
            font-size: 1.65rem;
          }

          .property-detail-more-subtitle {
            max-width: 320px;
            font-size: 11px;
          }

          .property-detail-more-link {
            font-size: 12px;
          }

          .property-detail-more-grid {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .property-detail-suggestion-image {
            height: 200px;
          }

        }

        /* =========================================================
           SMALL MOBILE
        ========================================================= */

        @media (max-width: 390px) {

          .property-detail-page {
            padding-top: 68px;
          }

          .property-detail-container {
            width: calc(100% - 12px);
          }

          .property-detail-hero {
            height: 235px;
          }

          .property-detail-content {
            padding: 18px 12px 20px;
          }

          .property-detail-title {
            font-size: 1.5rem;
          }

          .property-detail-stats {
            grid-template-columns: 1fr;
          }

          .property-detail-stat,
          .property-detail-stat:nth-child(2) {
            border-right: 0;
            border-bottom: 1px solid var(--color-hairline, #ddd8cf);
          }

          .property-detail-stat:last-child {
            border-bottom: 0;
          }

          .property-detail-suggestion-image {
            height: 185px;
          }

        }

        /* =========================================================
           TOUCH DEVICES
        ========================================================= */

        @media (hover: none) {

          .property-detail-image-button:hover {
            background: rgba(10,25,49,.58);
            border-color: rgba(255,255,255,.45);
          }

          .property-detail-action:hover {
            transform: none;
          }

          .property-detail-suggestion:hover {
            transform: none;
            box-shadow: none;
          }

        }

        /* =========================================================
           REDUCED MOTION
        ========================================================= */

        @media (prefers-reduced-motion: reduce) {

          .property-detail-hero-track,
          .property-detail-action,
          .property-detail-suggestion,
          .property-detail-suggestion-image img {
            transition: none;
          }

        }

      `}</style>

      <main className="property-detail-page">
        <div className="property-detail-container">

          {/* =====================================================
              BACK
          ===================================================== */}

          <Link to="/" className="property-detail-back">
            <span aria-hidden="true">←</span>
            <span>Back to Properties</span>
          </Link>

          {/* =====================================================
              MAIN PROPERTY CARD
          ===================================================== */}

          <article className="property-detail-card">

            {/* ===================================================
                HERO IMAGE
            =================================================== */}

            <div className="property-detail-hero">

              {images.length > 0 ? (
                <div
                  className="property-detail-hero-track"
                  style={{
                    transform: `translate3d(-${
                      activeImage * 100
                    }%, 0, 0)`,
                  }}
                >
                  {images.map((image, index) => (
                    <img
                      key={`${image}-${index}`}
                      src={image}
                      alt={`${property.name} ${index + 1}`}
                      className="property-detail-slide"
                      draggable="false"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ))}
                </div>
              ) : (
                <div
                  className="property-detail-slide"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "13px",
                  }}
                >
                  Image not available
                </div>
              )}

              <div className="property-detail-hero-overlay" />

              <span className="property-detail-badge">
                {property.property_type || "Property"}
              </span>

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    className="property-detail-image-button property-detail-prev"
                    onClick={prevImage}
                    aria-label="Previous property image"
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    className="property-detail-image-button property-detail-next"
                    onClick={nextImage}
                    aria-label="Next property image"
                  >
                    ›
                  </button>

                  <span className="property-detail-counter">
                    {activeImage + 1} / {images.length}
                  </span>

                  <div className="property-detail-dots">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        aria-label={`Show image ${index + 1}`}
                        className={`property-detail-dot ${
                          activeImage === index ? "active" : ""
                        }`}
                        onClick={() => setActiveImage(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* ===================================================
                CONTENT
            =================================================== */}

            <div className="property-detail-content">

              {/* TOP */}

              <div className="property-detail-top">

                <div className="property-detail-title-area">

                  <span className="property-detail-type">
                    {property.property_type || "Property"}
                  </span>

                  <h1 className="property-detail-title">
                    {property.name}
                  </h1>

                  <p className="property-detail-builder">
                    By {property.builder_name || "KSR Realty Ventures"}
                  </p>

                </div>

                <div className="property-detail-price-area">

                  <p className="property-detail-price">
                    {property.price_str || "Price on Request"}
                  </p>

                  {property.price_sqft && (
                    <p className="property-detail-price-sqft">
                      {property.price_sqft}
                    </p>
                  )}

                </div>

              </div>

              {/* =================================================
                  STATS
              ================================================= */}

              <div className="property-detail-stats">

                <div className="property-detail-stat">
                  <span className="property-detail-stat-label">
                    Area
                  </span>

                  <span className="property-detail-stat-value">
                    {property.area
                      ? `${property.area.toLocaleString()} sq.ft`
                      : "—"}
                  </span>
                </div>

                <div className="property-detail-stat">
                  <span className="property-detail-stat-label">
                    BHK / Layout
                  </span>

                  <span className="property-detail-stat-value">
                    {property.bhk || "—"}
                  </span>
                </div>

                <div className="property-detail-stat">
                  <span className="property-detail-stat-label">
                    Facing
                  </span>

                  <span className="property-detail-stat-value">
                    {property.facing || "—"}
                  </span>
                </div>

                <div className="property-detail-stat">
                  <span className="property-detail-stat-label">
                    RERA
                  </span>

                  <span className="property-detail-stat-value">
                    {property.rera_id || "Details available"}
                  </span>
                </div>

              </div>

              {/* =================================================
                  DESCRIPTION + LOCATION
              ================================================= */}

              <div className="property-detail-info">

                {/* DESCRIPTION */}

                <div className="property-detail-info-block">

                  <p className="property-detail-section-label">
                    About Property
                  </p>

                  <h2 className="property-detail-section-title">
                    A place designed for better living
                  </h2>

                  <p className="property-detail-description">
                    {property.description ||
                      "Discover a thoughtfully planned property offering comfort, convenience and long-term value. Contact KSR Realty Ventures for complete project details."}
                  </p>

                </div>

                {/* LOCATION */}

                <div className="property-detail-info-block">

                  <p className="property-detail-section-label">
                    Location
                  </p>

                  <h2 className="property-detail-section-title">
                    Prime Location
                  </h2>

                  <div className="property-detail-location">

                    <div
                      className="property-detail-location-icon"
                      aria-hidden="true"
                    >
                      📍
                    </div>

                    <div className="property-detail-location-content">

                      <span className="property-detail-location-label">
                        Project Location
                      </span>

                      <a
                        href={mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="property-detail-location-link"
                      >
                        {property.locality || "Indore"}, Madhya Pradesh
                      </a>

                    </div>

                  </div>

                </div>

              </div>

              {/* =================================================
                  AMENITIES
              ================================================= */}

              <div className="property-detail-amenities-block">

                <p className="property-detail-section-label">
                  Project Features
                </p>

                <h2 className="property-detail-section-title">
                  Amenities & Facilities
                </h2>

                <ul className="property-detail-amenities">

                  {facilities.map((facility, index) => (
                    <li
                      key={`${facility}-${index}`}
                      className="property-detail-amenity"
                    >
                      <span className="property-detail-check">
                        ✓
                      </span>

                      <span>{facility}</span>
                    </li>
                  ))}

                </ul>

              </div>

              {/* =================================================
                  ACTIONS
              ================================================= */}

              <div className="property-detail-actions">

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="property-detail-action property-detail-whatsapp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>

                  Enquire on WhatsApp
                </a>

                <a
                  href="tel:+917470750708"
                  className="property-detail-action property-detail-visit"
                >
                  📞 Book a Site Visit
                </a>

              </div>

            </div>
          </article>

          {/* =====================================================
              RELATED PROPERTIES
          ===================================================== */}

          {suggestions.length > 0 && (
            <section className="property-detail-more">

              <div className="property-detail-more-header">

                <div>
                  <p className="property-detail-more-label">
                    Explore More
                  </p>

                  <h2 className="property-detail-more-title">
                    You May Also Like
                  </h2>

                  <p className="property-detail-more-subtitle">
                    Discover more properties from KSR Realty Ventures.
                  </p>
                </div>

                <Link
                  to="/"
                  className="property-detail-more-link"
                >
                  View All Properties →
                </Link>

              </div>

              <div className="property-detail-more-grid">

                {suggestions.map((item, index) => {

                  const image =
                    Array.isArray(item.images) &&
                    item.images.length > 0
                      ? getImagePath(item.images[0])
                      : "";

                  const itemSlug = createSlug(item.name);

                  return (
                    <Link
                      key={`${item.id || item.name}-${index}`}
                      to={`/property/${itemSlug}`}
                      className="property-detail-suggestion"
                    >

                      {/* IMAGE */}

                      <div className="property-detail-suggestion-image">

                        {image ? (
                          <img
                            src={image}
                            alt={item.name}
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        ) : (
                          <div
                            style={{
                              width: "100%",
                              height: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "var(--color-taupe)",
                              fontSize: "12px",
                            }}
                          >
                            No Image
                          </div>
                        )}

                        <span className="property-detail-suggestion-badge">
                          {item.property_type || "Property"}
                        </span>

                      </div>

                      {/* CONTENT */}

                      <div className="property-detail-suggestion-content">

                        <h3 className="property-detail-suggestion-name">
                          {item.name}
                        </h3>

                        <p className="property-detail-suggestion-location">
                          📍 {item.locality || "Indore"}, Indore
                        </p>

                        <div className="property-detail-suggestion-bottom">

                          <div>

                            <span className="property-detail-suggestion-price">
                              {item.price_str || "Price on Request"}
                            </span>

                            {item.price_sqft && (
                              <span className="property-detail-suggestion-sqft">
                                {item.price_sqft}
                              </span>
                            )}

                          </div>

                          <span className="property-detail-suggestion-arrow">
                            →
                          </span>

                        </div>

                      </div>

                    </Link>
                  );
                })}

              </div>

            </section>
          )}

        </div>
      </main>
    </>
  );
}