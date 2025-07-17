const LookingToHire = () => {
  return (
    <div className="py-8 lg:py-16 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="relative bg-white pl-4 lg:pl-28 py-4 lg:py-6 px-4 rounded-lg flex flex-col lg:flex-row gap-4 lg:gap-6 items-center max-w-screen-lg w-full">
        <div className="absolute left-4 lg:-left-18 size-24 lg:size-40 border-2 border-gray-200 rounded-full">
          <img
            src="https://www.hays.co.uk/documents/20151/47267190/Small-Slice-My-Hays-139x139.webp/c1925109-2839-c13b-7a10-17d1cf2556dd?t=1674065840565"
            alt="Hays recruitment expert"
            className="rounded-full border-4 lg:border-[10px] border-white w-full h-full object-cover"
          />
        </div>
        <div className="space-y-2 text-center lg:text-left mt-24 lg:mt-0 ml-0 lg:ml-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Are you looking to hire?
          </h1>
          <p className="text-sm lg:text-base">
            Whether you're looking for people to transform your organisation or
            the services to empower a business transformation – we'll achieve
            your goals together.
          </p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white py-1.5 w-full lg:w-48 rounded-sm text-sm lg:text-base">
          Find out more
        </button>
      </div>
    </div>
  );
};

export default LookingToHire;
