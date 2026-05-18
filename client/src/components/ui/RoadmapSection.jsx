import './RoadmapSection.css';

const phases = [
  {
    phase: 'PHASE 1',
    title: 'AUTONOMOUS UAV SYSTEMS',
    status: 'IN DEVELOPMENT',
    description: 'Development of ANSA-powered autonomous aerial platforms, telemetry infrastructure, and mission validation environments for real-world flight operations.'
  },
  {
    phase: 'PHASE 2',
    title: 'FIXED-WING & VTOL OPERATIONS',
    status: 'UPCOMING',
    description: 'Expansion into long-range autonomous systems, hybrid VTOL platforms, adaptive navigation, and advanced aerospace control systems.'
  },
  {
    phase: 'PHASE 3',
    title: 'SWARM & DISTRIBUTED AERIAL NETWORKS',
    status: 'PLANNED',
    description: 'Development of synchronized multi-agent coordination systems, autonomous communication networks, and collaborative aerial mission infrastructure.'
  },
  {
    phase: 'PHASE 4',
    title: 'NEAR-SPACE PLATFORM SYSTEMS',
    status: 'RESEARCH',
    description: 'High-altitude balloon systems, atmospheric telemetry platforms, payload validation systems, and near-space experimentation infrastructure.'
  },
  {
    phase: 'PHASE 5',
    title: 'ORBITAL INFRASTRUCTURE RESEARCH',
    status: 'LONG TERM',
    description: 'Research into autonomous orbital coordination, aerospace communication recovery systems, and future space deployment architecture.'
  }
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="roadmap-section">
      <div className="roadmap-container">
        <div className="roadmap-header">
          <span className="roadmap-label">Autonomous Systems Roadmap</span>
          <h2 className="roadmap-title">AEROSPACE DEVELOPMENT ROADMAP</h2>
        </div>

        <div className="roadmap-timeline">
          {phases.map((item, index) => (
            <div key={index} className="roadmap-item animate-fade-in-up delay-100">
              <div className="roadmap-phase-icon">
                <span className="roadmap-phase-text">{item.phase}</span>
              </div>
              <div className="roadmap-item-content">
                <div className="roadmap-item-header">
                  <h3 className="roadmap-item-title">{item.title}</h3>
                  <span className="roadmap-item-badge">{item.status}</span>
                </div>
                <p className="roadmap-item-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
