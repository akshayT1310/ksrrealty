import React from "react";
import {
  Search,
  SlidersHorizontal,
  MapPin,
  FileCheck2,
} from "lucide-react";

export default function HowKsrWorks() {
  const steps = [
    {
      icon: Search,
      title: "Tell Us What You Need",
      text: "Share your preferred location, budget, property type and requirements with our team.",
    },
    {
      icon: SlidersHorizontal,
      title: "We Curate Options",
      text: "We shortlist suitable properties based on your needs, so you spend less time searching.",
    },
    {
      icon: MapPin,
      title: "Visit & Explore",
      text: "Visit the shortlisted properties with our guidance and understand every important detail.",
    },
    {
      icon: FileCheck2,
      title: "Move Forward",
      text: "From negotiation to documentation, we help you move ahead with confidence.",
    },
  ];

  return (
    <section className="ksr-how-section">
      <div className="ksr-how-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="ksr-how-header">

          <div className="ksr-how-eyebrow">
            <span className="ksr-how-line" />
            HOW KSR WORKS
          </div>

          <h2>
            Simple Steps.
            <br />
            <span>Better decisions.</span>
          </h2>

          <p>
            A straightforward property journey designed around your needs —
            from the first conversation to the final decision.
          </p>

        </div>


        {/* =====================================================
            STEPS
        ===================================================== */}

        <div className="ksr-how-grid">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                className="ksr-how-card"
                key={step.title}
              >

                {/* TOP NUMBER */}

                <div className="ksr-card-number">
                  {String(index + 1).padStart(2, "0")}
                </div>


                {/* ICON */}

                <div className="ksr-how-icon">
                  <Icon
                    size={20}
                    strokeWidth={1.6}
                  />
                </div>


                {/* STEP LABEL */}

                <div className="ksr-how-label">
                  STEP {String(index + 1).padStart(2, "0")}
                </div>


                {/* TITLE */}

                <h3>
                  {step.title}
                </h3>


                {/* DESCRIPTION */}

                <p>
                  {step.text}
                </p>


                {/* BOTTOM LINE */}

                <div className="ksr-how-card-line" />

              </div>
            );
          })}

        </div>

      </div>


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        @import url(
          'https://fonts.googleapis.com/css2?family=Allura&display=swap'
        );


        /* =====================================================
           RESET
        ===================================================== */

        .ksr-how-section,
        .ksr-how-section * {
          box-sizing: border-box;
        }


        /* =====================================================
           SECTION
        ===================================================== */

        .ksr-how-section {
          width: 100%;

          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(162, 123, 67, 0.045),
              transparent 28%
            ),
            #fdfbf7;

          padding: 95px 24px;

          color: #171614;

          overflow: hidden;
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .ksr-how-container {
          width: min(1180px, 100%);

          margin: 0 auto;
        }


        /* =====================================================
           HEADER
        ===================================================== */

        .ksr-how-header {
          margin-bottom: 58px;

          max-width: 760px;
        }


        /* =====================================================
           EYEBROW
        ===================================================== */

        .ksr-how-eyebrow {
          display: flex;

          align-items: center;

          gap: 10px;

          margin-bottom: 22px;

          color: #9b9388;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 10px;

          font-weight: 600;

          letter-spacing: 0.19em;

          text-transform: uppercase;
        }


        .ksr-how-line {
          display: inline-block;

          width: 34px;

          height: 1px;

          background: #b98a4b;

          opacity: 0.7;
        }


        /* =====================================================
           MAIN HEADING
        ===================================================== */

        .ksr-how-header h2 {
          margin: 0;

          font-family:
            var(--font-display),
            Georgia,
            "Times New Roman",
            serif;

          font-size: clamp(48px, 6.5vw, 86px);

          font-weight: 500;

          line-height: 0.94;

          letter-spacing: -0.055em;

          color: var(--color-ink, #151514);
        }


        /* =====================================================
           CURSIVE SECOND LINE
        ===================================================== */

        .ksr-how-header h2 span {
          display: block;

          margin-top: 9px;

          color: #b98a4b;

          font-family:
            "Allura",
            "Brush Script MT",
            "Segoe Script",
            cursive;

          font-size: 1.08em;

          font-weight: 400;

          font-style: normal;

          line-height: 0.78;

          letter-spacing: 0;
        }


        /* =====================================================
           HEADER DESCRIPTION
        ===================================================== */

        .ksr-how-header > p {
          max-width: 570px;

          margin: 28px 0 0;

          color: #77736c;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 13px;

          line-height: 1.8;
        }


        /* =====================================================
           GRID
        ===================================================== */

        .ksr-how-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 16px;

          width: 100%;
        }


        /* =====================================================
           CARD
        ===================================================== */

        .ksr-how-card {
          position: relative;

          min-height: 310px;

          padding: 32px 28px 38px;

          background: #fffdf9;

          border: 1px solid #e7e0d5;

          border-radius: 30px;

          overflow: hidden;

          transition:
            transform 0.35s ease,
            background 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }


        /* =====================================================
           CARD GLOW
        ===================================================== */

        .ksr-how-card::before {
          content: "";

          position: absolute;

          width: 120px;

          height: 120px;

          right: -55px;

          top: -55px;

          border-radius: 50%;

          background: rgba(162, 123, 67, 0.045);

          pointer-events: none;

          transition:
            transform 0.4s ease,
            background 0.4s ease;
        }


        /* =====================================================
           HOVER
        ===================================================== */

        .ksr-how-card:hover {
          background: #ffffff;

          border-color: #d8cbb8;

          transform: translateY(-6px);

          box-shadow:
            0 18px 45px rgba(45, 35, 20, 0.075);
        }


        .ksr-how-card:hover::before {
          transform: scale(1.6);

          background: rgba(162, 123, 67, 0.065);
        }


        /* =====================================================
           NUMBER
        ===================================================== */

        .ksr-card-number {
          position: absolute;

          top: 24px;

          right: 25px;

          color: #c9bda9;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 14px;

          font-style: italic;

          opacity: 0.75;

          z-index: 2;
        }


        /* =====================================================
           ICON
        ===================================================== */

        .ksr-how-icon {
          position: relative;

          z-index: 2;

          width: 52px;

          height: 52px;

          display: flex;

          align-items: center;

          justify-content: center;

          border: 1px solid #ded5c8;

          border-radius: 50%;

          color: #a27b43;

          background: #fffaf2;

          margin-bottom: 28px;

          transition:
            background 0.3s ease,
            color 0.3s ease,
            transform 0.3s ease,
            border-color 0.3s ease;
        }


        /* =====================================================
           ICON HOVER
        ===================================================== */

        .ksr-how-card:hover .ksr-how-icon {
          background: #a27b43;

          color: #ffffff;

          border-color: #a27b43;

          transform:
            translateY(-3px)
            rotate(-4deg);
        }


        /* =====================================================
           STEP LABEL
        ===================================================== */

        .ksr-how-label {
          position: relative;

          z-index: 2;

          margin-bottom: 13px;

          color: #aaa49b;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 9px;

          font-weight: 600;

          letter-spacing: 0.16em;
        }


        /* =====================================================
           CARD TITLE
           var(--font-display)
        ===================================================== */

        .ksr-how-card h3 {
          position: relative;

          z-index: 2;

          margin: 0;

          max-width: 220px;

          font-family:
            var(--font-display),
            Georgia,
            "Times New Roman",
            serif;

          color: var(--color-ink, #171614);

          font-size: 1.25rem;

          font-weight: 500;

          line-height: 1.15;

          letter-spacing: -0.02em;
        }


        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .ksr-how-card p {
          position: relative;

          z-index: 2;

          margin: 15px 0 0;

          max-width: 240px;

          color: #77736c;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 12.5px;

          line-height: 1.75;
        }


        /* =====================================================
           BOTTOM LINE
        ===================================================== */

        .ksr-how-card-line {
          position: absolute;

          left: 28px;

          bottom: 22px;

          width: 32px;

          height: 2px;

          border-radius: 50px;

          background: #a27b43;

          opacity: 0.45;

          transition:
            width 0.35s ease,
            opacity 0.35s ease;
        }


        .ksr-how-card:hover .ksr-how-card-line {
          width: 65px;

          opacity: 0.8;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1050px) {

          .ksr-how-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 15px;
          }


          .ksr-how-card {
            min-height: 290px;
          }
        }


        /* =====================================================
           TABLET SMALL
        ===================================================== */

        @media (max-width: 900px) {

          .ksr-how-section {
            padding: 75px 22px;
          }


          .ksr-how-header {
            margin-bottom: 45px;
          }


          .ksr-how-header h2 {
            font-size: clamp(42px, 7vw, 56px);
          }


          .ksr-how-card {
            border-radius: 27px;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .ksr-how-section {
            padding: 65px 17px;
          }


          .ksr-how-container {
            width: 100%;
          }


          /* HEADER */

          .ksr-how-header {
            margin-bottom: 38px;
          }


          .ksr-how-eyebrow {
            margin-bottom: 17px;

            font-size: 9px;

            letter-spacing: 0.15em;
          }


          .ksr-how-line {
            width: 24px;
          }


          .ksr-how-header h2 {
            font-size: 43px;

            line-height: 0.96;
          }


          .ksr-how-header h2 span {
            margin-top: 8px;

            font-size: 1.08em;
          }


          .ksr-how-header > p {
            margin-top: 21px;

            font-size: 13px;

            line-height: 1.75;
          }


          /* GRID */

          .ksr-how-grid {
            grid-template-columns: 1fr;

            gap: 14px;
          }


          /* CARD */

          .ksr-how-card {
            min-height: auto;

            padding:
              28px
              23px
              40px;

            border-radius: 27px;
          }


          .ksr-how-card:hover {
            transform: translateY(-3px);
          }


          /* NUMBER */

          .ksr-card-number {
            top: 22px;

            right: 22px;

            font-size: 13px;
          }


          /* ICON */

          .ksr-how-icon {
            width: 46px;

            height: 46px;

            margin-bottom: 22px;
          }


          /* LABEL */

          .ksr-how-label {
            margin-bottom: 11px;

            font-size: 8.5px;
          }


          /* TITLE */

          .ksr-how-card h3 {
            max-width: 280px;

            font-size: 1.25rem;

            line-height: 1.15;
          }


          /* TEXT */

          .ksr-how-card p {
            max-width: 100%;

            margin-top: 13px;

            font-size: 12.5px;

            line-height: 1.75;
          }


          /* LINE */

          .ksr-how-card-line {
            left: 23px;

            bottom: 20px;

            width: 30px;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {

          .ksr-how-section {
            padding:
              55px
              14px;
          }


          .ksr-how-header h2 {
            font-size: 38px;
          }


          .ksr-how-card {
            padding:
              25px
              20px
              37px;

            border-radius: 24px;
          }


          .ksr-how-card h3 {
            font-size: 1.2rem;
          }


          .ksr-how-card p {
            font-size: 12px;
          }


          .ksr-how-card-line {
            left: 20px;
          }
        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .ksr-how-card,
          .ksr-how-icon,
          .ksr-how-card-line,
          .ksr-how-card::before {
            transition: none;
          }
        }

      `}</style>
    </section>
  );
}