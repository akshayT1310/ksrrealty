import React from "react";
import { Link } from "react-router-dom";

/* =========================================================
   KSR REALTY VENTURES
   PROPERTY VALUATION — PREMIUM LIGHT EDITORIAL UI
========================================================= */

const services = [
  {
    title: "Residential Property Valuation",
    text: "Accurate valuation of homes, apartments, villas and residential properties based on location, size, condition and current market trends.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "Commercial Property Valuation",
    text: "Professional valuation for offices, shops, commercial buildings and investment properties with a market-focused approach.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "Plot & Land Valuation",
    text: "Understand the realistic market value of residential, commercial and development land across prime locations.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "Investment Valuation",
    text: "Make informed investment decisions through property potential analysis, location insights and market-oriented valuation.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1800&q=90",
  },
];

const process = [
  {
    title: "Property Assessment",
    text: "We understand the property, location, size, condition and purpose of valuation.",
    icon: "⌂",
  },
  {
    title: "Market Research",
    text: "Our team studies comparable properties and current market conditions.",
    icon: "◌",
  },
  {
    title: "Professional Analysis",
    text: "Multiple valuation factors are evaluated to arrive at a realistic market estimate.",
    icon: "◇",
  },
  {
    title: "Valuation Report",
    text: "You receive a clear and professional valuation summary for your decision-making.",
    icon: "▱",
  },
];

