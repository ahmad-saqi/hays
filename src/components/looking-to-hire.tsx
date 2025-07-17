
const LookingToHire = () => {
  return (
    <div className="py-16 max-w-screen-xl mx-auto flex justify-center">
      <div className="relative bg-white pl-28 py-4 px-4 rounded-md flex gap-4 items-center max-w-screen-lg">
        <div className="absolute -left-18 size-40 border-2 border-gray-200 rounded-full ">
          <img
            src="https://www.hays.co.uk/documents/20151/47267190/Small-Slice-My-Hays-139x139.webp/c1925109-2839-c13b-7a10-17d1cf2556dd?t=1674065840565"
            alt=""
            className="rounded-full border-[10px] border-white"
          />
        </div>
        <div className="">
          <h1 className="text-4xl font-semibold">Are you looking to hire?</h1>
          <p className="">
            Whether you’re looking for people to transform your organisation or
            the services to empower a business transformation – we’ll achieve
            your goals together.
          </p>
        </div>
        <button className="bg-blue-500 text-white py-1.5 w-40 rounded-sm">
          Find out more
        </button>
      </div>
    </div>
  );
}

export default LookingToHire