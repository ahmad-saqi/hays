const Ambition = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6 py-8 md:py-16">
      {/* Main content - spans full width on mobile, 2/3 on desktop */}
      <div className="lg:col-span-2 space-y-4 md:space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          We share your ambition.
        </h1>
        <p className="text-sm sm:text-base">
          As your lifelong career partner, we're with you every step of the way
          – whether you're looking for your next role, planning a career change,
          or aiming to climb the ladder. With our expansive employer network,
          up-to-the-minute career advice, and cutting-edge technology, we're
          here to help you get where you want to go – and beyond.
        </p>

        <h2 className="text-lg sm:text-xl font-semibold">
          Here's how we're working for your tomorrow:
        </h2>

        <div>
          <ul className="list-disc list-inside space-y-2 sm:space-y-3 md:space-y-4 text-sm sm:text-base">
            <li className="pl-2 -indent-2">
              Explore thousands of jobs across 21+ sectors – powered by
              exclusive employer partnerships and smart search tools.
            </li>
            <li className="pl-2 -indent-2">
              Upskill for free with My Learning – our expert-curated platform
              offering training and development to boost your career.
            </li>
            <li className="pl-2 -indent-2">
              Download the Hays app – and discover a world of job opportunities
              at your fingertips
            </li>
          </ul>
        </div>
      </div>

      {/* Sidebar - appears below on mobile, to the right on desktop */}
      <div className="bg-yellow-100 rounded-xl h-fit p-4 sm:p-6 order-first lg:order-last">
        <h1 className="text-xl sm:text-2xl font-semibold">Submit your CV</h1>
        <p className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base">
          Upload your CV today to join our Talent Networks. We'll connect you
          with top UK employers and new opportunities.
        </p>
        <button className="mt-3 sm:mt-4 bg-green-200 hover:bg-green-300 transition-colors py-1.5 w-full sm:w-40 rounded-sm text-sm sm:text-base">
          Upload CV
        </button>
      </div>
    </div>
  );
};

export default Ambition;
