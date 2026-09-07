import React from "react";
import { Link } from "react-router-dom";
import {
  Landmark,
  Scale,
  Calculator,
  Building2,
  BarChart3,
  SearchCheck,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Landmark,
    title: "Buy Property",
    description:
      "Discover verified residential and commercial properties selected around your budget, location and lifestyle.",
    link: "/search",
    action: "Explore properties",
  },
  {
    icon: Building2,
    title: "Sell Property",
    description:
      "Position your property professionally, reach the right buyers and receive expert assistance throughout the sale.",
    link: "/#sell-property",
    action: "Sell your property",
  },
  {
    icon: Calculator,
    title: "EMI Calculator",
    description:
      "Estimate your monthly EMI, understand your borrowing capacity and plan your property purchase with clarity.",
    link: "/services/emi-calculator",
    action: "Calculate EMI",
  },
  {
    icon: Building2,
    title: "Construction",
    description:
      "From planning and architecture to execution and handover, experience a professionally managed construction journey.",
    link: "/services/construction",
    action: "Explore construction",
  },
  {
    icon: Scale,
    title: "Legal & Loan Support",
    description:
      "Get practical assistance with documentation, legal coordination, home loans and transaction-related requirements.",
    link: "/services/legal",
    action: "Get support",
  },
  {
    icon: BarChart3,
    title: "Property Valuation",
    description:
      "Understand your property's market position with informed valuation guidance based on location and property factors.",
    link: "/services/valuation",
    action: "Get valuation",
  },
];

