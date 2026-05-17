import './EcosystemSection.css';

const ecosystemData = [
  {
    title: 'SPACEBORN',
    badge: 'Core AI/ Simulation',
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

const EcosystemSection = () => {
  return (
    <section className="ecosystem-section">
      <div className="ecosystem-container">
        <div className="ecosystem-header">
          <h2 className="ecosystem-title">
            An Integrated Network of<br />
            Autonomous Intelligence Companies.
          </h2>
          <p className="ecosystem-subtitle">
            Simulation. Intelligence. Infrastructure. Deployment.
          </p>
        </div>

        <div className="ecosystem-grid">
          {ecosystemData.map((item, index) => (
            <div key={index} className="ecosystem-card">
              <div className="card-top">
                <svg
                  className="arrow-icon"
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
              <h3 className="card-title">{item.title}</h3>
              <div className="card-badge">{item.badge}</div>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
