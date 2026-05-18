import './ValidationSection.css';

const stats = [
  { value: '500+', label: 'Mission Simulations' },
  { value: '1200+', label: 'Validation Cycles' },
  { value: '50+', label: 'Environmental Test Scenarios' }
];

const flightStatus = [
  { label: 'Mission Control', value: 'ACTIVE' },
  { label: 'Navigation Systems', value: 'STABLE' },
  { label: 'Telemetry Link', value: 'CONNECTED' },
  { label: 'Failsafe Layer', value: 'VERIFIED' },
  { label: 'Threat Detection', value: 'ENABLED' }
];

const telemetry = [
  { label: 'Altitude', value: '45.2 km' },
  { label: 'Signal Integrity', value: 'STABLE' },
  { label: 'Communication Relay', value: 'ACTIVE' },
  { label: 'Autonomy Status', value: 'SYNCHRONIZED' },
  { label: 'Orbital Recovery', value: 'ENABLED' }
];

const ValidationSection = () => {
  return (
    <section id="validation" className="validation-section">
      <div className="validation-container">
        <div className="validation-header">
          <span className="validation-label">Mission Validation Infrastructure</span>
          <h2 className="validation-title">
            ENGINEERED THROUGH AUTONOMOUS TESTING
          </h2>
          <p className="validation-subtitle">
            Khonsu aerospace systems undergo simulation-based mission validation, telemetry diagnostics, environmental testing,
            and autonomous systems analysis before real-world deployment.
          </p>
        </div>

        {/* Stats */}
        <div className="validation-stats">
          {stats.map((stat, index) => (
            <div key={index} className="validation-stat-card animate-fade-in-up delay-100">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Status Panels */}
        <div className="validation-panels">
          <div className="status-panel animate-fade-in-up delay-200">
            <div className="panel-header">
              <h3 className="panel-title">AUTONOMOUS FLIGHT STATUS</h3>
              <div className="panel-dots">
                <span className="dot dot-active"></span>
                <span className="dot dot-dim"></span>
                <span className="dot dot-dim"></span>
              </div>
            </div>
            <div className="panel-rows">
              {flightStatus.map((item, index) => (
                <div key={index} className="panel-row">
                  <span className="panel-row-label">{item.label}</span>
                  <span className="panel-row-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="status-panel animate-fade-in-up delay-300">
            <div className="panel-header">
              <h3 className="panel-title">AEROSPACE TELEMETRY</h3>
              <div className="panel-dots">
                <span className="dot dot-active"></span>
                <span className="dot dot-dim"></span>
                <span className="dot dot-dim"></span>
              </div>
            </div>
            <div className="panel-rows">
              {telemetry.map((item, index) => (
                <div key={index} className="panel-row">
                  <span className="panel-row-label">{item.label}</span>
                  <span className="panel-row-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValidationSection;
