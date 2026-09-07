import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import KSRAdvisor from "./components/KSRAdvisor";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Construction from "./pages/Construction";
import EMICalculator from "./pages/EMICalculator";
import LegalLoanSupport from "./pages/LegalLoanSupport";
import PropertyValuation from "./pages/PropertyValuation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import PropertyDetail from "./pages/PropertyDetail";

// ADMIN PAGE
import Admin from "./pages/Admin";

import PropertyModal from "./components/PropertyModal";
import AuthModal from "./components/AuthModal";
import PostPropertyModal from "./components/PostPropertyModal";


/* =========================================================
   SMOOTH SCROLL / HASH
========================================================= */

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
          const headerH =
            parseInt(
              getComputedStyle(
                document.documentElement
              ).getPropertyValue("--ksr-header-h")
            ) || 112;

          const top =
            element.getBoundingClientRect().top +
            window.scrollY -
            headerH -
            10;

          window.scrollTo({
            top,
            behavior: "smooth",
          });
        }
      }, 200);

      return () => clearTimeout(timer);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [hash, pathname]);

  return null;
}


/* =========================================================
   PAGE WRAPPER
========================================================= */

function PageWrapper({ children }) {
  return (
    <main className="main-content">
      {children}
    </main>
  );
}


/* =========================================================
   APP CONTENT
========================================================= */

function AppContent() {
  const location = useLocation();

  const [selectedProperty, setSelectedProperty] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPhone, setUserPhone] = useState("");

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);

  const [postType, setPostType] = useState("property");


  // CHECK IF CURRENT PAGE IS ADMIN
  const isAdminPage = location.pathname.startsWith("/admin");


  /* =======================================================
     LOGIN RESTORE + HEADER HEIGHT
  ======================================================= */

  useEffect(() => {
    const savedPhone = localStorage.getItem("ksr_user_phone");

    if (savedPhone) {
      setIsLoggedIn(true);
      setUserPhone(savedPhone);
    }

    const updateHeaderH = () => {
      const header = document.querySelector(".ksr-header");

      if (header) {
        document.documentElement.style.setProperty(
          "--ksr-header-h",
          `${header.offsetHeight}px`
        );
      }
    };

    updateHeaderH();

    window.addEventListener("resize", updateHeaderH);

    return () => {
      window.removeEventListener("resize", updateHeaderH);
    };
  }, []);


  /* =======================================================
     LOGIN SUCCESS
  ======================================================= */

  const handleLoginSuccess = (phone) => {
    setIsLoggedIn(true);
    setUserPhone(phone);

    localStorage.setItem("ksr_user_phone", phone);

    setShowAuthModal(false);
    setShowPostModal(true);
  };


  /* =======================================================
     LOGOUT
  ======================================================= */

  const handleLogout = () => {
    localStorage.removeItem("ksr_user_phone");

    setIsLoggedIn(false);
    setUserPhone("");
  };


  return (
    <>
      <ScrollToHash />

      <div className="app-container">

        {/* HEADER - HIDE ON ADMIN */}

        {!isAdminPage && (
          <Header
            isLoggedIn={isLoggedIn}
            userPhone={userPhone}
            onLogout={handleLogout}
            onOpenAuth={() => setShowAuthModal(true)}
            onOpenPost={(type) => {
              setPostType(type);

              if (isLoggedIn) {
                setShowPostModal(true);
              } else {
                setShowAuthModal(true);
              }
            }}
          />
        )}


        {/* PAGES */}

        {isAdminPage ? (
          <Routes>
            <Route
              path="/admin"
              element={<Admin />}
            />
          </Routes>
        ) : (
          <PageWrapper>
            <Routes>

              {/* HOME */}

              <Route
                path="/"
                element={
                  <Home
                    onOpenProperty={setSelectedProperty}
                  />
                }
              />


              {/* SEARCH */}

              <Route
                path="/search"
                element={
                  <Search
                    onOpenProperty={setSelectedProperty}
                  />
                }
              />


              {/* PROPERTY SEARCH */}

              <Route
                path="/property"
                element={
                  <Search
                    onOpenProperty={setSelectedProperty}
                  />
                }
              />


              {/* CONSTRUCTION */}

              <Route
                path="/services/construction"
                element={<Construction />}
              />


              {/* EMI CALCULATOR */}

              <Route
                path="/services/emi-calculator"
                element={<EMICalculator />}
              />


              {/* LEGAL / LOAN SUPPORT */}

              <Route
                path="/services/legal"
                element={<LegalLoanSupport />}
              />


              {/* PROPERTY VALUATION */}

              <Route
                path="/services/valuation"
                element={<PropertyValuation />}
              />


              {/* ABOUT */}

              <Route
                path="/about"
                element={<About />}
              />


              {/* CONTACT */}

              <Route
                path="/contact"
                element={<Contact />}
              />


              {/* BLOGS */}

              <Route
                path="/blogs"
                element={<Blogs />}
              />

              <Route
                path="/blog"
                element={<Blogs />}
              />

              <Route
                path="/resources"
                element={<Blogs />}
              />


              {/* BUILDER LOUNGE */}

              <Route
                path="/builder-lounge"
                element={
                  <Navigate
                    to="/#builder-lounge"
                    replace
                  />
                }
              />


              {/* CONSULTANT LOUNGE */}

              <Route
                path="/consultant-lounge"
                element={
                  <Navigate
                    to="/#consultant-lounge"
                    replace
                  />
                }
              />


              {/* PROPERTY DETAIL */}

              <Route
                path="/property/:slug"
                element={<PropertyDetail />}
              />

            </Routes>
          </PageWrapper>
        )}


        {/* FOOTER - HIDE ON ADMIN */}

        {!isAdminPage && <Footer />}


        {/* PROPERTY MODAL */}

        {!isAdminPage && selectedProperty && (
          <PropertyModal
            property={selectedProperty}
            onClose={() => setSelectedProperty(null)}
          />
        )}


        {/* AUTH MODAL */}

        {!isAdminPage && showAuthModal && (
          <AuthModal
            onClose={() => setShowAuthModal(false)}
            onLoginSuccess={handleLoginSuccess}
          />
        )}


        {/* POST PROPERTY MODAL */}

        {!isAdminPage && showPostModal && (
          <PostPropertyModal
            onClose={() => setShowPostModal(false)}
            userPhone={userPhone}
            initialType={postType}
          />
        )}


        {/* KSR ADVISOR - HIDE ON ADMIN */}

        {!isAdminPage && <KSRAdvisor />}

      </div>
    </>
  );
}


