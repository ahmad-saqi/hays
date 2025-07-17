import HeroImg from "../assets/img/hero.webp"
const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-2">
        <div className="space-y-4 py-16 ">
          <h1 className="text-5xl font-bold">Ready for your</h1>
          <h2 className="text-5xl font-semibold">next career move?</h2>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-2xl font-bold">
              Enter job title or keyword
            </label>
            <input
              type="text"
              className="rounded-md border border-black bg-black/20 py-2 px-2 w-96"
              placeholder="Enter job title or keyword"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-2xl font-bold">
              Enter job title or keyword
            </label>
            <input
              type="text"
              className="rounded-md border border-black bg-black/20 py-2 px-2 w-96"
              placeholder="Enter job title or keyword"
            />
          </div>
          <button className="text-2xl font-semibold py-2 bg-blue-500 rounded-md w-96 text-white">
            Search Jobs
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Hero