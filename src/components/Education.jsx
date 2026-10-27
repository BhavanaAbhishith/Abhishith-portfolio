import React from 'react';
import { GraduationCapIcon, CalendarIcon, LocationIcon, AwardIcon } from './Icons';

const educationData = [
  {
    degree: 'Bachelor of Technology in Information Technology',
    institution: 'GMR Institute of Technology (GMRIT)',
    location: 'Rajam, Andhra Pradesh, India',
    period: 'Sep 2023 – Expected Apr 2027',
    scoreType: 'GPA',
    score: '8.31',
    status: 'In Progress',
    description:
      'Pursuing an engineering degree in Information Technology with specialized coursework in Machine Learning, Cloud Computing, Object-Oriented Programming, and Web Engineering.',
    highlights: [
      'Current Cumulative GPA: 8.31 / 10.0',
      'Active Student Coordinator for Computer Society of India (CSI)',
      'Radio Jockey at GMRIT Community Radio 90.4 FM & Coordinator of Film Club',
    ],
  },
  {
    degree: 'Intermediate (MPC Stream - Math, Physics, Chemistry)',
    institution: 'Sri Chaitanya Junior College',
    location: 'Vishakapatnam, Andhra Pradesh, India',
    period: 'June 2021 – May 2023',
    scoreType: 'Score',
    score: '91.8%',
    status: 'Completed',
    description:
      'Rigorous secondary education focusing on advanced mathematics, classical mechanics, physics, and chemistry.',
    highlights: [
      'Graduated with 91.8% aggregate score',
      'Strong quantitative aptitude and competitive problem-solving foundations',
    ],
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Sri Sarada Vidya Niketan',
    location: 'Sompeta, Andhra Pradesh, India',
    period: 'June 2020 – April 2021',
    scoreType: 'Score',
    score: '96.1%',
    status: 'Completed',
    description:
      'Foundational secondary schooling with exceptional academic standing across science, mathematics, and humanities.',
    highlights: [
      'Graduated with distinction: 96.1%',
      'Active in school science exhibitions, elocution, and student clubs',
    ],
  },
];

export default function Education() {
  return (
    <section className="education-section" id="education">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-badge">Academic Foundation</span>
          <h2 className="section-title">Education Qualifications</h2>
          <p className="section-subtitle">
            Formal technical education and academic track record supporting real-world engineering problem solving.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="education-timeline-list">
          {educationData.map((item, idx) => (
            <div className="education-card" key={idx}>
              {/* Left Column: Icon + Timeline indicator */}
              <div className="edu-card-indicator">
                <div className="edu-icon-circle">
                  <GraduationCapIcon size={22} />
                </div>
                {idx < educationData.length - 1 && <div className="edu-timeline-line"></div>}
              </div>

              {/* Right Column: Card Content */}
              <div className="edu-card-content">
                <div className="edu-content-top">
                  <div>
                    <div className="edu-degree-row">
                      <h3 className="edu-degree-title">{item.degree}</h3>
                      <span className={`edu-status-tag ${item.status === 'In Progress' ? 'tag-active' : ''}`}>
                        {item.status}
                      </span>
                    </div>
                    <h4 className="edu-institution-name">{item.institution}</h4>
                  </div>

                  {/* Score Badge */}
                  <div className="edu-score-badge">
                    <span className="score-type-label">{item.scoreType}</span>
                    <span className="score-value-text">{item.score}</span>
                  </div>
                </div>

                {/* Metadata Row */}
                <div className="edu-meta-row">
                  <span className="edu-meta-item">
                    <CalendarIcon />
                    <span>{item.period}</span>
                  </span>
                  <span className="edu-meta-item">
                    <LocationIcon />
                    <span>{item.location}</span>
                  </span>
                </div>

                <p className="edu-description-text">{item.description}</p>

                {/* Highlights List */}
                <div className="edu-highlights-box">
                  <span className="edu-highlights-title">Highlights:</span>
                  <ul className="edu-highlights-list">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="edu-highlight-bullet">
                        <span className="edu-bullet-dot"></span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

