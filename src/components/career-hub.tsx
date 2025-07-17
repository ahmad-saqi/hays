import CareerImg from "../assets/img/hub.webp";

const CareerHub = () => {
  return (
    <div className="py-10 md:py-20 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-8">
        {/* Image column - shows first on mobile, then right-aligned on desktop */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-1">
          <img
            src={CareerImg}
            alt="Career hub illustration"
            className="h-auto max-h-[400px] lg:h-full lg:-mr-10 xl:-mr-20 object-contain"
          />
        </div>

        {/* Content column - shows second on mobile, then left-aligned on desktop */}
        <div className="lg:col-span-4 relative order-2 lg:order-2">
          <div className="space-y-4 sm:space-y-6 md:space-y-8 p-6 sm:p-8 bg-white lg:absolute lg:top-1/2 lg:-translate-y-1/2 w-full">
            <p className="text-2xl sm:text-3xl font-semibold">
              Visit our career hub
            </p>
            <p className="text-sm sm:text-base">
              We've got all the insights and tips you need to reach your career
              goals in 2025, whether that's finding a new job, getting a
              promotion or futureproofing your skills.
            </p>
            <button className="bg-green-300 hover:bg-green-400 transition-colors py-1.5 px-6 sm:px-10 rounded-sm text-sm sm:text-base">
              Access the hub now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHub;
