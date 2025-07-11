import React from 'react';

const galleryImages = [
  {
    src: '/images/gallery-kitchen1.jpg',
    alt: 'Modern kitchen with custom joinery and cabinetry'
  },
  {
    src: '/images/gallery-attic.jpg',
    alt: 'Modern attic renovation with exposed wooden beams, skylights, and glass balustrade'
  },
  {
    src: '/images/gallery-deck2.jpg',
    alt: 'Close-up view of newly installed timber deck with wide steps and clean finish'
  },
  {
    src: '/images/gallery-deck1.jpg',
    alt: 'Outdoor wooden deck with integrated white rendered seating in a landscaped garden'
  },
  {
    src: '/images/gallery-kitchen4.jpg',
    alt: 'Utility kitchen with marble-effect countertop, integrated washing machine, and light wood cabinets'
  },
  {
    src: '/images/gallery-kitchen3.jpg',
    alt: 'Bright white gloss kitchen with granite countertops and modern black cooker hood'
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark">A Glimpse of Our Craftsmanship</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We believe our work speaks for itself. Browse a selection of our recent projects.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-72 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center p-4">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;