export default function ServicesSection() {
  return (
    <section className="ksr-services" id="services">
      <div className="ksr-services-container">

        {/* HEADER */}
        <div className="ksr-services-top">

          <div className="ksr-services-heading">

            <div className="ksr-services-eyebrow">
              <span></span>
              CURATED TOOLS & SERVICES
            </div>

            <h2>
              Exclusive services
              <br />
              <em>under one roof.</em>
            </h2>

          </div>

          

        </div>

        {/* SERVICES GRID */}
        <div className="ksr-services-grid">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                to={service.link}
                className="ksr-service-card"
                key={service.title}
                style={{
                  animationDelay: `${index * 0.06}s`,
                }}
              >

                {/* ICON */}
                <div className="ksr-service-icon">
                  <Icon
                    size={18}
                    strokeWidth={1.5}
                  />
                </div>

                {/* CONTENT */}
                <div className="ksr-service-content">

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <span className="ksr-service-action">
                    {service.action}

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                    />
                  </span>

                </div>

              </Link>
            );
          })}

        </div>

        {/* BOTTOM */}
        <div className="ksr-services-bottom">

          <div className="ksr-services-bottom-left">

            <SearchCheck
              size={18}
              strokeWidth={1.4}
            />

            <span>
              PROPERTY • FINANCE • LEGAL • CONSTRUCTION
            </span>

          </div>

          <Link
            to="/contact"
            className="ksr-services-bottom-link"
          >
            Need personalised assistance?

            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
            />
          </Link>

        </div>

      </div>

      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        .ksr-services {
          width: 100%;
          padding: 105px 0;
          background: #f8f5ef;
          color: #09213d;
          overflow: hidden;
        }

        .ksr-services-container {
          width: min(1090px, calc(100% - 48px));
          margin: 0 auto;
        }

        /* HEADER */

        .ksr-services-top {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 48px;
        }

        .ksr-services-heading {
          max-width: 650px;
        }

        .ksr-services-eyebrow {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 14px;

          font-family: var(--font-display);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;

          color: #a98032;
        }

        .ksr-services-eyebrow span {
          width: 25px;
          height: 1px;
          background: #b58a3a;
        }

        .ksr-services-heading h2 {
          margin: 0;

          font-family:
            var(--font-display),
            "Sora",
            sans-serif;

          font-size: clamp(2.4rem, 4vw, 3.5rem);
          line-height: 1.12;
          font-weight: 500;
          letter-spacing: -0.045em;

          color: #09213d;
        }

        .ksr-services-heading h2 em {
          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-weight: 400;
          color: #777064;
        }

        /* SPECIALIST */

        .ksr-specialist-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          padding-bottom: 5px;

          color: #a67a2c;
          text-decoration: none;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 500;

          white-space: nowrap;

          border-bottom: 1px solid transparent;

          transition:
            color 0.25s ease,
            gap 0.25s ease,
            border-color 0.25s ease;
        }

        .ksr-specialist-link:hover {
          color: #09213d;
          gap: 11px;
          border-color: #b58a3a;
        }

        /* GRID */

        .ksr-services-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        /* CARD */

        .ksr-service-card {
          position: relative;

          min-height: 178px;
          padding: 22px;

          box-sizing: border-box;

          background: #ebe4d6;

          border: 1px solid rgba(48, 43, 35, 0.14);
          border-radius: 13px;

          text-decoration: none;
          color: inherit;

          cursor: pointer;

          display: flex;
          flex-direction: column;

          opacity: 0;

          animation:
            ksrServiceReveal
            0.65s
            ease
            forwards;

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .ksr-service-card:hover {
          transform: translateY(-5px);

          background: #eee8dc;

          border-color:
            rgba(166, 122, 44, 0.38);

          box-shadow:
            0 18px 40px
            rgba(30, 25, 18, 0.08);
        }

        /* ICON */

        .ksr-service-icon {
          width: 31px;
          height: 31px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 17px;

          border-radius: 7px;

          background: #f3ead6;
          color: #b28738;

          transition:
            background 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease;
        }

        .ksr-service-card:hover .ksr-service-icon {
          background: #b28738;
          color: #fff;
          transform: translateY(-2px);
        }

        /* CONTENT */

        .ksr-service-content {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .ksr-service-content h3 {
          margin: 0 0 9px;

          font-family:
            var(--font-display),
            "Sora",
            sans-serif;

          font-size: 13px;
          line-height: 1.4;
          font-weight: 600;

          color: #09213d;
        }

        .ksr-service-content p {
          margin: 0;
          max-width: 330px;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.65;

          color: #6f685e;
        }

        /* ACTION */

        .ksr-service-action {
          display: inline-flex;
          align-items: center;
          gap: 6px;

          width: fit-content;

          margin-top: auto;
          padding-top: 17px;

          color: #ae8130;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 500;

          transition:
            color 0.25s ease,
            gap 0.25s ease;
        }

        .ksr-service-card:hover .ksr-service-action {
          color: #09213d;
          gap: 10px;
        }

        /* BOTTOM */

        .ksr-services-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 30px;

          margin-top: 34px;
          padding-top: 22px;

          border-top:
            1px solid
            rgba(9, 33, 61, 0.12);
        }

        .ksr-services-bottom-left {
          display: flex;
          align-items: center;
          gap: 10px;

          color: #a27a32;
        }

        .ksr-services-bottom-left span {
          font-family: "Inter", sans-serif;

          font-size: 9px;
          font-weight: 600;

          letter-spacing: 0.16em;

          color: #81796d;
        }

        .ksr-services-bottom-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          color: #09213d;

          text-decoration: none;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 500;

          transition:
            color 0.25s ease,
            gap 0.25s ease;
        }

        .ksr-services-bottom-link:hover {
          color: #a67a2c;
          gap: 11px;
        }

        /* ANIMATION */

        @keyframes ksrServiceReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* TABLET */

        @media (max-width: 900px) {

          .ksr-services {
            padding: 85px 0;
          }

          .ksr-services-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 18px;
          }

        }

        /* MOBILE */

        @media (max-width: 640px) {

          .ksr-services {
            padding: 70px 0;
          }

          .ksr-services-container {
            width: calc(100% - 32px);
          }

          .ksr-services-top {
            flex-direction: column;
            align-items: flex-start;

            gap: 22px;
            margin-bottom: 34px;
          }

          .ksr-services-heading h2 {
            font-size: 2.15rem;
            line-height: 1.13;
          }

          .ksr-services-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .ksr-service-card {
            min-height: 180px;
            padding: 20px;
          }

          .ksr-service-content h3 {
            font-size: 14px;
          }

          .ksr-service-content p {
            max-width: 100%;
            font-size: 11px;
          }

          .ksr-services-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .ksr-services-bottom-left span {
            font-size: 8px;
            letter-spacing: 0.12em;
          }

        }

        /* SMALL MOBILE */

        @media (max-width: 380px) {

          .ksr-services-heading h2 {
            font-size: 1.9rem;
          }

          .ksr-service-card {
            padding: 18px;
          }

        }

      `}</style>
    </section>
  );
}