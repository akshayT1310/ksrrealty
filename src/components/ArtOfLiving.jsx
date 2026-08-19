import React from "react";
import {
  Home,
  Sun,
  Leaf,
  Sparkles,
} from "lucide-react";

export default function ArtOfLiving() {
  const features = [
    {
      icon: Home,
      title: "Beautiful Spaces",
      text: "Thoughtfully planned homes created for modern living.",
    },
    {
      icon: Sun,
      title: "Natural Comfort",
      text: "Open, bright and welcoming spaces that feel effortless.",
    },
    {
      icon: Leaf,
      title: "Better Living",
      text: "A refined balance of comfort, convenience and lifestyle.",
    },
  ];

  return (
    <section className="aol-section">

      <div className="aol-container">

        {/* TOP LABEL */}

        <div className="aol-top">

          <div className="aol-label">
            <span />
            THE ART OF LIVING
          </div>

          <div className="aol-brand">
            
          </div>

        </div>


        {/* MAIN HEADING */}

        <div className="aol-heading-area">

          <div>

            <h2>
              LIVE
              <br />
              <span>BEAUTIFULLY.</span>
            </h2>

          </div>

          <div className="aol-heading-text">

            <strong>
              YOUR HOME IS MORE THAN AN ADDRESS.
            </strong>

            <p>
              It is where your lifestyle takes shape,
              where moments become memories and where
              every day feels a little more like your own.
            </p>

          </div>

        </div>


        {/* CURVED FEATURE PANEL */}

        <div className="aol-feature-panel">

          <div className="aol-panel-circle">
            <span>LIVE</span>
          </div>

          <div className="aol-panel-content">

            <div className="aol-panel-label">
              THE KSR APPROACH
            </div>

            <h3>
              DESIGNED
              <br />
              <span>AROUND YOU.</span>
            </h3>

            <p>
              We believe the right property should not only
              look impressive. It should feel right,
              work for your lifestyle and remain meaningful
              for years to come.
            </p>

          </div>

          <div className="aol-panel-mark">
            KSR
          </div>

        </div>


        {/* FEATURES */}

        <div className="aol-features">

          {features.map((item) => {

            const Icon = item.icon;

            return (
              <div
                className="aol-feature"
                key={item.title}
              >

                <div className="aol-icon">
                  <Icon
                    size={18}
                    strokeWidth={1.6}
                  />
                </div>

                <div>

                  <h4>
                    {item.title}
                  </h4>

                  <p>
                    {item.text}
                  </p>

                </div>

              </div>
            );
          })}

        </div>


        {/* BOTTOM */}

        <div className="aol-bottom">

          <span>
            CHOOSE BETTER
          </span>

          <div />

          <span>
            LIVE BETTER
          </span>

        </div>

      </div>


      <style>{`

        /* =====================================================
           ROOT
        ===================================================== */

        .aol-section,
        .aol-section * {
          box-sizing: border-box;
        }

        .aol-section {

          --aol-bg: #fcfaf6;
          --aol-panel: #f5efe4;

          --aol-black: #151514;
          --aol-text: #625d55;
          --aol-muted: #9b9489;

          --aol-gold: #a77c40;

          width: 100%;

          padding:
            100px 24px
            90px;

          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(167,124,64,.055),
              transparent 30%
            ),
            var(--aol-bg);

          color: var(--aol-black);

          overflow: hidden;
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .aol-container {

          width:
            min(1180px, 100%);

          margin: 0 auto;
        }


        /* =====================================================
           TOP
        ===================================================== */

        .aol-top {

          display: flex;

          align-items: center;

          justify-content: space-between;

          padding-bottom: 20px;

          border-bottom:
            1px solid
            rgba(21,21,20,.09);
        }


        .aol-label {

          display: flex;

          align-items: center;

          gap: 10px;

          color: var(--aol-gold);

          font-size: 9px;

          font-weight: 800;

          letter-spacing: .22em;
        }


        .aol-label span {

          width: 30px;

          height: 2px;

          background:
            var(--aol-gold);
        }


        .aol-brand {

          color: #aaa298;

          font-size: 7px;

          font-weight: 700;

          letter-spacing: .2em;
        }


        /* =====================================================
           HEADING
        ===================================================== */

        .aol-heading-area {

          display: grid;

          grid-template-columns:
            1fr
            380px;

          align-items: end;

          gap: 70px;

          padding:
            65px 0
            55px;
        }


        .aol-heading-area h2 {

          margin: 0;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size:
            clamp(
              65px,
              9vw,
              125px
            );

          line-height: .82;

          font-weight: 900;

          letter-spacing:
            -.075em;
        }


        .aol-heading-area h2 span {

          color: var(--aol-gold);
        }


        .aol-heading-text {

          padding-bottom: 5px;
        }


        .aol-heading-text strong {

          display: block;

          margin-bottom: 13px;

          font-size: 11px;

          line-height: 1.4;

          font-weight: 800;

          letter-spacing: .08em;
        }


        .aol-heading-text p {

          margin: 0;

          color: var(--aol-text);

          font-size: 13px;

          line-height: 1.8;
        }


        /* =====================================================
           FEATURE PANEL
        ===================================================== */

        .aol-feature-panel {

          position: relative;

          min-height: 390px;

          display: flex;

          align-items: center;

          justify-content: center;

          padding: 60px;

          border-radius: 48px;

          background:
            linear-gradient(
              135deg,
              #f8f2e8,
              #eee5d6
            );

          border:
            1px solid
            rgba(21,21,20,.08);

          overflow: hidden;

          box-shadow:
            0 22px 65px
            rgba(50,40,25,.055);
        }


        /* =====================================================
           CIRCLE
        ===================================================== */

        .aol-panel-circle {

          position: absolute;

          width: 370px;

          height: 370px;

          left: -150px;

          top: -135px;

          border-radius: 50%;

          border:
            1px solid
            rgba(167,124,64,.22);
        }


        .aol-panel-circle::before {

          content: "";

          position: absolute;

          inset: 22px;

          border:
            1px dashed
            rgba(167,124,64,.18);

          border-radius: 50%;
        }


        .aol-panel-circle span {

          position: absolute;

          right: 40px;

          bottom: 55px;

          color:
            rgba(167,124,64,.45);

          font-size: 7px;

          font-weight: 800;

          letter-spacing: .25em;

          transform: rotate(-45deg);
        }


        /* =====================================================
           PANEL CONTENT
        ===================================================== */

        .aol-panel-content {

          position: relative;

          z-index: 2;

          max-width: 620px;

          text-align: center;
        }


        .aol-panel-label {

          margin-bottom: 17px;

          color: var(--aol-gold);

          font-size: 8px;

          font-weight: 800;

          letter-spacing: .2em;
        }


        .aol-panel-content h3 {

          margin: 0;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size:
            clamp(
              42px,
              5vw,
              65px
            );

          line-height: .88;

          font-weight: 900;

          letter-spacing:
            -.065em;
        }


        .aol-panel-content h3 span {

          color: var(--aol-gold);
        }


        .aol-panel-content p {

          max-width: 490px;

          margin:
            24px auto 0;

          color: var(--aol-text);

          font-size: 12.5px;

          line-height: 1.8;
        }


        /* =====================================================
           KSR MARK
        ===================================================== */

        .aol-panel-mark {

          position: absolute;

          right: 30px;

          top: 50%;

          transform:
            translateY(-50%);

          color:
            rgba(167,124,64,.14);

          font-family:
            Georgia,
            serif;

          font-size: 54px;

          font-weight: 700;

          letter-spacing: .08em;

          writing-mode:
            vertical-rl;
        }


        /* =====================================================
           FEATURES
        ===================================================== */

        .aol-features {

          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 50px;

          padding:
            50px 5px
            42px;
        }


        .aol-feature {

          display: grid;

          grid-template-columns:
            46px
            1fr;

          gap: 15px;
        }


        .aol-icon {

          width: 42px;

          height: 42px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          color: var(--aol-gold);

          background: #fffaf1;

          border:
            1px solid
            rgba(167,124,64,.2);

          transition:
            .3s ease;
        }


        .aol-feature:hover
        .aol-icon {

          color: white;

          background:
            var(--aol-gold);

          transform:
            translateY(-3px);
        }


        .aol-feature h4 {

          margin:
            2px 0
            8px;

          font-size: 17px;

          font-weight: 800;

          letter-spacing: -.02em;
        }


        .aol-feature p {

          margin: 0;

          max-width: 260px;

          color: var(--aol-text);

          font-size: 11.5px;

          line-height: 1.75;
        }


        /* =====================================================
           BOTTOM
        ===================================================== */

        .aol-bottom {

          display: flex;

          justify-content: center;

          align-items: center;

          gap: 14px;

          padding-top: 19px;

          border-top:
            1px solid
            rgba(21,21,20,.08);

          color: #aaa298;

          font-size: 6px;

          font-weight: 800;

          letter-spacing: .22em;
        }


        .aol-bottom div {

          width: 32px;

          height: 2px;

          background:
            var(--aol-gold);
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {

          .aol-section {

            padding:
              75px 22px;
          }


          .aol-heading-area {

            grid-template-columns: 1fr;

            gap: 25px;

            padding:
              55px 0
              45px;
          }


          .aol-heading-area h2 {

            font-size:
              clamp(
                65px,
                12vw,
                100px
              );
          }


          .aol-heading-text {

            max-width: 560px;
          }


          .aol-feature-panel {

            min-height: 350px;

            border-radius: 38px;
          }


          .aol-features {

            gap: 25px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 650px) {

          .aol-section {

            padding:
              62px 17px
              50px;
          }


          .aol-brand {

            display: none;
          }


          .aol-label {

            font-size: 8px;

            letter-spacing: .17em;
          }


          .aol-heading-area {

            padding:
              42px 0
              35px;

            gap: 25px;
          }


          .aol-heading-area h2 {

            font-size:
              clamp(
                58px,
                18vw,
                85px
              );

            line-height: .84;
          }


          .aol-heading-text strong {

            font-size: 10px;
          }


          .aol-heading-text p {

            font-size: 12px;

            line-height: 1.8;
          }


          /* PANEL */

          .aol-feature-panel {

            min-height: 340px;

            padding:
              40px 22px;

            border-radius: 28px;
          }


          .aol-panel-circle {

            width: 240px;

            height: 240px;

            left: -105px;

            top: -85px;
          }


          .aol-panel-circle::before {

            inset: 16px;
          }


          .aol-panel-content h3 {

            font-size:
              clamp(
                38px,
                11vw,
                55px
              );
          }


          .aol-panel-content p {

            font-size: 11.5px;

            line-height: 1.8;
          }


          .aol-panel-mark {

            right: 10px;

            font-size: 30px;
          }


          /* FEATURES */

          .aol-features {

            display: flex;

            flex-direction: column;

            gap: 0;

            padding:
              30px 0
              25px;
          }


          .aol-feature {

            grid-template-columns:
              44px
              1fr;

            padding:
              19px 0;

            border-bottom:
              1px solid
              rgba(21,21,20,.08);
          }


          .aol-feature:first-child {

            padding-top: 0;
          }


          .aol-feature:last-child {

            border-bottom: none;
          }


          .aol-feature h4 {

            font-size: 17px;
          }


          .aol-feature p {

            max-width: 100%;

            font-size: 11.5px;
          }


          .aol-bottom {

            font-size: 5px;

            letter-spacing: .16em;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {

          .aol-section {

            padding:
              54px 14px
              43px;
          }


          .aol-heading-area h2 {

            font-size: 57px;
          }


          .aol-feature-panel {

            min-height: 320px;

            border-radius: 24px;
          }


          .aol-panel-content h3 {

            font-size: 36px;
          }


          .aol-panel-content p {

            font-size: 11px;
          }
        }


        @media (prefers-reduced-motion: reduce) {

          .aol-section * {

            transition: none !important;
          }
        }

      `}</style>

    </section>
  );
}