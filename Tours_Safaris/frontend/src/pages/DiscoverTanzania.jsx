import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { heroImages, fallbackImage } from '../constants/images';

// Import images
import buffalo from '../assets/images/discover/buffalo.jpg';
import elephant from '../assets/images/discover/elephant.jpg';
import flamingo from '../assets/images/discover/flamingo.jpg';
import leopard from '../assets/images/discover/leopard.jpg';
import ngorongoro from '../assets/images/discover/ngorongoro-creater.jpg';
import zebra from '../assets/images/discover/zebra.jpg';
import waterfall from '../assets/images/discover/water-fall.jpg';
import kilimanjaro from '../assets/images/discover/kilimanjaro.jpg';
import meru from '../assets/images/discover/meru.jpg';
import oldonyo from '../assets/images/discover/oldonyo.jpg';
import stoneTown from '../assets/images/discover/stone-town.jpg';
import mnemba from '../assets/images/discover/mnemba-island.jpg';
import nungwi from '../assets/images/discover/nungwi-beach.jpg';
import mafia from '../assets/images/discover/mafia-island.jpg';
import chumbe from '../assets/images/discover/chumbe-island.jpg';
import chole from '../assets/images/discover/chole-island.jpg';

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

  .dp-page { font-family: var(--sans); background: var(--white); color: var(--gray-800); }

  /* main container */
  .dp-container {
    max-width: 1400px; margin: 0 auto;
    padding: 0 clamp(20px,5vw,80px) 90px;
  }

  /* section header */
  .dp-section-header {
    margin-bottom: 56px;
    display: flex; align-items: center; gap: 20px;
  }
  .dp-section-icon {
    width: 64px; height: 64px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
  }
  .dp-section-icon svg { width: 36px; height: 36px; }
  .dp-section-title {
    font-family: var(--serif); font-size: clamp(32px,5vw,48px);
    font-weight: 400; color: var(--gray-800);
  }
  .dp-section-underline {
    width: 70px; height: 3px; background: var(--gold);
    margin-top: 10px;
  }

  /* card grid */
  .dp-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 28px; margin-bottom: 80px;
  }
  @media (max-width: 1200px) { .dp-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 900px) { .dp-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .dp-grid { grid-template-columns: 1fr; } }

  .dp-card {
    position: relative; height: 380px; overflow: hidden;
    border: 1px solid var(--gray-200);
    transition: all .3s; cursor: pointer;
  }
  .dp-card:hover { transform: translateY(-8px); border-color: var(--gold); box-shadow: 0 16px 32px rgba(0,0,0,0.1); }
  .dp-card-img {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform .5s ease;
  }
  .dp-card:hover .dp-card-img { transform: scale(1.08); }
  .dp-card-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%);
    transition: background .3s;
  }
  .dp-card:hover .dp-card-overlay {
    background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 100%);
  }
  .dp-card-content {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 24px; color: white; z-index: 2;
  }
  .dp-card-title {
    font-family: var(--serif); font-size: 22px; font-weight: 600;
    margin-bottom: 10px;
  }
  .dp-card-chip {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(255,255,255,0.2); padding: 5px 10px;
    border-radius: 4px; font-size: 12px; margin-bottom: 10px;
  }
  .dp-card-desc {
    font-size: 14px; opacity: 0; transform: translateY(10px);
    transition: all .3s; margin-top: 10px; line-height: 1.5;
  }
  .dp-card:hover .dp-card-desc {
    opacity: 1; transform: translateY(0);
  }
  .dp-card-tags {
    display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px;
  }
  .dp-tag {
    background: rgba(201,168,76,.9); padding: 4px 10px;
    font-size: 11px; border-radius: 4px;
  }

  /* trekking cards */
  .dp-trek-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 32px; margin-bottom: 80px;
  }
  @media (max-width: 900px) { .dp-trek-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .dp-trek-grid { grid-template-columns: 1fr; } }

  .dp-trek-card {
    position: relative; height: 460px; overflow: hidden;
    border: 1px solid var(--gray-200);
    transition: all .3s;
  }
  .dp-trek-card:hover { transform: translateY(-8px); border-color: var(--gold); box-shadow: 0 16px 32px rgba(0,0,0,0.1); }
  .dp-trek-img {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform .6s;
  }
  .dp-trek-card:hover .dp-trek-img { transform: scale(1.08); }
  .dp-trek-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3));
  }
  .dp-trek-content {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 32px; color: white;
  }
  .dp-trek-title {
    font-family: var(--serif); font-size: 32px; font-weight: 600;
    margin-bottom: 14px;
  }
  .dp-trek-stats {
    display: flex; gap: 14px; margin-bottom: 18px; flex-wrap: wrap;
  }
  .dp-trek-stat {
    background: rgba(201,168,76,.9); padding: 5px 12px;
    font-size: 12px; border-radius: 4px;
  }
  .dp-trek-desc {
    font-size: 15px; opacity: 0.9; line-height: 1.5;
  }

  /* zanzibar cards */
  .dp-zanzibar-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 28px; margin-bottom: 80px;
  }
  @media (max-width: 900px) { .dp-zanzibar-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .dp-zanzibar-grid { grid-template-columns: 1fr; } }

  .dp-zanzibar-card {
    position: relative; height: 340px; overflow: hidden;
    border: 1px solid var(--gray-200);
    transition: all .3s;
  }
  .dp-zanzibar-card:hover { transform: scale(1.02); border-color: var(--gold); box-shadow: 0 16px 32px rgba(0,0,0,0.1); }
  .dp-zanzibar-img {
    width: 100%; height: 100%; object-fit: cover;
  }
  .dp-zanzibar-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.85) 100%);
    opacity: 0; transition: opacity .3s;
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
    padding: 28px; text-align: center; color: white;
  }
  .dp-zanzibar-card:hover .dp-zanzibar-overlay { opacity: 1; }
  .dp-zanzibar-title {
    font-family: var(--serif); font-size: 26px; font-weight: 600;
    margin-bottom: 10px;
  }
  .dp-zanzibar-type {
    background: var(--gold); padding: 5px 14px;
    font-size: 12px; border-radius: 4px; margin-bottom: 18px;
    display: inline-block;
  }
  .dp-zanzibar-desc {
    font-size: 14px; margin-bottom: 14px; line-height: 1.5;
  }
  .dp-zanzibar-time {
    font-size: 12px; opacity: 0.8;
  }
  .dp-zanzibar-default {
    position: absolute; bottom: 24px; left: 24px; color: white; z-index: 1;
  }
  .dp-zanzibar-default-name {
    font-family: var(--serif); font-size: 24px; font-weight: 600;
  }

  /* stats paper */
  .dp-stats {
    background: var(--gray-50); border: 1px solid var(--gray-200);
    padding: 56px 40px; margin-top: 48px;
  }
  .dp-stats-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 40px; text-align: center;
  }
  @media (max-width: 800px) { .dp-stats-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .dp-stats-grid { grid-template-columns: 1fr; } }
  .dp-stat-number {
    font-family: var(--serif); font-size: 56px; font-weight: 400;
    color: var(--gold); margin-bottom: 10px;
  }
  .dp-stat-label {
    font-size: 15px; color: var(--gray-600); text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  /* fade in */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .dp-fade-in { animation: fadeUp .5s ease both; }
`;

const DiscoverPage = () => {
  const nationalParks = [
    { name: 'Serengeti National Park', image: leopard, location: 'Northern Tanzania', bestTime: 'June - Oct', wildlife: 'Big Five, Migration', description: 'Endless plains hosting the greatest wildlife spectacle on earth.', color: '#FF6B35' },
    { name: 'Ngorongoro Crater', image: ngorongoro, location: 'Northern Tanzania', bestTime: 'Year-round', wildlife: 'Black Rhinos, Lions', description: "The world's largest inactive volcanic caldera.", color: '#2E7D32' },
    { name: 'Arusha National Park', image: flamingo, location: 'Near Arusha', bestTime: 'Year-round', wildlife: 'Flamingos, Giraffes', description: 'Diverse landscapes from Mount Meru to Momella Lakes.', color: '#1976D2' },
    { name: 'Lake Manyara', image: flamingo, location: 'Northern Tanzania', bestTime: 'June - Feb', wildlife: 'Tree-climbing Lions', description: 'Famous for tree-climbing lions and flamingos.', color: '#9C27B0' },
    { name: 'Ruaha National Park', image: elephant, location: 'Southern Tanzania', bestTime: 'June - Oct', wildlife: 'Elephants, Lions', description: "Tanzania's largest national park.", color: '#FF9800' },
    { name: 'Udzungwa National Park', image: waterfall, location: 'Southern Tanzania', bestTime: 'June - Oct', wildlife: 'Primates, Birds', description: "A hiker's paradise with waterfalls.", color: '#4CAF50' },
    { name: 'Gombe National Park', image: waterfall, location: 'Western Tanzania', bestTime: 'June - Oct', wildlife: 'Chimpanzees', description: "Jane Goodall's famous chimpanzee research site.", color: '#795548' },
    { name: 'Mikumi National Park', image: zebra, location: 'Southern Tanzania', bestTime: 'Year-round', wildlife: 'Zebras, Giraffes', description: 'Excellent game viewing with easy access.', color: '#2196F3' },
  ];

  const trekkingDestinations = [
    { name: 'Mount Kilimanjaro', image: kilimanjaro, height: '5,895m', difficulty: 'Challenging', duration: '6-8 days', description: "Africa's highest peak and the world's tallest free-standing mountain.", color: '#607D8B' },
    { name: 'Mount Meru', image: meru, height: '4,566m', difficulty: 'Moderate', duration: '4-5 days', description: "Tanzania's second-highest peak with stunning views.", color: '#8BC34A' },
    { name: 'Mount Oldonyo Lengai', image: oldonyo, height: '2,962m', difficulty: 'Moderate', duration: '1-2 days', description: 'The only active volcano in Tanzania.', color: '#FF5722' },
  ];

  const zanzibarDestinations = [
    { name: 'Stone Town', image: stoneTown, type: 'Cultural Heritage', bestTime: 'Year-round', description: 'Historic heart of Zanzibar City, a UNESCO World Heritage site.', color: '#9E9E9E' },
    { name: 'Mnemba Island', image: mnemba, type: 'Private Island', bestTime: 'Year-round', description: 'Exclusive private island surrounded by pristine coral reefs.', color: '#00BCD4' },
    { name: 'Nungwi Beach', image: nungwi, type: 'Beach Paradise', bestTime: 'Year-round', description: "Zanzibar's most famous beach with white sands.", color: '#FFC107' },
    { name: 'Mafia Island', image: mafia, type: 'Marine Reserve', bestTime: 'Year-round', description: 'A marine paradise for diving and snorkeling.', color: '#3F51B5' },
    { name: 'Chumbe Island', image: chumbe, type: 'Eco-Reserve', bestTime: 'Year-round', description: 'A private nature reserve with pristine coral reefs.', color: '#4CAF50' },
    { name: 'Chole Island', image: chole, type: 'Historic Island', bestTime: 'Year-round', description: 'Rich in history and culture, with ancient ruins.', color: '#FF9800' },
  ];

  return (
    <>
      <style>{FONTS}{CSS}</style>
      <div className="dp-page">
        <HeroSection
          title="Discover Tanzania"
          subtitle="From savannah to summit, from coast to coral"
          description="Explore breathtaking national parks, majestic mountains, and pristine beaches — each destination tells a story of wilderness and wonder."
          buttonText="Start Your Journey"
          buttonLink="#explore"
          imageUrl={heroImages.safari || fallbackImage}
        />

        <div className="dp-container">
          {/* National Parks Section */}
          <div className="dp-section-header">
            <div className="dp-section-icon" style={{ background: 'var(--gold-pale)' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div>
              <h2 className="dp-section-title">National Parks</h2>
              <div className="dp-section-underline" />
            </div>
          </div>

          <div className="dp-grid">
            {nationalParks.map((park, idx) => (
              <div key={park.name} className="dp-card dp-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
                <img src={park.image} alt={park.name} className="dp-card-img" />
                <div className="dp-card-overlay" />
                <div className="dp-card-content">
                  <div className="dp-card-title">{park.name}</div>
                  <div className="dp-card-chip">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    {park.location}
                  </div>
                  <div className="dp-card-desc">{park.description}</div>
                  <div className="dp-card-tags">
                    <span className="dp-tag">{park.bestTime}</span>
                    <span className="dp-tag">{park.wildlife}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trekking Section */}
          <div className="dp-section-header">
            <div className="dp-section-icon" style={{ background: 'var(--gold-pale)' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                <path d="M16 3l-4 4-4-4-4 8 8 8 8-8-4-8z"/>
              </svg>
            </div>
            <div>
              <h2 className="dp-section-title">Trekking & Hiking</h2>
              <div className="dp-section-underline" />
            </div>
          </div>

          <div className="dp-trek-grid">
            {trekkingDestinations.map((dest, idx) => (
              <div key={dest.name} className="dp-trek-card dp-fade-in" style={{ animationDelay: `${idx * 80}ms` }}>
                <img src={dest.image} alt={dest.name} className="dp-trek-img" />
                <div className="dp-trek-overlay" />
                <div className="dp-trek-content">
                  <div className="dp-trek-title">{dest.name}</div>
                  <div className="dp-trek-stats">
                    <span className="dp-trek-stat">{dest.height}</span>
                    <span className="dp-trek-stat">{dest.difficulty}</span>
                    <span className="dp-trek-stat">{dest.duration}</span>
                  </div>
                  <div className="dp-trek-desc">{dest.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Zanzibar Section */}
          <div className="dp-section-header">
            <div className="dp-section-icon" style={{ background: 'var(--gold-pale)' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                <path d="M12 2v20M2 12h20"/>
              </svg>
            </div>
            <div>
              <h2 className="dp-section-title">Explore Zanzibar</h2>
              <div className="dp-section-underline" />
            </div>
          </div>

          <div className="dp-zanzibar-grid">
            {zanzibarDestinations.map((dest, idx) => (
              <div key={dest.name} className="dp-zanzibar-card dp-fade-in" style={{ animationDelay: `${idx * 60}ms` }}>
                <img src={dest.image} alt={dest.name} className="dp-zanzibar-img" />
                <div className="dp-zanzibar-default">
                  <div className="dp-zanzibar-default-name">{dest.name}</div>
                </div>
                <div className="dp-zanzibar-overlay">
                  <div className="dp-zanzibar-title">{dest.name}</div>
                  <span className="dp-zanzibar-type">{dest.type}</span>
                  <div className="dp-zanzibar-desc">{dest.description}</div>
                  <div className="dp-zanzibar-time">Best time: {dest.bestTime}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="dp-stats">
            <div className="dp-stats-grid">
              <div><div className="dp-stat-number">16+</div><div className="dp-stat-label">National Parks</div></div>
              <div><div className="dp-stat-number">3</div><div className="dp-stat-label">Majestic Mountains</div></div>
              <div><div className="dp-stat-number">6+</div><div className="dp-stat-label">Zanzibar Islands</div></div>
              <div><div className="dp-stat-number">1000+</div><div className="dp-stat-label">Wildlife Species</div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverPage;