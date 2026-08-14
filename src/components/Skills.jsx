import useScrollReveal from '../hooks/useScrollReveal';
import './Skills.css';

const skillGroups = [
  {
    category: 'Programming',
    icon: '💻',
    color: '#6366f1',
    skills: [
      { name: 'Python', level: 'Project Experience' },
      { name: 'Java', level: 'Working Knowledge' },
      { name: 'JavaScript', level: 'Working Knowledge' },
      { name: 'Database Queries', level: 'Working Knowledge' },
    ],
  },
  {
    category: 'Frontend Development',
    icon: '🎨',
    color: '#ec4899',
    skills: [
      { name: 'React.js', level: 'Project Experience' },
      { name: 'HTML', level: 'Project Experience' },
      { name: 'CSS', level: 'Project Experience' },
      { name: 'JavaScript', level: 'Working Knowledge' },
    ],
  },
  {
    category: 'Generative AI',
    icon: '🧠',
    color: '#8b5cf6',
    skills: [
      { name: 'Generative AI', level: 'Project Experience' },
      { name: 'Prompt Engineering', level: 'Project Experience' },
      { name: 'RAG', level: 'Project Experience' },
      { name: 'Fine-Tuning', level: 'Project Experience' },
      { name: 'Hugging Face', level: 'Project Experience' },
      { name: 'AI App Development', level: 'Project Experience' },
    ],
  },
  {
    category: 'AI / Machine Learning',
    icon: '⚙️',
    color: '#22d3ee',
    skills: [
      { name: 'Machine Learning', level: 'Project Experience' },
      { name: 'Deep Learning', level: 'Project Experience' },
      { name: 'NLP', level: 'Project Experience' },
      { name: 'Sentence Transformers', level: 'Project Experience' },
      { name: 'Word2Vec', level: 'Project Experience' },
    ],
  },
  {
    category: 'Backend / Development',
    icon: '🔧',
    color: '#f59e0b',
    skills: [
      { name: 'Spring Boot', level: 'Project Experience' },
      { name: 'REST APIs', level: 'Working Knowledge' },
      { name: 'API Development', level: 'Working Knowledge' },
    ],
  },
  {
    category: 'Data',
    icon: '📊',
    color: '#10b981',
    skills: [
      { name: 'Database Queries', level: 'Working Knowledge' },
      { name: 'Data Analysis', level: 'Project Experience' },
      { name: 'Data Visualization', level: 'Project Experience' },
    ],
  },
];

const levelConfig = {
  'Learning':            { color: '#4f46e5',  bg: 'rgba(79, 70, 229, 0.08)', label: 'Learning' },
  'Working Knowledge':   { color: '#0284c7',  bg: 'rgba(2, 132, 199, 0.08)', label: 'Working Knowledge' },
  'Project Experience':  { color: '#059669',  bg: 'rgba(5, 150, 105, 0.08)', label: 'Project Experience' },
};

export default function Skills() {
  const { ref } = useScrollReveal();

  return (
    <section id="skills" className="section skills" ref={ref} aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">🛠️ Technical Skills</div>
          <h2 className="section-title" id="skills-heading">
            Skills &amp; <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle">
            A structured dashboard of technical skills — organized by domain with proficiency levels.
          </p>
        </div>

        {/* Legend */}
        <div className="skills__legend reveal reveal-delay-1" aria-label="Skill level legend">
          {Object.entries(levelConfig).map(([key, conf]) => (
            <div key={key} className="skills__legend-item">
              <span className="skills__legend-dot" style={{ background: conf.color }} />
              <span>{conf.label}</span>
            </div>
          ))}
        </div>

        {/* Skill Groups */}
        <div className="skills__groups">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className={`skills__group glass-card reveal reveal-delay-${(gi % 4) + 1}`}
              style={{ '--group-color': group.color }}
            >
              <div className="skills__group-header">
                <span className="skills__group-icon" aria-hidden="true">{group.icon}</span>
                <h3 className="skills__group-title">{group.category}</h3>
              </div>

              <div className="skills__badges" role="list">
                {group.skills.map(skill => {
                  const conf = levelConfig[skill.level];
                  return (
                    <div
                      key={skill.name}
                      className="skills__badge"
                      role="listitem"
                      style={{
                        '--badge-color': conf.color,
                        '--badge-bg': conf.bg,
                      }}
                    >
                      <span className="skills__badge-name">{skill.name}</span>
                      <span className="skills__badge-level">{skill.level}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
