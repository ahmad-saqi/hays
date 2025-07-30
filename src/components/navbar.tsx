import { useState } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-black/30 shadow-sm ">
      <div className=" px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-between w-2/3 py-3 md:py-4">
            {/* Logo */}
            <div className="flex-shrink-0 flex gap-2 items-end">
              <div className="w-1 h-8 bg-white"></div>
              <p className="text-white text-3xl font-semibold">
                taylor <span className="font-extralight">root</span>
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-1 text-white bg-black/70 px-2.5 py-1 rounded">
                Region <ChevronDown />
              </button>
              <button className="flex items-center gap-1 text-white bg-black/70 px-2.5 py-1 rounded">
                English <ChevronDown />
              </button>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-6 lg:gap-8 text-base lg:text-xl font-semibold text-white">
              <button className="hover:text-blue-600 transition-colors">
                Jobs
              </button>
              <button className="hover:text-blue-600 transition-colors">
                Hiring
              </button>
              <button className="hover:text-blue-600 transition-colors">
                Resources
              </button>
              <button className="hover:text-blue-600 transition-colors">
                About us
              </button>
              <button className="hover:text-blue-600 transition-colors">
                TR Plus
              </button>
              <button className="hover:text-blue-600 transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          <Search size={30} className="text-white"/>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-3 px-2 pt-2">
              <button className="hover:text-blue-600 transition-colors">
                Jobs
              </button>
              <button className="hover:text-blue-600 transition-colors">
                Hiring
              </button>
              <button className="hover:text-blue-600 transition-colors">
                Resources
              </button>
              <button className="hover:text-blue-600 transition-colors">
                About us
              </button>
              <button className="hover:text-blue-600 transition-colors">
                TR Plus
              </button>
              <button className="hover:text-blue-600 transition-colors">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
