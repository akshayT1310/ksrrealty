import React, { useState, useEffect, useRef } from "react";
import { ksrInfo, whatsappUrl } from "../ksr-info";

function useCountUp(target, isVisible) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1800;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return count;
}

function About() {
  const statsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const count1 = useCountUp(3000, isVisible);
  const count2 = useCountUp(100, isVisible);
  const count3 = useCountUp(1000, isVisible);
  const count4 = useCountUp(0, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="about-hero-pattern" />
        <div className="about-hero-glow" />

        <div className="container-trs about-hero-inner">

          <div className="about-hero-content">

            <span className="about-eyebrow">
              <i />
              KSR REALTY
            </span>

            <h1>
              About
              <span>KSR Realty</span>
            </h1>

            <p>
              Verified projects, trusted advisory, and a smarter way to
              discover real estate opportunities across Indore.
            </p>

            <div className="about-hero-line">
              <span />
              <b />
              <span />
            </div>

            <div className="about-hero-actions">
              <a
                href={whatsappUrl(
                  "Hello KSR Realty, I want to know more about your services."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="about-primary-btn"
              >
                Talk to an Advisor
                <span>→</span>
              </a>

              <a href="#about-intro" className="about-secondary-btn">
                Discover KSR
              </a>
            </div>

          </div>

          <div className="about-hero-image-column">

            <div className="about-hero-image">

              <img
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury Property"
              />

              <div className="about-image-shade" />

              <div className="about-image-tag">
                <span>01</span>
                <div>
                  <strong>Trusted</strong>
                  <small>Real Estate Advisory</small>
                </div>
              </div>

            </div>

            <div className="about-floating-card">
              <strong>100%</strong>
              <span>Verified Projects</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        className="about-section about-intro-section"
        id="about-intro"
      >

        <div className="container-trs">

          <div className="about-intro-grid">

            <div className="about-heading-block">

              <span className="about-label">
                WHO WE ARE
              </span>

              <h2>
                Real Estate Advisory
                <span> With Clarity.</span>
              </h2>

              <div className="about-heading-line" />

            </div>

            <div className="about-intro-text">

              <p>
                KSR Realty Ventures Pvt. Ltd. helps people buy, sell, rent,
                lease, and invest in Indore real estate with clarity.
              </p>

              <p>
                Our advisory model is built around verified builder projects,
                RERA-checked options, complimentary VIP site visits, and
                zero brokerage support for buyers.
              </p>

              <div className="about-intro-signature">
                <span />
                <strong>KSR Realty Ventures Pvt. Ltd.</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          IMAGE STRIP
      ===================================================== */}

      <section className="about-image-section">

        <div className="container-trs">

          <div className="about-image-grid">

            <div className="about-gallery-card">

              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"
                alt="Luxury Interior"
              />

              <div className="about-gallery-overlay">
                <span>01</span>
                <strong>Premium Living</strong>
              </div>

            </div>

            <div className="about-gallery-card">

              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"
                alt="Construction"
              />

              <div className="about-gallery-overlay">
                <span>02</span>
                <strong>Quality Construction</strong>
              </div>

            </div>

            <div className="about-gallery-card">

              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop"
                alt="Modern Property"
              />

              <div className="about-gallery-overlay">
                <span>03</span>
                <strong>Modern Properties</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section
        className="about-stats-section"
        ref={statsRef}
      >

        <div className="container-trs">

          <div className="about-stats-grid">

            <div className="about-stat-card">
              <span className="about-stat-number">
                01
              </span>

              <strong>
                {count1.toLocaleString()}+
              </strong>

              <span className="about-stat-label">
                Property Options
              </span>
            </div>


            <div className="about-stat-card">
              <span className="about-stat-number">
                02
              </span>

              <strong>
                {count2}+
              </strong>

              <span className="about-stat-label">
                Builder Network
              </span>
            </div>


            <div className="about-stat-card">
              <span className="about-stat-number">
                03
              </span>

              <strong>
                {count3.toLocaleString()}+
              </strong>

              <span className="about-stat-label">
                Client Conversations
              </span>
            </div>


            <div className="about-stat-card">
              <span className="about-stat-number">
                04
              </span>

              <strong>
                {count4}%
              </strong>

              <span className="about-stat-label">
                Brokerage for Buyers
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPERTISE
      ===================================================== */}

      <section className="about-section about-expertise-section">

        <div className="container-trs">

          <div className="about-section-heading">

            <div>

              <span className="about-label">
                OUR EXPERTISE
              </span>

              <h2>
                What KSR Realty
                <span> Does</span>
              </h2>

            </div>

            <p>
              From property discovery to final decision, our team supports
              customers through every important stage.
            </p>

          </div>


          <div className="about-services-grid">

            <div className="about-service-card">
              <span className="service-number">01</span>

              <div className="service-icon">↗</div>

              <h3>Property Advisory</h3>

              <p>
                Discover verified residential and commercial properties
                across prime locations in Indore.
              </p>

              <span className="service-arrow">→</span>
            </div>


            <div className="about-service-card">
              <span className="service-number">02</span>

              <div className="service-icon">⌂</div>

              <h3>Buy & Sell</h3>

              <p>
                Get advisory support for buying, selling, renting,
                and leasing properties.
              </p>

              <span className="service-arrow">→</span>
            </div>


            <div className="about-service-card">
              <span className="service-number">03</span>

              <div className="service-icon">◫</div>

              <h3>VIP Site Visits</h3>

              <p>
                Book complimentary site visits for shortlisted projects
                with our advisory team.
              </p>

              <span className="service-arrow">→</span>
            </div>


            <div className="about-service-card">
              <span className="service-number">04</span>

              <div className="service-icon">✓</div>

              <h3>RERA Verification</h3>

              <p>
                Understand project details, RERA information, builder
                credibility, pricing, and project fit.
              </p>

              <span className="service-arrow">→</span>
            </div>


            <div className="about-service-card">
              <span className="service-number">05</span>

              <div className="service-icon">◇</div>

              <h3>Loan & Legal Support</h3>

              <p>
                Assistance with home loans, documentation, valuation,
                legal guidance, and negotiation.
              </p>

              <span className="service-arrow">→</span>
            </div>


            <div className="about-service-card">
              <span className="service-number">06</span>

              <div className="service-icon">▱</div>

              <h3>Construction & Interiors</h3>

              <p>
                Support for residential construction, commercial
                construction, interiors, and renovation requirements.
              </p>

              <span className="service-arrow">→</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STORY
      ===================================================== */}

      <section className="about-story-section">

        <div className="container-trs">

          <div className="about-story-card">

            <div className="about-story-image">

              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop"
                alt="KSR Realty"
              />

              <div className="about-story-image-overlay" />

              <div className="about-story-image-text">
                <span>OUR APPROACH</span>
                <strong>
                  Making property
                  <br />
                  decisions easier.
                </strong>
              </div>

            </div>


            <div className="about-story-content">

              <span className="about-label">
                OUR APPROACH
              </span>

              <h2>
                Property decisions
                should feel
                <span> simple.</span>
              </h2>

              <p>
                Real estate can be complicated — multiple projects,
                builders, locations, prices, documentation, and financing
                options can make the decision overwhelming.
              </p>

              <p>
                KSR Realty brings these choices together through a
                structured advisory approach, helping customers compare
                opportunities and move forward with greater confidence.
              </p>

              <a
                href={whatsappUrl(
                  "Hello KSR Realty, I want to know more about your services."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="about-gold-btn"
              >
                Talk to an Advisor
                <span>→</span>
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROMISE
      ===================================================== */}

      <section className="about-promise-section">

        <div className="container-trs">

          <div className="about-promise-grid">

            <div className="promise-heading">

              <span className="about-label">
                OUR PROMISE
              </span>

              <h2>
                Verified.
                <br />
                Transparent.
                <br />
                <span>Personal.</span>
              </h2>

            </div>


            <div className="promise-content">

              <div className="promise-line" />

              <p>
                Our goal is simple: make property decisions in Indore
                verified, transparent, and easier for every buyer,
                seller, and investor.
              </p>

              <span className="promise-author">
                KSR Realty Ventures Pvt. Ltd.
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section className="about-contact-section">

        <div className="container-trs">

          <div className="about-contact-card">

            <div className="contact-content">

              <span className="about-label">
                VISIT US
              </span>

              <h2>
                Let's discuss your
                <span> next property.</span>
              </h2>

              <p>
                {ksrInfo.address}
              </p>

              <div className="about-contact-details">

                <a href={ksrInfo.phoneHref}>
                  {ksrInfo.phone}
                </a>

                <a href={ksrInfo.emailHref}>
                  {ksrInfo.email}
                </a>

              </div>

            </div>


            <a
              href={whatsappUrl(
                "Hello KSR Realty, I want to know more about your services."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="about-whatsapp-btn"
            >
              <span>Chat on WhatsApp</span>
              <b>→</b>
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          STYLES
      ===================================================== */}

      <style>{`

        /* =====================================================
           ROOT
        ===================================================== */

        .about-page {
          --about-bg: #f7f7f5;
          --about-white: #ffffff;
          --about-soft: #f0f0ed;
          --about-navy: #0b1b30;
          --about-navy-2: #12243a;
          --about-text: #182434;
          --about-muted: #687282;
          --about-light-muted: #89919d;
          --about-gold: #b9974e;
          --about-gold-dark: #967637;
          --about-border: rgba(11,27,48,0.10);

          min-height: 100vh;
          background: var(--about-bg);
          color: var(--about-text);
        }


        .about-page *,
        .about-page *::before,
        .about-page *::after {
          box-sizing: border-box;
        }


        .about-page img {
          max-width: 100%;
        }


        .container-trs {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .about-hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 80% 20%,
              rgba(185,151,78,0.12),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #ffffff 0%,
              #f7f7f5 65%,
              #efeee9 100%
            );
          border-bottom: 1px solid var(--about-border);
        }


        .about-hero-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.35;
          background-image:
            linear-gradient(
              rgba(11,27,48,0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(11,27,48,0.035) 1px,
              transparent 1px
            );
          background-size: 70px 70px;
          pointer-events: none;
        }


        .about-hero-glow {
          position: absolute;
          top: -220px;
          right: 5%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(185,151,78,0.08);
          filter: blur(80px);
          pointer-events: none;
        }


        .about-hero-inner {
          position: relative;
          z-index: 2;
          min-height: 680px;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          align-items: center;
          gap: 80px;
          padding-top: 100px;
          padding-bottom: 80px;
        }


        .about-hero-content {
          max-width: 610px;
        }


        .about-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--about-gold-dark);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }


        .about-eyebrow i {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--about-gold);
          box-shadow: 0 0 0 5px rgba(185,151,78,0.12);
        }


        .about-hero h1 {
          margin: 22px 0 24px;
          max-width: 650px;
          color: var(--about-navy);
          font-family: var(
            --font-display,
            Georgia,
            serif
          );
          font-size: clamp(3.4rem, 7vw, 6.4rem);
          line-height: 0.92;
          font-weight: 500;
          letter-spacing: -0.055em;
        }


        .about-hero h1 span {
          display: block;
          color: var(--about-gold);
          font-style: italic;
          font-weight: 400;
        }


        .about-hero-content > p {
          max-width: 540px;
          margin: 0;
          color: var(--about-muted);
          font-size: 16px;
          line-height: 1.8;
        }


        .about-hero-line {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-top: 32px;
        }


        .about-hero-line span {
          width: 58px;
          height: 1px;
          background: rgba(185,151,78,0.45);
        }


        .about-hero-line b {
          width: 7px;
          height: 7px;
          transform: rotate(45deg);
          background: var(--about-gold);
        }


        .about-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }


        .about-primary-btn,
        .about-secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          min-height: 50px;
          padding: 13px 23px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.06em;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }


        .about-primary-btn {
          background: var(--about-navy);
          color: white;
          box-shadow: 0 15px 30px rgba(11,27,48,0.15);
        }


        .about-primary-btn span {
          color: var(--about-gold);
          font-size: 18px;
        }


        .about-secondary-btn {
          border: 1px solid rgba(11,27,48,0.13);
          background: rgba(255,255,255,0.7);
          color: var(--about-navy);
        }


        .about-primary-btn:hover,
        .about-secondary-btn:hover {
          transform: translateY(-3px);
        }


        .about-primary-btn:hover {
          box-shadow: 0 20px 40px rgba(11,27,48,0.2);
        }


        /* =====================================================
           HERO IMAGE
        ===================================================== */

        .about-hero-image-column {
          position: relative;
          display: flex;
          justify-content: flex-end;
        }


        .about-hero-image {
          position: relative;
          width: min(100%, 500px);
          aspect-ratio: 0.91;
          overflow: hidden;
          border-radius: 26px;
          background: #ddd;
          box-shadow:
            0 30px 70px rgba(11,27,48,0.16),
            0 0 0 1px rgba(11,27,48,0.08);
        }


        .about-hero-image::before {
          content: "";
          position: absolute;
          z-index: 3;
          inset: 12px;
          border: 1px solid rgba(255,255,255,0.45);
          border-radius: 18px;
          pointer-events: none;
        }


        .about-hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s ease;
        }


        .about-hero-image:hover img {
          transform: scale(1.04);
        }


        .about-image-shade {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              transparent 45%,
              rgba(5,15,26,0.68)
            );
        }


        .about-image-tag {
          position: absolute;
          left: 27px;
          bottom: 27px;
          display: flex;
          align-items: center;
          gap: 13px;
          color: white;
        }


        .about-image-tag > span {
          color: var(--about-gold);
          font-family: Georgia, serif;
          font-size: 32px;
          font-style: italic;
        }


        .about-image-tag div {
          display: flex;
          flex-direction: column;
        }


        .about-image-tag strong {
          font-family: Georgia, serif;
          font-size: 19px;
          font-weight: 500;
        }


        .about-image-tag small {
          margin-top: 3px;
          color: rgba(255,255,255,0.68);
          font-size: 9px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }


        .about-floating-card {
          position: absolute;
          right: -30px;
          bottom: 40px;
          display: flex;
          flex-direction: column;
          min-width: 155px;
          padding: 18px 20px;
          border: 1px solid rgba(185,151,78,0.25);
          border-radius: 16px;
          background: rgba(255,255,255,0.94);
          box-shadow: 0 20px 45px rgba(11,27,48,0.14);
          backdrop-filter: blur(12px);
        }


        .about-floating-card strong {
          color: var(--about-gold-dark);
          font-family: Georgia, serif;
          font-size: 28px;
          font-weight: 500;
        }


        .about-floating-card span {
          margin-top: 4px;
          color: var(--about-muted);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }


        /* =====================================================
           COMMON
        ===================================================== */

        .about-section {
          padding: 105px 0;
          background: var(--about-bg);
        }


        .about-label {
          display: inline-block;
          color: var(--about-gold-dark);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }


        /* =====================================================
           INTRO
        ===================================================== */

        .about-intro-section {
          background: #ffffff;
        }


        .about-intro-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 100px;
          align-items: start;
        }


        .about-heading-block h2,
        .about-section-heading h2,
        .about-story-content h2,
        .about-contact-card h2 {
          margin: 18px 0 0;
          color: var(--about-navy);
          font-family: var(
            --font-display,
            Georgia,
            serif
          );
          font-size: clamp(2.5rem, 4.5vw, 4.4rem);
          font-weight: 500;
          line-height: 1.02;
          letter-spacing: -0.045em;
        }


        .about-heading-block h2 span,
        .about-section-heading h2 span,
        .about-story-content h2 span,
        .about-contact-card h2 span {
          color: var(--about-gold);
          font-style: italic;
          font-weight: 400;
        }


        .about-heading-line {
          width: 70px;
          height: 2px;
          margin-top: 30px;
          background: var(--about-gold);
        }


        .about-intro-text {
          padding-top: 5px;
        }


        .about-intro-text p {
          max-width: 680px;
          margin: 0 0 21px;
          color: var(--about-muted);
          font-size: 16px;
          line-height: 1.9;
        }


        .about-intro-signature {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 30px;
          color: var(--about-navy);
          font-family: Georgia, serif;
          font-size: 14px;
        }


        .about-intro-signature span {
          width: 35px;
          height: 1px;
          background: var(--about-gold);
        }


        /* =====================================================
           IMAGE STRIP
        ===================================================== */

        .about-image-section {
          padding: 0 0 105px;
          background: #ffffff;
        }


        .about-image-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }


        .about-gallery-card {
          position: relative;
          height: 330px;
          overflow: hidden;
          border-radius: 22px;
          background: #ddd;
        }


        .about-gallery-card img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.7s ease;
        }


        .about-gallery-card:hover img {
          transform: scale(1.06);
        }


        .about-gallery-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 25px;
          background:
            linear-gradient(
              180deg,
              transparent 45%,
              rgba(5,15,26,0.78)
            );
        }


        .about-gallery-overlay span {
          margin-bottom: 7px;
          color: var(--about-gold);
          font-family: Georgia, serif;
          font-size: 15px;
          font-style: italic;
        }


        .about-gallery-overlay strong {
          color: white;
          font-family: Georgia, serif;
          font-size: 23px;
          font-weight: 500;
        }


        /* =====================================================
           STATS
        ===================================================== */

        .about-stats-section {
          padding: 0 0 105px;
          background: #ffffff;
        }


        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }


        .about-stat-card {
          position: relative;
          overflow: hidden;
          min-height: 180px;
          padding: 27px;
          border: 1px solid rgba(11,27,48,0.09);
          border-radius: 18px;
          background: #f8f8f6;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }


        .about-stat-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--about-gold),
            transparent
          );
        }


        .about-stat-card:hover {
          transform: translateY(-5px);
          border-color: rgba(185,151,78,0.35);
          box-shadow: 0 20px 45px rgba(11,27,48,0.08);
        }


        .about-stat-number {
          display: block;
          margin-bottom: 25px;
          color: #a3aab3;
          font-family: Georgia, serif;
          font-size: 13px;
          font-style: italic;
        }


        .about-stat-card strong {
          display: block;
          margin-bottom: 8px;
          color: var(--about-navy);
          font-family: Georgia, serif;
          font-size: 38px;
          font-weight: 500;
        }


        .about-stat-label {
          color: var(--about-muted);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }


        /* =====================================================
           EXPERTISE
        ===================================================== */

        .about-expertise-section {
          background:
            linear-gradient(
              180deg,
              #f5f5f2,
              #ffffff
            );
          border-top: 1px solid rgba(11,27,48,0.06);
          border-bottom: 1px solid rgba(11,27,48,0.06);
        }


        .about-section-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 50px;
          margin-bottom: 55px;
        }


        .about-section-heading h2 {
          max-width: 600px;
        }


        .about-section-heading p {
          max-width: 390px;
          margin: 0 0 5px;
          color: var(--about-muted);
          font-size: 14px;
          line-height: 1.8;
        }


        .about-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }


        .about-service-card {
          position: relative;
          min-height: 280px;
          padding: 29px;
          overflow: hidden;
          border: 1px solid rgba(11,27,48,0.09);
          border-radius: 18px;
          background: white;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }


        .about-service-card::after {
          content: "";
          position: absolute;
          right: -40px;
          bottom: -50px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: rgba(185,151,78,0.06);
          transition: transform 0.4s ease;
        }


        .about-service-card:hover {
          transform: translateY(-6px);
          border-color: rgba(185,151,78,0.35);
          box-shadow: 0 25px 55px rgba(11,27,48,0.09);
        }


        .about-service-card:hover::after {
          transform: scale(1.4);
        }


        .service-number {
          position: absolute;
          top: 22px;
          right: 25px;
          color: #c1c5ca;
          font-family: Georgia, serif;
          font-size: 13px;
          font-style: italic;
        }


        .service-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          margin-bottom: 38px;
          border: 1px solid rgba(185,151,78,0.30);
          border-radius: 50%;
          background: rgba(185,151,78,0.07);
          color: var(--about-gold-dark);
          font-size: 19px;
        }


        .about-service-card h3 {
          position: relative;
          z-index: 2;
          margin: 0 0 12px;
          color: var(--about-navy);
          font-family: Georgia, serif;
          font-size: 22px;
          font-weight: 500;
        }


        .about-service-card p {
          position: relative;
          z-index: 2;
          max-width: 310px;
          margin: 0;
          color: var(--about-muted);
          font-size: 13px;
          line-height: 1.75;
        }


        .service-arrow {
          position: absolute;
          right: 28px;
          bottom: 25px;
          z-index: 3;
          color: var(--about-gold);
          font-size: 19px;
          transition: transform 0.25s ease;
        }


        .about-service-card:hover .service-arrow {
          transform: translateX(5px);
        }


        /* =====================================================
           STORY
        ===================================================== */

        .about-story-section {
          padding: 105px 0;
          background: #ffffff;
        }


        .about-story-card {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          overflow: hidden;
          border: 1px solid rgba(11,27,48,0.10);
          border-radius: 24px;
          background: #f6f6f3;
          box-shadow: 0 25px 70px rgba(11,27,48,0.08);
        }


        .about-story-image {
          position: relative;
          min-height: 550px;
          overflow: hidden;
        }


        .about-story-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.8s ease;
        }


        .about-story-card:hover .about-story-image img {
          transform: scale(1.04);
        }


        .about-story-image-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              rgba(5,15,26,0.05),
              rgba(5,15,26,0.72)
            );
        }


        .about-story-image-text {
          position: absolute;
          left: 32px;
          bottom: 30px;
          display: flex;
          flex-direction: column;
        }


        .about-story-image-text span {
          margin-bottom: 8px;
          color: var(--about-gold);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.2em;
        }


        .about-story-image-text strong {
          color: white;
          font-family: Georgia, serif;
          font-size: 30px;
          font-weight: 500;
          line-height: 1.1;
        }


        .about-story-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 65px;
        }


        .about-story-content h2 {
          max-width: 560px;
        }


        .about-story-content p {
          max-width: 580px;
          margin: 20px 0 0;
          color: var(--about-muted);
          font-size: 14px;
          line-height: 1.85;
        }


        .about-gold-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
          gap: 15px;
          margin-top: 30px;
          padding: 14px 22px;
          border-radius: 999px;
          background: var(--about-navy);
          color: white;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }


        .about-gold-btn span {
          color: var(--about-gold);
          font-size: 17px;
        }


        .about-gold-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(11,27,48,0.18);
        }


        /* =====================================================
           PROMISE
        ===================================================== */

        .about-promise-section {
          padding: 105px 0;
          background: var(--about-navy);
          color: white;
          position: relative;
          overflow: hidden;
        }


        .about-promise-section::before {
          content: "";
          position: absolute;
          top: -250px;
          right: -150px;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(185,151,78,0.10);
          filter: blur(70px);
        }


        .about-promise-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 100px;
          align-items: center;
        }


        .promise-heading h2 {
          margin: 20px 0 0;
          color: white;
          font-family: Georgia, serif;
          font-size: clamp(3rem, 5vw, 5.2rem);
          font-weight: 400;
          line-height: 0.98;
          letter-spacing: -0.04em;
        }


        .promise-heading h2 span {
          color: var(--about-gold);
          font-style: italic;
        }


        .promise-content {
          max-width: 600px;
        }


        .promise-line {
          width: 70px;
          height: 2px;
          margin-bottom: 30px;
          background: var(--about-gold);
        }


        .promise-content p {
          margin: 0;
          color: rgba(255,255,255,0.72);
          font-family: Georgia, serif;
          font-size: clamp(1.4rem, 2.5vw, 2.2rem);
          line-height: 1.4;
          font-weight: 400;
        }


        .promise-author {
          display: block;
          margin-top: 30px;
          color: var(--about-gold);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }


        /* =====================================================
           CONTACT
        ===================================================== */

        .about-contact-section {
          padding: 105px 0;
          background: #ffffff;
        }


        .about-contact-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          padding: 48px 52px;
          border: 1px solid rgba(185,151,78,0.28);
          border-radius: 22px;
          background:
            radial-gradient(
              circle at 85% 20%,
              rgba(185,151,78,0.11),
              transparent 35%
            ),
            #f7f7f4;
        }


        .about-contact-card h2 {
          max-width: 700px;
          font-size: clamp(2.2rem, 4vw, 3.8rem);
        }


        .contact-content > p {
          max-width: 650px;
          margin: 20px 0 10px;
          color: var(--about-muted);
          font-size: 13px;
          line-height: 1.7;
        }


        .about-contact-details {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }


        .about-contact-details a {
          color: var(--about-navy);
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
          border-bottom: 1px solid rgba(185,151,78,0.45);
          padding-bottom: 3px;
        }


        .about-whatsapp-btn {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          min-height: 50px;
          padding: 14px 23px;
          border-radius: 999px;
          background: var(--about-navy);
          color: white;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
          box-shadow: 0 15px 30px rgba(11,27,48,0.15);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }


        .about-whatsapp-btn b {
          color: var(--about-gold);
          font-size: 17px;
        }


        .about-whatsapp-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(11,27,48,0.2);
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1000px) {

          .about-hero-inner {
            grid-template-columns: 1fr;
            gap: 55px;
          }


          .about-hero-content {
            max-width: 700px;
          }


          .about-hero-image-column {
            justify-content: flex-start;
          }


          .about-hero-image {
            width: min(100%, 600px);
          }


          .about-floating-card {
            right: 20px;
          }


          .about-intro-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }


          .about-image-grid {
            gap: 16px;
          }


          .about-gallery-card {
            height: 270px;
          }


          .about-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }


          .about-services-grid {
            grid-template-columns: repeat(2, 1fr);
          }


          .about-story-card {
            grid-template-columns: 1fr;
          }


          .about-story-image {
            min-height: 420px;
          }


          .about-story-content {
            padding: 50px;
          }


          .about-promise-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }


          .about-section-heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 20px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {

          .container-trs {
            width: min(100% - 28px, 1180px);
          }


          .about-hero-inner {
            min-height: auto;
            padding-top: 120px;
            padding-bottom: 65px;
            gap: 45px;
          }


          .about-hero h1 {
            font-size: clamp(3.1rem, 17vw, 5rem);
          }


          .about-hero-content > p {
            font-size: 14px;
          }


          .about-hero-actions {
            flex-direction: column;
            align-items: stretch;
          }


          .about-primary-btn,
          .about-secondary-btn {
            width: 100%;
          }


          .about-hero-image {
            width: 100%;
            aspect-ratio: 0.92;
            border-radius: 20px;
          }


          .about-floating-card {
            right: 8px;
            bottom: 25px;
            min-width: 140px;
            padding: 14px 16px;
          }


          .about-section {
            padding: 75px 0;
          }


          .about-intro-section {
            padding-bottom: 65px;
          }


          .about-heading-block h2,
          .about-section-heading h2,
          .about-story-content h2,
          .about-contact-card h2 {
            font-size: clamp(2.3rem, 11vw, 3.5rem);
          }


          .about-image-section {
            padding-bottom: 75px;
          }


          .about-image-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }


          .about-gallery-card {
            height: 280px;
          }


          .about-gallery-card:nth-child(2) {
            height: 240px;
          }


          .about-gallery-card:nth-child(3) {
            height: 280px;
          }


          .about-stats-section {
            padding-bottom: 75px;
          }


          .about-stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }


          .about-stat-card {
            min-height: 150px;
            padding: 20px;
          }


          .about-stat-card strong {
            font-size: 30px;
          }


          .about-stat-label {
            font-size: 8px;
          }


          .about-services-grid {
            grid-template-columns: 1fr;
          }


          .about-service-card {
            min-height: 255px;
          }


          .about-story-section {
            padding: 75px 0;
          }


          .about-story-image {
            min-height: 330px;
          }


          .about-story-content {
            padding: 35px 24px;
          }


          .about-promise-section {
            padding: 75px 0;
          }


          .promise-heading h2 {
            font-size: clamp(3rem, 15vw, 4.5rem);
          }


          .promise-content p {
            font-size: 1.35rem;
          }


          .about-contact-section {
            padding: 75px 0;
          }


          .about-contact-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 30px 23px;
            border-radius: 18px;
          }


          .about-whatsapp-btn {
            width: 100%;
          }

        }


        @media (max-width: 450px) {

          .about-stats-grid {
            grid-template-columns: 1fr;
          }


          .about-stat-card {
            min-height: 135px;
          }


          .about-gallery-card,
          .about-gallery-card:nth-child(2),
          .about-gallery-card:nth-child(3) {
            height: 250px;
          }


          .about-image-tag {
            left: 22px;
            bottom: 22px;
          }


          .about-image-tag strong {
            font-size: 17px;
          }


          .about-story-image {
            min-height: 280px;
          }


          .about-story-image-text {
            left: 23px;
            bottom: 23px;
          }


          .about-story-image-text strong {
            font-size: 25px;
          }

        }

      `}</style>

    </main>
  );
}

export default About;