import {  Search, X } from 'lucide-react'
import CTAImg from '../assets/img/ctaimg.webp'
const CTA = () => {
  return (
    <div className="pt-16 max-w-screen-xl mx-auto">
      <div className="bg-white rounded-md px-12 py-8 border flex justify-between items-center">
        <div className="flex gap-8 items-center">
          <Search />
          <div>
            <p className="text-2xl font-semibold">Sign up to My Learning</p>
            <p className="">
              Free, online training courses to get you market-ready for your
              next job.
              <a
                href="#"
                className="text-blue-500 hover:underline font-semibold"
              >
                {" "}
                Search courses
              </a>
            </p>
          </div>
        </div>
        <div className="rounded-full border-2 border-black p-1 size-10 flex items-center justify-center">
          <X />
        </div>
      </div>
      <div className="grid grid-cols-2 mt-16">
        <div className='flex justify-center'>
          <img src={CTAImg} alt="" />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <p className='text-lg'>
            "From our first conversation, Rob was professional, clear, and
            efficient. Every interaction was transparent and well-communicated.
            He guided me smoothly through the recruitment process, often
            answering questions before I even asked. Thanks to Rob’s support,
            I’m now thriving in my new role as an internal audit manager.
          </p>
          <p className="font-semibold text-lg">
            - Internal Audit Manager, Professional Services PLC
          </p>
        </div>
      </div>
    </div>
  );
}

export default CTA