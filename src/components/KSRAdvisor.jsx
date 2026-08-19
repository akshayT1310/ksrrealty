import React, { useState } from "react";
import "./KSRAdvisor.css";

export default function KSRAdvisor() {
  const [open, setOpen] = useState(true);

  const whatsappNumber = "917470750708";
  const phoneNumber = "+917470750708";

  const whatsappMessage = encodeURIComponent(
    "Hello KSR Advisor, I am interested in your property advisory services."
  );

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const makeCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="ksr-advisor-widget">

      {/* POPUP */}
      {open && (
        <div className="ksr-advisor-popup">

          <button
            type="button"
            className="ksr-advisor-close"
            onClick={() => setOpen(false)}
            aria-label="Close KSR Advisor"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6L18 18" />
            </svg>
          </button>

          {/* HEADER */}
          <div className="ksr-advisor-header">

            <div className="ksr-advisor-avatar">
              KSR
            </div>

            <div className="ksr-advisor-info">
              <div className="ksr-advisor-name">
                KSR Advisor
              </div>

              <div className="ksr-advisor-role">
                Property advisory specialist
              </div>
            </div>

          </div>

          {/* MESSAGE */}
          <div className="ksr-advisor-message">
            <span>
              Replies in minutes on WhatsApp. No spam
            </span>

            <p>
              an advisor, not a bot.
            </p>
          </div>

          {/* WHATSAPP BUTTON */}
          <button
            type="button"
            className="ksr-whatsapp-btn"
            onClick={openWhatsApp}
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-9 8.3 8.5 8.5 0 0 1-4.1-1l-4 1 1.1-3.8A8.5 8.5 0 1 1 21 11.5Z" />
              <path d="M8.5 9.5c.3 2 2 3.7 4 4" />
            </svg>

            <span>Chat on WhatsApp</span>
          </button>

        </div>
      )}

      {/* FLOATING BUTTONS */}
      <div className="ksr-advisor-actions">

        {/* WHATSAPP */}
        <button
          type="button"
          className="ksr-float-btn ksr-whatsapp-float"
          onClick={() => {
            if (!open) {
              setOpen(true);
            } else {
              openWhatsApp();
            }
          }}
          aria-label="Chat with KSR Advisor on WhatsApp"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-9 8.3 8.5 8.5 0 0 1-4.1-1l-4 1 1.1-3.8A8.5 8.5 0 1 1 21 11.5Z" />
            <path d="M8.5 9.5c.3 2 2 3.7 4 4" />
          </svg>
        </button>

        {/* CALL */}
        <button
          type="button"
          className="ksr-float-btn ksr-call-float"
          onClick={makeCall}
          aria-label="Call KSR Advisor"
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.1 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
          </svg>
        </button>

      </div>
    </div>
  );
}