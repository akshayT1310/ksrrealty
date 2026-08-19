import React from "react";
import { Link } from "react-router-dom";
import { ksrInfo, whatsappUrl } from "../ksr-info";

/* =========================================================
   IMAGE CONFIG
========================================================= */

const imageBase = "/assets/images/construction";

const fallbackImg =
  "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1600";

/* =========================================================
   DATA
========================================================= */

const expertise = [
  {
    title: "Residential Construction",
    desc: "Custom homes, villas, apartments and housing complexes built to your exact specifications.",
    img: `${imageBase}/villa-modern.jpg`,
    path: "/services/residential",
  },
  {
    title: "Commercial Construction",
    desc: "Office buildings, shops, showrooms and commercial complexes with modern design.",
    img: `${imageBase}/construction-hero.jpg`,
    path: "/services/commercial",
  },
  {
    title: "Interior & Renovation",
    desc: "Transform your existing space with expert renovation and complete interior design.",
    img: `${imageBase}/apartment-interior.jpg`,
    path: "/services/interior",
  },
];

const scope = [
  {
    number: "01",
    title: "Architecture & Design",
    desc: "Concept, drawings, 3D walkthroughs and structural design under one roof.",
  },
  {
    number: "02",
    title: "Permits & Approvals",
    desc: "Municipal approvals, RERA and statutory clearances handled for you.",
  },
  {
    number: "03",
    title: "Civil & Structural",
    desc: "Foundation, RCC, brickwork and finishing with quality-controlled materials.",
  },
  {
    number: "04",
    title: "MEP Services",
    desc: "Electrical, plumbing, HVAC and fire-safety executed by certified teams.",
  },
  {
    number: "05",
    title: "Interior Fit-Out",
    desc: "Modular kitchens, wardrobes, false ceiling, flooring and complete styling.",
  },
  {
    number: "06",
    title: "Handover & Warranty",
    desc: "Snag-free handover with post-construction warranty and support.",
  },
];

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "Discuss your requirements, budget and project timeline.",
  },
  {
    num: "02",
    title: "Planning",
    desc: "Architectural design, BoQ and detailed project planning.",
  },
  {
    num: "03",
    title: "Approval",
    desc: "Permits, RERA and required statutory compliance.",
  },
  {
    num: "04",
    title: "Construction",
    desc: "Quality construction with regular project updates.",
  },
  {
    num: "05",
    title: "Handover",
    desc: "Final inspection and snag-free key handover.",
  },
];

const faqs = [
  {
    q: "What does end-to-end construction mean?",
    a: "We manage the complete construction journey, from initial consultation and architectural planning to construction, finishing and final handover.",
  },
  {
    q: "Do you handle permits and approvals?",
    a: "Yes. We assist with municipal approvals, RERA requirements and other applicable statutory clearances.",
  },
  {
    q: "How do you ensure construction quality?",
    a: "Our process includes regular site inspections, material checks, workmanship monitoring and milestone-based quality reviews.",
  },
  {
    q: "Can you work with my existing architectural plans?",
    a: "Absolutely. We can execute construction based on your existing drawings or provide complete architectural and structural design support.",
  },
  {
    q: "How does the payment schedule work?",
    a: "Payments are structured around project milestones with a transparent schedule discussed before construction begins.",
  },
];

/* =========================================================
   ICONS
========================================================= */

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21h18" />
      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
      <path d="M9 7h2" />
      <path d="M13 7h2" />
      <path d="M9 11h2" />
      <path d="M13 11h2" />
      <path d="M9 15h2" />
      <path d="M13 15h2" />
      <path d="M10 21v-3h4v3" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.5 8.5 0 0 1-12.56 7.48L4 20l1.02-4.22A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M8.8 8.6c.2-.45.4-.47.72-.47h.55c.18 0 .38.06.48.34l.66 1.58c.09.21.05.39-.08.57l-.44.55c-.12.16-.17.29-.04.51.25.43.68.96 1.2 1.4.58.49 1.1.7 1.5.9.22.11.35.09.48-.07l.57-.69c.14-.18.3-.21.5-.13l1.52.72c.21.1.34.16.39.3.05.15.05.84-.35 1.23-.4.4-1.13.54-1.56.46-.42-.08-1.78-.72-2.99-1.76-1.22-1.05-2.05-2.34-2.28-2.7-.22-.35-.86-1.45-.84-2.49 0-.62.24-1.16.49-1.44Z" />
    </svg>
  );
}

/* =========================================================
   COMPONENT
========================================================= */

