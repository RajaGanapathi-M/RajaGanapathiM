import { Mail, Heart, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import './Footer.css';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'hire-me', label: 'Hire Me' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        {/* Top Row */}
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <Code2 size={16} />
              </div>
              <span>Portfolio<span className="footer__dot">.</span></span>
            </div>
            <p className="footer__tagline">
              AI &amp; Software Developer • Skilled in Python, React, JavaScript, Machine Learning, Generative AI, RAG, and modern web development
            </p>
            <div className="footer__socials">
              <a
                href="mailto:rajaganapathimaharajan@gmail.com"
                className="footer__social"
                aria-label="Email Raja Ganapathi"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://github.com/RajaGanapathi-M"
                className="footer__social"
                aria-label="GitHub profile"
                onClick={e => { e.preventDefault(); alert('https://github.com/RajaGanapathi-M'); }}
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="www.linkedin.com/in/rajaganapathi-m"
                className="footer__social"
                aria-label="LinkedIn profile"
                onClick={e => { e.preventDefault(); alert('www.linkedin.com/in/rajaganapathi-m'); }}
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <h3 className="footer__nav-title">Navigation</h3>
            <ul>
              {navLinks.map(link => (
                <li key={link.id}>
                  <button
                    className="footer__nav-link"
                    onClick={() => scrollTo(link.id)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick Contact */}
          <div className="footer__contact">
            <h3 className="footer__nav-title">Quick Contact</h3>
            <div className="footer__contact-list">
              <a href="mailto:rajaganapathimaharajan@gmail.com" className="footer__contact-item">
                <Mail size={14} />
                <span>rajaganapathimaharajan@gmail.com</span>
              </a>
              <div className="footer__contact-item">
                <span>📍</span>
                <span>Dindigul, Tamil Nadu, India</span>
              </div>
              <div className="footer__contact-item footer__contact-item--open">
                <span className="status-dot" />
                <span>Open to Opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Raja Ganapathi M. All rights reserved.
          </p>
          <p className="footer__made">
            Made with <Heart size={13} fill="currentColor" className="footer__heart" /> and lots of Python & React
          </p>
        </div>
      </div>
    </footer>
  );
}
