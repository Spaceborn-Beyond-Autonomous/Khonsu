import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <span className="contact-label">Contacts</span>
        <h2 className="contact-title">
          Build the Future of<br />
          Autonomous Flight.
        </h2>
        <p className="contact-subtitle">
          From simulation to deployment — engineered for the next generation of
          intelligent systems. Join the Khonsu ecosystem.
        </p>
        <div className="contact-actions">
          <a href="#" className="contact-btn contact-btn-primary">Join Ecosystem</a>
          <a href="#" className="contact-btn contact-btn-secondary">Contact Khonsu</a>
        </div>
        <div className="contact-info">
          <span className="contact-info-item">
            <span className="contact-dot"></span>
            contact @khonsu.in
          </span>
          <span className="contact-info-item">
            <span className="contact-dot"></span>
            Partnerships & Integration inquiries welcome
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
