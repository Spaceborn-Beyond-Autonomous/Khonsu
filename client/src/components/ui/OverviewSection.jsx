import destnyLogo from '../../assets/destny.png';
import spacebornLogo from '../../assets/spaceborn.png';
import nulldragLogo from '../../assets/nulldrag.png';
import './OverviewSection.css';

const overviewData = [
  {
    title: 'SPACEBORN',
    badge: 'Core AI / Simulation',
    description: 'Autonomous intelligence & simulation systems — the brains of the operation.',
    link: 'https://spaceborn.in'
  },
  {
    title: 'NULLDRAG',
    badge: 'Logistics / Distribution',
    description: 'Outbound infrastructure & distribution systems for contested environments.',
    link: 'https://certanity.com'
  },
  {
    title: 'DESTNY',
    badge: 'ENGINEERING INFRASTRUCTURE',
    description: 'Destny powers founders and startups through rapid product development, AI automation, branding systems, 3D prototyping, and scalable execution infrastructure.',
    link: 'https://destny.in'
  }
];

const OverviewSection = () => {
  return (
    <section className="overview-section">
      <div className="overview-container">
        <div className="overview-header">
          <span className="overview-label">INTEGRATED ECOSYSTEM</span>
          <h2 className="overview-title">
            POWERING THE FUTURE OF AUTONOMOUS AEROSPACE SYSTEMS.
          </h2>
          <p className="overview-subtitle">
            Khonsu operates inside a connected ecosystem combining autonomy architecture,
            aerospace systems, engineering infrastructure, and operational deployment
            capabilities.
          </p>
        </div>

        <div className="overview-grid">
          {overviewData.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`overview-card animate-fade-in-up delay-${(index + 1) * 100}`}
            >
              <div className="overview-card-top">
                <svg
                  className="overview-arrow-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
              <div className="overview-logo-wrapper">
                {item.title === 'DESTNY' ? (
                  <img src={destnyLogo} alt="DESTNY" className="overview-card-logo destny-logo" />
                ) : item.title === 'SPACEBORN' ? (
                  <img src={spacebornLogo} alt="SPACEBORN" className="overview-card-logo spaceborn-logo" />
                ) : item.title === 'NULLDRAG' ? (
                  <img src={nulldragLogo} alt="NULLDRAG" className="overview-card-logo nulldrag-logo" />
                ) : (
                  <h3 className="overview-card-title">{item.title}</h3>
                )}
              </div>
              <div className="overview-card-badge">{item.badge}</div>
              <p className="overview-card-description">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
