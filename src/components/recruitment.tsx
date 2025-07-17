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
    <div className="py-16 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-semibold">Our recruitment process</h1>
      <div className="text-center grid grid-cols-5 gap-0 py-10">
        {recruitmentSteps.map((step, index) => (
          <div key={step.number} className="flex flex-col gap-0 items-center">
            <div className="flex">
              <div className="flex flex-col justify-between items-center min-h-96">
                <div className="flex flex-col gap-4 items-center">
                  <div className="bg-white rounded-full size-28 flex justify-center items-center">
                    <p className="text-4xl font-semibold">{step.number}</p>
                  </div>
                  <p className="font-bold text-xl">{step.title}</p>
                  <p>{step.description}</p>
                </div>
                <button className="bg-green-300 py-1.5 px-6 rounded-sm font-semibold">
                  {step.buttonText}
                </button>
              </div>
              {index !== recruitmentSteps.length - 1 && (
                <div className="flex items-start mt-10 text-blue-500 justify-center w-fit">
                  <ChevronRight className="w-8 h-8" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-10">
        <h1 className="text-4xl font-semibold">
          Featured employers now recruiting
        </h1>
        <a href="#" className="text-blue-500 hover:underline font-semibold">
          View all
        </a>
      </div>
      <div className="grid grid-cols-6 gap-8 mt-8">
        <div className="bg-white aspect-square p-6">
          <img src={WWA1} alt="" className="size-full" />
        </div>
        <div className="bg-white aspect-square p-6">
          <img src={WWA2} alt="" className="size-full" />
        </div>
        <div className="bg-white aspect-square p-6">
          <img src={WWA3} alt="" className="size-full" />
        </div>
        <div className="bg-white aspect-square p-6">
          <img src={WWA4} alt="" className="size-full" />
        </div>
        <div className="bg-white aspect-square p-6">
          <img src={WWA5} alt="" className="size-full" />
        </div>
        <div className="bg-white aspect-square p-6">
          <img src={WWA4} alt="" className="size-full" />
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
