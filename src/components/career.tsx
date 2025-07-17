
const Career = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10 space-y-16">
      <div className="space-y-6 w-[75%]">
        <h1 className="text-4xl font-semibold">
          As your career evolves,
          <span className="font-light">
            we’re here with you on your journey.
          </span>
        </h1>
        <p>
          People are at the centre of everything we do. We don’t just place
          people into jobs but invest in lifelong partnerships that empower you
          to realise your ambition. We’re backed by over 50 years of success,
          and a workforce of over 10,000 people across 31 countries.
        </p>
        <p>
          Being so much more than just a specialist recruitment business, what
          really set us apart is our knowledge through scale, deep
          understanding, and ability to meet your needs – wherever you are in
          your career journey.
        </p>
      </div>
      <div className="space-y-6 ">
        <h1 className="text-4xl font-semibold">
          Browse latest jobs <span className="font-light">by profession </span>
        </h1>
        <div className="grid grid-cols-3 space-y-4">
          <a href="#" className="text-blue-500 font-semibold">Accounting and finance jobs</a>
          <a href="#" className="text-blue-500 font-semibold">Engineering jobs</a>
          <a href="#" className="text-blue-500 font-semibold">Healthcare jobs</a>
          <a href="#" className="text-blue-500 font-semibold">Tech / IT jobs</a>
          <a href="#" className="text-blue-500 font-semibold"> Legal jobs</a>
          <a href="#" className="text-blue-500 font-semibold"> Other jobs</a>
          <a href="#" className="text-blue-500 font-semibold"> More jobs</a>
          <a href="#" className="text-blue-500 font-semibold"> More jobs</a>
          <a href="#" className="text-blue-500 font-semibold"> More jobs</a>
        </div>
      </div>
    </div>
  );
}

export default Career