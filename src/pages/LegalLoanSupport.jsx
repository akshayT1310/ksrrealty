import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Property Legal Verification",
    text: "A detailed review of property ownership and essential legal records before you make a purchase decision.",
    items: [
      "Title & ownership verification",
      "Sale deed review",
      "Encumbrance verification",
      "Land record checking",
    ],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=88",
  },
  {
    number: "02",
    title: "Loan Assistance",
    text: "Structured guidance to help you understand financing options and navigate the property loan process.",
    items: [
      "Home loan guidance",
      "Loan eligibility assistance",
      "Document preparation",
      "Application support",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=88",
  },
  {
    number: "03",
    title: "Document Due Diligence",
    text: "Careful examination of important documents to bring clarity to your property transaction.",
    items: [
      "Agreement review",
      "Registry documents",
      "Property papers",
      "Transaction documentation",
    ],
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1400&q=88",
  },
  {
    number: "04",
    title: "Property Due Diligence",
    text: "A structured assessment of property records designed to identify important concerns before you proceed.",
    items: [
      "Ownership checks",
      "Property history",
      "Outstanding liabilities",
      "Risk identification",
    ],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=88",
  },
  {
    number: "05",
    title: "Registration Guidance",
    text: "Professional guidance through documentation, registration and the important steps involved in closing.",
    items: [
      "Registration process",
      "Document checklist",
      "Stamp duty guidance",
      "Registry coordination",
    ],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=88",
  },
  {
    number: "06",
    title: "Transaction Support",
    text: "Coordinated assistance from documentation to closing, helping your property transaction stay organized.",
    items: [
      "Buyer support",
      "Seller support",
      "Documentation coordination",
      "Transaction assistance",
    ],
    image:
      "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=1400&q=88",
  },
];

const process = [
  {
    no: "01",
    title: "Understand",
    text: "We understand your property, documentation, financing and transaction requirements.",
  },
  {
    no: "02",
    title: "Verify",
    text: "Relevant documents and property details are carefully reviewed for greater clarity.",
  },
  {
    no: "03",
    title: "Guide",
    text: "You receive clear, practical guidance on the next steps and available options.",
  },
  {
    no: "04",
    title: "Complete",
    text: "We coordinate the journey so your transaction can move forward with confidence.",
  },
];

const audience = [
  {
    no: "01",
    title: "Home Buyers",
    text: "Make your home purchase with greater documentation and transaction clarity.",
  },
  {
    no: "02",
    title: "Property Investors",
    text: "Evaluate important property details before making an investment decision.",
  },
  {
    no: "03",
    title: "Land & Plot Buyers",
    text: "Receive support with documentation and due diligence for land transactions.",
  },
  {
    no: "04",
    title: "Commercial Clients",
    text: "Navigate documentation and financing requirements for commercial properties.",
  },
];

