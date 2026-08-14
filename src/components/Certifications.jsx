import { Award, Star, Trophy } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Certifications.css';

const certifications = [
  {
    id: 1,
    title: 'Agentforce Specialist',
    issuer: 'Salesforce',
    category: 'CRM & Client Relationship Management',
    icon: '☁️',
    color: '#00a1e0',
    type: 'Certification',
    description: 'Earned the Salesforce Agentforce Specialist certification, demonstrating knowledge in CRM concepts, client relationship management, and AI-powered agent workflows.',
    isAchievement: false,
  },
  {
    id: 2,
    title: 'Naan Mudhalvan Certification',
    issuer: 'Naan Mudhalvan',
    category: 'Academic Certification',
    icon: '📜',
    color: '#f59e0b',
    type: 'Certification',
    description: 'Completed the Naan Mudhalvan government skill development program certification, demonstrating commitment to continuous learning and skill enhancement.',
    isAchievement: false,
  },
  {
    id: 3,
    title: 'UiPath RPA Developer',
    issuer: 'UiPath',
    category: 'Robotic Process Automation',
    icon: '🤖',
    color: '#f97316',
    type: 'Certification',
    description: 'Obtained UiPath certification covering Robotic Process Automation fundamentals, workflow design, and automation best practices.',
    isAchievement: false,
  },
  {
    id: 4,
    title: 'STARTIFY — Finalist',
    issuer: 'STARTIFY Competition',
    category: '🏆 Innovation & Entrepreneurship',
    icon: '🏆',
    color: '#facc15',
    type: 'Achievement',
    description: 'Selected as a Finalist in STARTIFY, a competitive program recognizing innovative thinking, project viability, and entrepreneurial business planning. Demonstrated ability to ideate, present, and validate real-world solutions.',
    isAchievement: true,
  },
];

export default function Certifications() {
  const { ref } = useScrollReveal();

  return (
    <section id="certifications" className="section certifications" ref={ref} aria-labelledby="certifications-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">🏅 Recognition</div>
          <h2 className="section-title" id="certifications-heading">
            Certifications &amp; <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Validated skills, certifications, and notable achievements that reflect continuous learning and initiative.
          </p>
        </div>

        <div className="certs__grid">
          {certifications.map((cert, i) => (
            <article
              key={cert.id}
              className={`cert-card glass-card reveal reveal-delay-${(i % 3) + 1} ${cert.isAchievement ? 'cert-card--achievement' : ''}`}
              style={{ '--cert-color': cert.color }}
              aria-label={`${cert.isAchievement ? 'Achievement' : 'Certification'}: ${cert.title}`}
            >
              {cert.isAchievement && (
                <div className="cert-card__achievement-banner" aria-label="Achievement">
                  <Trophy size={12} />
                  Achievement
                </div>
              )}

              <div className="cert-card__header">
                <div className="cert-card__icon" style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}30` }}>
                  <span aria-hidden="true">{cert.icon}</span>
                </div>
                <div className="cert-card__type-badge" style={{ color: cert.color, background: `${cert.color}12` }}>
                  {cert.isAchievement ? <Trophy size={12} /> : <Award size={12} />}
                  {cert.type}
                </div>
              </div>

              <div className="cert-card__body">
                <h3 className="cert-card__title">{cert.title}</h3>
                <p className="cert-card__issuer">{cert.issuer}</p>
                <p className="cert-card__category" style={{ color: cert.color }}>{cert.category}</p>
                <p className="cert-card__description">{cert.description}</p>
              </div>

              {cert.isAchievement && (
                <div className="cert-card__stars" aria-hidden="true">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} size={12} fill="#facc15" color="#facc15" />
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
