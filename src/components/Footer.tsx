import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Smart Joinery Solutions</h3>
            <p className="text-gray-400">
              Your trusted partner for all plumbing and joinery needs. Quality work, guaranteed.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="#gallery" className="text-gray-300 hover:text-white">Gallery</a></li>
              <li className="mb-2"><a href="#services" className="text-gray-300 hover:text-white">Services</a></li>
              <li className="mb-2"><a href="#about" className="text-gray-300 hover:text-white">Why Choose Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">
              <a href="tel:07877477599" className="hover:text-white transition-colors duration-300">07877 477599</a>
            </p>
            <p className="text-gray-300">
              <a href="mailto:smartjoineryleeds@gmail.com" className="hover:text-white transition-colors duration-300 break-all">smartjoineryleeds@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-brand-blue-light pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Smart Joinery Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;