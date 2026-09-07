import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ShortlistModal from "../components/ShortlistModal";

import HeroSection from "../components/HeroSection";
import FeaturedProperties from "../components/FeaturedProperties";
import HowKsrWorks from "../components/HowKsrWorks";
import ArtOfLiving from "../components/ArtOfLiving";
import FounderDesk from "../components/FounderDesk";
import AwardsRecognition from "../components/AwardsRecognition";
import WhyKSR from "../components/WhyKSR";
import TrackRecord from "../components/TrackRecord";

import ServicesSection from "../components/ServicesSection";
import ConsultantLounge from "../components/ConsultantLounge";
import FAQSection from "../components/FAQSection";

import propertiesDb from "../properties-db";

/* =========================================================
   PARTNER LOGOS
========================================================= */

const partnerLogos = [
  {
    name: "UltraTech Cement",
    file: "ultratech.svg",
  },
  {
    name: "Tata Steel",
    file: "tata.svg",
  },
  {
    name: "Asian Paints",
    file: "asianpaints.svg",
  },
  {
    name: "Havells",
    file: "havells.svg",
  },
  {
    name: "Jaquar Group",
    file: "jaquar.svg",
  },
  {
    name: "Pidilite",
    file: "pidilite.svg",
  },
  {
    name: "CenturyPly",
    file: "centuryply.svg",
  },
  {
    name: "Godrej",
    file: "godrej.svg",
  },
  

];

/* =========================================================
   FAQ SEO DATA
========================================================= */

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does KSR charge brokerage?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Zero brokerage for buyers. We are compensated by the developer or landlord — our advisory is free for you as a buyer or tenant.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I get an advisor on WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Our team replies within 15 minutes during working hours (9AM–8PM, 7 days a week). An advisor, not a bot, picks up every conversation.",
      },
    },
    {
      "@type": "Question",
      name: "What localities does KSR cover in Indore?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "KSR Realty Ventures works across Indore, with major areas including Nipania, Bypass, Kanadia, Bicholi Mardana, Palasia, Super Corridor, Indore-Ujjain Road, Khandwa Road, Mahalaxmi, and the surrounding growth corridor.",
      },
    },
    {
      "@type": "Question",
      name: "I want to invest outside Indore, can you help?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes, we work in all major cities including Bhopal, Thane, Mumbai, Bangalore, and Gurgaon.",
      },
    },
  ],
};

/* =========================================================
   PROPERTY SLUG
========================================================= */

