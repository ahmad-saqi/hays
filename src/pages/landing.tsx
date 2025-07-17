import Career from "@/components/career";
import CareerAdvice from "@/components/career-advice";
import Hero from "@/components/hero";
import LookingToHire from "@/components/looking-to-hire";
import Navabr from "@/components/navbar";

const Landing = () => {
  return (
    <div>
      <Navabr/>
      <Hero/>
      <Career/>
      <div className="bg-blue-950">
        <LookingToHire/>
      </div>
      <CareerAdvice/>
    </div>
  );
}

export default Landing