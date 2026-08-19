import React, { useState, useRef } from 'react';

export default function PostPropertyModal({ onClose, userPhone, initialType = 'property' }) {
  const [activeTab, setActiveTab] = useState(initialType); // 'property' or 'requirement'
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Form fields
  const [lookingTo, setLookingTo] = useState('sell'); // 'sell', 'rent', 'lease'
  const [propertyType, setPropertyType] = useState('flat'); // 'flat', 'villa', 'plot', 'office', 'shop'
  const [locality, setLocality] = useState('');
  const [bhk, setBhk] = useState('3'); // '1', '2', '3', '4', '5+', 'NA'
  const [area, setArea] = useState('');
  const [price, setPrice] = useState('');
  const [priceUnit, setPriceUnit] = useState('L'); // 'L' for Lakhs, 'Cr' for Crores
  const [description, setDescription] = useState('');

  // Contact Info
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [userRole, setUserRole] = useState('owner'); // 'owner', 'agent', 'builder'

  // Files state
  const [uploadedFiles, setUploadedFiles] = useState([]); // Array of { file, previewUrl, type: 'image'|'video' }
  const fileInputRef = useRef(null);

  // Maximum file size limit: 5MB
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setError('');

    const validFiles = [];
    let sizeErrorOccurred = false;

    files.forEach((file) => {
      if (file.size > MAX_FILE_SIZE) {
        sizeErrorOccurred = true;
        return;
      }

      const previewUrl = URL.createObjectURL(file);
      const isVideo = file.type.startsWith('video/');
      validFiles.push({
        file,
        previewUrl,
        type: isVideo ? 'video' : 'image',
      });
    });

    if (sizeErrorOccurred) {
      setError('Some files were ignored because they exceed the 5MB size limit.');
    }

    setUploadedFiles((prev) => [...prev, ...validFiles]);
    
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemoveFile = (indexToRemove) => {
    setUploadedFiles((prev) => {
      const fileToRevoke = prev[indexToRemove];
      if (fileToRevoke) {
        URL.revokeObjectURL(fileToRevoke.previewUrl);
      }
      return prev.filter((_, idx) => idx !== indexToRemove);
    });
  };

  const compressImage = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 400;
          const MAX_HEIGHT = 400;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', 0.65));
        };
        img.src = event.target.result;
      };
      reader.onerror = () => resolve('');
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!locality) {
      setError('Please enter a locality or address in Indore');
      return;
    }
    if (!fullName) {
      setError('Please enter your full name');
      return;
    }

    setError('');
    setLoading(true);

    try {
      // Process files: convert images to Base64
      const filesData = [];
      for (const item of uploadedFiles) {
        let preview = '';
        if (item.type === 'image') {
          preview = await compressImage(item.file);
        } else {
          // Video fallback path
          preview = '/assets/video/herosection.mp4';
        }
        
        filesData.push({
          name: item.file.name,
          size: item.file.size,
          type: item.type,
          previewUrl: preview || '/assets/images/properties/horizon_tower.jpg'
        });
      }

      const submission = {
        id: 'prop_' + Date.now(),
        activeTab,
        lookingTo,
        propertyType,
        locality,
        bhk: ['flat', 'villa'].includes(propertyType) ? bhk : 'NA',
        area,
        price: `${price} ${priceUnit}`,
        description,
        fullName,
        email,
        phone: userPhone,
        userRole,
        files: filesData,
        date: new Date().toLocaleString()
      };

      setTimeout(() => {
        try {
          const existing = JSON.parse(localStorage.getItem('ksr_property_submissions') || '[]');
          existing.push(submission);
          localStorage.setItem('ksr_property_submissions', JSON.stringify(existing));
        } catch (err) {
          console.error('Error saving property listing:', err);
          setError('Could not submit. Data is too large.');
          setLoading(false);
          return;
        }

        setLoading(false);
        setSuccess(true);
        uploadedFiles.forEach(f => URL.revokeObjectURL(f.previewUrl));
      }, 1200);
    } catch (err) {
      console.error(err);
      setError('An error occurred during submission.');
      setLoading(false);
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
          maxWidth: '680px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 24px 64px rgba(21, 18, 12, 0.16)',
          border: '1px solid var(--color-hairline)',
          position: 'relative',
          boxSizing: 'border-box',
          overflow: 'hidden',
          fontFamily: 'var(--font-body)'
        }}
      >
        {/* Header */}
        <div 
          style={{ 
            padding: '24px 32px', 
            borderBottom: '1px solid var(--color-hairline)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'between',
            background: 'white',
            boxSizing: 'border-box'
          }}
        >
          <div style={{ flex: 1 }}>
            <span
              style={{ 
                fontSize: '0.72rem', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                letterSpacing: '0.15em', 
                color: 'var(--color-brass)',
                display: 'block',
                marginBottom: '4px'
              }}
            >
              Post Free Listing
            </span>
            <h3 
              style={{ 
                fontSize: '1.5rem', 
                fontWeight: 500, 
                fontFamily: 'var(--font-display)',
                color: 'var(--color-navy-dark)',
                margin: 0
              }}
            >
              {activeTab === 'property' ? 'Post Property' : 'Post Requirement'}
            </h3>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
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
        </div>

        {/* Scrollable Form Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '32px', boxSizing: 'border-box' }}>
          {success ? (
            /* Success confirmation */
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '40px 0' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(185, 151, 78, 0.1)',
                  border: '2px solid var(--color-brass)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}
              >
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-brass)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 500, color: 'var(--color-navy-dark)', margin: '0 0 12px 0' }}>
                Listing Submitted!
              </h2>
              <p style={{ color: 'var(--color-taupe)', fontSize: '0.98rem', lineHeight: 1.5, maxWidth: '450px', margin: '0 0 32px 0' }}>
                Thank you! Your {activeTab === 'property' ? 'property' : 'requirement'} has been successfully listed. Our Indore property advisor will verify and publish it shortly.
              </p>
              <button
                onClick={onClose}
                style={{
                  padding: '14px 32px',
                  background: 'var(--color-navy)',
                  color: 'white',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(16, 38, 66, 0.15)',
                  transition: 'all 0.2s ease'
                }}
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Tab Selector Buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', background: 'rgba(23, 32, 51, 0.05)', padding: '4px', borderRadius: '12px' }}>
                <button
                  type="button"
                  onClick={() => !loading && setActiveTab('property')}
                  style={{
                    padding: '12px',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    background: activeTab === 'property' ? 'white' : 'transparent',
                    color: activeTab === 'property' ? 'var(--color-navy-dark)' : 'var(--color-taupe)',
                    boxShadow: activeTab === 'property' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none'
                  }}
                >
                  🏡 Sell / Rent Property
                </button>
                <button
                  type="button"
                  onClick={() => !loading && setActiveTab('requirement')}
                  style={{
                    padding: '12px',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    background: activeTab === 'requirement' ? 'white' : 'transparent',
                    color: activeTab === 'requirement' ? 'var(--color-navy-dark)' : 'var(--color-taupe)',
                    boxShadow: activeTab === 'requirement' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none'
                  }}
                >
                  🔍 Post Requirement
                </button>
              </div>

              {error && (
                <div style={{ padding: '14px', borderRadius: '8px', fontSize: '0.875rem', bg: '#fef2f2', border: '1px solid #fca5a5', color: 'var(--color-error)' }}>
                  {error}
                </div>
              )}

              {/* Form Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Row 1: Looking to & Type */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-taupe)', marginBottom: '8px' }}>
                      Looking to
                    </label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {['sell', 'rent', 'lease'].map((mode) => (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => setLookingTo(mode)}
                          style={{
                            flex: 1,
                            padding: '10px',
                            borderRadius: '8px',
                            border: '1.5px solid',
                            borderColor: lookingTo === mode ? 'var(--color-navy)' : 'rgba(23, 32, 51, 0.15)',
                            background: lookingTo === mode ? 'var(--color-navy)' : 'white',
                            color: lookingTo === mode ? 'white' : 'var(--color-taupe)',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            textTransform: 'capitalize',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-taupe)', marginBottom: '8px' }}>
                      Property Type
                    </label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '11px 16px',
                        borderRadius: '8px',
                        border: '1.5px solid rgba(23, 32, 51, 0.15)',
                        background: 'white',
                        color: 'var(--color-ink)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    >
                      <option value="flat">Flat / Apartment</option>
                      <option value="villa">Villa / House</option>
                      <option value="plot">Plot / Land</option>
                      <option value="office">Commercial Office</option>
                      <option value="shop">Retail Shop</option>
                      <option value="land">Farmhouse / Land Parcel</option>
                    </select>
                  </div>
                </div>

                {/* Row 2: Locality */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-taupe)', marginBottom: '8px' }}>
                    Locality / Address (Indore)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Scheme 140, Nipania, Indore"
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1.5px solid rgba(23, 32, 51, 0.15)',
                      background: 'white',
                      color: 'var(--color-ink)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* Row 3: BHK & Area */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {['flat', 'villa'].includes(propertyType) ? (
                    <div>
                      <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-taupe)', marginBottom: '8px' }}>
                        BHK / Bedrooms
                      </label>
                      <select
                        value={bhk}
                        onChange={(e) => setBhk(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '11px 16px',
                          borderRadius: '8px',
                          border: '1.5px solid rgba(23, 32, 51, 0.15)',
                          background: 'white',
                          color: 'var(--color-ink)',
                          fontSize: '0.9rem',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      >
                        <option value="1">1 BHK</option>
                        <option value="2">2 BHK</option>
                        <option value="3">3 BHK</option>
                        <option value="4">4 BHK</option>
                        <option value="5+">5+ BHK</option>
                      </select>
                    </div>
                  ) : (
                    <div>
                      <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-taupe)', marginBottom: '8px' }}>
                        BHK / Bedrooms
                      </label>
                      <input
                        type="text"
                        disabled
                        value="Not Applicable"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: '1.5px solid rgba(23, 32, 51, 0.08)',
                          background: '#f3f4f6',
                          color: '#9ca3af',
                          fontSize: '0.9rem',
                          outline: 'none',
                          boxSizing: 'border-box',
                          cursor: 'not-allowed'
                        }}
                      />
                    </div>
                  )}

                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-taupe)', marginBottom: '8px' }}>
                      Super Built-up Area (Sq.Ft.)
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 1500"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1.5px solid rgba(23, 32, 51, 0.15)',
                        background: 'white',
                        color: 'var(--color-ink)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                {/* Row 4: Budget & User Role */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-taupe)', marginBottom: '8px' }}>
                      {activeTab === 'property' ? 'Expected Price' : 'Max Budget'}
                    </label>
                    <div style={{ display: 'flex', borderRadius: '8px', border: '1.5px solid rgba(23, 32, 51, 0.15)', overflow: 'hidden', bg: 'white', boxSizing: 'border-box' }}>
                      <input
                        type="number"
                        required
                        placeholder="e.g. 75"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        style={{
                          flex: 1,
                          padding: '12px 16px',
                          background: 'white',
                          color: 'var(--color-ink)',
                          fontSize: '0.9rem',
                          outline: 'none',
                          border: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                      <select
                        value={priceUnit}
                        onChange={(e) => setPriceUnit(e.target.value)}
                        style={{
                          background: 'rgba(23, 32, 51, 0.05)',
                          borderLeft: '1.5px solid rgba(23, 32, 51, 0.15)',
                          padding: '0 12px',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          outline: 'none',
                          borderTop: 'none',
                          borderRight: 'none',
                          borderBottom: 'none'
                        }}
                      >
                        <option value="L">Lakhs (₹)</option>
                        <option value="Cr">Crores (₹)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-taupe)', marginBottom: '8px' }}>
                      I am the
                    </label>
                    <select
                      value={userRole}
                      onChange={(e) => setUserRole(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '11px 16px',
                        borderRadius: '8px',
                        border: '1.5px solid rgba(23, 32, 51, 0.15)',
                        background: 'white',
                        color: 'var(--color-ink)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    >
                      <option value="owner">Property Owner</option>
                      <option value="buyer">Individual Buyer / Tenant</option>
                      <option value="agent">Agent / Broker</option>
                      <option value="builder">Builder / Developer</option>
                    </select>
                  </div>
                </div>

                {/* Media Uploads Area (only for Post Property) */}
                {activeTab === 'property' && (
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-taupe)', marginBottom: '8px' }}>
                      Upload Images & Videos (Max size 5MB each)
                    </label>
                    <div style={{ border: '2px dashed rgba(23, 32, 51, 0.18)', borderRadius: '12px', padding: '24px', textAlign: 'center', background: 'white', position: 'relative', cursor: 'pointer' }}>
                      <input
                        type="file"
                        ref={fileInputRef}
                        multiple
                        accept="image/*,video/*"
                        onChange={handleFileChange}
                        style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }}
                        disabled={loading}
                      />
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-brass)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-navy-dark)' }}>Click or Drag files here</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-taupe)' }}>Images/Videos up to 5MB each</span>
                      </div>
                    </div>

                    {/* Preview Grid */}
                    {uploadedFiles.length > 0 && (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '12px', marginTop: '16px' }}>
                        {uploadedFiles.map((item, idx) => (
                          <div key={idx} style={{ position: 'relative', aspectRatio: '1/1', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(23, 32, 51, 0.12)', background: '#111827', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {item.type === 'video' ? (
                              <video src={item.previewUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} muted />
                            ) : (
                              <img src={item.previewUrl} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            )}
                            {/* Hover overlay delete */}
                            <button
                              type="button"
                              onClick={() => handleRemoveFile(idx)}
                              style={{
                                position: 'absolute',
                                top: '4px',
                                right: '4px',
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                background: '#dc2626',
                                color: 'white',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '0.85rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.15)'
                              }}
                            >
                              &times;
                            </button>
                            <span style={{ position: 'absolute', bottom: '4px', left: '4px', fontSize: '9px', color: 'white', background: 'rgba(0,0,0,0.6)', padding: '2px 4px', borderRadius: '3px', textTransform: 'uppercase', fontWeight: 600 }}>
                              {item.type}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Row 5: Description */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-taupe)', marginBottom: '8px' }}>
                    Additional Details / Description
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Tell us more details (facing, amenities, landmarks...)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1.5px solid rgba(23, 32, 51, 0.15)',
                      background: 'white',
                      color: 'var(--color-ink)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      boxSizing: 'border-box',
                      resize: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                {/* Divider */}
                <div style={{ borderTop: '1px solid var(--color-hairline)', margin: '12px 0' }}></div>

                {/* Contact Header */}
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-navy-dark)', margin: '0 0 4px 0' }}>Contact Information</h4>

                {/* Contact Details Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-taupe)', marginBottom: '8px' }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1.5px solid rgba(23, 32, 51, 0.15)',
                        background: 'white',
                        color: 'var(--color-ink)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-taupe)', marginBottom: '8px' }}>
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={userPhone ? `+91 ${userPhone}` : ''}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1.5px solid rgba(23, 32, 51, 0.08)',
                        background: '#f3f4f6',
                        color: 'var(--color-taupe)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        boxSizing: 'border-box',
                        cursor: 'not-allowed',
                        fontWeight: 500
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-taupe)', marginBottom: '8px' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1.5px solid rgba(23, 32, 51, 0.15)',
                        background: 'white',
                        color: 'var(--color-ink)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                {/* Form Buttons */}
                <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={loading}
                    style={{
                      flex: 1,
                      padding: '14px 20px',
                      background: 'white',
                      border: '1.5px solid rgba(23, 32, 51, 0.15)',
                      borderRadius: '12px',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--color-taupe)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxSizing: 'border-box'
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      flex: 1,
                      padding: '14px 20px',
                      background: 'var(--color-brass)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(185, 151, 78, 0.2)',
                      transition: 'all 0.2s ease',
                      boxSizing: 'border-box'
                    }}
                  >
                    {loading ? 'Submitting Listing...' : 'Submit Listing Free'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
