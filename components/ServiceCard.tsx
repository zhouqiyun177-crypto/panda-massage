import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Service } from '../types';
import guashaImg from '/spa-pic/services_guasha.png';
import headMassageImg from '/spa-pic/services_head_massage.png';
import footMassageImg from '/spa-pic/services_foot_massage.png';
import couplesMassageImg from '/spa-pic/services_couples_massages.png';

interface ServiceCardProps {
  service: Service;
}

const getImageUrl = (imagePath: string): string => {
  if (imagePath.includes('services_guasha.png')) {
    return guashaImg;
  }
  if (imagePath.includes('services_head_massage.png')) {
    return headMassageImg;
  }
  if (imagePath.includes('services_foot_massage.png')) {
    return footMassageImg;
  }
  if (imagePath.includes('services_couples_massages.png')) {
    return couplesMassageImg;
  }
  return imagePath;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const imageUrl = getImageUrl(service.image);
  return (
    <div className="group relative bg-white overflow-hidden rounded-xl hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-100">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={service.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-black text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-md shadow-sm">
          {service.category}
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-serif text-black">
            {service.title}
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {service.description}
        </p>
        
        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
           <div className="flex items-center text-gray-500 text-sm font-medium">
            <Clock size={16} className="mr-2" />
            {service.duration}
          </div>
          <div className="text-black font-bold font-serif text-xl">
            {service.price}
          </div>
        </div>

        <a 
          href="https://wa.me/971509917415"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 w-full flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 text-black py-3 px-4 hover:bg-black hover:border-black hover:text-white transition-all duration-300 text-sm uppercase tracking-wider rounded-lg font-bold"
        >
          Book Appointment <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
