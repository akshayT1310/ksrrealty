import React from "react";
import { Quote, Sparkles } from "lucide-react";

export default function FounderDesk() {
  return (
    <section className="founder-desk">

      <div className="fd-wrapper">

        {/* =====================================================
            TOP LABEL
        ===================================================== */}

        <div className="fd-top">
          <div className="fd-label">
            <span className="fd-label-line" />
            <span>THE FOUNDER'S DESK</span>
          </div>

          <div className="fd-top-year">
           
          </div>
        </div>


        {/* =====================================================
            MAIN CURVED EDITORIAL CARD
        ===================================================== */}

        <div className="fd-card">

          {/* Decorative corner */}
          <div className="fd-card-glow" />

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <aside className="fd-side">

            <div className="fd-side-number">
             
            </div>

            <div className="fd-side-line" />

            <div className="fd-side-text">
              
              <br />
             
              <br />
              
            </div>

          </aside>


          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <main className="fd-content">

            {/* KICKER */}

            <div className="fd-kicker">
              A LETTER FROM OUR LEADERSHIP
            </div>


            {/* HEADING */}

            <h1 className="fd-heading">
              Real Estate Is Not
              <br />
              <em>Just Property.</em>
            </h1>


            {/* ACCENT */}

            <div className="fd-heading-accent">
              <span />
              <span />
              <span />
            </div>


            {/* =================================================
                MESSAGE AREA
            ================================================= */}

            <div className="fd-message-grid">

              {/* QUOTE */}

              <div className="fd-quote-wrap">

                <div className="fd-quote">
                  <Quote
                    size={22}
                    strokeWidth={1.5}
                  />
                </div>

              </div>


              {/* MESSAGE */}

              <div className="fd-message">

                <p className="fd-lead">
                  It is about creating a place where
                  ambition meets opportunity, where
                  families create memories and where
                  tomorrow begins to take shape.
                </p>


                <p>
                  At KSR Realty Ventures, our approach has
                  always been rooted in one simple belief —
                  every property decision deserves clarity,
                  honesty and long-term thinking.
                </p>


                <p>
                  We don't believe in simply closing
                  transactions. We believe in understanding
                  people, protecting their aspirations and
                  helping them make decisions they can
                  confidently stand behind for years to come.
                </p>

              </div>

            </div>


            {/* =================================================
                SIGNATURE
            ================================================= */}

            <div className="fd-signature-section">

              <div className="fd-signature-line" />

              <div className="fd-signature-content">

                <div className="fd-signature">
                  Kuldeep Upadhyay
                </div>

                <div className="fd-name">
                  <strong>
                    Mr. Kuldeep Upadhyay
                  </strong>

                  <span>
                    Chairman &amp; Managing Director
                  </span>
                </div>

              </div>

            </div>

          </main>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <aside className="fd-right">

            <div className="fd-right-top">
              <Sparkles
                size={17}
                strokeWidth={1.4}
              />
            </div>


            <div className="fd-vertical">
             
            </div>


            <div className="fd-right-line" />


            <div className="fd-established">

              <span>
                ESTABLISHED
              </span>

              <strong>
                2019
              </strong>

            </div>

          </aside>

        </div>


        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <div className="fd-bottom">

          <span className="fd-bottom-dot" />

          <span>
            BUILDING TRUST. CREATING VALUE.
          </span>

        </div>

      </div>


      {/* =====================================================
          COMPLETE CSS
      ===================================================== */}

      <style>{`

        /* =====================================================
           RESET
        ===================================================== */

        .founder-desk,
        .founder-desk * {
          box-sizing: border-box;
        }


        /* =====================================================
           ROOT
        ===================================================== */

        .founder-desk {

          --fd-paper: #f7f4ed;
          --fd-card: #fffdf9;
          --fd-white: #ffffff;

          --fd-ink: #171614;
          --fd-text: #514c45;
          --fd-muted: #918a80;
          --fd-light: #aaa298;

          --fd-gold: #ad8245;
          --fd-gold-light: #c5a36a;

          --fd-border: rgba(23, 22, 20, 0.10);

          position: relative;

          width: 100%;

          padding:
            100px
            24px
            70px;

          background:
            radial-gradient(
              circle at 10% 15%,
              rgba(174, 133, 72, 0.045),
              transparent 28%
            ),
            radial-gradient(
              circle at 90% 75%,
              rgba(174, 133, 72, 0.055),
              transparent 30%
            ),
            var(--fd-paper);

          color: var(--fd-ink);

          overflow: hidden;

          isolation: isolate;
        }


        /* =====================================================
           SUBTLE BACKGROUND LINES
        ===================================================== */

        .founder-desk::before {

          content: "";

          position: absolute;

          inset: 0;

          pointer-events: none;

          opacity: 0.35;

          background-image:
            linear-gradient(
              90deg,
              rgba(20, 20, 20, 0.025) 1px,
              transparent 1px
            );

          background-size: 120px 100%;

          mask-image:
            linear-gradient(
              to right,
              black,
              transparent 88%
            );

          -webkit-mask-image:
            linear-gradient(
              to right,
              black,
              transparent 88%
            );
        }


        /* =====================================================
           AMBIENT GLOW
        ===================================================== */

        .founder-desk::after {

          content: "";

          position: absolute;

          width: 520px;

          height: 520px;

          right: -250px;

          top: 180px;

          border-radius: 50%;

          background:
            rgba(174, 133, 72, 0.055);

          filter: blur(70px);

          pointer-events: none;

          z-index: -1;
        }


        /* =====================================================
           WRAPPER
        ===================================================== */

        .fd-wrapper {

          position: relative;

          z-index: 2;

          width:
            min(
              1180px,
              100%
            );

          margin: 0 auto;
        }


        /* =====================================================
           TOP
        ===================================================== */

        .fd-top {

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 20px;

          padding:
            0 5px
            20px;

          margin-bottom: 25px;

          border-bottom:
            1px solid
            var(--fd-border);
        }


        .fd-label {

          display: flex;

          align-items: center;

          gap: 12px;

          color: var(--fd-gold);

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 0.24em;

          text-transform: uppercase;
        }


        .fd-label-line {

          width: 38px;

          height: 1px;

          background:
            linear-gradient(
              90deg,
              var(--fd-gold),
              transparent
            );
        }


        .fd-top-year {

          color: #aaa298;

          font-size: 7px;

          font-weight: 600;

          letter-spacing: 0.20em;

          text-transform: uppercase;
        }


        /* =====================================================
           MAIN CARD
        ===================================================== */

        .fd-card {

          position: relative;

          display: grid;

          grid-template-columns:
            82px
            minmax(0, 1fr)
            80px;

          gap: 35px;

          min-height: 620px;

          padding:
            62px
            58px
            55px;

          background:
            linear-gradient(
              135deg,
              #fffefa 0%,
              #fcfaf5 100%
            );

          border:
            1px solid
            rgba(23, 22, 20, 0.09);

          border-radius: 42px;

          box-shadow:
            0 24px 70px
            rgba(40, 30, 15, 0.055);

          overflow: hidden;

          transition:
            box-shadow 0.4s ease,
            transform 0.4s ease;
        }


        .fd-card:hover {

          transform: translateY(-3px);

          box-shadow:
            0 30px 80px
            rgba(40, 30, 15, 0.075);
        }


        /* =====================================================
           CARD GLOW
        ===================================================== */

        .fd-card-glow {

          position: absolute;

          width: 330px;

          height: 330px;

          right: -160px;

          top: -170px;

          border-radius: 50%;

          background:
            rgba(174, 133, 72, 0.055);

          filter: blur(5px);

          pointer-events: none;
        }


        /* =====================================================
           LEFT SIDE
        ===================================================== */

        .fd-side {

          position: relative;

          z-index: 2;

          display: flex;

          flex-direction: column;

          align-items: flex-start;

          padding-top: 5px;
        }


        .fd-side-number {

          color:
            rgba(
              174,
              133,
              72,
              0.27
            );

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 46px;

          line-height: 1;

          letter-spacing: -0.06em;
        }


        .fd-side-line {

          width: 1px;

          height: 120px;

          margin:
            24px 0;

          background:
            linear-gradient(
              to bottom,
              var(--fd-gold),
              transparent
            );
        }


        .fd-side-text {

          color: #a39b90;

          font-size: 7px;

          line-height: 1.8;

          letter-spacing: 0.18em;

          writing-mode:
            vertical-rl;

          transform:
            rotate(180deg);
        }


        /* =====================================================
           CONTENT
        ===================================================== */

        .fd-content {

          position: relative;

          z-index: 2;

          width: 100%;

          max-width: 720px;
        }


        /* =====================================================
           KICKER
        ===================================================== */

        .fd-kicker {

          margin-bottom: 20px;

          color: var(--fd-muted);

          font-size: 8px;

          font-weight: 700;

          letter-spacing: 0.22em;

          text-transform: uppercase;
        }


        /* =====================================================
           HEADING
        ===================================================== */

        .fd-heading {

          margin: 0;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            clamp(
              4rem,
              6vw,
              6.1rem
            );

          line-height: 0.92;

          font-weight: 400;

          letter-spacing: -0.065em;
        }


        .fd-heading em {

          color: var(--fd-gold);

          font-style: italic;

          font-weight: 400;
        }


        /* =====================================================
           ACCENT
        ===================================================== */

        .fd-heading-accent {

          display: flex;

          align-items: center;

          gap: 5px;

          margin:
            32px 0
            38px;
        }


        .fd-heading-accent span {

          display: block;

          height: 2px;

          border-radius: 50px;

          background:
            var(--fd-gold);
        }


        .fd-heading-accent span:nth-child(1) {

          width: 42px;
        }


        .fd-heading-accent span:nth-child(2) {

          width: 12px;

          opacity: 0.55;
        }


        .fd-heading-accent span:nth-child(3) {

          width: 5px;

          opacity: 0.25;
        }


        /* =====================================================
           MESSAGE GRID
        ===================================================== */

        .fd-message-grid {

          display: grid;

          grid-template-columns:
            58px
            minmax(0, 1fr);

          gap: 20px;
        }


        /* =====================================================
           QUOTE CIRCLE
        ===================================================== */

        .fd-quote-wrap {

          padding-top: 4px;
        }


        .fd-quote {

          width: 44px;

          height: 44px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          color: var(--fd-gold);

          background:
            #fbf5e9;

          border:
            1px solid
            rgba(
              174,
              133,
              72,
              0.20
            );

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }


        .fd-card:hover .fd-quote {

          transform:
            rotate(-5deg)
            translateY(-2px);

          background:
            #f7eddb;
        }


        /* =====================================================
           MESSAGE
        ===================================================== */

        .fd-message {

          max-width: 590px;
        }


        .fd-message p {

          margin:
            0 0 18px;

          color: var(--fd-text);

          font-size: 13.5px;

          line-height: 1.9;
        }


        /* =====================================================
           LEAD
        ===================================================== */

        .fd-message .fd-lead {

          margin-bottom: 25px;

          color: #3d3934;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 19px;

          line-height: 1.65;

          letter-spacing: -0.01em;
        }


        /* =====================================================
           SIGNATURE
        ===================================================== */

        .fd-signature-section {

          display: flex;

          align-items: flex-start;

          gap: 17px;

          max-width: 590px;

          margin-top: 42px;

          padding-top: 24px;

          border-top:
            1px solid
            rgba(
              23,
              22,
              20,
              0.08
            );
        }


        .fd-signature-line {

          width: 28px;

          height: 1px;

          margin-top: 10px;

          flex-shrink: 0;

          background:
            var(--fd-gold);
        }


        .fd-signature {

          margin-bottom: 8px;

          color: #a07841;

          font-family:
            "Brush Script MT",
            "Segoe Script",
            cursive;

          font-size: 28px;

          line-height: 1;
        }


        .fd-name strong {

          display: block;

          color: var(--fd-ink);

          font-size: 9px;

          font-weight: 600;
        }


        .fd-name span {

          display: block;

          margin-top: 4px;

          color: #928b82;

          font-size: 7px;

          letter-spacing: 0.17em;

          text-transform: uppercase;
        }


        /* =====================================================
           RIGHT COLUMN
        ===================================================== */

        .fd-right {

          position: relative;

          z-index: 2;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: space-between;

          padding:
            3px 0
            10px;
        }


        .fd-right-top {

          width: 35px;

          height: 35px;

          display: flex;

          align-items: center;

          justify-content: center;

          color: var(--fd-gold);

          border:
            1px solid
            rgba(
              174,
              133,
              72,
              0.20
            );

          border-radius: 50%;

          background: #fcf8ef;
        }


        .fd-vertical {

          color: #a49c91;

          font-size: 6.5px;

          font-weight: 700;

          letter-spacing: 0.24em;

          writing-mode:
            vertical-rl;

          transform:
            rotate(180deg);

          white-space: nowrap;
        }


        .fd-right-line {

          width: 1px;

          flex: 1;

          margin:
            22px 0;

          background:
            linear-gradient(
              to bottom,
              transparent,
              rgba(
                174,
                133,
                72,
                0.55
              ),
              transparent
            );
        }


        .fd-established {

          display: flex;

          flex-direction: column;

          align-items: center;

          gap: 4px;
        }


        .fd-established span {

          color: #aaa298;

          font-size: 5.5px;

          letter-spacing: 0.18em;
        }


        .fd-established strong {

          color: var(--fd-gold);

          font-family:
            Georgia,
            serif;

          font-size: 14px;

          font-weight: 400;
        }


        /* =====================================================
           BOTTOM
        ===================================================== */

        .fd-bottom {

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          padding-top: 22px;

          color: #aaa298;

          font-size: 6.5px;

          font-weight: 600;

          letter-spacing: 0.22em;
        }


        .fd-bottom-dot {

          width: 4px;

          height: 4px;

          border-radius: 50%;

          background:
            var(--fd-gold);
        }


        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1050px) {

          .founder-desk {

            padding:
              85px
              22px
              60px;
          }


          .fd-wrapper {

            width: 100%;
          }


          .fd-card {

            grid-template-columns:
              60px
              minmax(0, 1fr);

            gap: 30px;

            padding:
              52px
              45px;

            border-radius: 36px;
          }


          .fd-right {

            display: none;
          }


          .fd-content {

            max-width: 760px;
          }


          .fd-heading {

            font-size:
              clamp(
                3.7rem,
                7vw,
                5.5rem
              );
          }
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 768px) {

          .founder-desk {

            padding:
              72px
              18px
              50px;
          }


          .fd-top {

            padding:
              0 2px
              18px;

            margin-bottom: 18px;
          }


          .fd-top-year {

            display: none;
          }


          .fd-card {

            display: block;

            min-height: auto;

            padding:
              45px
              38px;

            border-radius: 32px;
          }


          .fd-side {

            display: none;
          }


          .fd-content {

            max-width: 100%;
          }


          .fd-heading {

            font-size:
              clamp(
                3rem,
                9vw,
                4.8rem
              );

            line-height: 0.94;
          }


          .fd-heading-accent {

            margin:
              28px 0
              32px;
          }


          .fd-message-grid {

            grid-template-columns:
              45px
              minmax(0, 1fr);

            gap: 15px;
          }


          .fd-message {

            max-width: 100%;
          }


          .fd-message .fd-lead {

            font-size: 17px;

            line-height: 1.65;
          }


          .fd-message p {

            font-size: 13px;

            line-height: 1.8;
          }


          .fd-signature-section {

            max-width: 100%;

            margin-top: 35px;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .founder-desk {

            padding:
              58px
              14px
              42px;
          }


          .fd-top {

            padding:
              0
              2px
              16px;

            margin-bottom: 15px;
          }


          .fd-label {

            gap: 8px;

            font-size: 7px;

            letter-spacing: 0.17em;
          }


          .fd-label-line {

            width: 25px;
          }


          .fd-card {

            padding:
              35px
              23px
              38px;

            border-radius: 27px;

            box-shadow:
              0 16px 45px
              rgba(
                40,
                30,
                15,
                0.055
              );
          }


          .fd-card:hover {

            transform: none;
          }


          .fd-kicker {

            margin-bottom: 15px;

            font-size: 7px;

            letter-spacing: 0.18em;
          }


          .fd-heading {

            font-size:
              clamp(
                2.55rem,
                12vw,
                3.7rem
              );

            line-height: 0.95;

            letter-spacing: -0.055em;
          }


          .fd-heading-accent {

            margin:
              23px 0
              27px;
          }


          .fd-message-grid {

            grid-template-columns:
              38px
              minmax(0, 1fr);

            gap: 10px;
          }


          .fd-quote {

            width: 35px;

            height: 35px;
          }


          .fd-quote svg {

            width: 17px;

            height: 17px;
          }


          .fd-message .fd-lead {

            font-size: 15px;

            line-height: 1.68;

            margin-bottom: 20px;
          }


          .fd-message p {

            font-size: 12px;

            line-height: 1.8;

            margin-bottom: 14px;
          }


          .fd-signature-section {

            margin-top: 30px;

            padding-top: 20px;

            gap: 12px;
          }


          .fd-signature-line {

            width: 22px;

            margin-top: 8px;
          }


          .fd-signature {

            font-size: 24px;
          }


          .fd-name strong {

            font-size: 8px;
          }


          .fd-name span {

            font-size: 6px;

            letter-spacing: 0.14em;
          }


          .fd-bottom {

            padding-top: 18px;

            font-size: 5.5px;

            letter-spacing: 0.18em;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 390px) {

          .founder-desk {

            padding:
              50px
              11px
              35px;
          }


          .fd-card {

            padding:
              31px
              20px
              35px;

            border-radius: 24px;
          }


          .fd-heading {

            font-size: 2.45rem;
          }


          .fd-message-grid {

            grid-template-columns:
              32px
              minmax(0, 1fr);
          }


          .fd-quote {

            width: 31px;

            height: 31px;
          }


          .fd-message .fd-lead {

            font-size: 14px;
          }


          .fd-message p {

            font-size: 11.5px;
          }


          .fd-signature {

            font-size: 22px;
          }
        }


        /* =====================================================
           VERY SMALL DEVICES
        ===================================================== */

        @media (max-width: 340px) {

          .fd-card {

            padding:
              28px
              17px
              32px;

            border-radius: 22px;
          }


          .fd-heading {

            font-size: 2.25rem;
          }


          .fd-message-grid {

            display: block;
          }


          .fd-quote-wrap {

            margin-bottom: 17px;
          }
        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .founder-desk *,
          .founder-desk *::before,
          .founder-desk *::after {

            transition: none !important;

            animation: none !important;
          }
        }

      `}</style>

    </section>
  );
}