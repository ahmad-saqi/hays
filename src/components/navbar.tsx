import Logo from "@/assets/img/logo.webp"
const Navabr = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="flex gap-8 text-xl font-semibold">
          <button>Job Search</button>
          <button>Send us your CV</button>
          <button>Our Expertise</button>
          <button>Advice & Learning</button>
          <button>My Account  </button>
        </div>
      </div>
    </div>
  )
}

export default Navabr