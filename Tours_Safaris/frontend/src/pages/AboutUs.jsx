import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { heroImages, fallbackImage } from '../constants/images';

const FONTS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap');
`;

const CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --white:      #ffffff;
    --white-off:  #fafaf8;
    --gray-50:    #f8f9fa;
    --gray-100:   #f5f5f0;
    --gray-200:   #e8e8e3;
    --gray-300:   #d4d4cc;
    --gray-400:   #b8b8ac;
    --gray-500:   #8c8c7a;
    --gray-600:   #6b6b5c;
    --gray-700:   #4a4a3e;
    --gray-800:   #2d2d24;
    --gray-900:   #1a1a14;
    --gold:       #c9a84c;
    --gold-dark:  #b38f3a;
    --gold-light: #e2c97e;
    --gold-pale:  rgba(201,168,76,.08);
    --serif:      'Cormorant Garamond', Georgia, serif;
    --sans:       'DM Sans', sans-serif;
  }

  .about-page { font-family: var(--sans); background: var(--white); color: var(--gray-800); }

  /* main container */
  .about-container {
    max-width: 1400px; margin: 0 auto;
    padding: 0 clamp(20px,5vw,80px) 90px;
  }

  /* section header */
  .about-section-header {
    text-align: center; margin-bottom: 64px;
  }
  .about-eyebrow {
    font-size: 20px; text-transform: uppercase; letter-spacing: 5px;
    color: var(--gold); margin-bottom: 16px; font-weight: 600;
  }
  .about-title {
    font-family: var(--serif); font-size: clamp(48px,7vw,84px);
    font-weight: 400; color: var(--gray-800);
  }
  .about-underline {
    width: 90px; height: 3px; background: var(--gold);
    margin: 24px auto 0;
  }

  /* expandable grid */
  .about-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 32px; margin-bottom: 80px;
  }
  @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr; } }

  .about-card {
    background: var(--white); border: 1px solid var(--gray-200);
    margin-bottom: 28px; transition: all .3s;
  }
  .about-card:last-child { margin-bottom: 0; }
  .about-card-header {
    padding: 24px 28px; display: flex;
    align-items: center; justify-content: space-between;
    cursor: pointer; transition: background .2s;
  }
  .about-card-header:hover { background: var(--gold-pale); }
  .about-card-header-left {
    display: flex; align-items: center; gap: 20px;
  }
  .about-card-icon {
    width: 56px; height: 56px; border-radius: 50%;
    background: var(--gold-pale); display: flex;
    align-items: center; justify-content: center;
    color: var(--gold);
  }
  .about-card-icon svg { width: 28px; height: 28px; stroke: currentColor; fill: none; }
  .about-card-title {
    font-family: var(--serif); font-size: 26px; font-weight: 600;
    color: var(--gray-800);
  }
  .about-card-expand {
    color: var(--gold); transition: transform .2s;
  }
  .about-card-expand.open { transform: rotate(180deg); }
  .about-card-content {
    padding: 0 28px 28px 104px;
    border-top: 1px solid var(--gray-200);
  }
  @media (max-width: 600px) {
    .about-card-content { padding: 0 24px 24px 24px; }
  }

  /* story content */
  .about-quote {
    background: var(--gray-50); padding: 28px; margin-top: 20px;
    border-left: 4px solid var(--gold);
  }
  .about-quote p {
    font-family: var(--serif); font-size: 18px; font-style: italic;
    color: var(--gray-700); line-height: 1.6;
  }

  /* mission/vision content */
  .about-centered {
    text-align: center; padding: 20px 0;
  }
  .about-centered-icon {
    width: 96px; height: 96px; margin: 0 auto 20px;
    color: var(--gold);
  }
  .about-centered-icon svg { width: 100%; height: 100%; stroke: currentColor; fill: none; }
  .about-centered-title {
    font-family: var(--serif); font-size: 28px; font-weight: 600;
    color: var(--gray-800); margin-bottom: 20px;
  }
  .about-centered-text {
    font-size: 18px; color: var(--gray-600); line-height: 1.7;
    max-width: 550px; margin: 0 auto;
  }
  .about-chips {
    display: flex; flex-wrap: wrap;
    justify-content: center; gap: 14px; margin-top: 28px;
  }
  .about-chip {
    padding: 8px 20px; background: var(--gold-pale);
    font-size: 14px; color: var(--gold); letter-spacing: .5px;
  }

  /* values grid */
  .about-values-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 20px; margin-bottom: 28px;
  }
  .about-value-card {
    background: var(--gray-50); padding: 24px; text-align: center;
    transition: all .2s;
  }
  .about-value-card:hover { background: var(--gold-pale); }
  .about-value-icon {
    width: 56px; height: 56px; margin: 0 auto 14px;
    color: var(--gold);
  }
  .about-value-icon svg { width: 100%; height: 100%; stroke: currentColor; fill: none; }
  .about-value-title {
    font-size: 16px; font-weight: 700; color: var(--gray-800);
    margin-bottom: 8px;
  }
  .about-value-desc {
    font-size: 13px; color: var(--gray-500);
  }

  /* features */
  .about-features-title {
    font-family: var(--serif); font-size: 22px; font-weight: 600;
    color: var(--gray-800); margin: 28px 0 20px;
  }
  .about-features-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
  .about-feature {
    display: flex; align-items: center; gap: 12px;
    padding: 10px 0;
  }
  .about-feature-icon {
    width: 32px; height: 32px; color: var(--gold);
  }
  .about-feature-icon svg { width: 100%; height: 100%; stroke: currentColor; fill: none; }
  .about-feature-text {
    font-size: 15px; color: var(--gray-700);
  }

  /* stats */
  .about-stats {
    background: var(--gray-50); border: 1px solid var(--gray-200);
    padding: 56px 40px; margin-top: 48px;
  }
  .about-stats-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 40px; text-align: center;
  }
  @media (max-width: 800px) { .about-stats-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .about-stats-grid { grid-template-columns: 1fr; } }
  .about-stat-number {
    font-family: var(--serif); font-size: 56px; font-weight: 400;
    color: var(--gold); margin-bottom: 10px;
  }
  .about-stat-label {
    font-size: 15px; color: var(--gray-600); text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  /* fade in */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .fade-in { animation: fadeUp .5s ease both; }
`;

