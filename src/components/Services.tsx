import React from 'react';

const services = [
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />,
    title: 'Emergency Plumbing',
    description: '24/7 rapid response for all your plumbing emergencies. We fix it right, day or night.'
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
    title: 'Leak Detection & Repair',
    description: 'Advanced leak detection to find and fix hidden leaks, preventing water damage.'
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.36 6.64a9 9 0 11-12.73 0" />,
    title: 'Drain Cleaning',
    description: 'Clogged drains? We offer professional cleaning services for smooth-flowing pipes.'
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.66 11.23L12 5.57 6.34 11.23a8 8 0 1011.32 0zM12 19.43V22" />,
    title: 'Water Heater Services',
    description: 'Expert installation, repair, and maintenance for all types of water heaters.'
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-7.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />,
    title: 'Kitchen & Bath Remodeling',
    description: 'From simple fixture upgrades to full-scale remodels, combining plumbing and joinery.'
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" />,
    title: 'Custom Joinery',
    description: 'Bespoke cabinets, vanities, and woodwork to perfectly fit your space and style.'
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />,
    title: 'Tiling Services',
    description: 'Precise wall and floor tiling for kitchens, bathrooms, and more.'
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.475 2.118A2.25 2.25 0 0 1 .75 15.75V14.25m18 0v1.5a2.25 2.25 0 0 1-2.25 2.25a2.25 2.25 0 0 1-2.475-2.118 3 3 0 0 0-5.78-1.128M15 5.25A3 3 0 0 1 12 8.25m0 0A3 3 0 0 1 9 5.25M3 3h18M3 3a2.25 2.25 0 0 0-2.25 2.25v1.5A2.25 2.25 0 0 0 3 9h18a2.25 2.25 0 0 0 2.25-2.25v-1.5A2.25 2.25 0 0 0 18 3M3 3h18" />,
    title: 'Painting & Decorating',
    description: 'Clean, high-quality painting to refresh any room or space.'
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />,
    title: 'Property Refurbishment',
    description: 'Full or partial refurbishments to modernise and enhance your property.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark">Our Services</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide a wide range of plumbing and joinery services to meet your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="bg-brand-accent text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">{service.icon}</svg>
              </div>
              <h3 className="text-xl font-bold text-brand-blue-dark mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;