import React, { useState } from 'react';

export default function AuthModal({ onClose, onLoginSuccess }) {
  const [activeTab, setActiveTab] = useState('signin'); // 'signin' or 'signup'
  const [identifier, setIdentifier] = useState(''); // Email or Phone number
  const [password, setPassword] = useState('');
  
  // Sign up fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (activeTab === 'signin') {
      if (!identifier) {
        setError('Please enter your email or phone number');
        return;
      }
      if (!password) {
        setError('Please enter your password');
        return;
      }

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onLoginSuccess(identifier);
      }, 1200);
    } else {
      if (!fullName || !email || !phone || !signUpPassword) {
        setError('Please fill in all fields');
        return;
      }
      if (phone.length !== 10) {
        setError('Please enter a valid 10-digit phone number');
        return;
      }

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onLoginSuccess(phone);
      }, 1200);
    }
  };

  return (
    <div
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
        padding: '20px',
        boxSizing: 'border-box'
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="animate-up"
        style={{
          background: '#FAF8F5',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '480px',
          padding: '40px',
          boxShadow: '0 24px 64px rgba(21, 18, 12, 0.16)',
          border: '1px solid var(--color-hairline)',
          position: 'relative',
          boxSizing: 'border-box',
          fontFamily: "var(--font-body)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            border: '1.5px solid var(--color-hairline)',
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--color-ink)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            outline: 'none',
            transition: 'all 0.2s ease',
            boxSizing: 'border-box'
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
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Top Header Section */}
        <div style={{ marginBottom: '24px' }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#c09840',
              marginBottom: '6px',
            }}
          >
            KSR REALTY VENTURES
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              fontWeight: 500,
              color: 'var(--color-navy-dark)',
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: '-0.01em'
            }}
          >
            {activeTab === 'signin' ? 'Sign in to KSR' : 'Create Account'}
          </h2>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--color-hairline)', marginBottom: '24px' }}></div>

        {/* Toggle tabs (Sign In / Create Account) */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '24px' }}>
          <div 
            style={{ 
              display: 'inline-flex', 
              padding: '4px', 
              borderRadius: '9999px', 
              border: '1.5px solid var(--color-hairline)', 
              background: 'white' 
            }}
          >
            <button
              type="button"
              onClick={() => {
                setActiveTab('signin');
                setError('');
              }}
              style={{
                padding: '8px 24px',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: activeTab === 'signin' ? '#102642' : 'transparent',
                color: activeTab === 'signin' ? 'white' : 'var(--color-taupe)',
              }}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('signup');
                setError('');
              }}
              style={{
                padding: '8px 24px',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: activeTab === 'signup' ? '#102642' : 'transparent',
                color: activeTab === 'signup' ? 'white' : 'var(--color-taupe)',
              }}
            >
              Create Account
            </button>
          </div>
        </div>

        {error && (
          <div 
            style={{ 
              marginBottom: '20px', 
              padding: '14px', 
              borderRadius: '12px', 
              fontSize: '0.875rem', 
              background: '#fef2f2', 
              border: '1px solid #fca5a5', 
              color: '#b91c1c' 
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {activeTab === 'signin' ? (
            <>
              {/* Sign In Inputs */}
              <div>
                <input
                  type="text"
                  placeholder="Email or phone number"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: '1.5px solid var(--color-hairline)',
                    background: 'white',
                    color: 'var(--color-ink)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s ease'
                  }}
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: '1.5px solid var(--color-hairline)',
                    background: 'white',
                    color: 'var(--color-ink)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s ease'
                  }}
                  required
                  disabled={loading}
                />
              </div>
            </>
          ) : (
            <>
              {/* Create Account Inputs */}
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: '1.5px solid var(--color-hairline)',
                    background: 'white',
                    color: 'var(--color-ink)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s ease'
                  }}
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: '1.5px solid var(--color-hairline)',
                    background: 'white',
                    color: 'var(--color-ink)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s ease'
                  }}
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone number"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: '1.5px solid var(--color-hairline)',
                    background: 'white',
                    color: 'var(--color-ink)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s ease'
                  }}
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: '1.5px solid var(--color-hairline)',
                    background: 'white',
                    color: 'var(--color-ink)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s ease'
                  }}
                  required
                  disabled={loading}
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '16px 24px',
              background: '#b9974e',
              color: '#102642',
              border: 'none',
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(185, 151, 78, 0.2)',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxSizing: 'border-box',
              marginTop: '8px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'brightness(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'none';
            }}
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-[#102642] border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" x2="3" y1="12" y2="12" />
                </svg>
                <span>{activeTab === 'signin' ? 'Sign in' : 'Create Account'}</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
