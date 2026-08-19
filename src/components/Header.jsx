import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ksrInfo } from "../ksr-info";

/* =========================================================
   NAVIGATION
========================================================= */

const mainLinks = [
  { label: "Properties", to: "/property" },
  { label: "Consultant Lounge", to: "/#consultant-lounge" },
  { label: "Blogs", to: "/blogs" },
  { label: "About Us", to: "/about" },
];

const serviceLinks = [
  { label: "Buy Property", to: "/property?tab=buy" },
  { label: "Sell Property", to: "/property?tab=sell" },
 { label: "EMI Calculator", to: "/services/emi-calculator" },
  { label: "Construction", to: "/services/construction" },
  { label: "Legal & Loan Support", to: "/services/legal" },
  { label: "Property Valuation", to: "/services/valuation" },
];

/* =========================================================
   LOGO
========================================================= */

function Logo() {
  return (
    <svg
      viewBox="0 0 260 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ksr-logo-svg"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="8"
        fill="url(#goldGradHeader)"
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
          id="goldGradHeader"
          x1="2"
          y1="2"
          x2="46"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fffdf5" />
          <stop offset="0.45" stopColor="#d8b766" />
          <stop offset="1" stopColor="#a87b25" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* =========================================================
   ICONS
========================================================= */

function ChevronIcon({ open = false }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.25s ease",
      }}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function UserIcon() {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function LoginIcon() {
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
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  );
}

function PhoneIcon() {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 1 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="15"
      height="15"
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

function MenuIcon({ open }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </>
      ) : (
        <>
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </>
      )}
    </svg>
  );
}

/* =========================================================
   HEADER
========================================================= */

