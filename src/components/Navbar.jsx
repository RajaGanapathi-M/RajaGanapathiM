import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Code2, Briefcase } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { id: 'home',           label: 'Home' },
  { id: 'about',          label: 'About' },
  { id: 'skills',         label: 'Skills' },
  { id: 'projects',       label: 'Projects' },
  { id: 'experience',     label: 'Experience' },
  { id: 'education',      label: 'Education' },
  { id: 'certifications', label: 'Certifications' },

  { id: 'contact',        label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [activeSection, setActive] = useState('home');

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    const sectionIds = navLinks.map(l => l.id);
    let current = 'home';
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        current = id;
      }
    }
    setActive(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar__inner container">
        {/* Modern Portfolio Logo */}
        <button className="navbar__logo" onClick={() => scrollTo('home')} aria-label="Go to home">
          <div className="navbar__logo-icon">
            <Code2 size={18} />
          </div>
          <span className="navbar__logo-text">Portfolio<span className="navbar__logo-dot">.</span></span>
        </button>

        {/* Desktop Menubar Links */}
        <ul className="navbar__links" role="menubar">
          {navLinks.map(link => (
            <li key={link.id} role="none">
              <button
                role="menuitem"
                className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
                onClick={() => scrollTo(link.id)}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hire Me CTA */}
        <button className="navbar__cta btn btn-primary" onClick={() => scrollTo('hire-me')}>
          <Briefcase size={15} style={{ marginRight: 6 }} />
          Hire Me
        </button>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(p => !p)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`} aria-hidden={!menuOpen}>
        <ul>
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                className={`navbar__mobile-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button className="btn btn-primary w-full" onClick={() => scrollTo('hire-me')}>
              <Briefcase size={16} style={{ marginRight: 8 }} />
              Hire Me
            </button>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="navbar__overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
    </nav>
  );
}
