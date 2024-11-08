import  { useState } from "react";
import { NAV_LINKS } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo/logo.svg"; // Ensure correct import syntax for SVG
import menu from "../assets/menu.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black h-[60px] shadow-md  w-full z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} width={52} height={50} alt="Company Logo" />{" "}
            {/* Set logo size */}
          </div>

          {/* Menu for large screens */}
          <div className="hidden font-normal md:flex space-x-4">
            {NAV_LINKS.map((link, index) => (
              <a
                key={index}
                href={`#${link.targetId}`}
                className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-lg font-normal"
              >
                {link.text}
              </a>
            ))}
          </div>
          {/* Menu for large screen */}
          <div className=" hidden md:flex gap-2 justify-center items-center">
            <span className="text-white hover:text-gray-400">Menu</span>
            <img className="" width={21} height={13} src={menu} alt="Menu" />
          </div>
          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <FaTimes className="h-6 w-6 text-white" />
              ) : (
                <FaBars className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link, index) => (
              <a
                key={index}
                href={`#${link.targetId}`}
                className="block text-white hover:text-gray-400 px-3 py-2 rounded-md text-lg font-normal"
              >
                {link.text}
              </a>
            ))}
          </div>
          <div className="flex gap-2 justify-center items-center">
            <span className="text-white hover:text-gray-400">Menu</span>
            <img className="" width={21} height={13} src={menu} alt="Menu" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
