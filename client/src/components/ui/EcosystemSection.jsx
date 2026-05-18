import './EcosystemSection.css';
import destnyLogo from '../../assets/destny.png';

const ecosystemData = [
  {
    company: 'SPACEBORN',
    division: 'ANSA-OS',
    title: 'Autonomous Navigation & Systems Architecture',
    status: 'IN DEVELOPMENT',
    description: 'Full-stack autonomy operating system built for drones and robotic systems. Designed around hardware abstraction, mission intelligence, real-time telemetry, and simulation-first validation.',
    work: [
      'Building ANSA autonomy kernel & mission FSM',
      'Developing HAL for hardware-agnostic control',
      'Simulation-first FC validation architecture',
      'MAVLink, ROS2, Gazebo & SITL integration',
      'Sensor fusion & telemetry infrastructure',
      'Safety validator & failsafe systems'
    ],
    tech: ['ROS2', 'C++', 'Python', 'Gazebo', 'SITL']
  },
  {
    company: 'SPACEBORN',
    division: 'SIM',
    title: 'Digital Twin & Flight Controller Simulation Platform',
    status: 'IN DEVELOPMENT',
    description: 'Physics-accurate drone simulation environment allowing engineers and students to validate autonomy systems before real hardware deployment.',
    work: [
      'Building real-time drone digital twins',
      'PID tuning & failure injection systems',
      'GPS-denied navigation simulation',
      'Sensor emulation & telemetry logging',
      'Ground Control Station integration',
      'Flight replay & data visualization tools'
    ],
    tech: ['ROS2', 'QGroundControl', 'Python', 'Gazebo', 'MAVROS', 'PlotJuggler']
  },
  {
    company: 'PHANTOM-EYE',
    division: null,
    title: 'Vision-Based Autonomy & Landing Intelligence',
    status: 'IN DEVELOPMENT',
    description: 'Computer vision pipeline for autonomous navigation, terrain analysis, precision landing, and environmental awareness in GPS-denied environments.',
    work: [
      'Optical flow & visual odometry',
      'ArUco marker tracking systems',
      'Terrain-aware landing analysis',
      'Object detection & perception pipeline',
      'Depth estimation & sensor fusion',
      'Real-time vision telemetry processing'
    ],
    tech: ['OpenCV', 'PyTorch', 'CUDA', 'YOLO', 'TensorFlow', 'RealSense']
  },
  {
    company: 'SWARM-SYNC',
    division: null,
    title: 'Distributed Multi-Agent Coordination Framework',
    status: 'IN DEVELOPMENT',
    description: 'Simulation-validated swarm coordination layer enabling autonomous drone fleets to communicate, synchronize, and execute missions collaboratively.',
    work: [
      'Multi-agent communication architecture',
      'Distributed consensus systems',
      'Autonomous fleet synchronization',
      'Mesh telemetry & routing logic',
      'Collision avoidance & path planning',
      'Swarm mission orchestration'
    ],
    tech: ['DDS', 'ROS2', 'Mesh Networking', 'Python', 'C++', 'MAVLink']
  },
  {
    company: 'DESTNY',
    division: 'DESTNY BUILD',
    title: 'Rapid MVP & Product Engineering Studio',
    status: 'IN DEVELOPMENT',
    description: 'Execution-focused development studio helping founders, startups, and businesses launch products, platforms, dashboards, and automation systems quickly.',
    work: [
      'SaaS MVP development',
      'Startup product engineering',
      'Full-stack web applications',
      'Internal dashboards & admin systems',
      'API integrations & automation',
      'Product deployment & scaling'
    ],
    tech: ['APIs', 'Firebase', 'PostgreSQL', 'Node.js', 'Next.js', 'React']
  },
  {
    company: 'DESTNY',
    division: 'PRINTLAB',
    title: '3D Printing & Rapid Prototyping Infrastructure',
    status: 'IN DEVELOPMENT',
    description: 'Rapid prototyping division delivering affordable manufacturing and hardware iteration for students, startups, and robotics builders.',
    work: [
      'Rapid prototype manufacturing',
      'Drone & robotics part fabrication',
      'STL optimization & repair',
      'Product enclosure prototyping',
      'Educational hardware builds',
      'Startup hardware iteration support'
    ],
    tech: ['STL Pipelines', 'Fusion 360', 'CAD', 'PETG', 'PLA', 'Bambu Lab']
  },
  {
    company: 'DESTNY',
    division: 'AI',
    title: 'AI Automation & Workflow Systems',
    status: 'IN DEVELOPMENT',
    description: 'Business automation infrastructure designed for SMEs, startups, and creators to automate operations, outreach, CRM workflows, and reporting systems.',
    work: [
      'CRM automation systems',
      'Lead qualification pipelines',
      'Workflow integrations',
      'WhatsApp & chatbot automation',
      'Business intelligence dashboards',
      'Reporting & analytics system'
    ],
    tech: ['Make.com', 'Zapier', 'Airtable', 'Notion', 'APIs', 'Python']
  },
  {
    company: 'DESTNY',
    division: 'MEDIA',
    title: 'Content, Branding & Growth Infrastructure',
    status: 'IN DEVELOPMENT',
    description: 'Creative and marketing division focused on startup storytelling, founder branding, growth systems, and digital presence acceleration.',
    work: [
      'Pitch deck & brand identity design',
      'LinkedIn & founder positioning',
      'Startup content systems',
      'SEO & landing page creation',
      'Social media growth infrastructure',
      'Visual storytelling & editing'
    ],
    tech: ['Figma', 'Premiere Pro', 'After Effects', 'Canva', 'SEO', 'Analytics']
  },
  {
    company: 'NULLDRAG',
    division: 'NULLDRAG FLOW',
    title: 'Outbound Infrastructure & Lead Generation Systems',
    status: 'IN DEVELOPMENT',
    description: 'B2B outbound systems company helping startups, creators, freelancers, and agencies build predictable lead pipelines through automation-driven outreach.',
    work: [
      'LinkedIn & email outreach systems',
      'Lead sourcing & qualification',
      'CRM & pipeline management',
      'Multi-channel outbound campaigns',
      'Conversion-focused messaging systems',
      'Sales automation infrastructure'
    ],
    tech: ['Apollo', 'HubSpot', 'Instantly', 'LinkedIn', 'Clay', 'Google Workspace']
  },
  {
    company: 'NULLDRAG',
    division: 'OPS',
    title: 'Client Execution & Outreach Operations Layer',
    status: 'IN DEVELOPMENT',
    description: 'Operational backbone managing delivery systems, campaign workflows, reporting, onboarding, and outbound scaling processes.',
    work: [
      'Client onboarding workflows',
      'Outreach SOP development',
      'Campaign analytics & reporting',
      'Team coordination systems',
      'Performance tracking pipelines',
      'Outbound infrastructure management'
    ],
    tech: ['Automation APIs', 'Slack', 'Sheets', 'HubSpot', 'Airtable', 'Notion']
  },
  {
    company: 'SIGNAL',
    division: null,
    title: 'Growth Intelligence & Partnership Engine',
    status: 'IN DEVELOPMENT',
    description: 'Strategic networking and partnership layer designed to connect startups, founders, creators, and businesses with opportunities, collaborations, and growth channels.',
    work: [
      'Partnership sourcing systems',
      'Investor & founder networking',
      'Brand collaboration outreach',
      'Growth intelligence research',
      'Opportunity pipeline creation',
      'Strategic relationship management'
    ],
    tech: ['Research Stack', 'Analytics', 'Outreach AI', 'CRM Systems', 'LinkedIn', 'CRM Systems'],
    fullWidth: true
  }
];

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="ecosystem-section">
      <div className="ecosystem-container">
        <div className="ecosystem-header">
          <span className="ecosystem-label">Active ECOSYSTEMS</span>
          <h2 className="ecosystem-title">
            From Simulation to Execution —<br />
            Systems in Motion.
          </h2>
          <p className="ecosystem-subtitle">
            Each company inside the ecosystem solves a different layer of the
            technology stack — from autonomy infrastructure and robotics simulation
            to startup execution and outbound growth systems.
          </p>
        </div>

        <div className="ecosystem-grid">
          {ecosystemData.map((item, index) => (
            <div key={index} className={`eco-card animate-fade-in-up delay-${((index % 4) + 1) * 100}${item.fullWidth ? ' eco-card-full' : ''}`}>
              <div className="eco-card-header">
                <div className="eco-card-company">
                  {item.company === 'DESTNY' ? (
                    <img src={destnyLogo} alt="DESTNY" className="eco-company-logo" style={{ height: '20px', width: 'auto', objectFit: 'contain' }} />
                  ) : (
                    <span className="eco-company-name">{item.company}</span>
                  )}
                  {item.division && <span className="eco-division-name">{item.division}</span>}
                </div>
                <span className="eco-status-badge">{item.status}</span>
              </div>

              <h3 className="eco-card-title">{item.title}</h3>

              <p className="eco-card-desc">{item.description}</p>

              <h4 className="eco-work-heading">our work</h4>
              <ul className="eco-work-list">
                {item.work.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>

              <h4 className="eco-tech-heading">TECH</h4>
              <div className="eco-tech-tags">
                {item.tech.map((t, i) => (
                  <span key={i} className="eco-tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
