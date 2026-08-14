import { Briefcase, MapPin, Calendar } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: 'Frontend & Web Development Intern',
    company: 'Futurix Technologies',
    location: 'Madurai, Tamil Nadu',
    period: 'July 2025 – August 2025',
    type: 'Frontend Dev',
    typeColor: '#6366f1',
    icon: '⚡',
    description:
      'Worked as a Frontend & Web Development intern, gaining hands-on experience in building modern web applications. Contributed to frontend UI/UX development tasks under the guidance of professional developers.',
    highlights: [
      'Contributed to modern web application frontend development',
      'Worked with HTML, CSS, JavaScript, and React components',
      'Gained experience in real-world responsive UI design',
      'Collaborated in a professional team environment',
    ],
    skills: ['Frontend Dev', 'Web Development', 'React', 'Teamwork'],
  },
  {
    id: 2,
    role: 'React Project / Frontend Development Intern',
    company: 'MenThee Technologies',
    location: 'Chennai, Tamil Nadu',
    period: 'February 2025 – March 2025',
    type: 'Frontend Dev',
    typeColor: '#ec4899',
    icon: '⚛️',
    description:
      'Completed a React-focused frontend internship, working on UI components, project structure, and interactive web interfaces. Strengthened practical React skills through real project work.',
    highlights: [
      'Developed React components for web applications',
      'Practiced component-based architecture',
      'Gained exposure to real-world frontend workflows',
      'Improved skills in JavaScript and React ecosystems',
    ],
    skills: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Frontend Development'],
  },
];

export default function Experience() {
  const { ref } = useScrollReveal();

  return (
    <section id="experience" className="section experience" ref={ref} aria-labelledby="experience-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">💼 Work Experience</div>
          <h2 className="section-title" id="experience-heading">
            Internship <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Practical industry exposure through internships — applying classroom knowledge to real-world development.
          </p>
        </div>

        <div className="experience__timeline" role="list">
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className={`exp-item reveal reveal-delay-${i + 1}`}
              role="listitem"
              aria-label={`${exp.role} at ${exp.company}`}
            >
              {/* Timeline connector */}
              <div className="exp-item__line" aria-hidden="true">
                <div className="exp-item__dot" style={{ background: exp.typeColor, boxShadow: `0 0 12px ${exp.typeColor}66` }}>
                  <span>{exp.icon}</span>
                </div>
                {i < experiences.length - 1 && <div className="exp-item__connector" />}
              </div>

              {/* Card */}
              <article className="exp-item__card glass-card">
                <div className="exp-item__header">
                  <div className="exp-item__meta">
                    <span className="exp-item__type" style={{ color: exp.typeColor, background: `${exp.typeColor}15`, border: `1px solid ${exp.typeColor}33` }}>
                      {exp.type}
                    </span>
                    <h3 className="exp-item__role">{exp.role}</h3>
                    <p className="exp-item__company">
                      <Briefcase size={14} />
                      <strong>{exp.company}</strong>
                    </p>
                    <div className="exp-item__details">
                      <span className="exp-item__detail">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                      <span className="exp-item__detail">
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="exp-item__description">{exp.description}</p>

                <ul className="exp-item__highlights" aria-label="Key highlights">
                  {exp.highlights.map(h => (
                    <li key={h} className="exp-item__highlight">
                      <span className="exp-item__highlight-dot" style={{ background: exp.typeColor }} aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="exp-item__skills" aria-label="Skills used">
                  {exp.skills.map(s => (
                    <span key={s} className="exp-item__skill">{s}</span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
