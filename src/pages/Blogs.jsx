import React, { useEffect, useState } from "react";

const BLOG_POSTS = [
  {
    id: 1,
    category: "Market Trends",
    title: "Indore Real Estate Forecast 2026: Hot Localities to Invest In",
    date: "July 10, 2026",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=90",
    excerpt:
      "Indore continues to expand across residential and commercial corridors. Discover the localities showing strong potential for long-term investment.",
    content: `
      <p>Indore is experiencing a major transformation in its real estate landscape. Growing infrastructure, commercial development and improving connectivity are creating new opportunities for property buyers and investors.</p>

      <h4>Localities to Watch</h4>

      <p>Areas around Super Corridor, Vijay Nagar, Rau and other emerging growth corridors are attracting increasing attention from home buyers and investors.</p>

      <p>Before investing, it is important to evaluate connectivity, infrastructure, development plans, property documentation and long-term demand.</p>

      <h4>Make an Informed Decision</h4>

      <p>A good property decision is not only about location. It is about understanding the complete picture before committing your capital.</p>
    `,
  },
  {
    id: 2,
    category: "Buying Guide",
    title: "5 Crucial Checklists Before Booking Your Flat in Indore",
    date: "June 28, 2026",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=90",
    excerpt:
      "Before booking your next home, review these essential points covering documents, approvals, costs, construction quality and location.",
    content: `
      <p>Buying a home is one of the most important financial decisions you can make. A structured checklist can help reduce unnecessary risks.</p>

      <h4>1. Verify Property Documents</h4>
      <p>Check ownership documents, approvals, title records and other relevant property papers before proceeding.</p>

      <h4>2. Understand the Complete Cost</h4>
      <p>Consider the base price along with registration, taxes, maintenance, parking and other applicable charges.</p>

      <h4>3. Evaluate Location</h4>
      <p>Look beyond the property itself. Connectivity, schools, hospitals, retail and future infrastructure can influence long-term value.</p>

      <h4>4. Inspect Construction Quality</h4>
      <p>Whenever possible, review construction quality, materials, finishing and project progress.</p>

      <h4>5. Read Before You Sign</h4>
      <p>Always understand the terms and conditions of the agreement before making a final commitment.</p>
    `,
  },
  {
    id: 3,
    category: "Finance",
    title: "Understanding Home Loan Interest Rates & Eligibility in MP",
    date: "June 15, 2026",
    image:
      "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1400&q=90",
    excerpt:
      "Understand how eligibility, credit profile, income and property valuation can influence your home loan journey.",
    content: `
      <p>Home financing can make property ownership more accessible, but understanding the lending process is essential before selecting a loan.</p>

      <h4>What Influences Eligibility?</h4>

      <p>Lenders may consider income, employment profile, existing liabilities, credit history and the value of the property.</p>

      <h4>Why Credit Profile Matters</h4>

      <p>A healthy credit history can strengthen your overall loan application and may improve the financing options available to you.</p>

      <h4>Plan Your Purchase</h4>

      <p>Before booking a property, estimate your monthly repayment comfortably and consider your overall financial commitments.</p>
    `,
  },
  {
    id: 4,
    category: "Legal",
    title: "A Guide to Stamp Duty and Registration Charges in Indore",
    date: "May 30, 2026",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=90",
    excerpt:
      "Understand the important registration and documentation costs that form part of your overall property purchase budget.",
    content: `
      <p>Property buyers should always account for government charges and documentation expenses while preparing their purchase budget.</p>

      <h4>Stamp Duty</h4>

      <p>Stamp duty is an important government charge associated with property transactions. Applicable rates and rules may vary depending on the transaction and prevailing regulations.</p>

      <h4>Registration</h4>

      <p>Registration formalises the property transaction and creates an official record of the transfer.</p>

      <h4>Plan Your Budget</h4>

      <p>Speak with the relevant professionals and verify current applicable charges before completing your property transaction.</p>
    `,
  },
  {
    id: 5,
    category: "Investment",
    title: "How to Identify a High-Potential Property Investment",
    date: "May 18, 2026",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90",
    excerpt:
      "Location, infrastructure, demand and future development all play an important role when evaluating property investments.",
    content: `
      <p>Successful real estate investment starts with disciplined research. A visually attractive property is not necessarily a strong investment.</p>

      <h4>Study the Location</h4>

      <p>Look at connectivity, surrounding development, employment hubs and infrastructure plans.</p>

      <h4>Understand Demand</h4>

      <p>Properties with sustainable end-user and rental demand can offer stronger long-term potential.</p>

      <h4>Think Long Term</h4>

      <p>Real estate is generally a long-term asset. Evaluate the property based on its future potential rather than short-term excitement.</p>
    `,
  },
  {
    id: 6,
    category: "Property Guide",
    title: "Villa, Plot or Apartment: Which Property Is Right for You?",
    date: "May 05, 2026",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=90",
    excerpt:
      "Compare different property formats and understand which option may suit your lifestyle, budget and long-term goals.",
    content: `
      <p>There is no single property type that works for everyone. Your decision should depend on lifestyle, budget, location and future plans.</p>

      <h4>Apartment</h4>
      <p>A practical choice for buyers looking for managed communities, amenities and convenient urban living.</p>

      <h4>Villa</h4>
      <p>Villas can offer more privacy, larger spaces and greater control over your living environment.</p>

      <h4>Plot</h4>
      <p>Plots provide flexibility for future construction but require careful attention to documentation, zoning and development conditions.</p>
    `,
  },
];

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85";

