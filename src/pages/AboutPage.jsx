import React from "react";

import ThemeLayout from "../components/ThemeLayout";

import Hero from "../components/Hero";
import Guides from "../components/Guides";
import KnownFor from "../components/KnownFor";
import InnovationHub from "../components/InnovationHub";
import Values from "../components/Values";
import CTA from "../components/CTA";

const AboutPage = ({ showToast }) => {

  return (

    <ThemeLayout>

      <Hero />

      <Guides />

      <KnownFor />

      <InnovationHub showToast={showToast} />

      <Values />

      <CTA showToast={showToast} />

    </ThemeLayout>

  );

};

export default AboutPage;