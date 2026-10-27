import React, { useState } from 'react';
import { CloseIcon, MailIcon, PhoneIcon, LocationIcon, LinkedInIcon, GitHubIcon, InstagramIcon } from './Icons';

export default function ContactModal({ isOpen, onClose }) {
  const [copiedField, setCopiedField] = useState(null);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="modal-badge">Direct Contact</span>
            <h3 className="modal-title">Let's Build Something Great</h3>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <CloseIcon />
          </button>
        </div>

        <div className="modal-body">
          {/* Quick contact direct channels */}
          <div className="contact-channels">
            <div className="channel-card" onClick={() => handleCopy('bavanaabhishith@gmail.com', 'email')}>
              <div className="channel-icon-wrapper">
                <MailIcon />
              </div>
              <div className="channel-info">
                <span className="channel-label">Email</span>
                <span className="channel-value">bavanaabhishith@gmail.com</span>
              </div>
              <span className="copy-badge">
                {copiedField === 'email' ? 'Copied!' : 'Click to Copy'}
              </span>
            </div>

            <div className="channel-card" onClick={() => handleCopy('+91 93927 50595', 'phone')}>
              <div className="channel-icon-wrapper">
                <PhoneIcon />
              </div>
              <div className="channel-info">
                <span className="channel-label">Phone</span>
                <span className="channel-value">+91 93927 50595</span>
              </div>
              <span className="copy-badge">
                {copiedField === 'phone' ? 'Copied!' : 'Click to Copy'}
              </span>
            </div>

            <div className="channel-card">
              <div className="channel-icon-wrapper">
                <LocationIcon />
              </div>
              <div className="channel-info">
                <span className="channel-label">Location</span>
                <span className="channel-value">Sompeta, Andhra Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="modal-socials">
            <span className="socials-label">Connect on Platforms:</span>
            <div className="socials-row">
              <a
                href="https://linkedin.com/in/BhavanaAbhishith"
                target="_blank"
                rel="noreferrer"
                className="social-pill-link"
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/BhavanaAbhishith"
                target="_blank"
                rel="noreferrer"
                className="social-pill-link"
              >
                <GitHubIcon />
                <span>GitHub</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-pill-link"
              >
                <InstagramIcon />
                <span>Instagram (2.3K+)</span>
              </a>
            </div>
          </div>

          {/* Quick Message Form */}
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-input"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="form-input"
              />
            </div>
            <textarea
              placeholder="What project or collaboration are you thinking of?"
              rows={3}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="form-textarea"
            />
            <button type="submit" className="btn-pill-red form-submit-btn">
              {formSent ? 'Message Sent Successfully! ✨' : "Send Message >"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

