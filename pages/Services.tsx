import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  // Group services by category
  const categories = Array.from(new Set(SERVICES.map(s => s.category)));

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Header */}
      <div className="bg-panda-gray py-20 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover opacity-20" alt="Services Header" />
             <div className="absolute inset-0 bg-white/80"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif text-black mb-4">Our Treatments</h1>
            <p className="text-gray-600 text-lg">
            Carefully curated therapies designed to restore balance and harmony to your body and mind.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {categories.map(category => {
          const categoryServices = SERVICES.filter(s => s.category === category);
          const categoryTitle = category === 'body-treatment' ? 'Body Treatments' : category + 's';

          return (
            <div key={category} className="animate-fade-in">
              <div className="flex items-center gap-6 mb-12">
                <h2 className="text-3xl font-serif text-black capitalize min-w-max">{categoryTitle}</h2>
                <div className="h-px bg-gray-200 flex-grow"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {categoryServices.map(service => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
