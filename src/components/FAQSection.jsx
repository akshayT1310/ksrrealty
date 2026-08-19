import React, { useState } from 'react';

const faqs = [
  { 
    q: "How do I buy a property through KSR Realty Ventures in Indore?", 
    a: "To buy property in Indore through KSR Realty Ventures, browse verified listings of flats, villas, plots and commercial spaces in Indore. Book a free site visit in Vijay Nagar, Super Corridor, Bypass. Our team handles price negotiation, legal verification, documentation and registration for secure property purchase in Indore." 
  },
  { 
    q: "How can I list my property for sale or rent?", 
    a: "List your property for sale or rent in Indore for free on KSR Realty Ventures. Share details and photos, we verify your property, do professional photography, promote to genuine buyers and tenants in Indore, and manage site visits for fastest property sale in Indore." 
  },
  { 
    q: "Are the property listings verified?", 
    a: "Yes, 100% verified property listings in Indore. Every property in Indore listed on KSR Realty Ventures is physically verified for ownership, legal title, RERA registration and location to provide genuine and fraud-free real estate in Indore." 
  },
  { 
    q: "Do you help with home loans?", 
    a: "Yes, we provide home loan assistance in Indore. Get best home loan offers from SBI, HDFC, ICICI, Axis Bank for properties in Indore with lowest interest rates, quick approval and doorstep service for flats and villas in Indore." 
  },
  { 
    q: "Which areas of Indore does KSR Realty Ventures cover?", 
    a: "KSR Realty Ventures covers all prime locations in Indore including Vijay Nagar, Super Corridor, MR 10, MR 11, Bypass Road, Nipania, Rau, Khandwa Road, AB Road, Dewas Naka and Ujjain Road. Best real estate consultant in Indore for residential and commercial property." 
  },
  { 
    q: "I want to invest outside Indore, can you help?", 
    a: "Yes, we help for property investment outside Indore. Invest in Ujjain, Dhar, Dewas and MP with high-ROI plots and pre-launch deals. Best investment property advisor near Indore for long-term returns." 
  },
  { 
    q: "Are there any charges for buyers?", 
    a: "No brokerage charges for most verified properties for sale in Indore. For premium exclusive properties in Indore, minimal transparent brokerage is discussed upfront. No hidden charges for property buyers in Indore." 
  },
  { 
    q: "Can I schedule a site visit before buying?", 
    a: "Yes, schedule free site visit for property in Indore anytime including weekends. Our expert will show you flats, villas, plots in Indore, explain amenities, connectivity and future appreciation in Indore real estate market." 
  },
  { 
    q: "Do you deal in commercial and investment properties?", 
    a: "Yes, KSR Realty Ventures deals in commercial property in Indore - shops, offices, showrooms, pre-leased shops in Vijay Nagar, Super Corridor, AB Road. Best commercial property dealer in Indore for high rental yield investment." 
  },
];

export default function FAQSection({}) {
  const [open, setOpen] = useState(null);

  // SEO SCHEMA FOR GOOGLE RICH RESULT
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://ksrrealtyventures.com/#faq",
    "mainEntity": faqs.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a }
    }))
  };

  return (
    <section className="section-y" id="faq" style={{background: 'var(--color-limestone)'}}>
      {/* FAQ SCHEMA - SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="container-trs">
        <div className="mb-10">
          <p className="label-upper mb-3" style={{color: 'var(--color-brass)'}}>Common questions</p>
          <h2 className="font-display font-medium leading-tight max-w-lg" style={{fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-ink)'}}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12">
          <div className="divide-y divide-[var(--color-hairline)]">
            {faqs.slice(0, 5).map((item, i) => (
              <div key={i} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 itemProp="name" className="m-0">
                  <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-start justify-between gap-4 py-5 text-left group">
                    <span className="font-medium text-sm md:text-base transition-colors group-hover:text-[var(--color-brass)]" style={{color: 'var(--color-ink)'}}>{item.q}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`shrink-0 mt-1 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} style={{color: 'var(--color-taupe)'}}><path d="m6 9 6 6 6-6"></path></svg>
                  </button>
                </h3>
                {open === i && (
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text" className="text-[13.5px] leading-[1.7] pb-5 pr-6 -mt-1" style={{color: 'var(--color-ink)', opacity: 0.65}}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="divide-y divide-[var(--color-hairline)]">
            {faqs.slice(5, 9).map((item, idx) => {
              const i = idx + 5;
              return (
                <div key={i} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 itemProp="name" className="m-0">
                    <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-start justify-between gap-4 py-5 text-left group">
                      <span className="font-medium text-sm md:text-base transition-colors group-hover:text-[var(--color-brass)]" style={{color: 'var(--color-ink)'}}>{item.q}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`shrink-0 mt-1 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} style={{color: 'var(--color-taupe)'}}><path d="m6 9 6 6 6-6"></path></svg>
                    </button>
                  </h3>
                  {open === i && (
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p itemProp="text" className="text-[13.5px] leading-[1.7] pb-5 pr-6 -mt-1" style={{color: 'var(--color-ink)', opacity: 0.65}}>{item.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}