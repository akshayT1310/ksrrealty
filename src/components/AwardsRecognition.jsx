import React from "react";

export default function AwardsRecognition() {
  return (
    <section
      className="awards-recognition-section"
      style={{ background: "var(--color-ink)" }}
    >
      <style>{`
        .awards-recognition-section {
          width: 100%;
          overflow: hidden;
          padding: 80px 0;
        }

        .awards-container {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto;
        }

        .awards-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 50px;
        }

        .awards-content {
          max-width: 620px;
        }

        .awards-label {
          margin: 0 0 12px;
          color: var(--color-brass);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .awards-title {
          margin: 0;
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 500;
          line-height: 1.1;
          color: var(--color-paper);
        }

        .awards-title span {
          color: var(--color-brass);
        }

        .awards-description {
          margin: 16px 0 0;
          max-width: 560px;
          color: rgba(251, 250, 246, 0.6);
          font-size: 14px;
          line-height: 1.7;
        }

        /* =========================
           STATS
        ========================= */

        .awards-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(100px, 1fr));
          gap: 35px;
          flex-shrink: 0;
        }

        .award-stat {
          text-align: right;
        }

        .award-number {
          margin: 0;
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 500;
          line-height: 1;
          color: var(--color-brass);
          font-variant-numeric: tabular-nums;
        }

        .award-text {
          margin: 8px 0 0;
          color: rgba(251, 250, 246, 0.5);
          font-size: 10px;
          line-height: 1.4;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 1000px) {
          .awards-recognition-section {
            padding: 65px 0;
          }

          .awards-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 40px;
          }

          .awards-content {
            max-width: 700px;
          }

          .awards-stats {
            width: 100%;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
          }

          .award-stat {
            text-align: left;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {
          .awards-recognition-section {
            padding: 55px 0;
          }

          .awards-container {
            width: calc(100% - 28px);
          }

          .awards-header {
            gap: 32px;
          }

          .awards-label {
            font-size: 9px;
            letter-spacing: 0.16em;
          }

          .awards-title {
            font-size: clamp(2rem, 9vw, 2.7rem);
            line-height: 1.05;
          }

          .awards-description {
            margin-top: 14px;
            font-size: 13px;
            line-height: 1.65;
          }

          .awards-stats {
            width: 100%;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
          }

          .award-stat {
            text-align: left;
          }

          .award-number {
            font-size: clamp(1.6rem, 7vw, 2rem);
          }

          .award-text {
            margin-top: 7px;
            font-size: 8px;
            line-height: 1.45;
            letter-spacing: 0.08em;
            white-space: normal;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 390px) {
          .awards-recognition-section {
            padding: 45px 0;
          }

          .awards-container {
            width: calc(100% - 24px);
          }

          .awards-title {
            font-size: 1.9rem;
          }

          .awards-description {
            font-size: 12px;
          }

          .awards-stats {
            gap: 8px;
          }

          .award-number {
            font-size: 1.45rem;
          }

          .award-text {
            font-size: 7.5px;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          * {
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <div className="awards-container">
        <div className="awards-header">

          {/* LEFT CONTENT */}
          <div className="awards-content">
            <p className="awards-label">
              Milestones
            </p>

            <h2 className="awards-title">
              Awards & <span>Recognition</span>
            </h2>

            <p className="awards-description">
              Over two decades of trust, excellence and consistent industry
              recognition across residential, commercial and investment real
              estate.
            </p>
          </div>

          {/* RIGHT STATS */}
          <div className="awards-stats">

            <div className="award-stat">
              <p className="award-number">
                15+
              </p>

              <p className="award-text">
                Years of excellence
              </p>
            </div>

            <div className="award-stat">
              <p className="award-number">
                30+
              </p>

              <p className="award-text">
                Awards & recognitions
              </p>
            </div>

            <div className="award-stat">
              <p className="award-number">
                50+
              </p>

              <p className="award-text">
                Industry certifications
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}