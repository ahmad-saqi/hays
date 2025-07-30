import { MoveRight } from "lucide-react";
import HeroImg from "../assets/img/hero.jpg";
import Navabr from "./navbar";
const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex items-center h-[calc(100vh-128px)]"
    >
      <div className="absolute top-0 left-0 w-full">
        <Navabr />
      </div>
      <div className="max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 lg:py-16 ">
          {/* Content column */}
          <div className="flex  items-center justify-start gap-6">
            <div className="w-1.5 h-full bg-teal-400"></div>
            <div className="flex flex-col gap-8">
              <p className="text-6xl  text-white">Building futures</p>
              <div className="flex items-center gap-4">
                <button className="bg-teal-400 rounded w-fit text-xl  px-6 py-3 font-semibold">
                  Find your next hire
                </button>
                <MoveRight className="size-10 text-white" />
              </div>
              <button className="bg-blue-500 w-fit text-xl rounded text-white  px-6 py-3 font-semibold">
                Looking for jobs?
              </button>
            </div>
          </div>

          {/* Spacer column - only visible on desktop */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
