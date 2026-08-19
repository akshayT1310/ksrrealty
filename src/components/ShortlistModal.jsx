import React, { useState, useEffect } from 'react';

function ShortlistModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [requirement, setRequirement] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem('shortlistEnquiryShown');
    if (!shown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000); // Pops up after 1 second of loading the site first time
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('shortlistEnquiryShown', 'true');
    // Reset states
    setIsSuccess(false);
    setIsSubmitting(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submission = {
      id: 'sl_' + Date.now(),
      name,
      phone,
      email,
      requirement,
      date: new Date().toLocaleString()
    };

    // Simulate backend submission request (1.2 seconds delay)
    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('ksr_shortlist_submissions') || '[]');
        existing.push(submission);
        localStorage.setItem('ksr_shortlist_submissions', JSON.stringify(existing));
      } catch (err) {
        console.error('Error saving shortlist enquiry:', err);
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Clear inputs
      setName('');
      setPhone('');
      setEmail('');
      setRequirement('');
      sessionStorage.setItem('shortlistEnquiryShown', 'true');

      // Automatically close modal after 3 seconds of success message
      setTimeout(() => {
        setIsOpen(false);
        setIsSuccess(false);
      }, 3000);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="shortlist-modal-backdrop" 
      onClick={(e) => e.target.className === 'shortlist-modal-backdrop' && handleClose()}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(21, 18, 12, 0.48)',
        backdropFilter: 'blur(8px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div 
        className="shortlist-modal-card animate-up"
        style={{
          background: '#FAF8F5',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '680px',
          padding: '48px',
          boxShadow: '0 24px 64px rgba(21, 18, 12, 0.16)',
          border: '1px solid var(--color-hairline)',
          position: 'relative',
          boxSizing: 'border-box'
        }}
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '1.5px solid var(--color-hairline)',
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--color-ink)',
            fontSize: '1.25rem',
            outline: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-brass)';
            e.currentTarget.style.color = 'var(--color-brass)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-hairline)';
            e.currentTarget.style.color = 'var(--color-ink)';
          }}
        >
          &times;
        </button>

        {/* Small Capital Logo Tag */}
        <div 
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.72rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            color: 'var(--color-brass)',
            marginBottom: '8px'
          }}
        >
          KSR REALTY VENTURES
        </div>

        {isSuccess ? (
          /* Premium Success Confirmation UI */
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '40px 0' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(185, 151, 78, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px'
            }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-brass)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              fontWeight: 500,
              color: 'var(--color-navy-dark)',
              margin: '0 0 12px 0'
            }}>
              Thank you!
            </h2>
            <p style={{ color: 'var(--color-taupe)', fontSize: '0.98rem', lineHeight: 1.5, maxWidth: '400px', margin: 0 }}>
              Your enquiry has been received successfully. Our property advisor will contact you shortly.
            </p>
          </div>
        ) : (
          <>
            {/* Title */}
            <h2 
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 4vw, 2.3rem)',
                fontWeight: 500,
                color: 'var(--color-navy-dark)',
                margin: '0 0 32px 0',
                lineHeight: 1.1,
                letterSpacing: '-0.01em'
              }}
            >
              Want a curated shortlist?
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Row 1: Name and Phone number side-by-side */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '8px',
                    border: '1.5px solid var(--color-hairline)',
                    background: 'white',
                    color: 'var(--color-ink)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                <input 
                  type="tel" 
                  placeholder="Phone number" 
                  required 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '8px',
                    border: '1.5px solid var(--color-hairline)',
                    background: 'white',
                    color: 'var(--color-ink)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {/* Row 2: Email address full width */}
              <input 
                type="email" 
                placeholder="Email address" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  borderRadius: '8px',
                  border: '1.5px solid var(--color-hairline)',
                  background: 'white',
                  color: 'var(--color-ink)',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />

              {/* Row 3: What can we help you with? Textarea */}
              <textarea 
                rows="4" 
                placeholder="What can we help you with?" 
                value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  borderRadius: '8px',
                  border: '1.5px solid var(--color-hairline)',
                  background: 'white',
                  color: 'var(--color-ink)',
                  fontSize: '0.95rem',
                  outline: 'none',
                  resize: 'none',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box'
                }}
              />

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '18px 24px',
                  background: 'var(--color-brass)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  boxShadow: '0 4px 12px rgba(185, 151, 78, 0.25)',
                  transition: 'all 0.2s ease',
                  marginTop: '8px',
                  opacity: isSubmitting ? 0.8 : 1
                }}
                onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.filter = 'brightness(1.05)')}
                onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.filter = 'none')}
              >
                {isSubmitting ? 'Submitting enquiry...' : 'Submit enquiry'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ShortlistModal;
