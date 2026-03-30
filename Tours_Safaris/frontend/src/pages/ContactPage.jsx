import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { heroImages, fallbackImage } from '../constants/images';
import axios from 'axios';

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

  .contact-page { font-family: var(--sans); background: var(--white); color: var(--gray-800); }

  /* main container */
  .contact-container {
    max-width: 1400px; margin: 0 auto;
    padding: 0 clamp(20px,5vw,80px) 90px;
  }

  /* section header */
  .contact-section-header {
    text-align: center; margin-bottom: 64px;
  }
  .contact-eyebrow {
    font-size: 20px; text-transform: uppercase; letter-spacing: 5px;
    color: var(--gold); margin-bottom: 16px; font-weight: 600;
  }
  .contact-title {
    font-family: var(--serif); font-size: clamp(48px,7vw,84px);
    font-weight: 400; color: var(--gray-800);
  }
  .contact-underline {
    width: 90px; height: 3px; background: var(--gold);
    margin: 24px auto 0;
  }

  /* contact cards grid */
  .contact-cards-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 32px; margin-bottom: 80px;
  }
  @media (max-width: 900px) { .contact-cards-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .contact-cards-grid { grid-template-columns: 1fr; } }

  .contact-card {
    background: var(--white); border: 1px solid var(--gray-200);
    padding: 40px 28px; text-align: center;
    transition: all .3s;
  }
  .contact-card:hover { transform: translateY(-8px); border-color: var(--gold); box-shadow: 0 16px 32px rgba(0,0,0,0.1); }
  .contact-card-icon {
    width: 96px; height: 96px; border-radius: 50%;
    background: var(--gold-pale); display: flex;
    align-items: center; justify-content: center;
    margin: 0 auto 24px;
    color: var(--gold);
  }
  .contact-card-icon svg { width: 48px; height: 48px; stroke: currentColor; fill: none; }
  .contact-card-title {
    font-family: var(--serif); font-size: 26px; font-weight: 600;
    color: var(--gray-800); margin-bottom: 20px;
  }
  .contact-card-detail {
    font-size: 18px; color: var(--gray-700); font-weight: 600;
    margin-bottom: 10px;
  }
  .contact-card-sub {
    font-size: 14px; color: var(--gray-500);
    margin-bottom: 24px;
  }
  .contact-card-btn {
    display: inline-block; padding: 10px 28px;
    border: 1px solid var(--gray-300); background: transparent;
    color: var(--gray-700); text-decoration: none;
    font-size: 14px; text-transform: uppercase; letter-spacing: 1.5px;
    transition: all .2s;
  }
  .contact-card-btn:hover { border-color: var(--gold); color: var(--gold); background: var(--gold-pale); }

  /* form section */
  .contact-form-section {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 48px; margin-bottom: 80px;
  }
  @media (max-width: 900px) { .contact-form-section { grid-template-columns: 1fr; } }

  .contact-form-paper {
    background: var(--white); border: 1px solid var(--gray-200);
    padding: 48px;
  }
  .contact-form-title {
    font-family: var(--serif); font-size: 32px; font-weight: 500;
    color: var(--gray-800); margin-bottom: 28px;
  }
  .contact-form {
    display: flex; flex-direction: column; gap: 24px;
  }
  .contact-form-row {
    display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
  }
  @media (max-width: 500px) { .contact-form-row { grid-template-columns: 1fr; } }
  .contact-input {
    width: 100%; padding: 14px 18px;
    border: 1px solid var(--gray-200); background: var(--white);
    font-family: var(--sans); font-size: 16px; color: var(--gray-800);
    outline: none; transition: all .2s;
  }
  .contact-input:focus { border-color: var(--gold); }
  .contact-input::placeholder { color: var(--gray-400); }
  .contact-select {
    width: 100%; padding: 14px 18px;
    border: 1px solid var(--gray-200); background: var(--white);
    font-family: var(--sans); font-size: 16px; color: var(--gray-800);
    cursor: pointer;
  }
  .contact-textarea {
    width: 100%; padding: 14px 18px;
    border: 1px solid var(--gray-200); background: var(--white);
    font-family: var(--sans); font-size: 16px; color: var(--gray-800);
    resize: vertical; outline: none;
  }
  .contact-textarea:focus { border-color: var(--gold); }
  .contact-checkbox {
    display: flex; align-items: center; gap: 12px;
    cursor: pointer;
  }
  .contact-checkbox input {
    width: 20px; height: 20px; cursor: pointer;
    accent-color: var(--gold);
  }
  .contact-checkbox span {
    font-size: 15px; color: var(--gray-600);
  }
  .contact-submit {
    padding: 16px; background: var(--gold); border: none;
    color: white; font-family: var(--sans); font-size: 15px;
    text-transform: uppercase; letter-spacing: 2px; font-weight: 700;
    cursor: pointer; transition: all .2s;
  }
  .contact-submit:hover { background: var(--gold-dark); transform: translateY(-2px); }
  .contact-submit:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

  /* map section */
  .contact-map-paper {
    background: var(--white); border: 1px solid var(--gray-200);
    overflow: hidden;
  }
  .contact-map {
    width: 100%; height: 360px; border: none;
  }
  .contact-social {
    padding: 28px; text-align: center;
    border-top: 1px solid var(--gray-200);
  }
  .contact-social-title {
    font-family: var(--serif); font-size: 24px; font-weight: 500;
    color: var(--gray-800); margin-bottom: 20px;
  }
  .contact-social-icons {
    display: flex; justify-content: center; gap: 20px;
  }
  .contact-social-icon {
    width: 56px; height: 56px; border-radius: 50%;
    background: var(--gold-pale); display: flex;
    align-items: center; justify-content: center;
    color: var(--gold); transition: all .2s;
  }
  .contact-social-icon:hover { background: var(--gold); color: white; transform: scale(1.05); }
  .contact-social-icon svg { width: 28px; height: 28px; stroke: currentColor; fill: none; }

  /* why choose section */
  .contact-why-section {
    background: var(--gray-50); border: 1px solid var(--gray-200);
    padding: 56px 48px; margin-bottom: 80px;
  }
  .contact-why-title {
    font-family: var(--serif); font-size: 36px; font-weight: 500;
    text-align: center; color: var(--gray-800); margin-bottom: 48px;
  }
  .contact-why-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 36px; margin-bottom: 48px;
  }
  @media (max-width: 700px) { .contact-why-grid { grid-template-columns: 1fr; } }
  .contact-why-item h4 {
    font-family: var(--serif); font-size: 22px; font-weight: 600;
    color: var(--gold); margin-bottom: 10px;
  }
  .contact-why-item p {
    font-size: 16px; color: var(--gray-600); line-height: 1.7;
  }
  .contact-stats {
    display: flex; justify-content: space-around;
    flex-wrap: wrap; gap: 28px; padding-top: 40px;
    border-top: 1px solid var(--gray-200);
  }
  .contact-stat {
    text-align: center;
  }
  .contact-stat-number {
    font-family: var(--serif); font-size: 42px; font-weight: 400;
    color: var(--gold); margin-bottom: 6px;
  }
  .contact-stat-label {
    font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px;
    color: var(--gray-500);
  }

  /* office hours */
  .contact-hours {
    background: var(--white); border: 1px solid var(--gray-200);
    padding: 48px; display: flex; justify-content: space-between;
    flex-wrap: wrap; gap: 40px;
  }
  @media (max-width: 700px) { .contact-hours { flex-direction: column; text-align: center; } }
  .contact-hours-left h3 {
    font-family: var(--serif); font-size: 32px; font-weight: 500;
    color: var(--gray-800); margin-bottom: 20px;
  }
  .contact-hours-left p {
    font-size: 16px; color: var(--gray-600); margin-bottom: 10px;
  }
  .contact-hours-right {
    text-align: right;
  }
  @media (max-width: 700px) { .contact-hours-right { text-align: center; } }
  .contact-hours-right h3 {
    font-family: var(--serif); font-size: 32px; font-weight: 500;
    color: var(--gray-800); margin-bottom: 20px;
  }
  .contact-hours-right p {
    font-size: 16px; color: var(--gray-600); margin-bottom: 20px;
  }
  .contact-emergency {
    display: inline-block; padding: 10px 24px;
    background: var(--gold-pale); color: var(--gold);
    font-size: 14px; text-transform: uppercase; letter-spacing: 1.5px;
  }

  /* alert */
  .contact-alert {
    position: fixed; bottom: 24px; right: 24px;
    background: var(--gold); color: white;
    padding: 14px 28px; border-radius: 4px;
    font-size: 15px; z-index: 1000;
    animation: slideIn .3s ease;
  }
  .contact-alert-error {
    background: #d32f2f;
  }
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  /* fade in */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .fade-in { animation: fadeUp .5s ease both; }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    inquiryType: '',
    subscribeNewsletter: false,
  });
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success');

  const inquiryTypes = [
    { id: 1, name: 'Safari Packages' },
    { id: 2, name: 'Mountain Trekking' },
    { id: 3, name: 'Day Tours' },
    { id: 4, name: 'Accommodation' },
    { id: 5, name: 'Transportation' },
    { id: 6, name: 'General Inquiry' },
  ];

  const contactInfo = [
    { icon: 'phone', title: 'Phone', detail: '+255 713 414 727', sub: '24/7 Support Available', action: 'tel:+255713414727', btnText: 'Call Now' },
    { icon: 'email', title: 'Email', detail: 'info@naturepulseexpeditions.com', sub: 'safari@naturepulseexpeditions.com', action: 'mailto:info@naturepulseexpeditions.com', btnText: 'Send Email' },
    { icon: 'location', title: 'Office', detail: 'Arusha, Tanzania', sub: 'P.o Box 10450, Mnazi Mmoja', action: 'https://maps.google.com/?q=Arusha+Tanzania', btnText: 'View on Map' },
  ];

  const whyChooseItems = [
    { title: '✓ 24/7 Safari Support', desc: 'Our team is always available to assist you during your safari, ensuring peace of mind throughout your journey.' },
    { title: '✓ Expert Local Knowledge', desc: 'All our consultants and guides have extensive firsthand experience of Tanzania\'s wildlife, culture, and hidden gems.' },
    { title: '✓ Custom Itineraries', desc: 'Every safari is tailored to your preferences, interests, and budget. We create your perfect adventure.' },
    { title: '✓ Best Price Guarantee', desc: 'Direct bookings ensure you get the best value without compromising on quality. Transparent pricing with no hidden costs.' },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShowAlert(false);

    try {
      // Prepare data for API
      const submitData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        inquiry_type: formData.inquiryType ? parseInt(formData.inquiryType) : null,
        subscribe_newsletter: formData.subscribeNewsletter
      };

      // Send to Django backend
      const response = await axios.post('http://localhost:8000/contact/submit/', submitData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.data.success) {
        setAlertMessage(response.data.message || 'Message sent successfully! We will get back to you soon.');
        setAlertType('success');
        setShowAlert(true);
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          inquiryType: '',
          subscribeNewsletter: false,
        });
      } else {
        throw new Error(response.data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      
      let errorMessage = 'Failed to send message. Please try again.';
      if (error.response) {
        // Server responded with error
        if (error.response.data.errors) {
          const errors = error.response.data.errors;
          errorMessage = Object.values(errors).flat().join(', ');
        } else if (error.response.data.message) {
          errorMessage = error.response.data.message;
        }
      } else if (error.request) {
        errorMessage = 'Cannot connect to server. Please check your internet connection.';
      }
      
      setAlertMessage(errorMessage);
      setAlertType('error');
      setShowAlert(true);
    } finally {
      setLoading(false);
      
      // Auto hide alert after 5 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  };

  const IconComponent = ({ name }) => {
    const icons = {
      phone: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
      email: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
      location: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
      facebook: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
      instagram: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="3"/><line x1="17" y1="7" x2="17.01" y2="7"/></svg>,
      whatsapp: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>,
    };
    return <div className="contact-card-icon">{icons[name]}</div>;
  };

  const SocialIcon = ({ name, href }) => {
    const icons = {
      facebook: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
      instagram: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="3"/><line x1="17" y1="7" x2="17.01" y2="7"/></svg>,
      whatsapp: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>,
    };
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="contact-social-icon">
        {icons[name]}
      </a>
    );
  };

  return (
    <>
      <style>{FONTS}{CSS}</style>
      <div className="contact-page">
        <HeroSection
          title="Contact Us"
          subtitle="Start planning your adventure today"
          description="Get in touch with our team for any inquiries or to start planning your dream expedition. We're here to help 24/7."
          buttonText="Send Inquiry"
          buttonLink="#contact-form"
          imageUrl={heroImages.safari || fallbackImage}
        />

        <div className="contact-container">
          {/* Contact Cards */}
          <div className="contact-cards-grid">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="contact-card fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <IconComponent name={info.icon} />
                <h3 className="contact-card-title">{info.title}</h3>
                <div className="contact-card-detail">{info.detail}</div>
                <div className="contact-card-sub">{info.sub}</div>
                <a href={info.action} target={info.title === 'Office' ? '_blank' : '_self'} className="contact-card-btn">
                  {info.btnText}
                </a>
              </div>
            ))}
          </div>

          {/* Form and Map Section */}
          <div className="contact-form-section" id="contact-form">
            {/* Form */}
            <div className="contact-form-paper fade-in">
              <h2 className="contact-form-title">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-row">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="contact-input"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="contact-input"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  />
                </div>
                
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="contact-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={loading}
                />
                
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (include country code)"
                  className="contact-input"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  disabled={loading}
                />
                
                <select
                  name="inquiryType"
                  className="contact-select"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  disabled={loading}
                >
                  <option value="">Select inquiry type</option>
                  {inquiryTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                  ))}
                </select>
                
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your message..."
                  className="contact-textarea"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={loading}
                />
                
                <label className="contact-checkbox">
                  <input
                    type="checkbox"
                    name="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onChange={handleInputChange}
                    disabled={loading}
                  />
                  <span>Subscribe to our newsletter for updates and special offers</span>
                </label>
                
                <button type="submit" className="contact-submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Map and Social */}
            <div className="contact-map-paper fade-in" style={{ animationDelay: '150ms' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35832864525!2d36.68257995!3d-3.36682045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371c8f1c7e3c9d%3A0x8e0e4c3e3e3e3e3e!2sArusha%2C%20Tanzania!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                className="contact-map"
                allowFullScreen
                loading="lazy"
                title="Office Location"
              />
              <div className="contact-social">
                <h3 className="contact-social-title">Follow Us</h3>
                <div className="contact-social-icons">
                  <SocialIcon name="facebook" href="https://facebook.com/naturepulse" />
                  <SocialIcon name="instagram" href="https://instagram.com/naturepulse" />
                  <SocialIcon name="whatsapp" href="https://wa.me/255713414727" />
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="contact-why-section fade-in">
            <h2 className="contact-why-title">Why Choose Nature Pulse Expeditions?</h2>
            <div className="contact-why-grid">
              {whyChooseItems.map((item, idx) => (
                <div key={idx} className="contact-why-item">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="contact-stats">
              <div className="contact-stat"><div className="contact-stat-number">5,000+</div><div className="contact-stat-label">Happy Travelers</div></div>
              <div className="contact-stat"><div className="contact-stat-number">98%</div><div className="contact-stat-label">Satisfaction Rate</div></div>
              <div className="contact-stat"><div className="contact-stat-number">15+</div><div className="contact-stat-label">Expert Guides</div></div>
              <div className="contact-stat"><div className="contact-stat-number">10+</div><div className="contact-stat-label">Years Experience</div></div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="contact-hours fade-in">
            <div className="contact-hours-left">
              <h3>Office Hours</h3>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed (Emergency support available)</p>
            </div>
            <div className="contact-hours-right">
              <h3>Quick Response</h3>
              <p>We typically respond within 24 hours</p>
              <span className="contact-emergency">24/7 Emergency Support</span>
            </div>
          </div>
        </div>

        {showAlert && (
          <div className={`contact-alert ${alertType === 'error' ? 'contact-alert-error' : ''}`}>
            {alertMessage}
          </div>
        )}
      </div>
    </>
  );
};

export default ContactPage;