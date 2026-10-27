import React, { useState } from 'react';
import {
  ChevronRightIcon,
  InstagramIcon,
  LinkedInIcon,
  GitHubIcon,
  XIcon,
} from './Icons';

export default function FooterContact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('sent');
    setTimeout(() => {
      setStatus(null);
      setFormData({ name: '', email: '', message: '' });
    }, 3500);
  };

  return (
    <footer className="footer-contact-section" id="contact">
      {/* Huge Background Typography Watermark matching screenshot */}
      <div className="footer-bg-watermark" aria-hidden="true">
        <span className="watermark-text watermark-mr">Mr</span>
        <span className="watermark-text watermark-abhi">Abhi</span>
      </div>

      <div className="footer-content-wrapper">
        {/* Main CTA Heading */}
        <div className="footer-cta-header">
          <h2 className="footer-cta-title">
            Ready To Promote <br />
            Your Brand To Billions?
          </h2>
        </div>

        {/* Contact Form */}
        <form className="footer-contact-form" onSubmit={handleSubmit}>
          <div className="footer-form-row">
            <div className="footer-input-field">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="footer-glass-input"
              />
            </div>
            <div className="footer-input-field">
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="footer-glass-input"
              />
            </div>
          </div>

          <div className="footer-textarea-field">
            <textarea
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="footer-glass-textarea"
            />
          </div>

          {/* Submit Pill Button matching screenshot (gradient + arrow circle) */}
          <div className="footer-submit-wrapper">
            <button type="submit" className="footer-submit-btn">
              <span className="btn-label">
                {status === 'sent' ? 'Message Sent! ✨' : 'Contact Me'}
              </span>
              <span className="btn-arrow-circle">
                <ChevronRightIcon size={14} />
              </span>
            </button>
          </div>
        </form>

        {/* Floating Capsule Nav Menu */}
        <div className="footer-nav-pill-wrapper">
          <nav className="footer-nav-pill">
            <a href="#home" className="footer-nav-link active">
              Home <span className="active-dot">•</span>
            </a>
            <a href="#about" className="footer-nav-link">
              About Me
            </a>
            <a href="#reels" className="footer-nav-link">
              Reels
            </a>
            <a href="#skills" className="footer-nav-link">
              Skills
            </a>
            <a href="#projects" className="footer-nav-link">
              Projects
            </a>
            <a href="#education" className="footer-nav-link">
              Education
            </a>
          </nav>
        </div>

        {/* Direct Email Display */}
        <div className="footer-email-row">
          <a
            href="mailto:bavanaabhishith@gmail.com"
            className="footer-direct-email"
            title="Send Email"
          >
            bavanaabhishith@gmail.com
          </a>
        </div>

        {/* Bottom Bar: Brand Logo, Socials, Copyright & Legal */}
        <div className="footer-bottom-bar">
          {/* Left: Brand Logo & Copyright */}
          <div className="footer-bottom-left">
            <a href="#home" className="footer-brand-logo">
              Abhishith
            </a>
            <p className="footer-copyright">
              © {new Date().getFullYear()} Abhishith. All rights reserved.
            </p>
          </div>

          {/* Center/Right: Social Platform Icons */}
          <div className="footer-social-icons">
            <a
              href="https://linkedin.com/in/BhavanaAbhishith"
              target="_blank"
              rel="noreferrer"
              className="footer-social-circle"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/BhavanaAbhishith"
              target="_blank"
              rel="noreferrer"
              className="footer-social-circle"
              title="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="footer-social-circle"
              title="Instagram (2.3K+)"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="footer-social-circle"
              title="X / Twitter"
            >
              <XIcon />
            </a>
          </div>

          {/* Right: Legal Links */}
          <div className="footer-legal-links">
            <a href="#home" className="legal-link">
              Privacy Policy
            </a>
            <a href="#home" className="legal-link">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

