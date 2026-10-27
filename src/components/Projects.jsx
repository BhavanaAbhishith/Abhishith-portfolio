import React, { useState } from 'react';
import { ExternalLinkIcon, GitHubIcon, SparklesIcon, CheckCircleIcon } from './Icons';

const projectList = [
  {
    id: 'stockmitra-ai',
    title: 'StockMitra AI',
    tagline: 'AI-Powered Mobile Inventory Tracking & Automated Stock Prediction System',
    period: 'Feb 2026 – March 2026',
    category: 'AI & Machine Learning',
    featured: true,
    github: 'https://github.com/BhavanaAbhishith',
    demo: '#',
    accentColor: '#EF4444',
    metrics: [
      { label: 'Forecast Accuracy', value: '94%+' },
      { label: 'Alert Latency', value: '<2s' },
      { label: 'Interface', value: 'Mobile-First' },
    ],
    summary:
      'A smart, predictive inventory management platform built with Python & ML that forecasts stock depletion curves and automates procurement workflows.',
    features: [
      'Engineered a mobile-first assistant supporting dual voice and manual telemetry for friction-free stock audit entry.',
      'Designed real-time stockout forecasting and dynamic reorder threshold algorithms using time-series predictive modeling.',
      'Integrated real-time automated WhatsApp low-stock notification webhooks, eliminating manual inventory check delays.',
      'Created an analytics overview tracking consumption trends, SKU turnover ratios, and supply cycle forecasts.',
    ],
    techStack: ['Python', 'Machine Learning', 'Predictive Modeling', 'WhatsApp Webhooks', 'REST API', 'Flask'],
  },
  {
    id: 'resume-screening',
    title: 'Automated Resume Shortlisting System',
    tagline: 'NLP-Driven Candidate Screening and Intelligent Match Ranking Platform',
    period: 'March 2026 – May 2026',
    category: 'NLP & Web Engineering',
    featured: true,
    github: 'https://github.com/BhavanaAbhishith',
    demo: '#',
    accentColor: '#3B82F6',
    metrics: [
      { label: 'Matching Algorithm', value: 'TF-IDF' },
      { label: 'Evaluation Speed', value: 'Instant' },
      { label: 'Database', value: 'MongoDB Atlas' },
    ],
    summary:
      'An end-to-end recruitment screening solution using NLP vectorization algorithms to rank candidate resumes against job specifications with high semantic precision.',
    features: [
      'Developed candidate text parsing pipeline using Natural Language Processing (NLP) with TF-IDF vectorization.',
      'Implemented Cosine Similarity algorithms to compute relevance indices, scoring and ranking hundreds of applicants objectively.',
      'Architected scalable cloud data schema with MongoDB Atlas for secure resume persistence and candidate history audit trails.',
      'Built a Flask-powered web interface allowing HR teams to upload job descriptions and export shortlist rankings instantly.',
    ],
    techStack: ['Python', 'Flask', 'NLP', 'TF-IDF', 'Cosine Similarity', 'MongoDB Atlas', 'JavaScript'],
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'AI & Machine Learning', 'NLP & Web Engineering'];

  const filteredProjects =
    activeFilter === 'All'
      ? projectList
      : projectList.filter((p) => p.category === activeFilter);

  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-badge">Engineering Showcase</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world machine learning solutions, NLP ranking engines, and automated cloud systems.
          </p>

          {/* Filter Pills */}
          <div className="projects-filter-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              {/* Card Header */}
              <div className="project-card-header">
                <div className="project-header-left">
                  <div className="project-category-tag">
                    <SparklesIcon />
                    <span>{project.category}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-tagline">{project.tagline}</p>
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-icon-link"
                    title="View GitHub Repository"
                  >
                    <GitHubIcon />
                    <span>Code</span>
                  </a>
                  <a
                    href="https://github.com/BhavanaAbhishith"
                    target="_blank"
                    rel="noreferrer"
                    className="project-icon-link highlight-link"
                    title="Project Details"
                  >
                    <ExternalLinkIcon size={16} />
                    <span>Repository</span>
                  </a>
                </div>
              </div>

              {/* Metrics Row */}
              <div className="project-metrics-row">
                {project.metrics.map((m, mIdx) => (
                  <div className="project-metric-pill" key={mIdx}>
                    <span className="p-metric-val">{m.value}</span>
                    <span className="p-metric-lbl">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <p className="project-summary-text">{project.summary}</p>

              {/* Key Features Bullets */}
              <div className="project-features-list">
                <h4 className="features-title">Technical Highlights & Architecture:</h4>
                <ul className="project-bullets">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="feature-bullet-item">
                      <span className="feature-check">
                        <CheckCircleIcon />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="project-tech-footer">
                <div className="tech-pills-row">
                  {project.techStack.map((tech, tIdx) => (
                    <span className="project-tech-pill" key={tIdx}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

