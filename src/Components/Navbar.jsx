import React, { useState } from "react";
import pic from "../../public/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Skills" },
    { id: 4, text: "Projects" },
    { id: 5, text: "Resume" },
    { id: 6, text: "Contact" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex justify-between items-center h-16">
        {/* Logo Section */}
        <div className="flex space-x-2 items-center">
          <img
            src={pic}
            className="h-12 w-12 rounded-full"
            alt="Ablu Hussain's Profile Picture"
            loading="lazy"
          />
          <div>
            <h1 className="font-semibold text-xl cursor-pointer">
              Ablu<span className="text-green-500 text-2xl"> Hussain</span>
            </h1>
            <p className="text-sm">Aspiring Data Scientist & Web Developer</p>
          </div>
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map(({ id, text }) => (
            <li
              key={id}
              className="hover:scale-105 duration-200 cursor-pointer"
            >
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="text-green-500 font-bold"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenu(!menu)}
          className="md:hidden"
          aria-label={menu ? "Close Menu" : "Open Menu"}
        >
          {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navbar */}
      {menu && (
        <div className="bg-white md:hidden fixed top-16 left-0 right-0 bottom-0 z-40 transition-transform">
          <ul className="flex flex-col h-full items-center justify-center space-y-6 text-xl">
            {navItems.map(({ id, text }) => (
              <li
                key={id}
                className="hover:scale-105 duration-200 cursor-pointer"
              >
                <Link
                  onClick={() => setMenu(false)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="text-green-500 font-bold"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
