import { useState, useEffect } from 'react';
import { ChevronDown, Download, ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';

const roles = [
  'AI & Frontend Developer',
  'Frontend Developer',
  'React & JavaScript Specialist',
  'Generative AI Enthusiast',
  'Python Developer',
];

// Animated particles for hero background
const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 4,
  duration: Math.random() * 6 + 6,
}));

export default function Hero() {
  const [roleIndex, setRoleIndex]   = useState(0);
  const [displayed, setDisplayed]   = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIdx, setCharIdx]       = useState(0);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => setCharIdx(c => c + 1), 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx(c => c - 1), 45);
      } else {
        setIsDeleting(false);
        setRoleIndex(i => (i + 1) % roles.length);
      }
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, roleIndex]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero" aria-label="Introduction">
      {/* Background */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__gradient-orb hero__gradient-orb--1" />
        <div className="hero__gradient-orb hero__gradient-orb--2" />
        <div className="hero__gradient-orb hero__gradient-orb--3" />
        <div className="hero__grid" />

        {/* Floating particles */}
        {PARTICLES.map(p => (
          <div
            key={p.id}
            className="hero__particle"
            style={{
              left: `${p.x}%`,
              top:  `${p.y}%`,
              width:  `${p.size}px`,
              height: `${p.size}px`,
              animationDelay:    `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}

        {/* AI circuit / neural net visual elements */}
        <svg className="hero__neural" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="300" cy="200" r="1.5" fill="rgba(99,102,241,0.5)" />
          <circle cx="150" cy="100" r="1.5" fill="rgba(139,92,246,0.5)" />
          <circle cx="450" cy="100" r="1.5" fill="rgba(34,211,238,0.4)" />
          <circle cx="100" cy="250" r="1.5" fill="rgba(99,102,241,0.4)" />
          <circle cx="500" cy="250" r="1.5" fill="rgba(139,92,246,0.4)" />
          <circle cx="200" cy="320" r="1.5" fill="rgba(34,211,238,0.4)" />
          <circle cx="400" cy="320" r="1.5" fill="rgba(99,102,241,0.4)" />
          <line x1="300" y1="200" x2="150" y2="100" stroke="rgba(99,102,241,0.2)" strokeWidth="0.5" />
          <line x1="300" y1="200" x2="450" y2="100" stroke="rgba(139,92,246,0.2)" strokeWidth="0.5" />
          <line x1="300" y1="200" x2="100" y2="250" stroke="rgba(34,211,238,0.15)" strokeWidth="0.5" />
          <line x1="300" y1="200" x2="500" y2="250" stroke="rgba(99,102,241,0.15)" strokeWidth="0.5" />
          <line x1="300" y1="200" x2="200" y2="320" stroke="rgba(139,92,246,0.15)" strokeWidth="0.5" />
          <line x1="300" y1="200" x2="400" y2="320" stroke="rgba(34,211,238,0.15)" strokeWidth="0.5" />
          <line x1="150" y1="100" x2="100" y2="250" stroke="rgba(99,102,241,0.1)" strokeWidth="0.5" />
          <line x1="450" y1="100" x2="500" y2="250" stroke="rgba(99,102,241,0.1)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Content */}
      <div className="hero__content container">
        <div className="hero__text">
          {/* Badge */}
          <div className="hero__badge">
            <Sparkles size={14} />
            <span>Open to Opportunities</span>
          </div>

          {/* Name */}
          <h1 className="hero__name">
            <span className="hero__greeting">Hi, I'm</span>
            <span className="hero__name-main gradient-text">Raja Ganapathi M</span>
          </h1>

          {/* Typewriter role */}
          <div className="hero__role" aria-live="polite" aria-atomic="true">
            <span className="hero__role-text">{displayed}</span>
            <span className="hero__cursor" aria-hidden="true">|</span>
          </div>

          {/* Description */}
          <p className="hero__desc">
            Building practical software solutions with Python, Generative AI,
            Machine Learning, and modern web technologies.
          </p>

          {/* CTA Buttons */}
          <div className="hero__actions">
            <button
              className="btn btn-primary hero__cta-main"
              onClick={() => scrollTo('projects')}
              aria-label="View my projects"
            >
              View My Projects
              <ArrowRight size={18} />
            </button>

            <button
              className="btn btn-outline"
              onClick={() => scrollTo('contact')}
              aria-label="Contact me"
            >
              Contact Me
            </button>

            <a
              href="/Raja%20Ganapathi%20M_Resume.pdf"
              download="Raja_Ganapathi_M_Resume.pdf"
              className="btn btn-ghost"
              aria-label="Download resume"
            >
              <Download size={17} />
              Download Resume
            </a>
          </div>

          {/* Stats */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">3</span>
              <span className="hero__stat-label">Projects</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true" />
            <div className="hero__stat">
              <span className="hero__stat-value">2</span>
              <span className="hero__stat-label">Internships</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true" />
            <div className="hero__stat">
              <span className="hero__stat-value">3+</span>
              <span className="hero__stat-label">Certifications</span>
            </div>
          </div>
        </div>

        {/* Hero visual picture card */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__image-wrapper">
            <div className="hero__image-glow" />
            <div className="hero__image-ring" />
            <div className="hero__image-card glass-card">
              <img
                src="/rg_profile.png"
                alt="Raja Ganapathi M"
                className="hero__profile-img"
              />
              <div className="hero__image-overlay" />
            </div>

            <div className="hero__card-status hero__image-status">
              <span className="status-dot" />
              <span>Available for Hire</span>
            </div>
          </div>

          {/* Floating tech badges */}
          <div className="hero__badge-float hero__badge-float--1">
            <span>🧠 AI &amp; ML</span>
          </div>
          <div className="hero__badge-float hero__badge-float--2">
            <span>⚡ React 19</span>
          </div>
          <div className="hero__badge-float hero__badge-float--3">
            <span>🐍 Python</span>
          </div>
          <div className="hero__badge-float hero__badge-float--4">
            <span>🛢 SQL</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="hero__scroll"
        onClick={() => scrollTo('about')}
        aria-label="Scroll to about section"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
}
