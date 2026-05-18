import './Footer.css';

const footerLinks = {
  Platform: ['Architecture', 'Simulation', 'Drone Systems', 'ANSA OS', 'Roadmap'],
  Ecosystem: ['SPACEBORN', 'NULLDRAG', 'DESTNY', 'Partner Program', 'Join Network'],
  Projects: ['ANSA-OS', 'SWARM-SYNC', 'PHANTOM-EYE', 'NULLDRAG-MESH', 'DESTNY Platform'],
  Industries: ['Defense', 'Disaster Response', 'Logistics', 'Agriculture', 'Surveying'],
  Company: ['About Khonsu', 'Careers', 'Press Kit', 'Documentation', 'Contact']
};

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">KHONSU</h3>
            <p className="footer-brand-desc">
              Autonomous aerospace systems company developing UAV platforms,
              near-space systems, and future orbital infrastructure powered by ANSA
              autonomy architecture.
            </p>
            <div className="footer-tagline">
              <div className="footer-tagline-bar"></div>
              <p className="footer-tagline-text">
                Simulation First.<br />
                Hardware Second.
              </p>
            </div>
          </div>

          <div className="footer-links">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer-link-column">
                <h4 className="footer-link-heading">{category}</h4>
                <ul className="footer-link-list">
                  {links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="footer-link">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Bar */}
        <div className="footer-newsletter">
          <div className="footer-newsletter-text">
            <h4 className="footer-newsletter-title">Stay Informed</h4>
            <p className="footer-newsletter-desc">Mission updates, technology releases, and ecosystem news.</p>
          </div>
          <a href="mailto:adarshkumar@spaceborn.in" className="footer-newsletter-btn">Contact Our CEO</a>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span className="footer-bottom-logo">KHONSU</span>
            <span className="footer-divider">|</span>
            <span className="footer-copyright">© 2026 Khonsu Aerospace. All rights reserved.</span>
          </div>
          <div className="footer-bottom-right">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Use</a>
            <a href="#" className="footer-bottom-link">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
