import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { heroImages, fallbackImage, companyLogo } from '../constants/images';

import tour1 from '../assets/images/tourandsafaris/tour1.jpg';
import tour2 from '../assets/images/tourandsafaris/tour2.jpg';
import tour3 from '../assets/images/tourandsafaris/tour3.jpg';
import tour4 from '../assets/images/tourandsafaris/tour4.jpg';
import tour5 from '../assets/images/tourandsafaris/tour5.jpg';
import tour6 from '../assets/images/tourandsafaris/tour6.jpg';

import HeroSection from '../components/HeroSection';

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

  .ts-page { font-family: var(--sans); background: var(--white); color: var(--gray-800); }

  /* ── filter bar ── */
  .ts-filter-bar {
    background: var(--white);
    border-bottom: 1px solid var(--gray-200);
    position: sticky; top: 0; z-index: 100;
    padding: 0 clamp(20px, 5vw, 80px);
  }
  .ts-filter-inner {
    max-width: 1400px; margin: 0 auto;
    display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
    padding: 20px 0;
  }
  .ts-search-wrap { position: relative; flex: 1; min-width: 240px; }
  .ts-search-wrap svg {
    position: absolute; left: 16px; top: 50%; transform: translateY(-50%);
    color: var(--gray-500); pointer-events: none;
    width: 18px; height: 18px;
  }
  .ts-search {
    width: 100%; background: var(--white);
    border: 1px solid var(--gray-200); border-radius: 4px;
    padding: 12px 16px 12px 44px;
    font-family: var(--sans); font-size: 15px; color: var(--gray-800);
    outline: none; transition: border-color .2s;
  }
  .ts-search::placeholder { color: var(--gray-500); }
  .ts-search:focus { border-color: var(--gold); }

  .ts-select-wrap { position: relative; }
  .ts-select-wrap svg {
    position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
    pointer-events: none; color: var(--gold);
    width: 14px; height: 14px;
  }
  .ts-select {
    appearance: none;
    background: var(--white);
    border: 1px solid var(--gray-200); border-radius: 4px;
    padding: 12px 40px 12px 16px;
    font-family: var(--sans); font-size: 15px; color: var(--gray-800);
    cursor: pointer; outline: none; transition: border-color .2s;
    min-width: 180px;
  }
  .ts-select option { background: var(--white); }
  .ts-select:focus { border-color: var(--gold); }

  .ts-filter-count {
    margin-left: auto;
    font-size: 14px; color: var(--gray-500); white-space: nowrap;
    font-family: var(--serif); letter-spacing: .5px; font-style: italic;
  }

  /* ── page heading ── */
  .ts-heading {
    max-width: 1400px; margin: 0 auto;
    padding: clamp(56px,8vw,112px) clamp(20px,5vw,80px) 0;
    display: flex; align-items: flex-end; justify-content: space-between;
    flex-wrap: wrap; gap: 32px;
  }
  .ts-heading-logo {
    width: 64px; height: 64px; border-radius: 50%;
    border: 2px solid var(--gold);
    object-fit: cover; margin-bottom: 20px;
  }
  .ts-heading-eyebrow {
    font-family: var(--sans); font-size: 20px; font-weight: 600;
    text-transform: uppercase; letter-spacing: 5px; color: var(--gold);
    margin-bottom: 16px;
  }
  .ts-heading h2 {
    font-family: var(--serif); font-size: clamp(48px,6vw,84px);
    font-weight: 400; line-height: 1.1; color: var(--gray-800);
    letter-spacing: -.5px;
  }
  .ts-heading h2 em { font-style: italic; color: var(--gold); }
  .ts-heading-sub {
    font-size: 18px; color: var(--gray-600); line-height: 1.7; max-width: 420px;
    margin-top: 20px;
  }
  .ts-heading-rule {
    width: 1px; height: 100px; background: var(--gray-200);
    margin: 0 28px; flex-shrink: 0;
  }
  .ts-heading-stat { text-align: center; }
  .ts-heading-stat-num {
    font-family: var(--serif); font-size: 56px; font-weight: 400;
    color: var(--gold); line-height: 1;
  }
  .ts-heading-stat-lbl {
    font-size: 13px; text-transform: uppercase; letter-spacing: 2.5px;
    color: var(--gray-500); margin-top: 8px;
  }
  .ts-heading-stats { display: flex; align-items: center; gap: 0; }

  /* ── grid ── */
  .ts-grid-wrap {
    max-width: 1400px; margin: 0 auto;
    padding: 56px clamp(20px,5vw,80px) 90px;
  }
  .ts-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
  @media (max-width: 1100px) { .ts-grid { grid-template-columns: repeat(2,1fr); } }
  @media (max-width: 680px)  { .ts-grid { grid-template-columns: 1fr; } }

  /* ── card ── */
  .ts-card {
    position: relative; overflow: hidden;
    background: var(--white);
    cursor: pointer;
    display: flex; flex-direction: column;
    transition: all .3s;
    border: 1px solid var(--gray-200);
    box-shadow: 0 2px 8px rgba(0,0,0,0.02);
  }
  .ts-card:hover { 
    transform: translateY(-8px);
    border-color: var(--gold);
    box-shadow: 0 16px 32px rgba(0,0,0,0.1);
  }

  .ts-card-img-wrap {
    position: relative; overflow: hidden;
    aspect-ratio: 4/3;
  }
  .ts-card-img {
    width: 100%; height: 100%;
    object-fit: cover; display: block;
    transition: transform .8s cubic-bezier(.25,.46,.45,.94), filter .8s;
  }
  .ts-card:hover .ts-card-img {
    transform: scale(1.07);
  }

  /* gradient overlay */
  .ts-card-img-wrap::after {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 30%,
      rgba(0,0,0,.3) 70%,
      rgba(0,0,0,.5) 100%
    );
    pointer-events: none;
  }

  /* popular badge */
  .ts-badge {
    position: absolute; top: 20px; left: 20px; z-index: 2;
    background: var(--gold);
    color: var(--white);
    font-family: var(--sans); font-size: 12px; font-weight: 600;
    text-transform: uppercase; letter-spacing: 1.5px;
    padding: 5px 12px;
  }

  /* duration */
  .ts-card-duration {
    position: absolute; bottom: 18px; right: 18px; z-index: 2;
    font-family: var(--serif); font-size: 14px; font-style: italic;
    color: var(--white); display: flex; align-items: center; gap: 6px;
    background: rgba(0,0,0,0.6); padding: 6px 10px; border-radius: 4px;
  }

  .ts-card-body { padding: 26px 28px 28px; flex: 1; display: flex; flex-direction: column; }

  .ts-card-name {
    font-family: var(--serif); font-size: 26px; font-weight: 500;
    color: var(--gray-800); line-height: 1.2; margin-bottom: 12px;
    transition: color .2s;
  }
  .ts-card:hover .ts-card-name { color: var(--gold); }

  .ts-card-desc {
    font-size: 15px; color: var(--gray-600); line-height: 1.65;
    margin-bottom: 18px; flex: 1;
  }

  /* regions row */
  .ts-card-regions {
    display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
    margin-bottom: 18px;
  }
  .ts-region-dot {
    width: 5px; height: 5px; border-radius: 50%; background: var(--gold);
    flex-shrink: 0;
  }
  .ts-region-name { font-size: 13px; color: var(--gray-500); letter-spacing: .3px; }
  .ts-region-arrow { font-size: 12px; color: var(--gray-400); }

  /* highlights */
  .ts-highlights { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 22px; }
  .ts-hl {
    font-size: 12px; color: var(--gold);
    border: 1px solid rgba(201,168,76,.3);
    padding: 4px 12px; letter-spacing: .5px;
    font-family: var(--sans);
  }

  /* rating */
  .ts-rating {
    display: flex; align-items: center; gap: 10px; margin-bottom: 22px;
  }
  .ts-stars { display: flex; gap: 3px; }
  .ts-star { color: var(--gold); font-size: 14px; }
  .ts-star-empty { color: var(--gray-300); font-size: 14px; }
  .ts-rating-text { font-size: 13px; color: var(--gray-500); }
  .ts-rating-score { font-family: var(--serif); color: var(--gold); font-size: 17px; }

  /* card footer */
  .ts-card-footer {
    display: flex; gap: 10px; border-top: 1px solid var(--gray-200);
    padding-top: 20px; margin-top: auto;
  }
  .ts-btn-outline {
    flex: 1; padding: 12px; text-align: center;
    border: 1px solid var(--gray-300); color: var(--gray-700);
    font-family: var(--sans); font-size: 13px; font-weight: 600;
    text-transform: uppercase; letter-spacing: 1.5px;
    text-decoration: none; transition: all .2s;
    background: transparent;
  }
  .ts-btn-outline:hover {
    background: var(--gold-pale); border-color: var(--gold); color: var(--gold);
  }
  .ts-btn-solid {
    flex: 1; padding: 12px; text-align: center;
    background: var(--gold); color: var(--white);
    font-family: var(--sans); font-size: 13px; font-weight: 600;
    text-transform: uppercase; letter-spacing: 1.5px;
    text-decoration: none; transition: all .2s;
    border: 1px solid var(--gold);
  }
  .ts-btn-solid:hover { background: var(--gold-dark); }

  /* ── skeleton ── */
  @keyframes shimmer {
    0%   { background-position: -800px 0; }
    100% { background-position: 800px 0; }
  }
  .ts-skeleton {
    background: linear-gradient(90deg, var(--gray-100) 25%, var(--gray-200) 50%, var(--gray-100) 75%);
    background-size: 800px 100%;
    animation: shimmer 1.6s infinite;
  }

  /* ── empty state ── */
  .ts-empty {
    grid-column: 1/-1; text-align: center;
    padding: 100px 20px;
  }
  .ts-empty-icon {
    font-family: var(--serif); font-size: 96px; color: var(--gray-300);
    margin-bottom: 20px; display: block;
  }
  .ts-empty h3 { font-family: var(--serif); font-size: 32px; font-weight: 400; color: var(--gray-600); }
  .ts-empty p  { font-size: 16px; color: var(--gray-500); margin-top: 12px; }

  /* ── about section ── */
  .ts-about {
    background: var(--gray-50);
    border-top: 1px solid var(--gray-200);
    border-bottom: 1px solid var(--gray-200);
    padding: clamp(70px,9vw,140px) clamp(20px,5vw,80px);
  }
  .ts-about-inner { max-width: 1400px; margin: 0 auto; }
  .ts-about-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 90px;
    align-items: start;
  }
  @media (max-width: 900px) { .ts-about-grid { grid-template-columns: 1fr; gap: 56px; } }

  .ts-about-eyebrow {
    font-size: 20px; text-transform: uppercase; letter-spacing: 5px;
    color: var(--gold); margin-bottom: 20px; font-family: var(--sans);
    font-weight: 600;
  }
  .ts-about h3 {
    font-family: var(--serif); font-size: clamp(38px,5vw,60px);
    font-weight: 400; color: var(--gray-800); line-height: 1.1;
    margin-bottom: 28px;
  }
  .ts-about h3 em { font-style: italic; color: var(--gold); }
  .ts-about p { font-size: 16px; color: var(--gray-600); line-height: 1.8; margin-bottom: 20px; }

  .ts-about-pillars { display: flex; flex-direction: column; gap: 32px; margin-top: 12px; }
  .ts-pillar { padding-left: 24px; border-left: 2px solid var(--gold); }
  .ts-pillar h4 {
    font-family: var(--serif); font-size: 22px; font-weight: 600;
    color: var(--gray-800); margin-bottom: 8px;
  }
  .ts-pillar p { font-size: 15px; color: var(--gray-600); line-height: 1.7; margin: 0; }

  .ts-about-box {
    background: var(--white);
    border: 1px solid var(--gray-200);
    padding: 48px;
  }
  .ts-about-box h4 {
    font-family: var(--serif); font-size: 32px; font-weight: 400;
    color: var(--gold); margin-bottom: 24px;
  }
  .ts-about-box p { font-size: 15px; color: var(--gray-600); line-height: 1.8; margin-bottom: 18px; }
  .ts-about-box-img {
    width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block;
    margin-top: 28px;
  }

  /* ── accommodation banner ── */
  .ts-banner {
    background: var(--white);
    border-top: 1px solid var(--gray-200);
    border-bottom: 1px solid var(--gray-200);
    padding: clamp(56px,8vw,112px) clamp(20px,5vw,80px);
  }
  .ts-banner-inner {
    max-width: 1400px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr auto; gap: 70px; align-items: center;
  }
  @media (max-width: 800px) { .ts-banner-inner { grid-template-columns: 1fr; } }
  .ts-banner h3 {
    font-family: var(--serif); font-size: clamp(38px,5vw,60px);
    font-weight: 400; color: var(--gray-800); margin-bottom: 24px;
  }
  .ts-banner h3 em { font-style: italic; color: var(--gold); }
  .ts-banner p { font-size: 16px; color: var(--gray-600); line-height: 1.8; max-width: 600px; }
  .ts-banner p + p { margin-top: 16px; }
  .ts-banner-img {
    width: 320px; aspect-ratio: 3/4; object-fit: cover;
    border: 1px solid var(--gray-200);
  }
  @media (max-width: 800px) { .ts-banner-img { width: 100%; aspect-ratio: 16/9; } }

  /* fade in on mount */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .ts-card {
    animation: fadeUp .5s ease both;
  }
