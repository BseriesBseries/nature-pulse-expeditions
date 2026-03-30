import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { heroImages, fallbackImage, companyLogo } from '../constants/images';

// Import local images
import tour1 from '../assets/images/tourandsafaris/tour1.jpg';

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

  .pr-page { font-family: var(--sans); background: var(--white); color: var(--gray-800); }

  /* main container */
  .pr-container {
    max-width: 1400px; margin: 0 auto;
    padding: 0 clamp(20px,5vw,80px) 80px;
  }

  /* page header */
  .pr-header {
    text-align: center; padding: 64px 0 48px;
  }
  .pr-eyebrow {
    font-family: var(--sans); font-size: 20px; font-weight: 600;
    text-transform: uppercase; letter-spacing: 5px; color: var(--gold);
    margin-bottom: 20px;
  }
  .pr-title {
    font-family: var(--serif); font-size: clamp(56px,8vw,96px);
    font-weight: 400; line-height: 1.1; color: var(--gray-800);
    margin-bottom: 24px;
  }
  .pr-title em { font-style: italic; color: var(--gold); }
  .pr-sub {
    font-size: 20px; color: var(--gray-600); max-width: 700px;
    margin: 0 auto; line-height: 1.7;
  }
  .pr-divider {
    width: 90px; height: 3px; background: var(--gold);
    margin: 32px auto 0;
  }

  /* tabs */
  .pr-tabs {
    display: flex; justify-content: center; gap: 12px;
    flex-wrap: wrap; margin: 56px 0 48px;
    border-bottom: 1px solid var(--gray-200);
    padding-bottom: 20px;
  }
  .pr-tab {
    background: none; border: none; padding: 12px 28px;
    font-family: var(--sans); font-size: 16px; text-transform: uppercase;
    letter-spacing: 1.5px; font-weight: 600; color: var(--gray-600); cursor: pointer;
    transition: all .2s; border-radius: 4px;
  }
  .pr-tab:hover { color: var(--gold); background: var(--gold-pale); }
  .pr-tab-active {
    color: var(--gold); background: var(--gold-pale);
    border: 1px solid rgba(201,168,76,.3);
  }

  /* card grid */
  .pr-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 28px; margin-bottom: 56px;
  }
  @media (max-width: 1000px) { .pr-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 680px) { .pr-grid { grid-template-columns: 1fr; } }

  .pr-card {
    background: var(--white); border: 1px solid var(--gray-200);
    transition: transform .3s, box-shadow .3s;
    position: relative;
    box-shadow: 0 2px 8px rgba(0,0,0,0.02);
  }
  .pr-card:hover { transform: translateY(-6px); box-shadow: 0 12px 24px rgba(0,0,0,0.08); border-color: var(--gold); }

  .pr-card-accent {
    height: 4px; background: var(--gold);
  }
  .pr-card-icon {
    width: 80px; height: 80px; border-radius: 50%;
    background: var(--gold-pale); display: flex; align-items: center;
    justify-content: center; margin: 28px auto 0;
    color: var(--gold);
  }
  .pr-card-icon svg { width: 40px; height: 40px; stroke: currentColor; fill: none; }
  .pr-card-content { padding: 28px; text-align: center; }
  .pr-card-title {
    font-family: var(--serif); font-size: 24px; font-weight: 600;
    color: var(--gray-800); margin-bottom: 12px;
  }
  .pr-card-price {
    font-family: var(--serif); font-size: 42px; font-weight: 400;
    color: var(--gold); margin: 20px 0 12px;
  }
  .pr-card-price small { font-size: 16px; color: var(--gray-500); }
  .pr-card-note { font-size: 13px; color: var(--gray-500); }

  /* accordion */
  .pr-accordion {
    margin-bottom: 24px; background: var(--white);
    border: 1px solid var(--gray-200);
    transition: all .2s;
    box-shadow: 0 2px 8px rgba(0,0,0,0.02);
  }
  .pr-accordion:hover { border-color: var(--gold); }
  .pr-accordion-header {
    padding: 24px 28px; cursor: pointer;
    display: flex; align-items: center; gap: 20px;
    transition: background .2s;
  }
  .pr-accordion-header:hover { background: var(--gold-pale); }
  .pr-accordion-icon {
    width: 56px; height: 56px; border-radius: 50%;
    background: var(--gold-pale); display: flex;
    align-items: center; justify-content: center;
    color: var(--gold); flex-shrink: 0;
  }
  .pr-accordion-icon svg { width: 28px; height: 28px; stroke: currentColor; fill: none; }
  .pr-accordion-title {
    flex: 1;
  }
  .pr-accordion-title h3 {
    font-family: var(--serif); font-size: 26px; font-weight: 500;
    color: var(--gray-800); margin-bottom: 6px;
  }
  .pr-accordion-title p {
    font-size: 14px; color: var(--gray-500);
  }
  .pr-accordion-expand {
    color: var(--gold); transition: transform .2s;
  }
  .pr-accordion-expand.open { transform: rotate(180deg); }
  .pr-accordion-content {
    padding: 0 28px 28px 104px;
    border-top: 1px solid var(--gray-200);
  }
  @media (max-width: 600px) {
    .pr-accordion-content { padding: 0 24px 24px 24px; }
    .pr-accordion-header { flex-wrap: wrap; }
  }

  /* price table */
  .pr-price-table {
    width: 100%; border-collapse: collapse;
  }
  .pr-price-table th {
    text-align: left; padding: 14px 10px;
    font-size: 13px; text-transform: uppercase; letter-spacing: 1px;
    color: var(--gray-500); font-weight: 600;
    border-bottom: 1px solid var(--gray-200);
  }
  .pr-price-table td {
    padding: 16px 10px; border-bottom: 1px solid var(--gray-100);
    font-size: 16px; color: var(--gray-700);
  }
  .pr-price-table td:last-child,
  .pr-price-table th:last-child { text-align: right; }
  .pr-price-table td:first-child,
  .pr-price-table th:first-child { padding-left: 0; }
  .pr-price-table td:last-child { padding-right: 0; }
  .pr-price-amount {
    font-family: var(--serif); font-size: 20px;
    color: var(--gold);
  }
  .pr-season-badge {
    display: inline-block; padding: 5px 12px;
    font-size: 12px; letter-spacing: .5px;
    background: var(--gold-pale);
    color: var(--gold);
  }

  /* mountain trek grid */
  .pr-trek-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 32px; margin-bottom: 56px;
  }
  @media (max-width: 800px) { .pr-trek-grid { grid-template-columns: 1fr; } }
  .pr-trek-card {
    background: var(--white); border: 1px solid var(--gray-200);
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.02);
  }
  .pr-trek-card:hover { border-color: var(--gold); }
  .pr-trek-header {
    padding: 28px; background: var(--gold-pale);
    border-bottom: 1px solid var(--gray-200);
  }
  .pr-trek-header h3 {
    font-family: var(--serif); font-size: 32px; font-weight: 500;
    color: var(--gray-800); display: flex; align-items: center; gap: 14px;
  }
  .pr-trek-header p {
    font-size: 14px; color: var(--gray-500); margin-top: 8px;
  }
  .pr-trek-table {
    width: 100%; border-collapse: collapse;
  }
  .pr-trek-table th {
    text-align: left; padding: 16px 24px;
    font-size: 13px; text-transform: uppercase; letter-spacing: 1px;
    color: var(--gray-500); font-weight: 600;
    background: var(--gray-50);
  }
  .pr-trek-table td {
    padding: 16px 24px; border-bottom: 1px solid var(--gray-100);
    font-size: 16px; color: var(--gray-700);
  }
  .pr-trek-table td:last-child,
  .pr-trek-table th:last-child { text-align: right; }
  .pr-difficulty {
    display: inline-block; padding: 4px 10px;
    font-size: 12px; letter-spacing: .5px;
    background: var(--gold-pale); color: var(--gold);
  }

  /* itinerary */
  .pr-itinerary {
    background: var(--white); border: 1px solid var(--gray-200);
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.02);
  }
  .pr-itinerary-header {
    padding: 36px; background: var(--gold-pale);
    border-bottom: 1px solid var(--gray-200);
  }
  .pr-itinerary-header h3 {
    font-family: var(--serif); font-size: 38px; font-weight: 400;
    color: var(--gray-800); margin-bottom: 10px;
  }
  .pr-itinerary-header p {
    font-size: 16px; color: var(--gray-500);
  }
  .pr-itinerary-list { padding: 0; margin: 0; list-style: none; }
  .pr-itinerary-item {
    display: flex; align-items: flex-start; gap: 24px;
    padding: 24px 32px; border-bottom: 1px solid var(--gray-100);
  }
  .pr-itinerary-item:last-child { border-bottom: none; }
  .pr-itinerary-day {
    width: 56px; height: 56px; border-radius: 50%;
    background: var(--gold-pale); display: flex;
    align-items: center; justify-content: center;
    font-family: var(--serif); font-size: 24px;
    color: var(--gold); flex-shrink: 0;
  }
  .pr-itinerary-icon {
    color: var(--gold); flex-shrink: 0;
  }
  .pr-itinerary-icon svg { width: 24px; height: 24px; stroke: currentColor; fill: none; }
  .pr-itinerary-content { flex: 1; }
  .pr-itinerary-content h4 {
    font-family: var(--serif); font-size: 22px; font-weight: 600;
    color: var(--gray-800); margin-bottom: 6px;
  }
  .pr-itinerary-content p {
    font-size: 16px; color: var(--gray-500); line-height: 1.5;
  }

  /* fade in */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .pr-fade-in { animation: fadeUp .5s ease both; }
