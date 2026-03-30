import React from 'react';
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

  .wu-page { font-family: var(--sans); background: var(--white); color: var(--gray-800); }

  /* main container */
  .wu-container {
    max-width: 1400px; margin: 0 auto;
    padding: 0 clamp(20px,5vw,80px) 90px;
  }

  /* section header */
  .wu-section-header {
    text-align: center; margin-bottom: 64px;
  }
  .wu-eyebrow {
    font-size: 20px; text-transform: uppercase; letter-spacing: 5px;
    color: var(--gold); margin-bottom: 16px; font-weight: 600;
  }
  .wu-title {
    font-family: var(--serif); font-size: clamp(48px,7vw,84px);
    font-weight: 400; color: var(--gray-800);
  }
  .wu-underline {
    width: 90px; height: 3px; background: var(--gold);
    margin: 24px auto 0;
  }

  /* stats grid */
  .wu-stats-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 28px; margin-bottom: 90px;
  }
  @media (max-width: 800px) { .wu-stats-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 500px) { .wu-stats-grid { grid-template-columns: 1fr; } }

  .wu-stat-card {
    background: var(--white); border: 1px solid var(--gray-200);
    padding: 40px 24px; text-align: center;
    transition: all .3s;
  }
  .wu-stat-card:hover { transform: translateY(-6px); border-color: var(--gold); box-shadow: 0 12px 24px rgba(0,0,0,0.08); }
  .wu-stat-number {
    font-family: var(--serif); font-size: 56px; font-weight: 400;
    color: var(--gold); margin-bottom: 10px;
  }
  .wu-stat-label {
    font-size: 15px; color: var(--gray-600); text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  /* reasons grid */
  .wu-reasons-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 32px; margin-bottom: 90px;
  }
  @media (max-width: 1000px) { .wu-reasons-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 680px) { .wu-reasons-grid { grid-template-columns: 1fr; } }

  .wu-reason-card {
    background: var(--white); border: 1px solid var(--gray-200);
    padding: 40px 32px; text-align: center;
    transition: all .3s;
  }
  .wu-reason-card:hover { transform: translateY(-8px); border-color: var(--gold); box-shadow: 0 16px 32px rgba(0,0,0,0.1); }
  .wu-reason-icon {
    width: 80px; height: 80px; border-radius: 50%;
    background: var(--gold-pale); display: flex;
    align-items: center; justify-content: center;
    margin: 0 auto 24px;
    color: var(--gold);
  }
  .wu-reason-icon svg { width: 40px; height: 40px; stroke: currentColor; fill: none; }
  .wu-reason-title {
    font-family: var(--serif); font-size: 26px; font-weight: 600;
    color: var(--gray-800); margin-bottom: 14px;
  }
  .wu-reason-desc {
    font-size: 16px; color: var(--gray-600); line-height: 1.7;
  }

  /* features section */
  .wu-features {
    background: var(--gray-50); border: 1px solid var(--gray-200);
    padding: 56px 48px; margin-bottom: 90px;
  }
  .wu-features-title {
    font-family: var(--serif); font-size: 36px; font-weight: 500;
    text-align: center; color: var(--gray-800); margin-bottom: 48px;
  }
  .wu-features-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
  @media (max-width: 800px) { .wu-features-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 500px) { .wu-features-grid { grid-template-columns: 1fr; } }
  .wu-feature-item {
    display: flex; align-items: center; gap: 16px;
    padding: 14px 0;
  }
  .wu-feature-icon {
    width: 52px; height: 52px; border-radius: 50%;
    background: var(--gold-pale); display: flex;
    align-items: center; justify-content: center;
    color: var(--gold);
  }
  .wu-feature-icon svg { width: 26px; height: 26px; stroke: currentColor; fill: none; }
  .wu-feature-text {
    font-size: 17px; font-weight: 600; color: var(--gray-700);
  }

  /* testimonials grid */
  .wu-testimonials-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 32px; margin-bottom: 90px;
  }
  @media (max-width: 1000px) { .wu-testimonials-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 680px) { .wu-testimonials-grid { grid-template-columns: 1fr; } }

  .wu-testimonial-card {
    background: var(--white); border: 1px solid var(--gray-200);
    padding: 36px; transition: all .3s;
  }
  .wu-testimonial-card:hover { transform: translateY(-6px); border-color: var(--gold); box-shadow: 0 12px 24px rgba(0,0,0,0.08); }
  .wu-stars {
    display: flex; gap: 5px; margin-bottom: 24px;
  }
  .wu-star {
    color: var(--gold); font-size: 20px;
  }
  .wu-testimonial-text {
    font-size: 16px; color: var(--gray-600); line-height: 1.8;
    margin-bottom: 24px; font-style: italic;
  }
  .wu-testimonial-author {
    font-family: var(--serif); font-size: 18px; font-weight: 600;
    color: var(--gray-800);
  }

  /* trust badges */
  .wu-badges {
    display: flex; flex-wrap: wrap;
    justify-content: center; gap: 20px;
    margin-top: 40px; padding: 40px 0;
    border-top: 1px solid var(--gray-200);
  }
  .wu-badge {
    padding: 10px 24px; background: var(--gray-50);
    border: 1px solid var(--gray-200); font-size: 14px;
    color: var(--gray-600); letter-spacing: .5px;
    transition: all .2s;
  }
  .wu-badge:hover { border-color: var(--gold); color: var(--gold); }

  /* fade in */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .wu-fade-in { animation: fadeUp .5s ease both; }
