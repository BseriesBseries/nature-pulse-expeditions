import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { companyLogo } from '../constants/images';

// Import all images from local gallery directory
import gallery1 from '../assets/images/gallery/gallery1.jpg';
import gallery2 from '../assets/images/gallery/gallery2.jpg';
import gallery3 from '../assets/images/gallery/gallery3.jpg';
import gallery4 from '../assets/images/gallery/gallery4.jpg';
import gallery5 from '../assets/images/gallery/gallery5.jpg';
import gallery6 from '../assets/images/gallery/gallery6.jpg';
import gallery7 from '../assets/images/gallery/gallery7.jpg';
import gallery8 from '../assets/images/gallery/gallery8.jpg';
import gallery9 from '../assets/images/gallery/gallery9.jpg';
import gallery10 from '../assets/images/gallery/gallery10.jpg';
import gallery11 from '../assets/images/gallery/gallery11.jpg';

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

  .hp-page { font-family: var(--sans); background: var(--white); color: var(--gray-800); }

  /* hero navigation */
  .hp-hero-nav {
    position: absolute; bottom: 40px; left: 50%;
    transform: translateX(-50%);
    display: flex; gap: 16px; z-index: 10;
  }
  .hp-hero-dot {
    width: 12px; height: 12px; border-radius: 50%;
    background: rgba(255,255,255,0.6);
    cursor: pointer; transition: all .2s;
  }
  .hp-hero-dot.active { background: var(--gold); width: 32px; border-radius: 6px; }
  .hp-hero-dot:hover { background: var(--gold-light); transform: scale(1.2); }

  .hp-hero-arrow {
    position: absolute; top: 50%; transform: translateY(-50%);
    width: 56px; height: 56px; border-radius: 50%;
    background: rgba(0,0,0,0.5); backdrop-filter: blur(4px);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: all .2s; z-index: 10;
    color: white;
  }
  .hp-hero-arrow svg { width: 28px; height: 28px; }
  .hp-hero-arrow:hover { background: var(--gold); transform: translateY(-50%) scale(1.05); }
  .hp-hero-arrow-left { left: 32px; }
  .hp-hero-arrow-right { right: 32px; }

  /* main container */
  .hp-container {
    max-width: 1400px; margin: 0 auto;
    padding: 0 clamp(20px,5vw,80px) 80px;
  }

  /* welcome section */
  .hp-welcome {
    text-align: center; padding: 80px 0 64px;
  }
  .hp-logo {
    width: 120px; height: 120px; border-radius: 50%;
    border: 3px solid var(--gold); margin: 0 auto 32px;
    object-fit: cover;
  }
  .hp-eyebrow {
    font-size: 20px;
    text-transform: uppercase; letter-spacing: 5px;
    color: var(--gold); margin-bottom: 20px; font-family: var(--sans);
    font-weight: 600;
  }
  .hp-title {
    font-family: var(--serif); font-size: clamp(56px,8vw,96px);
    font-weight: 400; line-height: 1.1; color: var(--gray-800);
    margin-bottom: 32px;
  }
  .hp-title em { font-style: italic; color: var(--gold); }
  .hp-desc {
    font-size: 20px;
    color: var(--gray-600); max-width: 850px;
    margin: 0 auto; line-height: 1.7;
  }
  .hp-desc + .hp-desc { margin-top: 20px; }

  /* section header */
  .hp-section-header {
    text-align: center; margin-bottom: 64px;
  }
  .hp-section-eyebrow {
    font-size: 20px;
    text-transform: uppercase; letter-spacing: 5px;
    color: var(--gold); margin-bottom: 16px; font-weight: 600;
  }
  .hp-section-title {
    font-family: var(--serif); font-size: clamp(48px,7vw,68px);
    font-weight: 400; color: var(--gray-800);
  }
  .hp-section-underline {
    width: 90px; height: 3px; background: var(--gold);
    margin: 24px auto 0;
  }

  /* feature grid */
  .hp-grid {
    display: grid; grid-template-columns: repeat(5, 1fr);
    gap: 28px; margin-bottom: 90px;
  }
  @media (max-width: 1000px) { .hp-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 680px) { .hp-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .hp-grid { grid-template-columns: 1fr; } }

  .hp-feature-card {
    background: var(--white); border: 1px solid var(--gray-200);
    padding: 40px 24px; text-align: center;
    transition: all .3s; box-shadow: 0 2px 8px rgba(0,0,0,0.02);
  }
  .hp-feature-card:hover { 
    transform: translateY(-8px); 
    border-color: var(--gold);
    box-shadow: 0 16px 32px rgba(0,0,0,0.1);
  }
  .hp-feature-icon {
    font-size: 68px;
    margin-bottom: 20px; display: inline-block;
  }
  .hp-feature-title {
    font-family: var(--sans); font-size: 20px;
    font-weight: 700;
    color: var(--gray-700); letter-spacing: .3px;
  }

  /* why choose grid */
  .hp-why-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 24px; margin-bottom: 90px;
  }
  @media (max-width: 680px) { .hp-why-grid { grid-template-columns: 1fr; } }
  .hp-why-item {
    display: flex; align-items: center; gap: 20px;
    padding: 20px 0; border-bottom: 1px solid var(--gray-200);
  }
  .hp-why-icon {
    color: var(--gold); flex-shrink: 0;
    background: var(--gold-pale); width: 56px; height: 56px;
    border-radius: 50%; display: flex; align-items: center;
    justify-content: center;
  }
  .hp-why-icon svg { width: 28px; height: 28px; stroke: currentColor; fill: none; }
  .hp-why-text {
    font-size: 20px;
    color: var(--gray-700); font-weight: 600;
  }

  /* destinations grid */
  .hp-dest-grid {
    display: grid; grid-template-columns: repeat(6, 1fr);
    gap: 3px; margin-bottom: 90px;
  }
  @media (max-width: 1200px) { .hp-dest-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 680px) { .hp-dest-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .hp-dest-grid { grid-template-columns: 1fr; } }

  .hp-dest-card {
    position: relative; overflow: hidden;
    aspect-ratio: 4/3; cursor: pointer;
  }
  .hp-dest-img {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform .6s cubic-bezier(.25,.46,.45,.94);
  }
  .hp-dest-card:hover .hp-dest-img { transform: scale(1.08); }
  .hp-dest-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%);
    display: flex; flex-direction: column; justify-content: flex-end;
    padding: 24px; opacity: 0; transition: opacity .3s;
  }
  .hp-dest-card:hover .hp-dest-overlay { opacity: 1; }
  .hp-dest-name {
    font-family: var(--serif); font-size: 24px;
    font-weight: 600;
    color: var(--gold); margin-bottom: 8px;
  }
  .hp-dest-desc {
    font-size: 15px;
    color: var(--gray-100); line-height: 1.4;
  }
  .hp-dest-title {
    position: absolute; bottom: 24px; left: 24px; z-index: 1;
    font-family: var(--serif); font-size: 22px;
    font-weight: 600;
    color: white; text-shadow: 0 2px 4px rgba(0,0,0,0.4);
  }

  /* inclusion cards */
  .hp-inclusion-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 40px; margin-bottom: 90px;
  }
  @media (max-width: 800px) { .hp-inclusion-grid { grid-template-columns: 1fr; } }

  .hp-card {
    background: var(--white); border: 1px solid var(--gray-200);
    position: relative; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.04);
    transition: all .3s;
  }
  .hp-card:hover { box-shadow: 0 12px 32px rgba(0,0,0,0.1); transform: translateY(-4px); }
  .hp-card-header {
    padding: 32px 32px 24px; display: flex; align-items: center; gap: 20px;
    border-bottom: 1px solid var(--gray-200);
  }
  .hp-card-icon {
    width: 72px; height: 72px;
    border-radius: 50%;
    background: var(--gold-pale); display: flex;
    align-items: center; justify-content: center;
  }
  .hp-card-icon svg { width: 36px; height: 36px; stroke: var(--gold); fill: none; }
  .hp-card-title {
    font-family: var(--serif); font-size: 36px;
    font-weight: 500;
    color: var(--gray-800);
  }
  .hp-card-list { padding: 28px 32px; }
  .hp-card-item {
    display: flex; align-items: center; gap: 16px;
    padding: 16px 0; border-bottom: 1px solid var(--gray-100);
  }
  .hp-card-item:last-child { border-bottom: none; }
  .hp-item-check {
    width: 44px; height: 44px;
    border-radius: 50%;
    background: var(--gold-pale); display: flex;
    align-items: center; justify-content: center;
    color: var(--gold); flex-shrink: 0;
  }
  .hp-item-check svg { width: 22px; height: 22px; stroke: currentColor; fill: none; }
  .hp-item-text {
    font-size: 19px;
    color: var(--gray-700); font-weight: 500;
  }
  .hp-item-text-strike {
    font-size: 19px;
    color: var(--gray-500); text-decoration: line-through;
  }
  .hp-card-badge {
    position: absolute; bottom: 24px; right: 24px;
    opacity: 0.04;
  }
  .hp-card-badge svg { width: 120px; height: 120px; stroke: var(--gray-600); fill: none; }

  /* cta section */
  .hp-cta {
    text-align: center; padding: 80px 56px;
    background: var(--gray-50); border: 1px solid var(--gray-200);
    margin-top: 48px;
  }
  .hp-cta-title {
    font-family: var(--serif); font-size: clamp(44px,7vw,64px);
    font-weight: 500; color: var(--gray-800); margin-bottom: 24px;
  }
  .hp-cta-desc {
    font-size: 20px;
    color: var(--gray-600); max-width: 650px;
    margin: 0 auto 40px; line-height: 1.7;
  }
  .hp-btn {
    display: inline-block; padding: 18px 56px;
    background: var(--gold); color: white;
    text-decoration: none; font-family: var(--sans);
    font-size: 16px;
    text-transform: uppercase; letter-spacing: 2.5px;
    font-weight: 700; transition: all .2s;
    border: 2px solid var(--gold);
    cursor: pointer;
  }
  .hp-btn:hover { background: var(--gold-dark); transform: translateY(-3px); }

  /* fade in */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .hp-fade-in { animation: fadeUp .7s ease both; }

  @media (max-width: 768px) {
    .hp-container { padding: 0 20px 56px; }
    .hp-welcome { padding: 56px 0 40px; }
    .hp-feature-card { padding: 28px 20px; }
    .hp-card-header { padding: 24px; }
    .hp-card-list { padding: 24px; }
    .hp-cta { padding: 56px 28px; }
    .hp-feature-icon { font-size: 56px; }
    .hp-feature-title { font-size: 18px; }
    .hp-why-text { font-size: 18px; }
    .hp-dest-title { font-size: 18px; bottom: 16px; left: 16px; }
    .hp-dest-name { font-size: 20px; }
    .hp-dest-desc { font-size: 13px; }
    .hp-card-title { font-size: 28px; }
    .hp-item-text, .hp-item-text-strike { font-size: 17px; }
  }
