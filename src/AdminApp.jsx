import React, { useState, useEffect } from 'react';
import { ksrInfo } from './ksr-info';

export default function AdminApp() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Submissions state
  const [properties, setProperties] = useState([]);
  const [shortlists, setShortlists] = useState([]);
  const [contacts, setContacts] = useState([]);

  // UI state
  const [activeTab, setActiveTab] = useState('properties'); // 'properties', 'shortlists', 'contacts'
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMedia, setActiveMedia] = useState(null);

  // Check login state on mount
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('ksr_admin_logged_in');
    if (isLoggedIn === 'true') {
      setIsAdminLoggedIn(true);
    }
    loadData();
  }, []);

  // Load all submissions from localStorage
  const loadData = () => {
    try {
      const storedProperties = JSON.parse(localStorage.getItem('ksr_property_submissions') || '[]');
      const storedShortlists = JSON.parse(localStorage.getItem('ksr_shortlist_submissions') || '[]');
      const storedContacts = JSON.parse(localStorage.getItem('ksr_contact_submissions') || '[]');

      setProperties(storedProperties);
      setShortlists(storedShortlists);
      setContacts(storedContacts);
    } catch (err) {
      console.error('Error loading submissions data:', err);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');

    if (username.toLowerCase() === 'admin' && password === 'admin') {
      setIsAdminLoggedIn(true);
      sessionStorage.setItem('ksr_admin_logged_in', 'true');
      loadData();
    } else {
      setLoginError('Invalid admin username or password');
    }
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    sessionStorage.removeItem('ksr_admin_logged_in');
  };

  const handleDelete = (type, id) => {
    if (!window.confirm('Are you sure you want to delete this submission?')) return;

    try {
      let key = '';
      let updatedList = [];

      if (type === 'properties') {
        key = 'ksr_property_submissions';
        updatedList = properties.filter((item) => item.id !== id);
        setProperties(updatedList);
      } else if (type === 'shortlists') {
        key = 'ksr_shortlist_submissions';
        updatedList = shortlists.filter((item) => item.id !== id);
        setShortlists(updatedList);
      } else {
        key = 'ksr_contact_submissions';
        updatedList = contacts.filter((item) => item.id !== id);
        setContacts(updatedList);
      }

      localStorage.setItem(key, JSON.stringify(updatedList));
    } catch (err) {
      console.error('Error deleting submission:', err);
    }
  };

  const handleClearAll = () => {
    if (!window.confirm('🚨 WARNING: Are you sure you want to delete ALL submissions from local storage? This action cannot be undone.')) return;

    try {
      localStorage.removeItem('ksr_property_submissions');
      localStorage.removeItem('ksr_shortlist_submissions');
      localStorage.removeItem('ksr_contact_submissions');
      
      setProperties([]);
      setShortlists([]);
      setContacts([]);
    } catch (err) {
      console.error('Error clearing data:', err);
    }
  };

  // CSV Exporter
  const handleExportCSV = () => {
    let dataToExport = [];
    let filename = '';
    let headers = [];

    if (activeTab === 'properties') {
      dataToExport = filteredProperties;
      filename = 'KSR_Property_Listings.csv';
      headers = ['ID', 'Date', 'Tab Type', 'Looking To', 'Property Type', 'Locality', 'BHK', 'Area', 'Price', 'Description', 'Name', 'Phone', 'Email', 'Role', 'Total Media Files'];
    } else if (activeTab === 'shortlists') {
      dataToExport = filteredShortlists;
      filename = 'KSR_Shortlist_Enquiries.csv';
      headers = ['ID', 'Date', 'Name', 'Phone', 'Email', 'Requirement Details'];
    } else {
      dataToExport = filteredContacts;
      filename = 'KSR_Contact_Inquiries.csv';
      headers = ['ID', 'Date', 'Name', 'Phone', 'Email', 'Message'];
    }

    if (dataToExport.length === 0) {
      alert('No data available to export.');
      return;
    }

    const rows = dataToExport.map((item) => {
      if (activeTab === 'properties') {
        return [
          item.id,
          item.date,
          item.activeTab,
          item.lookingTo,
          item.propertyType,
          `"${(item.locality || '').replace(/"/g, '""')}"`,
          item.bhk,
          item.area,
          item.price,
          `"${(item.description || '').replace(/"/g, '""')}"`,
          `"${(item.fullName || '').replace(/"/g, '""')}"`,
          item.phone,
          item.email,
          item.userRole,
          item.files ? item.files.length : 0
        ];
      } else if (activeTab === 'shortlists') {
        return [
          item.id,
          item.date,
          `"${(item.name || '').replace(/"/g, '""')}"`,
          item.phone,
          item.email,
          `"${(item.requirement || '').replace(/"/g, '""')}"`
        ];
      } else {
        return [
          item.id,
          item.date,
          `"${(item.name || '').replace(/"/g, '""')}"`,
          item.phone,
          item.email,
          `"${(item.msg || '').replace(/"/g, '""')}"`
        ];
      }
    });

    const csvContent = [
      headers.join(','),
      ...rows.map(e => e.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Search filter computations
  const query = searchQuery.toLowerCase();

  const filteredProperties = properties.filter((item) => {
    return (
      (item.fullName || '').toLowerCase().includes(query) ||
      (item.phone || '').toLowerCase().includes(query) ||
      (item.locality || '').toLowerCase().includes(query) ||
      (item.propertyType || '').toLowerCase().includes(query)
    );
  });

  const filteredShortlists = shortlists.filter((item) => {
    return (
      (item.name || '').toLowerCase().includes(query) ||
      (item.phone || '').toLowerCase().includes(query) ||
      (item.email || '').toLowerCase().includes(query) ||
      (item.requirement || '').toLowerCase().includes(query)
    );
  });

  const filteredContacts = contacts.filter((item) => {
    return (
      (item.name || '').toLowerCase().includes(query) ||
      (item.phone || '').toLowerCase().includes(query) ||
      (item.email || '').toLowerCase().includes(query) ||
      (item.msg || '').toLowerCase().includes(query)
    );
  });

  if (!isAdminLoggedIn) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-limestone)', padding: '40px 20px', boxSizing: 'border-box' }}>
        <div
          style={{
            background: 'white',
            borderRadius: '24px',
            width: '100%',
            maxWidth: '440px',
            padding: '48px 40px',
            boxShadow: '0 24px 64px rgba(21, 18, 12, 0.12)',
            border: '1px solid var(--color-hairline)',
            boxSizing: 'border-box',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '38px', width: '38px' }}>
                <rect x="2" y="2" width="44" height="44" rx="8" fill="url(#goldGradAdminPageIconLogin)" stroke="var(--color-brass)" strokeWidth="1.5" />
                <path d="M12 28V16M12 22L20 16M12 22L20 28M24 16L32 28M32 16V28" stroke="#172033" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 20L24 8L40 20" stroke="#172033" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="goldGradAdminPageIconLogin" x1="2" y1="2" x2="46" y2="46" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fdfcf7" />
                    <stop offset="0.5" stopColor="#cba34c" />
                    <stop offset="1" stopColor="#b08935" />
                  </linearGradient>
                </defs>
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, textAlign: 'left' }}>
                <div style={{ fontSize: '20px', fontFamily: "'Outfit', sans-serif", display: 'flex', gap: '6px' }}>
                  <span style={{ fontWeight: 800, color: '#172033', letterSpacing: '1px' }}>KSR</span>
                  <span style={{ fontWeight: 400, color: 'var(--color-brass)', letterSpacing: '1px' }}>REALTY</span>
                </div>
                <span style={{ fontSize: '9px', fontWeight: 600, color: 'var(--color-taupe)', letterSpacing: '3.5px', textTransform: 'uppercase', marginTop: '2px' }}>
                  VENTURES
                </span>
              </div>
            </div>
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 500, color: 'var(--color-navy-dark)', textAlign: 'center', margin: '0 0 8px 0' }}>
            Admin Panel
          </h2>
          <p style={{ color: 'var(--color-taupe)', fontSize: '0.875rem', textAlign: 'center', margin: '0 0 32px 0' }}>
            Enter credential details to access the dashboard
          </p>

          {loginError && (
            <div style={{ padding: '12px 14px', background: '#fef2f2', border: '1px solid #fca5a5', color: '#b91c1c', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '20px' }}>
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-taupe)', marginBottom: '8px' }}>
                Username
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter admin username"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1.5px solid var(--color-hairline)',
                  fontSize: '0.92rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-taupe)', marginBottom: '8px' }}>
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1.5px solid var(--color-hairline)',
                  fontSize: '0.92rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '14px 20px',
                background: 'var(--color-navy)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(16, 38, 66, 0.15)',
                transition: 'all 0.2s ease',
                marginTop: '8px'
              }}
            >
              Sign In
            </button>
          </form>
        </div>
      </main>
    );
  }

  const activeList = activeTab === 'properties' ? filteredProperties : activeTab === 'shortlists' ? filteredShortlists : filteredContacts;

  return (
    <main style={{ minHeight: '100vh', background: 'var(--color-limestone)', padding: '60px 0 80px', fontFamily: 'var(--font-body)', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', boxSizing: 'border-box' }}>
        
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', marginBottom: '32px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '42px', width: '42px' }}>
                <rect x="2" y="2" width="44" height="44" rx="8" fill="url(#goldGradAdminPageIconHeader)" stroke="var(--color-brass)" strokeWidth="1.5" />
                <path d="M12 28V16M12 22L20 16M12 22L20 28M24 16L32 28M32 16V28" stroke="#172033" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 20L24 8L40 20" stroke="#172033" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="goldGradAdminPageIconHeader" x1="2" y1="2" x2="46" y2="46" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fdfcf7" />
                    <stop offset="0.5" stopColor="#cba34c" />
                    <stop offset="1" stopColor="#b08935" />
                  </linearGradient>
                </defs>
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, textAlign: 'left' }}>
                <div style={{ fontSize: '20px', fontFamily: "'Outfit', sans-serif", display: 'flex', gap: '6px' }}>
                  <span style={{ fontWeight: 800, color: '#172033', letterSpacing: '1px' }}>KSR</span>
                  <span style={{ fontWeight: 400, color: 'var(--color-brass)', letterSpacing: '1px' }}>REALTY</span>
                </div>
                <span style={{ fontSize: '9px', fontWeight: 600, color: 'var(--color-taupe)', letterSpacing: '3.5px', textTransform: 'uppercase', marginTop: '2px' }}>
                  VENTURES
                </span>
              </div>
            </div>
            <div style={{ borderLeft: '1.5px solid var(--color-hairline)', paddingLeft: '16px' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-brass)', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '2px' }}>
                INTERNAL MANAGEMENT PANEL
              </span>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 500, color: 'var(--color-navy-dark)', margin: 0, lineHeight: 1.1 }}>
                Admin Panel
              </h1>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a
              href="/"
              style={{
                padding: '10px 20px',
                border: '1.5px solid var(--color-hairline)',
                background: 'white',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.875rem',
                color: 'var(--color-navy)',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              🏡 Go to Website
            </a>
            <button
              onClick={handleLogout}
              style={{
                padding: '10px 20px',
                border: '1.5px solid var(--color-hairline)',
                background: 'white',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.875rem',
                color: 'var(--color-taupe)',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                transition: 'all 0.2s ease'
              }}
            >
              🚪 Sign out
            </button>
          </div>
        </div>

        {/* KPI Metrics Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          <div style={{ background: 'white', borderRadius: '16px', padding: '24px', border: '1px solid var(--color-hairline)', boxShadow: 'var(--shadow-card)' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-taupe)' }}>
              Total Submissions
            </span>
            <h3 style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--color-navy-dark)', margin: '8px 0 0 0' }}>
              {properties.length + shortlists.length + contacts.length}
            </h3>
          </div>
          <div style={{ background: 'white', borderRadius: '16px', padding: '24px', border: '1px solid var(--color-hairline)', boxShadow: 'var(--shadow-card)', cursor: 'pointer' }} onClick={() => setActiveTab('properties')}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-brass)' }}>
              Property Listings
            </span>
            <h3 style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--color-navy-dark)', margin: '8px 0 0 0' }}>
              {properties.length}
            </h3>
          </div>
          <div style={{ background: 'white', borderRadius: '16px', padding: '24px', border: '1px solid var(--color-hairline)', boxShadow: 'var(--shadow-card)', cursor: 'pointer' }} onClick={() => setActiveTab('shortlists')}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-brass)' }}>
              Shortlist Enquiries
            </span>
            <h3 style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--color-navy-dark)', margin: '8px 0 0 0' }}>
              {shortlists.length}
            </h3>
          </div>
          <div style={{ background: 'white', borderRadius: '16px', padding: '24px', border: '1px solid var(--color-hairline)', boxShadow: 'var(--shadow-card)', cursor: 'pointer' }} onClick={() => setActiveTab('contacts')}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-brass)' }}>
              Contact Messages
            </span>
            <h3 style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--color-navy-dark)', margin: '8px 0 0 0' }}>
              {contacts.length}
            </h3>
          </div>
        </div>

        {/* Dashboard Area */}
        <div style={{ background: 'white', borderRadius: '24px', border: '1px solid var(--color-hairline)', boxShadow: 'var(--shadow-card)', overflow: 'hidden' }}>
          
          {/* Filters, Search & Exports Header */}
          <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--color-hairline)', background: '#FAF8F5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            {/* Left Tabs */}
            <div style={{ display: 'flex', gap: '8px', background: 'rgba(23, 32, 51, 0.05)', padding: '4px', borderRadius: '10px' }}>
              <button
                onClick={() => { setActiveTab('properties'); setSearchQuery(''); }}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: activeTab === 'properties' ? 'white' : 'transparent',
                  color: activeTab === 'properties' ? 'var(--color-navy-dark)' : 'var(--color-taupe)',
                  boxShadow: activeTab === 'properties' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none'
                }}
              >
                🏡 Properties ({filteredProperties.length})
              </button>
              <button
                onClick={() => { setActiveTab('shortlists'); setSearchQuery(''); }}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: activeTab === 'shortlists' ? 'white' : 'transparent',
                  color: activeTab === 'shortlists' ? 'var(--color-navy-dark)' : 'var(--color-taupe)',
                  boxShadow: activeTab === 'shortlists' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none'
                }}
              >
                🔍 Shortlists ({filteredShortlists.length})
              </button>
              <button
                onClick={() => { setActiveTab('contacts'); setSearchQuery(''); }}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: activeTab === 'contacts' ? 'white' : 'transparent',
                  color: activeTab === 'contacts' ? 'var(--color-navy-dark)' : 'var(--color-taupe)',
                  boxShadow: activeTab === 'contacts' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none'
                }}
              >
                ✉️ Contacts ({filteredContacts.length})
              </button>
            </div>

            {/* Right Tools: Search, Export, Clear */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <input
                type="text"
                placeholder={`Search active entries...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: '1.5px solid var(--color-hairline)',
                  fontSize: '0.875rem',
                  outline: 'none',
                  minWidth: '220px'
                }}
              />
              <button
                onClick={handleExportCSV}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  background: 'var(--color-brass)',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'filter 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.filter = 'none'}
              >
                📥 Export CSV
              </button>
              <button
                onClick={handleClearAll}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  background: '#ef4444',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'filter 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.filter = 'none'}
              >
                🚨 Clear DB
              </button>
            </div>
          </div>

          {/* Submissions Table / Cards */}
          <div style={{ overflowX: 'auto' }}>
            {activeList.length === 0 ? (
              <div style={{ padding: '80px 40px', textAlign: 'center', color: 'var(--color-taupe)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>📭</div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-navy-dark)', margin: '0 0 4px 0' }}>No submissions found</h4>
                <p style={{ margin: 0, fontSize: '0.875rem' }}>Submit one of the forms on the website to populate the dashboard.</p>
              </div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '850px' }}>
                <thead>
                  <tr style={{ background: '#FAF8F5', borderBottom: '1px solid var(--color-hairline)' }}>
                    <th style={{ padding: '16px 24px', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-taupe)', width: '100px' }}>Date</th>
                    <th style={{ padding: '16px 24px', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-taupe)' }}>Submitter</th>
                    {activeTab === 'properties' && (
                      <>
                        <th style={{ padding: '16px 24px', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-taupe)' }}>Listing Type</th>
                        <th style={{ padding: '16px 24px', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-taupe)' }}>Location & Details</th>
                        <th style={{ padding: '16px 24px', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-taupe)' }}>Price</th>
                        <th style={{ padding: '16px 24px', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-taupe)' }}>Media</th>
                      </>
                    )}
                    {activeTab === 'shortlists' && (
                      <th style={{ padding: '16px 24px', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-taupe)' }}>Requirement Details</th>
                    )}
                    {activeTab === 'contacts' && (
                      <th style={{ padding: '16px 24px', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-taupe)' }}>Message</th>
                    )}
                    <th style={{ padding: '16px 24px', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-taupe)', width: '80px', textAlign: 'center' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {activeList.map((item, idx) => (
                    <tr key={item.id} style={{ borderBottom: idx < activeList.length - 1 ? '1px solid var(--color-hairline)' : 'none', verticalAlign: 'top' }}>
                      <td style={{ padding: '20px 24px', fontSize: '0.85rem', color: 'var(--color-taupe)' }}>
                        {item.date ? item.date.split(',')[0] : ''}
                        <span style={{ display: 'block', fontSize: '0.72rem', opacity: 0.8, marginTop: '2px' }}>
                          {item.date ? item.date.split(',')[1] : ''}
                        </span>
                      </td>

                      <td style={{ padding: '20px 24px', fontSize: '0.9rem' }}>
                        <strong style={{ display: 'block', color: 'var(--color-navy-dark)', fontWeight: 600 }}>
                          {item.fullName || item.name}
                        </strong>
                        <a href={`tel:${item.phone}`} style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-brass)', marginTop: '4px', fontWeight: 500 }}>
                          📞 {item.phone}
                        </a>
                        {item.email && (
                          <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--color-taupe)', marginTop: '2px' }}>
                            ✉️ {item.email}
                          </span>
                        )}
                        {item.userRole && (
                          <span style={{ display: 'inline-block', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: 'white', background: '#102642', padding: '2px 6px', borderRadius: '4px', marginTop: '6px' }}>
                            {item.userRole}
                          </span>
                        )}
                      </td>

                      {activeTab === 'properties' && (
                        <>
                          <td style={{ padding: '20px 24px', fontSize: '0.875rem' }}>
                            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: '#8A6D1F', background: '#fef3c7', padding: '2px 8px', borderRadius: '12px', marginBottom: '6px' }}>
                              {item.activeTab === 'property' ? 'For Sale' : 'Seeking'}
                            </span>
                            <span style={{ display: 'block', textTransform: 'capitalize', fontWeight: 500 }}>
                              {item.lookingTo} - {item.propertyType}
                            </span>
                          </td>
                          <td style={{ padding: '20px 24px', fontSize: '0.875rem', maxWidth: '300px' }}>
                            <div style={{ fontWeight: 600, color: 'var(--color-navy-dark)' }}>📍 {item.locality}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--color-taupe)', marginTop: '4px' }}>
                              {item.bhk !== 'NA' && `${item.bhk} BHK • `}{item.area} Sq.Ft.
                            </div>
                            {item.description && (
                              <p style={{ margin: '8px 0 0 0', fontSize: '0.8rem', color: 'var(--color-taupe)', fontStyle: 'italic', lineHeight: 1.4 }}>
                                "{item.description}"
                              </p>
                            )}
                          </td>
                          <td style={{ padding: '20px 24px', fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-brass)' }}>
                            ₹{item.price}
                          </td>
                          <td style={{ padding: '20px 24px' }}>
                            {item.files && item.files.length > 0 ? (
                              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                {item.files.map((file, fIdx) => (
                                  <div 
                                    key={fIdx} 
                                    onClick={() => setActiveMedia(file)}
                                    style={{ 
                                      width: '40px', 
                                      height: '40px', 
                                      borderRadius: '6px', 
                                      overflow: 'hidden', 
                                      border: '1px solid #e5e7eb', 
                                      background: '#111827', 
                                      display: 'flex', 
                                      alignItems: 'center', 
                                      justifyContent: 'center',
                                      cursor: 'pointer',
                                      transition: 'transform 0.15s ease'
                                    }} 
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                                    title={`Click to open: ${file.name} (${Math.round(file.size / 1024)} KB)`}
                                  >
                                    {file.type === 'video' ? (
                                      <div style={{ fontSize: '12px' }}>🎬</div>
                                    ) : (
                                      <img src={file.previewUrl} alt="Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    )}
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <span style={{ fontSize: '0.75rem', color: 'var(--color-taupe)' }}>No media</span>
                            )}
                          </td>
                        </>
                      )}

                      {activeTab === 'shortlists' && (
                        <td style={{ padding: '20px 24px', fontSize: '0.875rem', maxWidth: '400px', lineHeight: 1.5, color: 'var(--color-ink)' }}>
                          {item.requirement}
                        </td>
                      )}

                      {activeTab === 'contacts' && (
                        <td style={{ padding: '20px 24px', fontSize: '0.875rem', maxWidth: '400px', lineHeight: 1.5, color: 'var(--color-ink)' }}>
                          {item.msg}
                        </td>
                      )}

                      <td style={{ padding: '20px 24px', textAlign: 'center' }}>
                        <button
                          onClick={() => handleDelete(activeTab, item.id)}
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            background: '#fef2f2',
                            border: '1px solid #fee2e2',
                            color: '#ef4444',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1rem',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#fee2e2';
                            e.currentTarget.style.borderColor = '#fca5a5';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#fef2f2';
                            e.currentTarget.style.borderColor = '#fee2e2';
                          }}
                        >
                          &times;
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Media Lightbox Modal */}
        {activeMedia && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(16, 20, 28, 0.85)',
              backdropFilter: 'blur(12px)',
              zIndex: 3000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              boxSizing: 'border-box'
            }}
            onClick={(e) => e.target === e.currentTarget && setActiveMedia(null)}
          >
            <div
              className="animate-up"
              style={{
                background: 'white',
                borderRadius: '20px',
                width: '100%',
                maxWidth: '680px',
                padding: '24px',
                boxShadow: '0 24px 64px rgba(0, 0, 0, 0.3)',
                border: '1px solid var(--color-hairline)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                position: 'relative',
                boxSizing: 'border-box'
              }}
            >
              {/* Lightbox Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '12px' }}>
                <div style={{ overflow: 'hidden' }}>
                  <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: 'var(--color-navy-dark)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    {activeMedia.name}
                  </h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-taupe)' }}>
                    Type: {activeMedia.type === 'video' ? 'Video' : 'Image'} • Size: {(activeMedia.size / (1024 * 1024)).toFixed(2)} MB
                  </span>
                </div>
                {/* Close Cross */}
                <button
                  onClick={() => setActiveMedia(null)}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: '1px solid var(--color-hairline)',
                    background: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '1.25rem',
                    color: 'var(--color-ink)',
                    outline: 'none',
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
                  &times;
                </button>
              </div>

              {/* Lightbox Media Container */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#111827', borderRadius: '12px', overflow: 'hidden', minHeight: '300px', maxHeight: '55vh' }}>
                {activeMedia.type === 'video' ? (
                  <video 
                    src={activeMedia.previewUrl} 
                    controls 
                    autoPlay 
                    style={{ width: '100%', height: '100%', maxHeight: '55vh', objectFit: 'contain' }} 
                  />
                ) : (
                  <img 
                    src={activeMedia.previewUrl} 
                    alt={activeMedia.name} 
                    style={{ width: '100%', height: '100%', maxHeight: '55vh', objectFit: 'contain' }} 
                  />
                )}
              </div>

              {/* Lightbox Footer Actions */}
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'end', marginTop: '4px' }}>
                <button
                  type="button"
                  onClick={() => setActiveMedia(null)}
                  style={{
                    padding: '10px 20px',
                    background: 'white',
                    border: '1.5px solid var(--color-hairline)',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    color: 'var(--color-taupe)',
                    cursor: 'pointer',
                    boxSizing: 'border-box'
                  }}
                >
                  Cancel
                </button>
                <a
                  href={activeMedia.previewUrl}
                  download={activeMedia.name}
                  style={{
                    padding: '10px 24px',
                    background: 'var(--color-brass)',
                    color: 'white',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 12px rgba(185, 151, 78, 0.2)',
                    boxSizing: 'border-box'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download File
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
