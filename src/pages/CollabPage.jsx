import React from "react";
import ThemeLayout from "../components/ThemeLayout";
import CTA from "../components/CTA";
import { Handshake } from "lucide-react";

const CollabPage = ({ showToast }) => {

  return (

    <ThemeLayout>

      <main className="fade-in">

        <section className="page-section text-center" style={{ paddingBottom: '40px' }}>

          <h4
            style={{
              color: "var(--accent)",
              fontWeight: 600
            }}
          >
            Aethonix Solutions
          </h4>

          <h1
            className="hero-title"
            style={{
              marginBottom: "24px",
              color: "var(--text-main)",
              fontSize: "clamp(48px, 8vw, 120px)"
            }}
          >
            Incubation & Partnerships
          </h1>

          <p
            style={{
              maxWidth: "500px",
              margin: "0 auto",
              color: "var(--text-light)"
            }}
          >
            Driving innovation through strategic partnerships and incubation programs.
          </p>

        </section>

        {/* INCUBATION SECTION */}
        <section className="page-section" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="section-title" style={{ color: "var(--text-main)" }}>
              Incubation Hubs
            </h2>
            <p className="sub-text" style={{ margin: '0 auto' }}>
              Where our journey is nurtured and scaled.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "30px",
            }}
          >
            <div className="premium-card group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div className="mb-5 w-24 h-24 rounded-full bg-white flex items-center justify-center p-3 shadow-xl hover:scale-110 transition-transform duration-300 ring-4 ring-black/5 dark:ring-white/10 group-hover:shadow-[0_0_25px_rgba(255,216,77,0.4)]">
                <img src={new URL("../assets/aicraise.png.png", import.meta.url).href} alt="AIC RAISE" className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              <h3 style={{ color: "var(--text-main)", fontSize: "1.4rem", fontWeight: "700", marginBottom: "8px" }}>
                Incubated at
              </h3>
              <p style={{ color: "var(--text-main)", fontWeight: "600" }}>
                AIC RAISE
              </p>
              <p style={{ color: "var(--text-light)", fontSize: "0.95rem", marginTop: "4px" }}>
                Rathinam College of Arts and Science
              </p>
            </div>

            <div className="premium-card group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div className="mb-5 w-24 h-24 rounded-full bg-white flex items-center justify-center p-3 shadow-xl hover:scale-110 transition-transform duration-300 ring-4 ring-black/5 dark:ring-white/10 group-hover:shadow-[0_0_25px_rgba(255,216,77,0.4)]">
                <img src={new URL('../assets/srcas.png.jpg', import.meta.url).href} alt="SRCAS" className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              <h3 style={{ color: "var(--text-main)", fontSize: "1.4rem", fontWeight: "700", marginBottom: "8px" }}>
                Pre-Incubation
              </h3>
              <p style={{ color: "var(--text-main)", fontWeight: "600" }}>
                Established Space
              </p>
              <p style={{ color: "var(--text-light)", fontSize: "0.95rem", marginTop: "4px" }}>
                Sri Ramakrishna College of Arts and Science
              </p>
            </div>
          </div>

        </section>

        {/* COLLABORATIONS SECTION */}
        <section className="page-section" style={{ paddingTop: '40px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="section-title" style={{ color: "var(--text-main)" }}>
              Our Collaborations
            </h2>
            <p className="sub-text" style={{ margin: '0 auto' }}>
              Building the future together with our esteemed partners.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "30px",
            }}
          >
            <div className="premium-card group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div className="mb-5 w-24 h-24 rounded-full bg-white flex items-center justify-center p-3 shadow-xl hover:scale-110 transition-transform duration-300 ring-4 ring-black/5 dark:ring-white/10 group-hover:shadow-[0_0_25px_rgba(255,216,77,0.4)]">
                <img src={new URL('../assets/dhyanalab.png.jpg', import.meta.url).href} alt="Dhyana Lab" className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              <h3 style={{ color: "var(--text-main)", fontSize: "1.6rem", fontWeight: "700", marginBottom: "8px" }}>
                Dhyana Lab
              </h3>
              <p style={{ color: "var(--text-light)", fontSize: "1rem" }}>
                Technology & Research Partner
              </p>
            </div>

            <div className="premium-card group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div className="mb-5 w-24 h-24 rounded-full bg-white flex items-center justify-center p-2 shadow-xl hover:scale-110 transition-transform duration-300 ring-4 ring-black/5 dark:ring-white/10 group-hover:shadow-[0_0_25px_rgba(255,216,77,0.4)] bg-black">
                <img src={new URL('../assets/motolink.png.jpg', import.meta.url).href} alt="Moto Link" className="w-full h-full object-contain rounded-full bg-black scale-110" />
              </div>
              <h3 style={{ color: "var(--text-main)", fontSize: "1.6rem", fontWeight: "700", marginBottom: "8px" }}>
                Moto Link
              </h3>
              <p style={{ color: "var(--text-light)", fontSize: "1rem" }}>
                Strategic Connectivity Ally
              </p>
            </div>

            <div className="premium-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ marginBottom: '20px' }}>
                <Handshake size={36} style={{ color: 'var(--accent)', filter: 'drop-shadow(0px 0px 8px rgba(255, 216, 77, 0.4))' }} />
              </div>
              <h3 style={{ color: "var(--text-main)", fontSize: "1.6rem", fontWeight: "700", marginBottom: "8px" }}>
                Partnerships
              </h3>
              <p style={{ color: "var(--text-light)", fontSize: "1rem" }}>
                Open for collaboration with startups, institutions, and innovators.
              </p>
            </div>
          </div>

        </section>

        <CTA showToast={showToast} />

      </main>

    </ThemeLayout>

  );

};

export default CollabPage;