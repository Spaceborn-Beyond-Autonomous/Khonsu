import destnyLogo from '../../assets/destny.png';
import spacebornLogo from '../../assets/spaceborn.png';
import nulldragLogo from '../../assets/nulldrag.png';
import './OverviewSection.css';

const overviewData = [
  {
    title: 'SPACEBORN',
    badge: 'Core AI / Simulation',
    description: 'Autonomous intelligence & simulation systems — the brains of the operation.'
  },
  {
    title: 'NULLDRAG',
    badge: 'Logistics / Distribution',
    description: 'Outbound infrastructure & distribution systems for contested environments.'
  },
  {
    title: 'DESTNY',
    badge: 'Builder Platform',
    description: 'Execution infrastructure for builders and aerospace startups.'
  }
];

const OverviewSection = () => {
  return (
    <section className="overview-section">
      <div className="overview-container">
        <div className="overview-header">
          <h2 className="overview-title">
            An Integrated Network of<br />
            Autonomous Intelligence Companies.
          </h2>
          <p className="overview-subtitle">
            Simulation. Intelligence. Infrastructure. Deployment.
          </p>
        </div>

        <div className="overview-grid">
          {overviewData.map((item, index) => (
            <div key={index} className={`overview-card animate-fade-in-up delay-${(index + 1) * 100}`}>
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
              {item.title === 'DESTNY' ? (
                <img src={destnyLogo} alt="DESTNY" className="overview-card-logo" style={{ height: '112px', width: 'auto', objectFit: 'contain', marginBottom: '24px', alignSelf: 'center' }} />
              ) : item.title === 'SPACEBORN' ? (
                <img src={spacebornLogo} alt="SPACEBORN" className="overview-card-logo" style={{ height: '104px', width: 'auto', objectFit: 'contain', marginBottom: '24px', alignSelf: 'center' }} />
              ) : item.title === 'NULLDRAG' ? (
                <img src={nulldragLogo} alt="NULLDRAG" className="overview-card-logo" style={{ height: '128px', width: 'auto', objectFit: 'contain', marginBottom: '20px', alignSelf: 'center' }} />
              ) : (
                <h3 className="overview-card-title">{item.title}</h3>
              )}
              <div className="overview-card-badge">{item.badge}</div>
              <p className="overview-card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
