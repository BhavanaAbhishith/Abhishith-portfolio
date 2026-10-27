import React from 'react';
import profileImg from '../assets/profile.png';
import { ChevronRightIcon } from './Icons';

export default function AboutMe({ onOpenContact }) {
  const stats = [
    { value: '8.31', label: 'CGPA at GMRIT' },
    { value: '5+', label: 'Projects Built' },
    { value: '2.3K+', label: 'Instagram Followers' },
    { value: '90.4', label: 'FM Radio Jockey' },
  ];

  return (
    <section className="about-section" id="about">
      {/* Section Heading */}
      <h2 className="about-heading">About Me</h2>

      <div className="about-layout">
        {/* Left Column: Image + Overlapping Info Card */}
        <div className="about-visual">
          <div className="about-image-frame">
            <img
              src={profileImg}
              alt="Bhavana Abhishith"
              className="about-photo"
            />
          </div>

          {/* Floating glass card overlapping the image bottom-left */}
          <div className="about-info-card">
            <p className="about-info-text">
              I'm a B.Tech student at{' '}
              <strong>GMRIT</strong>, passionate about{' '}
              <strong>Machine Learning</strong>, modern{' '}
              <strong>Web Development</strong>, and creating engaging{' '}
              <strong>digital content</strong> that connects with people.
            </p>
            <button
              type="button"
              className="btn-pill-red about-cta-btn"
              onClick={onOpenContact}
            >
              <span>Contact Me</span>
              <ChevronRightIcon size={16} />
            </button>
          </div>
        </div>

        {/* Right Column: Stats & Bio Details */}
        <div className="about-details">
          {stats.map((stat, i) => (
            <div className="about-stat-row" key={i}>
              <span className="about-stat-value">{stat.value}</span>
              <span className="about-stat-label">{stat.label}</span>
            </div>
          ))}

          {/* Extended Bio */}
          <div className="about-bio-block">
            <p className="about-bio-text">
              Aspiring software engineer with strong foundations in Machine Learning and Web Development. Proficient in building, analyzing, and deploying data-driven solutions using Python and modern web technologies.
            </p>
            <div className="about-tags">
              <span className="about-tag">Python</span>
              <span className="about-tag">Java</span>
              <span className="about-tag">JavaScript</span>
              <span className="about-tag">Machine Learning</span>
              <span className="about-tag">AWS Cloud</span>
              <span className="about-tag">React</span>
              <span className="about-tag">Flask</span>
              <span className="about-tag">NLP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
