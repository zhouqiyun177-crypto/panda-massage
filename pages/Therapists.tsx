import React from 'react';
import { Ruler, Weight } from 'lucide-react';
import { THERAPISTS } from '../constants';

const Therapists: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Header */}
      <div className="bg-panda-gray py-20 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover opacity-20" alt="Therapists Header" />
             <div className="absolute inset-0 bg-white/80"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif text-black mb-4">Our Therapists</h1>
            <p className="text-gray-600 text-lg">
                Meet our team of professional, certified therapists dedicated to your wellness.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {THERAPISTS.map((therapist) => (
                <div key={therapist.id} className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-black/10 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl">
                    <div className="relative h-96 overflow-hidden bg-gray-100">
                        <img 
                            src={therapist.image} 
                            alt={therapist.name} 
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent pt-20 pb-6 px-6">
                            <h3 className="text-3xl font-serif text-white">{therapist.nickname}</h3>
                            <div className="flex items-center gap-2 text-white/90 text-sm font-bold uppercase tracking-widest mt-1">
                                <span>{therapist.flag} {therapist.country}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-6 space-y-5">
                        {/* Stats */}
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                             <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                                <Ruler size={18} className="text-black" />
                                <span>{therapist.height}</span>
                             </div>
                             <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                                <Weight size={18} className="text-black" />
                                <span>{therapist.weight}</span>
                             </div>
                        </div>

                        {/* Specialties */}
                        <div>
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Specialties</h4>
                            <div className="flex flex-wrap gap-2">
                                {therapist.specialties.map((spec, index) => (
                                    <span key={index} className="text-xs bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full font-medium">
                                        {spec}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Booking Button */}
                        <a 
                          href={`https://wa.me/971567053281?text=Hi, I would like to book an appointment with ${therapist.nickname}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center bg-black text-white py-3 font-bold uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors rounded-lg mt-4 shadow-md"
                        >
                          Book Now
                        </a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Therapists;