`;

const HomePage = () => {
  const navigate = useNavigate();
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  
  const heroSlides = [
    {
      title: "Explore beyond borders",
      subtitle: "Luxury & Authentic Safari Experiences",
      description: "Experience breathtaking landscapes, iconic wildlife, and unforgettable moments — crafted with care, elegance, and local expertise.",
      image: gallery1,
    },
    {
      title: "Witness the Great Migration",
      subtitle: "Nature's Greatest Spectacle",
      description: "Follow the incredible journey of millions of wildebeest across the vast plains. A once-in-a-lifetime experience awaits.",
      image: gallery2,
    },
    {
      title: "Conquer the Peaks",
      subtitle: "Africa's Highest Summit",
      description: "Stand on the roof of Africa. Our expert guides ensure your safety and success on this unforgettable adventure.",
      image: gallery3,
    },
    {
      title: "Discover Local Culture",
      subtitle: "Meet the People",
      description: "Immerse yourself in rich traditions and vibrant cultures that have thrived alongside wildlife for centuries.",
      image: gallery4,
    },
    {
      title: "Wilderness Retreats",
      subtitle: "Comfort in the Wild",
      description: "Experience the perfect blend of adventure and comfort at our carefully selected properties.",
      image: gallery5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Function to handle navigation with scroll to top
  const handlePlanJourneyClick = (e, path) => {
    e.preventDefault();
    
    // Scroll to top with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Navigate after a short delay to allow scroll to complete
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  const destinations = [
    { name: 'Northern Plains', image: gallery6, description: 'Endless plains, home of the Great Migration' },
    { name: 'Crater Highlands', image: gallery7, description: 'UNESCO World Heritage Site' },
    { name: 'Elephant Reserve', image: gallery8, description: 'Famous for baobabs and elephant herds' },
    { name: 'Lake District', image: gallery9, description: 'Tree-climbing lions and flamingos' },
    { name: 'Mountain Peaks', image: gallery10, description: "Africa's highest peak, trekking adventures" },
    { name: 'Coastal Zone', image: gallery11, description: 'A tropical paradise where Africa meets the sea' },
  ];

  const includedItems = [
    'Park and reserve fees',
    'Professional English-speaking guide',
    '4x4 safari vehicle with pop-up roof',
    'Accommodation (based on package)',
    'Meals during safari',
    'Bottled drinking water',
    'Airport transfers',
  ];

  const notIncludedItems = [
    'International flights',
    'Travel insurance',
    'Visa fees',
    'Tips & personal expenses',
  ];

  const whyChooseItems = [
    'Personalized safari planning',
    'Transparent pricing – no hidden fees',
    'Local expertise & trusted guides',
    'Flexible itineraries',
    '24/7 support during your journey',
  ];

  const travelWithUsItems = [
    { icon: '🇹🇿', title: 'Locally Owned & Operated' },
    { icon: '🦁', title: 'Professional Safari Guides' },
    { icon: '🏕️', title: 'Carefully Selected Properties' },
    { icon: '💰', title: 'Transparent & Competitive' },
    { icon: '📋', title: 'Personalized Itineraries' },
  ];

  return (
    <>
      <style>{FONTS}{CSS}</style>
      <div className="hp-page">
        {/* Hero Section with Slideshow */}
        <Box sx={{ position: 'relative' }}>
          <HeroSection
            key={currentHeroIndex}
            title={heroSlides[currentHeroIndex].title}
            subtitle={heroSlides[currentHeroIndex].subtitle}
            description={heroSlides[currentHeroIndex].description}
            buttonText="Plan Your Journey"
            buttonLink="/tour-safaris"
            imageUrl={heroSlides[currentHeroIndex].image}
          />
          
          {/* Navigation Arrows */}
          <div className="hp-hero-arrow hp-hero-arrow-left" onClick={() => setCurrentHeroIndex(prev => prev === 0 ? heroSlides.length - 1 : prev - 1)}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </div>
          <div className="hp-hero-arrow hp-hero-arrow-right" onClick={() => setCurrentHeroIndex(prev => prev === heroSlides.length - 1 ? 0 : prev + 1)}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </div>
          
          {/* Slide Indicators */}
          <div className="hp-hero-nav">
            {heroSlides.map((_, idx) => (
              <div
                key={idx}
                className={`hp-hero-dot ${idx === currentHeroIndex ? 'active' : ''}`}
                onClick={() => setCurrentHeroIndex(idx)}
              />
            ))}
          </div>
        </Box>

        <div className="hp-container">
          {/* Welcome Section */}
          <div className="hp-welcome hp-fade-in">
            <img src={companyLogo} alt="Nature Pulse Expeditions" className="hp-logo" />
            <div className="hp-eyebrow">Welcome to Nature Pulse Expeditions</div>
            <h1 className="hp-title">Curated <em>Wilderness Journeys</em></h1>
            <p className="hp-desc">
              We specialize in curated safari experiences across East Africa. From the endless plains of the Northern Circuit 
              to the majestic Crater Highlands, we create journeys that blend adventure, comfort, and personalized service.
            </p>
            <p className="hp-desc">
              Whether you seek a luxury retreat or an authentic camping adventure, we design every expedition to match your vision.
            </p>
          </div>

          {/* Why Travel With Us - Feature Cards */}
          <div className="hp-section-header">
            <div className="hp-section-eyebrow">Why Travel With Us</div>
            <h2 className="hp-section-title">Nature Pulse Expeditions</h2>
            <div className="hp-section-underline" />
          </div>

          <div className="hp-grid">
            {travelWithUsItems.map((item, idx) => (
              <div key={idx} className="hp-feature-card">
                <div className="hp-feature-icon">{item.icon}</div>
                <div className="hp-feature-title">{item.title}</div>
              </div>
            ))}
          </div>

          {/* Why Choose Nature Pulse */}
          <div className="hp-section-header">
            <div className="hp-section-eyebrow">Why Choose Us</div>
            <h2 className="hp-section-title">Our Commitment to You</h2>
            <div className="hp-section-underline" />
          </div>

          <div className="hp-why-grid">
            {whyChooseItems.map((item, idx) => (
              <div key={idx} className="hp-why-item">
                <div className="hp-why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <span className="hp-why-text">{item}</span>
              </div>
            ))}
          </div>

          {/* Featured Destinations */}
          <div className="hp-section-header">
            <div className="hp-section-eyebrow">Discover</div>
            <h2 className="hp-section-title">Featured Destinations</h2>
            <div className="hp-section-underline" />
          </div>

          <div className="hp-dest-grid">
            {destinations.map((dest, idx) => (
              <div key={idx} className="hp-dest-card">
                <img src={dest.image} alt={dest.name} className="hp-dest-img" />
                <div className="hp-dest-title">{dest.name}</div>
                <div className="hp-dest-overlay">
                  <div className="hp-dest-name">{dest.name}</div>
                  <div className="hp-dest-desc">{dest.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* What's Included / Not Included */}
          <div className="hp-section-header">
            <div className="hp-section-eyebrow">What to Expect</div>
            <h2 className="hp-section-title">Safari Inclusions</h2>
            <div className="hp-section-underline" />
          </div>

          <div className="hp-inclusion-grid">
            {/* Included Card */}
            <div className="hp-card">
              <div className="hp-card-header">
                <div className="hp-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h3 className="hp-card-title">What's Included</h3>
              </div>
              <div className="hp-card-list">
                {includedItems.map((item, idx) => (
                  <div key={idx} className="hp-card-item">
                    <div className="hp-item-check">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <span className="hp-item-text">{item}</span>
                  </div>
                ))}
              </div>
              <div className="hp-card-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
            </div>

            {/* Not Included Card */}
            <div className="hp-card">
              <div className="hp-card-header">
                <div className="hp-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </div>
                <h3 className="hp-card-title">Not Included</h3>
              </div>
              <div className="hp-card-list">
                {notIncludedItems.map((item, idx) => (
                  <div key={idx} className="hp-card-item">
                    <div className="hp-item-check">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </div>
                    <span className="hp-item-text-strike">{item}</span>
                  </div>
                ))}
              </div>
              <div className="hp-card-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="hp-cta">
            <h3 className="hp-cta-title">Ready to Begin Your Adventure?</h3>
            <p className="hp-cta-desc">
              Let us help you plan the perfect journey tailored to your preferences and vision.
            </p>
            <button 
              onClick={(e) => handlePlanJourneyClick(e, "/contact")} 
              className="hp-btn"
            >
              Plan Your Journey
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;