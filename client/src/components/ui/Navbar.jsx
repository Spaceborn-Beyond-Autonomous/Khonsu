import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Ecosystem', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Systems', href: '#' },
    { name: 'Simulation', href: '#' },
    { name: 'Architecture', href: '#' },
    { name: 'Roadmap', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-icon">
            <img src="" alt="" />
          </div>
          <span className="logo-text">Khonsu</span>
        </div>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
