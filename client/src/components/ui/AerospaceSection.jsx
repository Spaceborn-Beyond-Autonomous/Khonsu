import vtolImg from '../../assets/vtol.png';
import tacticalUavImg from '../../assets/tactical_uav.png';
import longRangeUavImg from '../../assets/long_range_uav.png';
import highAltitudeImg from '../../assets/high_altitude.png';
import orbitalInfraImg from '../../assets/orbital_infra.png';
import swarmAerialImg from '../../assets/swarm_aerial.png';
import './AerospaceSection.css';

const platforms = [
  {
    title: 'TACTICAL UAV SYSTEMS',
    badge: 'AUTONOMOUS',
    description: 'Autonomous multi-rotor aerial platforms designed for navigation testing, telemetry validation, reconnaissance, and mission-critical deployment.',
    image: tacticalUavImg
  },
  {
    title: 'HYBRID VTOL PLATFORMS',
    badge: 'HYBRID',
    description: 'Vertical takeoff systems combined with fixed-wing endurance for long-range autonomous flight operations and adaptive deployment.',
    image: vtolImg
  },
  {
    title: 'LONG-RANGE UAV SYSTEMS',
    badge: 'LONG RANGE',
    description: 'Fixed-wing autonomous aircraft engineered for surveillance, telemetry relay, mapping, and extended-range operations.',
    image: longRangeUavImg
  },
  {
    title: 'HIGH-ALTITUDE PLATFORM SYSTEMS',
    badge: 'HIGH ALTITUDE',
    description: 'Near-space balloon and atmospheric research platforms designed for telemetry experiments, payload validation, and communication testing.',
    image: highAltitudeImg
  },
  {
    title: 'ORBITAL INFRASTRUCTURE RESEARCH',
    badge: 'ORBITAL',
    description: 'Research into autonomous orbital coordination systems, aerospace communication recovery, and future space deployment architecture.',
    image: orbitalInfraImg
  },
  {
    title: 'SWARM AERIAL NETWORKS',
    badge: 'SWARM',
    description: 'Distributed multi-agent aerial systems capable of synchronized navigation, collaborative missions, and autonomous coordination.',
    image: swarmAerialImg
  }
];

const AerospaceSection = () => {
  return (
    <section id="aerospace" className="aerospace-section">
      <div className="aerospace-container">
        <div className="aerospace-header">
          <span className="aerospace-label">AEROSPACE PLATFORMS</span>
          <h2 className="aerospace-title">AUTONOMOUS FLIGHT SYSTEMS</h2>
        </div>

        <div className="aerospace-grid">
          {platforms.map((platform, index) => (
            <div key={index} className={`aerospace-card animate-fade-in-up delay-${((index % 4) + 1) * 100}`}>
              <div className="aerospace-card-image" style={{ padding: platform.image ? '0' : '' }}>
                {platform.image ? (
                  <img src={platform.image} alt={platform.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                )}
              </div>
              <div className="aerospace-card-body">
                <div className="aerospace-card-title-row">
                  <h3 className="aerospace-card-title">{platform.title}</h3>
                  <span className="aerospace-card-badge">{platform.badge}</span>
                </div>
                <p className="aerospace-card-desc">{platform.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AerospaceSection;
