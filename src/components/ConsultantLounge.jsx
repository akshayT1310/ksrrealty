import React from "react";

export default function ConsultantLounge({
  advisorName,
  setAdvisorName,
  advisorPhone,
  setAdvisorPhone,
  advisorRole,
  setAdvisorRole,
  advisorSubmitted,
  setAdvisorSubmitted,
  handleAdvisorSubmit,
}) {
  const roles = ["Buyer", "Investor", "NRI", "Tenant"];

  return (
    <section
      id="consultant-lounge"
      className="section-y overflow-hidden"
      style={{ background: "var(--color-limestone)" }}
    >
      <div className="container-trs w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <div className="w-full">
            <p
              className="label-upper mb-3 sm:mb-4 text-xs sm:text-sm"
              style={{ color: "var(--color-brass)" }}
            >
              Start your search
            </p>

            <h2
              className="font-display font-medium leading-tight mb-4 sm:mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 7vw, 3.5rem)",
                color: "var(--color-ink)",
              }}
            >
              Tell us what you&apos;re looking for.
            </h2>

            <p
              className="text-sm sm:text-base leading-relaxed max-w-xl mb-6 sm:mb-8"
              style={{ color: "var(--color-taupe)" }}
            >
              Share two quick details and an advisor will shortlist three
              properties that genuinely fit — and walk you through each on a
              free site visit. No pressure, no spam.
            </p>

            <ul className="flex flex-col gap-3">
              <li
                className="flex items-start gap-3 text-sm sm:text-base"
                style={{ color: "var(--color-ink)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                  style={{ background: "var(--color-brass)" }}
                />
                <span>RERA-verified projects, vetted by our team</span>
              </li>

              <li
                className="flex items-start gap-3 text-sm sm:text-base"
                style={{ color: "var(--color-ink)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                  style={{ background: "var(--color-brass)" }}
                />
                <span>
                  One advisor, end to end — not a call-centre
                </span>
              </li>

              <li
                className="flex items-start gap-3 text-sm sm:text-base"
                style={{ color: "var(--color-ink)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                  style={{ background: "var(--color-brass)" }}
                />
                <span>Free site visit, no pressure</span>
              </li>
            </ul>
          </div>

          {/* RIGHT FORM CARD */}
          <div className="w-full">
            <div
              className="w-full rounded-[var(--radius-lg)] p-5 sm:p-6 md:p-8"
              style={{
                background: "white",
                border: "1px solid var(--color-hairline)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {advisorSubmitted ? (
                /* SUCCESS STATE */
                <div
                  className="text-center py-8 sm:py-10 px-2"
                  style={{
                    minHeight: "280px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      minWidth: "60px",
                      borderRadius: "50%",
                      background: "rgba(185, 151, 78, 0.1)",
                      border: "2px solid var(--color-brass)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-brass)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>

                  <h4
                    className="text-lg sm:text-xl"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      color: "var(--color-navy-dark)",
                      margin: "0 0 8px 0",
                    }}
                  >
                    Request Sent!
                  </h4>

                  <p
                    className="text-sm leading-relaxed max-w-xs"
                    style={{
                      color: "var(--color-taupe)",
                      margin: "0 0 24px 0",
                    }}
                  >
                    An advisor will analyze your profile and send the
                    shortlist within 15 minutes.
                  </p>

                  <button
                    type="button"
                    onClick={() => setAdvisorSubmitted(false)}
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "var(--color-brass)",
                      fontWeight: 600,
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                /* FORM */
                <form
                  onSubmit={handleAdvisorSubmit}
                  className="flex flex-col gap-4 sm:gap-5"
                >
                  {/* FORM HEADER */}
                  <div className="mb-1">
                    <h3
                      className="font-display font-medium text-xl sm:text-2xl"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--color-ink)",
                      }}
                    >
                      Talk to an advisor
                    </h3>

                    <p
                      className="text-xs sm:text-sm mt-1.5 leading-relaxed"
                      style={{ color: "var(--color-taupe)" }}
                    >
                      No spam. An advisor — not a bot — replies within 15
                      minutes.
                    </p>
                  </div>

                  {/* NAME */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="lead-name"
                      className="text-xs font-medium"
                      style={{ color: "var(--color-ink)" }}
                    >
                      Your name
                    </label>

                    <input
                      id="lead-name"
                      type="text"
                      placeholder="Enter your name"
                      autoComplete="name"
                      className="
                        w-full
                        px-4
                        py-3.5
                        sm:py-3
                        rounded-[var(--radius-sm)]
                        border
                        text-sm
                        outline-none
                        transition-all
                        focus:ring-2
                        focus:ring-[rgba(185,151,78,0.15)]
                        focus:border-[var(--color-brass)]
                      "
                      style={{
                        background: "white",
                        borderColor: "rgba(21,18,12,0.15)",
                        color: "var(--color-ink)",
                      }}
                      value={advisorName}
                      onChange={(e) => setAdvisorName(e.target.value)}
                      required
                    />
                  </div>

                  {/* PHONE */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="lead-phone"
                      className="text-xs font-medium"
                      style={{ color: "var(--color-ink)" }}
                    >
                      Phone number
                    </label>

                    <input
                      id="lead-phone"
                      type="tel"
                      placeholder="Enter phone number"
                      autoComplete="tel"
                      inputMode="tel"
                      className="
                        w-full
                        px-4
                        py-3.5
                        sm:py-3
                        rounded-[var(--radius-sm)]
                        border
                        text-sm
                        outline-none
                        transition-all
                        focus:ring-2
                        focus:ring-[rgba(185,151,78,0.15)]
                        focus:border-[var(--color-brass)]
                      "
                      style={{
                        background: "white",
                        borderColor: "rgba(21,18,12,0.15)",
                        color: "var(--color-ink)",
                      }}
                      value={advisorPhone}
                      onChange={(e) => setAdvisorPhone(e.target.value)}
                      required
                    />
                  </div>

                  {/* ROLE */}
                  <div className="flex flex-col gap-2">
                    <span
                      className="text-xs sm:text-sm"
                      style={{ color: "var(--color-taupe)" }}
                    >
                      I am a…
                    </span>

                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
                      {roles.map((role) => {
                        const active = advisorRole === role;

                        return (
                          <button
                            key={role}
                            type="button"
                            onClick={() => setAdvisorRole(role)}
                            className="
                              w-full
                              sm:w-auto
                              px-4
                              py-2.5
                              sm:py-1.5
                              rounded-full
                              text-xs
                              sm:text-sm
                              font-medium
                              border
                              transition-all
                              duration-200
                              cursor-pointer
                            "
                            style={{
                              background: active
                                ? "var(--color-brass)"
                                : "transparent",
                              color: active
                                ? "var(--color-ink)"
                                : "var(--color-taupe)",
                              borderColor: active
                                ? "var(--color-brass)"
                                : "rgba(21,18,12,0.15)",
                            }}
                          >
                            {role}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="
                      w-full
                      flex
                      items-center
                      justify-center
                      gap-2
                      px-6
                      py-3.5
                      sm:py-4
                      rounded-[var(--radius)]
                      font-semibold
                      text-sm
                      transition-all
                      duration-200
                      hover:brightness-105
                      active:scale-[0.99]
                      cursor-pointer
                    "
                    style={{
                      background: "var(--color-brass)",
                      color: "var(--color-ink)",
                    }}
                  >
                    Get my shortlist
                  </button>

                  <p
                    className="text-[10px] sm:text-xs text-center leading-relaxed"
                    style={{ color: "var(--color-taupe)" }}
                  >
                    Your information is kept private and will only be used to
                    contact you about your property requirements.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}