const Career = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 space-y-10 md:space-y-16">
      {/* Intro section */}
      <div className="space-y-4 md:space-y-6 w-full md:w-[75%]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          As your career evolves,
          <span className="font-light">
            we're here with you on your journey.
          </span>
        </h1>
        <p className="text-sm sm:text-base">
          People are at the centre of everything we do. We don't just place
          people into jobs but invest in lifelong partnerships that empower you
          to realise your ambition. We're backed by over 50 years of success,
          and a workforce of over 10,000 people across 31 countries.
        </p>
        <p className="text-sm sm:text-base">
          Being so much more than just a specialist recruitment business, what
          really set us apart is our knowledge through scale, deep
          understanding, and ability to meet your needs – wherever you are in
          your career journey.
        </p>
      </div>

      {/* Jobs section */}
      <div className="space-y-4 md:space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Browse latest jobs <span className="font-light">by profession </span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <a
            href="#"
            className="text-blue-500 hover:underline font-semibold text-sm sm:text-base"
          >
            Accounting and finance jobs
          </a>
          <a
            href="#"
            className="text-blue-500 hover:underline font-semibold text-sm sm:text-base"
          >
            Engineering jobs
          </a>
          <a
            href="#"
            className="text-blue-500 hover:underline font-semibold text-sm sm:text-base"
          >
            Healthcare jobs
          </a>
          <a
            href="#"
            className="text-blue-500 hover:underline font-semibold text-sm sm:text-base"
          >
            Tech / IT jobs
          </a>
          <a
            href="#"
            className="text-blue-500 hover:underline font-semibold text-sm sm:text-base"
          >
            Legal jobs
          </a>
          <a
            href="#"
            className="text-blue-500 hover:underline font-semibold text-sm sm:text-base"
          >
            Other jobs
          </a>
          <a
            href="#"
            className="text-blue-500 hover:underline font-semibold text-sm sm:text-base"
          >
            More jobs
          </a>
          <a
            href="#"
            className="text-blue-500 hover:underline font-semibold text-sm sm:text-base"
          >
            More jobs
          </a>
          <a
            href="#"
            className="text-blue-500 hover:underline font-semibold text-sm sm:text-base"
          >
            More jobs
          </a>
        </div>
      </div>
    </div>
  );
};

export default Career;
