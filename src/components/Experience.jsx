import React from 'react';
import { BriefcaseIcon, CalendarIcon, LocationIcon, CheckCircleIcon, CloudIcon, RadioMicIcon } from './Icons';

const internships = [
  {
    role: 'Cloud Intern',
    company: 'Hashtek Solutions',
    period: 'June 2025 – July 2025',
    location: 'Visakhapatnam, India',
    type: 'Internship',
    tech: ['AWS EC2', 'AWS S3', 'AWS Lambda', 'Load Balancing', 'IaaS / PaaS / SaaS', 'Serverless'],
    highlights: [
      'Architected and provisioned scalable AWS cloud infrastructure utilizing EC2 compute instances and S3 multi-tier object storage.',
      'Constructed serverless event-driven workflows with AWS Lambda to optimize operational latency and reduce runtime compute costs.',
      'Configured application load balancers and fault-tolerant cloud patterns ensuring 99.9% service availability.',
      'Analyzed and executed cloud migration paths integrating IaaS and PaaS models for production-grade reliability.',
    ],
  },
];

const leadershipRoles = [
  {
    title: 'Radio Jockey',
    organization: 'GMRIT Community Radio 90.4 FM',
    desc: 'Hosted live broadcasts, managed audio production, and engaged diverse community listener bases.',
  },
  {
    title: 'Club Coordinator',
    organization: 'GMRIT Film Club',
    desc: 'Led creative direction, student workshops, video editing showcases, and campus media festivals.',
  },
  {
    title: 'Student Coordinator',
    organization: 'Computer Society of India (CSI)',
    desc: 'Organized national-level hackathons, coding contests, and technical symposiums for 500+ participants.',
  },
  {
    title: 'Active Member',
    organization: 'Gamyam Social Service',
    desc: 'Volunteered for community empowerment, environmental drives, and digital literacy campaigns.',
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-badge">Career & Roles</span>
          <h2 className="section-title">Internship Experience</h2>
          <p className="section-subtitle">
            Hands-on industry engineering exposure in cloud infrastructure, alongside creative leadership roles.
          </p>
        </div>

        {/* Featured Internship Card */}
        <div className="experience-timeline">
          {internships.map((item, idx) => (
            <div className="experience-card" key={idx}>
              <div className="exp-card-header">
                <div className="exp-header-main">
                  <div className="exp-icon-pill">
                    <CloudIcon />
                  </div>
                  <div>
                    <div className="exp-title-row">
                      <h3 className="exp-role">{item.role}</h3>
                      <span className="exp-type-tag">{item.type}</span>
                    </div>
                    <h4 className="exp-company">{item.company}</h4>
                  </div>
                </div>

                <div className="exp-meta">
                  <span className="exp-meta-item">
                    <CalendarIcon />
                    <span>{item.period}</span>
                  </span>
                  <span className="exp-meta-item">
                    <LocationIcon />
                    <span>{item.location}</span>
                  </span>
                </div>
              </div>

              {/* Bullet highlights */}
              <div className="exp-highlights">
                <h5 className="highlights-heading">Key Engineering Contributions:</h5>
                <ul className="highlights-list">
                  {item.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="highlight-item">
                      <span className="check-bullet">
                        <CheckCircleIcon />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Tags */}
              <div className="exp-tech-stack">
                <span className="tech-stack-label">Technologies Applied:</span>
                <div className="tech-pills-row">
                  {item.tech.map((t, tIdx) => (
                    <span className="tech-badge" key={tIdx}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership & Campus Responsibility Grid */}
        <div className="leadership-section">
          <div className="leadership-title-row">
            <RadioMicIcon />
            <h3 className="leadership-heading">Positions of Responsibility & Campus Impact</h3>
          </div>

          <div className="leadership-grid">
            {leadershipRoles.map((role, rIdx) => (
              <div className="leadership-card" key={rIdx}>
                <div className="lead-card-num">0{rIdx + 1}</div>
                <h4 className="lead-role-title">{role.title}</h4>
                <span className="lead-role-org">{role.organization}</span>
                <p className="lead-role-desc">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