/* =========================================================
   MAIN APP
========================================================= */

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
      {/* =====================================================
          GLOBAL APP CSS
      ===================================================== */}

      <style>{`

        /* ===================================================
           ROOT
        =================================================== */

        :root {
          --ksr-header-h: 112px;
        }

        /* ===================================================
           RESET
        =================================================== */

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          background: #050d1a;
          overflow-x: hidden;
        }

        #root {
          width: 100%;
          min-height: 100vh;
        }

        /* ===================================================
           APP
        =================================================== */

        .app-container {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          overflow-x: hidden;
          position: relative;
        }

        /* ===================================================
           MAIN CONTENT
        =================================================== */

        .main-content {
          width: 100%;
          flex: 1 0 auto;
          display: block;
          min-height: auto;
          padding: 0;
          margin: 0;
        }

        .main-content > * {
          width: 100%;
          max-width: 100%;
          flex: none;
        }

        /* ===================================================
           HEADER OFFSET
        =================================================== */

        .main-content {
          padding-top: var(--ksr-header-h);
        }

        /* ===================================================
           COMMON PAGE SECTION
        =================================================== */

        .page-section {
          width: 100%;
          min-height: auto;
          height: auto;
          box-sizing: border-box;
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .main-content section {
          width: 100%;
          min-height: auto;
          height: auto;
          box-sizing: border-box;
        }

        /* ===================================================
           SECTION SPACING
        =================================================== */

        .section-y {
          padding-top: 80px;
          padding-bottom: 80px;
        }

        /* ===================================================
           FOOTER
        =================================================== */

        .ksr-footer {
          width: 100%;
          flex-shrink: 0;
        }

        /* ===================================================
           MEDIA
        =================================================== */

        img,
        video,
        svg {
          max-width: 100%;
        }

        /* ===================================================
           KSR ADVISOR GLOBAL LAYER
           
           These styles help ensure the advisor remains
           visible above page content.
        =================================================== */

        .ksr-advisor,
        .ksr-advisor-wrapper,
        .ksr-advisor-container {
          z-index: 9999;
        }

        /* ===================================================
           TABLET
        =================================================== */

        @media (max-width: 1050px) {

          :root {
            --ksr-header-h: 70px;
          }

          .page-section,
          .section-y {
            padding-top: 64px;
            padding-bottom: 64px;
          }

        }

        /* ===================================================
           MOBILE
        =================================================== */

        @media (max-width: 640px) {

          :root {
            --ksr-header-h: 66px;
          }

          .page-section,
          .section-y {
            padding-top: 50px;
            padding-bottom: 50px;
          }

        }

        /* ===================================================
           SMALL MOBILE
        =================================================== */

        @media (max-width: 390px) {

          :root {
            --ksr-header-h: 62px;
          }

          .page-section,
          .section-y {
            padding-top: 42px;
            padding-bottom: 42px;
          }

        }

        /* ===================================================
           REDUCED MOTION
        =================================================== */

        @media (prefers-reduced-motion: reduce) {

          html {
            scroll-behavior: auto;
          }

        }

      `}</style>
    </>
  );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}