`;

const formatNumber = (num) => {
  return num.toLocaleString('en-US');
};

const WhyChooseUs = () => {
  const reasons = [
    { icon: 'trophy', title: '5+ Years Experience', description: 'Years of excellence in organizing unforgettable safaris across East Africa' },
    { icon: 'certified', title: 'Certified Guides', description: 'All our guides are professionally trained and certified by national parks authorities' },
    { icon: 'security', title: 'Safety First', description: 'Your safety is our priority with 24/7 support and well-maintained vehicles' },
    { icon: 'people', title: 'Small Groups', description: 'Intimate group sizes for personalized attention and better wildlife viewing' },
    { icon: 'offer', title: 'Best Price Guarantee', description: 'Competitive pricing without compromising on quality or experience' },
    { icon: 'support', title: '24/7 Customer Support', description: 'Round-the-clock assistance before, during, and after your journey' },
  ];

  const features = [
    { icon: 'flight', text: 'Airport Transfers' },
    { icon: 'hotel', text: 'Carefully Selected Properties' },
    { icon: 'restaurant', text: 'Gourmet Meals' },
    { icon: 'car', text: '4x4 Safari Vehicles' },
    { icon: 'camera', text: 'Photography Tips' },
    { icon: 'location', text: 'Expert Local Knowledge' },
  ];

  const testimonials = [
    { text: "The most incredible experience of our lives! The guides were knowledgeable and friendly, and every detail was perfect.", author: "Detha & Sarah", rating: 5 },
    { text: "Perfectly organized from start to finish. Saw incredible wildlife and made memories that will last forever.", author: "Michael", rating: 5 },
    { text: "Outstanding service and attention to detail. The team went above and beyond to ensure we had the best experience.", author: "Watson", rating: 5 },
  ];

  const IconComponent = ({ name }) => {
    const icons = {
      trophy: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v4M12 2L9 5M12 2L15 5"/><path d="M5 8h14v4c0 4-3 8-7 8s-7-4-7-8V8z"/><path d="M5 4h14v4H5z"/></svg>,
      certified: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
      security: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
      people: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      offer: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 12V8h-4l-4-4-4 4H4v4l4 4-4 4v4h4l4-4 4 4h4v-4l-4-4 4-4z"/><path d="M12 8v8M8 12h8"/></svg>,
      support: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>,
      flight: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 15l4-8 4 8M9 7v10"/><path d="M3 15h12"/></svg>,
      hotel: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
      restaurant: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 3v18h18M18 9l-4-4M12 3v12"/></svg>,
      car: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 9h18M5 3h14M7 9v6M17 9v6"/><rect x="5" y="3" width="14" height="6" rx="1"/></svg>,
      camera: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="12" cy="12" r="3"/></svg>,
      location: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    };
    return <div className="wu-reason-icon">{icons[name]}</div>;
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
    return <div className="wu-feature-icon">{icons[name]}</div>;
  };

  return (
    <>
      <style>{FONTS}{CSS}</style>
      <div className="wu-page">
        <HeroSection
          title="Why Choose Us"
          subtitle="Experience the difference with East Africa's trusted expedition operator"
          description="From expert guides to personalized service, discover what makes Nature Pulse Expeditions the premier choice for authentic safari experiences."
          buttonText="Start Your Journey"
          buttonLink="/contact"
          imageUrl={heroImages.safari || fallbackImage}
        />

        <div className="wu-container">
          {/* Stats Section */}
          <div className="wu-stats-grid">
            <div className="wu-stat-card wu-fade-in">
              <div className="wu-stat-number">{formatNumber(5000)}+</div>
              <div className="wu-stat-label">Happy Travelers</div>
            </div>
            <div className="wu-stat-card wu-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="wu-stat-number">{formatNumber(98)}%</div>
              <div className="wu-stat-label">Satisfaction Rate</div>
            </div>
            <div className="wu-stat-card wu-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="wu-stat-number">{formatNumber(15)}+</div>
              <div className="wu-stat-label">Expert Guides</div>
            </div>
            <div className="wu-stat-card wu-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="wu-stat-number">{formatNumber(5)}+</div>
              <div className="wu-stat-label">Years Experience</div>
            </div>
          </div>

          {/* What Makes Us Different */}
          <div className="wu-section-header">
            <div className="wu-eyebrow">What Makes Us Different</div>
            <h2 className="wu-title">Our Commitment to Excellence</h2>
            <div className="wu-underline" />
          </div>

          <div className="wu-reasons-grid">
            {reasons.map((reason, idx) => (
              <div key={idx} className="wu-reason-card wu-fade-in" style={{ animationDelay: `${idx * 80}ms` }}>
                <IconComponent name={reason.icon} />
                <h3 className="wu-reason-title">{reason.title}</h3>
                <p className="wu-reason-desc">{reason.description}</p>
              </div>
            ))}
          </div>

          {/* Everything Included */}
          <div className="wu-features">
            <h3 className="wu-features-title">Everything Included</h3>
            <div className="wu-features-grid">
              {features.map((feature, idx) => (
                <div key={idx} className="wu-feature-item">
                  <FeatureIcon name={feature.icon} />
                  <span className="wu-feature-text">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What Our Guests Say */}
          <div className="wu-section-header">
            <div className="wu-eyebrow">Guest Stories</div>
            <h2 className="wu-title">What Our Guests Say</h2>
            <div className="wu-underline" />
          </div>

          <div className="wu-testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="wu-testimonial-card wu-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="wu-stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="wu-star">★</span>
                  ))}
                </div>
                <p className="wu-testimonial-text">"{testimonial.text}"</p>
                <div className="wu-testimonial-author">— {testimonial.author}</div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="wu-badges">
            <span className="wu-badge">TATO Member</span>
            <span className="wu-badge">Eco-Tourism Certified</span>
            <span className="wu-badge">Safety Rated ★★★★★</span>
            <span className="wu-badge">100% Local Owned</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;