export default function LegalLoanSupport() {
  return (
    <main className="ksr-legal-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="legal-hero">

        <div className="legal-hero-image" />
        <div className="legal-hero-overlay" />
        <div className="legal-hero-grid" />

        <div className="container-trs legal-hero-content">

          <div className="legal-kicker">
            <span />
            LEGAL & LOAN SUPPORT
            <span />
          </div>

          <div className="legal-hero-layout">

            <div className="hero-main-content">

              <p className="legal-overline">
                PROPERTY CONFIDENCE, BUILT ON CLARITY
              </p>

              <h1>
                Confidence Behind
                <br />
                <em>Every Property Decision.</em>
              </h1>

              <p className="legal-hero-description">
                From legal verification and documentation to financing
                guidance, KSR Realty brings the critical parts of your
                property journey together with care, clarity and
                professional support.
              </p>

              <div className="legal-hero-actions">

                <Link to="/contact" className="legal-gold-btn">
                  <span>Get Expert Assistance</span>
                  <b>↗</b>
                </Link>

                <a href="#legal-services" className="legal-text-btn">
                  <span>Explore Services</span>
                  <b>↓</b>
                </a>

              </div>

            </div>

            <div className="legal-hero-side">

              <div className="hero-side-card">

                <div className="hero-card-top">
                  <span>KSR REALTY</span>
                  <i></i>
                </div>

                <div className="hero-card-number">
                  360<span>°</span>
                </div>

                <p>
                  Complete Property Support
                  <br />
                  from verification to closure.
                </p>

                <div className="hero-side-line" />

                <div className="hero-side-points">
                  <span>Legal Guidance</span>
                  <span>Loan Assistance</span>
                  <span>Transaction Support</span>
                </div>

              </div>

            </div>

          </div>
        </div>

        <div className="hero-bottom-meta">

          <span>INDORE · MADHYA PRADESH</span>

          <div />

          <span>PROPERTY ADVISORY</span>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="legal-intro">

        <div className="container-trs">

          <div className="legal-intro-grid">

            <div className="intro-index">
              <span></span>
              <div />
              <small>CLARITY</small>
            </div>

            <div className="legal-intro-copy">

              <p className="section-mini-title">
                BEYOND THE PROPERTY
              </p>

              <h2>
                A Property Transaction
                <br />
                deserves <em>More Certainty.</em>
              </h2>

              <div className="intro-columns">

                <p>
                  A property decision is rarely just about the property
                  itself. Ownership records, documentation, financing,
                  registration and transaction details can all influence
                  the confidence behind your decision.
                </p>

                <p>
                  KSR Realty helps bring these important considerations
                  together, giving buyers, investors and property owners
                  a more organized path from initial evaluation to the
                  final transaction.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section id="legal-services" className="legal-services">

        <div className="container-trs">

          <div className="services-heading">

            <div>

              <p className="section-mini-title">
                OUR EXPERTISE
              </p>

              <h2>
                Important details.
                <br />
                <em>Handled with care.</em>
              </h2>

            </div>

            <div className="services-heading-right">

              <p>
                Professional assistance across the legal,
                documentation, financing and transaction stages
                of your property journey.
              </p>

              <div className="heading-line">
                <span />
              </div>

            </div>

          </div>


          <div className="legal-service-grid">

            {services.map((service) => (

              <article
                className="legal-service-card"
                key={service.number}
              >

                <div className="service-image">

                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                  />

                  <div className="service-image-overlay" />

                  <div className="service-number">
                    {service.number}
                  </div>

                  <div className="service-image-label">
                    KSR REALTY
                  </div>

                </div>


                <div className="service-content">

                  <div className="service-title-row">

                    <h3>
                      {service.title}
                    </h3>

                    <span className="service-arrow">
                      ↗
                    </span>

                  </div>

                  <p className="service-description">
                    {service.text}
                  </p>

                  <ul>

                    {service.items.map((item) => (

                      <li key={item}>
                        <span className="check">
                          ✓
                        </span>

                        {item}
                      </li>

                    ))}

                  </ul>

                  <Link to="/contact" className="service-link">
                    <span>Discuss Your Requirement</span>
                    <b>→</b>
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURE
      ===================================================== */}

      <section className="legal-feature">

        <div className="feature-image" />
        <div className="feature-overlay" />

        <div className="feature-glow" />

        <div className="container-trs feature-inner">

          <div className="feature-copy">

            <p className="section-mini-title light">
              SMARTER PROPERTY JOURNEY
            </p>

            <h2>
              Don't just find
              <br />
              a property.
              <br />
              <em>Know what you're buying.</em>
            </h2>

            <p className="feature-description">
              Before you commit, understand the important legal,
              documentation and financing aspects that sit behind
              the transaction.
            </p>

            <Link to="/contact" className="legal-gold-btn">
              <span>Talk To Our Team</span>
              <b>↗</b>
            </Link>

          </div>


          <div className="confidence-card">

            <div className="confidence-top">

              <div>
                <span>PROPERTY CONFIDENCE</span>
                <small>KSR REALTY VENTURES</small>
              </div>

              <strong>
                360<span>°</span>
              </strong>

            </div>

            <div className="confidence-divider" />

            <div className="confidence-list">

              <div>
                <span>01</span>
                <p>Document Review</p>
                <b>↗</b>
              </div>

              <div>
                <span>02</span>
                <p>Legal Verification</p>
                <b>↗</b>
              </div>

              <div>
                <span>03</span>
                <p>Loan Guidance</p>
                <b>↗</b>
              </div>

              <div>
                <span>04</span>
                <p>Transaction Support</p>
                <b>↗</b>
              </div>

            </div>

            <div className="confidence-bottom">
              <span>PROPERTY SUPPORT</span>
              <i>EST. 2024</i>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="legal-process">

        <div className="container-trs">

          <div className="process-heading">

            <p className="section-mini-title">
              OUR PROCESS
            </p>

            <h2>
              Simple process.
              <br />
              <em>Professional support.</em>
            </h2>

            <p className="process-intro">
              A clear, structured approach designed to make
              complex property decisions easier to navigate.
            </p>

          </div>


          <div className="process-grid">

            {process.map((item, index) => (

              <div
                className="process-card"
                key={item.no}
              >

                <div className="process-top">

                  <span>{item.no}</span>

                  {index !== process.length - 1 && (
                    <b>↗</b>
                  )}

                </div>

                <div className="process-line">
                  <span />
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
          AUDIENCE
      ===================================================== */}

      <section className="legal-audience">

        <div className="container-trs">

          <div className="audience-grid">

            <div className="audience-heading">

              <p className="section-mini-title">
                WHO WE SUPPORT
              </p>

              <h2>
                Support for
                <br />
                <em>every property goal.</em>
              </h2>

              <p>
                Whether you are buying your first home,
                evaluating an investment or managing a
                commercial transaction, our support is
                designed around your requirement.
              </p>

              <div className="audience-small-mark">
                <span />
                KSR REALTY
              </div>

            </div>


            <div className="audience-list">

              {audience.map((item) => (

                <div key={item.no} className="audience-item">

                  <span className="audience-number">
                    {item.no}
                  </span>

                  <div className="audience-content">

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>

                  </div>

                  <b className="audience-arrow">
                    ↗
                  </b>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="legal-cta">

        <div className="cta-pattern" />
        <div className="cta-circle circle-one" />
        <div className="cta-circle circle-two" />

        <div className="container-trs cta-inner">

          <div className="cta-copy">

            <p className="section-mini-title light">
              KSR REALTY VENTURES
            </p>

            <h2>
              Your property.
              <br />
              <em>Our complete support.</em>
            </h2>

            <p className="cta-description">
              Have a property, loan or documentation
              requirement? Start a conversation with the
              KSR Realty team.
            </p>

          </div>


          <div className="cta-actions">

            <Link to="/contact" className="legal-gold-btn">
              <span>Contact Us</span>
              <b>↗</b>
            </Link>

            <Link to="/property" className="legal-dark-btn">
              Explore Properties
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');


  /* =====================================================
     ROOT
  ===================================================== */

  .ksr-legal-page {

    --ivory: #f7f5ef;
    --paper: #fbfaf7;
    --cream: #eeebe3;
    --white: #ffffff;

    --charcoal: #17212a;
    --charcoal-2: #202b34;

    --text: #303943;
    --muted: #737b83;
    --muted-light: #92979a;

    --gold: #b18a3e;
    --gold-dark: #96722f;
    --gold-light: #d5b66d;
    --gold-soft: #ead8a8;

    --line: #dedbd3;
    --line-dark: rgba(255,255,255,.12);

    width: 100%;
    overflow: hidden;

    background: var(--ivory);
    color: var(--charcoal);

    font-family: "DM Sans", sans-serif;

  }


  .ksr-legal-page *,
  .ksr-legal-page *::before,
  .ksr-legal-page *::after {
    box-sizing: border-box;
  }


  .ksr-legal-page .container-trs {

    width: min(1180px, calc(100% - 48px));

    margin: 0 auto;

  }


  .ksr-legal-page a {

    -webkit-tap-highlight-color: transparent;

  }


  /* =====================================================
     GLOBAL HEADING SYSTEM
     PREMIUM EDITORIAL TYPOGRAPHY
  ===================================================== */

  .ksr-legal-page h1,
  .ksr-legal-page h2,
  .ksr-legal-page h3 {

    font-family:
      "Playfair Display",
      Georgia,
      "Times New Roman",
      serif;

    font-weight: 500;

    text-wrap: balance;

  }


  .legal-intro h2,
  .services-heading h2,
  .process-heading h2,
  .audience-heading h2,
  .feature-copy h2,
  .cta-inner h2 {

    letter-spacing: -0.025em;
    line-height: 1.04;

  }


  .legal-hero h1 em,
  .legal-intro h2 em,
  .services-heading h2 em,
  .process-heading h2 em,
  .audience-heading h2 em,
  .feature-copy h2 em,
  .cta-inner h2 em {

    font-family:
      "Playfair Display",
      Georgia,
      serif;

    font-style: italic;

    font-weight: 400;

    letter-spacing: -0.015em;

  }


  /* =====================================================
     HERO
  ===================================================== */

  .legal-hero {

    position: relative;

    min-height: 780px;

    display: flex;

    align-items: center;

    overflow: hidden;

    background: #101921;

    color: #fff;

  }


  .legal-hero-image {

    position: absolute;

    inset: 0;

    background-image:
      url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2200&q=90");

    background-size: cover;

    background-position: center;

    transform: scale(1.04);

  }


  .legal-hero-overlay {

    position: absolute;

    inset: 0;

    background:
      linear-gradient(
        90deg,
        rgba(10,17,23,.97) 0%,
        rgba(14,22,29,.92) 38%,
        rgba(17,25,32,.70) 68%,
        rgba(14,21,28,.72) 100%
      );

  }


  .legal-hero-grid {

    position: absolute;

    inset: 0;

    opacity: .10;

    background-image:
      linear-gradient(
        rgba(255,255,255,.08) 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        rgba(255,255,255,.08) 1px,
        transparent 1px
      );

    background-size: 80px 80px;

    mask-image:
      linear-gradient(
        to bottom,
        black 0%,
        transparent 82%
      );

  }


  .legal-hero-content {

    position: relative;

    z-index: 2;

    padding: 135px 0 125px;

  }


  .legal-kicker {

    display: flex;

    align-items: center;

    gap: 13px;

    color: var(--gold-light);

    font-size: 9px;

    font-weight: 700;

    letter-spacing: .28em;

  }


  .legal-kicker span {

    display: block;

    width: 38px;

    height: 1px;

    background: var(--gold);

  }


  .legal-kicker span:last-child {

    width: 18px;

  }


  .legal-hero-layout {

    display: grid;

    grid-template-columns:
      minmax(0, 1fr)
      315px;

    gap: 85px;

    align-items: center;

    margin-top: 38px;

  }


  .legal-overline {

    margin: 0 0 20px;
  font-family: var(--font-display);
    color: rgba(255,255,255,.48);

    font-size: 10px;

    font-weight: 600;

    letter-spacing: .18em;

  }


  /* =====================================================
     HERO HEADING
  ===================================================== */

  .legal-hero h1 {

    max-width: 820px;

    margin: 0;

    font-family:
      "Playfair Display",
      Georgia,
      "Times New Roman",
      serif;

    font-size: clamp(52px, 6vw, 82px);

    line-height: 1.02;

    letter-spacing: -0.025em;

    font-weight: 500;

    text-wrap: balance;

  }


  .legal-hero h1 em {

    color: var(--gold-light);

  }


  .legal-hero-description {

    max-width: 610px;

    margin: 31px 0 0;

    color: rgba(255,255,255,.66);

    font-size: 13px;

    line-height: 1.95;

  }


  /* =====================================================
     BUTTONS
  ===================================================== */

  .legal-hero-actions {

    display: flex;

    align-items: center;

    gap: 28px;

    margin-top: 38px;

  }


  .legal-gold-btn {

    min-height: 54px;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 25px;

    padding: 0 24px;

    border-radius: 100px;

    background:
      linear-gradient(
        135deg,
        #c8a458,
        #b48a3e
      );

    color: #171d23;

    text-decoration: none;

    font-size: 10px;

    font-weight: 700;

    letter-spacing: .07em;

    box-shadow:
      0 12px 35px rgba(181,140,62,.18);

    transition:
      transform .3s ease,
      box-shadow .3s ease,
      background .3s ease;

  }


  .legal-gold-btn b {

    width: 28px;

    height: 28px;

    display: grid;

    place-items: center;

    border-radius: 50%;

    background: rgba(255,255,255,.18);

    font-size: 15px;

    font-weight: 400;

  }


  .legal-gold-btn:hover {

    transform: translateY(-3px);

    background:
      linear-gradient(
        135deg,
        #dfc27d,
        #c09a4c
      );

    box-shadow:
      0 18px 42px rgba(181,140,62,.27);

  }


  .legal-text-btn {

    display: inline-flex;

    align-items: center;

    gap: 14px;

    color: rgba(255,255,255,.80);

    text-decoration: none;

    font-size: 10px;

    font-weight: 600;

    letter-spacing: .08em;

    transition: color .25s ease;

  }


  .legal-text-btn b {

    color: var(--gold-light);

    font-size: 17px;

    font-weight: 400;

  }


  .legal-text-btn:hover {

    color: #fff;

  }


  /* =====================================================
     HERO CARD
  ===================================================== */

  .legal-hero-side {

    display: flex;

    justify-content: flex-end;

  }


  .hero-side-card {

    position: relative;

    width: 300px;

    padding: 28px;

    border: 1px solid rgba(213,181,107,.30);

    border-radius: 26px;

    background:
      linear-gradient(
        145deg,
        rgba(25,36,46,.86),
        rgba(11,19,26,.67)
      );

    backdrop-filter: blur(20px);

    box-shadow:
      0 35px 90px rgba(0,0,0,.28);

    overflow: hidden;

  }


  .hero-side-card::after {

    content: "";

    position: absolute;

    width: 130px;

    height: 130px;

    right: -65px;

    top: -65px;

    border-radius: 50%;

    border: 1px solid rgba(214,183,107,.18);

    box-shadow:
      0 0 0 25px rgba(214,183,107,.025),
      0 0 0 50px rgba(214,183,107,.018);

  }


  .hero-card-top {

    display: flex;

    justify-content: space-between;

    align-items: center;

  }


  .hero-card-top span {

    color: var(--gold-light);

    font-size: 8px;

    font-weight: 700;

    letter-spacing: .22em;

  }


  .hero-card-top i {

    color: rgba(255,255,255,.32);

    font-size: 9px;

    font-style: normal;

  }


  .hero-card-number {

    margin-top: 34px;

    font-family:
      "Playfair Display",
      Georgia,
      serif;

    font-size: 74px;

    line-height: .78;

    font-weight: 400;

    color: #fff;

  }


  .hero-card-number span {

    color: var(--gold-light);

    font-size: 40px;

  }


  .hero-side-card p {

    margin: 22px 0 0;

    color: rgba(255,255,255,.55);

    font-size: 11px;

    line-height: 1.75;

  }


  .hero-side-line {

    width: 100%;

    height: 1px;

    margin: 23px 0;

    background: rgba(255,255,255,.10);

  }


  .hero-side-points {

    display: flex;

    flex-direction: column;

    gap: 11px;

  }


  .hero-side-points span {

    color: rgba(255,255,255,.70);

    font-size: 9px;

    letter-spacing: .08em;

    text-transform: uppercase;

  }


  .hero-side-points span::before {

    content: "—";

    margin-right: 9px;

    color: var(--gold);

  }


  .hero-bottom-meta {

    position: absolute;

    z-index: 3;

    left: 50%;

    bottom: 28px;

    transform: translateX(-50%);

    width: min(1180px, calc(100% - 48px));

    display: flex;

    align-items: center;

    gap: 17px;

    color: rgba(255,255,255,.32);

    font-size: 8px;

    letter-spacing: .18em;

  }


  .hero-bottom-meta div {

    flex: 1;

    height: 1px;

    background: rgba(255,255,255,.12);

  }


  /* =====================================================
     INTRO
  ===================================================== */

  .legal-intro {

    padding: 135px 0;

    background: var(--ivory);

  }


  .legal-intro-grid {

    display: grid;

    grid-template-columns: 130px 1fr;

    gap: 85px;

    max-width: 1100px;

    margin: 0 auto;

  }


  .intro-index {

    padding-top: 8px;

    display: flex;

    flex-direction: column;

    align-items: flex-start;

    gap: 13px;

  }


  .intro-index span {

    color: var(--gold);

    font-family:
      "Playfair Display",
      Georgia,
      serif;

    font-size: 28px;

  }


  .intro-index div {

    width: 38px;

    height: 1px;

    background: var(--gold);

  }


  .intro-index small {

    color: #969995;

    font-size: 7px;

    font-weight: 700;

    letter-spacing: .2em;

  }


  .section-mini-title {

    margin: 0 0 18px;

    color: #9a742d;

    font-size: 9px;

    font-weight: 700;

    letter-spacing: .22em;

  }


  .section-mini-title.light {

    color: #d5b66d;

  }


  .legal-intro h2 {

    margin: 0;

    font-family:
      "Playfair Display",
      Georgia,
      serif;

    font-size: clamp(42px, 5vw, 64px);

    line-height: 1.04;

    letter-spacing: -0.025em;

    font-weight: 500;

    text-wrap: balance;

  }


  .legal-intro h2 em {

    color: var(--gold);

  }


  .intro-columns {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 50px;

    max-width: 820px;

    margin-top: 40px;

    padding-top: 29px;

    border-top: 1px solid var(--line);

  }


  .intro-columns p {

    margin: 0;

    color: var(--muted);

    font-size: 12px;

    line-height: 1.95;

  }


  /* =====================================================
     SERVICES
  ===================================================== */

  .legal-services {

    padding: 135px 0;

    background: #fffdf9;

  }


  .services-heading {

    display: grid;

    grid-template-columns: 1fr 370px;

    gap: 80px;

    align-items: end;

    margin-bottom: 60px;

  }


  .services-heading h2 {

    margin: 0;

    font-family:
      "Playfair Display",
      Georgia,
      serif;

    font-size: clamp(44px, 5vw, 67px);

    line-height: 1.02;

    letter-spacing: -0.025em;

    font-weight: 500;

    text-wrap: balance;

  }


  .services-heading h2 em {

    color: var(--gold);

  }


  .services-heading-right p {

    margin: 0;

    color: var(--muted);

    font-size: 12px;

    line-height: 1.9;

  }


  .heading-line {

    width: 100%;

    height: 1px;

    margin-top: 25px;

    background: var(--line);

  }


  .heading-line span {

    display: block;

    width: 55px;

    height: 1px;

    background: var(--gold);

  }


  /* =====================================================
     SERVICE GRID
  ===================================================== */

  .legal-service-grid {

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 22px;

  }


  .legal-service-card {

    position: relative;

    display: flex;

    flex-direction: column;

    min-width: 0;

    overflow: hidden;

    border: 1px solid #e5e1d8;

    border-radius: 25px;

    background: #fff;

    box-shadow:
      0 8px 30px rgba(31,27,19,.025);

    transition:
      transform .4s ease,
      border-color .4s ease,
      box-shadow .4s ease;

  }


  .legal-service-card:hover {

    transform: translateY(-9px);

    border-color: #c9aa69;

    box-shadow:
      0 28px 70px rgba(39,32,20,.10);

  }


  .service-image {

    position: relative;

    height: 245px;

    overflow: hidden;

    background: #ddd;

  }


  .service-image img {

    width: 100%;

    height: 100%;

    display: block;

    object-fit: cover;

    filter: saturate(.68) contrast(.98);

    transition:
      transform .75s cubic-bezier(.2,.7,.2,1),
      filter .5s ease;

  }


  .legal-service-card:hover
  .service-image img {

    transform: scale(1.075);

    filter: saturate(.85);

  }


  .service-image-overlay {

    position: absolute;

    inset: 0;

    background:
      linear-gradient(
        to bottom,
        rgba(12,18,22,.02),
        rgba(12,18,22,.48)
      );

  }


  .service-number {

    position: absolute;

    top: 17px;

    right: 17px;

    width: 38px;

    height: 38px;

    display: grid;

    place-items: center;

    border: 1px solid rgba(255,255,255,.5);

    border-radius: 50%;

    background: rgba(255,255,255,.90);

    color: var(--gold-dark);

    font-size: 9px;

    font-weight: 700;

    backdrop-filter: blur(8px);

  }


  .service-image-label {

    position: absolute;

    left: 20px;

    bottom: 18px;

    color: rgba(255,255,255,.72);

    font-size: 7px;

    font-weight: 700;

    letter-spacing: .22em;

  }


  .service-content {

    display: flex;

    flex-direction: column;

    flex: 1;

    padding: 29px 27px 25px;

  }


  .service-title-row {

    display: flex;

    align-items: flex-start;

    justify-content: space-between;

    gap: 15px;

  }


  .service-title-row h3 {

    margin: 0;

    color: #1b2630;

    font-family:
      "Playfair Display",
      Georgia,
      serif;

    font-size: 22px;

    line-height: 1.18;

    letter-spacing: -0.015em;

    font-weight: 500;

  }


  .service-arrow {

    flex: 0 0 auto;

    width: 31px;

    height: 31px;

    display: grid;

    place-items: center;

    border: 1px solid #e4ded1;

    border-radius: 50%;

    color: var(--gold);

    font-size: 15px;

    transition:
      background .3s ease,
      color .3s ease,
      transform .3s ease;

  }


  .legal-service-card:hover .service-arrow {

    background: var(--gold);

    color: #fff;

    transform: rotate(8deg);

  }


  .service-description {

    min-height: 67px;

    margin: 15px 0 20px;

    color: #777f87;

    font-size: 11px;

    line-height: 1.78;

  }


  .service-content ul {

    display: flex;

    flex-direction: column;

    gap: 10px;

    margin: 0;

    padding: 17px 0;

    list-style: none;

    border-top: 1px solid #ebe8e1;

  }


  .service-content li {

    display: flex;

    align-items: center;

    gap: 9px;

    color: #5e6872;

    font-size: 10px;

  }


  .check {

    width: 17px;

    height: 17px;

    display: grid;

    place-items: center;

    border-radius: 50%;

    background: #f4ead2;

    color: var(--gold-dark);

    font-size: 9px;

    font-weight: 800;

  }


  .service-link {

    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-top: auto;

    padding-top: 16px;

    border-top: 1px solid #ebe8e1;

    color: var(--gold-dark);

    text-decoration: none;

    font-size: 9px;

    font-weight: 700;

    letter-spacing: .06em;

  }


  .service-link b {

    font-size: 16px;

    font-weight: 400;

    transition: transform .25s ease;

  }


  .service-link:hover b {

    transform: translateX(4px);

  }


  /* =====================================================
     FEATURE
  ===================================================== */

  .legal-feature {

    position: relative;

    min-height: 680px;

    display: flex;

    align-items: center;

    overflow: hidden;

    color: #fff;

  }


  .feature-image {

    position: absolute;

    inset: 0;

    background-image:
      url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2200&q=90");

    background-size: cover;

    background-position: center;

    transform: scale(1.02);

  }


  .feature-overlay {

    position: absolute;

    inset: 0;

    background:
      linear-gradient(
        90deg,
        rgba(12,19,25,.97),
        rgba(17,25,31,.91) 45%,
        rgba(17,25,31,.55) 100%
      );

  }


  .feature-glow {

    position: absolute;

    width: 500px;

    height: 500px;

    right: -230px;

    top: 50%;

    transform: translateY(-50%);

    border-radius: 50%;

    border: 1px solid rgba(213,181,107,.13);

    box-shadow:
      0 0 0 75px rgba(213,181,107,.018),
      0 0 0 150px rgba(213,181,107,.012);

  }


  .feature-inner {

    position: relative;

    z-index: 2;

    display: grid;

    grid-template-columns: 1fr 350px;

    gap: 100px;

    align-items: center;

    padding: 110px 0;

  }


  .feature-copy h2 {

    margin: 0 0 26px;

    font-family:
      "Playfair Display",
      Georgia,
      serif;

    font-size: clamp(45px, 5.2vw, 72px);

    line-height: 1.01;

    letter-spacing: -0.025em;

    font-weight: 500;

    text-wrap: balance;

  }


  .feature-copy h2 em {

    color: var(--gold-light);

  }


  .feature-description {

    max-width: 560px;

    margin: 0 0 31px;

    color: rgba(255,255,255,.61);

    font-size: 12px;

    line-height: 1.9;

  }


  /* =====================================================
     CONFIDENCE CARD
  ===================================================== */

  .confidence-card {

    padding: 30px;

    border: 1px solid rgba(213,181,107,.30);

    border-radius: 27px;

    background:
      linear-gradient(
        145deg,
        rgba(22,33,42,.84),
        rgba(10,18,24,.70)
      );

    backdrop-filter: blur(18px);

    box-shadow:
      0 35px 90px rgba(0,0,0,.28);

  }


  .confidence-top {

    display: flex;

    align-items: flex-start;

    justify-content: space-between;

  }


  .confidence-top > div {

    display: flex;

    flex-direction: column;

    gap: 8px;

  }


  .confidence-top span {

    color: var(--gold-light);

    font-size: 8px;

    font-weight: 700;

    letter-spacing: .20em;

  }


  .confidence-top small {

    color: rgba(255,255,255,.28);

    font-size: 7px;

    letter-spacing: .12em;

  }


  .confidence-top strong {

    color: #f0dba3;

    font-family:
      "Playfair Display",
      Georgia,
      serif;

    font-size: 50px;

    line-height: .7;

    font-weight: 400;

  }


  .confidence-top strong span {

    color: var(--gold-light);

    font-size: 28px;

  }


  .confidence-divider {

    height: 1px;

    margin: 27px 0;

    background: rgba(255,255,255,.09);

  }


  .confidence-list {

    display: flex;

    flex-direction: column;

    gap: 0;

  }


  .confidence-list div {

    display: grid;

    grid-template-columns: 25px 1fr 20px;

    align-items: center;

    gap: 10px;

    padding: 14px 0;

    border-bottom: 1px solid rgba(255,255,255,.07);

  }


  .confidence-list div:last-child {

    border-bottom: none;

  }


  .confidence-list span {

    color: var(--gold);

    font-size: 8px;

    font-weight: 700;

  }


  .confidence-list p {

    margin: 0;

    color: rgba(255,255,255,.72);

    font-size: 10px;

  }


  .confidence-list b {

    color: var(--gold-light);

    font-size: 13px;

    font-weight: 400;

  }


  .confidence-bottom {

    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-top: 21px;

    padding-top: 18px;

    border-top: 1px solid rgba(255,255,255,.08);

  }


  .confidence-bottom span,
  .confidence-bottom i {

    color: rgba(255,255,255,.27);

    font-size: 7px;

    letter-spacing: .18em;

    font-style: normal;

  }


  /* =====================================================
     PROCESS
  ===================================================== */

  .legal-process {

    padding: 135px 0;

    background: var(--cream);

  }


  .process-heading {

    max-width: 720px;

    margin: 0 auto 70px;

    text-align: center;

  }


  .process-heading h2 {

    margin: 0;

    font-family:
      "Playfair Display",
      Georgia,
      serif;

    font-size: clamp(44px, 5vw, 65px);

    line-height: 1.03;

    letter-spacing: -0.025em;

    font-weight: 500;

    text-wrap: balance;

  }


  .process-heading h2 em {

    color: var(--gold);

  }


  .process-intro {

    max-width: 450px;

    margin: 22px auto 0;

    color: var(--muted);

    font-size: 11px;

    line-height: 1.8;

  }


  .process-grid {

    display: grid;

    grid-template-columns: repeat(4, 1fr);

    border-top: 1px solid #d5d0c6;

    border-bottom: 1px solid #d5d0c6;

  }


  .process-card {

    min-height: 260px;

    padding: 30px;

    border-right: 1px solid #d5d0c6;

    transition: background .3s ease;

  }


  .process-card:first-child {

    border-left: 1px solid #d5d0c6;

  }


  .process-card:hover {

    background: rgba(255,255,255,.25);

  }


  .process-top {

    display: flex;

    align-items: center;

    justify-content: space-between;

  }


  .process-top span {

    color: var(--gold);

    font-family:
      "Playfair Display",
      Georgia,
      serif;

    font-size: 29px;

  }


  .process-top b {

    width: 29px;

    height: 29px;

    display: grid;

    place-items: center;

    border: 1px solid #d3c7ac;

    border-radius: 50%;

    color: var(--gold);

    font-size: 13px;

    font-weight: 400;

  }


  .process-line {

    width: 45px;

    height: 1px;

    margin-top: 25px;

    background: #d0c7b5;

  }


  .process-line span {

    display: block;

    width: 22px;

    height: 1px;

    background: var(--gold);

  }


  .process-card h3 {

    margin: 38px 0 10px;

    font-family:
      "Playfair Display",
      Georgia,
      serif;

    font-size: 23px;

    line-height: 1.18;

    letter-spacing: -0.015em;

    font-weight: 500;

  }


  .process-card p {

    max-width: 220px;

    margin: 0;

    color: #707982;

    font-size: 10px;

    line-height: 1.85;

  }


  /* =====================================================
     AUDIENCE
  ===================================================== */

  .legal-audience {

    padding: 135px 0;

    background: #fffdf9;

  }


  .audience-grid {

    display: grid;

    grid-template-columns: .72fr 1.28fr;

    gap: 100px;

    align-items: start;

  }


  .audience-heading h2 {

    margin: 0;

    font-family:
      "Playfair Display",
      Georgia,
      serif;

    font-size: clamp(44px, 5vw, 65px);

    line-height: 1.03;

    letter-spacing: -0.025em;

    font-weight: 500;

    text-wrap: balance;

  }


  .audience-heading h2 em {

    color: var(--gold);

  }


  .audience-heading > p:not(.section-mini-title) {

    max-width: 360px;

    margin: 30px 0 0;

    color: var(--muted);

    font-size: 11px;

    line-height: 1.9;

  }


  .audience-small-mark {

    display: flex;

    align-items: center;

    gap: 10px;

    margin-top: 42px;

    color: #a3a19b;

    font-size: 7px;

    font-weight: 700;

    letter-spacing: .18em;

  }


  .audience-small-mark span {

    width: 28px;

    height: 1px;

    background: var(--gold);

  }


  .audience-list {

    border-top: 1px solid #ddd9d0;

  }


  .audience-item {

    display: grid;

    grid-template-columns: 45px 1fr 36px;

    gap: 18px;

    align-items: start;

    padding: 28px 0;

    border-bottom: 1px solid #ddd9d0;

    transition:
      padding-left .3s ease,
      background .3s ease;

  }


  .audience-item:hover {

    padding-left: 12px;

  }


  .audience-number {

    color: var(--gold);

    font-size: 9px;

    font-weight: 700;

    letter-spacing: .1em;

  }


  .audience-content h3 {

    margin: 0 0 6px;

    font-family:
      "Playfair Display",
      Georgia,
      serif;

    font-size: 21px;

    line-height: 1.18;

    letter-spacing: -0.015em;

    font-weight: 500;

  }


  .audience-content p {

    max-width: 470px;

    margin: 0;

    color: #747d85;

    font-size: 10px;

    line-height: 1.75;

  }


  .audience-arrow {

    width: 32px;

    height: 32px;

    display: grid;

    place-items: center;

    border: 1px solid #e2ddd3;

    border-radius: 50%;

    color: var(--gold);

    font-size: 14px;

    font-weight: 400;

    transition:
      background .3s ease,
      color .3s ease;

  }


  .audience-item:hover .audience-arrow {

    background: var(--gold);

    color: #fff;

  }


  /* =====================================================
     CTA
  ===================================================== */

  .legal-cta {

    position: relative;

    overflow: hidden;

    padding: 110px 0;

    background: #17212a;

    color: #fff;

  }


  .cta-pattern {

    position: absolute;

    width: 720px;

    height: 720px;

    right: -310px;

    top: -300px;

    border: 1px solid rgba(210,177,102,.13);

    border-radius: 50%;

    box-shadow:
      0 0 0 100px rgba(210,177,102,.025),
      0 0 0 200px rgba(210,177,102,.018);

  }


  .cta-circle {

    position: absolute;

    border: 1px solid rgba(210,177,102,.08);

    border-radius: 50%;

  }


  .circle-one {

    width: 280px;

    height: 280px;

    left: -150px;

    bottom: -170px;

  }


  .circle-two {

    width: 140px;

    height: 140px;

    left: -70px;

    bottom: -70px;

  }


  .cta-inner {

    position: relative;

    z-index: 2;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 70px;

  }


  .cta-inner h2 {

    margin: 0;

    font-family:
      "Playfair Display",
      Georgia,
      serif;

    font-size: clamp(45px, 5vw, 67px);

    line-height: 1.01;

    letter-spacing: -0.025em;

    font-weight: 500;

    text-wrap: balance;

  }


  .cta-inner h2 em {

    color: var(--gold-light);

  }


  .cta-description {

    max-width: 470px;

    margin: 23px 0 0;

    color: rgba(255,255,255,.52);

    font-size: 11px;

    line-height: 1.85;

  }


  .cta-actions {

    display: flex;

    align-items: center;

    gap: 12px;

    flex: 0 0 auto;

  }


  .legal-dark-btn {

    min-height: 54px;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 18px;

    padding: 0 23px;

    border: 1px solid rgba(255,255,255,.18);

    border-radius: 100px;

    color: #fff;

    text-decoration: none;

    font-size: 9px;

    font-weight: 700;

    letter-spacing: .07em;

    transition:
      border-color .25s ease,
      color .25s ease,
      background .25s ease;

  }


  .legal-dark-btn span {

    font-size: 14px;

    font-weight: 400;

  }


  .legal-dark-btn:hover {

    border-color: var(--gold);

    color: var(--gold-light);

    background: rgba(255,255,255,.03);

  }


  /* =====================================================
     LARGE TABLET
  ===================================================== */

  @media (max-width: 1050px) {

    .legal-hero-layout {

      grid-template-columns: 1fr;

    }


    .legal-hero-side {

      display: none;

    }


    .legal-intro-grid {

      grid-template-columns: 90px 1fr;

      gap: 50px;

    }


    .services-heading {

      grid-template-columns: 1fr;

      gap: 25px;

    }


    .legal-service-grid {

      grid-template-columns: repeat(2, 1fr);

    }


    .feature-inner {

      grid-template-columns: 1fr;

      gap: 55px;

    }


    .confidence-card {

      max-width: 420px;

    }


    .audience-grid {

      grid-template-columns: 1fr;

      gap: 65px;

    }


    .cta-inner {

      flex-direction: column;

      align-items: flex-start;

    }

  }


  /* =====================================================
     TABLET
  ===================================================== */

  @media (max-width: 760px) {

    .ksr-legal-page .container-trs {

      width: calc(100% - 32px);

    }


    .legal-hero {

      min-height: 720px;

    }


    .legal-hero-content {

      padding: 110px 0 100px;

    }


    .legal-hero h1 {

      font-size: clamp(46px, 8vw, 58px);

      line-height: 1.02;

      letter-spacing: -0.025em;

    }


    .legal-hero-description {

      font-size: 12px;

    }


    .hero-bottom-meta {

      width: calc(100% - 32px);

    }


    .legal-intro,
    .legal-services,
    .legal-process,
    .legal-audience {

      padding: 90px 0;

    }


    .legal-intro-grid {

      grid-template-columns: 1fr;

      gap: 30px;

    }


    .intro-index {

      flex-direction: row;

      align-items: center;

    }


    .intro-index div {

      width: 30px;

    }


    .legal-intro h2 {

      font-size: clamp(40px, 8vw, 48px);

      line-height: 1.04;

    }


    .intro-columns {

      grid-template-columns: 1fr;

      gap: 20px;

    }


    .legal-service-grid {

      grid-template-columns: 1fr;

      gap: 18px;

    }


    .service-image {

      height: 245px;

    }


    .legal-feature {

      min-height: 720px;

    }


    .feature-inner {

      padding: 90px 0;

    }


    .feature-copy h2 {

      font-size: clamp(42px, 8vw, 52px);

      line-height: 1.02;

    }


    .process-grid {

      grid-template-columns: repeat(2, 1fr);

    }


    .process-card {

      border-bottom: 1px solid #d5d0c6;

    }


    .process-card:nth-child(2n) {

      border-right: none;

    }


    .process-card:nth-child(3) {

      border-left: 1px solid #d5d0c6;

    }


    .cta-actions {

      width: 100%;

      flex-direction: column;

      align-items: stretch;

    }


    .cta-actions a {

      width: 100%;

    }

  }


  /* =====================================================
     MOBILE
  ===================================================== */

  @media (max-width: 560px) {

    .ksr-legal-page .container-trs {

      width: calc(100% - 28px);

    }


    .legal-hero {

      min-height: 700px;

    }


    .legal-hero-content {

      padding: 105px 0 95px;

    }


    .legal-kicker {

      gap: 9px;

      font-size: 7px;

      letter-spacing: .21em;

    }


    .legal-kicker span {

      width: 27px;

    }


    .legal-kicker span:last-child {

      width: 14px;

    }


    .legal-overline {

      font-size: 8px;

      letter-spacing: .14em;

    }


    .legal-hero h1 {

      font-size: clamp(40px, 11vw, 47px);

      line-height: 1.03;

      letter-spacing: -0.02em;

    }


    .legal-hero-description {

      margin-top: 24px;

      font-size: 11px;

      line-height: 1.8;

    }


    .legal-hero-actions {

      align-items: flex-start;

      flex-direction: column;

      gap: 18px;

      margin-top: 30px;

    }


    .legal-gold-btn {

      min-height: 50px;

      padding: 0 19px;

      font-size: 9px;

    }


    .hero-bottom-meta {

      bottom: 20px;

      width: calc(100% - 28px);

      font-size: 6px;

      letter-spacing: .12em;

    }


    .legal-intro,
    .legal-services,
    .legal-process,
    .legal-audience {

      padding: 78px 0;

    }


    .section-mini-title {

      font-size: 8px;

      letter-spacing: .18em;

    }


    .legal-intro h2,
    .services-heading h2,
    .process-heading h2,
    .audience-heading h2 {

      font-size: clamp(35px, 10vw, 43px);

      line-height: 1.05;

      letter-spacing: -0.02em;

    }


    .intro-columns {

      margin-top: 28px;

      padding-top: 22px;

    }


    .intro-columns p {

      font-size: 11px;

    }


    .services-heading {

      margin-bottom: 40px;

    }


    .services-heading-right p {

      font-size: 10px;

    }


    .legal-service-card {

      border-radius: 21px;

    }


    .service-image {

      height: 220px;

    }


    .service-content {

      padding: 25px 21px 22px;

    }


    .service-title-row h3 {

      font-size: 20px;

      line-height: 1.18;

    }


    .service-description {

      min-height: auto;

      font-size: 10px;

    }


    .service-content li {

      font-size: 9px;

    }


    .service-link {

      font-size: 8px;

    }


    .legal-feature {

      min-height: 720px;

    }


    .feature-inner {

      padding: 78px 0;

    }


    .feature-copy h2 {

      font-size: clamp(38px, 10vw, 44px);

      line-height: 1.04;

      letter-spacing: -0.02em;

    }


    .feature-description {

      font-size: 11px;

    }


    .confidence-card {

      padding: 23px;

      border-radius: 22px;

    }


    .confidence-top strong {

      font-size: 43px;

    }


    .confidence-list div {

      padding: 12px 0;

    }


    .process-heading {

      margin-bottom: 45px;

    }


    .process-intro {

      font-size: 10px;

    }


    .process-grid {

      grid-template-columns: 1fr;

    }


    .process-card {

      min-height: 205px;

      padding: 25px;

      border-right: 1px solid #d5d0c6 !important;

      border-left: 1px solid #d5d0c6 !important;

    }


    .process-card:last-child {

      border-bottom: none;

    }


    .process-card h3 {

      margin-top: 28px;

      font-size: 21px;

      line-height: 1.18;

    }


    .audience-grid {

      gap: 48px;

    }


    .audience-item {

      grid-template-columns: 30px 1fr 32px;

      gap: 10px;

      padding: 22px 0;

    }


    .audience-item:hover {

      padding-left: 5px;

    }


    .audience-content h3 {

      font-size: 19px;

      line-height: 1.18;

    }


    .audience-content p {

      font-size: 9px;

    }


    .audience-arrow {

      width: 29px;

      height: 29px;

      font-size: 12px;

    }


    .legal-cta {

      padding: 82px 0;

    }


    .cta-inner h2 {

      font-size: clamp(38px, 10vw, 43px);

      line-height: 1.04;

      letter-spacing: -0.02em;

    }


    .cta-description {

      font-size: 10px;

    }

  }


  /* =====================================================
     SMALL MOBILE
  ===================================================== */

  @media (max-width: 390px) {

    .legal-hero h1 {

      font-size: 37px;

      line-height: 1.04;

    }


    .legal-intro h2,
    .services-heading h2,
    .process-heading h2,
    .audience-heading h2 {

      font-size: 34px;

      line-height: 1.06;

    }


    .feature-copy h2,
    .cta-inner h2 {

      font-size: 36px;

      line-height: 1.05;

    }


    .hero-bottom-meta span:last-child {

      display: none;

    }


    .hero-bottom-meta div {

      display: none;

    }


    .service-image {

      height: 205px;

    }


    .confidence-top strong {

      font-size: 38px;

    }

  }


  /* =====================================================
     ACCESSIBILITY / REDUCED MOTION
  ===================================================== */

  @media (prefers-reduced-motion: reduce) {

    .ksr-legal-page *,
    .ksr-legal-page *::before,
    .ksr-legal-page *::after {

      scroll-behavior: auto !important;

      transition: none !important;

      animation: none !important;

    }

  }

`}</style>

    </main>
  );
}