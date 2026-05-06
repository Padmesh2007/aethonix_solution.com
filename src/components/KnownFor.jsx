import React from 'react';

const highlights = [
  { stat: '2025', label: 'Founded' },
  { stat: 'CBE', label: 'Based in Coimbatore' },
  { stat: '3+', label: 'Active Projects' },
];

const KnownFor = () => (
  <section className="known-for-section" id="solutions">
    <div className="container">
      <h4 className="section-subtitle">Who We Are</h4>
      <h2 className="section-title text-center">Known For</h2>
      <p className="section-description text-center">
        Aethonix Solutions is a technology startup specializing in robotics, IoT, and assistive technology —
        purpose-driven innovations designed to improve lives and expand human potential.
      </p>
      <div className="stats-grid">
        {highlights.map(({ stat, label }) => (
          <div className="stat-card premium-card" key={label}>
            <span className="stat-number">{stat}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default KnownFor;
