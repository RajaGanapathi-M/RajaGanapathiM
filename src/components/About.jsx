import { Brain, Code2, Lightbulb, Target, GraduationCap, Cpu } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './About.css';

const interests = [
  { icon: Code2, label: 'Frontend Development' },
  { icon: Brain, label: 'Generative AI & LLMs' },
  { icon: Cpu, label: 'Machine Learning' },
  { icon: Lightbulb, label: 'Prompt Engineering' },
  { icon: Target, label: 'RAG & AI Systems' },
  { icon: GraduationCap, label: 'Continuous Learning' },
];

export default function About() {
  const { ref } = useScrollReveal();

  return (
    <section id="about" className="section about" ref={ref} aria-labelledby="about-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">👋 About Me</div>
          <h2 className="section-title" id="about-heading">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <p className="section-subtitle">
            A Computer Science Engineer passionate about AI Innovation.
          </p>
        </div>

        <div className="about__grid">
          {/* Left: Profile card with Picture */}
          <div className="about__profile glass-card reveal reveal-delay-1">
            <div className="about__avatar">
              <div className="about__avatar-ring" aria-hidden="true" />
              <div className="about__avatar-inner">
                <img
                  src="/Rg_Pic.png"
                  alt="Raja Ganapathi M Profile"
                  className="about__avatar-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <span className="about__avatar-initials" style={{ display: 'none' }}>RG</span>
              </div>
              <div className="about__avatar-badge">
                <span>🎓 B.E. CSE</span>
              </div>
            </div>

            <div className="about__profile-info">
              <h3 className="about__name">Raja Ganapathi M</h3>
              <p className="about__title">AI &amp; Frontend Developer</p>
              <p className="about__location">📍 Tamil Nadu, India</p>
            </div>

            <div className="about__details">
              <div className="about__detail-item">
                <span className="about__detail-label">University</span>
                <span className="about__detail-value">RVS School of Engineering</span>
              </div>
              <div className="about__detail-item">
                <span className="about__detail-label">Degree</span>
                <span className="about__detail-value">B.E. Computer Science &amp; Engineering</span>
              </div>
              <div className="about__detail-item">
                <span className="about__detail-label">Graduation</span>
                <span className="about__detail-value">2026</span>
              </div>
              <div className="about__detail-item">
                <span className="about__detail-label">CGPA</span>
                <span className="about__detail-value">8.2 / 10</span>
              </div>
              <div className="about__detail-item">
                <span className="about__detail-label">Status</span>
                <span className="about__detail-value about__detail-value--open">
                  <span className="status-dot" />
                  Open to Opportunities
                </span>
              </div>
            </div>
          </div>

          {/* Right: Shortened Text + Interests */}
          <div className="about__content">
            <div className="about__text glass-card reveal reveal-delay-2">
              <p>
                I am a <strong>Computer Science Engineering student</strong> specializing in 
                <strong> Frontend Development</strong> , <strong>AI & ML , Python , SQL</strong> , <strong>Generative AI</strong>. I build 
                responsive, and user-centric web interfaces using React, JavaScript, HTML5, and CSS3.
              </p>
              <p>
                Combining modern web engineering with <strong>AI/ML capabilities</strong>, I develop 
                intelligent applications powered by Python, RAG systems, Prompt Engineering, and NLP models.
              </p>

              <div className="about__goal">
                <Target size={18} className="about__goal-icon" />
                <p>
                  <strong>Career Goal:</strong> To contribute as a Frontend &amp; AI Developer—building 
                  high-performance user experiences and leveraging AI technologies to solve real-world problems.
                </p>
              </div>
            </div>

            {/* Interests */}
            <div className="about__interests reveal reveal-delay-3">
              <h3 className="about__interests-title">Areas of Interest</h3>
              <div className="about__interests-grid">
                {interests.map(({ icon: Icon, label }) => (
                  <div key={label} className="about__interest-chip glass-card">
                    <Icon size={16} className="about__interest-icon" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
