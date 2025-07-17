import CareerImg from '../assets/img/hub.webp' 
const CareerHub = () => {
  return (
    <div className="py-20 max-w-screen-xl mx-auto grid grid-cols-9">
      <div className=" col-span-5 flex justify-end">
        <img src={CareerImg} alt="" className="h-full -mr-20" />
      </div>
      <div className="relative col-span-3">
        <div className='space-y-8 p-8 absolute top-1/4 bg-white'>
          <p className='text-3xl font-semibold'>Visit our career hub</p>
          <p>
            We’ve got all the insights and tips you need to reach your career
            goals in 2025, whether that’s finding a new job, getting a promotion
            or futureproofing your skills.
          </p>
          <button className='bg-green-300 py-1.5 px-10 rounded-sm'>Access the hub noe</button>
        </div>
      </div>
    </div>
  );
}

export default CareerHub