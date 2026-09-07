import React from "react";
import "./Construction.css";

const services = [
  {
    number: "01",
    title: "Residential Construction",
    text: "From refined residences to expansive villas, we deliver thoughtfully planned homes with uncompromising attention to structure, detail and finish.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
    tag: "Homes",
  },
  {
    number: "02",
    title: "Commercial Construction",
    text: "High-performance commercial spaces designed around functionality, longevity and a distinctive architectural identity.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90",
    tag: "Commercial",
  },
  {
    number: "03",
    title: "Villa Construction",
    text: "Private villas crafted as individual expressions of lifestyle, combining architectural character with exceptional construction standards.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90",
    tag: "Luxury Living",
  },
  {
    number: "04",
    title: "Turnkey Construction",
    text: "A seamless end-to-end construction experience covering planning, execution, interiors, coordination and final handover.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=90",
    tag: "Turnkey",
  },
];

const process = [
  {
    number: "01",
    title: "Consultation",
    text: "Understanding your land, vision, lifestyle, budget and long-term requirements.",
  },
  {
    number: "02",
    title: "Planning & Design",
    text: "Detailed planning, architectural coordination and a clear execution roadmap.",
  },
  {
    number: "03",
    title: "Construction",
    text: "Disciplined site execution with quality checks at every major construction stage.",
  },
  {
    number: "04",
    title: "Finishing",
    text: "Premium finishing, detailing and coordinated execution across every space.",
  },
  {
    number: "05",
    title: "Handover",
    text: "Final inspection and a carefully completed property ready for possession.",
  },
];

const stats = [
  ["10+", "Years of Experience"],
  ["100+", "Projects Delivered"],
  ["25+", "Construction Experts"],
  ["99%", "Client Satisfaction"],
];

const projects = [
  {
    title: "Modern Residence",
    location: "Indore, Madhya Pradesh",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "Contemporary Villa",
    location: "Indore, Madhya Pradesh",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "Premium Commercial",
    location: "Madhya Pradesh",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=90",
  },
];

