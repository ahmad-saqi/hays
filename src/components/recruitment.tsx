import { ChevronRight } from "lucide-react";
import WWA1 from "../assets/img/wwa1.svg";
import WWA2 from "../assets/img/wwa2.svg";
import WWA3 from "../assets/img/wwa3.svg";
import WWA4 from "../assets/img/wwa4.svg";
import WWA5 from "../assets/img/wwa5.svg";

const Recruitment = () => {
  const recruitmentSteps = [
    {
      number: 1,
      title: "Meet experts you can trust",
      description:
        "Your application goes directly to your very own dedicated, expert consultant.",
      buttonText: "Search Jobs",
    },
    {
      number: 2,
      title: "Initial screening",
      description:
        "We'll review your qualifications and match you with suitable opportunities.",
      buttonText: "Learn more",
    },
    {
      number: 3,
      title: "Interview preparation",
      description:
        "Get expert guidance and coaching for your upcoming interviews.",
      buttonText: "Get prepared",
    },
    {
      number: 4,
      title: "Interview process",
      description:
        "We'll coordinate and support you throughout the interview stages.",
      buttonText: "Our approach",
    },
    {
      number: 5,
      title: "Offer and onboarding",
      description:
        "We'll help negotiate offers and ensure a smooth transition.",
      buttonText: "Success stories",
    },
  ];

  return (
    <div className="py-8 md:py-16 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-10">
        Our recruitment process
      </h1>

      {/* Recruitment steps - horizontal scroll on mobile, full grid on desktop */}
      <div className="overflow-x-auto pb-4 md:pb-0">
        <div className="flex lg:grid lg:grid-cols-5 gap-4 lg:gap-0 w-max lg:w-full py-6 lg:py-10">
          {recruitmentSteps.map((step, index) => (
            <div
              key={step.number}
              className="flex flex-col gap-0 items-center w-64 md:w-auto"
            >
              <div className="flex">
                <div className="flex flex-col justify-between items-center min-h-72 md:min-h-96 px-4 md:px-0">
                  <div className="flex flex-col gap-3 md:gap-4 items-center text-center">
                    <div className="bg-white rounded-full size-16 md:size-28 flex justify-center items-center">
                      <p className="text-2xl md:text-4xl font-semibold">
                        {step.number}
                      </p>
                    </div>
                    <p className="font-bold text-lg md:text-xl">{step.title}</p>
                    <p className="text-sm md:text-base">{step.description}</p>
                  </div>
                  <button className="bg-green-300 hover:bg-green-400 transition-colors py-1.5 px-4 md:px-6 rounded-sm font-semibold text-sm md:text-base mt-3 md:mt-0">
                    {step.buttonText}
                  </button>
                </div>
                {index !== recruitmentSteps.length - 1 && (
                  <div className="hidden md:flex items-start mt-10 md:mt-16 text-blue-500 justify-center w-fit">
                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured employers section */}
      <div className="flex flex-col sm:flex-row justify-between mt-8 md:mt-10 gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Featured employers now recruiting
        </h1>
        <a
          href="#"
          className="text-blue-500 hover:underline font-semibold self-start sm:self-center"
        >
          View all
        </a>
      </div>

      {/* Employer logos - grid layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mt-6 md:mt-8">
        {[WWA1, WWA2, WWA3, WWA4, WWA5, WWA4].map((logo, index) => (
          <div
            key={index}
            className="bg-white aspect-square p-4 md:p-6 flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`Employer logo ${index + 1}`}
              className="w-full h-auto max-h-16 md:max-h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recruitment;
