import ThemeLayout from "../components/ThemeLayout";

import Hero from "../components/Hero";
import InnovationHub from "../components/InnovationHub";
import Kits from "../components/Kits";
import Guides from "../components/Guides";
import KnownFor from "../components/KnownFor";
import Values from "../components/Values";
import CTA from "../components/CTA";

export default function HomePage(){

  return(

    <ThemeLayout>

      <Hero/>

      <InnovationHub/>

      <Kits/>

      <Guides/>

      <KnownFor/>

      <Values/>

      <CTA/>

    </ThemeLayout>

  )

}