export default function Services() {
  /* -------------------------------------------------------
     IMAGE FALLBACK
  ------------------------------------------------------- */

  const onImgError = (event) => {
    if (event.currentTarget.src !== fallbackImg) {
      event.currentTarget.src = fallbackImg;
    }
  };

  return (
    <main className="construction-page">
      {/* ===================================================
          HERO
      =================================================== */}

      <section className="construction-hero">
        <div className="construction-hero-media">
          <img
            src={`${imageBase}/construction-hero.jpg`}
            onError={onImgError}
            alt="KSR Realty construction project"
          />

          <div className="construction-hero-overlay" />
          <div className="construction-hero-glow" />
        </div>

        <div className="container-trs construction-hero-inner">
          <div className="construction-hero-content">
            <div className="construction-eyebrow">
              <span />
              KSR Realty Ventures
            </div>

            <h1>
              End-to-End
              <span> Construction</span>
            </h1>

            <p className="construction-hero-description">
              From the first blueprint to the final key handover — design,
              build and finish with one trusted team under one roof.
            </p>

            <div className="construction-hero-actions">
              <Link to="/contact" className="construction-btn construction-btn-gold">
                Get Free Quote
                <ArrowIcon />
              </Link>

              <a
                href="#construction-scope"
                className="construction-btn construction-btn-outline"
              >
                Explore Our Scope
              </a>
            </div>

            <div className="construction-hero-points">
              <div>
                <CheckIcon />
                <span>Transparent Process</span>
              </div>

              <div>
                <CheckIcon />
                <span>Quality Construction</span>
              </div>

              <div>
                <CheckIcon />
                <span>End-to-End Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="construction-scroll">
          <span>Scroll to explore</span>
          <div className="construction-scroll-line" />
        </div>
      </section>

      {/* ===================================================
          INTRO
      =================================================== */}

      <section className="construction-intro">
        <div className="container-trs">
          <div className="construction-intro-grid">
            <div>
              <div className="construction-section-label">
                <span />
                BUILT WITH PURPOSE
              </div>

              <h2>
                More than construction.
                <br />
                <em>It's your vision, built right.</em>
              </h2>
            </div>

            <div className="construction-intro-text">
              <p>
                At KSR Realty Ventures, we bring design, engineering,
                construction and finishing together to create spaces that
                are built for quality, comfort and long-term value.
              </p>

              <p>
                Whether you are building your dream home, developing a
                commercial property or transforming an existing space, our
                team manages every stage with complete transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          EXPERTISE
      =================================================== */}

      <section className="construction-section construction-section-light">
        <div className="container-trs">
          <div className="construction-section-heading">
            <div>
              <div className="construction-section-label">
                <span />
                OUR EXPERTISE
              </div>

              <h2>
                What We <em>Build</em>
              </h2>
            </div>

            <p>
              Complete construction solutions designed around your
              requirements, property and budget.
            </p>
          </div>

          <div className="construction-expertise-grid">
            {expertise.map((item) => (
              <Link
                to={item.path}
                className="construction-expertise-card"
                key={item.title}
              >
                <div className="construction-card-image">
                  <img
                    src={item.img}
                    onError={onImgError}
                    alt={item.title}
                    loading="lazy"
                  />

                  <div className="construction-card-image-overlay" />

                  <div className="construction-card-arrow">
                    <ArrowIcon />
                  </div>
                </div>

                <div className="construction-card-body">
                  <div className="construction-card-small">
                    KSR CONSTRUCTION
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>

                  <span className="construction-card-link">
                    Explore service
                    <ArrowIcon />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          SCOPE
      =================================================== */}

      <section
        id="construction-scope"
        className="construction-section construction-scope-section"
      >
        <div className="container-trs">
          <div className="construction-section-heading construction-heading-center">
            <div>
              <div className="construction-section-label">
                <span />
                COMPLETE SCOPE
              </div>

              <h2>
                One Team.
                <br />
                <em>Every Stage.</em>
              </h2>
            </div>

            <p>
              From planning and approvals to construction and final
              finishing, everything is coordinated through one accountable
              team.
            </p>
          </div>

          <div className="construction-scope-grid">
            {scope.map((item) => (
              <div className="construction-scope-card" key={item.number}>
                <div className="construction-scope-number">
                  {item.number}
                </div>

                <div className="construction-scope-icon">
                  <BuildingIcon />
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          PROCESS
      =================================================== */}

      <section className="construction-section construction-process-section">
        <div className="container-trs">
          <div className="construction-section-heading construction-heading-center">
            <div>
              <div className="construction-section-label">
                <span />
                OUR PROCESS
              </div>

              <h2>
                How We <em>Deliver</em>
              </h2>
            </div>

            <p>
              A simple, transparent and structured process from the first
              conversation to the final handover.
            </p>
          </div>

          <div className="construction-process">
            <div className="construction-process-line" />

            {steps.map((step) => (
              <div className="construction-process-item" key={step.num}>
                <div className="construction-process-number">
                  {step.num}
                </div>

                <h3>{step.title}</h3>

                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          WHY KSR
      =================================================== */}

      <section className="construction-why">
        <div className="container-trs">
          <div className="construction-why-grid">
            <div className="construction-why-image">
              <img
                src={`${imageBase}/villa-modern.jpg`}
                onError={onImgError}
                alt="Luxury KSR Realty construction"
                loading="lazy"
              />

              <div className="construction-why-image-overlay" />

              <div className="construction-why-badge">
                <strong>01</strong>
                <span>Trusted Construction Partner</span>
              </div>
            </div>

            <div className="construction-why-content">
              <div className="construction-section-label">
                <span />
                WHY KSR REALTY
              </div>

              <h2>
                Built on
                <br />
                <em>Trust & Detail.</em>
              </h2>

              <p className="construction-why-lead">
                We believe great construction is not just about concrete
                and steel. It is about communication, accountability and
                attention to every detail.
              </p>

              <div className="construction-benefits">
                <div className="construction-benefit">
                  <div className="construction-benefit-icon">
                    <CheckIcon />
                  </div>

                  <div>
                    <h3>Transparent Communication</h3>
                    <p>
                      Clear project updates, timelines and milestone
                      communication throughout construction.
                    </p>
                  </div>
                </div>

                <div className="construction-benefit">
                  <div className="construction-benefit-icon">
                    <CheckIcon />
                  </div>

                  <div>
                    <h3>Quality-First Approach</h3>
                    <p>
                      Carefully selected materials and regular quality
                      checks at every important stage.
                    </p>
                  </div>
                </div>

                <div className="construction-benefit">
                  <div className="construction-benefit-icon">
                    <CheckIcon />
                  </div>

                  <div>
                    <h3>One Accountable Team</h3>
                    <p>
                      Design, approvals, construction and finishing managed
                      through one coordinated team.
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="construction-text-link">
                Discuss your project
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          FAQ
      =================================================== */}

      <section className="construction-section construction-faq-section">
        <div className="container-trs">
          <div className="construction-faq-layout">
            <div className="construction-faq-heading">
              <div className="construction-section-label">
                <span />
                QUESTIONS
              </div>

              <h2>
                Construction
                <br />
                <em>FAQs</em>
              </h2>

              <p>
                Have questions about our construction process? Here are
                some of the most common questions we receive.
              </p>

              <Link
                to="/contact"
                className="construction-text-link"
              >
                Talk to our team
                <ArrowIcon />
              </Link>
            </div>

            <div className="construction-faq-list">
              {faqs.map((faq, index) => (
                <details
                  className="construction-faq-item"
                  key={faq.q}
                  open={index === 0}
                >
                  <summary>
                    <span>{faq.q}</span>

                    <span className="construction-faq-plus">
                      +
                    </span>
                  </summary>

                  <div className="construction-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          CTA
      =================================================== */}

      <section className="construction-final-cta">
        <img
          src={`${imageBase}/construction-hero.jpg`}
          onError={onImgError}
          alt=""
          aria-hidden="true"
        />

        <div className="construction-final-overlay" />

        <div className="container-trs construction-final-inner">
          <div className="construction-section-label construction-label-light">
            <span />
            START YOUR PROJECT
          </div>

          <h2>
            Ready to build with
            <br />
            <em>one accountable team?</em>
          </h2>

          <p>
            Let's discuss your project, requirements and construction
            goals.
          </p>

          <div className="construction-final-actions">
            <Link
              to="/contact"
              className="construction-btn construction-btn-gold"
            >
              Get Free Quote
              <ArrowIcon />
            </Link>

            <a
              href={whatsappUrl(
                "Hello KSR Realty, I want a construction quote."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="construction-btn construction-btn-whatsapp"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </div>

          <div className="construction-final-contact">
            <span>{ksrInfo.phone}</span>
            <span>•</span>
            <span>{ksrInfo.email}</span>
          </div>
        </div>
      </section>

      {/* ===================================================
          PAGE CSS
      =================================================== */}

      <style>{`
        /* =====================================================
           PAGE BASE
        ===================================================== */

        .construction-page {
          --construction-gold: #b9974e;
          --construction-gold-light: #d8bd78;
          --construction-navy: #07111e;
          --construction-navy-2: #0b1a2d;
          --construction-paper: #f8f5ee;
          --construction-white: #ffffff;
          --construction-text: #101828;
          --construction-muted: #687386;
          --construction-border: #e9e4da;

          min-height: 100vh;
          background: var(--construction-paper);
          color: var(--construction-text);
          overflow-x: hidden;
        }

        .construction-page *,
        .construction-page *::before,
        .construction-page *::after {
          box-sizing: border-box;
        }

        .construction-page a {
          -webkit-tap-highlight-color: transparent;
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .construction-page .container-trs {
          width: min(1180px, calc(100% - 40px));
          margin-left: auto;
          margin-right: auto;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .construction-hero {
          position: relative;
          min-height: max(620px, 92svh);
          display: flex;
          align-items: center;
          overflow: hidden;
          background: var(--construction-navy);
          color: #fff;
        }

        .construction-hero-media {
          position: absolute;
          inset: 0;
        }

        .construction-hero-media img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0.55;
          transform: scale(1.02);
        }

        .construction-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(5, 13, 23, 0.96) 0%,
              rgba(7, 17, 30, 0.84) 40%,
              rgba(7, 17, 30, 0.48) 72%,
              rgba(7, 17, 30, 0.58) 100%
            );
        }

        .construction-hero-glow {
          position: absolute;
          width: 650px;
          height: 650px;
          right: -180px;
          bottom: -300px;
          border-radius: 50%;
          background: rgba(185, 151, 78, 0.12);
          filter: blur(80px);
          pointer-events: none;
        }

        .construction-hero-inner {
          position: relative;
          z-index: 2;
          padding-top: 105px;
          padding-bottom: 75px;
        }

        .construction-hero-content {
          max-width: 780px;
        }

        .construction-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          color: var(--construction-gold-light);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .construction-eyebrow > span {
          display: block;
          width: 34px;
          height: 1px;
          background: var(--construction-gold);
        }

        .construction-hero h1 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(3.3rem, 7vw, 6.8rem);
          line-height: 0.94;
          letter-spacing: -0.045em;
          font-weight: 500;
          color: #fff;
        }

        .construction-hero h1 span {
          display: block;
          color: var(--construction-gold-light);
          font-style: italic;
          font-weight: 400;
        }

        .construction-hero-description {
          max-width: 650px;
          margin: 28px 0 0;
          color: rgba(255, 255, 255, 0.72);
          font-size: clamp(0.95rem, 1.5vw, 1.12rem);
          line-height: 1.8;
        }

        .construction-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }

        .construction-btn {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 12px 22px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease;
        }

        .construction-btn:hover {
          transform: translateY(-2px);
        }

        .construction-btn-gold {
          background: var(--construction-gold);
          color: #07111e;
          box-shadow: 0 12px 30px rgba(185, 151, 78, 0.18);
        }

        .construction-btn-gold:hover {
          background: var(--construction-gold-light);
          box-shadow: 0 16px 38px rgba(185, 151, 78, 0.28);
        }

        .construction-btn-outline {
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: rgba(255, 255, 255, 0.06);
          color: #fff;
          backdrop-filter: blur(10px);
        }

        .construction-btn-outline:hover {
          border-color: rgba(201, 162, 75, 0.55);
          background: rgba(201, 162, 75, 0.1);
        }

        .construction-hero-points {
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
          margin-top: 32px;
        }

        .construction-hero-points > div {
          display: flex;
          align-items: center;
          gap: 7px;
          color: rgba(255, 255, 255, 0.62);
          font-size: 11px;
          font-weight: 600;
        }

        .construction-hero-points svg {
          color: var(--construction-gold);
        }

        .construction-scroll {
          position: absolute;
          z-index: 3;
          right: 34px;
          bottom: 35px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.45);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          writing-mode: vertical-rl;
        }

        .construction-scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(
            to bottom,
            var(--construction-gold),
            transparent
          );
        }

        /* =====================================================
           INTRO
        ===================================================== */

        .construction-intro {
          padding: 105px 0;
          background: #fff;
          border-bottom: 1px solid var(--construction-border);
        }

        .construction-intro-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 80px;
          align-items: center;
        }

        .construction-section-label {
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--construction-gold);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .construction-section-label > span {
          width: 28px;
          height: 1px;
          background: currentColor;
        }

        .construction-intro h2 {
          margin: 18px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.3rem, 4.4vw, 4.2rem);
          line-height: 1.02;
          letter-spacing: -0.04em;
          font-weight: 500;
          color: var(--construction-text);
        }

        .construction-intro h2 em {
          color: var(--construction-gold);
          font-weight: 400;
        }

        .construction-intro-text {
          border-left: 1px solid #ddd6c8;
          padding-left: 35px;
        }

        .construction-intro-text p {
          margin: 0 0 18px;
          color: var(--construction-muted);
          font-size: 15px;
          line-height: 1.85;
        }

        .construction-intro-text p:last-child {
          margin-bottom: 0;
        }

        /* =====================================================
           COMMON SECTION
        ===================================================== */

        .construction-section {
          padding: 105px 0;
        }

        .construction-section-light {
          background: #f8f6f1;
        }

        .construction-section-heading {
          display: grid;
          grid-template-columns: 1fr 0.75fr;
          gap: 60px;
          align-items: end;
          margin-bottom: 48px;
        }

        .construction-section-heading h2 {
          margin: 16px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.4rem, 4.8vw, 4rem);
          line-height: 0.98;
          letter-spacing: -0.045em;
          font-weight: 500;
          color: var(--construction-text);
        }

        .construction-section-heading h2 em {
          color: var(--construction-gold);
          font-weight: 400;
        }

        .construction-section-heading > p {
          margin: 0;
          color: var(--construction-muted);
          font-size: 14px;
          line-height: 1.75;
          max-width: 420px;
        }

        .construction-heading-center {
          grid-template-columns: 1fr 0.8fr;
        }

        /* =====================================================
           EXPERTISE
        ===================================================== */

        .construction-expertise-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .construction-expertise-card {
          display: block;
          overflow: hidden;
          background: #fff;
          border: 1px solid var(--construction-border);
          border-radius: 18px;
          color: inherit;
          text-decoration: none;
          box-shadow: 0 8px 28px rgba(20, 28, 40, 0.035);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .construction-expertise-card:hover {
          transform: translateY(-7px);
          border-color: rgba(185, 151, 78, 0.42);
          box-shadow: 0 22px 48px rgba(20, 28, 40, 0.1);
        }

        .construction-card-image {
          position: relative;
          display: block;
          aspect-ratio: 1.35 / 1;
          overflow: hidden;
          background: #e8e5df;
        }

        .construction-card-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .construction-expertise-card:hover
          .construction-card-image
          img {
          transform: scale(1.055);
        }

        .construction-card-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(5, 13, 23, 0.45),
            transparent 60%
          );
          pointer-events: none;
        }

        .construction-card-arrow {
          position: absolute;
          right: 16px;
          bottom: 16px;
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          background: rgba(7, 17, 30, 0.5);
          color: #fff;
          backdrop-filter: blur(8px);
          transform: translateY(4px);
          opacity: 0.85;
          transition:
            transform 0.25s ease,
            background 0.25s ease;
        }

        .construction-expertise-card:hover
          .construction-card-arrow {
          transform: translateY(0);
          background: var(--construction-gold);
          color: #07111e;
        }

        .construction-card-body {
          padding: 24px 23px 25px;
        }

        .construction-card-small {
          margin-bottom: 8px;
          color: var(--construction-gold);
          font-size: 8px;
          font-weight: 850;
          letter-spacing: 0.18em;
        }

        .construction-card-body h3 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 22px;
          line-height: 1.1;
          font-weight: 500;
          color: var(--construction-text);
        }

        .construction-card-desc {
          margin: 11px 0 0;
        }

        .construction-card-body p {
          margin: 11px 0 18px;
          color: var(--construction-muted);
          font-size: 13px;
          line-height: 1.65;
        }

        .construction-card-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--construction-text);
          font-size: 11px;
          font-weight: 800;
        }

        .construction-card-link svg {
          color: var(--construction-gold);
          transition: transform 0.2s ease;
        }

        .construction-expertise-card:hover
          .construction-card-link
          svg {
          transform: translateX(4px);
        }

        /* =====================================================
           SCOPE
        ===================================================== */

        .construction-scope-section {
          background: #fff;
        }

        .construction-scope-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .construction-scope-card {
          position: relative;
          min-height: 220px;
          padding: 27px;
          overflow: hidden;
          border: 1px solid var(--construction-border);
          border-radius: 16px;
          background:
            linear-gradient(
              145deg,
              #fff,
              #fbfaf7
            );
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .construction-scope-card::after {
          content: "";
          position: absolute;
          width: 100px;
          height: 100px;
          right: -50px;
          bottom: -50px;
          border-radius: 50%;
          background: rgba(185, 151, 78, 0.08);
          transition: transform 0.3s ease;
        }

        .construction-scope-card:hover {
          transform: translateY(-4px);
          border-color: rgba(185, 151, 78, 0.4);
          box-shadow: 0 16px 35px rgba(20, 28, 40, 0.07);
        }

        .construction-scope-card:hover::after {
          transform: scale(1.8);
        }

        .construction-scope-number {
          color: rgba(185, 151, 78, 0.65);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 13px;
          font-weight: 600;
        }

        .construction-scope-icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          margin: 25px 0 17px;
          border: 1px solid rgba(185, 151, 78, 0.25);
          border-radius: 11px;
          background: rgba(185, 151, 78, 0.06);
          color: var(--construction-gold);
        }

        .construction-scope-card h3 {
          position: relative;
          z-index: 2;
          margin: 0 0 7px;
          font-size: 15px;
          font-weight: 800;
          color: var(--construction-text);
        }

        .construction-scope-card p {
          position: relative;
          z-index: 2;
          margin: 0;
          color: var(--construction-muted);
          font-size: 12px;
          line-height: 1.65;
        }

        /* =====================================================
           PROCESS
        ===================================================== */

        .construction-process-section {
          background: #f7f4ee;
        }

        .construction-process {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          padding-top: 4px;
        }

        .construction-process-line {
          position: absolute;
          top: 28px;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(185, 151, 78, 0.45),
            transparent
          );
        }

        .construction-process-item {
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .construction-process-number {
          width: 56px;
          height: 56px;
          display: grid;
          place-items: center;
          margin: 0 auto 20px;
          border: 1px solid rgba(185, 151, 78, 0.45);
          border-radius: 50%;
          background: #f7f4ee;
          color: var(--construction-gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 16px;
          font-weight: 600;
        }

        .construction-process-item h3 {
          margin: 0 0 7px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 19px;
          font-weight: 500;
          color: var(--construction-text);
        }

        .construction-process-item p {
          max-width: 180px;
          margin: 0 auto;
          color: var(--construction-muted);
          font-size: 11px;
          line-height: 1.6;
        }

        /* =====================================================
           WHY KSR
        ===================================================== */

        .construction-why {
          padding: 110px 0;
          background: #fff;
        }

        .construction-why-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 90px;
          align-items: center;
        }

        .construction-why-image {
          position: relative;
          min-height: 560px;
          overflow: hidden;
          border-radius: 20px;
          background: var(--construction-navy);
        }

        .construction-why-image img {
          width: 100%;
          height: 100%;
          min-height: 560px;
          display: block;
          object-fit: cover;
        }

        .construction-why-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(7, 17, 30, 0.75),
            rgba(7, 17, 30, 0.03) 65%
          );
        }

        .construction-why-badge {
          position: absolute;
          left: 25px;
          right: 25px;
          bottom: 25px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 15px 18px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 12px;
          background: rgba(7, 17, 30, 0.55);
          color: #fff;
          backdrop-filter: blur(12px);
        }

        .construction-why-badge strong {
          color: var(--construction-gold-light);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 24px;
          font-weight: 400;
        }

        .construction-why-badge span {
          color: rgba(255, 255, 255, 0.72);
          font-size: 11px;
          font-weight: 700;
        }

        .construction-why-content h2 {
          margin: 17px 0 20px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.5rem, 4.5vw, 4rem);
          line-height: 0.98;
          letter-spacing: -0.04em;
          font-weight: 500;
        }

        .construction-why-content h2 em {
          color: var(--construction-gold);
          font-weight: 400;
        }

        .construction-why-lead {
          max-width: 540px;
          margin: 0;
          color: var(--construction-muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .construction-benefits {
          display: grid;
          gap: 20px;
          margin-top: 34px;
        }

        .construction-benefit {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 14px;
          align-items: start;
        }

        .construction-benefit-icon {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: rgba(185, 151, 78, 0.08);
          color: var(--construction-gold);
        }

        .construction-benefit h3 {
          margin: 0 0 4px;
          font-size: 13px;
          font-weight: 800;
        }

        .construction-benefit p {
          margin: 0;
          color: var(--construction-muted);
          font-size: 12px;
          line-height: 1.6;
        }

        .construction-text-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 32px;
          color: var(--construction-text);
          font-size: 12px;
          font-weight: 850;
          text-decoration: none;
          border-bottom: 1px solid rgba(185, 151, 78, 0.4);
          padding-bottom: 5px;
        }

        .construction-text-link svg {
          color: var(--construction-gold);
          transition: transform 0.2s ease;
        }

        .construction-text-link:hover svg {
          transform: translateX(4px);
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .construction-faq-section {
          background: #f8f6f1;
        }

        .construction-faq-layout {
          display: grid;
          grid-template-columns: 0.75fr 1.25fr;
          gap: 90px;
          align-items: start;
        }

        .construction-faq-heading h2 {
          margin: 17px 0 20px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.5rem, 4.5vw, 4rem);
          line-height: 0.98;
          letter-spacing: -0.04em;
          font-weight: 500;
        }

        .construction-faq-heading h2 em {
          color: var(--construction-gold);
          font-weight: 400;
        }

        .construction-faq-heading > p {
          max-width: 390px;
          margin: 0;
          color: var(--construction-muted);
          font-size: 13px;
          line-height: 1.75;
        }

        .construction-faq-list {
          display: grid;
          gap: 10px;
        }

        .construction-faq-item {
          border: 1px solid var(--construction-border);
          border-radius: 13px;
          background: #fff;
          overflow: hidden;
          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .construction-faq-item[open] {
          border-color: rgba(185, 151, 78, 0.38);
          box-shadow: 0 10px 25px rgba(20, 28, 40, 0.04);
        }

        .construction-faq-item summary {
          min-height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 17px 19px;
          color: var(--construction-text);
          font-size: 13px;
          font-weight: 750;
          cursor: pointer;
          list-style: none;
        }

        .construction-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .construction-faq-plus {
          flex: 0 0 auto;
          width: 27px;
          height: 27px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(185, 151, 78, 0.3);
          border-radius: 50%;
          color: var(--construction-gold);
          font-size: 18px;
          font-weight: 400;
          transition: transform 0.2s ease;
        }

        .construction-faq-item[open]
          .construction-faq-plus {
          transform: rotate(45deg);
        }

        .construction-faq-answer {
          padding: 0 19px 19px;
        }

        .construction-faq-answer p {
          margin: 0;
          max-width: 720px;
          color: var(--construction-muted);
          font-size: 12px;
          line-height: 1.7;
        }

        /* =====================================================
           FINAL CTA
        ===================================================== */

        .construction-final-cta {
          position: relative;
          min-height: 500px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: var(--construction-navy);
          color: #fff;
        }

        .construction-final-cta > img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.36;
        }

        .construction-final-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              ellipse at center,
              rgba(7, 17, 30, 0.55),
              rgba(7, 17, 30, 0.95)
            );
        }

        .construction-final-inner {
          position: relative;
          z-index: 2;
          padding: 95px 0;
          text-align: center;
        }

        .construction-label-light {
          justify-content: center;
          color: var(--construction-gold-light);
        }

        .construction-final-inner h2 {
          margin: 20px auto 16px;
          max-width: 760px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.5rem, 5vw, 4.8rem);
          line-height: 0.98;
          letter-spacing: -0.045em;
          font-weight: 500;
        }

        .construction-final-inner h2 em {
          color: var(--construction-gold-light);
          font-weight: 400;
        }

        .construction-final-inner > p {
          margin: 0 auto;
          max-width: 500px;
          color: rgba(255, 255, 255, 0.62);
          font-size: 14px;
          line-height: 1.7;
        }

        .construction-final-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 11px;
          margin-top: 29px;
        }

        .construction-btn-whatsapp {
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.07);
          color: #fff;
          backdrop-filter: blur(10px);
        }

        .construction-btn-whatsapp:hover {
          border-color: rgba(255, 255, 255, 0.35);
          background: rgba(255, 255, 255, 0.12);
        }

        .construction-final-contact {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 25px;
          color: rgba(255, 255, 255, 0.45);
          font-size: 11px;
        }

        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1050px) {
          .construction-page .container-trs {
            width: min(100% - 34px, 900px);
          }

          .construction-hero {
            min-height: 680px;
          }

          .construction-intro-grid {
            gap: 50px;
          }

          .construction-section-heading {
            gap: 35px;
          }

          .construction-expertise-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .construction-expertise-card:last-child {
            grid-column: 1 / -1;
            max-width: calc(50% - 11px);
          }

          .construction-scope-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .construction-process {
            grid-template-columns: repeat(3, 1fr);
            row-gap: 45px;
          }

          .construction-process-line {
            display: none;
          }

          .construction-why-grid {
            gap: 50px;
          }

          .construction-faq-layout {
            gap: 50px;
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 800px) {
          .construction-page .container-trs {
            width: min(100% - 30px, 680px);
          }

          .construction-hero-inner {
            padding-top: 100px;
          }

          .construction-hero h1 {
            font-size: clamp(3rem, 11vw, 5rem);
          }

          .construction-intro {
            padding: 75px 0;
          }

          .construction-intro-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .construction-intro-text {
            padding-left: 20px;
          }

          .construction-section {
            padding: 75px 0;
          }

          .construction-section-heading,
          .construction-heading-center {
            grid-template-columns: 1fr;
            gap: 15px;
            margin-bottom: 35px;
          }

          .construction-section-heading > p {
            max-width: 600px;
          }

          .construction-why {
            padding: 75px 0;
          }

          .construction-why-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .construction-why-image {
            min-height: 450px;
          }

          .construction-why-image img {
            min-height: 450px;
          }

          .construction-faq-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .construction-faq-heading > p {
            max-width: 600px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {
          .construction-page .container-trs {
            width: calc(100% - 28px);
          }

          .construction-hero {
            min-height: 670px;
          }

          .construction-hero-inner {
            padding-top: 90px;
            padding-bottom: 65px;
          }

          .construction-hero-media img {
            object-position: 58% center;
            opacity: 0.43;
          }

          .construction-hero-overlay {
            background:
              linear-gradient(
                90deg,
                rgba(5, 13, 23, 0.95),
                rgba(7, 17, 30, 0.72)
              );
          }

          .construction-eyebrow {
            font-size: 9px;
            letter-spacing: 0.17em;
          }

          .construction-eyebrow > span {
            width: 24px;
          }

          .construction-hero h1 {
            font-size: clamp(2.9rem, 15vw, 4.4rem);
            line-height: 0.94;
          }

          .construction-hero-description {
            margin-top: 20px;
            font-size: 14px;
            line-height: 1.7;
          }

          .construction-hero-actions {
            display: grid;
            grid-template-columns: 1fr;
            gap: 9px;
            margin-top: 25px;
          }

          .construction-btn {
            width: 100%;
            min-height: 47px;
          }

          .construction-hero-points {
            display: grid;
            gap: 10px;
            margin-top: 25px;
          }

          .construction-scroll {
            display: none;
          }

          .construction-intro {
            padding: 60px 0;
          }

          .construction-intro h2 {
            font-size: 2.35rem;
            line-height: 1.04;
          }

          .construction-intro-text {
            padding-left: 16px;
          }

          .construction-intro-text p {
            font-size: 13px;
            line-height: 1.75;
          }

          .construction-section {
            padding: 60px 0;
          }

          .construction-section-heading h2 {
            font-size: 2.45rem;
          }

          .construction-section-heading > p {
            font-size: 12px;
          }

          .construction-expertise-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .construction-expertise-card:last-child {
            grid-column: auto;
            max-width: none;
          }

          .construction-card-image {
            aspect-ratio: 1.35 / 1;
          }

          .construction-card-body {
            padding: 20px;
          }

          .construction-card-body h3 {
            font-size: 20px;
          }

          .construction-scope-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .construction-scope-card {
            min-height: auto;
            padding: 22px;
          }

          .construction-scope-icon {
            margin-top: 20px;
          }

          .construction-process {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .construction-process-item {
            text-align: left;
            display: grid;
            grid-template-columns: 52px 1fr;
            column-gap: 15px;
          }

          .construction-process-number {
            width: 48px;
            height: 48px;
            margin: 0;
            grid-row: span 2;
          }

          .construction-process-item h3 {
            margin-top: 2px;
            font-size: 18px;
          }

          .construction-process-item p {
            max-width: none;
            margin: 4px 0 0;
          }

          .construction-why {
            padding: 60px 0;
          }

          .construction-why-image {
            min-height: 390px;
            border-radius: 15px;
          }

          .construction-why-image img {
            min-height: 390px;
          }

          .construction-why-badge {
            left: 14px;
            right: 14px;
            bottom: 14px;
            padding: 12px 14px;
          }

          .construction-why-badge strong {
            font-size: 21px;
          }

          .construction-why-content h2 {
            font-size: 2.5rem;
          }

          .construction-benefit {
            grid-template-columns: 36px 1fr;
            gap: 11px;
          }

          .construction-benefit-icon {
            width: 34px;
            height: 34px;
          }

          .construction-faq-layout {
            gap: 35px;
          }

          .construction-faq-heading h2 {
            font-size: 2.5rem;
          }

          .construction-faq-item summary {
            min-height: 58px;
            padding: 15px;
            font-size: 12px;
          }

          .construction-faq-answer {
            padding: 0 15px 16px;
          }

          .construction-final-cta {
            min-height: 520px;
          }

          .construction-final-inner {
            padding: 75px 0;
          }

          .construction-final-inner h2 {
            font-size: 2.7rem;
          }

          .construction-final-actions {
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
          }

          .construction-final-contact {
            flex-direction: column;
            gap: 5px;
          }

          .construction-final-contact span:nth-child(2) {
            display: none;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 390px) {
          .construction-page .container-trs {
            width: calc(100% - 24px);
          }

          .construction-hero {
            min-height: 640px;
          }

          .construction-hero h1 {
            font-size: 2.8rem;
          }

          .construction-section-heading h2,
          .construction-intro h2 {
            font-size: 2.2rem;
          }

          .construction-why-content h2,
          .construction-faq-heading h2 {
            font-size: 2.25rem;
          }

          .construction-final-inner h2 {
            font-size: 2.35rem;
          }
        }

        /* =====================================================
           TOUCH DEVICES
        ===================================================== */

        @media (hover: none) {
          .construction-btn:hover {
            transform: none;
          }

          .construction-expertise-card:hover {
            transform: none;
          }

          .construction-expertise-card:hover
            .construction-card-image
            img {
            transform: none;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .construction-page *,
          .construction-page *::before,
          .construction-page *::after {
            scroll-behavior: auto !important;
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}