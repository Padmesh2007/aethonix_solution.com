import React from 'react';
import ThemeLayout from '../components/ThemeLayout';

const PricingPage = ({ showToast }) => {
  return (
    <ThemeLayout>
      <main className="fade-in">
        <section className="page-section text-center">
          <h4 style={{ color: "var(--accent)", fontWeight: 600 }}>
            Pricing Details
          </h4>
          <h1 className="hero-title" style={{ marginBottom: "24px", color: "var(--text-main)", fontSize: "clamp(48px, 8vw, 100px)" }}>
            Choose Your Kit
          </h1>
          <p style={{ maxWidth: "800px", margin: "0 auto", color: "var(--text-light)", fontSize: "18px", lineHeight: "1.7" }}>
            Unlock your potential in robotics and electronics with our professional bootcamp kits. 
            Designed for all levels, from beginners to advanced innovators.
          </p>
        </section>

        <section className="page-section" style={{ paddingTop: 0 }}>
          <div 
            style={{
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
              gap: "40px",
              maxWidth: "1000px",
              margin: "0 auto"
            }}
          >
            {/* Basic Kit Pricing */}
            <div className="premium-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
              <div style={{ textAlign: "center" }}>
                <h3 style={{ fontSize: "24px", color: "var(--text-main)", marginBottom: "8px" }}>Essential Bootcamp Kit</h3>
                <div style={{ fontSize: "48px", fontWeight: "800", color: "var(--text-main)", margin: "24px 0" }}>
                  ₹2,499<span style={{ fontSize: "16px", color: "var(--text-light)", fontWeight: "normal" }}>/kit</span>
                </div>
                <p style={{ color: "var(--text-light)", marginBottom: "32px", fontSize: "15px", lineHeight: "1.6" }}>
                  Perfect for starting your journey in electronics. Includes everything you need for the basics.
                </p>
              </div>
              
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px 0", textAlign: "left", display: "flex", flexDirection: "column", gap: "16px", color: "var(--text-light)" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "var(--accent)", fontSize: "20px", fontWeight: "bold" }}>✓</span> Digital Multimeter
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "var(--accent)", fontSize: "20px", fontWeight: "bold" }}>✓</span> Breadboard & Jumpers
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "var(--accent)", fontSize: "20px", fontWeight: "bold" }}>✓</span> Basic Sensors Pack
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "var(--accent)", fontSize: "20px", fontWeight: "bold" }}>✓</span> Getting Started Guide
                </li>
              </ul>

              <button className="theme-btn" style={{ width: "100%", marginTop: "auto" }} onClick={() => showToast("Added to Cart!")}>
                Buy Basic Kit
              </button>
            </div>

            {/* Advanced Kit Pricing */}
            <div className="premium-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', position: "relative", border: "2px solid var(--accent)" }}>
              <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: "var(--accent)", color: "#000", padding: "6px 20px", borderRadius: "20px", fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", boxShadow: "0 4px 10px rgba(255, 216, 77, 0.3)" }}>
                Best Value
              </div>
              
              <div style={{ textAlign: "center" }}>
                <h3 style={{ fontSize: "24px", color: "var(--text-main)", marginBottom: "8px" }}>Pro Innovation Kit</h3>
                <div style={{ fontSize: "48px", fontWeight: "800", color: "var(--text-main)", margin: "24px 0" }}>
                  ₹5,999<span style={{ fontSize: "16px", color: "var(--text-light)", fontWeight: "normal" }}>/kit</span>
                </div>
                <p style={{ color: "var(--text-light)", marginBottom: "32px", fontSize: "15px", lineHeight: "1.6" }}>
                  Professional grade prototyping. The ultimate hardware package for serious builders.
                </p>
              </div>
              
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px 0", textAlign: "left", display: "flex", flexDirection: "column", gap: "16px", color: "var(--text-light)" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "var(--accent)", fontSize: "20px", fontWeight: "bold" }}>✓</span> Professional Soldering Station
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "var(--accent)", fontSize: "20px", fontWeight: "bold" }}>✓</span> Advanced Microcontrollers
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "var(--accent)", fontSize: "20px", fontWeight: "bold" }}>✓</span> Pro Modules & Expansion Boards
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "var(--accent)", fontSize: "20px", fontWeight: "bold" }}>✓</span> High-grade Tool Set
                </li>
              </ul>

              <button className="theme-btn" style={{ width: "100%", marginTop: "auto", background: "var(--accent)", color: "#000" }} onClick={() => showToast("Added to Cart!")}>
                Buy Pro Kit
              </button>
            </div>
          </div>
        </section>
      </main>
    </ThemeLayout>
  );
};

export default PricingPage;
