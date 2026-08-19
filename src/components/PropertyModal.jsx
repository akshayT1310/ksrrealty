import React, { useEffect, useState } from "react";

function PropertyModal({ property, onClose }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const images =
    Array.isArray(property?.images) && property.images.length
      ? property.images.filter(Boolean)
      : [];

  const facilities =
    Array.isArray(property?.facilities) && property.facilities.length
      ? property.facilities
      : [
          "Gated Community Security",
          "24x7 Clean Water Supply",
          "Concrete Internal Roads",
          "Children Play Area",
        ];

  const propertyName = property?.name || "Property Details";
  const propertyType = property?.property_type || "Property";
  const builder = property?.builder_name || "KSR Realty";
  const price = property?.price_str || "Price on Request";

  /* =====================================================
     BODY LOCK
  ===================================================== */

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  /* =====================================================
     RESET IMAGE
  ===================================================== */

  useEffect(() => {
    setActiveSlideIndex(0);
  }, [property]);

  /* =====================================================
     ESC
  ===================================================== */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  /* =====================================================
     SLIDER
  ===================================================== */

  const handlePrev = () => {
    if (images.length <= 1) return;

    setActiveSlideIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    if (images.length <= 1) return;

    setActiveSlideIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;

    event.currentTarget.src =
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85";
  };

  /* =====================================================
     BACKDROP
  ===================================================== */

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  /* =====================================================
     WHATSAPP
  ===================================================== */

  const customWaText = `Hi KSR Realty, I am interested in ${propertyName}${
    property?.locality ? ` in ${property.locality}` : ""
  }. Please share the price, availability, RERA details and payment plan.`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=917470750708&text=${encodeURIComponent(
    customWaText
  )}`;

  /* =====================================================
     TOUCH
  ===================================================== */

  const handleTouchStart = (event) => {
    if (!event.touches?.length) return;

    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    if (touchStart === null || !event.changedTouches?.length) return;

    const touchEnd = event.changedTouches[0].clientX;
    const difference = touchStart - touchEnd;

    if (Math.abs(difference) > 45) {
      difference > 0 ? handleNext() : handlePrev();
    }

    setTouchStart(null);
  };

  return (
    <>
      <style>{`

        /* =====================================================
           ROOT
        ===================================================== */

        .ksr-property-modal-root {
          position: fixed;
          inset: 0;
          z-index: 2147483647;

          width: 100vw;
          height: 100vh;
          height: 100dvh;

          font-family:
            Inter,
            "Helvetica Neue",
            Arial,
            sans-serif;
        }

        .ksr-property-modal-root *,
        .ksr-property-modal-root *::before,
        .ksr-property-modal-root *::after {
          box-sizing: border-box;
        }


        /* =====================================================
           BACKDROP
        ===================================================== */

        .ksr-property-modal-backdrop {
          position: fixed;
          inset: 0;

          width: 100%;
          height: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 24px;

          background:
            rgba(7, 15, 25, 0.76);

          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);

          overflow: hidden;
        }


        /* =====================================================
           MAIN MODAL
        ===================================================== */

        .ksr-property-modal {
          position: relative;

          width: min(1100px, 100%);
          height: min(680px, calc(100vh - 48px));
          height: min(680px, calc(100dvh - 48px));

          display: grid;

          grid-template-columns:
            minmax(0, 0.92fr)
            minmax(0, 1.08fr);

          overflow: hidden;

          background: #f8f6f1;

          border: 1px solid rgba(174, 135, 64, 0.3);

          border-radius: 28px;

          box-shadow:
            0 40px 100px rgba(0, 0, 0, 0.38);

          animation:
            ksrPropertyModalIn
            0.28s ease both;
        }


        @keyframes ksrPropertyModalIn {
          from {
            opacity: 0;
            transform:
              translateY(18px)
              scale(0.985);
          }

          to {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }
        }


        /* =====================================================
           LEFT IMAGE AREA
        ===================================================== */

        .ksr-property-gallery {
          position: relative;

          width: 100%;
          height: 100%;

          min-width: 0;
          min-height: 0;

          overflow: hidden;

          background: #17202a;
        }


        .ksr-property-gallery-track {
          display: flex;

          width: 100%;
          height: 100%;

          transition:
            transform 0.45s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );
        }


        .ksr-property-gallery-slide {
          flex: 0 0 100%;

          width: 100%;
          height: 100%;

          object-fit: cover;

          display: block;

          user-select: none;

          -webkit-user-drag: none;
        }


        .ksr-property-gallery-overlay {
          position: absolute;
          inset: 0;

          pointer-events: none;

          background:
            linear-gradient(
              180deg,
              rgba(0,0,0,0.42),
              transparent 30%,
              transparent 62%,
              rgba(0,0,0,0.52)
            );
        }


        /* =====================================================
           IMAGE EMPTY
        ===================================================== */

        .ksr-property-gallery-empty {
          width: 100%;
          height: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          color: rgba(255,255,255,0.7);

          font-size: 13px;
        }


        /* =====================================================
           TOP CONTROLS
        ===================================================== */

        .ksr-property-modal-topbar {
          position: absolute;

          top: 0;
          left: 0;
          right: 0;

          z-index: 100;

          display: flex;

          align-items: center;
          justify-content: space-between;

          padding: 16px;

          pointer-events: none;
        }


        .ksr-property-back,
        .ksr-property-close {
          border: 1px solid rgba(255,255,255,0.32);

          background:
            rgba(7,17,30,0.66);

          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);

          color: #fff;

          cursor: pointer;

          pointer-events: auto;

          transition:
            0.2s ease;
        }


        .ksr-property-back {
          min-height: 40px;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 7px;

          padding: 0 14px;

          border-radius: 999px;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 0.12em;

          text-transform: uppercase;
        }


        .ksr-property-back:hover {
          background: #ae8740;

          transform: translateX(-2px);
        }


        .ksr-property-close {
          width: 40px;
          height: 40px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          font-size: 23px;

          line-height: 1;
        }


        .ksr-property-close:hover {
          background: #ae8740;

          transform: rotate(90deg);
        }


        /* =====================================================
           SLIDER BUTTONS
        ===================================================== */

        .ksr-property-gallery-btn {
          position: absolute;

          top: 50%;

          z-index: 30;

          width: 44px;
          height: 44px;

          display: flex;

          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(255,255,255,0.38);

          border-radius: 50%;

          background:
            rgba(7,17,30,0.62);

          backdrop-filter: blur(10px);

          color: #fff;

          font-size: 25px;

          cursor: pointer;

          transform: translateY(-50%);

          transition: 0.2s ease;
        }


        .ksr-property-gallery-btn:hover {
          background: #ae8740;

          transform:
            translateY(-50%)
            scale(1.05);
        }


        .ksr-property-gallery-prev {
          left: 16px;
        }


        .ksr-property-gallery-next {
          right: 16px;
        }


        /* =====================================================
           COUNTER
        ===================================================== */

        .ksr-property-counter {
          position: absolute;

          left: 50%;
          bottom: 18px;

          z-index: 30;

          transform: translateX(-50%);

          padding: 7px 12px;

          border:
            1px solid
            rgba(255,255,255,0.28);

          border-radius: 999px;

          background:
            rgba(7,17,30,0.62);

          color: #fff;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.1em;
        }


        /* =====================================================
           RIGHT CONTENT
        ===================================================== */

        .ksr-property-scroll {
          min-width: 0;
          min-height: 0;

          height: 100%;

          overflow-y: auto;
          overflow-x: hidden;

          scrollbar-width: thin;

          scrollbar-color:
            rgba(174,135,64,0.55)
            transparent;
        }


        .ksr-property-scroll::-webkit-scrollbar {
          width: 5px;
        }


        .ksr-property-scroll::-webkit-scrollbar-track {
          background: transparent;
        }


        .ksr-property-scroll::-webkit-scrollbar-thumb {
          background:
            rgba(174,135,64,0.5);

          border-radius: 999px;
        }


        .ksr-property-body {
          min-height: 100%;

          display: flex;

          flex-direction: column;

          padding:
            48px 40px 32px;
        }


        /* =====================================================
           HEADING
        ===================================================== */

        .ksr-property-heading {
          display: flex;

          align-items: flex-start;
          justify-content: space-between;

          gap: 20px;

          padding-bottom: 20px;

          border-bottom:
            1px solid
            #dedbd3;
        }


        .ksr-property-heading-left {
          min-width: 0;

          flex: 1;
        }


        .ksr-property-badge {
          display: inline-flex;

          align-items: center;

          padding: 7px 11px;

          border-radius: 999px;

          background:
            rgba(174,135,64,0.12);

          color: #8e6b2e;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 0.14em;

          text-transform: uppercase;
        }


        .ksr-property-title {
          margin:
            12px 0 6px;

          color: #1c2732;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            clamp(1.9rem, 3vw, 2.8rem);

          font-weight: 400;

          line-height: 1.02;

          letter-spacing: -0.045em;

          overflow-wrap: anywhere;
        }


        .ksr-property-builder {
          margin: 0;

          color: #77746d;

          font-size: 12px;
        }


        /* =====================================================
           PRICE
        ===================================================== */

        .ksr-property-price {
          flex-shrink: 0;

          text-align: right;
        }


        .ksr-property-price-value {
          margin: 0;

          color: #1c2732;

          font-family:
            Georgia,
            serif;

          font-size:
            clamp(1.25rem, 2.4vw, 1.8rem);

          font-weight: 600;

          line-height: 1.1;
        }


        .ksr-property-price-sqft {
          margin:
            6px 0 0;

          color: #88847c;

          font-size: 10px;
        }


        /* =====================================================
           DETAILS
        ===================================================== */

        .ksr-property-details {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0,1fr));

          margin:
            22px 0 4px;

          border:
            1px solid
            #dedbd3;

          border-radius: 16px;

          overflow: hidden;

          background:
            #fffdf9;
        }


        .ksr-property-detail {
          min-width: 0;

          padding:
            13px 14px;

          border-right:
            1px solid
            #dedbd3;

          border-bottom:
            1px solid
            #dedbd3;
        }


        .ksr-property-detail:nth-child(2n) {
          border-right: none;
        }


        .ksr-property-detail:nth-child(3),
        .ksr-property-detail:nth-child(4) {
          border-bottom: none;
        }


        .ksr-property-detail-label {
          display: block;

          margin-bottom: 5px;

          color: #8b8881;

          font-size: 8px;

          font-weight: 800;

          letter-spacing: 0.12em;

          text-transform: uppercase;
        }


        .ksr-property-detail-value {
          display: block;

          color: #26323c;

          font-size: 12px;

          line-height: 1.4;

          overflow-wrap: anywhere;
        }


        /* =====================================================
           INFO SECTIONS
        ===================================================== */

        .ksr-property-section {
          margin-top: 20px;
        }


        .ksr-property-section-label {
          display: flex;

          align-items: center;

          gap: 8px;

          margin-bottom: 8px;

          color: #8e6b2e;

          font-size: 8px;

          font-weight: 800;

          letter-spacing: 0.16em;

          text-transform: uppercase;
        }


        .ksr-property-section-label::before {
          content: "";

          width: 22px;
          height: 1px;

          background: #ae8740;
        }


        .ksr-property-location {
          margin: 0;

          color: #6e706f;

          font-size: 12px;

          line-height: 1.6;
        }


        .ksr-property-location a {
          color: inherit;

          text-decoration: underline;

          text-decoration-color:
            rgba(174,135,64,0.6);

          text-underline-offset: 3px;
        }


        .ksr-property-description {
          margin: 0;

          color: #666d73;

          font-size: 12px;

          line-height: 1.7;
        }


        /* =====================================================
           AMENITIES
        ===================================================== */

        .ksr-property-amenities {
          display: grid;

          grid-template-columns:
            repeat(2,minmax(0,1fr));

          gap: 8px 16px;

          margin: 0;

          padding: 0;

          list-style: none;
        }


        .ksr-property-amenity {
          position: relative;

          padding-left: 16px;

          color: #6c7175;

          font-size: 11px;

          line-height: 1.4;
        }


        .ksr-property-amenity::before {
          content: "";

          position: absolute;

          left: 0;
          top: 0.48em;

          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #ae8740;

          box-shadow:
            0 0 0 3px
            rgba(174,135,64,0.10);
        }


        /* =====================================================
           BOOKING AREA
        ===================================================== */

        .ksr-property-booking {
          margin-top: auto;

          padding-top: 24px;
        }


        .ksr-property-booking-title {
          margin:
            0 0 11px;

          color: #1c2732;

          font-family:
            Georgia,
            serif;

          font-size: 18px;

          font-weight: 400;
        }


        .ksr-property-actions {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 10px;
        }


        .ksr-property-action {
          min-height: 48px;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 7px;

          padding:
            10px 14px;

          border-radius: 11px;

          text-decoration: none;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 0.08em;

          text-transform: uppercase;

          transition:
            transform 0.2s ease,
            background 0.2s ease,
            box-shadow 0.2s ease;
        }


        .ksr-property-action:hover {
          transform: translateY(-2px);
        }


        .ksr-property-whatsapp {
          background: #ae8740;

          color: #fff;

          box-shadow:
            0 9px 22px
            rgba(174,135,64,0.18);
        }


        .ksr-property-whatsapp:hover {
          background: #92702f;
        }


        .ksr-property-visit {
          background: #0a1931;

          color: #fff;

          box-shadow:
            0 9px 22px
            rgba(10,25,49,0.14);
        }


        .ksr-property-visit:hover {
          background: #142846;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 850px) {

          .ksr-property-modal {
            width: min(760px, 100%);

            height:
              min(700px, calc(100dvh - 32px));

            grid-template-columns:
              minmax(0, 0.85fr)
              minmax(0, 1.15fr);
          }


          .ksr-property-body {
            padding:
              40px 27px 25px;
          }


          .ksr-property-title {
            font-size: 2rem;
          }


          .ksr-property-price-value {
            font-size: 1.3rem;
          }


          .ksr-property-amenities {
            grid-template-columns: 1fr;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 680px) {

          .ksr-property-modal-backdrop {
            align-items: flex-end;

            padding: 0;

            background:
              rgba(7,15,25,0.72);
          }


          .ksr-property-modal {
            width: 100%;

            height: 100dvh;

            max-height: 100dvh;

            display: flex;

            flex-direction: column;

            border-radius:
              24px 24px 0 0;

            border-left: none;
            border-right: none;
            border-bottom: none;
          }


          /* IMAGE TOP */

          .ksr-property-gallery {
            flex:
              0 0 270px;

            height: 270px;

            min-height: 270px;

            border-radius:
              24px 24px 0 0;
          }


          /* CONTENT BELOW */

          .ksr-property-scroll {
            flex: 1;

            min-height: 0;
          }


          .ksr-property-body {
            padding:
              22px 17px 28px;
          }


          .ksr-property-heading {
            display: block;

            padding-bottom: 18px;
          }


          .ksr-property-title {
            font-size: 1.9rem;

            line-height: 1.04;
          }


          .ksr-property-price {
            margin-top: 13px;

            text-align: left;
          }


          .ksr-property-price-value {
            font-size: 1.4rem;
          }


          .ksr-property-details {
            margin:
              18px 0 2px;
          }


          .ksr-property-section {
            margin-top: 21px;
          }


          .ksr-property-description,
          .ksr-property-location {
            font-size: 12px;
          }


          .ksr-property-booking {
            margin-top: 28px;

            padding-top: 20px;
          }


          .ksr-property-actions {
            grid-template-columns: 1fr;
          }


          .ksr-property-action {
            min-height: 50px;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 420px) {

          .ksr-property-gallery {
            flex-basis: 235px;

            height: 235px;

            min-height: 235px;
          }


          .ksr-property-body {
            padding:
              19px 14px 25px;
          }


          .ksr-property-title {
            font-size: 1.7rem;
          }


          .ksr-property-details {
            grid-template-columns:
              1fr 1fr;
          }


          .ksr-property-detail {
            padding:
              12px 10px;
          }


          .ksr-property-detail-value {
            font-size: 11px;
          }


          .ksr-property-amenities {
            grid-template-columns: 1fr;
          }


          .ksr-property-gallery-btn {
            width: 36px;
            height: 36px;

            font-size: 20px;
          }


          .ksr-property-back {
            min-height: 36px;

            padding:
              0 11px;

            font-size: 8px;
          }


          .ksr-property-close {
            width: 36px;
            height: 36px;

            font-size: 20px;
          }
        }


        /* =====================================================
           VERY SMALL
        ===================================================== */

        @media (max-width: 350px) {

          .ksr-property-gallery {
            flex-basis: 215px;

            height: 215px;

            min-height: 215px;
          }


          .ksr-property-details {
            grid-template-columns: 1fr;
          }


          .ksr-property-detail {
            border-right: none !important;

            border-bottom:
              1px solid
              #dedbd3;
          }


          .ksr-property-detail:last-child {
            border-bottom: none;
          }
        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .ksr-property-modal,
          .ksr-property-gallery-track,
          .ksr-property-gallery-btn,
          .ksr-property-action,
          .ksr-property-close,
          .ksr-property-back {
            animation: none !important;

            transition: none !important;
          }
        }

      `}</style>


      {/* =====================================================
          MODAL ROOT
      ===================================================== */}

      <div className="ksr-property-modal-root">

        <div
          className="ksr-property-modal-backdrop"
          onMouseDown={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label={`${propertyName} details`}
        >

          <div className="ksr-property-modal">


            {/* =================================================
                TOP CONTROLS
            ================================================= */}

            <div className="ksr-property-modal-topbar">

              <button
                type="button"
                className="ksr-property-back"
                onClick={onClose}
              >
                <span>←</span>
                <span>Back</span>
              </button>


              <button
                type="button"
                className="ksr-property-close"
                onClick={onClose}
                aria-label="Close"
              >
                ×
              </button>

            </div>


            {/* =================================================
                LEFT IMAGE
            ================================================= */}

            <div
              className="ksr-property-gallery"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >

              {images.length > 0 ? (

                <div
                  className="ksr-property-gallery-track"
                  style={{
                    transform:
                      `translate3d(-${
                        activeSlideIndex * 100
                      }%,0,0)`,
                  }}
                >

                  {images.map((image, index) => (

                    <img
                      key={`${image}-${index}`}
                      src={image}
                      alt={`${propertyName} ${index + 1}`}
                      className="ksr-property-gallery-slide"
                      onError={handleImageError}
                      draggable="false"
                    />

                  ))}

                </div>

              ) : (

                <div className="ksr-property-gallery-empty">
                  No property images available
                </div>

              )}


              <div className="ksr-property-gallery-overlay" />


              {images.length > 1 && (
                <>

                  <button
                    type="button"
                    className="
                      ksr-property-gallery-btn
                      ksr-property-gallery-prev
                    "
                    onClick={handlePrev}
                  >
                    ‹
                  </button>


                  <button
                    type="button"
                    className="
                      ksr-property-gallery-btn
                      ksr-property-gallery-next
                    "
                    onClick={handleNext}
                  >
                    ›
                  </button>


                  <div className="ksr-property-counter">
                    {activeSlideIndex + 1}
                    {" / "}
                    {images.length}
                  </div>

                </>
              )}

            </div>


            {/* =================================================
                RIGHT DETAILS
            ================================================= */}

            <div className="ksr-property-scroll">

              <div className="ksr-property-body">


                {/* HEADER */}

                <div className="ksr-property-heading">

                  <div className="ksr-property-heading-left">

                    <span className="ksr-property-badge">
                      {propertyType}
                    </span>

                    <h2 className="ksr-property-title">
                      {propertyName}
                    </h2>

                    <p className="ksr-property-builder">
                      By {builder}
                    </p>

                  </div>


                  <div className="ksr-property-price">

                    <p className="ksr-property-price-value">
                      {price}
                    </p>

                    {property?.price_sqft && (
                      <p className="ksr-property-price-sqft">
                        {property.price_sqft}
                      </p>
                    )}

                  </div>

                </div>


                {/* PROPERTY DETAILS */}

                <div className="ksr-property-details">

                  <div className="ksr-property-detail">

                    <span className="ksr-property-detail-label">
                      Area
                    </span>

                    <span className="ksr-property-detail-value">
                      {property?.area
                        ? `${property.area} sq.ft`
                        : "—"}
                    </span>

                  </div>


                  <div className="ksr-property-detail">

                    <span className="ksr-property-detail-label">
                      BHK / Layout
                    </span>

                    <span className="ksr-property-detail-value">
                      {property?.bhk || "—"}
                    </span>

                  </div>


                  <div className="ksr-property-detail">

                    <span className="ksr-property-detail-label">
                      Facing
                    </span>

                    <span className="ksr-property-detail-value">
                      {property?.facing || "—"}
                    </span>

                  </div>


                  <div className="ksr-property-detail">

                    <span className="ksr-property-detail-label">
                      RERA Status
                    </span>

                    <span className="ksr-property-detail-value">
                      {property?.rera_id
                        ? `RERA: ${property.rera_id}`
                        : "RERA: Verified"}
                    </span>

                  </div>

                </div>


                {/* LOCATION */}

                <div className="ksr-property-section">

                  <div className="ksr-property-section-label">
                    Location
                  </div>

                  <p className="ksr-property-location">

                    📍{" "}

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        `${propertyName} ${
                          property?.locality || ""
                        } Indore`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {property?.locality || "Indore"}, Indore
                    </a>

                  </p>

                </div>


                {/* DESCRIPTION */}

                <div className="ksr-property-section">

                  <div className="ksr-property-section-label">
                    About Property
                  </div>

                  <p className="ksr-property-description">

                    {property?.description ||
                      "Contact us for complete property details, availability, pricing and payment information."}

                  </p>

                </div>


                {/* AMENITIES */}

                <div className="ksr-property-section">

                  <div className="ksr-property-section-label">
                    Amenities & Facilities
                  </div>

                  <ul className="ksr-property-amenities">

                    {facilities.map(
                      (facility, index) => (

                        <li
                          key={`${facility}-${index}`}
                          className="ksr-property-amenity"
                        >
                          {facility}
                        </li>

                      )
                    )}

                  </ul>

                </div>


                {/* =================================================
                    BOOKING
                ================================================= */}

                <div className="ksr-property-booking">

                  <h3 className="ksr-property-booking-title">
                    Interested in this property?
                  </h3>


                  <div className="ksr-property-actions">

                    {/* WHATSAPP */}

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        ksr-property-action
                        ksr-property-whatsapp
                      "
                    >

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                      </svg>

                      Enquire on WhatsApp

                    </a>


                    {/* BOOK SITE VISIT */}

                    <a
                      href="tel:+917470750708"
                      className="
                        ksr-property-action
                        ksr-property-visit
                      "
                    >

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A12.84 12.84 0 0 1 22 16.92z" />
                      </svg>

                      Book Site Visit

                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default PropertyModal;