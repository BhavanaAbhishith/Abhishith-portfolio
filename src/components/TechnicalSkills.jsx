import React from 'react';
import { CodeIcon, DatabaseIcon, CloudIcon, LayersIcon, AwardIcon } from './Icons';

const skillCategories = [
  {
    icon: <CodeIcon />,
    title: 'Languages & Core',
    description: 'Foundation in object-oriented and functional software development',
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'Java', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'HTML5 / CSS3', level: 'Advanced' },
      { name: 'SQL', level: 'Intermediate' },
    ],
  },
  {
    icon: <LayersIcon />,
    title: 'Machine Learning & Data',
    description: 'Data analytics, NLP pipelines, and intelligent predictive models',
    skills: [
      { name: 'NumPy', level: 'Proficient' },
      { name: 'Pandas', level: 'Proficient' },
      { name: 'Matplotlib', level: 'Proficient' },
      { name: 'NLP & TF-IDF', level: 'Applied' },
      { name: 'Cosine Similarity', level: 'Applied' },
      { name: 'Flask REST API', level: 'Intermediate' },
    ],
  },
  {
    icon: <CloudIcon />,
    title: 'Cloud & Infrastructure',
    description: 'Hands-on enterprise cloud architecture and serverless workflows',
    skills: [
      { name: 'AWS EC2', level: 'Hands-on' },
      { name: 'AWS S3', level: 'Hands-on' },
      { name: 'AWS Lambda', level: 'Serverless' },
      { name: 'Load Balancing', level: 'Practical' },
      { name: 'IaaS / PaaS / SaaS', level: 'Architecture' },
    ],
  },
  {
    icon: <DatabaseIcon />,
    title: 'Databases & Dev Tools',
    description: 'Scalable data persistence and modern version control toolchains',
    skills: [
      { name: 'MongoDB Atlas', level: 'Cloud DB' },
      { name: 'Relational SQL', level: 'Database' },
      { name: 'Git & GitHub', level: 'Version Control' },
      { name: 'VS Code', level: 'Primary IDE' },
      { name: 'Vite & React', level: 'Frontend' },
    ],
  },
];

const certifications = [
  {
    issuer: 'AWS Academy',
    name: 'Cloud Foundations & Generative AI Foundations',
    badge: 'AWS Graduate',
    color: '#FF9900',
  },
  {
    issuer: 'Google Cloud',
    name: 'Introduction to Generative AI',
    badge: 'Google Cloud Certified',
    color: '#4285F4',
  },
  {
    issuer: 'L&T EduTech',
    name: 'Deep Learning for Professionals',
    badge: 'Specialization',
    color: '#EF4444',
  },
];

export default function TechnicalSkills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-badge">Core Competencies</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A comprehensive stack spanning Machine Learning, Full-Stack Web Development, and Cloud Architecture.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div className="skill-card" key={idx}>
              <div className="skill-card-top">
                <div className="skill-card-icon">{category.icon}</div>
                <div>
                  <h3 className="skill-card-title">{category.title}</h3>
                  <p className="skill-card-desc">{category.description}</p>
                </div>
              </div>

              <div className="skill-tags-list">
                {category.skills.map((skill, sIdx) => (
                  <div className="skill-pill-item" key={sIdx}>
                    <span className="skill-pill-name">{skill.name}</span>
                    <span className="skill-pill-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Banner */}
        <div className="certifications-banner">
          <div className="certifications-header">
            <AwardIcon />
            <span>Verified Professional Certifications</span>
          </div>
          <div className="certifications-grid">
            {certifications.map((cert, cIdx) => (
              <div className="cert-card" key={cIdx}>
                <div className="cert-top">
                  <span className="cert-issuer" style={{ color: cert.color }}>
                    {cert.issuer}
                  </span>
                  <span className="cert-badge">{cert.badge}</span>
                </div>
                <h4 className="cert-name">{cert.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

