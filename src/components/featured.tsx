import CareerImg from "../assets/img/career.webp";

const Featured = () => {
  return (
    <div className="py-10 md:py-20 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
        Our featured{" "}
        <span className="font-light"> reports, interactive guides & tools</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 sm:mt-10">
        {/* Item 1 */}
        <div className="bg-white p-6 sm:p-8 md:p-10 flex flex-col gap-3 sm:gap-4 order-1">
          <p className="text-xl sm:text-2xl font-semibold">
            Now available: Hays UK 2025 Working Well Report
          </p>
          <p className="text-sm sm:text-base">
            Explore our Hays UK 2025 Working Well Report to uncover key insights
            from over 3,600 professionals and employers across the UK. Discover
            how wellbeing is influencing attraction, retention, and performance,
            and what steps organisations must take to support their people more
            effectively.
          </p>
          <a
            href="#"
            className="text-blue-500 font-semibold hover:underline text-sm sm:text-base"
          >
            Discover the full findings
          </a>
        </div>

        {/* Image 1 */}
        <div className="order-2 lg:order-3">
          <img
            src={CareerImg}
            alt="Working Well Report"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="order-4 lg:order-4">
          <img
            src={CareerImg}
            alt="Working Well Report"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Item 2 */}
        <div className="bg-white p-6 sm:p-8 md:p-10 flex flex-col gap-3 sm:gap-4 order-3 lg:order-5">
          <p className="text-xl sm:text-2xl font-semibold">
            Now available: Hays UK 2025 Working Well Report
          </p>
          <p className="text-sm sm:text-base">
            Explore our Hays UK 2025 Working Well Report to uncover key insights
            from over 3,600 professionals and employers across the UK. Discover
            how wellbeing is influencing attraction, retention, and performance,
            and what steps organisations must take to support their people more
            effectively.
          </p>
          <a
            href="#"
            className="text-blue-500 font-semibold hover:underline text-sm sm:text-base"
          >
            Discover the full findings
          </a>
        </div>

        {/* Item 3 */}
        <div className="bg-white p-6 sm:p-8 md:p-10 flex flex-col gap-3 sm:gap-4 order-5 lg:order-7">
          <p className="text-xl sm:text-2xl font-semibold">
            Now available: Hays UK 2025 Working Well Report
          </p>
          <p className="text-sm sm:text-base">
            Explore our Hays UK 2025 Working Well Report to uncover key insights
            from over 3,600 professionals and employers across the UK. Discover
            how wellbeing is influencing attraction, retention, and performance,
            and what steps organisations must take to support their people more
            effectively.
          </p>
          <a
            href="#"
            className="text-blue-500 font-semibold hover:underline text-sm sm:text-base"
          >
            Discover the full findings
          </a>
        </div>

        {/* Image 3 */}
        <div className="order-6 lg:order-8">
          <img
            src={CareerImg}
            alt="Working Well Report"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