export default function PropertyValuation() {
  return (
    <main className="valuation-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="valuation-hero">

        <div className="valuation-hero-image" />

        <div className="valuation-hero-overlay" />

        <div className="valuation-container valuation-hero-inner">

          <div className="hero-copy">

            <div className="valuation-eyebrow">
              <span className="eyebrow-line" />
              KSR REALTY VENTURES
              <span className="eyebrow-dot" />
              PROPERTY VALUATION
            </div>

            <h1>
              Know Your Property's
              <span>True Market Value.</span>
            </h1>

            <p>
              Professional property valuation for homes, plots, villas,
              commercial spaces and real estate investments.
            </p>

            <div className="hero-actions">

              <Link
                to="/contact"
                className="gold-button"
              >
                <span>Get Property Valuation</span>
                <b>↗</b>
              </Link>

              <Link
                to="/property"
                className="glass-button"
              >
                <span>Explore Properties</span>
                <b>→</b>
              </Link>

            </div>

          </div>

        </div>

        {/* HERO BOTTOM */}

        <div className="hero-meta">

          <div className="hero-meta-item">
            <span className="meta-dot" />
            <span>Market Focused</span>
          </div>

          <div className="hero-meta-item">
            <span className="meta-dot" />
            <span>Location Based</span>
          </div>

          <div className="hero-meta-item">
            <span className="meta-dot" />
            <span>Transparent Process</span>
          </div>

          <div className="hero-scroll">
            <span>SCROLL TO EXPLORE</span>
            <i />
          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="valuation-intro">

        <div className="valuation-container intro-layout">

          <div className="intro-title">

            <div className="section-kicker">
              PROPERTY VALUATION
            </div>

            <h2>
              A Better Understanding
              <span>of Your Real Estate.</span>
            </h2>

          </div>

          <div className="intro-text">

            <div className="intro-mark">
              “
            </div>

            <p>
              Property value is more than just a number. Location,
              accessibility, development, property condition, surrounding
              infrastructure and market demand all influence the true worth
              of a property.
            </p>

            <p>
              At <strong>KSR Realty Ventures</strong>, we help property
              owners, buyers and investors understand the potential market
              value of their real estate before making important decisions.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="valuation-services">

        <div className="valuation-container">

          <div className="services-header">

            <div>

              <div className="section-kicker">
                OUR EXPERTISE
              </div>

              <h2>
                Valuation For
                <span>Every Property.</span>
              </h2>

            </div>

            <div className="services-description">

              <span className="description-mark">
                ◆
              </span>

              <p>
                From luxury homes and villas to commercial investments,
                we help you understand your property's real market position.
              </p>

            </div>

          </div>


          {/* PREMIUM CARDS */}

          <div className="valuation-grid">

            {services.map((item) => (
              <article
                className="valuation-card"
                key={item.title}
              >

                <div className="valuation-card-image">

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  <div className="image-shade" />

                  <div className="card-top">

                    <span className="card-status">
                      PROPERTY VALUATION
                    </span>

                    <span className="card-mini-dot" />

                  </div>

                  <div className="image-arrow">
                    ↗
                  </div>

                </div>


                <div className="valuation-card-body">

                  <div className="card-small-label">
                    KSR REALTY VENTURES
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                  <Link
                    to="/contact"
                    className="card-action"
                  >
                    <span>Discuss Your Property</span>
                    <b>↗</b>
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY KSR
      ===================================================== */}

      <section className="why-section">

        <div className="valuation-container why-layout">

          <div className="why-visual">

            <div className="why-image-wrap">

              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=90"
                alt="Luxury property interior"
                loading="lazy"
              />

              <div className="why-image-overlay" />

            </div>

            <div className="why-badge">

              <span>KSR</span>

              <small>
                REALTY
                <br />
                VENTURES
              </small>

            </div>

            <div className="why-caption">
              PROPERTY
              <br />
              INTELLIGENCE
            </div>

          </div>


          <div className="why-content">

            <div className="section-kicker">
              WHY KSR REALTY
            </div>

            <h2>
              Value With
              <span>Confidence.</span>
            </h2>

            <p className="why-description">
              We combine real estate knowledge, local market understanding
              and a transparent approach to help you make better property
              decisions.
            </p>


            <div className="why-list">

              <div className="why-item">

                <div className="why-indicator">
                  <span />
                </div>

                <div>
                  <h3>
                    Local Market Understanding
                  </h3>

                  <p>
                    Location-specific insights help create a more realistic
                    property assessment.
                  </p>
                </div>

              </div>


              <div className="why-item">

                <div className="why-indicator">
                  <span />
                </div>

                <div>
                  <h3>
                    Transparent Approach
                  </h3>

                  <p>
                    We explain the important factors that influence your
                    property's estimated market value.
                  </p>
                </div>

              </div>


              <div className="why-item">

                <div className="why-indicator">
                  <span />
                </div>

                <div>
                  <h3>
                    Complete Real Estate Support
                  </h3>

                  <p>
                    Valuation can be followed by buying, selling,
                    construction and property consulting support.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="process-section">

        <div className="valuation-container">

          <div className="process-heading">

            <div>

              <div className="section-kicker">
                OUR PROCESS
              </div>

              <h2>
                Simple.
                <span>Transparent. Professional.</span>
              </h2>

            </div>

            <p>
              A structured valuation process designed to give you
              clarity before your next property decision.
            </p>

          </div>


          <div className="process-grid">

            {process.map((item) => (
              <div
                className="process-card"
                key={item.title}
              >

                <div className="process-top">

                  <span className="process-label">
                    KSR VALUATION
                  </span>

                  <i>
                    ↗
                  </i>

                </div>

                <div className="process-icon">
                  {item.icon}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="valuation-cta">

        <div className="cta-bg" />

        <div className="cta-overlay" />

        <div className="valuation-container cta-inner">

          <div className="cta-kicker">
            <span />
            READY TO KNOW YOUR VALUE?
            <span />
          </div>

          <h2>
            Let's Understand
            <span>What Your Property Is Worth.</span>
          </h2>

          <p>
            Talk to KSR Realty Ventures for property valuation and
            complete real estate assistance.
          </p>

          <Link
            to="/contact"
            className="cta-button"
          >
            <span>Request a Valuation</span>
            <b>↗</b>
          </Link>

        </div>

      </section>


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        /* =====================================================
           ROOT
        ===================================================== */

        .valuation-page {
          --v-paper: #f5f3ed;
          --v-paper-2: #eeebe3;
          --v-white: #fffdfa;
          --v-ink: #18212b;
          --v-muted: #737a80;
          --v-gold: #ad7e29;
          --v-gold-light: #d3b46c;
          --v-line: #ddd8cd;
          --v-dark: #0d151d;

          width: 100%;
          overflow: hidden;

          background: var(--v-paper);
          color: var(--v-ink);
        }


        /* =====================================================
           GLOBAL
        ===================================================== */

        .valuation-page *,
        .valuation-page *::before,
        .valuation-page *::after {
          box-sizing: border-box;
        }

        .valuation-container {
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
        }

        .valuation-page img {
          display: block;
          max-width: 100%;
        }

        .valuation-page h1,
        .valuation-page h2,
        .valuation-page h3,
        .valuation-page p {
          margin-top: 0;
        }

        .section-kicker {
          color: var(--v-gold);

          font-size: 10px;
          font-weight: 800;
          letter-spacing: .24em;
          line-height: 1.4;

          text-transform: uppercase;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .valuation-hero {
          min-height: 720px;

          position: relative;

          display: flex;
          align-items: center;

          overflow: hidden;

          color: #fff;

          background: var(--v-dark);

          border-radius: 0 0 42px 42px;
        }

        .valuation-hero-image {
          position: absolute;
          inset: 0;

          background-image:
            url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=90");

          background-size: cover;
          background-position: center;

          transform: scale(1.025);

          animation: heroZoom 12s ease-out forwards;
        }

        @keyframes heroZoom {
          from {
            transform: scale(1.06);
          }

          to {
            transform: scale(1.025);
          }
        }

        .valuation-hero-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(8,14,20,.94) 0%,
              rgba(8,14,20,.80) 35%,
              rgba(8,14,20,.42) 70%,
              rgba(8,14,20,.18) 100%
            );
        }

        .valuation-hero-inner {
          position: relative;
          z-index: 2;

          padding-top: 80px;
          padding-bottom: 130px;
        }

        .hero-copy {
          max-width: 850px;
        }


        /* =====================================================
           HERO EYEBROW
        ===================================================== */

        .valuation-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;

          color: rgba(255,255,255,.64);

          font-size: 9px;
          font-weight: 800;
          letter-spacing: .24em;
        }

        .eyebrow-line {
          width: 35px;
          height: 1px;

          background: var(--v-gold-light);
        }

        .eyebrow-dot {
          width: 4px;
          height: 4px;

          flex: 0 0 auto;

          border-radius: 50%;

          background: var(--v-gold-light);
        }


        /* =====================================================
           HERO TITLE
        ===================================================== */

        .valuation-hero h1 {
          max-width: 900px;

          margin: 27px 0 25px;

          font-size: clamp(48px, 7.3vw, 92px);
          line-height: .97;

          letter-spacing: -.06em;

          font-weight: 600;
        }

        .valuation-hero h1 span {
          display: block;

          color: var(--v-gold-light);

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: .86em;
          font-weight: 400;
          font-style: italic;

          letter-spacing: -.045em;
        }

        .valuation-hero p {
          max-width: 570px;

          margin-bottom: 0;

          color: rgba(255,255,255,.68);

          font-size: 15px;
          line-height: 1.85;
        }


        /* =====================================================
           HERO BUTTONS
        ===================================================== */

        .hero-actions {
          display: flex;
          align-items: center;

          gap: 12px;

          margin-top: 34px;
        }

        .gold-button,
        .glass-button,
        .cta-button {
          min-height: 54px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 22px;

          padding: 0 24px;

          border-radius: 999px;

          text-decoration: none;

          font-size: 10px;
          font-weight: 800;
          letter-spacing: .1em;

          text-transform: uppercase;

          transition:
            transform .3s ease,
            background .3s ease,
            border-color .3s ease,
            color .3s ease;
        }

        .gold-button {
          color: #fff;

          background: var(--v-gold);

          box-shadow:
            0 12px 30px rgba(0,0,0,.18);
        }

        .gold-button b,
        .cta-button b {
          font-size: 17px;
          font-weight: 400;
        }

        .gold-button:hover,
        .cta-button:hover {
          transform: translateY(-3px);

          background: #966b20;
        }

        .glass-button {
          color: #fff;

          border: 1px solid rgba(255,255,255,.28);

          background: rgba(255,255,255,.06);

          backdrop-filter: blur(12px);
        }

        .glass-button b {
          font-size: 17px;
          font-weight: 400;
        }

        .glass-button:hover {
          transform: translateY(-3px);

          border-color: var(--v-gold-light);

          color: var(--v-gold-light);
        }


        /* =====================================================
           HERO META
        ===================================================== */

        .hero-meta {
          position: absolute;
          z-index: 5;

          left: 50%;
          bottom: 0;

          transform: translateX(-50%);

          width: min(1200px, calc(100% - 48px));

          display: flex;
          align-items: center;

          padding: 20px 0;

          border-top: 1px solid rgba(255,255,255,.16);
        }

        .hero-meta-item {
          min-width: 150px;

          display: flex;
          align-items: center;

          gap: 9px;
        }

        .meta-dot {
          width: 5px;
          height: 5px;

          flex: 0 0 auto;

          border-radius: 50%;

          background: var(--v-gold-light);

          box-shadow:
            0 0 0 4px rgba(211,180,108,.08);
        }

        .hero-meta-item > span:last-child {
          color: rgba(255,255,255,.5);

          font-size: 8px;
          font-weight: 800;
          letter-spacing: .16em;

          text-transform: uppercase;
        }

        .hero-scroll {
          margin-left: auto;

          display: flex;
          align-items: center;

          gap: 13px;
        }

        .hero-scroll span {
          color: rgba(255,255,255,.35);

          font-size: 8px;
          letter-spacing: .18em;
        }

        .hero-scroll i {
          width: 34px;
          height: 1px;

          display: block;

          background: rgba(255,255,255,.35);
        }


        /* =====================================================
           INTRO
        ===================================================== */

        .valuation-intro {
          padding: 125px 0;

          background: var(--v-paper);
        }

        .intro-layout {
          display: grid;

          grid-template-columns: .95fr 1.05fr;

          gap: 110px;
        }

        .intro-title h2,
        .services-header h2,
        .why-content h2,
        .process-heading h2,
        .cta-inner h2 {
          margin: 18px 0 0;

          font-size: clamp(42px, 5vw, 68px);

          line-height: 1.02;

          letter-spacing: -.055em;

          font-weight: 600;
        }

        .intro-title h2 span,
        .services-header h2 span,
        .why-content h2 span,
        .process-heading h2 span,
        .cta-inner h2 span {
          display: block;

          color: var(--v-gold);

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-weight: 400;
          font-style: italic;
        }

        .intro-text {
          position: relative;

          padding-top: 12px;
        }

        .intro-mark {
          position: absolute;

          left: -38px;
          top: -10px;

          color: rgba(173,126,41,.18);

          font-family: Georgia, serif;

          font-size: 80px;
          line-height: 1;
        }

        .intro-text p {
          position: relative;

          color: var(--v-muted);

          font-size: 15px;
          line-height: 1.95;
        }

        .intro-text p + p {
          margin-top: 20px;
        }

        .intro-text strong {
          color: var(--v-ink);
        }


        /* =====================================================
           SERVICES
        ===================================================== */

        .valuation-services {
          padding: 125px 0;

          background: var(--v-white);

          border-radius: 48px 48px 0 0;
        }

        .services-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;

          gap: 70px;

          margin-bottom: 58px;
        }

        .services-description {
          max-width: 400px;

          display: flex;
          align-items: flex-start;

          gap: 18px;
        }

        .description-mark {
          color: var(--v-gold);

          font-size: 9px;

          margin-top: 5px;
        }

        .services-description p {
          margin: 0;

          color: var(--v-muted);

          font-size: 13px;
          line-height: 1.8;
        }


        /* =====================================================
           SERVICE CARDS
        ===================================================== */

        .valuation-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 28px;
        }

        .valuation-card {
          overflow: hidden;

          background: #f4f2ec;

          border: 1px solid #e5e1d8;

          border-radius: 30px;

          box-shadow:
            0 8px 30px rgba(28,35,42,.04);

          transition:
            transform .45s cubic-bezier(.2,.7,.2,1),
            box-shadow .45s ease,
            border-color .45s ease;
        }

        .valuation-card:hover {
          transform: translateY(-8px);

          border-color: rgba(173,126,41,.4);

          box-shadow:
            0 28px 70px rgba(30,35,40,.12);
        }


        /* =====================================================
           CARD IMAGE
        ===================================================== */

        .valuation-card-image {
          height: 350px;

          position: relative;

          overflow: hidden;

          border-radius: 30px 30px 0 0;
        }

        .valuation-card-image img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          transition:
            transform .8s cubic-bezier(.2,.7,.2,1);
        }

        .valuation-card:hover .valuation-card-image img {
          transform: scale(1.07);
        }

        .image-shade {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              rgba(0,0,0,.04) 35%,
              rgba(0,0,0,.5) 100%
            );
        }


        /* =====================================================
           CARD TOP
        ===================================================== */

        .card-top {
          position: absolute;

          top: 18px;
          left: 18px;
          right: 18px;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .card-status {
          padding: 9px 13px;

          color: #fff;

          border: 1px solid rgba(255,255,255,.24);

          border-radius: 999px;

          background: rgba(0,0,0,.22);

          backdrop-filter: blur(12px);

          font-size: 8px;
          font-weight: 800;
          letter-spacing: .18em;
        }

        .card-mini-dot {
          width: 8px;
          height: 8px;

          border-radius: 50%;

          background: var(--v-gold-light);

          box-shadow:
            0 0 0 5px rgba(211,180,108,.12);
        }

        .image-arrow {
          position: absolute;

          right: 20px;
          bottom: 20px;

          width: 48px;
          height: 48px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #fff;

          border: 1px solid rgba(255,255,255,.28);

          border-radius: 50%;

          background: rgba(0,0,0,.18);

          backdrop-filter: blur(12px);

          font-size: 18px;

          transition:
            background .3s ease,
            transform .3s ease;
        }

        .valuation-card:hover .image-arrow {
          background: var(--v-gold);

          transform: rotate(8deg);
        }


        /* =====================================================
           CARD BODY
        ===================================================== */

        .valuation-card-body {
          padding: 32px 32px 34px;
        }

        .card-small-label {
          color: var(--v-gold);

          font-size: 8px;
          font-weight: 800;
          letter-spacing: .2em;
        }

        .valuation-card h3 {
          margin: 10px 0 13px;

          color: var(--v-ink);

          font-size: 25px;
          line-height: 1.15;

          letter-spacing: -.03em;

          font-weight: 600;
        }

        .valuation-card p {
          max-width: 560px;

          margin: 0;

          color: var(--v-muted);

          font-size: 13px;
          line-height: 1.8;
        }

        .card-action {
          display: inline-flex;
          align-items: center;

          gap: 12px;

          margin-top: 25px;

          color: var(--v-gold);

          text-decoration: none;

          font-size: 9px;
          font-weight: 800;
          letter-spacing: .12em;

          text-transform: uppercase;

          transition: gap .25s ease;
        }

        .card-action b {
          font-size: 15px;
          font-weight: 400;
        }

        .card-action:hover {
          gap: 17px;
        }


        /* =====================================================
           WHY SECTION
        ===================================================== */

        .why-section {
          padding: 125px 0;

          background: var(--v-paper-2);

          border-radius: 48px 48px 0 0;
        }

        .why-layout {
          display: grid;

          grid-template-columns: .92fr 1.08fr;

          align-items: center;

          gap: 100px;
        }


        /* =====================================================
           WHY IMAGE
        ===================================================== */

        .why-visual {
          position: relative;
        }

        .why-image-wrap {
          height: 600px;

          overflow: hidden;

          border-radius: 34px;
        }

        .why-image-wrap img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          transition: transform .8s ease;
        }

        .why-visual:hover .why-image-wrap img {
          transform: scale(1.04);
        }

        .why-image-overlay {
          position: absolute;
          inset: 0;

          border-radius: 34px;

          background:
            linear-gradient(
              180deg,
              transparent 45%,
              rgba(8,15,21,.62)
            );
        }

        .why-badge {
          position: absolute;

          left: 25px;
          bottom: 25px;

          min-width: 135px;

          display: flex;
          align-items: center;

          gap: 14px;

          padding: 16px 19px;

          color: #fff;

          background: rgba(12,20,27,.9);

          border: 1px solid rgba(255,255,255,.1);

          border-radius: 18px;

          backdrop-filter: blur(15px);
        }

        .why-badge span {
          color: var(--v-gold-light);

          font-family: Georgia, serif;

          font-size: 22px;
        }

        .why-badge small {
          color: rgba(255,255,255,.55);

          font-size: 7px;
          line-height: 1.4;
          letter-spacing: .15em;
        }

        .why-caption {
          position: absolute;

          top: 24px;
          right: 25px;

          color: rgba(255,255,255,.62);

          font-size: 7px;
          line-height: 1.6;
          letter-spacing: .2em;

          text-align: right;
        }


        /* =====================================================
           WHY CONTENT
        ===================================================== */

        .why-description {
          max-width: 590px;

          margin: 28px 0;

          color: var(--v-muted);

          font-size: 14px;
          line-height: 1.9;
        }

        .why-list {
          margin-top: 35px;
        }

        .why-item {
          display: grid;

          grid-template-columns: 20px 1fr;

          gap: 18px;

          padding: 23px 0;

          border-top: 1px solid var(--v-line);
        }

        .why-indicator {
          padding-top: 5px;
        }

        .why-indicator span {
          width: 7px;
          height: 7px;

          display: block;

          border-radius: 50%;

          background: var(--v-gold);

          box-shadow:
            0 0 0 5px rgba(173,126,41,.08);
        }

        .why-item h3 {
          margin-bottom: 7px;

          color: var(--v-ink);

          font-size: 15px;
          font-weight: 700;
        }

        .why-item p {
          max-width: 520px;

          margin: 0;

          color: var(--v-muted);

          font-size: 12px;
          line-height: 1.75;
        }


        /* =====================================================
           PROCESS
        ===================================================== */

        .process-section {
          padding: 125px 0;

          background: var(--v-white);

          border-radius: 48px 48px 0 0;
        }

        .process-heading {
          display: flex;

          justify-content: space-between;
          align-items: flex-end;

          gap: 60px;

          margin-bottom: 58px;
        }

        .process-heading > p {
          max-width: 360px;

          margin: 0;

          color: var(--v-muted);

          font-size: 13px;
          line-height: 1.8;
        }

        .process-grid {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 18px;
        }

        .process-card {
          min-height: 310px;

          position: relative;

          padding: 25px;

          background: #f5f3ed;

          border: 1px solid #e5e1d8;

          border-radius: 28px;

          overflow: hidden;

          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .process-card:hover {
          transform: translateY(-6px);

          border-color: rgba(173,126,41,.35);

          box-shadow:
            0 22px 55px rgba(30,35,40,.09);
        }

        .process-top {
          display: flex;

          align-items: center;
          justify-content: space-between;
        }

        .process-label {
          color: var(--v-gold);

          font-size: 8px;
          font-weight: 800;
          letter-spacing: .16em;
        }

        .process-top i {
          width: 36px;
          height: 36px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: var(--v-gold);

          border: 1px solid #ded8cb;

          border-radius: 50%;

          font-style: normal;

          transition:
            transform .3s ease,
            background .3s ease;
        }

        .process-card:hover .process-top i {
          transform: rotate(8deg);

          background: #ebe6da;
        }

        .process-icon {
          width: 62px;
          height: 62px;

          margin-top: 50px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: var(--v-gold);

          background: #ebe6da;

          border-radius: 50%;

          font-family: Georgia, serif;

          font-size: 24px;
        }

        .process-card h3 {
          margin: 23px 0 11px;

          color: var(--v-ink);

          font-size: 18px;
          line-height: 1.2;
        }

        .process-card p {
          margin: 0;

          color: var(--v-muted);

          font-size: 12px;
          line-height: 1.75;
        }


        /* =====================================================
           CTA
        ===================================================== */

        .valuation-cta {
          min-height: 580px;

          position: relative;

          display: flex;
          align-items: center;

          overflow: hidden;

          color: #fff;

          border-radius: 48px 48px 0 0;
        }

        .cta-bg {
          position: absolute;
          inset: 0;

          background:
            url("https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=90")
            center / cover no-repeat;

          transform: scale(1.03);
        }

        .cta-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(8,15,21,.94),
              rgba(8,15,21,.72),
              rgba(8,15,21,.82)
            );
        }

        .cta-inner {
          position: relative;
          z-index: 2;

          text-align: center;
        }

        .cta-kicker {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 14px;

          color: var(--v-gold-light);

          font-size: 9px;
          font-weight: 800;
          letter-spacing: .23em;
        }

        .cta-kicker span {
          width: 30px;
          height: 1px;

          background: var(--v-gold-light);
        }

        .cta-inner h2 {
          max-width: 850px;

          margin: 22px auto 20px;

          color: #fff;
        }

        .cta-inner h2 span {
          color: var(--v-gold-light);
        }

        .cta-inner > p {
          max-width: 560px;

          margin: 0 auto 31px;

          color: rgba(255,255,255,.6);

          font-size: 14px;
          line-height: 1.8;
        }

        .cta-button {
          color: #fff;

          background: var(--v-gold);
        }


        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1050px) {

          .valuation-container {
            width: min(100% - 40px, 900px);
          }

          .intro-layout {
            gap: 60px;
          }

          .why-layout {
            gap: 60px;
          }

          .process-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .process-card {
            min-height: 280px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 800px) {

          .valuation-container {
            width: calc(100% - 32px);
          }

          .valuation-hero {
            min-height: 680px;

            border-radius: 0 0 30px 30px;
          }

          .valuation-hero-inner {
            padding-top: 50px;
            padding-bottom: 120px;
          }

          .valuation-hero h1 {
            font-size: clamp(48px, 9vw, 70px);
          }

          .intro-layout,
          .why-layout {
            grid-template-columns: 1fr;
          }

          .intro-layout {
            gap: 45px;
          }

          .why-layout {
            gap: 55px;
          }

          .services-header,
          .process-heading {
            display: block;
          }

          .services-description,
          .process-heading > p {
            margin-top: 25px;
          }

          .valuation-grid {
            gap: 18px;
          }

          .valuation-card-image {
            height: 290px;
          }

          .why-image-wrap {
            height: 500px;
          }

          .valuation-intro,
          .valuation-services,
          .why-section,
          .process-section {
            padding: 90px 0;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .valuation-container {
            width: calc(100% - 24px);
          }

          .valuation-hero {
            min-height: 690px;

            border-radius: 0 0 24px 24px;
          }

          .valuation-hero-inner {
            padding-top: 35px;
            padding-bottom: 130px;
          }

          .valuation-eyebrow {
            flex-wrap: wrap;

            font-size: 7px;
            letter-spacing: .17em;
          }

          .eyebrow-line {
            width: 22px;
          }

          .valuation-hero h1 {
            margin-top: 22px;

            font-size: clamp(44px, 13vw, 62px);

            line-height: .98;
          }

          .valuation-hero h1 span {
            margin-top: 5px;
          }

          .valuation-hero p {
            max-width: 100%;

            font-size: 13px;
            line-height: 1.75;
          }

          .hero-actions {
            flex-direction: column;

            align-items: stretch;

            gap: 10px;

            margin-top: 27px;
          }

          .gold-button,
          .glass-button {
            width: 100%;
          }

          .hero-meta {
            width: calc(100% - 24px);

            display: grid;

            grid-template-columns:
              repeat(3, 1fr);

            gap: 10px;

            padding: 17px 0;
          }

          .hero-meta-item {
            min-width: 0;

            gap: 7px;
          }

          .meta-dot {
            width: 4px;
            height: 4px;
          }

          .hero-meta-item > span:last-child {
            font-size: 6px;
            letter-spacing: .1em;
          }

          .hero-scroll {
            display: none;
          }


          /* INTRO */

          .valuation-intro {
            padding: 75px 0;
          }

          .intro-layout {
            gap: 35px;
          }

          .intro-title h2,
          .services-header h2,
          .why-content h2,
          .process-heading h2,
          .cta-inner h2 {
            font-size: 42px;
          }

          .intro-mark {
            display: none;
          }

          .intro-text p {
            font-size: 13px;
          }


          /* SERVICES */

          .valuation-services {
            padding: 75px 0;

            border-radius: 30px 30px 0 0;
          }

          .services-header {
            margin-bottom: 38px;
          }

          .services-description {
            gap: 12px;
          }

          .services-description p {
            font-size: 12px;
          }

          .valuation-grid {
            grid-template-columns: 1fr;

            gap: 18px;
          }

          .valuation-card {
            border-radius: 24px;
          }

          .valuation-card-image {
            height: 280px;

            border-radius: 24px 24px 0 0;
          }

          .card-top {
            top: 14px;
            left: 14px;
            right: 14px;
          }

          .card-status {
            padding: 8px 10px;

            font-size: 7px;
          }

          .card-mini-dot {
            width: 7px;
            height: 7px;
          }

          .image-arrow {
            width: 42px;
            height: 42px;

            right: 15px;
            bottom: 15px;
          }

          .valuation-card-body {
            padding: 25px 22px 27px;
          }

          .valuation-card h3 {
            font-size: 22px;
          }

          .valuation-card p {
            font-size: 12px;
          }


          /* WHY */

          .why-section {
            padding: 75px 0;

            border-radius: 30px 30px 0 0;
          }

          .why-image-wrap {
            height: 400px;

            border-radius: 26px;
          }

          .why-image-overlay {
            border-radius: 26px;
          }

          .why-badge {
            left: 15px;
            bottom: 15px;

            padding: 13px 15px;

            border-radius: 15px;
          }

          .why-caption {
            top: 18px;
            right: 18px;
          }

          .why-description {
            font-size: 13px;
          }

          .why-item {
            grid-template-columns: 16px 1fr;

            gap: 12px;
          }

          .why-indicator span {
            width: 6px;
            height: 6px;
          }


          /* PROCESS */

          .process-section {
            padding: 75px 0;

            border-radius: 30px 30px 0 0;
          }

          .process-grid {
            grid-template-columns: 1fr;

            gap: 12px;
          }

          .process-card {
            min-height: auto;

            padding: 22px;

            border-radius: 23px;
          }

          .process-icon {
            width: 58px;
            height: 58px;

            margin-top: 35px;
          }


          /* CTA */

          .valuation-cta {
            min-height: 500px;

            border-radius: 30px 30px 0 0;
          }

          .cta-kicker {
            font-size: 7px;
            letter-spacing: .16em;
          }

          .cta-kicker span {
            width: 20px;
          }

          .cta-inner h2 {
            font-size: 40px;
          }

          .cta-inner > p {
            font-size: 12px;
          }

          .cta-button {
            width: 100%;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 390px) {

          .valuation-container {
            width: calc(100% - 20px);
          }

          .valuation-hero {
            min-height: 660px;
          }

          .valuation-hero h1 {
            font-size: 41px;
          }

          .hero-meta {
            width: calc(100% - 20px);
          }

          .hero-meta-item > span:last-child {
            font-size: 5.5px;
          }

          .intro-title h2,
          .services-header h2,
          .why-content h2,
          .process-heading h2,
          .cta-inner h2 {
            font-size: 37px;
          }

          .valuation-card-image {
            height: 250px;
          }

          .why-image-wrap {
            height: 350px;
          }

          .valuation-card-body {
            padding: 22px 19px 24px;
          }

          .valuation-card h3 {
            font-size: 20px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .valuation-page *,
          .valuation-page *::before,
          .valuation-page *::after {
            scroll-behavior: auto !important;
            transition: none !important;
            animation: none !important;
          }

        }

      `}</style>

    </main>
  );
}