export default function Blogs() {
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedPost ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPost]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedPost(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = FALLBACK_IMAGE;
  };

  return (
    <main className="ksr-blog-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="ksr-blog-hero">
        <div className="ksr-hero-orb ksr-hero-orb-one" />
        <div className="ksr-hero-orb ksr-hero-orb-two" />

        <div className="ksr-container ksr-blog-hero-inner">
          <div className="ksr-blog-eyebrow">
            <span className="ksr-eyebrow-line" />
            KSR INSIGHTS
            <span className="ksr-eyebrow-line" />
          </div>

          <h1>
            Real Estate
            <br />
            <span>Insights & Advice</span>
          </h1>

          <p>
            Thoughtful perspectives on property, investment, market trends
            and the decisions that shape your real estate journey in Indore.
          </p>

          <div className="ksr-hero-decoration">
            <span />
            <b />
            <span />
          </div>
        </div>
      </section>

      {/* =====================================================
          ARTICLES
      ===================================================== */}

      <section className="ksr-blog-section">
        <div className="ksr-container">
          <div className="ksr-blog-heading">
            <div>
              <div className="ksr-small-label">
                <span />
                OUR JOURNAL
              </div>

              <h2>
                Knowledge For
                <br />
                <em>Better Decisions.</em>
              </h2>
            </div>

            <p>
              Explore practical insights, property guides and market
              perspectives curated by KSR Realty.
            </p>
          </div>

          <div className="ksr-blog-grid">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="ksr-blog-card">
                <div className="ksr-blog-image">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    onError={handleImageError}
                  />

                  <div className="ksr-image-shade" />

                  <div className="ksr-card-category">
                    {post.category}
                  </div>

                  <div className="ksr-card-number">
                    {String(post.id).padStart(2, "0")}
                  </div>
                </div>

                <div className="ksr-blog-card-body">
                  <div className="ksr-card-meta">
                    <span>{post.date}</span>
                    <i />
                    <span>KSR Realty</span>
                  </div>

                  <h3>{post.title}</h3>

                  <p>{post.excerpt}</p>

                  <button
                    type="button"
                    className="ksr-read-button"
                    onClick={() => setSelectedPost(post)}
                  >
                    <span>Read Article</span>

                    <span className="ksr-read-arrow">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MARKET PULSE
      ===================================================== */}

      <section className="ksr-market-pulse">
        <div className="ksr-container">
          <div className="ksr-market-header">
            <div>
              <div className="ksr-small-label">
                <span />
                MARKET PULSE
              </div>

              <h2>
                Indore at a
                <br />
                <em>Glance.</em>
              </h2>
            </div>

            <p>
              A simple snapshot of the factors that matter when evaluating
              residential and investment opportunities across Indore.
            </p>
          </div>

          <div className="ksr-pulse-grid">
            <article className="ksr-pulse-card">
              <div className="ksr-pulse-icon">↗</div>

              <span>01</span>

              <h3>Growing Corridors</h3>

              <p>
                Emerging areas around major infrastructure corridors are
                creating new residential and commercial opportunities.
              </p>
            </article>

            <article className="ksr-pulse-card ksr-pulse-featured">
              <div className="ksr-pulse-icon">◇</div>

              <span>02</span>

              <h3>Location Matters</h3>

              <p>
                Connectivity, employment hubs, education, healthcare and
                future infrastructure can significantly influence property
                demand.
              </p>
            </article>

            <article className="ksr-pulse-card">
              <div className="ksr-pulse-icon">+</div>

              <span>03</span>

              <h3>Think Long Term</h3>

              <p>
                Strong property decisions are built around sustainable
                demand, documentation and long-term value.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED INSIGHT
      ===================================================== */}

      <section className="ksr-featured-insight">
        <div className="ksr-container">
          <div className="ksr-featured-card">
            <div className="ksr-featured-image">
              <img
                src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=90"
                alt="Luxury residential property"
                loading="lazy"
                onError={handleImageError}
              />

              <div className="ksr-featured-overlay" />

              <div className="ksr-featured-tag">
                FEATURED INSIGHT
              </div>
            </div>

            <div className="ksr-featured-content">
              <div className="ksr-small-label">
                <span />
                EDITOR'S PICK
              </div>

              <h2>
                What makes a property
                <br />
                <em>truly worth investing in?</em>
              </h2>

              <p>
                Price is only one part of the equation. The strongest
                property decisions consider location, infrastructure,
                documentation, future demand and the overall quality of
                the opportunity.
              </p>

              <div className="ksr-featured-points">
                <div>
                  <b>01</b>
                  <span>Location & Connectivity</span>
                </div>

                <div>
                  <b>02</b>
                  <span>Infrastructure Potential</span>
                </div>

                <div>
                  <b>03</b>
                  <span>Long-Term Demand</span>
                </div>
              </div>

              <button
                type="button"
                className="ksr-featured-button"
                onClick={() => setSelectedPost(BLOG_POSTS[4])}
              >
                <span>Explore The Insight</span>
                <strong>→</strong>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROPERTY WISDOM
      ===================================================== */}

      <section className="ksr-property-wisdom">
        <div className="ksr-container">
          <div className="ksr-wisdom-header">
            <div className="ksr-small-label">
              <span />
              PROPERTY WISDOM
            </div>

            <h2>
              Three principles
              <br />
              <em>worth remembering.</em>
            </h2>
          </div>

          <div className="ksr-wisdom-grid">
            <article className="ksr-wisdom-card">
              <div className="ksr-wisdom-number">01</div>

              <h3>
                Don't buy only
                <br />
                because it looks good.
              </h3>

              <p>
                Evaluate the property beyond aesthetics. Documentation,
                location, construction quality and future demand matter
                just as much.
              </p>

              <div className="ksr-wisdom-line" />
            </article>

            <article className="ksr-wisdom-card">
              <div className="ksr-wisdom-number">02</div>

              <h3>
                Understand the
                <br />
                complete cost.
              </h3>

              <p>
                Your property budget should account for registration,
                taxes, maintenance, parking and other applicable expenses.
              </p>

              <div className="ksr-wisdom-line" />
            </article>

            <article className="ksr-wisdom-card">
              <div className="ksr-wisdom-number">03</div>

              <h3>
                Think beyond
                <br />
                today's market.
              </h3>

              <p>
                Consider how infrastructure, connectivity and demand could
                influence the property several years from now.
              </p>

              <div className="ksr-wisdom-line" />
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          BUYING JOURNEY
      ===================================================== */}

      <section className="ksr-buying-journey">
        <div className="ksr-container">
          <div className="ksr-journey-inner">
            <div className="ksr-journey-heading">
              <div className="ksr-small-label">
                <span />
                THE PROPERTY JOURNEY
              </div>

              <h2>
                From first thought
                <br />
                to <em>the right decision.</em>
              </h2>

              <p>
                A thoughtful property journey becomes easier when every
                important step is evaluated with clarity.
              </p>
            </div>

            <div className="ksr-journey-steps">
              <div className="ksr-journey-step">
                <div className="ksr-step-number">01</div>

                <div>
                  <h3>Discover</h3>

                  <p>
                    Understand your budget, lifestyle and property goals.
                  </p>
                </div>
              </div>

              <div className="ksr-journey-step">
                <div className="ksr-step-number">02</div>

                <div>
                  <h3>Compare</h3>

                  <p>
                    Evaluate locations, projects, specifications and costs.
                  </p>
                </div>
              </div>

              <div className="ksr-journey-step">
                <div className="ksr-step-number">03</div>

                <div>
                  <h3>Verify</h3>

                  <p>
                    Review documentation, approvals and important property
                    details.
                  </p>
                </div>
              </div>

              <div className="ksr-journey-step">
                <div className="ksr-step-number">04</div>

                <div>
                  <h3>Decide</h3>

                  <p>
                    Move forward with confidence once the complete picture
                    makes sense.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EDITORIAL STRIP
      ===================================================== */}

      <section className="ksr-editorial-strip">
        <div className="ksr-container">
          <div className="ksr-editorial-inner">
            <div className="ksr-editorial-mark">K</div>

            <div className="ksr-editorial-copy">
              <div className="ksr-small-label">
                <span />
                KSR REALTY VENTURES
              </div>

              <h2>
                Property decisions
                <br />
                deserve <em>clarity.</em>
              </h2>
            </div>

            <p>
              We believe informed decisions create stronger property
              journeys. Our team brings together market knowledge,
              documentation support and practical guidance.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="ksr-blog-cta">
        <div className="ksr-cta-pattern" />

        <div className="ksr-container ksr-blog-cta-inner">
          <div className="ksr-small-label ksr-label-center">
            <span />
            FIND YOUR NEXT PROPERTY
            <span />
          </div>

          <h2>
            The right property
            <br />
            starts with the <em>right guidance.</em>
          </h2>

          <p>
            Speak with the KSR Realty team for personalised property
            recommendations, project comparisons and expert assistance.
          </p>

          <div className="ksr-blog-cta-actions">
            <a href="/contact" className="ksr-btn-primary">
              Talk to an Advisor
              <span>→</span>
            </a>

            <a href="/property" className="ksr-btn-secondary">
              Explore Properties
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARTICLE MODAL
      ===================================================== */}

      {selectedPost && (
        <div
          className="ksr-modal-backdrop"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="ksr-article-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="ksr-modal-top">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                onError={handleImageError}
              />

              <div className="ksr-modal-image-shade" />

              <div className="ksr-modal-category">
                {selectedPost.category}
              </div>

              <button
                type="button"
                className="ksr-modal-close"
                onClick={() => setSelectedPost(null)}
                aria-label="Close article"
              >
                ×
              </button>
            </div>

            <div className="ksr-modal-scroll">
              <div className="ksr-modal-content">
                <div className="ksr-modal-meta">
                  {selectedPost.date}
                </div>

                <h2>{selectedPost.title}</h2>

                <div className="ksr-modal-rule">
                  <span />
                  <b />
                </div>

                <div
                  className="ksr-article-text"
                  dangerouslySetInnerHTML={{
                    __html: selectedPost.content,
                  }}
                />

                <div className="ksr-modal-bottom">
                  <button
                    type="button"
                    onClick={() => setSelectedPost(null)}
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          COMPLETE CSS
      ===================================================== */}

      <style>{`
        /* =====================================================
           ROOT
        ===================================================== */

        .ksr-blog-page {
          --cream: #f7f6f2;
          --cream-dark: #eeece6;
          --white: #ffffff;

          --ink: #18212b;
          --ink-soft: #4f5964;
          --muted: #7c858e;

          --gold: #ae8740;
          --gold-dark: #8e6b2e;
          --gold-light: #d5b675;

          --border: #dddcd6;
          --border-light: #e8e6df;

          width: 100%;
          min-height: 100vh;

          overflow-x: hidden;

          background: var(--cream);
          color: var(--ink);

          font-family:
            Inter,
            "Helvetica Neue",
            Arial,
            sans-serif;
        }

        .ksr-blog-page *,
        .ksr-blog-page *::before,
        .ksr-blog-page *::after {
          box-sizing: border-box;
        }

        .ksr-blog-page img {
          max-width: 100%;
        }

        .ksr-container {
          width: min(1240px, calc(100% - 48px));
          margin: 0 auto;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .ksr-blog-hero {
          position: relative;
          min-height: 610px;

          display: flex;
          align-items: center;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 75% 20%,
              rgba(174,135,64,0.08),
              transparent 32%
            ),
            linear-gradient(
              180deg,
              #fbfaf7 0%,
              #f5f4f0 100%
            );

          border-bottom: 1px solid var(--border-light);
        }

        .ksr-blog-hero::before {
          content: "";

          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(20,30,40,0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(20,30,40,0.035) 1px,
              transparent 1px
            );

          background-size: 70px 70px;

          mask-image:
            linear-gradient(
              to bottom,
              black,
              transparent 85%
            );

          pointer-events: none;
        }

        .ksr-hero-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .ksr-hero-orb-one {
          width: 420px;
          height: 420px;

          right: -180px;
          top: -180px;

          border: 1px solid rgba(174,135,64,0.16);
        }

        .ksr-hero-orb-two {
          width: 280px;
          height: 280px;

          right: -110px;
          top: -110px;

          border: 1px solid rgba(174,135,64,0.10);
        }

        .ksr-blog-hero-inner {
          position: relative;
          z-index: 2;

          padding-top: 145px;
          padding-bottom: 100px;

          text-align: center;
        }

        .ksr-blog-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 13px;

          color: var(--gold-dark);

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        .ksr-eyebrow-line {
          width: 35px;
          height: 1px;

          background: var(--gold);
        }

        .ksr-blog-hero h1 {
          margin: 28px auto 0;

          max-width: 900px;

          color: #1b252f;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            clamp(
              3.5rem,
              7vw,
              6.8rem
            );

          font-weight: 400;
          line-height: 0.94;

          letter-spacing: -0.055em;
        }

        .ksr-blog-hero h1 span {
          color: var(--gold);
          font-style: italic;
        }

        .ksr-blog-hero p {
          max-width: 660px;

          margin: 32px auto 0;

          color: #68717a;

          font-size: 15px;
          line-height: 1.9;
        }

        .ksr-hero-decoration {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 12px;
          margin-top: 38px;
        }

        .ksr-hero-decoration span {
          width: 65px;
          height: 1px;
          background: #d8d2c4;
        }

        .ksr-hero-decoration b {
          width: 7px;
          height: 7px;

          transform: rotate(45deg);

          background: var(--gold);
        }

        /* =====================================================
           COMMON LABEL
        ===================================================== */

        .ksr-small-label {
          display: flex;
          align-items: center;

          gap: 11px;
          margin-bottom: 16px;

          color: var(--gold-dark);

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .ksr-small-label > span {
          display: block;

          width: 28px;
          height: 1px;

          background: var(--gold);
        }

        /* =====================================================
           BLOG SECTION
        ===================================================== */

        .ksr-blog-section {
          padding: 115px 0 125px;
          background: #f7f6f2;
        }

        .ksr-blog-heading {
          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            360px;

          gap: 70px;

          align-items: end;

          margin-bottom: 55px;
        }

        .ksr-blog-heading h2 {
          margin: 0;

          color: #202a34;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            clamp(
              2.7rem,
              5vw,
              4.8rem
            );

          font-weight: 400;
          line-height: 0.98;

          letter-spacing: -0.045em;
        }

        .ksr-blog-heading h2 em {
          color: var(--gold);
          font-style: italic;
        }

        .ksr-blog-heading > p {
          margin: 0;

          color: #737c84;

          font-size: 14px;
          line-height: 1.8;
        }

        /* =====================================================
           BLOG GRID
        ===================================================== */

        .ksr-blog-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 28px;
        }

        .ksr-blog-card {
          display: flex;
          flex-direction: column;

          min-width: 0;

          overflow: hidden;

          background: #fff;

          border: 1px solid #dddcd6;

          /*
             PREMIUM CURVED CARD
          */
          border-radius:
            32px 32px 14px 14px;

          box-shadow:
            0 8px 30px
            rgba(30,35,40,0.045);

          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease,
            border-color 0.4s ease;
        }

        .ksr-blog-card:hover {
          transform: translateY(-8px);

          border-color:
            rgba(174,135,64,0.45);

          box-shadow:
            0 24px 60px
            rgba(30,35,40,0.10);
        }

        /* =====================================================
           BLOG IMAGE
        ===================================================== */

        .ksr-blog-image {
          position: relative;

          height: 300px;

          overflow: hidden;

          background: #ddd;

          border-radius:
            31px 31px 0 0;
        }

        .ksr-blog-image img {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: cover;

          transition:
            transform 0.8s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );
        }

        .ksr-blog-card:hover
        .ksr-blog-image img {
          transform: scale(1.055);
        }

        .ksr-image-shade {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              rgba(0,0,0,0.02) 45%,
              rgba(0,0,0,0.30) 100%
            );

          pointer-events: none;
        }

        .ksr-card-category {
          position: absolute;

          top: 18px;
          left: 18px;

          padding: 8px 13px;

          border:
            1px solid
            rgba(255,255,255,0.55);

          border-radius: 999px;

          background:
            rgba(255,255,255,0.88);

          backdrop-filter: blur(12px);

          color: #6e5527;

          font-size: 9px;
          font-weight: 800;

          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .ksr-card-number {
          position: absolute;

          right: 18px;
          bottom: 14px;

          color:
            rgba(255,255,255,0.78);

          font-family: Georgia, serif;

          font-size: 48px;
          font-weight: 400;
          line-height: 1;
        }

        /* =====================================================
           CARD BODY
        ===================================================== */

        .ksr-blog-card-body {
          display: flex;
          flex-direction: column;

          flex: 1;

          padding: 28px 27px 27px;
        }

        .ksr-card-meta {
          display: flex;
          align-items: center;

          gap: 9px;

          margin-bottom: 15px;

          color: #92979b;

          font-size: 9px;
          font-weight: 700;

          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .ksr-card-meta i {
          width: 3px;
          height: 3px;

          border-radius: 50%;

          background: var(--gold);
        }

        .ksr-blog-card-body h3 {
          margin: 0 0 14px;

          color: #202a34;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 25px;
          font-weight: 400;

          line-height: 1.2;
          letter-spacing: -0.025em;
        }

        .ksr-blog-card-body p {
          flex: 1;

          margin: 0 0 25px;

          color: #717a82;

          font-size: 13px;
          line-height: 1.8;
        }

        /* =====================================================
           READ BUTTON
        ===================================================== */

        .ksr-read-button {
          display: inline-flex;

          align-items: center;
          justify-content: space-between;

          gap: 15px;

          width: 100%;

          padding: 15px 0 0;

          border: 0;
          border-top: 1px solid #e4e2dc;

          background: transparent;

          color: #8d6b30;

          cursor: pointer;

          text-align: left;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .ksr-read-arrow {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          width: 30px;
          height: 30px;

          border:
            1px solid
            rgba(174,135,64,0.35);

          border-radius: 50%;

          font-size: 16px;

          transition:
            transform 0.25s ease,
            background 0.25s ease;
        }

        .ksr-read-button:hover {
          color: #674b18;
        }

        .ksr-read-button:hover
        .ksr-read-arrow {
          transform: translateX(4px);
          background: #f1eadb;
        }

        /* =====================================================
           MARKET PULSE
        ===================================================== */

        .ksr-market-pulse {
          position: relative;

          padding: 115px 0;

          background: #f7f6f2;

          overflow: hidden;
        }

        .ksr-market-header {
          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            360px;

          gap: 60px;

          align-items: end;

          margin-bottom: 55px;
        }

        .ksr-market-header h2 {
          margin: 0;

          color: #202a34;

          font-family: Georgia, serif;

          font-size:
            clamp(
              2.8rem,
              5vw,
              4.8rem
            );

          font-weight: 400;
          line-height: 0.98;

          letter-spacing: -0.045em;
        }

        .ksr-market-header h2 em {
          color: var(--gold);
          font-style: italic;
        }

        .ksr-market-header > p {
          margin: 0;

          color: #737c84;

          font-size: 14px;
          line-height: 1.85;
        }

        .ksr-pulse-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 22px;
        }

        .ksr-pulse-card {
          position: relative;

          min-height: 330px;

          padding: 35px;

          overflow: hidden;

          background: #fff;

          border:
            1px solid
            rgba(174,135,64,0.15);

          border-radius: 32px;

          box-shadow:
            0 10px 35px
            rgba(30,35,40,0.04);

          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease;
        }

        .ksr-pulse-card:hover {
          transform: translateY(-8px);

          box-shadow:
            0 25px 60px
            rgba(30,35,40,0.10);
        }

        .ksr-pulse-card::after {
          content: "";

          position: absolute;

          width: 180px;
          height: 180px;

          right: -80px;
          bottom: -80px;

          border:
            1px solid
            rgba(174,135,64,0.12);

          border-radius: 50%;
        }

        .ksr-pulse-icon {
          display: grid;

          place-items: center;

          width: 52px;
          height: 52px;

          margin-bottom: 50px;

          border:
            1px solid
            rgba(174,135,64,0.35);

          border-radius: 18px;

          color: var(--gold-dark);

          font-family: Georgia, serif;

          font-size: 22px;
        }

        .ksr-pulse-card > span {
          display: block;

          margin-bottom: 12px;

          color: #b9b5ad;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 0.15em;
        }

        .ksr-pulse-card h3 {
          margin: 0 0 14px;

          color: #202a34;

          font-family: Georgia, serif;

          font-size: 28px;
          font-weight: 400;
        }

        .ksr-pulse-card p {
          margin: 0;

          color: #737c84;

          font-size: 13px;
          line-height: 1.8;
        }

        .ksr-pulse-featured {
          background:
            linear-gradient(
              145deg,
              #f0e7d3,
              #faf8f2
            );
        }

        /* =====================================================
           FEATURED INSIGHT
        ===================================================== */

        .ksr-featured-insight {
          padding: 120px 0;

          background: #eeece6;
        }

        .ksr-featured-card {
          display: grid;

          grid-template-columns:
            1.05fr
            0.95fr;

          min-height: 600px;

          overflow: hidden;

          background: #fff;

          border:
            1px solid
            rgba(174,135,64,0.20);

          border-radius: 38px;

          box-shadow:
            0 25px 70px
            rgba(30,35,40,0.08);
        }

        .ksr-featured-image {
          position: relative;

          min-height: 600px;

          overflow: hidden;
        }

        .ksr-featured-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition:
            transform 0.8s ease;
        }

        .ksr-featured-card:hover
        .ksr-featured-image img {
          transform: scale(1.04);
        }

        .ksr-featured-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              transparent 40%,
              rgba(0,0,0,0.50)
            );
        }

        .ksr-featured-tag {
          position: absolute;

          left: 28px;
          bottom: 28px;

          padding: 10px 15px;

          border:
            1px solid
            rgba(255,255,255,0.5);

          border-radius: 999px;

          background:
            rgba(255,255,255,0.90);

          color: #6e5527;

          font-size: 9px;
          font-weight: 800;

          letter-spacing: 0.15em;
        }

        .ksr-featured-content {
          display: flex;

          flex-direction: column;
          justify-content: center;

          padding: 65px;
        }

        .ksr-featured-content h2 {
          margin: 0;

          color: #202a34;

          font-family: Georgia, serif;

          font-size:
            clamp(
              2.5rem,
              4vw,
              4.2rem
            );

          font-weight: 400;
          line-height: 1;

          letter-spacing: -0.04em;
        }

        .ksr-featured-content h2 em {
          color: var(--gold);
          font-style: italic;
        }

        .ksr-featured-content > p {
          max-width: 520px;

          margin: 28px 0 30px;

          color: #737c84;

          font-size: 14px;
          line-height: 1.9;
        }

        .ksr-featured-points {
          display: flex;
          flex-direction: column;

          gap: 14px;

          margin-bottom: 35px;
        }

        .ksr-featured-points div {
          display: flex;
          align-items: center;

          gap: 15px;

          color: #46515b;

          font-size: 11px;
          font-weight: 700;

          letter-spacing: 0.05em;
        }

        .ksr-featured-points b {
          color: var(--gold);

          font-family: Georgia, serif;

          font-size: 16px;
          font-weight: 400;
        }

        .ksr-featured-button {
          display: inline-flex;

          align-items: center;
          justify-content: space-between;

          width: 230px;
          min-height: 52px;

          padding: 0 20px;

          border: 0;
          border-radius: 999px;

          background: #a9823d;

          color: #fff;

          cursor: pointer;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 0.12em;
          text-transform: uppercase;

          transition:
            transform 0.25s ease,
            background 0.25s ease;
        }

        .ksr-featured-button:hover {
          transform: translateY(-3px);
          background: #8d692c;
        }

        .ksr-featured-button strong {
          font-size: 18px;
          font-weight: 400;
        }

        /* =====================================================
           PROPERTY WISDOM
        ===================================================== */

        .ksr-property-wisdom {
          padding: 120px 0;

          background: #f7f6f2;
        }

        .ksr-wisdom-header {
          margin-bottom: 55px;
        }

        .ksr-wisdom-header h2 {
          margin: 0;

          color: #202a34;

          font-family: Georgia, serif;

          font-size:
            clamp(
              2.7rem,
              5vw,
              4.6rem
            );

          font-weight: 400;
          line-height: 1;

          letter-spacing: -0.04em;
        }

        .ksr-wisdom-header h2 em {
          color: var(--gold);
          font-style: italic;
        }

        .ksr-wisdom-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 22px;
        }

        .ksr-wisdom-card {
          position: relative;

          min-height: 360px;

          padding: 35px;

          background: #fff;

          border:
            1px solid #dedbd2;

          border-radius:
            35px 12px 35px 12px;

          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease;
        }

        .ksr-wisdom-card:hover {
          transform: translateY(-7px);

          box-shadow:
            0 25px 60px
            rgba(30,35,40,0.08);
        }

        .ksr-wisdom-number {
          margin-bottom: 60px;

          color: var(--gold);

          font-family: Georgia, serif;

          font-size: 20px;
          font-style: italic;
        }

        .ksr-wisdom-card h3 {
          margin: 0 0 20px;

          color: #202a34;

          font-family: Georgia, serif;

          font-size: 27px;
          font-weight: 400;

          line-height: 1.15;
        }

        .ksr-wisdom-card p {
          margin: 0;

          color: #737c84;

          font-size: 13px;
          line-height: 1.8;
        }

        .ksr-wisdom-line {
          position: absolute;

          left: 35px;
          bottom: 30px;

          width: 45px;
          height: 1px;

          background: var(--gold);
        }

        /* =====================================================
           BUYING JOURNEY
        ===================================================== */

        .ksr-buying-journey {
          padding: 120px 0;

          background:
            linear-gradient(
              135deg,
              #1d2934,
              #263541
            );

          color: #fff;

          border-radius:
            70px 70px 0 0;
        }

        .ksr-journey-inner {
          display: grid;

          grid-template-columns:
            0.85fr
            1.15fr;

          gap: 100px;

          align-items: center;
        }

        .ksr-journey-heading
        .ksr-small-label {
          color: #d3b36d;
        }

        .ksr-journey-heading h2 {
          margin: 0;

          color: #fff;

          font-family: Georgia, serif;

          font-size:
            clamp(
              2.7rem,
              5vw,
              4.7rem
            );

          font-weight: 400;
          line-height: 1;

          letter-spacing: -0.04em;
        }

        .ksr-journey-heading h2 em {
          color: #d0ae65;
          font-style: italic;
        }

        .ksr-journey-heading > p {
          max-width: 470px;

          margin-top: 25px;

          color: #b8c0c6;

          font-size: 14px;
          line-height: 1.85;
        }

        .ksr-journey-steps {
          display: flex;
          flex-direction: column;
        }

        .ksr-journey-step {
          display: grid;

          grid-template-columns:
            65px
            1fr;

          gap: 25px;

          padding: 25px 0;

          border-bottom:
            1px solid
            rgba(255,255,255,0.12);
        }

        .ksr-journey-step:first-child {
          padding-top: 0;
        }

        .ksr-journey-step:last-child {
          border-bottom: 0;
        }

        .ksr-step-number {
          display: grid;
          place-items: center;

          width: 52px;
          height: 52px;

          border:
            1px solid
            rgba(208,174,101,0.45);

          border-radius: 50%;

          color: #d0ae65;

          font-family: Georgia, serif;

          font-size: 13px;
        }

        .ksr-journey-step h3 {
          margin: 0 0 7px;

          color: #fff;

          font-family: Georgia, serif;

          font-size: 25px;
          font-weight: 400;
        }

        .ksr-journey-step p {
          margin: 0;

          color: #aeb8bf;

          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           EDITORIAL
        ===================================================== */

        .ksr-editorial-strip {
          padding: 100px 0;

          background: #eeece6;

          border-top: 1px solid #ddd9cf;
          border-bottom: 1px solid #ddd9cf;
        }

        .ksr-editorial-inner {
          display: grid;

          grid-template-columns:
            100px
            minmax(0, 1fr)
            370px;

          gap: 55px;

          align-items: center;
        }

        .ksr-editorial-mark {
          display: grid;
          place-items: center;

          width: 86px;
          height: 86px;

          border:
            1px solid
            rgba(174,135,64,0.5);

          border-radius: 24px 8px 24px 8px;

          color: var(--gold-dark);

          font-family: Georgia, serif;

          font-size: 40px;
          font-style: italic;
        }

        .ksr-editorial-copy h2 {
          margin: 0;

          color: #202a34;

          font-family: Georgia, serif;

          font-size:
            clamp(
              2.4rem,
              4vw,
              4.2rem
            );

          font-weight: 400;
          line-height: 1;

          letter-spacing: -0.04em;
        }

        .ksr-editorial-copy h2 em {
          color: var(--gold);
          font-style: italic;
        }

        .ksr-editorial-inner > p {
          margin: 0;

          color: #70777d;

          font-size: 14px;
          line-height: 1.9;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .ksr-blog-cta {
          position: relative;

          overflow: hidden;

          background:
            linear-gradient(
              135deg,
              #f8f6ef,
              #eeece5
            );

          border-bottom: 1px solid #ddd9cf;
        }

        .ksr-cta-pattern {
          position: absolute;

          width: 520px;
          height: 520px;

          right: -220px;
          top: -250px;

          border-radius: 50%;

          border:
            1px solid
            rgba(174,135,64,0.18);

          box-shadow:
            0 0 0 55px
              rgba(174,135,64,0.035),
            0 0 0 110px
              rgba(174,135,64,0.025);

          pointer-events: none;
        }

        .ksr-blog-cta-inner {
          position: relative;
          z-index: 2;

          padding-top: 115px;
          padding-bottom: 115px;

          text-align: center;
        }

        .ksr-label-center {
          justify-content: center;
        }

        .ksr-blog-cta-inner h2 {
          max-width: 900px;

          margin: 0 auto;

          color: #1d2730;

          font-family: Georgia, serif;

          font-size:
            clamp(
              2.7rem,
              5vw,
              5rem
            );

          font-weight: 400;
          line-height: 0.98;

          letter-spacing: -0.045em;
        }

        .ksr-blog-cta-inner h2 em {
          color: var(--gold);
          font-style: italic;
        }

        .ksr-blog-cta-inner > p {
          max-width: 600px;

          margin: 25px auto 0;

          color: #737b82;

          font-size: 14px;
          line-height: 1.8;
        }

        .ksr-blog-cta-actions {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 12px;

          margin-top: 34px;
        }

        .ksr-btn-primary,
        .ksr-btn-secondary {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 15px;

          min-height: 52px;

          padding: 0 24px;

          border-radius: 999px;

          text-decoration: none;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 0.12em;
          text-transform: uppercase;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }

        .ksr-btn-primary {
          background: #a9823d;

          color: #fff;

          box-shadow:
            0 12px 30px
            rgba(142,107,46,0.20);
        }

        .ksr-btn-primary span {
          font-size: 17px;
        }

        .ksr-btn-primary:hover {
          transform: translateY(-3px);

          background: #92702f;

          box-shadow:
            0 16px 35px
            rgba(142,107,46,0.27);
        }

        .ksr-btn-secondary {
          border:
            1px solid #c9c5bc;

          color: #34404b;

          background:
            rgba(255,255,255,0.45);
        }

        .ksr-btn-secondary:hover {
          transform: translateY(-3px);

          border-color: var(--gold);

          color: var(--gold-dark);

          background: #fff;
        }

        /* =====================================================
           MODAL
        ===================================================== */

        .ksr-modal-backdrop {
          position: fixed;

          inset: 0;

          z-index: 9999;

          display: flex;

          align-items: center;
          justify-content: center;

          padding: 20px;

          background:
            rgba(27,33,38,0.58);

          backdrop-filter: blur(12px);
        }

        .ksr-article-modal {
          display: flex;
          flex-direction: column;

          width: min(900px, 100%);

          max-height: 92vh;

          overflow: hidden;

          background: #fff;

          border:
            1px solid
            rgba(174,135,64,0.35);

          border-radius: 30px;

          box-shadow:
            0 35px 100px
            rgba(20,25,30,0.28);

          animation:
            ksrModalIn 0.3s ease;
        }

        @keyframes ksrModalIn {
          from {
            opacity: 0;

            transform:
              translateY(20px)
              scale(0.98);
          }

          to {
            opacity: 1;

            transform:
              translateY(0)
              scale(1);
          }
        }

        .ksr-modal-top {
          position: relative;

          flex: 0 0 auto;

          height: 310px;

          overflow: hidden;
        }

        .ksr-modal-top img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .ksr-modal-image-shade {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              rgba(0,0,0,0.02),
              rgba(0,0,0,0.48)
            );
        }

        .ksr-modal-category {
          position: absolute;

          left: 25px;
          bottom: 22px;

          padding: 8px 13px;

          border-radius: 999px;

          background:
            rgba(255,255,255,0.92);

          color: #725727;

          font-size: 9px;
          font-weight: 800;

          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .ksr-modal-close {
          position: absolute;

          top: 17px;
          right: 17px;

          width: 42px;
          height: 42px;

          border:
            1px solid
            rgba(255,255,255,0.55);

          border-radius: 50%;

          background:
            rgba(20,25,30,0.55);

          color: #fff;

          cursor: pointer;

          font-size: 25px;
          line-height: 1;

          backdrop-filter: blur(10px);

          transition:
            transform 0.25s ease;
        }

        .ksr-modal-close:hover {
          transform: rotate(90deg);
        }

        .ksr-modal-scroll {
          min-height: 0;
          overflow-y: auto;
        }

        .ksr-modal-content {
          padding: 42px 50px 45px;
        }

        .ksr-modal-meta {
          margin-bottom: 12px;

          color: #8d9295;

          font-size: 9px;
          font-weight: 800;

          letter-spacing: 0.17em;
          text-transform: uppercase;
        }

        .ksr-modal-content h2 {
          max-width: 760px;

          margin: 0;

          color: #202a34;

          font-family: Georgia, serif;

          font-size:
            clamp(
              2rem,
              4vw,
              3.5rem
            );

          font-weight: 400;
          line-height: 1.05;

          letter-spacing: -0.035em;
        }

        .ksr-modal-rule {
          display: flex;
          align-items: center;

          gap: 10px;

          margin: 26px 0 30px;
        }

        .ksr-modal-rule span {
          width: 55px;
          height: 1px;

          background: var(--gold);
        }

        .ksr-modal-rule b {
          width: 6px;
          height: 6px;

          transform: rotate(45deg);

          background: var(--gold);
        }

        .ksr-article-text {
          color: #606a72;

          font-size: 15px;
          line-height: 1.9;
        }

        .ksr-article-text p {
          margin: 0 0 20px;
        }

        .ksr-article-text h4 {
          margin: 32px 0 12px;

          color: #27313a;

          font-family: Georgia, serif;

          font-size: 23px;
          font-weight: 400;
        }

        .ksr-modal-bottom {
          display: flex;
          justify-content: flex-end;

          margin-top: 38px;
          padding-top: 25px;

          border-top: 1px solid #e5e2db;
        }

        .ksr-modal-bottom button {
          min-height: 45px;

          padding: 0 20px;

          border: 0;
          border-radius: 999px;

          background: #a9823d;

          color: #fff;

          cursor: pointer;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 0.12em;
          text-transform: uppercase;

          transition:
            background 0.25s ease;
        }

        .ksr-modal-bottom button:hover {
          background: #8d692c;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1050px) {
          .ksr-blog-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .ksr-pulse-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .ksr-pulse-card:last-child {
            grid-column: 1 / -1;
          }

          .ksr-editorial-inner {
            grid-template-columns:
              80px
              1fr;
          }

          .ksr-editorial-inner > p {
            grid-column: 2;
          }

          .ksr-journey-inner {
            gap: 55px;
          }
        }

        /* =====================================================
           TABLET SMALL
        ===================================================== */

        @media (max-width: 900px) {
          .ksr-market-header {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .ksr-featured-card {
            grid-template-columns: 1fr;
          }

          .ksr-featured-image {
            min-height: 430px;
          }

          .ksr-featured-content {
            padding: 50px;
          }

          .ksr-wisdom-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .ksr-wisdom-card:last-child {
            grid-column: 1 / -1;
          }

          .ksr-journey-inner {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {
          .ksr-container {
            width:
              calc(100% - 30px);
          }

          .ksr-blog-hero {
            min-height: 570px;
          }

          .ksr-blog-hero-inner {
            padding-top: 120px;
            padding-bottom: 80px;
          }

          .ksr-blog-eyebrow {
            font-size: 8px;
            letter-spacing: 0.2em;
          }

          .ksr-eyebrow-line {
            width: 22px;
          }

          .ksr-blog-hero h1 {
            font-size:
              clamp(
                3rem,
                14vw,
                4.5rem
              );

            margin-top: 25px;
          }

          .ksr-blog-hero p {
            font-size: 13px;
            margin-top: 25px;
          }

          /* BLOG */

          .ksr-blog-section {
            padding: 75px 0 80px;
          }

          .ksr-blog-heading {
            grid-template-columns: 1fr;

            gap: 25px;

            margin-bottom: 35px;
          }

          .ksr-blog-heading h2 {
            font-size: 3rem;
          }

          .ksr-blog-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .ksr-blog-card {
            border-radius:
              28px 28px 12px 12px;
          }

          .ksr-blog-image {
            height: 260px;

            border-radius:
              27px 27px 0 0;
          }

          .ksr-blog-card-body {
            padding: 25px 22px;
          }

          .ksr-blog-card-body h3 {
            font-size: 23px;
          }

          /* MARKET */

          .ksr-market-pulse {
            padding: 80px 0;
          }

          .ksr-market-header {
            gap: 20px;
            margin-bottom: 35px;
          }

          .ksr-market-header h2 {
            font-size: 3rem;
          }

          .ksr-pulse-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .ksr-pulse-card,
          .ksr-pulse-card:last-child {
            grid-column: auto;

            min-height: 300px;

            padding: 28px;

            border-radius: 28px;
          }

          .ksr-pulse-icon {
            margin-bottom: 40px;
          }

          /* FEATURED */

          .ksr-featured-insight {
            padding: 80px 0;
          }

          .ksr-featured-card {
            border-radius: 28px;
          }

          .ksr-featured-image {
            min-height: 300px;
          }

          .ksr-featured-tag {
            left: 20px;
            bottom: 20px;
          }

          .ksr-featured-content {
            padding: 35px 25px;
          }

          .ksr-featured-content h2 {
            font-size: 2.65rem;
          }

          .ksr-featured-content > p {
            font-size: 13px;
          }

          .ksr-featured-button {
            width: 100%;
          }

          /* WISDOM */

          .ksr-property-wisdom {
            padding: 80px 0;
          }

          .ksr-wisdom-header {
            margin-bottom: 35px;
          }

          .ksr-wisdom-header h2 {
            font-size: 3rem;
          }

          .ksr-wisdom-grid {
            grid-template-columns: 1fr;
          }

          .ksr-wisdom-card,
          .ksr-wisdom-card:last-child {
            grid-column: auto;

            min-height: 330px;

            border-radius:
              28px 10px 28px 10px;
          }

          /* JOURNEY */

          .ksr-buying-journey {
            padding: 80px 0;

            border-radius:
              45px 45px 0 0;
          }

          .ksr-journey-heading h2 {
            font-size: 3rem;
          }

          .ksr-journey-step {
            grid-template-columns:
              52px
              1fr;

            gap: 17px;
          }

          .ksr-step-number {
            width: 45px;
            height: 45px;
          }

          .ksr-journey-step h3 {
            font-size: 22px;
          }

          /* EDITORIAL */

          .ksr-editorial-strip {
            padding: 75px 0;
          }

          .ksr-editorial-inner {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .ksr-editorial-mark {
            width: 70px;
            height: 70px;

            font-size: 32px;
          }

          .ksr-editorial-inner > p {
            grid-column: auto;
          }

          /* CTA */

          .ksr-blog-cta-inner {
            padding-top: 80px;
            padding-bottom: 80px;
          }

          .ksr-blog-cta-inner h2 {
            font-size: 3rem;
          }

          .ksr-blog-cta-actions {
            flex-direction: column;
          }

          .ksr-btn-primary,
          .ksr-btn-secondary {
            width: 100%;
          }

          /* MODAL */

          .ksr-modal-backdrop {
            padding: 8px;
          }

          .ksr-article-modal {
            max-height: 94vh;

            border-radius: 20px;
          }

          .ksr-modal-top {
            height: 220px;
          }

          .ksr-modal-content {
            padding:
              28px
              21px
              30px;
          }

          .ksr-modal-content h2 {
            font-size: 2rem;
          }

          .ksr-article-text {
            font-size: 14px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 420px) {
          .ksr-container {
            width:
              calc(100% - 24px);
          }

          .ksr-blog-hero h1 {
            font-size: 2.9rem;
          }

          .ksr-blog-heading h2,
          .ksr-market-header h2,
          .ksr-wisdom-header h2,
          .ksr-journey-heading h2,
          .ksr-blog-cta-inner h2 {
            font-size: 2.6rem;
          }

          .ksr-card-category {
            top: 14px;
            left: 14px;
          }

          .ksr-card-number {
            right: 14px;
          }

          .ksr-featured-content {
            padding: 30px 20px;
          }

          .ksr-featured-content h2 {
            font-size: 2.35rem;
          }

          .ksr-pulse-card {
            padding: 25px;
          }

          .ksr-wisdom-card {
            padding: 28px;
          }

          .ksr-journey-step {
            grid-template-columns:
              45px
              1fr;

            gap: 14px;
          }

          .ksr-step-number {
            width: 42px;
            height: 42px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .ksr-blog-page *,
          .ksr-blog-page *::before,
          .ksr-blog-page *::after {
            scroll-behavior: auto !important;
          }

          .ksr-blog-card,
          .ksr-blog-image img,
          .ksr-read-button,
          .ksr-read-arrow,
          .ksr-featured-image img,
          .ksr-featured-button,
          .ksr-btn-primary,
          .ksr-btn-secondary,
          .ksr-modal-close {
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}