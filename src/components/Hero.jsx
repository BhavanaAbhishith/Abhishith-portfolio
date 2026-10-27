import React from 'react';
import profileImg from '../assets/profile.png';
import {
  InstagramIcon,
  RadioMicIcon,
  LinkedInIcon,
  GitHubIcon
} from './Icons';

export default function Hero({ onOpenContact }) {
  return (
    <section className="hero-section" id="home">
      {/* Cinematic Crimson Radial Glow behind person (matching screenshot) */}
      <div className="hero-stage-crimson-glow" aria-hidden="true"></div>

      <div className="hero-container-v2">
        {/* Left / Center Area: Giant Display Typography & Content */}
        <div className="hero-main-layout">
          {/* Top Giant Text: "Mr" */}
          <div className="giant-title-row">
            <span className="giant-text giant-text-mr">Mr</span>
          </div>

          {/* Subtitle Tagline directly beneath "Mr" */}
          <div className="hero-creator-tag">
            <span className="dash-bullet">—</span>
            <span>
              An <strong className="text-highlight">Instagram Creator</strong> & Web Developer.
            </span>
          </div>

          {/* Bottom Row: Giant "Abhi" */}
          <div className="giant-abhi-row">
            <span className="giant-text giant-text-abhi">Abhi</span>
          </div>

          {/* Bottom Callout & Badges */}
          <div className="hero-bottom-bar">
            <div
              className="growth-callout"
              onClick={onOpenContact}
              role="button"
              tabIndex={0}
            >
              <h3 className="callout-title">Let’s Unlock Your Growth Potential.</h3>
              <p className="callout-subtitle">Get in touch for collaborations & projects →</p>
            </div>

            {/* Social Stats Row */}
            <div className="hero-badges-row">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="stat-card stat-card-highlight"
                title="Instagram Content Creator - 2.3K+ Followers"
              >
                <div className="stat-icon-box">
                  <InstagramIcon />
                </div>
                <div className="stat-text-box">
                  <span className="stat-value">2.3K+</span>
                  <span className="stat-label">Followers</span>
                </div>
              </a>

              <div className="stat-card" title="Radio Jockey at GMRIT Community Radio 90.4 FM">
                <div className="stat-icon-box">
                  <RadioMicIcon />
                </div>
                <div className="stat-text-box">
                  <span className="stat-value">90.4 FM</span>
                  <span className="stat-label">Radio Jockey</span>
                </div>
              </div>

              <a
                href="https://linkedin.com/in/BhavanaAbhishith"
                target="_blank"
                rel="noreferrer"
                className="stat-card"
                title="LinkedIn Professional Network"
              >
                <div className="stat-icon-box">
                  <LinkedInIcon />
                </div>
                <div className="stat-text-box">
                  <span className="stat-value">Network</span>
                  <span className="stat-label">LinkedIn</span>
                </div>
              </a>

              <a
                href="https://github.com/BhavanaAbhishith"
                target="_blank"
                rel="noreferrer"
                className="stat-card"
                title="GitHub Repositories"
              >
                <div className="stat-icon-box">
                  <GitHubIcon />
                </div>
                <div className="stat-text-box">
                  <span className="stat-value">Code</span>
                  <span className="stat-label">GitHub</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Profile Image with seamless bottom gradient fade & no shadow */}
        <div className="hero-stage-visual">
          <div className="stage-image-container">
            <img
              src={profileImg}
              alt="Mr Abhi - Profile"
              className="creator-stage-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
