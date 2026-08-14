import { GraduationCap, School, BookOpen } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Education.css';

const education = [
  {
    id: 1,
    level: 'B.E. Computer Science & Engineering',
    icon: GraduationCap,
    institution: 'RVS School of Engineering and Technology',
    location: 'Dindigul, Tamil Nadu',
    period: '2022 – 2026',
    score: 'CGPA: 8.2 / 10',
    scoreColor: '#6366f1',
    color: '#6366f1',
    description: 'Completed B.E. in Computer Science and Engineering with focus on software development, AI/ML, and modern web technologies. Active learner with practical project experience.',
    
  },
  {
    id: 2,
    level: 'Higher Secondary Certificate (HSC)',
    icon: School,
    institution: "St Antony's Higher Secondary School",
    location: 'Kosavapatty, Dindigul',
    period: '2021 – 2022',
    score: 'Percentage: 78%',
    scoreColor: '#22d3ee',
    color: '#22d3ee',
    description: 'Completed Class 12 with a focus on Science subjects, building a strong academic foundation.',
    current: false,
  },
  {
    id: 3,
    level: 'Secondary School Leaving Certificate (SSLC)',
    icon: BookOpen,
    institution: "St Antony's Higher Secondary School",
    location: 'Kosavapatty, Dindigul',
    period: '2019 – 2020',
    score: 'Percentage: 90.8%',
    scoreColor: '#10b981',
    color: '#10b981',
    description: 'Excelled in Class 10 with a 90.8% score, demonstrating strong academic performance from early education.',
    current: false,
  },
];

export default function Education() {
  const { ref } = useScrollReveal();

  return (
    <section id="education" className="section education" ref={ref} aria-labelledby="education-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">🎓 Academic Background</div>
          <h2 className="section-title" id="education-heading">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            My academic journey —A strong foundation in Computer Science.
          </p>
        </div>

        <div className="education__list" role="list">
          {education.map((edu, i) => {
            const Icon = edu.icon;
            return (
              <div
                key={edu.id}
                className={`edu-item glass-card reveal reveal-delay-${i + 1}`}
                role="listitem"
                aria-label={`${edu.level} from ${edu.institution}`}
                style={{ '--edu-color': edu.color }}
              >
                <div className="edu-item__icon-col">
                  <div className="edu-item__icon-wrap" style={{ background: `${edu.color}18`, border: `1px solid ${edu.color}30` }}>
                    <Icon size={24} color={edu.color} />
                  </div>
                  {i < education.length - 1 && <div className="edu-item__connector" />}
                </div>

                <div className="edu-item__content">
                  <div className="edu-item__header">
                    <div>
                      {edu.current && (
                        <span className="edu-item__current">Currently Enrolled</span>
                      )}
                      <h3 className="edu-item__level">{edu.level}</h3>
                      <p className="edu-item__institution">{edu.institution}</p>
                      <p className="edu-item__location">📍 {edu.location}</p>
                    </div>
                    <div className="edu-item__right">
                      <span className="edu-item__period">{edu.period}</span>
                      <span className="edu-item__score" style={{ color: edu.scoreColor, background: `${edu.scoreColor}12`, border: `1px solid ${edu.scoreColor}25` }}>
                        {edu.score}
                      </span>
                    </div>
                  </div>
                  <p className="edu-item__description">{edu.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
