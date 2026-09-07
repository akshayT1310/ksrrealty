import React, { useEffect, useState } from "react";

export default function TrackRecord({ partnerLogos = [] }) {
  const stats = [
    {
      number: 15,
      suffix: "+",
      text: "Years in real estate",
    },
    {
      number: 30,
      suffix: "+",
      text: "Awards & recognitions",
    },
    {
      number: 200,
      suffix: "+",
      text: "Channel partners",
    },
    {
      number: 5000,
      suffix: "+",
      text: "Families served",
    },
  ];

  /* =========================================
     COUNT ANIMATION
  ========================================= */

  const [counts, setCounts] = useState(
    stats.map(() => 0)
  );

  useEffect(() => {
    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      // Smooth ease-out animation
      const easeOut =
        1 - Math.pow(1 - progress, 3);

      setCounts(
        stats.map((stat) =>
          Math.floor(stat.number * easeOut)
        )
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Make sure final values are exact
        setCounts(stats.map((stat) => stat.number));
      }
    };

    requestAnimationFrame(animate);

    return () => {
      // Animation automatically stops when component unmounts
    };
  }, []);

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
          padding: 72px 0 80px;
          overflow: hidden;
        }

        .track-record-container {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* =========================================
           TRACK RECORD HEADER
        ========================================= */

        .track-record-label {
          margin: 0 0 22px;

          color: var(--color-taupe);

          font-size: 10px;
          font-weight: 700;

          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        /* =========================================
           STATS
        ========================================= */

        .track-record-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);

          gap: 30px;

          margin-bottom: 72px;
        }

        .track-record-stat {
          display: flex;
          flex-direction: column;

          gap: 8px;

          min-width: 0;
        }

        .track-record-number {
          margin: 0;

          font-family: var(--font-display, Georgia, serif);

          font-size: clamp(2.8rem, 5vw, 3.8rem);

          font-weight: 500;

          line-height: 0.95;

          letter-spacing: -0.045em;

          color: var(--color-ink, #172238);

          font-variant-numeric: tabular-nums;
        }

        .track-record-text {
          margin: 0;

          color: var(--color-taupe, #8a8174);

          font-size: 12px;

          line-height: 1.5;
        }

        /* =========================================
           PARTNERS
        ========================================= */

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

        /* =========================================
           PARTNER CARD
        ========================================= */

        .partner-card {
          width: 120px;
          height: 72px;

          flex: 0 0 120px;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 13px;

          background: #ffffff;

          border: 1px solid var(--color-hairline);

          border-radius: var(--radius-sm);

          box-sizing: border-box;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .partner-card:hover {
          transform: translateY(-3px);

          border-color: rgba(185, 151, 78, 0.45);

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

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 900px) {
          .track-record-section {
            padding: 60px 0 65px;
          }

          .track-record-stats {
            grid-template-columns: repeat(2, 1fr);

            gap: 38px 30px;

            margin-bottom: 58px;
          }

          .track-record-number {
            font-size: clamp(2.6rem, 7vw, 3.5rem);
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

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {
          .track-record-section {
            padding: 52px 0 55px;
          }

          .track-record-container {
            width: calc(100% - 28px);
          }

          .track-record-label {
            margin-bottom: 20px;
          }

          .track-record-stats {
            grid-template-columns: repeat(2, 1fr);

            gap: 30px 20px;

            margin-bottom: 48px;
          }

          .track-record-stat {
            gap: 7px;
          }

          .track-record-number {
            font-size: clamp(2.35rem, 10vw, 3rem);

            letter-spacing: -0.04em;
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

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 400px) {
          .track-record-container {
            width: calc(100% - 22px);
          }

          .track-record-stats {
            gap: 25px 14px;
          }

          .track-record-number {
            font-size: 2.25rem;
          }

          .track-record-text {
            font-size: 10px;
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

        /* =========================================
           ACCESSIBILITY
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .partners-track {
            animation: none;
          }
        }
      `}</style>

      <div className="track-record-container">

        {/* =========================================
            TRACK RECORD
        ========================================= */}

        <p className="track-record-label">
          Track Record
        </p>

        <div className="track-record-stats">
          {stats.map((stat, index) => (
            <div
              className="track-record-stat"
              key={`${stat.text}-${index}`}
            >
              <h3 className="track-record-number">
                {counts[index].toLocaleString()}
                {stat.suffix}
              </h3>

              <p className="track-record-text">
                {stat.text}
              </p>
            </div>
          ))}
        </div>

        {/* =========================================
            PARTNERS
        ========================================= */}

        {partnerLogos.length > 0 && (
          <div className="partners-section">

            <p className="partners-label">
              Our Partners & Affiliates
            </p>

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

          </div>
        )}

      </div>
    </section>
  );
}