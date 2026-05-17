import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Simulation First. Hardware Second.
        </div>

        <h1 className="hero-title">
          Autonomous Systems<br />
          Engineered Before<br />
          Reality.
        </h1>

        <p className="hero-subtitle">
          Khonsu builds simulation-first aerospace systems, autonomous drone
          platforms, and intelligent deployment infrastructure.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">Explore Architecture</button>
          <button className="btn-secondary">Share Resume</button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
