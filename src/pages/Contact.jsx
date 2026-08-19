import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheck,
  FaBuilding,
  FaHome,
  FaKey,
  FaHardHat,
  FaFileContract,
  FaHandshake,
} from "react-icons/fa";

import { ksrInfo, whatsappUrl } from "../ksr-info";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: "cnt_" + Date.now(),
      name,
      phone,
      email,
      msg,
      date: new Date().toLocaleString(),
    };

    try {
      const existing = JSON.parse(
        localStorage.getItem("ksr_contact_submissions") || "[]"
      );

      existing.push(data);

      localStorage.setItem(
        "ksr_contact_submissions",
        JSON.stringify(existing)
      );
    } catch {}

    const text = `Hello KSR Realty,

I would like to discuss a property requirement.

Name: ${name}
Phone: ${phone}
Email: ${email}
Requirement: ${msg}`;

    window.open(whatsappUrl(text), "_blank");

    setName("");
    setPhone("");
    setEmail("");
    setMsg("");
  };

  const services = [
    {
      icon: <FaHome />,
      title: "Buy Property",
      text: "Find residential and commercial properties aligned with your requirements.",
    },
    {
      icon: <FaKey />,
      title: "Sell Property",
      text: "Position your property professionally and connect with qualified buyers.",
    },
    {
      icon: <FaBuilding />,
      title: "Builder Projects",
      text: "Explore verified projects with location, documentation and value insights.",
    },
    {
      icon: <FaHardHat />,
      title: "Construction",
      text: "From planning to execution, get support for residential and commercial construction.",
    },
    {
      icon: <FaFileContract />,
      title: "Property Support",
      text: "Assistance with valuation, legal coordination, documentation and home loans.",
    },
    {
      icon: <FaHandshake />,
      title: "Real Estate Advisory",
      text: "Receive personalised guidance for your next property decision.",
    },
  ];

  return (
    <main className="ksr-contact-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="ksr-contact-hero">

        <div className="hero-grid-pattern" />
        <div className="hero-gold-orb hero-orb-one" />
        <div className="hero-gold-orb hero-orb-two" />

        <div className="container-trs">

          <div className="contact-hero-content">

            <div className="premium-badge">
              <span />
              KSR REALTY VENTURES
              <span />
            </div>

            <h1>
              Let's Find Your
              <br />
              <em>Right Property.</em>
            </h1>

            <p>
              Whether you're buying, selling, investing or building,
              our property advisors are here to help you make a
              confident and informed decision.
            </p>

            <div className="hero-mini-info">

              <div>
                <FaCheck />
                Verified Opportunities
              </div>

              <div>
                <FaCheck />
                Personal Advisory
              </div>

              <div>
                <FaCheck />
                End-to-End Support
              </div>

            </div>

          </div>

        </div>

        <div className="hero-bottom-line">
          <span />
        </div>

      </section>


      {/* =====================================================
          INTRO / ADVANTAGE
      ===================================================== */}

      <section className="ksr-advantage-section">

        <div className="container-trs">

          <div className="section-heading">

            <span className="section-label">
              WHY KSR REALTY
            </span>

            <h2>
              Property Decisions,
              <br />
              <em>Made with Clarity.</em>
            </h2>

            <p>
              Real estate is more than a transaction. We bring
              together market understanding, verified opportunities
              and personalised advisory to make every step simpler.
            </p>

          </div>


          <div className="advantage-grid">

            <div className="advantage-card">

              <span className="advantage-number">
                01
              </span>

              <h3>
                Verified Opportunities
              </h3>

              <p>
                Carefully shortlisted properties and projects
                with a strong focus on transparency and credibility.
              </p>

              <div className="advantage-arrow">
                <FaArrowRight />
              </div>

            </div>


            <div className="advantage-card featured">

              <span className="advantage-number">
                02
              </span>

              <h3>
                Personal Advisory
              </h3>

              <p>
                Recommendations based on your budget, location,
                requirements and long-term objectives.
              </p>

              <div className="advantage-arrow">
                <FaArrowRight />
              </div>

            </div>


            <div className="advantage-card">

              <span className="advantage-number">
                03
              </span>

              <h3>
                Complete Support
              </h3>

              <p>
                From site visits to documentation, financing,
                valuation and construction support.
              </p>

              <div className="advantage-arrow">
                <FaArrowRight />
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT AREA
      ===================================================== */}

      <section className="ksr-contact-main">

        <div className="container-trs">

          <div className="contact-layout">


            {/* FORM */}

            <div className="contact-form-card">

              <div className="form-top">

                <div>

                  <span className="section-label">
                    START A CONVERSATION
                  </span>

                  <h2>
                    Tell us what
                    <br />
                    you're looking for.
                  </h2>

                </div>

                <div className="form-icon">
                  <FaWhatsapp />
                </div>

              </div>

              <p className="form-description">
                Share a few details about your requirement and
                our advisor will connect with you personally.
              </p>


              <form onSubmit={handleSubmit}>

                <div className="input-row">

                  <div className="input-group">

                    <label>
                      Full Name *
                    </label>

                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                    />

                  </div>


                  <div className="input-group">

                    <label>
                      Phone Number *
                    </label>

                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your mobile number"
                    />

                  </div>

                </div>


                <div className="input-group">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                  />

                </div>


                <div className="input-group">

                  <label>
                    How Can We Help? *
                  </label>

                  <textarea
                    rows="5"
                    required
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="Tell us your property requirement..."
                  />

                </div>


                <button
                  type="submit"
                  className="whatsapp-submit"
                >

                  <FaWhatsapp />

                  <span>
                    Connect on WhatsApp
                  </span>

                  <FaArrowRight />

                </button>

              </form>


              <div className="form-trust">

                <div>
                  <FaCheck />
                  Verified
                </div>

                <div>
                  <FaCheck />
                  Zero Brokerage
                </div>

                <div>
                  <FaCheck />
                  VIP Site Visits
                </div>

              </div>

            </div>


            {/* CONTACT INFO */}

            <div className="contact-info-column">


              <div className="office-card">

                <span className="section-label">
                  VISIT OUR OFFICE
                </span>

                <h3>
                  Let's meet
                  <br />
                  <em>in person.</em>
                </h3>


                <div className="info-item">

                  <div className="info-icon">
                    <FaMapMarkerAlt />
                  </div>

                  <div>

                    <small>
                      OFFICE
                    </small>

                    <p>
                      {ksrInfo.address}
                    </p>

                  </div>

                </div>


                <div className="info-item">

                  <div className="info-icon">
                    <FaPhoneAlt />
                  </div>

                  <div>

                    <small>
                      CALL US
                    </small>

                    <a href={ksrInfo.phoneHref}>
                      {ksrInfo.phone}
                    </a>

                  </div>

                </div>


                <div className="info-item">

                  <div className="info-icon">
                    <FaEnvelope />
                  </div>

                  <div>

                    <small>
                      EMAIL
                    </small>

                    <a href={ksrInfo.emailHref}>
                      {ksrInfo.email}
                    </a>

                  </div>

                </div>


                <a
                  href={ksrInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="maps-button"
                >

                  <span>
                    Open Google Maps
                  </span>

                  <FaArrowRight />

                </a>

              </div>


              {/* SOCIAL */}

              <div className="social-card">

                <div>

                  <span className="section-label">
                    FOLLOW KSR
                  </span>

                  <h3>
                    Stay connected.
                  </h3>

                </div>

                <div className="social-icons">

                  <a
                    href={ksrInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href={ksrInfo.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href={ksrInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href={whatsappUrl("Hello KSR Realty")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="services-section">

        <div className="container-trs">

          <div className="section-heading service-heading">

            <span className="section-label">
              OUR EXPERTISE
            </span>

            <h2>
              One destination.
              <br />
              <em>Every property need.</em>
            </h2>

          </div>


          <div className="services-grid">

            {services.map((service, index) => (

              <div
                className="service-card"
                key={index}
              >

                <div className="service-icon">
                  {service.icon}
                </div>

                <span className="service-number">
                  0{index + 1}
                </span>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.text}
                </p>

                <div className="service-line" />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="process-section">

        <div className="container-trs">

          <div className="section-heading">

            <span className="section-label">
              HOW IT WORKS
            </span>

            <h2>
              Your property journey,
              <br />
              <em>made simple.</em>
            </h2>

          </div>


          <div className="process-grid">

            <div className="process-item">

              <div className="process-number">
                01
              </div>

              <div>
                <h3>
                  Tell Us Your Requirement
                </h3>

                <p>
                  Share your preferred location, budget,
                  property type and purpose.
                </p>
              </div>

            </div>


            <div className="process-item">

              <div className="process-number">
                02
              </div>

              <div>
                <h3>
                  Get Personalised Options
                </h3>

                <p>
                  Our advisor shortlists suitable opportunities
                  based on your requirements.
                </p>
              </div>

            </div>


            <div className="process-item">

              <div className="process-number">
                03
              </div>

              <div>
                <h3>
                  Visit & Make Your Move
                </h3>

                <p>
                  Explore shortlisted properties with our
                  assistance and move forward confidently.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAP
      ===================================================== */}

      <section className="location-section">

        <div className="container-trs">

          <div className="location-header">

            <div>

              <span className="section-label">
                OUR LOCATION
              </span>

              <h2>
                Find KSR <em>Realty.</em>
              </h2>

            </div>

            <a
              href={ksrInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="location-link"
            >
              Get Directions
              <FaArrowRight />
            </a>

          </div>


          <div className="map-container">

            <iframe
              title="KSR Realty Ventures Office Location"
              src={ksrInfo.mapEmbedUrl}
              width="100%"
              height="430"
              style={{
                border: 0,
                display: "block",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="final-cta">

        <div className="cta-glow" />

        <div className="container-trs">

          <div className="cta-content">

            <span>
              YOUR NEXT PROPERTY STARTS HERE
            </span>

            <h2>
              Ready to make
              <br />
              the <em>right move?</em>
            </h2>

            <p>
              Speak with a KSR Realty advisor today.
            </p>

            <a
              href={whatsappUrl("Hello KSR Realty")}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >

              <FaWhatsapp />

              Talk to an Advisor

              <FaArrowRight />

            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .ksr-contact-page {
          background: #f8f6f1;
          color: #26251f;
          overflow: hidden;
        }

        .container-trs {
          width: min(1180px, calc(100% - 32px));
          margin: auto;
        }


        /* ================================
           HERO
        ================================= */

        .ksr-contact-hero {
          position: relative;
          min-height: 620px;
          display: flex;
          align-items: center;
          background:
            radial-gradient(
              circle at 15% 30%,
              rgba(190,150,70,.12),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #fffdf9 0%,
              #f5f0e7 100%
            );
          border-bottom: 1px solid #e7dfd0;
        }

        .hero-grid-pattern {
          position: absolute;
          inset: 0;
          opacity: .35;
          background-image:
            linear-gradient(
              rgba(80,70,50,.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(80,70,50,.035) 1px,
              transparent 1px
            );
          background-size: 55px 55px;
        }

        .hero-gold-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(2px);
        }

        .hero-orb-one {
          width: 240px;
          height: 240px;
          right: -80px;
          top: 90px;
          background: rgba(193,156,82,.08);
        }

        .hero-orb-two {
          width: 150px;
          height: 150px;
          left: 8%;
          bottom: 40px;
          background: rgba(193,156,82,.07);
        }

        .contact-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 850px;
          margin: auto;
          padding: 100px 0;
        }

        .premium-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #a87e2e;
          font-size: .62rem;
          font-weight: 900;
          letter-spacing: .25em;
        }

        .premium-badge span {
          width: 35px;
          height: 1px;
          background: #c5a25e;
        }

        .contact-hero-content h1 {
          margin: 25px 0 0;
          font-family: Georgia, serif;
          font-size: clamp(3rem, 7vw, 5.7rem);
          font-weight: 500;
          line-height: .98;
          letter-spacing: -.045em;
          color: #24231e;
        }

        .contact-hero-content h1 em {
          color: #b28a3b;
          font-weight: 400;
        }

        .contact-hero-content > p {
          max-width: 650px;
          margin: 28px auto 0;
          color: #777269;
          font-size: .92rem;
          line-height: 1.9;
        }

        .hero-mini-info {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px 25px;
          margin-top: 35px;
        }

        .hero-mini-info div {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #777166;
          font-size: .67rem;
          font-weight: 700;
        }

        .hero-mini-info svg {
          color: #b38b3e;
          font-size: 11px;
        }

        .hero-bottom-line {
          position: absolute;
          left: 50%;
          bottom: 25px;
          transform: translateX(-50%);
        }

        .hero-bottom-line span {
          display: block;
          width: 1px;
          height: 45px;
          background: linear-gradient(
            to bottom,
            #b48a3a,
            transparent
          );
        }


        /* ================================
           COMMON HEADING
        ================================= */

        .section-heading {
          max-width: 700px;
          margin: auto;
          text-align: center;
        }

        .section-label {
          color: #ad8332;
          font-size: .61rem;
          font-weight: 900;
          letter-spacing: .22em;
        }

        .section-heading h2 {
          margin: 13px 0 17px;
          font-family: Georgia, serif;
          font-size: clamp(2.3rem, 5vw, 3.7rem);
          font-weight: 500;
          line-height: 1.08;
          letter-spacing: -.035em;
          color: #292820;
        }

        .section-heading h2 em {
          color: #b28a3b;
          font-weight: 400;
        }

        .section-heading p {
          color: #7c776d;
          font-size: .86rem;
          line-height: 1.8;
        }


        /* ================================
           ADVANTAGE
        ================================= */

        .ksr-advantage-section {
          padding: 105px 0;
          background: #fffdfa;
          border-bottom: 1px solid #e8e0d2;
        }

        .advantage-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 60px;
        }

        .advantage-card {
          position: relative;
          min-height: 255px;
          padding: 30px;
          background: #fff;
          border: 1px solid #e6dfd3;
          border-radius: 20px;
          box-shadow: 0 18px 50px rgba(65,50,25,.045);
          overflow: hidden;
          transition: .3s ease;
        }

        .advantage-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 25px 60px rgba(65,50,25,.09);
        }

        .advantage-card.featured {
          border-color: #d9c49b;
          background:
            linear-gradient(
              145deg,
              #fff,
              #fcf7eb
            );
        }

        .advantage-number {
          display: block;
          color: #c0a064;
          font-family: Georgia, serif;
          font-size: .8rem;
          letter-spacing: .15em;
          margin-bottom: 42px;
        }

        .advantage-card h3 {
          margin: 0 0 12px;
          font-family: Georgia, serif;
          font-size: 1.45rem;
          font-weight: 500;
          color: #2c2a23;
        }

        .advantage-card p {
          max-width: 310px;
          margin: 0;
          color: #7e796f;
          font-size: .78rem;
          line-height: 1.75;
        }

        .advantage-arrow {
          position: absolute;
          right: 28px;
          bottom: 28px;
          color: #b58c3e;
          font-size: 12px;
        }


        /* ================================
           CONTACT MAIN
        ================================= */

        .ksr-contact-main {
          padding: 105px 0;
          background: #f5f2eb;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1.08fr .92fr;
          gap: 28px;
          align-items: start;
        }


        /* FORM */

        .contact-form-card {
          padding: 38px;
          background: #fff;
          border: 1px solid #e4ddd0;
          border-radius: 24px;
          box-shadow: 0 25px 70px rgba(65,50,25,.07);
        }

        .form-top {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .form-top h2 {
          margin: 10px 0 0;
          font-family: Georgia, serif;
          font-size: 2.35rem;
          line-height: 1.08;
          font-weight: 500;
          color: #292820;
        }

        .form-icon {
          width: 50px;
          height: 50px;
          display: grid;
          place-items: center;
          flex: 0 0 50px;
          border-radius: 14px;
          color: #ad8332;
          background: #faf4e7;
          border: 1px solid #e9dcbf;
          font-size: 19px;
        }

        .form-description {
          margin: 17px 0 28px;
          color: #817c72;
          font-size: .82rem;
          line-height: 1.75;
        }

        .input-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-bottom: 16px;
        }

        .input-group label {
          color: #69645b;
          font-size: .61rem;
          font-weight: 900;
          letter-spacing: .13em;
          text-transform: uppercase;
        }

        .input-group input,
        .input-group textarea {
          width: 100%;
          border: 1px solid #ddd6c9;
          border-radius: 11px;
          background: #fcfbf8;
          color: #282720;
          padding: 13px 14px;
          font-family: inherit;
          font-size: .82rem;
          outline: none;
          transition: .2s ease;
        }

        .input-group input {
          min-height: 48px;
        }

        .input-group textarea {
          resize: vertical;
          min-height: 125px;
        }

        .input-group input::placeholder,
        .input-group textarea::placeholder {
          color: #aaa59a;
        }

        .input-group input:focus,
        .input-group textarea:focus {
          background: #fff;
          border-color: #c3a15e;
          box-shadow: 0 0 0 4px rgba(190,151,72,.08);
        }

        .whatsapp-submit {
          width: 100%;
          min-height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 0;
          border-radius: 12px;
          background: linear-gradient(
            135deg,
            #ae8434,
            #d1ad61
          );
          color: #fff;
          font-size: .8rem;
          font-weight: 900;
          cursor: pointer;
          box-shadow: 0 13px 28px rgba(163,123,40,.2);
          transition: .25s ease;
        }

        .whatsapp-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 35px rgba(163,123,40,.26);
        }

        .form-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 20px;
          padding-top: 18px;
          border-top: 1px solid #eee8dc;
        }

        .form-trust div {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #898379;
          font-size: .64rem;
        }

        .form-trust svg {
          color: #b38b3d;
          font-size: 10px;
        }


        /* INFO */

        .contact-info-column {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .office-card {
          padding: 30px;
          background: #fff;
          border: 1px solid #e5ded1;
          border-radius: 21px;
          box-shadow: 0 18px 50px rgba(65,50,25,.055);
        }

        .office-card h3 {
          margin: 10px 0 25px;
          font-family: Georgia, serif;
          font-size: 2rem;
          font-weight: 500;
          line-height: 1.05;
          color: #292820;
        }

        .office-card h3 em {
          color: #b28a3b;
          font-weight: 400;
        }

        .info-item {
          display: flex;
          gap: 13px;
          margin-top: 17px;
        }

        .info-icon {
          width: 40px;
          height: 40px;
          flex: 0 0 40px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          background: #faf5e9;
          border: 1px solid #eadfc7;
          color: #ad8435;
          font-size: 13px;
        }

        .info-item small {
          display: block;
          margin-bottom: 4px;
          color: #aaa398;
          font-size: .56rem;
          font-weight: 900;
          letter-spacing: .14em;
        }

        .info-item p,
        .info-item a {
          margin: 0;
          color: #5d5951;
          font-size: .79rem;
          line-height: 1.6;
          text-decoration: none;
        }

        .info-item a:hover {
          color: #ad8332;
        }

        .maps-button {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 23px;
          padding: 12px 14px;
          border: 1px solid #e2d6ba;
          border-radius: 10px;
          background: #fcf8ee;
          color: #a67e2e;
          font-size: .73rem;
          font-weight: 800;
          text-decoration: none;
        }


        /* SOCIAL */

        .social-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 22px 25px;
          background: #fff;
          border: 1px solid #e5ded1;
          border-radius: 19px;
        }

        .social-card h3 {
          margin: 6px 0 0;
          color: #2d2b25;
          font-family: Georgia, serif;
          font-size: 1.25rem;
          font-weight: 500;
        }

        .social-icons {
          display: flex;
          gap: 8px;
        }

        .social-icons a {
          width: 39px;
          height: 39px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          border: 1px solid #e2dcd0;
          background: #faf9f6;
          color: #656057;
          text-decoration: none;
          transition: .2s ease;
        }

        .social-icons a:hover {
          color: #fff;
          background: #b28a3b;
          border-color: #b28a3b;
          transform: translateY(-3px);
        }


        /* ================================
           SERVICES
        ================================= */

        .services-section {
          padding: 105px 0;
          background: #fffdfa;
          border-top: 1px solid #e8e1d5;
          border-bottom: 1px solid #e8e1d5;
        }

        .service-heading {
          margin-bottom: 60px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .service-card {
          position: relative;
          padding: 28px;
          min-height: 235px;
          background: #fff;
          border: 1px solid #e7e0d4;
          border-radius: 18px;
          overflow: hidden;
          transition: .25s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          border-color: #d8c49c;
          box-shadow: 0 18px 45px rgba(65,50,25,.07);
        }

        .service-icon {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #faf4e6;
          border: 1px solid #ebdfc5;
          color: #b08839;
          font-size: 15px;
        }

        .service-number {
          position: absolute;
          right: 25px;
          top: 25px;
          color: #c5bdaE;
          font-family: Georgia, serif;
          font-size: .65rem;
        }

        .service-card h3 {
          margin: 28px 0 9px;
          color: #2c2a23;
          font-family: Georgia, serif;
          font-size: 1.25rem;
          font-weight: 500;
        }

        .service-card p {
          margin: 0;
          color: #807a70;
          font-size: .75rem;
          line-height: 1.7;
        }

        .service-line {
          position: absolute;
          left: 28px;
          bottom: 20px;
          width: 30px;
          height: 1px;
          background: #c6a15a;
        }


        /* ================================
           PROCESS
        ================================= */

        .process-section {
          padding: 105px 0;
          background: #f4f0e8;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 35px;
          margin-top: 65px;
        }

        .process-item {
          display: flex;
          gap: 18px;
          padding-bottom: 25px;
          border-bottom: 1px solid #ddd3c0;
        }

        .process-number {
          color: #b28a3b;
          font-family: Georgia, serif;
          font-size: 1.1rem;
        }

        .process-item h3 {
          margin: 0 0 9px;
          color: #2b2923;
          font-family: Georgia, serif;
          font-size: 1.15rem;
          font-weight: 500;
        }

        .process-item p {
          margin: 0;
          color: #817b71;
          font-size: .75rem;
          line-height: 1.7;
        }


        /* ================================
           LOCATION
        ================================= */

        .location-section {
          padding: 100px 0;
          background: #fffdfa;
        }

        .location-header {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 30px;
        }

        .location-header h2 {
          margin: 10px 0 0;
          font-family: Georgia, serif;
          font-size: 2.7rem;
          font-weight: 500;
          color: #292820;
        }

        .location-header h2 em {
          color: #b18a3b;
          font-weight: 400;
        }

        .location-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #a47c2d;
          font-size: .72rem;
          font-weight: 800;
          text-decoration: none;
        }

        .map-container {
          overflow: hidden;
          border: 1px solid #e3dccf;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(65,50,25,.07);
          background: #eee;
        }

        .map-container iframe {
          filter: saturate(.7);
        }


        /* ================================
           CTA
        ================================= */

        .final-cta {
          position: relative;
          padding: 110px 0;
          text-align: center;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(195,158,82,.16),
              transparent 45%
            ),
            linear-gradient(
              135deg,
              #f0eadf,
              #e9e1d2
            );
          border-top: 1px solid #ded5c5;
          overflow: hidden;
        }

        .cta-glow {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          left: 50%;
          top: -300px;
          transform: translateX(-50%);
          background: rgba(190,151,72,.12);
          filter: blur(50px);
        }

        .cta-content {
          position: relative;
          z-index: 2;
        }

        .cta-content > span {
          color: #a47d2e;
          font-size: .62rem;
          font-weight: 900;
          letter-spacing: .23em;
        }

        .cta-content h2 {
          margin: 13px 0 12px;
          color: #292820;
          font-family: Georgia, serif;
          font-size: clamp(2.7rem, 6vw, 4.5rem);
          font-weight: 500;
          line-height: 1;
          letter-spacing: -.035em;
        }

        .cta-content h2 em {
          color: #b28a3b;
          font-weight: 400;
        }

        .cta-content p {
          color: #777167;
          font-size: .82rem;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 25px;
          padding: 14px 23px;
          border-radius: 999px;
          background: #b28a3b;
          color: #fff;
          font-size: .77rem;
          font-weight: 900;
          text-decoration: none;
          box-shadow: 0 15px 30px rgba(155,116,37,.2);
          transition: .25s ease;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          background: #9e762b;
        }


        /* ================================
           TABLET
        ================================= */

        @media (max-width: 950px) {

          .contact-layout {
            grid-template-columns: 1fr;
          }

          .advantage-grid,
          .services-grid {
            grid-template-columns: 1fr 1fr;
          }

          .process-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

        }


        /* ================================
           MOBILE
        ================================= */

        @media (max-width: 650px) {

          .container-trs {
            width: calc(100% - 24px);
          }

          .ksr-contact-hero {
            min-height: 570px;
          }

          .contact-hero-content {
            padding: 80px 0;
          }

          .premium-badge {
            font-size: .52rem;
            letter-spacing: .17em;
          }

          .premium-badge span {
            width: 22px;
          }

          .contact-hero-content h1 {
            font-size: 3rem;
            line-height: 1.02;
          }

          .contact-hero-content > p {
            font-size: .78rem;
            line-height: 1.75;
            padding: 0 10px;
          }

          .hero-mini-info {
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }

          .ksr-advantage-section,
          .ksr-contact-main,
          .services-section,
          .process-section,
          .location-section {
            padding: 70px 0;
          }

          .section-heading h2 {
            font-size: 2.35rem;
          }

          .advantage-grid,
          .services-grid {
            grid-template-columns: 1fr;
            margin-top: 40px;
          }

          .advantage-card {
            min-height: 225px;
          }

          .contact-form-card {
            padding: 22px 17px;
            border-radius: 18px;
          }

          .form-top h2 {
            font-size: 1.75rem;
          }

          .form-icon {
            width: 42px;
            height: 42px;
            flex-basis: 42px;
          }

          .input-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .social-card {
            align-items: flex-start;
            flex-direction: column;
          }

          .location-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .location-header h2 {
            font-size: 2.3rem;
          }

          .map-container iframe {
            height: 300px;
          }

          .final-cta {
            padding: 75px 15px;
          }

          .cta-content h2 {
            font-size: 2.9rem;
          }

        }

      `}</style>

    </main>
  );
}