`;

function formatPrice(price) {
  const num = typeof price === 'string' ? parseFloat(price) : price;
  return num.toLocaleString('en-US', {
    minimumFractionDigits: num % 1 !== 0 ? 2 : 0,
    maximumFractionDigits: 2,
  });
}

const PackageRate = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (index) => {
    setOpenAccordions(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const tabs = ['Day Tours', 'Safari Packages', 'Mountain Treks', 'Itinerary'];

  const dayTours = [
    { name: 'Chemka Hot Spring', price: '100', icon: 'spa' },
    { name: 'Materuni Waterfall', price: '100', icon: 'terrain' },
    { name: 'Tarangire Private Day Tour', price: '250', icon: 'forest' },
    { name: 'Ngorongoro Crater Private Day Tour', price: '400', icon: 'location' },
    { name: 'Lake Manyara Day Tour', price: '250', icon: 'water' },
  ];

  const safariPackages = [
    {
      type: 'Budgeted Camping Safaris',
      duration: '6 Days',
      icon: 'camping',
      color: '#4CAF50',
      seasons: [
        { name: 'Low Season (Apr 1 - May 19)', prices: { '2': 1850, '4': 1550, '6': 1350 } },
        { name: 'Mid Season (Rest of Year)', prices: { '2': 1950, '4': 1650, '6': 1450 } },
        { name: 'High Season (Jul, Sep, Oct, Dec)', prices: { '2': 2150, '4': 1850, '6': 1650 } },
      ]
    },
    {
      type: 'Private Mid-Range Safaris',
      duration: '6 Days',
      icon: 'midrange',
      color: '#FF9800',
      seasons: [
        { name: 'Low Season', prices: { '2': 2450, '4': 2150, '6': 1950 } },
        { name: 'Mid Season', prices: { '2': 2650, '4': 2350, '6': 2150 } },
        { name: 'High Season', prices: { '2': 2950, '4': 2650, '6': 2450 } },
      ]
    },
    {
      type: 'Luxury Safaris Experience',
      duration: '6 Days',
      icon: 'luxury',
      color: '#9C27B0',
      seasons: [
        { name: 'Low Season', prices: { '2': 3450, '4': 3050, '6': 2750 } },
        { name: 'Mid Season', prices: { '2': 3650, '4': 3250, '6': 2950 } },
        { name: 'High Season', prices: { '2': 3950, '4': 3550, '6': 3250 } },
      ]
    },
    {
      type: 'Honeymoon Package',
      duration: '10 Days',
      icon: 'honeymoon',
      color: '#E91E63',
      seasons: [
        { name: 'Low Season', prices: { '2': 2705.96, '4': 2250.37, '6': 2124.28 } },
        { name: 'Mid Season', prices: { '2': 2964.26, '4': 2409.96, '6': 2251.84 } },
        { name: 'High Season', prices: { '2': 3315.93, '4': 2669.57, '6': 2481.66 } },
      ]
    },
  ];

  const mountainTreks = {
    kilimanjaro: [
      { route: '5 Days via Marangu Route', price: '1650', difficulty: 'Moderate' },
      { route: '6 Days via Machame Route', price: '1950', difficulty: 'Moderate' },
      { route: '7 Days via Umbwe Route', price: '2200', difficulty: 'Challenging' },
      { route: '7 Days via Machame Route', price: '2300', difficulty: 'Moderate' },
      { route: '7 Days via Rongai Route', price: '2000', difficulty: 'Moderate' },
      { route: '7 Days via Lemosho Route', price: '2300', difficulty: 'Moderate' },
      { route: '8 Days via Lemosho Route', price: '2500', difficulty: 'Moderate' },
    ],
    meru: [
      { route: '3 Days Mount Meru', price: '900', difficulty: 'Moderate' },
      { route: '4 Days Mount Meru', price: '1000', difficulty: 'Moderate' },
    ]
  };

  const itinerary = [
    { day: 1, title: 'Arrival at KIA', description: 'Transfer to lodge in Arusha', icon: 'flight' },
    { day: 2, title: 'Tarangire Reserve', description: 'Game drive and wildlife viewing', icon: 'forest' },
    { day: 3, title: 'Central Plains', description: 'Full day game drive', icon: 'forest' },
    { day: 4, title: 'Central Plains', description: 'Morning and afternoon game drives', icon: 'forest' },
    { day: 5, title: 'Crater Highlands', description: 'Crater tour and wildlife viewing', icon: 'location' },
    { day: 6, title: 'Flight to Coastal Zone', description: 'Included in package', icon: 'flight' },
    { day: 7, title: 'Coastal Zone', description: 'Beach relaxation and exploration', icon: 'beach' },
    { day: 8, title: 'Coastal Zone', description: 'Optional tours and beach time', icon: 'beach' },
    { day: 9, title: 'Coastal Zone', description: 'Leisure and cultural experiences', icon: 'beach' },
    { day: 10, title: 'International Flight', description: 'Departure from Coastal Airport', icon: 'flight' },
  ];

  const IconComponent = ({ name }) => {
    const icons = {
      spa: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 6v6l4 2"/></svg>,
      terrain: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 4v10.54a4 4 0 1 1-4 0V4M8 14h8"/></svg>,
      forest: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
      location: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
      water: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v20M2 12h20"/></svg>,
      camping: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2L2 22h20L12 2z"/><path d="M8 22h8"/></svg>,
      midrange: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
      luxury: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
      honeymoon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
      flight: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 15l4-8 4 8M9 7v10"/><path d="M3 15h12"/></svg>,
      beach: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v20M2 12h20"/></svg>,
      mountain: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 3l-4 4-4-4-4 8 8 8 8-8-4-8z"/></svg>,
    };
    return <div className="pr-card-icon">{icons[name] || icons.spa}</div>;
  };

  const AccordionIcon = ({ name }) => {
    const icons = {
      camping: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2L2 22h20L12 2z"/><path d="M8 22h8"/></svg>,
      midrange: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
      luxury: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
      honeymoon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    };
    return <div className="pr-accordion-icon">{icons[name] || icons.camping}</div>;
  };

  const ItineraryIcon = ({ name }) => {
    const icons = {
      flight: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 15l4-8 4 8M9 7v10"/><path d="M3 15h12"/></svg>,
      forest: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
      location: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
      beach: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v20M2 12h20"/></svg>,
    };
    return <div className="pr-itinerary-icon">{icons[name] || icons.forest}</div>;
  };

  return (
    <>
      <style>{FONTS}{CSS}</style>
      <div className="pr-page">
        <HeroSection
          title="Investment & Rates"
          subtitle="Transparent pricing for unforgettable journeys"
          description="Choose from our range of thoughtfully crafted expeditions — from day tours to comprehensive safaris and mountain treks."
          buttonText="Plan Your Journey"
          buttonLink="#packages"
          imageUrl={heroImages.safari || fallbackImage}
        />

        <div className="pr-container">
          {/* Header */}
          <div className="pr-header">
            <div className="pr-eyebrow">Pricing & Packages</div>
            <h1 className="pr-title">Investment in <em>Adventure</em></h1>
            <p className="pr-sub">Every journey is unique. Below are sample rates to guide your planning — each expedition is customized to your preferences.</p>
            <div className="pr-divider" />
          </div>

          {/* Tabs */}
          <div className="pr-tabs">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                className={`pr-tab ${activeTab === idx ? 'pr-tab-active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Day Tours Panel */}
          {activeTab === 0 && (
            <div className="pr-grid pr-fade-in">
              {dayTours.map((tour, idx) => (
                <div key={idx} className="pr-card">
                  <div className="pr-card-accent" />
                  <IconComponent name={tour.icon} />
                  <div className="pr-card-content">
                    <h3 className="pr-card-title">{tour.name}</h3>
                    <div className="pr-card-price">${formatPrice(tour.price)}<small>/person</small></div>
                    <div className="pr-card-note">Private tour · Flexible timing</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Safari Packages Panel */}
          {activeTab === 1 && (
            <div className="pr-fade-in">
              {safariPackages.map((pkg, idx) => (
                <div key={idx} className="pr-accordion">
                  <div className="pr-accordion-header" onClick={() => toggleAccordion(idx)}>
                    <AccordionIcon name={pkg.icon} />
                    <div className="pr-accordion-title">
                      <h3>{pkg.type}</h3>
                      <p>{pkg.duration} · Private or group arrangements</p>
                    </div>
                    <svg
                      className={`pr-accordion-expand ${openAccordions[idx] ? 'open' : ''}`}
                      width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  {openAccordions[idx] && (
                    <div className="pr-accordion-content">
                      <table className="pr-price-table">
                        <thead>
                          <tr>
                            <th>Season</th>
                            <th>2 Persons</th>
                            <th>4 Persons</th>
                            <th>6 Persons</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pkg.seasons.map((season, sIdx) => (
                            <tr key={sIdx}>
                              <td><span className="pr-season-badge">{season.name}</span></td>
                              <td><span className="pr-price-amount">${formatPrice(season.prices['2'])}</span></td>
                              <td><span className="pr-price-amount">${formatPrice(season.prices['4'])}</span></td>
                              <td><span className="pr-price-amount">${formatPrice(season.prices['6'])}</span></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <p style={{ fontSize: 13, color: 'var(--gray-500)', marginTop: 20 }}>
                        * Prices are per person sharing. Custom quotes available for different group sizes.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Mountain Treks Panel */}
          {activeTab === 2 && (
            <div className="pr-trek-grid pr-fade-in">
              {/* Kilimanjaro */}
              <div className="pr-trek-card">
                <div className="pr-trek-header">
                  <h3>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--gold)"><path d="M16 3l-4 4-4-4-4 8 8 8 8-8-4-8z"/></svg>
                    Mount Kilimanjaro
                  </h3>
                  <p>Africa's highest peak · 5,895m</p>
                </div>
                <table className="pr-trek-table">
                  <thead>
                    <tr><th>Route</th><th>Price</th><th>Difficulty</th></tr>
                  </thead>
                  <tbody>
                    {mountainTreks.kilimanjaro.map((trek, idx) => (
                      <tr key={idx}>
                        <td>{trek.route}</td>
                        <td><span className="pr-price-amount">${formatPrice(trek.price)}</span></td>
                        <td><span className="pr-difficulty">{trek.difficulty}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mount Meru */}
              <div className="pr-trek-card">
                <div className="pr-trek-header">
                  <h3>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--gold)"><path d="M16 3l-4 4-4-4-4 8 8 8 8-8-4-8z"/></svg>
                    Mount Meru
                  </h3>
                  <p>Tanzania's second highest · 4,566m</p>
                </div>
                <table className="pr-trek-table">
                  <thead>
                    <tr><th>Route</th><th>Price</th></tr>
                  </thead>
                  <tbody>
                    {mountainTreks.meru.map((trek, idx) => (
                      <tr key={idx}>
                        <td>{trek.route}</td>
                        <td><span className="pr-price-amount">${formatPrice(trek.price)}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Itinerary Panel */}
          {activeTab === 3 && (
            <div className="pr-itinerary pr-fade-in">
              <div className="pr-itinerary-header">
                <h3>Sample Journey: 10 Days</h3>
                <p>Wilderness & Coastal Expedition</p>
              </div>
              <ul className="pr-itinerary-list">
                {itinerary.map((item) => (
                  <li key={item.day} className="pr-itinerary-item">
                    <div className="pr-itinerary-day">{item.day}</div>
                    <ItineraryIcon name={item.icon} />
                    <div className="pr-itinerary-content">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Note */}
          <div style={{ marginTop: 56, textAlign: 'center', padding: '28px 0', borderTop: '1px solid var(--gray-200)' }}>
            <p style={{ fontSize: 14, color: 'var(--gray-500)' }}>
              All rates are per person sharing. Custom itineraries and private arrangements available upon request.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageRate;