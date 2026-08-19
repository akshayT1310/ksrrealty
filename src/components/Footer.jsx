import React from "react";
import { Link } from "react-router-dom";
import { ksrInfo, ksrServices, whatsappUrl } from "../ksr-info";

const quickLinks = [
  ["Home", "/"],
  ["Properties", "/property"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Blogs", "/blogs"],
  ["Contact Us", "/contact"],
];

const propertyLinks = [
  ["Buy Property in Indore", "/property?tab=buy"],
  ["Sell Property", "/property?tab=sell"],
  ["Rent / Lease", "/property?tab=rent"],
  ["Flats in Indore", "/property?type=flat"],
  ["Villas in Indore", "/property?type=villa"],
  ["Commercial Properties", "/property?type=office"],
  ["Plots in Indore", "/property?type=plot"],
];

function Logo() {
  return (
    <svg
      viewBox="0 0 260 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ksr-footer-logo"
      aria-label="KSR Realty Ventures"
      role="img"
    >
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="8"
        fill="url(#goldGradFooter)"
        stroke="var(--color-brass)"
        strokeWidth="1.5"
      />

      <path
        d="M12 28V16M12 22L20 16M12 22L20 28M24 16L32 28M32 16V28"
        stroke="var(--color-navy-dark)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8 20L24 8L40 20"
        stroke="var(--color-navy-dark)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <text
        x="60"
        y="27"
        fill="var(--color-paper)"
        fontFamily="'Outfit', sans-serif"
        fontSize="22"
        fontWeight="800"
        letterSpacing="1"
      >
        KSR
      </text>

      <text
        x="110"
        y="27"
        fill="var(--color-brass)"
        fontFamily="'Outfit', sans-serif"
        fontSize="22"
        fontWeight="400"
        letterSpacing="1"
      >
        REALTY
      </text>

      <text
        x="60"
        y="42"
        fill="var(--color-slate)"
        fontFamily="'Inter', sans-serif"
        fontSize="9"
        fontWeight="600"
        letterSpacing="3.5"
      >
        VENTURES PVT. LTD.
      </text>

      <defs>
        <linearGradient
          id="goldGradFooter"
          x1="2"
          y1="2"
          x2="46"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fdfcf7" />
          <stop offset="0.5" stopColor="#cba34c" />
          <stop offset="1" stopColor="#b08935" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="footer-social-icon"
    >
      {children}
    </a>
  );
}

function FooterLink({ to, children }) {
  return (
    <Link to={to} className="footer-link">
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <>
      <style>{`

        /* =====================================================
           FOOTER
        ===================================================== */

        .ksr-footer {
          position: relative;
          overflow: hidden;

          border-top:
            1px solid rgba(138, 129, 112, 0.2);

          background:
            linear-gradient(
              135deg,
              rgba(16, 38, 66, 0.99),
              rgba(12, 29, 51, 0.99)
            );
        }

        .ksr-footer::before {
          content: "";

          position: absolute;

          width: 520px;
          height: 520px;

          top: -280px;
          right: -180px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(201, 162, 75, 0.09),
              transparent 68%
            );

          pointer-events: none;
        }

        .ksr-footer::after {
          content: "";

          position: absolute;

          width: 420px;
          height: 420px;

          left: -220px;
          bottom: -250px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(255, 255, 255, 0.035),
              transparent 68%
            );

          pointer-events: none;
        }

        .ksr-footer-container {
          position: relative;
          z-index: 1;

          width: min(
            1200px,
            calc(100% - 40px)
          );

          margin: 0 auto;

          padding:
            52px 0 22px;
        }

        /* =====================================================
           MAIN GRID
        ===================================================== */

        .footer-main-grid {
          display: grid;

          grid-template-columns:
            1.45fr
            1fr
            1fr
            1.1fr;

          gap: 48px;
        }

        /* =====================================================
           BRAND
        ===================================================== */

        .footer-brand {
          min-width: 0;
        }

        .footer-logo-link {
          display: block;

          width: 245px;
          max-width: 100%;
          height: 48px;

          margin-bottom: 17px;

          padding: 0;

          border:
            1px solid
            rgba(185, 151, 78, 0.42);

          border-radius: 8px;

          background:
            rgba(248, 245, 238, 0.06);

          transition:
            border-color .25s ease,
            background .25s ease;
        }

        .footer-logo-link:hover {
          border-color:
            rgba(201, 162, 75, 0.75);

          background:
            rgba(248, 245, 238, 0.09);
        }

        .ksr-footer-logo {
          display: block;

          width: 100%;
          height: 100%;
        }

        .footer-description {
          max-width: 365px;

          margin: 0 0 18px;

          color: var(--color-slate);

          font-size: 11px;
          line-height: 1.75;
        }

        /* =====================================================
           CONTACT
        ===================================================== */

        .footer-contact-list {
          display: flex;
          flex-direction: column;

          gap: 8px;

          margin-bottom: 19px;
        }

        .footer-contact-link {
          display: inline-flex;

          width: fit-content;

          align-items: center;

          color: var(--color-slate);

          font-size: 11px;

          text-decoration: none;

          transition:
            color .2s ease;
        }

        .footer-contact-link:hover {
          color: var(--color-paper);
        }

        .footer-whatsapp {
          color: var(--color-brass);
        }

        .footer-whatsapp:hover {
          color: #fff;
        }

        /* =====================================================
           SOCIAL
        ===================================================== */

        .footer-socials {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .footer-social-icon {
          width: 34px;
          height: 34px;

          display: grid;
          place-items: center;

          border-radius: 50%;

          background:
            rgba(252, 250, 245, 0.07);

          color: var(--color-paper);

          border:
            1px solid
            rgba(255, 255, 255, 0.07);

          text-decoration: none;

          transition:
            background .25s ease,
            color .25s ease,
            border-color .25s ease,
            transform .25s ease;
        }

        .footer-social-icon:hover {
          background:
            var(--color-brass);

          color:
            var(--color-ink);

          border-color:
            var(--color-brass);

          transform:
            translateY(-2px);
        }

        /* =====================================================
           COLUMNS
        ===================================================== */

        .footer-column {
          min-width: 0;
        }

        .footer-heading {
          margin: 0 0 14px;

          color: var(--color-slate);

          font-size: 9px;
          font-weight: 700;

          letter-spacing: .14em;

          text-transform: uppercase;
        }

        .footer-links {
          display: flex;
          flex-direction: column;

          gap: 8px;

          margin: 0;
          padding: 0;

          list-style: none;
        }

        .footer-link {
          display: inline-block;

          width: fit-content;

          color: var(--color-slate);

          font-size: 11px;

          line-height: 1.45;

          text-decoration: none;

          transition:
            color .2s ease,
            transform .2s ease;
        }

        .footer-link:hover {
          color: var(--color-paper);

          transform:
            translateX(2px);
        }

        .footer-services-heading {
          margin-top: 26px;
        }

        /* =====================================================
           BOTTOM
        ===================================================== */

        .footer-bottom {
          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 20px;

          margin-top: 40px;
          padding-top: 18px;

          border-top:
            1px solid
            rgba(138, 129, 112, 0.2);
        }

        .footer-copyright {
          margin: 0;

          color: var(--color-slate);

          font-size: 10px;

          line-height: 1.5;
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;

          gap: 20px;
        }

        .footer-bottom-link {
          color: var(--color-slate);

          font-size: 10px;

          text-decoration: none;

          transition:
            color .2s ease;
        }

        .footer-bottom-link:hover {
          color: var(--color-paper);
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1050px) {

          .footer-main-grid {
            grid-template-columns:
              1.3fr
              1fr
              1fr;

            gap: 38px;
          }

          .footer-brand {
            grid-column: span 3;
          }

        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {

          .ksr-footer-container {
            width:
              calc(100% - 28px);

            padding:
              42px 0 20px;
          }

          .footer-main-grid {
            grid-template-columns: 1fr 1fr;

            gap:
              34px 25px;
          }

          .footer-brand {
            grid-column: span 2;
          }

          .footer-description {
            max-width: 100%;
          }

          .footer-bottom {
            flex-direction: column;

            align-items: flex-start;

            gap: 14px;
          }

          .footer-bottom-links {
            width: 100%;

            flex-wrap: wrap;

            gap: 10px 18px;
          }

        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .ksr-footer-container {
            width:
              calc(100% - 22px);

            padding:
              36px 0 18px;
          }

          .footer-main-grid {
            grid-template-columns: 1fr;

            gap: 29px;
          }

          .footer-brand {
            grid-column: span 1;
          }

          .footer-logo-link {
            width: 235px;
          }

          .footer-description {
            font-size: 10.5px;
          }

          .footer-heading {
            margin-bottom: 11px;
          }

          .footer-links {
            gap: 7px;
          }

          .footer-link {
            font-size: 10.5px;
          }

          .footer-bottom {
            margin-top: 32px;
          }

          .footer-copyright {
            font-size: 9px;
          }

        }

      `}</style>

      <footer className="ksr-footer">

        <div className="ksr-footer-container">

          <div className="footer-main-grid">

            {/* =================================================
                BRAND / CONTACT
            ================================================= */}

            <div className="footer-brand">

              <Link
                to="/"
                className="footer-logo-link"
                aria-label="KSR Realty Ventures Home"
              >
                <Logo />
              </Link>

              <p className="footer-description">
                KSR Realty Ventures helps buyers, sellers,
                investors, builders, and tenants discover
                verified properties across Indore with
                trusted guidance, site visits, and
                RERA-checked project support.
              </p>

              <div className="footer-contact-list">

                <a
                  href={ksrInfo.phoneHref}
                  className="footer-contact-link"
                >
                  {ksrInfo.phone}
                </a>

                <a
                  href={ksrInfo.emailHref}
                  className="footer-contact-link"
                >
                  {ksrInfo.email}
                </a>

                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-link footer-whatsapp"
                >
                  Chat on WhatsApp
                </a>

              </div>

              {/* SOCIAL */}

              <div className="footer-socials">

                <SocialIcon
                  href={ksrInfo.socials?.instagram}
                  label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    />

                    <path
                      d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    />

                    <line
                      x1="17.5"
                      x2="17.51"
                      y1="6.5"
                      y2="6.5"
                    />
                  </svg>
                </SocialIcon>

                <SocialIcon
                  href={ksrInfo.socials?.facebook}
                  label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                    />
                  </svg>
                </SocialIcon>

                <SocialIcon
                  href={ksrInfo.socials?.linkedin}
                  label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    />

                    <rect
                      width="4"
                      height="12"
                      x="2"
                      y="9"
                    />

                    <circle
                      cx="4"
                      cy="4"
                      r="2"
                    />
                  </svg>
                </SocialIcon>

              </div>

            </div>

            {/* =================================================
                COMPANY LINKS
            ================================================= */}

            <div className="footer-column">

              <h3 className="footer-heading">
                Company
              </h3>

              <ul className="footer-links">

                {quickLinks.map(([label, to]) => (
                  <li key={label}>
                    <FooterLink to={to}>
                      {label}
                    </FooterLink>
                  </li>
                ))}

              </ul>

            </div>

            {/* =================================================
                SERVICES
            ================================================= */}

            <div className="footer-column">

              <h3 className="footer-heading">
                Services
              </h3>

              <ul className="footer-links">

                {ksrServices
                  .slice(0, 7)
                  .map((label) => (
                    <li key={label}>
                      <FooterLink to="/services">
                        {label}
                      </FooterLink>
                    </li>
                  ))}

              </ul>

            </div>

            {/* =================================================
                PROPERTIES
            ================================================= */}

            <div className="footer-column">

              <h3 className="footer-heading">
                Explore Properties
              </h3>

              <ul className="footer-links">

                {propertyLinks.map(
                  ([label, to]) => (
                    <li key={label}>
                      <FooterLink to={to}>
                        {label}
                      </FooterLink>
                    </li>
                  )
                )}

              </ul>

            </div>

          </div>

          {/* =================================================
              BOTTOM BAR
          ================================================= */}

          <div className="footer-bottom">

            <p className="footer-copyright">
              © 2026 KSR Realty Ventures Pvt. Ltd.
              All rights reserved.
            </p>

          

          </div>

        </div>

      </footer>
    </>
  );
}