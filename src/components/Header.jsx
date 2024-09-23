import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-screen text-white p-4 border-b-2 border-gray-100 overflow-hidden">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold text-[#6A9C89] cursor-pointer">
          Company Name
        </Link>
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#6A9C89] focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <nav className="hidden md:flex space-x-4">
          <Link to="/about" className="text-black px-3 py-2 rounded hover:text-[#16423C] font-bold">
            About
          </Link>
          <Link to="/model" className="text-black px-3 py-2 rounded hover:text-[#16423C] font-bold">
            Models
          </Link>
          <Link to="/faq" className="text-black px-3 py-2 rounded hover:text-[#16423C] font-bold">
            FAQ
          </Link>
          <Link to="/support" className="text-black px-3 py-2 rounded hover:text-[#16423C] font-bold">
            Support
          </Link> 
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="flex text-right flex-col space-y-2 p-4">
            <Link to="/about" onClick={closeMenu} className="text-black px-3 py-2 rounded hover:text-yellow-500 font-bold">
              About
            </Link>
            <Link to="/model" className="text-black px-3 py-2 rounded hover:text-yellow-500 font-bold">
              Models
            </Link>
            <Link to="/faq" onClick={closeMenu} className="text-black px-3 py-2 rounded hover:text-yellow-500 font-bold">
              FAQ
            </Link>
            <Link to="/support" onClick={closeMenu} className="text-black px-3 py-2 rounded hover:text-yellow-500 font-bold">
              Support
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
