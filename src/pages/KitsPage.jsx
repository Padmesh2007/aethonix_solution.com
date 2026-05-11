import React from "react";
import ThemeLayout from "../components/ThemeLayout";
import Kits from "../components/Kits";
import CTA from "../components/CTA";

const KitsPage = ({ showToast }) => {

  return (

    <ThemeLayout>

      <main className="fade-in">

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
              color: "var(--text-main)",
              fontSize: "clamp(48px, 8vw, 120px)"
            }}
          >
            Bootcamp Kits
          </h1>


          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              color: "var(--text-light)"
            }}
          >
            Explore robotics and electronics kits designed for learning and innovation.
          </p>

        </section>



        <section className="page-section">

          <Kits />

        </section>

        <CTA showToast={showToast} />

      </main>

    </ThemeLayout>

  );

};

export default KitsPage;