export default function Header({
  isLoggedIn,
  userPhone,
  onLogout,
  onOpenAuth,
  onOpenPost,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  /* =======================================================
     SCROLL
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     BODY SCROLL LOCK
  ======================================================= */

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =======================================================
     CLOSE MENUS
  ======================================================= */

  const closeMenus = () => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setMobileOpen(false);
    setProfileOpen(false);
  };

  /* =======================================================
     NAV CLASS
  ======================================================= */

  const navClass = ({ isActive }) =>
    `ksr-nav-link ${isActive ? "ksr-nav-active" : ""}`;

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className={`ksr-header ${
          scrolled ? "ksr-header-scrolled" : ""
        }`}
      >
        {/* ===================================================
            TOP BAR
        =================================================== */}

        <div
          className={`ksr-topbar ${
            scrolled ? "ksr-topbar-hidden" : ""
          }`}
        >
          <div className="ksr-topbar-inner">
            <div className="ksr-topbar-left">
              <a
                href={ksrInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ksr-top-link"
              >
                <LocationIcon />
                <span>{ksrInfo.address}</span>
              </a>

              <span className="ksr-top-trust">
                <ShieldIcon />
                <span>
                  Verified projects · VIP site visits · Zero brokerage
                </span>
              </span>
            </div>

            <div className="ksr-topbar-right">
              <a
                href={ksrInfo.phoneHref}
                className="ksr-top-phone"
              >
                <PhoneIcon />
                <span>{ksrInfo.phone}</span>
              </a>

              <Link
                to="/contact"
                className="ksr-top-contact"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* ===================================================
            MAIN BAR
        =================================================== */}

        <div className="ksr-mainbar">
          <div className="ksr-mainbar-inner">
            {/* LOGO */}

            <Link
              to="/"
              className="ksr-logo-link"
              onClick={closeMenus}
              aria-label="KSR Realty home"
            >
              <Logo />
            </Link>

            {/* =================================================
                DESKTOP NAV
            ================================================= */}

            <nav
              className="ksr-desktop-nav"
              aria-label="Main navigation"
            >
              {mainLinks.slice(0, 3).map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={navClass}
                  onClick={closeMenus}
                >
                  {link.label}
                </NavLink>
              ))}

              {/* SERVICES */}

              <div className="ksr-services-wrap">
                <button
                  type="button"
                  className={`ksr-nav-link ksr-service-button ${
                    servicesOpen ? "ksr-nav-active" : ""
                  }`}
                  onClick={() =>
                    setServicesOpen((prev) => !prev)
                  }
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  <span>Services</span>
                  <ChevronIcon open={servicesOpen} />
                </button>

                {servicesOpen && (
                  <div className="ksr-services-dropdown">
                    <div className="ksr-dropdown-heading">
                      OUR SERVICES
                    </div>

                    {serviceLinks.map((link) => (
                      <Link
                        key={link.label}
                        to={link.to}
                        onClick={closeMenus}
                        className="ksr-service-item"
                      >
                        <span>{link.label}</span>
                        <ArrowIcon />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* BLOGS + ABOUT */}

              {mainLinks.slice(3).map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={navClass}
                  onClick={closeMenus}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* =================================================
                DESKTOP ACTIONS
            ================================================= */}

            <div className="ksr-header-actions">
              {isLoggedIn ? (
                <div className="ksr-profile-wrap">
                  <button
                    type="button"
                    className="ksr-profile-button"
                    onClick={() =>
                      setProfileOpen((prev) => !prev)
                    }
                    aria-expanded={profileOpen}
                  >
                    <span className="ksr-user-icon">
                      <UserIcon />
                    </span>

                    <span className="ksr-user-phone">
                      {userPhone}
                    </span>

                    <ChevronIcon open={profileOpen} />
                  </button>

                  {profileOpen && (
                    <div className="ksr-profile-dropdown">
                      <button
                        type="button"
                        onClick={() => {
                          onOpenPost("property");
                          setProfileOpen(false);
                        }}
                      >
                        <span>🏡</span>
                        <span>Post Property</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          onOpenPost("requirement");
                          setProfileOpen(false);
                        }}
                      >
                        <span>🔍</span>
                        <span>Post Requirement</span>
                      </button>

                      <div className="ksr-dropdown-divider" />

                      <button
                        type="button"
                        className="ksr-logout"
                        onClick={() => {
                          onLogout();
                          setProfileOpen(false);
                        }}
                      >
                        <span>↪</span>
                        <span>Sign Out</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  type="button"
                  className="ksr-login-button"
                  onClick={onOpenAuth}
                >
                  <LoginIcon />
                  <span>Sign In/Post Property</span>
                </button>
              )}
            </div>

            {/* =================================================
                MOBILE BUTTON
            ================================================= */}

            <button
              type="button"
              className="ksr-mobile-toggle"
              onClick={() => {
                setMobileOpen((prev) => !prev);
                setMobileServicesOpen(false);
                setProfileOpen(false);
              }}
              aria-label={
                mobileOpen ? "Close menu" : "Open menu"
              }
              aria-expanded={mobileOpen}
            >
              <MenuIcon open={mobileOpen} />
            </button>
          </div>

          {/* =================================================
              MOBILE MENU
          ================================================= */}

          <div
            className={`ksr-mobile-menu ${
              mobileOpen ? "ksr-mobile-menu-open" : ""
            }`}
          >
            <div className="ksr-mobile-inner">
              {/* MOBILE LOGIN */}

              {isLoggedIn ? (
                <div className="ksr-mobile-user">
                  <div className="ksr-mobile-user-info">
                    <span className="ksr-mobile-user-icon">
                      <UserIcon />
                    </span>

                    <span>{userPhone}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      onLogout();
                      closeMenus();
                    }}
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="ksr-mobile-login"
                  onClick={() => {
                    onOpenAuth();
                    closeMenus();
                  }}
                >
                  <LoginIcon />
                  <span>Sign In</span>
                </button>
              )}

              {/* MOBILE NAV */}

              <div className="ksr-mobile-links">
                {mainLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={closeMenus}
                    className="ksr-mobile-link"
                  >
                    <span>{link.label}</span>
                    <ArrowIcon />
                  </Link>
                ))}

                {/* MOBILE SERVICES */}

                <button
                  type="button"
                  className="ksr-mobile-link ksr-mobile-service-button"
                  onClick={() =>
                    setMobileServicesOpen((prev) => !prev)
                  }
                  aria-expanded={mobileServicesOpen}
                >
                  <span>Services</span>
                  <ChevronIcon open={mobileServicesOpen} />
                </button>

                {mobileServicesOpen && (
                  <div className="ksr-mobile-services">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.label}
                        to={link.to}
                        onClick={closeMenus}
                        className="ksr-mobile-service-item"
                      >
                        <span>{link.label}</span>
                        <ArrowIcon />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* MOBILE CONTACT */}

              <div className="ksr-mobile-bottom">
                <a
                  href={ksrInfo.phoneHref}
                  className="ksr-mobile-phone"
                >
                  <PhoneIcon />
                  <span>{ksrInfo.phone}</span>
                </a>

                <Link
                  to="/contact"
                  onClick={closeMenus}
                  className="ksr-mobile-contact"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          HEADER CSS
      ===================================================== */}

      <style>{`

        /* =====================================================
           GLOBAL HEADER RESET
        ===================================================== */

        .ksr-header,
        .ksr-header *,
        .ksr-header *::before,
        .ksr-header *::after {
          box-sizing: border-box;
        }

        .ksr-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;

          width: 100vw !important;
          max-width: 100vw !important;

          margin: 0 !important;
          padding: 0 !important;

          z-index: 10000;

          overflow: visible;

          isolation: isolate;

          transition:
            box-shadow 0.3s ease,
            background 0.3s ease;
        }


        /* =====================================================
           SCROLLED
        ===================================================== */

        .ksr-header-scrolled {
          box-shadow:
            0 14px 40px rgba(0, 0, 0, 0.25),
            0 1px 0 rgba(201, 162, 75, 0.08);
        }


        /* =====================================================
           TOP BAR — FULL WIDTH
        ===================================================== */

        .ksr-topbar {
          width: 100vw !important;
          max-width: 100vw !important;

          height: 38px;

          margin: 0 !important;
          padding: 0 !important;

          overflow: hidden;

          background:
            linear-gradient(
              90deg,
              #07111e 0%,
              #0a192f 50%,
              #07111e 100%
            );

          border-bottom:
            1px solid rgba(201, 162, 75, 0.08);

          transition:
            height 0.3s ease,
            opacity 0.25s ease;

          position: relative;
          left: 0;
          right: 0;
        }


        /* =====================================================
           TOP BAR HIDDEN ON SCROLL
        ===================================================== */

        .ksr-topbar-hidden {
          height: 0 !important;
          opacity: 0;

          border-bottom: 0;

          pointer-events: none;
        }


        /* =====================================================
           TOP BAR INNER
        ===================================================== */

        .ksr-topbar-inner {
          width: min(
            1380px,
            calc(100% - 64px)
          );

          max-width: 1380px;

          height: 38px;

          margin: 0 auto !important;
          padding: 0;

          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 24px;

          min-width: 0;
        }


        /* =====================================================
           TOP BAR LEFT / RIGHT
        ===================================================== */

        .ksr-topbar-left,
        .ksr-topbar-right {
          display: flex;

          align-items: center;

          gap: 22px;

          min-width: 0;
        }


        /* =====================================================
           TOP LINKS
        ===================================================== */

        .ksr-top-link,
        .ksr-top-trust,
        .ksr-top-phone,
        .ksr-top-contact {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          font-size: 11px;

          line-height: 1;

          white-space: nowrap;

          text-decoration: none;
        }


        .ksr-top-link {
          color: var(--color-slate);

          transition:
            color 0.2s ease;
        }


        .ksr-top-link svg,
        .ksr-top-trust svg,
        .ksr-top-phone svg {
          color: var(--color-brass);

          flex: 0 0 auto;
        }


        .ksr-top-link:hover,
        .ksr-top-phone:hover {
          color: var(--color-paper);
        }


        .ksr-top-trust {
          color:
            rgba(180, 189, 208, 0.7);
        }


        .ksr-top-phone {
          color: var(--color-slate);
        }


        .ksr-top-contact {
          color: var(--color-brass);

          font-weight: 700;

          transition:
            color 0.2s ease;
        }


        .ksr-top-contact:hover {
          color: #f1d58b;
        }


        /* =====================================================
           MAIN BAR — FULL WIDTH
        ===================================================== */

        .ksr-mainbar {
          position: relative;

          width: 100vw !important;
          max-width: 100vw !important;

          margin: 0 !important;
          padding: 0 !important;

          background:
            linear-gradient(
              90deg,
              rgba(7, 17, 30, 0.98),
              rgba(10, 25, 47, 0.98),
              rgba(7, 17, 30, 0.98)
            );

          border-bottom:
            1px solid rgba(201, 162, 75, 0.13);

          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }


        .ksr-header-scrolled .ksr-mainbar {
          background:
            rgba(6, 15, 27, 0.97);

          border-bottom-color:
            rgba(201, 162, 75, 0.18);
        }


        /* =====================================================
           MAIN INNER
        ===================================================== */

        .ksr-mainbar-inner {
          width: min(
            1380px,
            calc(100% - 64px)
          );

          max-width: 1380px;

          min-height: 74px;

          margin: 0 auto !important;
          padding: 0;

          display: flex;

          align-items: center;

          gap: 22px;
        }


        /* =====================================================
           LOGO
        ===================================================== */

        .ksr-logo-link {
          position: relative;

          display: block;

          width: 218px;
          height: 48px;

          flex: 0 0 auto;

          text-decoration: none;

          transition:
            transform 0.25s ease;
        }


        .ksr-logo-link:hover {
          transform:
            translateY(-1px);
        }


        .ksr-logo-svg {
          display: block;

          width: 100%;
          height: 100%;
        }


        /* =====================================================
           DESKTOP NAV
        ===================================================== */

        .ksr-desktop-nav {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 4px;

          flex: 1 1 auto;

          min-width: 0;

          height: 100%;
        }


        /* =====================================================
           NAV LINK
        ===================================================== */

        .ksr-nav-link {
          position: relative;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 6px;

          min-height: 42px;

          padding:
            9px 13px;

          border: 0;

          background: transparent;

          color:
            rgba(216, 222, 232, 0.78);

          font-family: inherit;

          font-size: 13px;

          font-weight: 600;

          line-height: 1;

          text-decoration: none;

          white-space: nowrap;

          cursor: pointer;

          transition:
            color 0.2s ease,
            background 0.2s ease,
            transform 0.2s ease;
        }


        .ksr-nav-link::after {
          content: "";

          position: absolute;

          left: 12px;
          right: 12px;

          bottom: 3px;

          height: 1px;

          transform:
            scaleX(0);

          transform-origin:
            center;

          background:
            var(--color-brass);

          transition:
            transform 0.25s ease;
        }


        .ksr-nav-link:hover {
          color:
            var(--color-paper);

          background:
            rgba(255, 255, 255, 0.025);
        }


        .ksr-nav-link:hover::after,
        .ksr-nav-active::after {
          transform:
            scaleX(1);
        }


        .ksr-nav-active {
          color:
            var(--color-brass) !important;
        }


        .ksr-service-button {
          font-family: inherit;
        }


        /* =====================================================
           SERVICES
        ===================================================== */

        .ksr-services-wrap {
          position: relative;
        }


        .ksr-services-dropdown {
          position: absolute;

          top:
            calc(100% + 12px);

          left: 50%;

          width: 285px;

          padding: 10px;

          transform:
            translateX(-50%);

          background:
            linear-gradient(
              145deg,
              #101f33,
              #081321
            );

          border:
            1px solid rgba(
              201,
              162,
              75,
              0.2
            );

          border-radius: 14px;

          box-shadow:
            0 24px 60px
              rgba(0, 0, 0, 0.42),
            0 0 0 1px
              rgba(255, 255, 255, 0.02);

          animation:
            ksrDropdownIn
            0.2s ease;
        }


        @keyframes ksrDropdownIn {
          from {
            opacity: 0;

            transform:
              translate(
                -50%,
                -6px
              );
          }

          to {
            opacity: 1;

            transform:
              translate(
                -50%,
                0
              );
          }
        }


        .ksr-dropdown-heading {
          padding:
            8px 10px 9px;

          color:
            var(--color-brass);

          font-size: 9px;

          font-weight: 800;

          letter-spacing:
            0.2em;

          border-bottom:
            1px solid
            rgba(255, 255, 255, 0.07);

          margin-bottom: 5px;
        }


        .ksr-service-item {
          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 12px;

          padding:
            11px 12px;

          border-radius: 9px;

          color:
            rgba(242, 245, 250, 0.85);

          font-size: 12px;

          font-weight: 600;

          text-decoration: none;

          transition:
            color 0.2s ease,
            background 0.2s ease,
            transform 0.2s ease;
        }


        .ksr-service-item svg {
          opacity: 0;

          color:
            var(--color-brass);

          transform:
            translateX(-4px);

          transition:
            opacity 0.2s ease,
            transform 0.2s ease;
        }


        .ksr-service-item:hover {
          color:
            var(--color-paper);

          background:
            rgba(
              201,
              162,
              75,
              0.09
            );

          transform:
            translateX(2px);
        }


        .ksr-service-item:hover svg {
          opacity: 1;

          transform:
            translateX(0);
        }


        /* =====================================================
           ACTIONS
        ===================================================== */

        .ksr-header-actions {
          display: flex;

          align-items: center;
          justify-content: flex-end;

          flex: 0 0 auto;
        }


        .ksr-login-button,
        .ksr-profile-button {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 8px;

          height: 42px;

          padding:
            0 14px;

          border-radius: 999px;

          border:
            1px solid
            rgba(
              201,
              162,
              75,
              0.25
            );

          background:
            rgba(
              255,
              255,
              255,
              0.025
            );

          color:
            var(--color-paper);

          font-family: inherit;

          font-size: 12px;

          font-weight: 700;

          cursor: pointer;

          transition:
            background 0.2s ease,
            border-color 0.2s ease,
            transform 0.2s ease;
        }


        .ksr-login-button:hover,
        .ksr-profile-button:hover {
          background:
            rgba(
              201,
              162,
              75,
              0.08
            );

          border-color:
            rgba(
              201,
              162,
              75,
              0.5
            );

          transform:
            translateY(-1px);
        }


        .ksr-login-button svg,
        .ksr-profile-button svg {
          color:
            var(--color-brass);
        }


        .ksr-user-icon {
          display: grid;

          place-items: center;

          color:
            var(--color-brass);
        }


        .ksr-user-phone {
          max-width: 105px;

          overflow: hidden;

          text-overflow: ellipsis;

          white-space: nowrap;
        }


        /* =====================================================
           PROFILE
        ===================================================== */

        .ksr-profile-wrap {
          position: relative;
        }


        .ksr-profile-dropdown {
          position: absolute;

          top:
            calc(100% + 10px);

          right: 0;

          width: 210px;

          padding: 8px;

          border-radius: 13px;

          background: #fdfcf8;

          border:
            1px solid
            rgba(
              201,
              162,
              75,
              0.2
            );

          box-shadow:
            0 22px 50px
            rgba(0, 0, 0, 0.3);

          animation:
            ksrProfileIn
            0.2s ease;
        }


        @keyframes ksrProfileIn {
          from {
            opacity: 0;

            transform:
              translateY(-5px);
          }

          to {
            opacity: 1;

            transform:
              translateY(0);
          }
        }


        .ksr-profile-dropdown button {
          width: 100%;

          display: flex;

          align-items: center;

          gap: 10px;

          padding: 11px;

          border: 0;

          border-radius: 8px;

          background: transparent;

          color: #162235;

          font-family: inherit;

          font-size: 12px;

          font-weight: 650;

          text-align: left;

          cursor: pointer;

          transition:
            background 0.2s ease;
        }


        .ksr-profile-dropdown button:hover {
          background:
            rgba(
              201,
              162,
              75,
              0.1
            );
        }


        .ksr-profile-dropdown
          .ksr-logout {
          color: #b42318;
        }


        .ksr-dropdown-divider {
          height: 1px;

          background:
            #e9e6df;

          margin:
            5px 0;
        }


        /* =====================================================
           MOBILE TOGGLE
        ===================================================== */

        .ksr-mobile-toggle {
          display: none;

          width: 42px;
          height: 42px;

          align-items: center;
          justify-content: center;

          margin-left: auto;

          padding: 0;

          border:
            1px solid
            rgba(
              201,
              162,
              75,
              0.25
            );

          border-radius: 10px;

          background:
            rgba(
              255,
              255,
              255,
              0.035
            );

          color:
            var(--color-paper);

          cursor: pointer;

          transition:
            background 0.2s ease,
            border-color 0.2s ease;
        }


        .ksr-mobile-toggle:hover {
          background:
            rgba(
              201,
              162,
              75,
              0.1
            );

          border-color:
            rgba(
              201,
              162,
              75,
              0.5
            );
        }


        /* =====================================================
           MOBILE MENU
        ===================================================== */

        .ksr-mobile-menu {
          display: none;
        }


        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (min-width: 1600px) {

          .ksr-topbar-inner,
          .ksr-mainbar-inner {
            width: min(
              1480px,
              calc(100% - 80px)
            );

            max-width: 1480px;
          }

          .ksr-desktop-nav {
            gap: 7px;
          }

          .ksr-nav-link {
            padding-left: 15px;
            padding-right: 15px;
          }
        }


        /* =====================================================
           VERY LARGE DESKTOP
        ===================================================== */

        @media (min-width: 1800px) {

          .ksr-topbar-inner,
          .ksr-mainbar-inner {
            width: min(
              1520px,
              calc(100% - 100px)
            );

            max-width: 1520px;
          }

          .ksr-desktop-nav {
            gap: 9px;
          }

          .ksr-nav-link {
            padding-left: 17px;
            padding-right: 17px;
          }
        }


        /* =====================================================
           SMALL LAPTOP
        ===================================================== */

        @media (max-width: 1250px) {

          .ksr-topbar-inner,
          .ksr-mainbar-inner {
            width:
              calc(100% - 48px);

            max-width: 1100px;
          }

          .ksr-mainbar-inner {
            gap: 10px;
          }

          .ksr-logo-link {
            width: 195px;
          }

          .ksr-nav-link {
            padding-left: 7px;
            padding-right: 7px;

            font-size: 12px;
          }

          .ksr-login-button,
          .ksr-profile-button {
            padding-left: 11px;
            padding-right: 11px;
          }
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1050px) {

          .ksr-desktop-nav,
          .ksr-header-actions {
            display: none;
          }

          .ksr-mobile-toggle {
            display: inline-flex;
          }

          .ksr-mainbar-inner {
            min-height: 70px;
          }


          /* MOBILE MENU */

          .ksr-mobile-menu {
            display: block;

            max-height: 0;

            overflow: hidden;

            opacity: 0;

            background:
              linear-gradient(
                145deg,
                #0b1a2d,
                #06101d
              );

            border-top:
              1px solid transparent;

            transition:
              max-height 0.35s ease,
              opacity 0.25s ease,
              border-color 0.25s ease;
          }


          .ksr-mobile-menu-open {
            max-height:
              calc(100vh - 70px);

            opacity: 1;

            overflow-y: auto;

            border-top-color:
              rgba(
                201,
                162,
                75,
                0.13
              );
          }


          .ksr-mobile-inner {
            width: min(
              1100px,
              calc(100% - 48px)
            );

            max-width: 1100px;

            margin: 0 auto;

            padding-top: 14px;
            padding-bottom: 22px;
          }


          /* LOGIN */

          .ksr-mobile-user {
            display: flex;

            align-items: center;
            justify-content: space-between;

            gap: 12px;

            padding: 12px;

            margin-bottom: 8px;

            border:
              1px solid
              rgba(
                201,
                162,
                75,
                0.12
              );

            border-radius: 12px;

            background:
              rgba(
                255,
                255,
                255,
                0.025
              );
          }


          .ksr-mobile-user-info {
            display: flex;

            align-items: center;

            gap: 9px;

            min-width: 0;

            color:
              var(--color-paper);

            font-size: 13px;

            font-weight: 650;
          }


          .ksr-mobile-user-info
            > span:last-child {
            overflow: hidden;

            text-overflow: ellipsis;

            white-space: nowrap;
          }


          .ksr-mobile-user-icon {
            display: grid;

            place-items: center;

            color:
              var(--color-brass);

            flex: 0 0 auto;
          }


          .ksr-mobile-user > button {
            border: 0;

            background: transparent;

            color: #f87171;

            font-family: inherit;

            font-size: 11px;

            font-weight: 800;

            cursor: pointer;

            flex: 0 0 auto;
          }


          .ksr-mobile-login {
            width: 100%;

            display: flex;

            align-items: center;
            justify-content: center;

            gap: 8px;

            padding: 13px;

            margin-bottom: 10px;

            border:
              1px solid
              rgba(
                201,
                162,
                75,
                0.28
              );

            border-radius: 11px;

            background:
              rgba(
                201,
                162,
                75,
                0.06
              );

            color:
              var(--color-paper);

            font-family: inherit;

            font-size: 13px;

            font-weight: 750;

            cursor: pointer;
          }


          .ksr-mobile-login svg {
            color:
              var(--color-brass);
          }


          /* LINKS */

          .ksr-mobile-links {
            display: flex;

            flex-direction: column;

            gap: 2px;
          }


          .ksr-mobile-link {
            width: 100%;

            min-height: 48px;

            display: flex;

            align-items: center;
            justify-content: space-between;

            gap: 15px;

            padding:
              11px 13px;

            border-radius: 10px;

            border: 0;

            background: transparent;

            color:
              rgba(
                245,
                247,
                250,
                0.88
              );

            font-family: inherit;

            font-size: 13px;

            font-weight: 650;

            text-decoration: none;

            text-align: left;

            cursor: pointer;

            transition:
              background 0.2s ease,
              color 0.2s ease;
          }


          .ksr-mobile-link:hover {
            background:
              rgba(
                201,
                162,
                75,
                0.08
              );

            color:
              var(--color-brass);
          }


          .ksr-mobile-service-button {
            justify-content:
              space-between;
          }


          /* MOBILE SERVICES */

          .ksr-mobile-services {
            margin:
              0 8px 5px;

            padding: 6px;

            border-left:
              1px solid
              rgba(
                201,
                162,
                75,
                0.25
              );

            background:
              rgba(
                255,
                255,
                255,
                0.018
              );

            border-radius:
              0 10px 10px 0;
          }


          .ksr-mobile-service-item {
            display: flex;

            align-items: center;
            justify-content: space-between;

            gap: 10px;

            padding:
              11px 12px;

            color:
              rgba(
                225,
                230,
                238,
                0.75
              );

            font-size: 12px;

            font-weight: 600;

            text-decoration: none;

            border-radius: 7px;
          }


          .ksr-mobile-service-item svg {
            width: 14px;
            height: 14px;

            color:
              var(--color-brass);
          }


          .ksr-mobile-service-item:hover {
            background:
              rgba(
                201,
                162,
                75,
                0.08
              );

            color:
              var(--color-brass);
          }


          /* MOBILE BOTTOM */

          .ksr-mobile-bottom {
            display: grid;

            grid-template-columns:
              1fr 1fr;

            gap: 9px;

            margin-top: 14px;

            padding-top: 14px;

            border-top:
              1px solid
              rgba(
                255,
                255,
                255,
                0.07
              );
          }


          .ksr-mobile-phone,
          .ksr-mobile-contact {
            display: flex;

            align-items: center;
            justify-content: center;

            gap: 7px;

            min-height: 46px;

            padding: 10px;

            border-radius: 10px;

            font-size: 12px;

            font-weight: 750;

            text-decoration: none;
          }


          .ksr-mobile-phone {
            border:
              1px solid
              rgba(
                201,
                162,
                75,
                0.18
              );

            color:
              var(--color-slate);
          }


          .ksr-mobile-phone svg {
            color:
              var(--color-brass);
          }


          .ksr-mobile-contact {
            background:
              var(--color-brass);

            color:
              #111923;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 640px) {

          .ksr-topbar {
            display: none;
          }


          .ksr-mainbar-inner {
            width:
              calc(100% - 28px);

            max-width: none;

            min-height: 66px;

            gap: 8px;
          }


          .ksr-logo-link {
            width: 185px;
            height: 45px;
          }


          .ksr-mobile-toggle {
            width: 40px;
            height: 40px;
          }


          .ksr-mobile-menu-open {
            max-height:
              calc(100vh - 66px);
          }


          .ksr-mobile-inner {
            width:
              calc(100% - 28px);

            max-width: none;
          }


          .ksr-mobile-bottom {
            grid-template-columns: 1fr;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 390px) {

          .ksr-mainbar-inner {
            width:
              calc(100% - 22px);

            min-height: 62px;
          }


          .ksr-logo-link {
            width: 170px;
            height: 42px;
          }


          .ksr-mobile-toggle {
            width: 38px;
            height: 38px;
          }


          .ksr-mobile-menu-open {
            max-height:
              calc(100vh - 62px);
          }


          .ksr-mobile-inner {
            width:
              calc(100% - 22px);

            padding-left: 0;
            padding-right: 0;
          }
        }


        /* =====================================================
           TOUCH DEVICES
        ===================================================== */

        @media (hover: none) {

          .ksr-logo-link:hover,
          .ksr-login-button:hover,
          .ksr-profile-button:hover {
            transform: none;
          }


          .ksr-service-item:hover {
            transform: none;
          }
        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .ksr-header,
          .ksr-topbar,
          .ksr-nav-link,
          .ksr-service-item,
          .ksr-mobile-menu,
          .ksr-profile-dropdown,
          .ksr-logo-link {
            transition: none !important;

            animation: none !important;
          }
        }


        /* =====================================================
           FINAL FULL-WIDTH SAFETY
        ===================================================== */

        .ksr-header {
          margin-left: 0 !important;
          margin-right: 0 !important;
        }


        .ksr-topbar,
        .ksr-mainbar {
          margin-left: 0 !important;
          margin-right: 0 !important;
        }


        /* Prevent any global .container-trs
           from shrinking the outer header */

        .ksr-header .container-trs {
          box-sizing: border-box;
        }


        /* =====================================================
           LARGE DESKTOP CONTENT
        ===================================================== */

        @media (min-width: 1400px) {

          .ksr-topbar-left,
          .ksr-topbar-right {
            gap: 26px;
          }
        }

      `}</style>
    </>
  );
}