import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './AIArea.css';

const pathSteps = [
  { name: 'Python', desc: 'Foundation', icon: '🐍' },
  { name: 'Machine Learning', desc: 'Pattern Recognition', icon: '📈' },
  { name: 'Deep Learning', desc: 'Neural Networks', icon: '🔬' },
  { name: 'NLP', desc: 'Language Understanding', icon: '💬' },
  { name: 'Generative AI', desc: 'Content Generation', icon: '✨' },
  { name: 'RAG', desc: 'Knowledge Retrieval', icon: '🔍' },
  { name: 'Fine-Tuning', desc: 'Model Specialization', icon: '⚙️' },
  { name: 'AI Applications', desc: 'Real-World Solutions', icon: '🚀' },
];

const techCards = [
  {
    name: 'Generative AI',
    icon: '✨',
    color: '#8b5cf6',
    tagline: 'Creating content with AI',
    explanation: 'Generative AI models can create text, images, code, and more. These models learn patterns from data and generate new, contextually relevant content.',
    useCase: 'Building AI-powered applications that generate text responses, assist users, and automate content creation using modern LLM APIs.',
  },
  {
    name: 'Prompt Engineering',
    icon: '💡',
    color: '#f59e0b',
    tagline: 'Communicating with AI',
    explanation: 'Prompt engineering is the art of crafting effective instructions for AI models to produce accurate, useful, and well-formatted outputs.',
    useCase: 'Designing clear, effective prompts to guide AI models in producing specific outputs for various applications.',
  },
  {
    name: 'RAG',
    icon: '🔍',
    color: '#22d3ee',
    tagline: 'Retrieval-Augmented Generation',
    explanation: 'RAG combines information retrieval with text generation. It retrieves relevant documents and uses them as context for generating accurate responses.',
    useCase: 'Creating AI systems that can answer questions using domain-specific knowledge bases, going beyond what models know from training.',
  },
  {
    name: 'Fine-Tuning',
    icon: '⚙️',
    color: '#10b981',
    tagline: 'Specializing AI models',
    explanation: 'Fine-tuning adapts a pre-trained model to a specific task using domain-specific data, improving performance on specialized use cases.',
    useCase: 'Exploring how to adapt pre-trained models for specific tasks using tools like Hugging Face Transformers.',
  },
  {
    name: 'Hugging Face',
    icon: '🤗',
    color: '#f97316',
    tagline: 'AI model ecosystem',
    explanation: 'Hugging Face is a platform providing thousands of pre-trained models, datasets, and tools for NLP, computer vision, and more.',
    useCase: 'Using Hugging Face Transformers library to experiment with pre-trained models for NLP tasks.',
  },
  {
    name: 'Machine Learning',
    icon: '📈',
    color: '#6366f1',
    tagline: 'Learning from data',
    explanation: 'Machine Learning enables systems to learn from data and improve their performance on tasks without being explicitly programmed.',
    useCase: 'Implementing ML algorithms for classification, regression, and pattern recognition tasks in project work.',
  },
  {
    name: 'Deep Learning',
    icon: '🔬',
    color: '#ec4899',
    tagline: 'Neural network architectures',
    explanation: 'Deep Learning uses multi-layered neural networks to learn hierarchical representations, enabling breakthroughs in perception and language.',
    useCase: 'Building and training neural networks for NLP tasks, including sentiment analysis using neural classifiers.',
  },
  {
    name: 'NLP',
    icon: '💬',
    color: '#84cc16',
    tagline: 'Natural Language Processing',
    explanation: 'NLP enables computers to understand, interpret, and generate human language, powering applications from chatbots to sentiment analysis.',
    useCase: 'Developed NLP pipelines using Word2Vec, Sentence Transformers for stock market sentiment classification.',
  },
];

export default function AIArea() {
  const { ref } = useScrollReveal();
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="ai" className="section aiarea" ref={ref} aria-labelledby="ai-heading">
      <div className="aiarea__bg-glow" aria-hidden="true" />

      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">🤖 AI & GenAI</div>
          <h2 className="section-title" id="ai-heading">
            AI & <span className="gradient-text">Generative AI</span> Expertise
          </h2>
          <p className="section-subtitle">
            My learning journey and technical interests in the AI/GenAI space —
            building real-world skills through projects and exploration.
          </p>
        </div>

        {/* Learning Path */}
        <div className="aiarea__path-section reveal reveal-delay-1">
          <h3 className="aiarea__path-title">AI Learning Path</h3>
          <div className="aiarea__path" role="list" aria-label="AI technology learning path">
            {pathSteps.map((step, i) => (
              <div key={step.name} className="aiarea__path-item" role="listitem">
                <div className="aiarea__path-node">
                  <span className="aiarea__path-icon" aria-hidden="true">{step.icon}</span>
                  <span className="aiarea__path-name">{step.name}</span>
                  <span className="aiarea__path-desc">{step.desc}</span>
                </div>
                {i < pathSteps.length - 1 && (
                  <div className="aiarea__path-arrow" aria-hidden="true">
                    <ChevronRight size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Cards */}
        <div className="aiarea__cards" role="list">
          {techCards.map((card, i) => (
            <button
              key={card.name}
              className={`aiarea__card glass-card reveal reveal-delay-${(i % 4) + 1} ${activeCard === card.name ? 'aiarea__card--active' : ''}`}
              style={{ '--card-color': card.color }}
              onClick={() => setActiveCard(activeCard === card.name ? null : card.name)}
              role="listitem"
              aria-expanded={activeCard === card.name}
              aria-label={`${card.name}: ${card.tagline}`}
            >
              <div className="aiarea__card-top">
                <span className="aiarea__card-icon" aria-hidden="true">{card.icon}</span>
                <div className="aiarea__card-info">
                  <h4 className="aiarea__card-name">{card.name}</h4>
                  <p className="aiarea__card-tagline">{card.tagline}</p>
                </div>
              </div>

              <div className="aiarea__card-body">
                <p className="aiarea__card-explanation">{card.explanation}</p>
                <div className="aiarea__card-usecase">
                  <span className="aiarea__card-usecase-label">My Interest / Use Case</span>
                  <p>{card.useCase}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
