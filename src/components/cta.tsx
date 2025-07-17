import { Search, X } from "lucide-react";
import CTAImg from "../assets/img/ctaimg.webp";

const CTA = () => {
  return (
    <div className="pt-8 md:pt-16 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Sign up card */}
      <div className="bg-white rounded-md px-6 sm:px-8 md:px-12 py-6 md:py-8 border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex gap-4 sm:gap-6 md:gap-8 items-center">
          <Search className="w-6 h-6 flex-shrink-0" />
          <div>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold">
              Sign up to My Learning
            </p>
            <p className="text-sm sm:text-base">
              Free, online training courses to get you market-ready for your
              next job.
              <a
                href="#"
                className="text-blue-500 hover:underline font-semibold ml-1"
              >
                Search courses
              </a>
            </p>
          </div>
        </div>
        <button className="rounded-full border-2 border-black p-1 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center self-end sm:self-auto">
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Testimonial section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 sm:mt-12 md:mt-16 gap-8">
        <div className="flex justify-center order-2 lg:order-1">
          <img
            src={CTAImg}
            alt="Happy professional"
            className="w-full max-w-md lg:max-w-none object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-3 sm:gap-4 order-1 lg:order-2">
          <p className="text-base sm:text-lg md:text-lg">
            "From our first conversation, Rob was professional, clear, and
            efficient. Every interaction was transparent and well-communicated.
            He guided me smoothly through the recruitment process, often
            answering questions before I even asked. Thanks to Rob's support,
            I'm now thriving in my new role as an internal audit manager."
          </p>
          <p className="font-semibold text-base sm:text-lg md:text-lg">
            - Internal Audit Manager, Professional Services PLC
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
