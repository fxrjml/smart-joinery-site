import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-brand-blue-dark shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <a href="#">Smart Joinery Solutions</a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#gallery" className="text-gray-300 hover:text-white transition duration-300">
              Gallery
            </a>
            <a href="#services" className="text-gray-300 hover:text-white transition duration-300">Services</a>
            <a href="#about" className="text-gray-300 hover:text-white transition duration-300">Why Choose Us</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <a href="#gallery" onClick={handleMobileLinkClick} className="block text-gray-300 hover:text-white py-2">
              Gallery
            </a>
            <a href="#services" onClick={handleMobileLinkClick} className="block text-gray-300 hover:text-white py-2">Services</a>
            <a href="#about" onClick={handleMobileLinkClick} className="block text-gray-300 hover:text-white py-2">Why Choose Us</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;