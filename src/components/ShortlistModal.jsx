import React, { useEffect, useState } from "react";
import {
  X,
  Check,
  User,
  Phone,
  Mail,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

function ShortlistModal() {
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [requirement, setRequirement] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  /* =========================================================
     KSR WHATSAPP NUMBER
     
     IMPORTANT:
     Replace this with your actual KSR WhatsApp number.
     
     Example:
     const whatsappNumber = "919876543210";
     
     Don't use +, spaces or brackets.
  ========================================================= */

  const whatsappNumber = "917470750708";

  /* =========================================================
     AUTO OPEN MODAL
  ========================================================= */

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(
      "shortlistEnquiryShown"
    );

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1400);

      return () => clearTimeout(timer);
    }
  }, []);

  /* =========================================================
     BODY SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* =========================================================
     ESC KEY
  ========================================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  /* =========================================================
     CLOSE MODAL
  ========================================================= */

  const handleClose = () => {
    setIsOpen(false);

    sessionStorage.setItem(
      "shortlistEnquiryShown",
      "true"
    );

    setIsSuccess(false);
    setIsSubmitting(false);
  };

  /* =========================================================
     SUBMIT FORM → WHATSAPP
  ========================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    /* -------------------------------------------------------
       CREATE WHATSAPP MESSAGE
    ------------------------------------------------------- */

    const message = `
🏡 *NEW PROPERTY ENQUIRY*

━━━━━━━━━━━━━━━━━━

👤 *Name*
${name.trim()}

📞 *Phone*
${phone.trim()}

✉️ *Email*
${email.trim()}

🏠 *Requirement*
${requirement.trim() || "Not specified"}

━━━━━━━━━━━━━━━━━━

🌐 *Source:* KSR Realty Website

Please contact this customer regarding their property requirement.
    `.trim();

    /* -------------------------------------------------------
       WHATSAPP URL
    ------------------------------------------------------- */

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;

    /* -------------------------------------------------------
       OPEN WHATSAPP
    ------------------------------------------------------- */

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    /* -------------------------------------------------------
       SUCCESS STATE
    ------------------------------------------------------- */

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      setName("");
      setPhone("");
      setEmail("");
      setRequirement("");

      sessionStorage.setItem(
        "shortlistEnquiryShown",
        "true"
      );

      /* Close after success */

      setTimeout(() => {
        setIsOpen(false);
        setIsSuccess(false);
      }, 2800);
    }, 500);
  };

  /* =========================================================
     DON'T RENDER
  ========================================================= */

  if (!isOpen) return null;

  return (
    <div
      className="shortlist-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className="shortlist-modal">

        {/* ===================================================
            CLOSE BUTTON
        =================================================== */}

        <button
          type="button"
          className="shortlist-close"
          onClick={handleClose}
          aria-label="Close enquiry form"
        >
          <X size={18} strokeWidth={1.8} />
        </button>

        {/* ===================================================
            BRAND
        =================================================== */}

        <div className="shortlist-brand">
          KSR REALTY VENTURES
        </div>

        {isSuccess ? (

          /* =================================================
             SUCCESS SCREEN
          ================================================= */

          <div className="shortlist-success">

            <div className="success-icon">
              <Check
                size={34}
                strokeWidth={2}
              />
            </div>

            <div className="success-label">
              ENQUIRY RECEIVED
            </div>

            <h2>
              Thank you for
              <br />
              choosing KSR.
            </h2>

            <p>
              Your enquiry has been prepared for
              WhatsApp. Our property advisor will
              connect with you shortly.
            </p>

            <div className="success-line" />

            <span>
              KSR REALTY VENTURES
            </span>

          </div>

        ) : (

          /* =================================================
             FORM
          ================================================= */

          <>
            <div className="shortlist-heading">

              <span className="heading-eyebrow">
                PRIVATE PROPERTY ASSISTANCE
              </span>

              <h2>
                Let us curate
                <br />
                <em>your shortlist.</em>
              </h2>

              <p>
                Tell us what you're looking for and
                our property advisor will personally
                curate the right options for you.
              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="shortlist-form"
            >

              {/* =================================================
                  NAME
              ================================================= */}

              <div className="input-group">

                <label>
                  <User size={15} />
                  Full name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  required
                  autoComplete="name"
                />

              </div>

              {/* =================================================
                  PHONE
              ================================================= */}

              <div className="input-group">

                <label>
                  <Phone size={15} />
                  Phone number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) =>
                    setPhone(
                      e.target.value.replace(
                        /[^0-9+\-\s]/g,
                        ""
                      )
                    )
                  }
                  required
                  autoComplete="tel"
                />

              </div>

              {/* =================================================
                  EMAIL
              ================================================= */}

              <div className="input-group">

                <label>
                  <Mail size={15} />
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                  autoComplete="email"
                />

              </div>

              {/* =================================================
                  REQUIREMENT
              ================================================= */}

              <div className="input-group">

                <label>
                  <MessageSquare size={15} />
                  Your requirement

                  <span className="optional">
                    Optional
                  </span>
                </label>

                <textarea
                  rows="3"
                  placeholder="Location, budget, BHK, property type..."
                  value={requirement}
                  onChange={(e) =>
                    setRequirement(e.target.value)
                  }
                />

              </div>

              {/* =================================================
                  SUBMIT
              ================================================= */}

              <button
                type="submit"
                className="shortlist-submit"
                disabled={isSubmitting}
              >

                <span>
                  {isSubmitting
                    ? "Opening WhatsApp..."
                    : "Continue on WhatsApp"}
                </span>

                {!isSubmitting && (
                  <span className="submit-arrow">
                    <ArrowRight size={18} />
                  </span>
                )}

              </button>

              <p className="shortlist-note">
                Your information is private and will
                only be used to assist with your
                property search.
              </p>

            </form>
          </>
        )}

      </div>

      {/* =====================================================
          STYLES
      ===================================================== */}

      <style>{`

        /* =====================================================
           OVERLAY
        ===================================================== */

        .shortlist-overlay {
          position: fixed;
          inset: 0;

          z-index: 99999;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 20px;

          background:
            rgba(18, 17, 14, 0.52);

          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);

          animation:
            shortlistOverlayIn
            0.3s ease
            forwards;
        }

        /* =====================================================
           MODAL
        ===================================================== */

        .shortlist-modal {
          position: relative;

          width: 100%;
          max-width: 620px;

          max-height:
            calc(100vh - 40px);

          overflow-y: auto;

          padding: 46px;

          box-sizing: border-box;

          background:
            linear-gradient(
              145deg,
              #ffffff 0%,
              #faf9f6 100%
            );

          border:
            1px solid
            rgba(35, 32, 25, 0.10);

          border-radius: 24px;

          box-shadow:
            0 30px 90px
            rgba(0, 0, 0, 0.22),

            0 8px 30px
            rgba(0, 0, 0, 0.08);

          animation:
            shortlistModalIn
            0.42s
            cubic-bezier(.22,.8,.3,1)
            forwards;
        }

        .shortlist-modal::-webkit-scrollbar {
          width: 5px;
        }

        .shortlist-modal::-webkit-scrollbar-thumb {
          background: #d8d2c6;
          border-radius: 20px;
        }

        /* =====================================================
           CLOSE BUTTON
        ===================================================== */

        .shortlist-close {
          position: absolute;

          top: 20px;
          right: 20px;

          width: 38px;
          height: 38px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            #e5e0d6;

          border-radius: 50%;

          background: #ffffff;

          color: #292720;

          cursor: pointer;

          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            color 0.25s ease,
            background 0.25s ease;
        }

        .shortlist-close:hover {
          transform: rotate(90deg);

          border-color: #b99655;

          color: #b99655;

          background: #fcfaf6;
        }

        /* =====================================================
           BRAND
        ===================================================== */

        .shortlist-brand {
          display: inline-flex;

          margin-bottom: 22px;

          color: #ae8b4b;

          font-family:
            Inter,
            sans-serif;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.20em;
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .shortlist-heading {
          margin-bottom: 30px;

          padding-right: 35px;
        }

        .heading-eyebrow {
          display: block;

          margin-bottom: 11px;

          color: #8b877e;

          font-family:
            Inter,
            sans-serif;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.16em;
        }

        .shortlist-heading h2 {
          margin: 0;

          color: #202a35;

          font-family:
            var(--font-display),
            Georgia,
            serif;

          font-size:
            clamp(
              2rem,
              5vw,
              3rem
            );

          font-weight: 500;

          line-height: 0.98;

          letter-spacing: -0.035em;
        }

        .shortlist-heading h2 em {
          color: #a9874b;

          font-style: italic;

          font-weight: 400;
        }

        .shortlist-heading p {
          max-width: 470px;

          margin: 18px 0 0;

          color: #77736b;

          font-family:
            Inter,
            sans-serif;

          font-size: 13px;

          line-height: 1.7;
        }

        /* =====================================================
           FORM
        ===================================================== */

        .shortlist-form {
          display: flex;

          flex-direction: column;

          gap: 17px;
        }

        .input-group {
          display: flex;

          flex-direction: column;

          gap: 8px;
        }

        .input-group label {
          display: flex;

          align-items: center;

          gap: 7px;

          color: #514e47;

          font-family:
            Inter,
            sans-serif;

          font-size: 11px;

          font-weight: 600;
        }

        .input-group label svg {
          color: #b18d50;
        }

        .optional {
          margin-left: 4px;

          color: #a29d93;

          font-size: 9px;

          font-weight: 400;
        }

        /* =====================================================
           INPUTS
        ===================================================== */

        .input-group input,
        .input-group textarea {
          width: 100%;

          box-sizing: border-box;

          border:
            1px solid
            #e2ddd4;

          border-radius: 11px;

          background: #ffffff;

          color: #292720;

          font-family:
            Inter,
            sans-serif;

          font-size: 13px;

          outline: none;

          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
        }

        .input-group input {
          height: 52px;

          padding: 0 16px;
        }

        .input-group textarea {
          min-height: 92px;

          padding: 15px 16px;

          resize: vertical;

          line-height: 1.5;
        }

        .input-group input::placeholder,
        .input-group textarea::placeholder {
          color: #aaa59b;
        }

        .input-group input:focus,
        .input-group textarea:focus {
          border-color: #b99655;

          background: #fffefa;

          box-shadow:
            0 0 0 3px
            rgba(185, 150, 82, 0.10);
        }

        /* =====================================================
           SUBMIT BUTTON
        ===================================================== */

        .shortlist-submit {
          position: relative;

          width: 100%;

          min-height: 56px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 12px;

          margin-top: 4px;

          border: none;

          border-radius: 12px;

          background:
            linear-gradient(
              135deg,
              #b99755,
              #9e793d
            );

          color: #ffffff;

          font-family:
            Inter,
            sans-serif;

          font-size: 13px;

          font-weight: 700;

          cursor: pointer;

          box-shadow:
            0 8px 22px
            rgba(158, 121, 61, 0.22);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            filter 0.25s ease;
        }

        .shortlist-submit:hover:not(:disabled) {
          transform:
            translateY(-2px);

          box-shadow:
            0 12px 28px
            rgba(158, 121, 61, 0.28);

          filter: brightness(1.04);
        }

        .shortlist-submit:active:not(:disabled) {
          transform:
            translateY(0);
        }

        .shortlist-submit:disabled {
          cursor: not-allowed;

          opacity: 0.72;
        }

        .submit-arrow {
          width: 28px;
          height: 28px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background:
            rgba(255,255,255,0.15);
        }

        /* =====================================================
           NOTE
        ===================================================== */

        .shortlist-note {
          margin: 1px 0 0;

          color: #99948a;

          font-family:
            Inter,
            sans-serif;

          font-size: 9.5px;

          line-height: 1.5;

          text-align: center;
        }

        /* =====================================================
           SUCCESS
        ===================================================== */

        .shortlist-success {
          min-height: 390px;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          padding:
            25px 0 10px;

          text-align: center;
        }

        .success-icon {
          width: 78px;
          height: 78px;

          display: flex;

          align-items: center;
          justify-content: center;

          margin-bottom: 22px;

          border-radius: 50%;

          color: #a7864c;

          background:
            rgba(185,151,78,0.10);

          border:
            1px solid
            rgba(185,151,78,0.20);

          animation:
            successPop
            0.5s
            cubic-bezier(.2,.8,.2,1);
        }

        .success-label {
          margin-bottom: 12px;

          color: #b08d51;

          font-family:
            Inter,
            sans-serif;

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 0.18em;
        }

        .shortlist-success h2 {
          margin: 0;

          color: #202a35;

          font-family:
            var(--font-display),
            Georgia,
            serif;

          font-size: 2.5rem;

          font-weight: 500;

          line-height: 1.05;

          letter-spacing: -0.03em;
        }

        .shortlist-success p {
          max-width: 390px;

          margin: 18px auto 0;

          color: #77736b;

          font-family:
            Inter,
            sans-serif;

          font-size: 13px;

          line-height: 1.7;
        }

        .success-line {
          width: 45px;

          height: 1px;

          margin:
            25px 0 14px;

          background: #b99755;
        }

        .shortlist-success > span {
          color: #9b968c;

          font-family:
            Inter,
            sans-serif;

          font-size: 8px;

          font-weight: 700;

          letter-spacing: 0.20em;
        }

        /* =====================================================
           ANIMATIONS
        ===================================================== */

        @keyframes shortlistOverlayIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes shortlistModalIn {
          from {
            opacity: 0;

            transform:
              translateY(25px)
              scale(0.97);
          }

          to {
            opacity: 1;

            transform:
              translateY(0)
              scale(1);
          }
        }

        @keyframes successPop {
          0% {
            opacity: 0;

            transform:
              scale(0.5);
          }

          70% {
            transform:
              scale(1.08);
          }

          100% {
            opacity: 1;

            transform:
              scale(1);
          }
        }

        /* =====================================================
           TABLET / MOBILE
        ===================================================== */

        @media (max-width: 650px) {

          .shortlist-overlay {
            padding: 14px;
          }

          .shortlist-modal {
            max-height:
              calc(100vh - 28px);

            padding:
              34px
              22px
              25px;

            border-radius: 20px;
          }

          .shortlist-close {
            top: 14px;
            right: 14px;

            width: 34px;
            height: 34px;
          }

          .shortlist-brand {
            margin-bottom: 20px;
          }

          .shortlist-heading {
            padding-right: 20px;

            margin-bottom: 24px;
          }

          .shortlist-heading h2 {
            font-size: 2.15rem;
          }

          .shortlist-heading p {
            font-size: 12px;

            line-height: 1.6;
          }

          .shortlist-form {
            gap: 14px;
          }

          .input-group input {
            height: 50px;
          }

          .shortlist-success {
            min-height: 350px;
          }

          .shortlist-success h2 {
            font-size: 2.2rem;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 400px) {

          .shortlist-overlay {
            padding: 10px;
          }

          .shortlist-modal {
            max-height:
              calc(100vh - 20px);

            padding:
              30px
              17px
              20px;

            border-radius: 18px;
          }

          .shortlist-brand {
            font-size: 8px;

            letter-spacing:
              0.16em;
          }

          .heading-eyebrow {
            font-size: 8px;
          }

          .shortlist-heading h2 {
            font-size: 1.9rem;
          }

          .shortlist-heading p {
            font-size: 11px;
          }

          .input-group label {
            font-size: 10px;
          }

          .input-group input {
            height: 48px;

            padding: 0 14px;

            font-size: 12px;
          }

          .input-group textarea {
            font-size: 12px;
          }

          .shortlist-submit {
            min-height: 52px;

            font-size: 12px;
          }

          .shortlist-success h2 {
            font-size: 2rem;
          }

          .shortlist-success p {
            font-size: 12px;
          }
        }

      `}</style>
    </div>
  );
}

export default ShortlistModal;