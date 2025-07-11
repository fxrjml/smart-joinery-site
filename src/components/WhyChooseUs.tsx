import React from 'react';

const reasons = [
  {
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Licensed & Insured',
    description: 'Our team is fully licensed and insured for your peace of mind and protection.'
  },
  {
    icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
    title: 'Upfront Pricing',
    description: 'No hidden fees. We provide clear, honest pricing before any work begins.'
  },
  {
    icon: 'M5 13l4 4L19 7',
    title: 'Quality Workmanship',
    description: 'We take pride in our work, delivering durable and high-quality solutions.'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark">Why Choose Us?</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Your satisfaction is our priority. Here’s what sets us apart.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-6">
              <div className="flex items-center justify-center h-20 w-20 mx-auto mb-4 bg-brand-blue-light text-brand-accent rounded-full">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={reason.icon}></path></svg>
              </div>
              <h3 className="text-xl font-bold text-brand-blue-dark mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;