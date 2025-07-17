const Ambition = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-6 py-16">
      <div className="col-span-2 space-y-6">
        <h1 className="text-5xl font-bold">We share your ambition.</h1>
        <p>
          As your lifelong career partner, we’re with you every step of the way
          – whether you’re looking for your next role, planning a career change,
          or aiming to climb the ladder. With our expansive employer network,
          up-to-the-minute career advice, and cutting-edge technology, we're
          here to help you get where you want to go – and beyond.
        </p>
        <h2 className="text-xl font-semibold">
          Here's how we’re working for your tomorrow:
        </h2>
        <div>
          <ul className="list-disc list-inside space-y-4">
            <li>
              Explore thousands of jobs across 21+ sectors – powered by
              exclusive employer partnerships and smart search tools.
            </li>
            <li>
              Upskill for free with My Learning – our expert-curated platform
              offering training and development to boost your career.
            </li>
            <li>
              Download the Hays app – and discover a world of job opportunities
              at your fingertips
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-yellow-100 rounded-xl h-fit p-6">
        <h1 className="text-2xl font-semibold">Submit your CV</h1>
        <p className="mt-8">
          Upload your CV today to join our Talent Networks. We’ll connect you
          with top UK employers and new opportunities.
        </p>
        <button className="mt-4 bg-green-200  py-1.5 w-40 rounded-sm">Upload CV</button>
      </div>
    </div>
  );
};

export default Ambition;
