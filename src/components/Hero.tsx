import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center text-white py-32 px-6" 
      style={{ backgroundImage: "linear-gradient(rgba(8, 47, 73, 0.8), rgba(8, 47, 73, 0.8)), url('/images/hero-background.jpg')" }}
      id="home"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Expert Joinery Solutions & Plumbing
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Reliable, efficient, and high-quality services you can trust.
        </p>
        <a 
          href="#gallery" 
          className="bg-brand-accent hover:bg-brand-accent-light text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 inline-block"
        >
          View Our Work
        </a>
      </div>
    </section>
  );
};

export default Hero;