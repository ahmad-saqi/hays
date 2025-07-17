import { Apple, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <a href="#" className="text-white hover:underline">
            Media
          </a>
          <a href="#" className="text-white hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-white hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="text-white hover:underline">
            FAQs
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <a href="#" className="text-white hover:underline">
            Sitemap
          </a>
          <a href="#" className="text-white hover:underline">
            Find Us
          </a>
          <a href="#" className="text-white hover:underline">
            Accessibility
          </a>
          <a href="#" className="text-white hover:underline">
            Cookie Preferences
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <a href="#" className="text-white hover:underline">
            Modern Slavery Act
          </a>
          <a href="#" className="text-white hover:underline">
            © Copyright Hays PLC 2025
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <a href="#" className="text-white hover:underline">
            Browse Jobs by Role
          </a>
          <a href="#" className="text-white hover:underline">
            Browse Local Jobs
          </a>
          <div className="flex gap-4 text-white">
            <Linkedin className="w-5 h-5" />
            <Facebook className="w-5 h-5" />
            <Twitter className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-white"></div>
      <div className="text-white flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <p className="text-sm md:text-base max-w-md">
          Manage your profile, job searches and alerts from anywhere and
          anytime.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <div className="flex items-center gap-2 border border-white py-1 px-3 w-full sm:w-fit rounded-lg bg-black">
            <Apple className="w-5 h-5" />
            <div>
              <p className="text-[8px]">Download on the </p>
              <p className="text-sm sm:text-lg font-semibold">App Store</p>
            </div>
          </div>
          <div className="flex items-center gap-2 border border-white py-1 px-3 w-full sm:w-fit rounded-lg bg-black">
            <Apple className="w-5 h-5" />
            <div>
              <p className="text-[8px]">Get it on</p>
              <p className="text-sm sm:text-lg font-semibold">Google Play</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
