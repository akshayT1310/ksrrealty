
import React, { useState } from "react";

const faqs = [
  {
    q: "How do I buy a property through KSR Realty Ventures in Indore?",
    a: "To buy a property in Indore through KSR Realty Ventures, browse verified listings of flats, villas, plots, and commercial spaces. You can schedule a site visit, and our team can assist with property selection, price negotiation, documentation, and the buying process.",
  },
  {
    q: "How can I list my property for sale or rent?",
    a: "You can list your property for sale or rent with KSR Realty Ventures by sharing the property details and photographs. Our team can assist with property verification, marketing, buyer or tenant enquiries, and site visit coordination.",
  },
  {
    q: "Are the property listings verified?",
    a: "KSR Realty Ventures aims to provide verified property information and assists buyers with property details, ownership documentation, location information, and due diligence before a purchase decision.",
  },
  {
    q: "Do you help with home loans?",
    a: "Yes, KSR Realty Ventures can assist buyers with home loan guidance and connect them with suitable banking and financial options based on eligibility and property requirements.",
  },
  {
    q: "Which areas of Indore does KSR Realty Ventures cover?",
    a: "KSR Realty Ventures assists with residential and commercial properties across Indore, including areas such as Vijay Nagar, Super Corridor, MR 10, MR 11, Nipania, Rau, Khandwa Road, AB Road, Dewas Naka, Bypass Road, and Ujjain Road.",
  },
  {
    q: "I want to invest outside Indore, can you help?",
    a: "Yes, KSR Realty Ventures can assist with property investment opportunities outside Indore, including selected locations in Madhya Pradesh. Our team can help you evaluate property options based on your investment goals and budget.",
  },
  {
    q: "Are there any charges for buyers?",
    a: "Service charges or brokerage, where applicable, are communicated transparently before proceeding with a property transaction. The applicable terms may vary depending on the property and type of service.",
  },
  {
    q: "Can I schedule a site visit before buying?",
    a: "Yes, you can schedule a property site visit before making a purchase decision. A site visit helps you evaluate the property's location, condition, amenities, connectivity, and suitability for your requirements.",
  },
  {
    q: "Do you deal in commercial and investment properties?",
    a: "Yes, KSR Realty Ventures assists with commercial and investment properties, including shops, offices, showrooms, and other investment opportunities in Indore and selected surrounding locations.",
  },
];

export default function FAQSection() {
  // Only one FAQ index can be stored here.
  const [open, setOpen] = useState(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://ksrrealtyventures.com/#faq",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const FAQItem = ({ item, index }) => {
    const isOpen = open === index;

    const handleClick = () => {
      // Same question click = close
      // Another question click = automatically close old and open new
      setOpen(isOpen ? null : index);
    };

    return (
      <article
        itemScope
        itemType="https://schema.org/Question"
      >
        <h3 itemProp="name" className="m-0">
          <button
            type="button"
            onClick={handleClick}
            aria-expanded={isOpen}
            aria-controls={`faq-answer-${index}`}
            className="w-full flex items-start justify-between gap-4 py-5 text-left group"
          >
            {/* QUESTION */}
            <span
              className="font-medium text-[14px] md:text-[15px] lg:text-[16px] leading-[1.5] transition-colors group-hover:text-[var(--color-brass)]"
              style={{
                color: "var(--color-ink)",
              }}
            >
              {item.q}
            </span>

            {/* ARROW */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              className={`shrink-0 mt-1 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              style={{
                color: "var(--color-taupe)",
              }}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </h3>

        {/* ANSWER - ONLY SHOW WHEN OPEN */}
        {isOpen && (
          <div
            id={`faq-answer-${index}`}
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <p
              itemProp="text"
              className="text-[11px] md:text-[11px] leading-[1.75] pb-5 pr-8 -mt-1"
              style={{
                color: "var(--color-ink)",
                opacity: 0.65,
              }}
            >
              {item.a}
            </p>
          </div>
        )}
      </article>
    );
  };

  return (
    <section
      className="section-y"
      id="faq"
      aria-labelledby="faq-heading"
      style={{
        background: "var(--color-limestone)",
      }}
    >
      {/* FAQ SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="container-trs">

        {/* HEADING */}
        <header className="mb-10">
          <p
            className="label-upper mb-3"
            style={{
              color: "var(--color-brass)",
            }}
          >
            
          </p>

          <h2
            id="faq-heading"
            className="font-display font-medium leading-tight max-w-lg"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--color-ink)",
            }}
          >
            Frequently Asked Questions 
          </h2>
        </header>

        {/* FAQ GRID */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">

          {/* LEFT COLUMN */}
          <div className="divide-y divide-[var(--color-hairline)]">
            {faqs.slice(0, 5).map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                index={index}
              />
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="divide-y divide-[var(--color-hairline)]">
            {faqs.slice(5).map((item, index) => {
              const actualIndex = index + 5;

              return (
                <FAQItem
                  key={actualIndex}
                  item={item}
                  index={actualIndex}
                />
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
