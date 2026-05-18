import { useState } from 'react';
import ResumeModal from './ResumeModal';
import './HeroSection.css';

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="hero-section">
      <div className="glass-overlay"></div>
      <div className="hero-container">
        
        <div className="hero-badge animate-fade-in-up">
          <span className="badge-dot"></span>
          THE FUTURE OF AUTONOMOUS AEROSPACE.
        </div>

        <h1 className="hero-title animate-fade-in-up delay-100">
          BUILD THE FUTURE OF<br />
          AUTONOMOUS<br />
          AEROSPACE SYSTEMS.
        </h1>

        <p className="hero-subtitle animate-fade-in-up delay-200">
          Khonsu is building the next generation of autonomous aerial, near-space,
          and orbital platforms powered by software-defined autonomy.
        </p>

        <div className="hero-actions animate-fade-in-up delay-300">
          <button className="btn-primary" onClick={() => {
            const el = document.querySelector('#ecosystem');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>Explore Ecosystem</button>
          <button className="btn-secondary" onClick={() => setShowModal(true)}>Share your resume</button>
        </div>

      </div>

      <ResumeModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default HeroSection;
