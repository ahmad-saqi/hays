import Ambition from "@/components/ambition";
import Career from "@/components/career";
import CareerAdvice from "@/components/career-advice";
import CareerHub from "@/components/career-hub";
import CTA from "@/components/cta";
import Featured from "@/components/featured";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import LookingToHire from "@/components/looking-to-hire";
import Navabr from "@/components/navbar";
import Recruitment from "@/components/recruitment";

const Landing = () => {
  return (
    <div>
      <Navabr />
      <Hero />
      <Career />
      <div className="bg-blue-950">
        <LookingToHire />
      </div>
      <CareerAdvice />
      <div className="bg-yellow-100">
        <Recruitment />
      </div>
      <Ambition />
      <div className="bg-yellow-100">
        <Featured />
      </div>
      <div className="bg-blue-300">
        <CareerHub />
      </div>
      <div className="bg-yellow-100">
        <CTA />
      </div>
      <div className="bg-blue-950">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
