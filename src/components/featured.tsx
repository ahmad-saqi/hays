import CareerImg from "../assets/img/career.webp";
const Featured = () => {
  return (
    <div className="py-20 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-semibold">
        Our featured{" "}
        <span className="font-light"> reports, interactive guides & tools</span>
      </h1>
      <div className="grid grid-cols-2 space-y-8 mt-10">
        <div className="bg-white p-10 flex flex-col gap-4">
          <p className="text-2xl font-semibold">
            Now available: Hays UK 2025 Working Well Report
          </p>
          <p>
            Explore our Hays UK 2025 Working Well Report to uncover key insights
            from over 3,600 professionals and employers across the UK. Discover
            how wellbeing is influencing attraction, retention, and performance,
            and what steps organisations must take to support their people more
            effectively.{" "}
          </p>
          <a href="#" className="text-blue-500 font-semibold hover:underline">
            Discover the full findings
          </a>
        </div>
        <div>
          <img src={CareerImg} alt="" />
        </div>
        <div>
          <img src={CareerImg} alt="" />
        </div>
        <div className="bg-white p-10 flex flex-col gap-4">
          <p className="text-2xl font-semibold">
            Now available: Hays UK 2025 Working Well Report
          </p>
          <p>
            Explore our Hays UK 2025 Working Well Report to uncover key insights
            from over 3,600 professionals and employers across the UK. Discover
            how wellbeing is influencing attraction, retention, and performance,
            and what steps organisations must take to support their people more
            effectively.{" "}
          </p>
          <a href="#" className="text-blue-500 font-semibold hover:underline">
            Discover the full findings
          </a>
        </div>
        
        <div className="bg-white p-10 flex flex-col gap-4 h-full">
          <p className="text-2xl font-semibold">
            Now available: Hays UK 2025 Working Well Report
          </p>
          <p>
            Explore our Hays UK 2025 Working Well Report to uncover key insights
            from over 3,600 professionals and employers across the UK. Discover
            how wellbeing is influencing attraction, retention, and performance,
            and what steps organisations must take to support their people more
            effectively.{" "}
          </p>
          <a href="#" className="text-blue-500 font-semibold hover:underline">
            Discover the full findings
          </a>
        </div>
        <div>
          <img src={CareerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
