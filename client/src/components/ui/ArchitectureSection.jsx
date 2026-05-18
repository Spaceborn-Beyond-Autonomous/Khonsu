import './ArchitectureSection.css';

const techTags = ['TELEMETRY', 'MISSION LOGIC', 'AUTONOMY VALIDATION', 'FLIGHT CONTROL', 'DEPLOYMENT SYSTEMS'];

const autonomyStack = [
  { title: 'TELEMETRY SYSTEMS', desc: 'Real-time flight diagnostics and communication pipelines.' },
  { title: 'MISSION LOGIC', desc: 'Autonomous execution sequencing and mission-state management.' },
  { title: 'NAVIGATION LAYER', desc: 'Path planning, localization, and autonomous guidance systems.' },
  { title: 'VALIDATION ENGINE', desc: 'Safety verification and mission constraint analysis.' },
  { title: 'CONTROL SYSTEMS', desc: 'Flight stabilization, guidance, and autonomous corrections.' },
  { title: 'DEPLOYMENT LAYER', desc: 'Integration across UAV, VTOL, balloon, and future orbital platforms.' }
];

const principles = [
  { title: 'SOFTWARE-DEFINED AUTONOMY', desc: 'Autonomy architecture separated from hardware systems.' },
  { title: 'VALIDATION BEFORE DEPLOYMENT', desc: 'Systems undergo mission simulation before real-world operation.' },
  { title: 'MODULAR AEROSPACE DESIGN', desc: 'Independent system layers enabling rapid iteration.' },
  { title: 'HARDWARE-AGNOSTIC CONTROL', desc: 'ANSA designed for multiple aerospace platforms.' },
  { title: 'AUTONOMOUS FAILSAFE SYSTEMS', desc: 'Validator-driven recovery and mission protection architecture.' },
  { title: 'LONG-TERM ORBITAL SCALABILITY', desc: 'Infrastructure designed for progression beyond atmospheric systems.' }
];

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="arch-section">
      <div className="arch-container">
        <div className="arch-header">
          <span className="arch-label">Aerospace Control Architecture</span>
          <h2 className="arch-title">SOFTWARE-DEFINED AEROSPACE ARCHITECTURE</h2>
          <div className="arch-tags">
            {techTags.map((tag, i) => (
              <span key={i} className="arch-tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="arch-grid">
          <div className="arch-card animate-fade-in-up delay-100">
            <h3 className="arch-card-title">AUTONOMY STACK</h3>
            <div className="arch-items">
              {autonomyStack.map((item, i) => (
                <div key={i} className="arch-item">
                  <div className="arch-item-bar"></div>
                  <div className="arch-item-content">
                    <h4 className="arch-item-title">{item.title}</h4>
                    <p className="arch-item-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="arch-card animate-fade-in-up delay-200">
            <h3 className="arch-card-title">ENGINEERING PRINCIPLES</h3>
            <div className="arch-items">
              {principles.map((item, i) => (
                <div key={i} className="arch-item arch-item-dot">
                  <div className="arch-dot"></div>
                  <div className="arch-item-content">
                    <h4 className="arch-item-title">{item.title}</h4>
                    <p className="arch-item-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