`;

function StarRating({ value }) {
  return (
    <div className="ts-stars">
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} className={i <= Math.round(value) ? 'ts-star' : 'ts-star-empty'}>★</span>
      ))}
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="ts-card">
      <div className="ts-skeleton" style={{ aspectRatio: '4/3' }} />
      <div style={{ padding: '26px 28px 28px' }}>
        <div className="ts-skeleton" style={{ height: 32, borderRadius: 2, marginBottom: 12 }} />
        <div className="ts-skeleton" style={{ height: 16, borderRadius: 2, marginBottom: 8, width: '90%' }} />
        <div className="ts-skeleton" style={{ height: 16, borderRadius: 2, marginBottom: 8, width: '75%' }} />
        <div className="ts-skeleton" style={{ height: 16, borderRadius: 2, marginBottom: 22, width: '60%' }} />
        <div style={{ display: 'flex', gap: 10 }}>
          <div className="ts-skeleton" style={{ flex: 1, height: 44, borderRadius: 2 }} />
          <div className="ts-skeleton" style={{ flex: 1, height: 44, borderRadius: 2 }} />
        </div>
      </div>
    </div>
  );
}

const TourSafaris = () => {
  const [packages, setPackages] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ sortBy: 'popularity', duration: 'all', searchTerm: '' });

  useEffect(() => {
    setTimeout(() => {
      const data = [
        {
          id: 1, name: 'Wilderness & Coastal Discovery',
          description: 'Journey through diverse landscapes — from wildlife-rich plains to tranquil coastal shores.',
          image: tour1,
          highlights: ['Wildlife Viewing', 'Coastal Exploration'],
          regions: ['Northern Plains', 'Eastern Reserves', 'Coastal Zone'],
          duration: '10 days', popularity: 98, rating: 4.8, reviewCount: 124,
        },
        {
          id: 2, name: 'Coastal Serenity & Wildlife Adventure',
          description: 'Experience the perfect balance of wildlife encounters and coastal relaxation.',
          image: tour2,
          highlights: ['Beach Retreat', 'Wildlife Safaris'],
          regions: ['Northern Plains', 'Central Highlands', 'Coastal Zone'],
          duration: '16 days', popularity: 95, rating: 4.9, reviewCount: 89,
        },
        {
          id: 3, name: 'Highlands & Lake Region Expedition',
          description: 'Discover the unique ecosystems of the highlands and surrounding lake districts.',
          image: tour3,
          highlights: ['Highland Landscapes', 'Lake Ecosystems'],
          regions: ['Lake District', 'Highland Region', 'Savannah Plains'],
          duration: '8 days', popularity: 92, rating: 4.7, reviewCount: 156,
        },
        {
          id: 4, name: 'Great Migration Experience',
          description: 'Witness one of nature\'s most spectacular wildlife movements across vast savannahs.',
          image: tour4,
          highlights: ['Migration Routes', 'Savannah Wildlife'],
          regions: ['Northern Corridor', 'Central Plains', 'Eastern Reserves'],
          duration: '12 days', popularity: 99, rating: 5.0, reviewCount: 203,
        },
        {
          id: 5, name: 'Classic Wilderness Circuit',
          description: 'Explore the region\'s most celebrated wildlife areas on this comprehensive journey.',
          image: tour5,
          highlights: ['Wildlife Reserves', 'Scenic Landscapes'],
          regions: ['Northern Circuit', 'Central Plains', 'Highland Region'],
          duration: '7 days', popularity: 91, rating: 4.6, reviewCount: 178,
        },
        {
          id: 6, name: 'Elephant Herds & Crater Views',
          description: 'For wildlife enthusiasts — vast elephant populations amid breathtaking crater scenery.',
          image: tour6,
          highlights: ['Elephant Viewing', 'Crater Landscapes'],
          regions: ['Northern Plains', 'Highland Region', 'Eastern Reserves'],
          duration: '5 days', popularity: 88, rating: 4.5, reviewCount: 145,
        },
      ];
      setPackages(data);
      setFiltered(data);
      setLoading(false);
    }, 1500);
  }, []);

  const applyFilters = (all, sortBy, duration, searchTerm) => {
    let f = [...all];
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      f = f.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.highlights.some(h => h.toLowerCase().includes(q))
      );
    }
    if (duration !== 'all') {
      f = f.filter(p => {
        const d = parseInt(p.duration);
        if (duration === 'short')  return d <= 5;
        if (duration === 'medium') return d > 5 && d <= 10;
        if (duration === 'long')   return d > 10;
        return true;
      });
    }
    if (sortBy === 'popularity') f.sort((a, b) => b.popularity - a.popularity);
    if (sortBy === 'rating')     f.sort((a, b) => b.rating - a.rating);
    if (sortBy === 'duration')   f.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
    setFiltered(f);
  };

  const update = (key, val) => {
    const next = { ...filters, [key]: val };
    setFilters(next);
    applyFilters(packages, next.sortBy, next.duration, next.searchTerm);
  };

  return (
    <>
      <style>{FONTS}{CSS}</style>

      <div className="ts-page">
        <HeroSection
          title="Wilderness Expeditions"
          subtitle="Curated journeys through pristine landscapes"
          description="From wildlife migrations to coastal havens — discover our handcrafted experiences."
          buttonText="Explore Journeys"
          buttonLink="#packages"
          imageUrl={heroImages.safari || fallbackImage}
        />

        {/* filter bar */}
        <div className="ts-filter-bar">
          <div className="ts-filter-inner">
            <div className="ts-search-wrap">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                className="ts-search"
                placeholder="Search expeditions…"
                value={filters.searchTerm}
                onChange={e => update('searchTerm', e.target.value)}
              />
            </div>

            <div className="ts-select-wrap">
              <select className="ts-select" value={filters.sortBy} onChange={e => update('sortBy', e.target.value)}>
                <option value="popularity">Sort: Popularity</option>
                <option value="rating">Sort: Rating</option>
                <option value="duration">Sort: Duration</option>
              </select>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>

            <div className="ts-select-wrap">
              <select className="ts-select" value={filters.duration} onChange={e => update('duration', e.target.value)}>
                <option value="all">All Durations</option>
                <option value="short">Short (≤5 days)</option>
                <option value="medium">Medium (6–10 days)</option>
                <option value="long">Long (10+ days)</option>
              </select>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>

            <span className="ts-filter-count">
              {loading ? '—' : `${filtered.length} expedition${filtered.length !== 1 ? 's' : ''}`}
            </span>
          </div>
        </div>

        {/* heading */}
        <div className="ts-heading" id="packages">
          <div>
            <img src={companyLogo} alt="Nature Pulse" className="ts-heading-logo"
              onError={e => { e.target.style.display = 'none'; }} />
            <div className="ts-heading-eyebrow">Handcrafted Expeditions</div>
            <h2>Safari <em>Experiences</em></h2>
            <p className="ts-heading-sub">
              A wilderness safari is a transformative experience — magnificent wildlife, wild landscapes, and intimate encounters with the natural world.
            </p>
          </div>

          <div className="ts-heading-stats">
            {[
              { num: '20+', lbl: 'Years Experience' },
              { num: '6',   lbl: 'Expeditions' },
              { num: '98%', lbl: 'Guest Satisfaction' },
            ].map((s, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className="ts-heading-rule" />}
                <div className="ts-heading-stat">
                  <div className="ts-heading-stat-num">{s.num}</div>
                  <div className="ts-heading-stat-lbl">{s.lbl}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* card grid */}
        <div className="ts-grid-wrap">
          <div className="ts-grid">
            {loading ? (
              [...Array(6)].map((_, i) => <SkeletonCard key={i} />)
            ) : filtered.length === 0 ? (
              <div className="ts-empty">
                <span className="ts-empty-icon">◈</span>
                <h3>No expeditions found</h3>
                <p>Try adjusting your filters or search term.</p>
              </div>
            ) : (
              filtered.map((pkg, idx) => (
                <div
                  className="ts-card"
                  key={pkg.id}
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div className="ts-card-img-wrap">
                    {pkg.popularity > 95 && (
                      <span className="ts-badge">Most Sought After</span>
                    )}
                    <img className="ts-card-img" src={pkg.image} alt={pkg.name} />
                    <div className="ts-card-duration">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      {pkg.duration}
                    </div>
                  </div>

                  <div className="ts-card-body">
                    <h3 className="ts-card-name">{pkg.name}</h3>

                    <div className="ts-card-regions">
                      {pkg.regions.map((r, i) => (
                        <React.Fragment key={i}>
                          <span className="ts-region-dot" />
                          <span className="ts-region-name">{r}</span>
                          {i < pkg.regions.length - 1 && <span className="ts-region-arrow">›</span>}
                        </React.Fragment>
                      ))}
                    </div>

                    <p className="ts-card-desc">{pkg.description}</p>

                    <div className="ts-highlights">
                      {pkg.highlights.map((h, i) => (
                        <span key={i} className="ts-hl">{h}</span>
                      ))}
                    </div>

                    <div className="ts-rating">
                      <StarRating value={pkg.rating} />
                      <span className="ts-rating-score">{pkg.rating.toFixed(1)}</span>
                      <span className="ts-rating-text">({pkg.reviewCount} reviews)</span>
                    </div>

                    <div className="ts-card-footer">
                      <RouterLink to={`/trip/${pkg.id}`} className="ts-btn-outline">
                        View Journey
                      </RouterLink>
                      <RouterLink to="/contact" className="ts-btn-solid">
                        Inquire
                      </RouterLink>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* about section */}
        {!loading && (
          <>
            <div className="ts-about">
              <div className="ts-about-inner">
                <div className="ts-about-grid">
                  <div>
                    <div className="ts-about-eyebrow">Who We Are</div>
                    <h3>About Nature Pulse <em>Expeditions</em></h3>
                    <p>
                      As a locally-rooted expedition company, we design and manage every journey from concept to completion. Our team combines international expertise with deep local knowledge of the landscapes and cultures we explore.
                    </p>
                    <div className="ts-about-pillars">
                      {[
                        {
                          title: 'Private Journeys',
                          text: 'We specialise in entirely private expeditions — your own vehicle, your own guide, your own pace. Every experience is intimate and tailored to your interests.',
                        },
                        {
                          title: 'Expert Field Guides',
                          text: 'Our guides are selected through a rigorous process based on years of experience, professional conduct, and genuine passion for the wilderness.',
                        },
                        {
                          title: 'Personalised Planning',
                          text: 'From initial concept to your final evening under the stars, our team provides dedicated support and expert guidance at every stage.',
                        },
                      ].map((p, i) => (
                        <div key={i} className="ts-pillar">
                          <h4>{p.title}</h4>
                          <p>{p.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="ts-about-box">
                      <h4>Custom Journey Design</h4>
                      <p>
                        Every expedition is built entirely around your vision. You determine the destinations, pace, activities, and style of travel — we bring it to life with meticulous attention to detail.
                      </p>
                      <p>
                        The itineraries shown here are crafted for inspiration. If a journey resonates with you, we will adapt it precisely to your interests, group, and travel style.
                      </p>
                      <p>
                        <strong style={{ color: 'var(--gray-800)' }}>Connect with our specialists</strong>
                        {' '}to begin designing your personalised expedition.
                      </p>
                      <img src={tour4} alt="Custom journey" className="ts-about-box-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* accommodation banner */}
            <div className="ts-banner">
              <div className="ts-banner-inner">
                <div>
                  <div className="ts-about-eyebrow">Your Stay</div>
                  <h3>Thoughtfully Selected <em>Retreats</em></h3>
                  <p>
                    Throughout your journey you will stay in properties handpicked by our team — each routinely evaluated for quality, positioning, and authenticity of experience.
                  </p>
                  <p>
                    Wake to the sounds of the wilderness. Step outside to landscapes that few travellers ever witness. Every property we recommend complements the spirit of your expedition.
                  </p>
                </div>
                <img src={tour1} alt="Wilderness retreat" className="ts-banner-img" />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TourSafaris;