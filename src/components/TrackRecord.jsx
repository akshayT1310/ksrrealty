import React from "react";

export default function TrackRecord({ partnerLogos = [] }) {
  return (
    <section
      id="builder-lounge"
      className="track-record-section"
      style={{
        background: "var(--color-limestone)",
      }}
    >
      <style>{`
        .track-record-section {
          padding: 80px 0;
          overflow: hidden;
        }

        .track-record-container {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* =========================
           TRACK RECORD
        ========================= */

        .track-record-label {
          margin: 0 0 18px;
          color: var(--color-taupe);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .track-record-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 35px;
          margin-bottom: 70px;
        }

        .track-record-stat {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .track-record-number {
          margin: 0;
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 500;
          line-height: 0.95;
          color: var(--color-ink);
        }

        .track-record-text {
          margin: 0;
          color: var(--color-taupe);
          font-size: 13px;
          line-height: 1.4;
        }

        /* =========================
           PARTNERS
        ========================= */

        .partners-label {
          margin: 0 0 22px;
          color: var(--color-taupe);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .partners-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;

          /* Fade edges */
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );

          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
        }

        .partners-track {
          display: flex;
          width: max-content;
          gap: 18px;

          animation: partnerMarquee 35s linear infinite;
        }

        .partners-track:hover {
          animation-play-state: paused;
        }

        /* =========================
           LOGO CARD
        ========================= */

        .partner-card {
          width: 120px;
          height: 72px;

          flex: 0 0 120px;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 13px;

          background: #ffffff;

          border:
            1px solid
            var(--color-hairline);

          border-radius:
            var(--radius-sm);

          box-sizing: border-box;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .partner-card:hover {
          transform: translateY(-3px);

          border-color:
            rgba(185, 151, 78, 0.45);

          box-shadow:
            0 8px 24px rgba(0, 0, 0, 0.06);
        }

        .partner-logo {
          display: block;

          width: auto;
          height: auto;

          max-width: 88px;
          max-height: 42px;

          object-fit: contain;

          object-position: center;

          opacity: 0.88;

          transition:
            opacity 0.25s ease,
            transform 0.25s ease;
        }

        .partner-card:hover .partner-logo {
          opacity: 1;
          transform: scale(1.04);
        }

        @keyframes partnerMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 900px) {
          .track-record-section {
            padding: 65px 0;
          }

          .track-record-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 35px 25px;
            margin-bottom: 55px;
          }

          .partner-card {
            width: 110px;
            height: 68px;
            flex-basis: 110px;
            padding: 11px;
          }

          .partner-logo {
            max-width: 82px;
            max-height: 38px;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {
          .track-record-section {
            padding: 55px 0;
          }

          .track-record-container {
            width: calc(100% - 28px);
          }

          .track-record-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px 18px;
            margin-bottom: 48px;
          }

          .track-record-number {
            font-size: clamp(2.2rem, 10vw, 3rem);
          }

          .track-record-text {
            font-size: 11px;
          }

          .partners-label {
            margin-bottom: 18px;
          }

          .partners-track {
            gap: 12px;
            animation-duration: 30s;
          }

          .partner-card {
            width: 100px;
            height: 62px;
            flex-basis: 100px;
            padding: 9px;
          }

          .partner-logo {
            max-width: 76px;
            max-height: 34px;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 400px) {
          .track-record-container {
            width: calc(100% - 22px);
          }

          .track-record-stats {
            gap: 24px 14px;
          }

          .partner-card {
            width: 92px;
            height: 58px;
            flex-basis: 92px;
          }

          .partner-logo {
            max-width: 70px;
            max-height: 31px;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .partners-track {
            animation: none;
          }
        }
      `}</style>

      <div className="track-record-container">

        {/* =========================
            STATS
        ========================= */}

      

        {/* =========================
            PARTNERS
        ========================= */}

        <div>

          <p className="partners-label">
            Our Partners & Affiliates
          </p>

          {partnerLogos.length > 0 && (
            <div className="partners-wrapper">

              <div className="partners-track">

                {[
                  ...partnerLogos,
                  ...partnerLogos,
                ].map((logo, index) => (

                  <div
                    className="partner-card"
                    key={`${logo.name}-${index}`}
                  >
                    <img
                      src={`/assets/images/partners/${logo.file}`}
                      alt={logo.name}
                      className="partner-logo"
                      loading="lazy"
                    />
                  </div>

                ))}

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}