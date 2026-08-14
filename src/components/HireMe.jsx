import { Code2, Cpu, Database, CheckCircle2, Download, Send, Zap, Award, Clock, MapPin } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './HireMe.css';

const hireReasons = [
  {
    icon: Cpu,
    title: 'Generative AI & Python Integration',
    desc: 'Hands-on experience with Python, ML fundamentals, NLP, Prompt Engineering, and RAG systems for intelligent web applications.',
    color: '#8b5cf6',
  },
  {
    icon: Code2,
    title: 'Frontend Development Expertise',
    desc: 'Proficient in building fast, responsive, and accessible user interfaces using React, JavaScript (ES6+), HTML5, and CSS3.',
    color: '#6366f1',
  },
  {
    icon: Database,
    title: 'SQL & Database Management',
    desc: 'Solid foundation in relational databases, writing structured SQL queries, data modeling, indexing, and seamless backend API integration.',
    color: '#0ea5e9',
  },
  {
    icon: Award,
    title: 'Fast Learner & Team Player',
    desc: 'Strong academic foundation (8.2 CGPA in B.E. CSE), internship experience, and agile collaborative mindset.',
    color: '#10b981',
  },
];

const highlights = [
  'Ready for Immediate Onboarding',
  'Frontend, React & AI Developer Roles',
  'SQL & Database Query Optimization',
  'Open to Remote & On-Site Positions',
];

export default function HireMe() {
  const { ref } = useScrollReveal();

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hire-me" className="section hire-me" ref={ref} aria-labelledby="hire-me-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">💼 Work With Me</div>
          <h2 className="section-title" id="hire-me-heading">
            Why <span className="gradient-text">Hire Me?</span>
          </h2>
          <p className="section-subtitle">
            Dedicated Frontend &amp; AI Developer ready to contribute value, build polished web apps, and grow with your team.
          </p>
        </div>

        {/* 4 Core Value Cards */}
        <div className="hire-me__grid">
          {hireReasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`hire-me__card glass-card reveal reveal-delay-${idx + 1}`}
              >
                <div className="hire-me__card-icon" style={{ background: `${item.color}15`, color: item.color }}>
                  <Icon size={24} />
                </div>
                <h3 className="hire-me__card-title">{item.title}</h3>
                <p className="hire-me__card-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Banner CTA Box */}
        <div className="hire-me__banner glass-card reveal reveal-delay-3">
          <div className="hire-me__banner-content">
            <h3 className="hire-me__banner-title">Ready to build exceptional web applications together?</h3>
            <p className="hire-me__banner-subtitle">
              Whether you are looking for a motivated Frontend Developer, React Engineer, or AI Application Developer, I am eager to discuss opportunities.
            </p>

            <div className="hire-me__highlights">
              {highlights.map(h => (
                <div key={h} className="hire-me__highlight-item">
                  <CheckCircle2 size={16} className="hire-me__check-icon" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="hire-me__badges">
              <span className="hire-me__status-badge">
                <Clock size={14} /> Response Time &lt; 24h
              </span>
              <span className="hire-me__status-badge">
                <MapPin size={14} /> Tamil Nadu, India / Remote
              </span>
            </div>
          </div>

          <div className="hire-me__banner-actions">
            <button className="btn btn-primary hire-me__btn" onClick={scrollToContact}>
              <Send size={18} />
              Hire Me Now
            </button>
            <a
              href="public/Raja Ganapathi M_Resume.pdf"
              download="Raja_Ganapathi_M_Resume.pdf"
              className="btn btn-outline hire-me__btn"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