export default function Construction() {
  const scrollToContact = () => {
    document.getElementById("construction-contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="construction-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="construction-hero">
        <div className="construction-hero-image" />

        <div className="construction-hero-overlay" />

        <div className="construction-hero-grid" />

        <div className="construction-container construction-hero-content">
          <div className="construction-eyebrow">
            <span />
            KSR REALTY VENTURES
            <span />
          </div>

          <h1>
            Building Spaces
            <br />
            <em>Built to Last.</em>
          </h1>

          <p className="construction-hero-description">
            End-to-end construction solutions where architectural vision,
            engineering precision and refined craftsmanship come together.
          </p>

          <div className="construction-hero-actions">
            <button
              className="construction-button construction-button-dark"
              onClick={scrollToContact}
            >
              Start Your Project
              <span>↗</span>
            </button>

            <a href="#construction-services" className="construction-text-link">
              Explore Services
              <span>↓</span>
            </a>
          </div>
        </div>

        <div className="construction-hero-bottom">
          <span></span>

          <div className="construction-hero-line">
            <span />
          </div>

          <span></span>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="construction-intro">
        <div className="construction-container">
          <div className="construction-intro-top">
            <div className="construction-section-label">
              <span></span>
              OUR APPROACH
            </div>

            <div className="construction-intro-small">
              Architecture / Engineering / Construction
            </div>
          </div>

          <div className="construction-intro-grid">
            <h2>
              More than construction.
              <br />
              <em>We build confidence.</em>
            </h2>

            <div className="construction-intro-copy">
              <p>
                A building is more than concrete, steel and finishes. It is
                where ideas become tangible, families grow and businesses
                create their future.
              </p>

              <p>
                At KSR Realty Ventures, we manage the complete construction
                journey with a strong focus on quality, transparency,
                timelines and thoughtful execution.
              </p>

              <a href="#construction-process" className="construction-arrow-link">
                Discover our process
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}
      <section className="construction-stats">
        <div className="construction-container construction-stats-grid">
          {stats.map(([number, label]) => (
            <div className="construction-stat" key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section
        className="construction-services"
        id="construction-services"
      >
        <div className="construction-container">

          <div className="construction-section-heading">
            <div>
              <div className="construction-section-label">
                <span></span>
                OUR SERVICES
              </div>

              <h2>
                Construction,
                <br />
                <em>Without Compromise.</em>
              </h2>
            </div>

            <p>
              From the first conversation to the final handover, our team
              manages every detail with purpose and precision.
            </p>
          </div>

          <div className="construction-service-grid">
            {services.map((service) => (
              <article
                className="construction-service-card"
                key={service.number}
              >
                <div className="construction-service-image">
                  <img src={service.image} alt={service.title} />

                  <div className="construction-service-image-overlay" />

                  <span className="construction-service-number">
                    {service.number}
                  </span>

                  <span className="construction-service-tag">
                    {service.tag}
                  </span>
                </div>

                <div className="construction-service-content">
                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <button
                    className="construction-service-link"
                    onClick={scrollToContact}
                  >
                    Discuss this service
                    <span>↗</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    {/* =====================================================
    PROJECT GALLERY
===================================================== */}
<section className="construction-gallery">
  <div className="construction-container">

    <div className="construction-gallery-heading">
      <div className="construction-gallery-eyebrow">
        OUR WORK
      </div>

      <h2>
        Project <em>Gallery</em>
      </h2>

      <p>
        A glimpse of our finest construction and commercial projects.
      </p>
    </div>

    <div className="construction-gallery-grid">

      <div className="construction-gallery-item">
        <img
          src="https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1200&q=90"
          alt="Commercial project"
        />
      </div>

      <div className="construction-gallery-item">
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=90"
          alt="Modern commercial interior"
        />
      </div>

      <div className="construction-gallery-item">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90"
          alt="Modern commercial building"
        />
      </div>

      <div className="construction-gallery-item">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=90"
          alt="Construction site"
        />
      </div>

      <div className="construction-gallery-item">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=90"
          alt="Premium retail project"
        />
      </div>

      <div className="construction-gallery-item">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=90"
          alt="Premium office project"
        />
      </div>

    </div>

  </div>
</section>
      

      {/* =====================================================
          QUALITY BANNER
      ===================================================== */}
      <section className="construction-quality">
        <div className="construction-quality-image" />

        <div className="construction-quality-overlay" />

        <div className="construction-container construction-quality-content">
          <div className="construction-section-label light">
            <span></span>
            BUILT DIFFERENTLY
          </div>

          <h2>
            Every Layer Matters.
            <br />
            <em>Every Detail Counts.</em>
          </h2>

          <div className="construction-quality-bottom">
            <p>
              We combine dependable construction systems with modern
              materials, experienced supervision and rigorous quality
              control to create spaces designed for the years ahead.
            </p>

            <div className="construction-quality-mark">
              <span>KSR</span>
              <small>REALTY VENTURES</small>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section
        className="construction-process"
        id="construction-process"
      >
        <div className="construction-container">

          <div className="construction-process-heading">
            <div className="construction-section-label">
              <span></span>
              THE JOURNEY
            </div>

            <h2>
              From Vision
              <br />
              <em>to Reality.</em>
            </h2>
          </div>

          <div className="construction-process-list">
            {process.map((item, index) => (
              <div className="construction-process-item" key={item.number}>
                <div className="construction-process-number">
                  {item.number}
                </div>

                <div className="construction-process-title">
                  <h3>{item.title}</h3>
                </div>

                <div className="construction-process-description">
                  <p>{item.text}</p>
                </div>

                <div className="construction-process-arrow">
                  {index === process.length - 1 ? "✓" : "↗"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}
      <section className="construction-projects">
        <div className="construction-container">

          <div className="construction-project-heading">
            <div>
              <div className="construction-section-label">
                <span></span>
                SELECTED WORK
              </div>

              <h2>
                Spaces That
                <br />
                <em>Speak For Themselves.</em>
              </h2>
            </div>

            <p>
              A glimpse into the kind of spaces we help bring to life.
            </p>
          </div>

          <div className="construction-project-grid">
            {projects.map((project, index) => (
              <article
                className={`construction-project-card project-${index + 1}`}
                key={project.title}
              >
                <img src={project.image} alt={project.title} />

                <div className="construction-project-overlay" />

                <div className="construction-project-info">
                  <span>{project.location}</span>
                  <h3>{project.title}</h3>
                </div>

                <span className="construction-project-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY KSR
      ===================================================== */}
      <section className="construction-why">
        <div className="construction-container">

          <div className="construction-why-grid">

            <div className="construction-why-heading">
              <div className="construction-section-label">
                <span></span>
                WHY KSR
              </div>

              <h2>
                A Better Way
                <br />
                <em>to build.</em>
              </h2>
            </div>

            <div className="construction-why-list">

              <div className="construction-why-item">
                <span>01</span>
                <div>
                  <h3>Transparent Execution</h3>
                  <p>
                    Clear communication, structured planning and visibility
                    throughout the construction journey.
                  </p>
                </div>
              </div>

              <div className="construction-why-item">
                <span>02</span>
                <div>
                  <h3>Quality First</h3>
                  <p>
                    Material selection, workmanship and site supervision are
                    treated as essential—not optional.
                  </p>
                </div>
              </div>

              <div className="construction-why-item">
                <span>03</span>
                <div>
                  <h3>Experienced Team</h3>
                  <p>
                    Professionals across planning, engineering, execution
                    and project coordination work together.
                  </p>
                </div>
              </div>

              <div className="construction-why-item">
                <span>04</span>
                <div>
                  <h3>One Point of Contact</h3>
                  <p>
                    A streamlined experience that keeps decisions,
                    coordination and progress connected.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section
        className="construction-cta"
        id="construction-contact"
      >
        <div className="construction-cta-pattern" />

        <div className="construction-container construction-cta-content">

          <div className="construction-section-label light">
            <span></span>
            LET'S BUILD
          </div>

          <h2>
            Have a Project
            <br />
            <em>in Mind?</em>
          </h2>

          <p>
            Tell us what you're planning. Our team will help you understand
            the next steps and create a construction roadmap around your
            requirements.
          </p>

          <div className="construction-cta-actions">
            <a
              href="mailto:connect@ksrrealtyventures.com"
              className="construction-button construction-button-light"
            >
              connect@ksrrealtyventures.com
              <span>↗</span>
            </a>

            <a
              href="tel:+919999999999"
              className="construction-cta-phone"
            >
              <small>CALL US</small>
              +91 7470750708
            </a>
          </div>
        </div>
      </section>

     

    </main>
  );
}