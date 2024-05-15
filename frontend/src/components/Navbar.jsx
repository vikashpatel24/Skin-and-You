import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Treatments", path: "/" },
    { title: "Skin & FAQ", path: "/" },
    { title: "Medical Clinic", path: "/" },
    { title: "Photo Gallery", path: "/" },
    { title: "Media", path: "/" },
    { title: "About Us", path: "/" },
    { title: "Contact", path: "/" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to={"/"}>
              <img alt="Skin&You Clinic Logo" className="h-14" src="logo.png" />
            </Link>
            <div className="hidden md:block">
              <ul className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item, idx) => (
                  <li
                    key={idx}
                    className="hover:text-orange-500 font-extrabold"
                  >
                    <a href={item.path} className="block">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden md:block">
            <Link to={"/register"}>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
                Book Appointment
              </button>
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-orange-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-orange-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigation.map((item, idx) => (
            <a
              key={idx}
              href={item.path}
              className="block px-3 py-2 rounded-md text-base font-extrabold text-gray-700 hover:text-orange-500 hover:bg-gray-100"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
