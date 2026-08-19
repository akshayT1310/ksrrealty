import React from "react";

export default function WhyKSR() {
  const points = [
    {
      n: "01",
      t: "Performance First",
      d: "Every creative is backed by data & ROI.",
    },
    {
      n: "02",
      t: "In-House Team",
      d: "No outsourcing. Design, content & ads under one roof.",
    },
    {
      n: "03",
      t: "Scale Ready",
      d: "Systems that work from 0 to 10cr+ revenue.",
    },
  ];

  return (
    <section className="ksr-testimonials">

      {/* =========================================
          SOFT BACKGROUND DETAILS
      ========================================= */}

      <div className="ksr-light-decoration ksr-light-decoration-one"></div>
      <div className="ksr-light-decoration ksr-light-decoration-two"></div>


      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="ksr-testimonials-container">

        {/* =======================================
            LEFT CONTENT
        ======================================= */}

        <div className="ksr-testimonials-content">

          {/* =====================================
              LABEL
          ===================================== */}

          <div className="ksr-label">

            <span className="ksr-label-line"></span>

            <span>WHY KSR</span>

          </div>


          {/* =====================================
              HEADING
          ===================================== */}

          <div className="ksr-heading-block">

            <h2>
              We Build Brands That{" "}
              <br className="desktop-break" />
              <span>Actually Convert</span>
            </h2>

            <p>
              No fluff. Just strategy, creative & performance that drives
              real business growth.
            </p>

          </div>


          {/* =====================================
              POINTS CARD
          ===================================== */}

          <div className="ksr-points-card">

            {points.map((item, index) => (

              <div
                key={item.n}
                className={`ksr-point ${
                  index === points.length - 1
                    ? "last-point"
                    : ""
                }`}
              >

                {/* NUMBER */}

                <div className="ksr-point-number">
                  {item.n}
                </div>


                {/* CONTENT */}

                <div className="ksr-point-content">

                  <h3>
                    {item.t}
                  </h3>

                  <p>
                    {item.d}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* =======================================
            RIGHT IMAGE
        ======================================= */}

        <div className="ksr-testimonials-image">

          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
            alt="Luxury Realty"
            loading="lazy"
          />


          {/* SUBTLE IMAGE OVERLAY */}

          <div className="ksr-image-overlay"></div>


          {/* IMAGE LABEL */}

          <div className="ksr-image-label">

            <span></span>

            <p>
              KSR REALTY VENTURES
            </p>

          </div>


          {/* =====================================
              QUOTE
          ===================================== */}

          <div className="ksr-quote">

            <div className="ksr-quote-mark">
              “
            </div>

            <p>
              KSR didn't just market us, they became our growth partners.
            </p>


            <div className="ksr-founder">

              <span></span>

              <strong>
                Founder, KSR Realty Ventures
              </strong>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================
          RESPONSIVE CSS
      ========================================= */}

      <style>{`

        /* =====================================================
           KSR WHY SECTION
           LIGHT LUXURY / EDITORIAL
        ===================================================== */

        .ksr-testimonials {

          --ksr-background: #faf9f6;
          --ksr-white: #ffffff;
          --ksr-white-soft: #fdfcf9;

          --ksr-ink: #191817;
          --ksr-text: #383632;
          --ksr-muted: #77736c;

          --ksr-brass: #b28c52;
          --ksr-brass-light: #d7c29a;

          --ksr-border: rgba(25, 24, 23, 0.085);

          position: relative;

          width: 100%;

          padding: 105px 20px;

          background:
            linear-gradient(
              180deg,
              #ffffff 0%,
              #faf9f6 100%
            );

          overflow: hidden;

          isolation: isolate;
        }


        /* =====================================================
           BACKGROUND DECORATION
        ===================================================== */

        .ksr-light-decoration {

          position: absolute;

          pointer-events: none;

          border-radius: 50%;

          z-index: -1;
        }


        .ksr-light-decoration-one {

          width: 500px;

          height: 500px;

          top: -350px;

          left: -280px;

          background:
            radial-gradient(
              circle,
              rgba(178, 140, 82, 0.07) 0%,
              rgba(178, 140, 82, 0.025) 38%,
              transparent 72%
            );
        }


        .ksr-light-decoration-two {

          width: 600px;

          height: 600px;

          right: -420px;

          bottom: -400px;

          background:
            radial-gradient(
              circle,
              rgba(178, 140, 82, 0.055) 0%,
              rgba(178, 140, 82, 0.018) 42%,
              transparent 72%
            );
        }


        /* =====================================================
           MAIN CONTAINER
        ===================================================== */

        .ksr-testimonials-container {

          width: 100%;

          max-width: 1180px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            minmax(0, 0.95fr)
            minmax(0, 1.05fr);

          gap: 68px;

          align-items: center;
        }


        /* =====================================================
           LEFT CONTENT
        ===================================================== */

        .ksr-testimonials-content {

          width: 100%;

          min-width: 0;
        }


        /* =====================================================
           LABEL
        ===================================================== */

        .ksr-label {

          display: flex;

          align-items: center;

          gap: 12px;

          margin-bottom: 21px;

          color: var(--ksr-brass);

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.24em;

          line-height: 1;

          text-transform: uppercase;
        }


        .ksr-label-line {

          width: 35px;

          height: 1px;

          flex-shrink: 0;

          background: var(--ksr-brass);
        }


        /* =====================================================
           HEADING
        ===================================================== */

        .ksr-heading-block {

          width: 100%;
        }


        .ksr-heading-block h2 {

          margin: 0;

          color: var(--ksr-ink);

          font-family: var(--font-display);

          font-size:
            clamp(42px, 4.2vw, 60px);

          font-weight: 500;

          line-height: 0.98;

          letter-spacing: -0.04em;
        }


        .ksr-heading-block h2 span {

          color: var(--ksr-brass);

          font-style: italic;

          font-weight: 400;
        }


        .ksr-heading-block > p {

          width: 100%;

          max-width: 500px;

          margin: 24px 0 0;

          color: var(--ksr-muted);

          font-size: 15px;

          font-weight: 400;

          line-height: 1.75;
        }


        /* =====================================================
           POINTS CARD
        ===================================================== */

        .ksr-points-card {

          position: relative;

          width: 100%;

          margin-top: 37px;

          padding: 7px 29px;

          background: var(--ksr-white);

          border:
            1px solid
            var(--ksr-border);

          border-radius: 16px;

          box-shadow:
            0 14px 38px
            rgba(24, 23, 22, 0.045);

          overflow: hidden;
        }


        /* GOLD VERTICAL ACCENT */

        .ksr-points-card::before {

          content: "";

          position: absolute;

          left: 0;

          top: 27px;

          bottom: 27px;

          width: 2px;

          background: var(--ksr-brass);

          opacity: 0.72;
        }


        /* =====================================================
           POINT
        ===================================================== */

        .ksr-point {

          display: flex;

          align-items: flex-start;

          gap: 19px;

          padding: 22px 0;

          border-bottom:
            1px solid
            rgba(25, 24, 23, 0.075);
        }


        .ksr-point:first-child {

          padding-top: 20px;
        }


        .ksr-point.last-point {

          padding-bottom: 20px;

          border-bottom: none;
        }


        /* =====================================================
           NUMBER
        ===================================================== */

        .ksr-point-number {

          width: 30px;

          flex-shrink: 0;

          margin-top: 2px;

          color: var(--ksr-brass);

          font-family:
            "Courier New",
            monospace;

          font-size: 11px;

          font-weight: 500;

          letter-spacing: 0.04em;
        }


        /* =====================================================
           POINT CONTENT
        ===================================================== */

        .ksr-point-content {

          min-width: 0;
        }


        .ksr-point-content h3 {

          margin: 0;

          color: var(--ksr-ink);

          font-size: 15px;

          font-weight: 600;

          line-height: 1.4;

          letter-spacing: -0.01em;
        }


        .ksr-point-content p {

          margin: 6px 0 0;

          color: var(--ksr-muted);

          font-size: 13px;

          font-weight: 400;

          line-height: 1.6;
        }


        /* =====================================================
           IMAGE
        ===================================================== */

        .ksr-testimonials-image {

          position: relative;

          width: 100%;

          height: 570px;

          overflow: hidden;

          border-radius: 18px;

          border:
            1px solid
            rgba(25, 24, 23, 0.09);

          background: #eeeae1;

          box-shadow:
            0 24px 55px
            rgba(25, 24, 23, 0.095);
        }


        .ksr-testimonials-image img {

          position: absolute;

          inset: 0;

          width: 100%;

          height: 100%;

          display: block;

          object-fit: cover;

          object-position: center;

          transition:
            transform 0.9s
            cubic-bezier(
              0.2,
              0.7,
              0.2,
              1
            );
        }


        .ksr-testimonials-image:hover img {

          transform: scale(1.04);
        }


        /* =====================================================
           IMAGE OVERLAY
           VERY LIGHT — IMAGE STAYS BRIGHT
        ===================================================== */

        .ksr-image-overlay {

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(20, 19, 17, 0.38) 0%,
              rgba(20, 19, 17, 0.10) 35%,
              rgba(20, 19, 17, 0.015) 70%,
              transparent 100%
            );

          pointer-events: none;
        }


        /* =====================================================
           IMAGE TOP LABEL
        ===================================================== */

        .ksr-image-label {

          position: absolute;

          top: 25px;

          left: 27px;

          display: flex;

          align-items: center;

          gap: 10px;
        }


        .ksr-image-label span {

          width: 25px;

          height: 1px;

          background:
            rgba(
              255,
              255,
              255,
              0.85
            );
        }


        .ksr-image-label p {

          margin: 0;

          color:
            rgba(
              255,
              255,
              255,
              0.90
            );

          font-size: 8px;

          font-weight: 600;

          line-height: 1;

          letter-spacing: 0.20em;

          text-transform: uppercase;
        }


        /* =====================================================
           QUOTE CARD
        ===================================================== */

        .ksr-quote {

          position: absolute;

          left: 28px;

          right: 28px;

          bottom: 28px;

          padding: 25px 27px;

          background:
            rgba(
              255,
              255,
              255,
              0.92
            );

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.96
            );

          border-radius: 14px;

          box-shadow:
            0 14px 35px
            rgba(20, 19, 17, 0.14);

          backdrop-filter: blur(12px);

          -webkit-backdrop-filter: blur(12px);
        }


        /* =====================================================
           QUOTE MARK
        ===================================================== */

        .ksr-quote::before {

          content: "";

          position: absolute;

          top: 0;

          left: 27px;

          width: 36px;

          height: 2px;

          background: var(--ksr-brass);
        }


        .ksr-quote-mark {

          color: var(--ksr-brass);

          font-family:
            Georgia,
            serif;

          font-size: 43px;

          line-height: 0.55;

          margin-bottom: 11px;
        }


        .ksr-quote p {

          max-width: 470px;

          margin: 0;

          color: var(--ksr-ink);

          font-family: var(--font-display);

          font-size: 20px;

          font-weight: 400;

          line-height: 1.42;

          letter-spacing: -0.015em;
        }


        /* =====================================================
           FOUNDER
        ===================================================== */

        .ksr-founder {

          display: flex;

          align-items: center;

          gap: 11px;

          margin-top: 18px;
        }


        .ksr-founder span {

          width: 30px;

          height: 1px;

          flex-shrink: 0;

          background: var(--ksr-brass);
        }


        .ksr-founder strong {

          color: var(--ksr-brass);

          font-size: 8px;

          font-weight: 700;

          line-height: 1.4;

          letter-spacing: 0.17em;

          text-transform: uppercase;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1024px) {

          .ksr-testimonials {

            padding: 85px 24px;
          }


          .ksr-testimonials-container {

            gap: 45px;
          }


          .ksr-heading-block h2 {

            font-size: 46px;
          }


          .ksr-testimonials-image {

            height: 510px;
          }


          .ksr-points-card {

            padding-left: 24px;

            padding-right: 24px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {

          .ksr-testimonials {

            padding: 60px 16px;
          }


          .ksr-testimonials-container {

            display: flex;

            flex-direction: column;

            gap: 34px;

            width: 100%;
          }


          /* ==========================================
             IMAGE FIRST
          ========================================== */

          .ksr-testimonials-image {

            order: 1;

            width: 100%;

            height: 405px;

            border-radius: 15px;
          }


          /* ==========================================
             CONTENT SECOND
          ========================================== */

          .ksr-testimonials-content {

            order: 2;

            width: 100%;
          }


          /* ==========================================
             LABEL
          ========================================== */

          .ksr-label {

            margin-bottom: 15px;

            font-size: 9px;

            letter-spacing: 0.19em;
          }


          .ksr-label-line {

            width: 27px;
          }


          /* ==========================================
             HEADING
          ========================================== */

          .ksr-heading-block h2 {

            font-size: 38px;

            line-height: 1;

            letter-spacing: -0.03em;
          }


          .desktop-break {

            display: none;
          }


          .ksr-heading-block > p {

            margin-top: 18px;

            font-size: 14px;

            line-height: 1.65;
          }


          /* ==========================================
             POINTS CARD
          ========================================== */

          .ksr-points-card {

            margin-top: 26px;

            padding:
              6px
              20px;

            border-radius: 14px;
          }


          .ksr-points-card::before {

            top: 20px;

            bottom: 20px;
          }


          /* ==========================================
             POINT
          ========================================== */

          .ksr-point {

            gap: 13px;

            padding: 17px 0;
          }


          .ksr-point:first-child {

            padding-top: 16px;
          }


          .ksr-point.last-point {

            padding-bottom: 16px;
          }


          .ksr-point-number {

            width: 23px;

            font-size: 10px;
          }


          .ksr-point-content h3 {

            font-size: 14px;
          }


          .ksr-point-content p {

            margin-top: 5px;

            font-size: 12px;

            line-height: 1.55;
          }


          /* ==========================================
             IMAGE LABEL
          ========================================== */

          .ksr-image-label {

            top: 20px;

            left: 20px;
          }


          .ksr-image-label span {

            width: 20px;
          }


          .ksr-image-label p {

            font-size: 7px;

            letter-spacing: 0.15em;
          }


          /* ==========================================
             QUOTE
          ========================================== */

          .ksr-quote {

            left: 15px;

            right: 15px;

            bottom: 15px;

            padding: 20px;

            border-radius: 12px;
          }


          .ksr-quote::before {

            left: 20px;

            width: 28px;
          }


          .ksr-quote-mark {

            font-size: 36px;

            margin-bottom: 8px;
          }


          .ksr-quote p {

            font-size: 17px;

            line-height: 1.4;
          }


          /* ==========================================
             FOUNDER
          ========================================== */

          .ksr-founder {

            gap: 8px;

            margin-top: 14px;
          }


          .ksr-founder span {

            width: 24px;
          }


          .ksr-founder strong {

            font-size: 6.5px;

            letter-spacing: 0.11em;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 390px) {

          .ksr-testimonials {

            padding:
              48px
              14px;
          }


          .ksr-testimonials-container {

            gap: 28px;
          }


          .ksr-testimonials-image {

            height: 355px;
          }


          .ksr-heading-block h2 {

            font-size: 32px;
          }


          .ksr-heading-block > p {

            font-size: 13px;
          }


          .ksr-points-card {

            padding-left: 16px;

            padding-right: 16px;
          }


          .ksr-point {

            gap: 10px;

            padding: 15px 0;
          }


          .ksr-point-content h3 {

            font-size: 13px;
          }


          .ksr-point-content p {

            font-size: 11px;
          }


          .ksr-quote {

            padding: 17px;
          }


          .ksr-quote p {

            font-size: 15px;
          }


          .ksr-founder strong {

            font-size: 6px;
          }

        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {

          .ksr-testimonials {

            padding-left: 12px;

            padding-right: 12px;
          }


          .ksr-heading-block h2 {

            font-size: 29px;
          }


          .ksr-testimonials-image {

            height: 325px;
          }


          .ksr-quote p {

            font-size: 14px;
          }

        }

      `}</style>
    </section>
  );
}