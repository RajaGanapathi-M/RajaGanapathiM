import { useState } from 'react';
import { GitFork, ExternalLink, BarChart2, Server, TrendingUp } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Projects.css';

const filters = [
  { id: 'all',          label: 'All' },
  { id: 'ai-ml',        label: 'AI / ML' },
  { id: 'generative-ai', label: 'Generative AI' },
  { id: 'web',          label: 'Web Development' },
  { id: 'data',         label: 'Data Analysis' },
];

const projects = [
  {
    id: 1,
    title: 'Adaptive API Rate Limiter',
    subtitle: 'API Abuse Prevention Based on Traffic Behavior Analysis',
    description:
      'A Spring Boot-based system that monitors user API requests in real time and dynamically controls access based on request behavior. Designed to prevent API abuse while maintaining smooth service for legitimate users.',
    icon: Server,
    iconColor: '#6366f1',
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))',
    image: '/API.png',
    tags: ['Spring Boot', 'Java', 'REST API', 'Backend'],
    categories: ['web'],
    features: [
      'Real-time API request monitoring',
      'Traffic behavior analysis',
      'Adaptive access control',
      'API abuse prevention',
    ],
    github: 'https://github.com/RajaGanapathi-M/Adaptive-API-Rate-Limiter-For-API-Abuse-Prevention-Based-On-User-Behaviour',
    demo: '#',
    status: 'Project',
    statusColor: '#6366f1',
  },
  {
    id: 2,
    title: 'Social Media Analytics & Insights',
    subtitle: 'Engagement Trends & Audience Behavior Analysis',
    description:
      'Analyzed social media data using Python to uncover engagement trends, audience behavior, and actionable insights through data analysis and visualization. Transformed raw data into clear, meaningful charts and reports.',
    icon: BarChart2,
    iconColor: '#22d3ee',
    gradient: 'linear-gradient(135deg, rgba(34,211,238,0.12), rgba(99,102,241,0.08))',
    image: '/Capstone_img.png',
    tags: ['Python', 'Data Analysis', 'Visualization', 'Pandas'],
    categories: ['data', 'ai-ml'],
    features: [
      'Engagement trend analysis',
      'Audience behavior insights',
      'Data visualization dashboards',
      'Actionable insight generation',
    ],
    github: 'https://github.com/RajaGanapathi-M/Python_Capstone_Project',
    demo: '#',
    status: 'Project',
    statusColor: '#22d3ee',
  },
  {
    id: 3,
    title: 'AI Movie Recommendation System',
    subtitle: 'Content-Based Movie Recommendation for Personalized Movie Discovery',
    description:
      'Developed an AI-powered movie recommendation system to suggest relevant movies based on movie titles, genres, and descriptions. Uses Sentence Transformers to generate semantic embeddings and cosine similarity to identify movies with similar content.',
    icon: TrendingUp,
    iconColor: '#10b981',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(34,211,238,0.08))',
    image: '/AI-Movie Recommendation.png',
    tags: ['Python', 'NLP', 'Sentence Transformers', 'Cosine Similarity', 'Gradio', 'Pandas', 'NumPy'],
    categories: ['ai-ml'],
    features: [
      'Content-based movie recommendation',
      'Semantic search using sentence embeddings',
      'Cosine similarity for movie matching',
      'Personalized movie suggestions',
    ],
    github: 'https://github.com/RajaGanapathi-M/AI_Movie_Recommendation_SentenceTransformer',
    demo: '#',
    status: 'Project',
    statusColor: '#10b981',
  },
];

export default function Projects() {
  const { ref } = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState('all');

  const visible = projects.filter(
    p => activeFilter === 'all' || p.categories.includes(activeFilter)
  );

  return (
    <section id="projects" className="section projects" ref={ref} aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">🚀 Portfolio</div>
          <h2 className="section-title" id="projects-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real projects built during academic studies, internships, and self-directed learning.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="projects__filters reveal reveal-delay-1" role="tablist" aria-label="Project category filters">
          {filters.map(f => (
            <button
              key={f.id}
              role="tab"
              className={`projects__filter-btn ${activeFilter === f.id ? 'projects__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
              aria-selected={activeFilter === f.id}
              aria-controls="projects-grid"
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects__grid" id="projects-grid" role="tabpanel">
          {visible.length === 0 ? (
            <div className="projects__empty">
              <p>No projects in this category yet. Check back soon!</p>
            </div>
          ) : (
            visible.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))
          )}
        </div>

        
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const Icon = project.icon;

  return (
    <article
      className={`project-card glass-card reveal reveal-delay-${(index % 3) + 1}`}
      style={{ '--project-color': project.iconColor }}
      aria-label={project.title}
    >
      {/* Project Image */}
      {project.image && (
        <div className="project-card__image-container">
          <img
            src={project.image}
            alt={project.title}
            className="project-card__image"
            loading="lazy"
          />
        </div>
      )}

      {/* Header */}
      <div className="project-card__header" style={{ background: project.gradient }}>
        <div className="project-card__icon-wrap">
          <Icon size={28} color={project.iconColor} />
        </div>
        <div className="project-card__status" style={{ color: project.statusColor, borderColor: `${project.statusColor}33`, background: `${project.statusColor}11` }}>
          {project.status}
        </div>
      </div>

      {/* Body */}
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__subtitle">{project.subtitle}</p>
        <p className="project-card__description">{project.description}</p>

        {/* Features */}
        <ul className="project-card__features" aria-label="Key features">
          {project.features.map(f => (
            <li key={f} className="project-card__feature">
              <span className="project-card__feature-dot" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="project-card__tags" aria-label="Technologies used">
          {project.tags.map(tag => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="project-card__footer">
        <a
          href={project.github}
          className="btn btn-outline project-card__btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on GitHub`}
          onClick={e => { if (project.github === '#') { e.preventDefault(); alert('GitHub link not configured yet. Replace "#" with your actual URL.'); }}}
        >
          <GitFork size={16} />
          GitHub
        </a>
      </div>
    </article>
  );
}
