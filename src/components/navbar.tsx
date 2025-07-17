import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/assets/img/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={Logo} alt="Company Logo" className="h-8 md:h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6 lg:gap-8 text-base lg:text-xl font-semibold">
            <button className="hover:text-blue-600 transition-colors">
              Job Search
            </button>
            <button className="hover:text-blue-600 transition-colors">
              Send us your CV
            </button>
            <button className="hover:text-blue-600 transition-colors">
              Our Expertise
            </button>
            <button className="hover:text-blue-600 transition-colors">
              Advice & Learning
            </button>
            <button className="hover:text-blue-600 transition-colors">
              My Account
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-3 px-2 pt-2">
              <button className="block px-3 py-2 text-lg font-semibold hover:bg-gray-100 rounded-md">
                Job Search
              </button>
              <button className="block px-3 py-2 text-lg font-semibold hover:bg-gray-100 rounded-md">
                Send us your CV
              </button>
              <button className="block px-3 py-2 text-lg font-semibold hover:bg-gray-100 rounded-md">
                Our Expertise
              </button>
              <button className="block px-3 py-2 text-lg font-semibold hover:bg-gray-100 rounded-md">
                Advice & Learning
              </button>
              <button className="block px-3 py-2 text-lg font-semibold hover:bg-gray-100 rounded-md">
                My Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
