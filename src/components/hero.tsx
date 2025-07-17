import HeroImg from "../assets/img/hero.webp";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "400px", // Added minimum height for better mobile display
      }}
      className="flex items-center"
    >
      <div className="max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 lg:py-16">
          {/* Content column */}
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
              Ready for your
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-4 sm:mb-6">
              next career move?
            </h2>

            {/* Search form */}
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="keywords"
                  className="text-lg sm:text-xl md:text-2xl font-bold text-black"
                >
                  Enter job title or keyword
                </label>
                <input
                  type="text"
                  id="keywords"
                  className="rounded-md border border-black bg-black/20 py-2 px-4 w-full max-w-md mx-auto lg:mx-0 text-black placeholder-black/70"
                  placeholder="Enter job title or keyword"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="location"
                  className="text-lg sm:text-xl md:text-2xl font-bold text-black"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  className="rounded-md border border-black bg-black/20 py-2 px-4 w-full max-w-md mx-auto lg:mx-0 text-black placeholder-black/70"
                  placeholder="Enter location"
                />
              </div>

              <button className="text-lg sm:text-xl md:text-2xl font-semibold py-2 px-6 bg-blue-500 hover:bg-blue-600 transition-colors rounded-md w-full sm:w-96 max-w-md mx-auto lg:mx-0 text-white">
                Search Jobs
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