function createPropertySlug(name = "") {
  return name
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* =========================================================
   PROPERTY MATCHING
========================================================= */

function findProperty(propertyName) {
  if (!propertyName || !Array.isArray(propertiesDb)) {
    return null;
  }

  const cardName = propertyName
    .toString()
    .trim()
    .toLowerCase();

  /* Exact match */
  const exactMatch = propertiesDb.find(
    (property) =>
      property?.name?.toString().trim().toLowerCase() === cardName
  );

  if (exactMatch) {
    return exactMatch;
  }

  /* Aliases */
  const aliases = {
    kingsvilla: "Emerald Kings Villa",
    crescent: "Emerald Crescent",
    gateway: "Emerald Gateway",
    "horizon tower": "Emerald Horizon",
  };

  if (aliases[cardName]) {
    const aliasMatch = propertiesDb.find(
      (property) =>
        property?.name?.toString().trim().toLowerCase() ===
        aliases[cardName].toLowerCase()
    );

    if (aliasMatch) {
      return aliasMatch;
    }
  }

  /* Partial match */
  return (
    propertiesDb.find((property) => {
      const dbName = property?.name
        ?.toString()
        .trim()
        .toLowerCase();

      if (!dbName) {
        return false;
      }

      return (
        dbName.includes(cardName) ||
        cardName.includes(dbName)
      );
    }) || null
  );
}

/* =========================================================
   HOME
========================================================= */

export default function Home({ onOpenProperty }) {
  const navigate = useNavigate();

  /* =======================================================
     SEARCH STATE
  ======================================================= */

  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("");
  const [activeTab, setActiveTab] = useState("buy");
  const [subTab, setSubTab] = useState("all");

  /* =======================================================
     ADVISOR STATE
  ======================================================= */

  const [advisorName, setAdvisorName] = useState("");
  const [advisorPhone, setAdvisorPhone] = useState("");
  const [advisorRole, setAdvisorRole] = useState("Buyer");
  const [advisorSubmitted, setAdvisorSubmitted] = useState(false);

  /* =======================================================
     ADVISOR FORM
  ======================================================= */

  const handleAdvisorSubmit = (event) => {
    event.preventDefault();

    const name = advisorName.trim();
    const phone = advisorPhone.trim();

    if (!name || !phone) {
      return;
    }

    const submission = {
      id: `sl_${Date.now()}`,
      name,
      phone,
      email: "",
      requirement: `Seeking advisory shortlist. Role: ${advisorRole}`,
      date: new Date().toLocaleString(),
    };

    try {
      const storedData = localStorage.getItem(
        "ksr_shortlist_submissions"
      );

      const existingSubmissions = storedData
        ? JSON.parse(storedData)
        : [];

      const updatedSubmissions = Array.isArray(existingSubmissions)
        ? [...existingSubmissions, submission]
        : [submission];

      localStorage.setItem(
        "ksr_shortlist_submissions",
        JSON.stringify(updatedSubmissions)
      );
    } catch (error) {
      console.error(
        "Unable to save shortlist enquiry:",
        error
      );
    }

    setAdvisorSubmitted(true);
    setAdvisorName("");
    setAdvisorPhone("");
  };

  /* =======================================================
     PROPERTY CARD CLICK
  ======================================================= */

  const handleCardClick = (propertyName) => {
    const property = findProperty(propertyName);

    if (!property) {
      console.warn("Property not found:", propertyName);
      return;
    }

    if (typeof onOpenProperty === "function") {
      onOpenProperty(property);
      return;
    }

    const slug = createPropertySlug(property.name);

    if (!slug) {
      return;
    }

    navigate(`/property/${slug}`);
  };

  /* =======================================================
     SEARCH
  ======================================================= */

  const handleSearch = (event) => {
    event?.preventDefault();

    const params = new URLSearchParams();

    if (searchQuery.trim()) {
      params.set("query", searchQuery.trim());
    }

    if (searchType) {
      params.set("type", searchType);
    }

    if (activeTab) {
      params.set("tab", activeTab);
    }

    if (subTab) {
      params.set("subtab", subTab);
    }

    const queryString = params.toString();

    navigate(
      queryString
        ? `/search?${queryString}`
        : "/search"
    );
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main className="w-full overflow-x-hidden">

      {/* ===================================================
          SEO FAQ SCHEMA
      =================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* ===================================================
          01. HERO
      =================================================== */}

      <HeroSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        subTab={subTab}
        setSubTab={setSubTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchType={searchType}
        setSearchType={setSearchType}
        handleSearch={handleSearch}
      />

      {/* ===================================================
          02. FEATURED PROPERTIES
      =================================================== */}

      <FeaturedProperties
        handleCardClick={handleCardClick}
      />

      {/* ===================================================
          03. HOW KSR WORKS
      =================================================== */}

      <HowKsrWorks />
      
      {/* ===================================================
          04. ART OF LIVING
      =================================================== */}

        <ArtOfLiving />

      {/* ===================================================
          05. FOUNDER DESK
      =================================================== */}

      <FounderDesk />

      {/* ===================================================
          06. AWARDS & RECOGNITION
      =================================================== */}

      <AwardsRecognition
        partnerLogos={partnerLogos}
      />

      {/* ===================================================
          07. WHY KSR
      =================================================== */}

      <WhyKSR />

      {/* ===================================================
          08. TRACK RECORD
      =================================================== */}

      <TrackRecord
        partnerLogos={partnerLogos}
      />

      
      {/* ===================================================
          08. TRACK RECORD
      =================================================== */}

      <ServicesSection
        partnerLogos={partnerLogos}
      />


      {/* ===================================================
          09. CONSULTANT LOUNGE
      =================================================== */}

      <ConsultantLounge
        advisorName={advisorName}
        setAdvisorName={setAdvisorName}
        advisorPhone={advisorPhone}
        setAdvisorPhone={setAdvisorPhone}
        advisorRole={advisorRole}
        setAdvisorRole={setAdvisorRole}
        advisorSubmitted={advisorSubmitted}
        setAdvisorSubmitted={setAdvisorSubmitted}
        handleAdvisorSubmit={handleAdvisorSubmit}
      />

      {/* ===================================================
          10. FAQ
      =================================================== */}

      <FAQSection />

      {/* ===================================================
          11. SHORTLIST MODAL
      =================================================== */}

      <ShortlistModal />

    </main>
  );
}