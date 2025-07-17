import Ambition from "@/components/ambition";
import Career from "@/components/career";
import CareerAdvice from "@/components/career-advice";
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
      <Ambition/>
      {/* <div className="bg-yellow-100">
        <Ambition />
      </div> */}
    </div>
  );
};

export default Landing;
