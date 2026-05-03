import Hero from "../components/Hero";
import Challenge from "../components/Challenge";
import Services from "../components/Services";
import Insights from "../components/Insights";
import CTA from "../components/CTA";
import Impact from "../components/Impact"; // ✅ FIX INI
import WhoWeServe from "../components/WhoWeServe";
import Values from "../components/Values";
import Promise from "../components/Promise";
import Trust from "../components/Trust";
import WhyElevea from "../components/WhyElevea";
import VisionMission from "../components/VisionMission";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <VisionMission />  
      <WhyElevea />   {/* (ini bisa jadi Vision/Mission kalau diisi ulang) */}
      <Challenge />
      <Impact />
      <WhoWeServe />
      <Trust />
      <Values />
      <Insights />
      <Promise />
      <CTA />
    </div>
  );
}

export default Home;
