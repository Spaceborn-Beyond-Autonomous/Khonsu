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
          The Future Of Autonomous Aerospace.
        </div>

        <h1 className="hero-title animate-fade-in-up delay-100">
          Autonomous Systems<br />
          Engineered Before<br />
          Reality.
        </h1>

        <p className="hero-subtitle animate-fade-in-up delay-200">
          Khonsu builds simulation-first aerospace systems, autonomous drone
          platforms, and intelligent deployment infrastructure.
        </p>

        <div className="hero-actions animate-fade-in-up delay-300">
          <button className="btn-primary" onClick={() => {
            const el = document.querySelector('#architecture');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>Explore Architecture</button>
          <button className="btn-secondary" onClick={() => setShowModal(true)}>Share Resume</button>
        </div>

      </div>

      <ResumeModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default HeroSection;
