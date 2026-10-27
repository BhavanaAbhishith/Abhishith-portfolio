import React, { useState } from 'react';
import { ChevronRightIcon } from './Icons';

export default function Navbar({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Reels', href: '#reels' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
  ];

  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        {/* Brand Logo */}
        <a href="#home" className="navbar-brand">
          <span className="brand-primary">Abhishith</span>
          <span className="brand-dot">.</span>
        </a>

        {/* Center Pill Menu (Desktop) */}
        <nav className="nav-pill-wrapper" aria-label="Main Navigation">
          <ul className="nav-pill-list">
            {navLinks.map((item) => {
              const isActive = activeTab === item.label;
              return (
                <li key={item.label} className="nav-pill-item">
                  <a
                    href={item.href}
                    onClick={() => setActiveTab(item.label)}
                    className={`nav-pill-link ${isActive ? 'active' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Action Button */}
        <div className="navbar-actions">
          <a
            href="#contact"
            className="btn-pill-red"
            aria-label="Contact Bhavana Abhishith"
          >
            <span>Contact Me</span>
            <ChevronRightIcon size={16} className="btn-icon" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            className="mobile-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="mobile-drawer">
            <ul className="mobile-drawer-list">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => {
                      setActiveTab(item.label);
                      setMobileMenuOpen(false);
                    }}
                    className={`mobile-link ${activeTab === item.label ? 'active' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="btn-pill-red mobile-cta-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Contact Me</span>
                  <ChevronRightIcon size={16} />
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}

