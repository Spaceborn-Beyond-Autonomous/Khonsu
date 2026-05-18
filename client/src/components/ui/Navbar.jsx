import { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Platforms', href: '#aerospace' },
    { name: 'Validation', href: '#validation' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`navbar ${hidden ? 'navbar-hidden' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logo} alt="Khonsu Logo" className="navbar-logo-img" />
        </div>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              onClick={(e) => handleClick(e, link.href)}
            >
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
