import React from "react";
import ThemeLayout from "../components/ThemeLayout";
import { Phone, Mail, MapPin } from "lucide-react";

const InstagramIcon = ({ size = 24, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 24, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const ContactPage = ({ showToast }) => {

  return (

    <ThemeLayout>
      <style>{`
        .shine-btn {
          position: relative;
          overflow: hidden;
          background: var(--text-main);
          color: var(--bg-main);
          border: 1px solid var(--border);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
          z-index: 1;
        }
        .shine-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }
        .dark .shine-btn:hover {
          box-shadow: 0 12px 24px rgba(255,255,255,0.15);
        }
        .shine-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -150%;
          width: 60%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent);
          transform: skewX(-25deg);
          animation: ultra-shine 3s infinite;
          z-index: -1;
        }
        .dark .shine-btn::before {
          background: linear-gradient(120deg, transparent, rgba(0,0,0,0.5), transparent);
        }
        @keyframes ultra-shine {
          0% { left: -150%; }
          15% { left: 200%; }
          100% { left: 200%; }
        }
      `}</style>
      <main className="contact-page fade-in">

        {/* HERO SECTION */}

        <section className="page-section text-center">

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
              color: "var(--text-main)"
            }}
          >
            Get in Touch
          </h1>


          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              color: "var(--text-light)"
            }}
          >
            We're here to help you innovate and scale with robotics and IoT.
          </p>

        </section>



        {/* CONTACT CARDS */}

        <section className="page-section">

          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "30px"
            }}
          >



            {/* PHONE */}
            <div className="premium-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ padding: '10px', borderRadius: '50%', background: 'rgba(255, 216, 77, 0.15)' }}>
                  <Phone size={24} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 style={{ color: "var(--text-main)", margin: 0, fontSize: "1.4rem" }}>
                  Phone
                </h3>
              </div>
              <p style={{ color: "var(--text-light)", marginBottom: "24px", fontSize: "1.05rem" }}>
                89036 56036
              </p>
              <button
                className="theme-btn shine-btn"
                style={{ width: '100%', marginTop: 'auto' }}
                onClick={() => {
                  navigator.clipboard.writeText("89036 56036");
                  showToast("Phone copied");
                }}
              >
                Copy Number
              </button>
            </div>



            {/* EMAIL */}
            <div className="premium-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ padding: '10px', borderRadius: '50%', background: 'rgba(255, 216, 77, 0.15)' }}>
                  <Mail size={24} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 style={{ color: "var(--text-main)", margin: 0, fontSize: "1.4rem" }}>
                  Email
                </h3>
              </div>
              <p style={{ color: "var(--text-light)", marginBottom: "24px", fontSize: "1.05rem", wordBreak: "break-all" }}>
                aethonixsolutions@gmail.com
              </p>
              <button
                className="theme-btn shine-btn"
                style={{ width: '100%', marginTop: 'auto' }}
                onClick={() => {
                  navigator.clipboard.writeText("aethonixsolutions@gmail.com");
                  showToast("Email copied");
                }}
              >
                Copy Email
              </button>
            </div>





            {/* LOCATION */}
            <div className="premium-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ padding: '10px', borderRadius: '50%', background: 'rgba(255, 216, 77, 0.15)' }}>
                  <MapPin size={24} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 style={{ color: "var(--text-main)", margin: 0, fontSize: "1.4rem" }}>
                  Location
                </h3>
              </div>
              <p style={{ color: "var(--text-light)", marginBottom: "24px", fontSize: "1.05rem" }}>
                JIO TOWER,NEAR RENUGAMBAL TEMPLE,CSI NAGAR,PRESS COLONY,COIMBATORE
                TAMIL NADU- 641019
              </p>
              <button
                className="theme-btn shine-btn"
                style={{ width: '100%', marginTop: 'auto' }}
                onClick={() => {
                  navigator.clipboard.writeText("JIO TOWER,NEAR RENUGAMBAL TEMPLE,CSI NAGAR,PRESS COLONY,COIMBATORETAMIL NADU- 641019");
                  showToast("Address copied");
                }}
              >
                Copy Address
              </button>
            </div>
          </div>
        </section>



        {/* CONNECT WITH US - 3D TILES */}

        <section className="page-section" style={{ background: 'var(--bg-main)' }}>

          <div className="container text-center">

            <h2 className="section-title" style={{ marginBottom: "60px" }}>Connect with Us</h2>

            <div className="social-3d-grid">
              <ul className="social-3d-list">
                <li style={{ "--tile-color": "#ff0000" }}>

                  <a href="https://www.youtube.com/@aethonixsolutions?si=gNThVsMAOJ7vK0lQ" target="_blank" rel="noopener noreferrer">

                    <span></span><span></span><span></span><span></span>

                    <span className="social-icon">

                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>

                    </span>

                    <span className="social-name"></span>

                  </a>

                </li>



                <li style={{ "--tile-color": "#e4405f" }}>

                  <a href="https://instagram.com/_aethonix_solutions" target="_blank" rel="noopener noreferrer">

                    <span></span><span></span><span></span><span></span>

                    <span className="social-icon">

                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>

                    </span>

                    <span className="social-name"></span>

                  </a>

                </li>



                <li style={{ "--tile-color": "#0a66c2" }}>

                  <a href="https://www.linkedin.com/company/aethonix-solutions/" target="_blank" rel="noopener noreferrer">

                    <span></span><span></span><span></span><span></span>

                    <span className="social-icon">

                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>

                    </span>

                    <span className="social-name"></span>

                  </a>

                </li>

              </ul>

            </div>

          </div>

        </section>

      </main>

    </ThemeLayout>

  );

};

export default ContactPage;