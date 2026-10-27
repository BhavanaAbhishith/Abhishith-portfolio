import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import FeaturedReels from './components/FeaturedReels';
import TechnicalSkills from './components/TechnicalSkills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import FooterContact from './components/FooterContact';
import SpotlightBeams from './components/SpotlightBeams';
import ContactModal from './components/ContactModal';
import './App.css';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="app-wrapper">
      {/* Dynamic Stage Spotlight & Dust Particle Beams */}
      <SpotlightBeams />

      {/* Floating Pill Header / Navbar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Hero Section matching the creator mockup aesthetic */}
      <main>
        <Hero onOpenContact={() => setIsContactOpen(true)} />
        <AboutMe onOpenContact={() => setIsContactOpen(true)} />
        <FeaturedReels />
        <TechnicalSkills />
        <Experience />
        <Projects />
        <Education />
      </main>

      {/* Footer Contact & Legal matching reference */}
      <FooterContact />

      {/* Quick Direct Contact & Collaboration Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;
