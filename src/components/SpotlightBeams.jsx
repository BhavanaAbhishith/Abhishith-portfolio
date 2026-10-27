import React from 'react';

export default function SpotlightBeams() {
  return (
    <div className="spotlight-canvas" aria-hidden="true">
      {/* Primary Top-Right Beam */}
      <div className="beam beam-main"></div>
      
      {/* Secondary Soft Ambient Beam */}
      <div className="beam beam-secondary"></div>

      {/* Tertiary Backstage Beam */}
      <div className="beam beam-tertiary"></div>

      {/* Radial Center Stage Glow */}
      <div className="stage-glow-spot"></div>

      {/* Subtle Dust / Bokeh particles */}
      <div className="bokeh-particle p1"></div>
      <div className="bokeh-particle p2"></div>
      <div className="bokeh-particle p3"></div>
      <div className="bokeh-particle p4"></div>
      <div className="bokeh-particle p5"></div>
      <div className="bokeh-particle p6"></div>
      <div className="bokeh-particle p7"></div>
    </div>
  );
}