const AboutUs = () => {
  // All sections open by default
  const [expandedSections, setExpandedSections] = useState({
    story: true,
    mission: true,
    vision: true,
    values: true,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const companyValues = [
    { icon: 'nature', title: 'Sustainability', desc: 'Eco-friendly practices in all operations' },
    { icon: 'people', title: 'Community', desc: 'Supporting local communities and conservation' },
    { icon: 'trophy', title: 'Excellence', desc: 'Premium service and unforgettable experiences' },
    { icon: 'forest', title: 'Authenticity', desc: 'Genuine hospitality and culture' },
  ];

  const features = [
    { icon: 'flight', text: 'Airport Transfers' },
    { icon: 'hotel', text: 'Carefully Selected Properties' },
    { icon: 'restaurant', text: 'Gourmet Meals' },
    { icon: 'car', text: '4x4 Safari Vehicles' },
    { icon: 'camera', text: 'Photography Tips' },
    { icon: 'location', text: 'Expert Local Knowledge' },
  ];

  const IconComponent = ({ name }) => {
    const icons = {
      book: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
      forest: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
      vision: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
      trophy: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v4M12 2L9 5M12 2L15 5"/><path d="M5 8h14v4c0 4-3 8-7 8s-7-4-7-8V8z"/><path d="M5 4h14v4H5z"/></svg>,
    };
    return <div className="about-card-icon">{icons[name]}</div>;
  };

  const LargeIcon = ({ name }) => {
    const icons = {
      forest: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
      vision: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
      trophy: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v4M12 2L9 5M12 2L15 5"/><path d="M5 8h14v4c0 4-3 8-7 8s-7-4-7-8V8z"/><path d="M5 4h14v4H5z"/></svg>,
    };
    return <div className="about-centered-icon">{icons[name]}</div>;
  };

  const ValueIcon = ({ name }) => {
    const icons = {
      nature: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
      people: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      trophy: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v4M12 2L9 5M12 2L15 5"/><path d="M5 8h14v4c0 4-3 8-7 8s-7-4-7-8V8z"/><path d="M5 4h14v4H5z"/></svg>,
      forest: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    };
    return <div className="about-value-icon">{icons[name]}</div>;
  };

  const FeatureIcon = ({ name }) => {
    const icons = {
      flight: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 15l4-8 4 8M9 7v10"/><path d="M3 15h12"/></svg>,
      hotel: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
      restaurant: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 3v18h18M18 9l-4-4M12 3v12"/></svg>,
      car: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 9h18M5 3h14M7 9v6M17 9v6"/><rect x="5" y="3" width="14" height="6" rx="1"/></svg>,
      camera: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="12" cy="12" r="3"/></svg>,
      location: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    };
    return <div className="about-feature-icon">{icons[name]}</div>;
  };

  return (
    <>
      <style>{FONTS}{CSS}</style>
      <div className="about-page">
        <HeroSection
          title="About Us"
          subtitle="Discover the story behind Nature Pulse Expeditions"
          description="As a locally-rooted expedition company, we design and manage every journey from concept to completion. Our team combines international expertise with deep local knowledge."
          buttonText="Plan Your Journey"
          buttonLink="/contact"
          imageUrl={heroImages.safari || fallbackImage}
        />

        <div className="about-container">
          {/* Header */}
          <div className="about-section-header">
            <div className="about-eyebrow">Our Story</div>
            <h1 className="about-title">Nature Pulse <em>Expeditions</em></h1>
            <div className="about-underline" />
          </div>

          {/* Expandable Sections Grid */}
          <div className="about-grid">
            {/* Left Column */}
            <div>
              {/* Our Story - Open by default */}
              <div className="about-card fade-in">
                <div className="about-card-header" onClick={() => toggleSection('story')}>
                  <div className="about-card-header-left">
                    <IconComponent name="book" />
                    <h3 className="about-card-title">Our Story</h3>
                  </div>
                  <svg className={`about-card-expand ${expandedSections.story ? 'open' : ''}`} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                {expandedSections.story && (
                  <div className="about-card-content">
                    <p style={{ fontSize: 17, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 18 }}>
                      Nature Pulse Expeditions was founded with a passion for showcasing the true beauty of East Africa's wilderness. As a locally owned and operated expedition company based in Arusha, we combine deep regional knowledge with a commitment to quality service.
                    </p>
                    <p style={{ fontSize: 17, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 28 }}>
                      Our goal is simple: to deliver elegant safari experiences that leave lasting memories. Every expedition we organize reflects our dedication to excellence, safety, and sustainability.
                    </p>
                    <div className="about-quote">
                      <p>"We believe travel should be seamless, inspiring, and authentic. Every journey we craft reflects our dedication to excellence, safety, and sustainability."</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Our Mission - Open by default */}
              <div className="about-card fade-in" style={{ animationDelay: '100ms' }}>
                <div className="about-card-header" onClick={() => toggleSection('mission')}>
                  <div className="about-card-header-left">
                    <IconComponent name="forest" />
                    <h3 className="about-card-title">Our Mission</h3>
                  </div>
                  <svg className={`about-card-expand ${expandedSections.mission ? 'open' : ''}`} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                {expandedSections.mission && (
                  <div className="about-card-content">
                    <div className="about-centered">
                      <LargeIcon name="forest" />
                      <h4 className="about-centered-title">Creating Unforgettable Experiences</h4>
                      <p className="about-centered-text">
                        To create unforgettable safari experiences while promoting responsible tourism and supporting local communities.
                      </p>
                      <div className="about-chips">
                        <span className="about-chip">Sustainable Tourism</span>
                        <span className="about-chip">Community Support</span>
                        <span className="about-chip">Wildlife Conservation</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Our Vision - Open by default */}
              <div className="about-card fade-in" style={{ animationDelay: '150ms' }}>
                <div className="about-card-header" onClick={() => toggleSection('vision')}>
                  <div className="about-card-header-left">
                    <IconComponent name="vision" />
                    <h3 className="about-card-title">Our Vision</h3>
                  </div>
                  <svg className={`about-card-expand ${expandedSections.vision ? 'open' : ''}`} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                {expandedSections.vision && (
                  <div className="about-card-content">
                    <div className="about-centered">
                      <LargeIcon name="vision" />
                      <h4 className="about-centered-title">Leading with Excellence</h4>
                      <p className="about-centered-text">
                        To become a trusted safari brand recognized for elegance, reliability, and authentic hospitality.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Our Values - Open by default */}
              <div className="about-card fade-in" style={{ animationDelay: '200ms' }}>
                <div className="about-card-header" onClick={() => toggleSection('values')}>
                  <div className="about-card-header-left">
                    <IconComponent name="trophy" />
                    <h3 className="about-card-title">Our Values</h3>
                  </div>
                  <svg className={`about-card-expand ${expandedSections.values ? 'open' : ''}`} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                {expandedSections.values && (
                  <div className="about-card-content">
                    <div className="about-values-grid">
                      {companyValues.map((value, idx) => (
                        <div key={idx} className="about-value-card">
                          <ValueIcon name={value.icon} />
                          <div className="about-value-title">{value.title}</div>
                          <div className="about-value-desc">{value.desc}</div>
                        </div>
                      ))}
                    </div>

                    <div className="about-features-title">What We Offer</div>
                    <div className="about-features-grid">
                      {features.map((feature, idx) => (
                        <div key={idx} className="about-feature">
                          <FeatureIcon name={feature.icon} />
                          <span className="about-feature-text">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="about-stats fade-in">
            <div className="about-stats-grid">
              <div><div className="about-stat-number">5,000+</div><div className="about-stat-label">Happy Travelers</div></div>
              <div><div className="about-stat-number">98%</div><div className="about-stat-label">Satisfaction Rate</div></div>
              <div><div className="about-stat-number">15+</div><div className="about-stat-label">Expert Guides</div></div>
              <div><div className="about-stat-number">10+</div><div className="about-stat-label">Years Experience</div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;