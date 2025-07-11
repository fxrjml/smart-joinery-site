import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Services />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;