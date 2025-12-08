import React from 'react';
import { Link } from 'react-router-dom';
import { Flower2, Heart, ShieldCheck } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../constants';

// Resolve static image via Vite so path is generated reliably
const homeImg = new URL('/spa-pic/home_pure_relax.png', import.meta.url).href;

const Home: React.FC = () => {
  const featuredServices = SERVICES.slice(0, 3);

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1920&auto=format&fit=crop" 
            alt="Panda Massage Spa" 
            className="w-full h-full object-cover object-[center_60%] animate-fade-in"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8">
          <h2 className="text-white tracking-[0.4em] uppercase text-xs md:text-sm font-bold animate-fade-in-up">
            Professional Massage & Spa
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-6 leading-tight drop-shadow-xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Panda <br/> <span className="text-white italic text-4xl md:text-6xl lg:text-7xl font-light">Massage</span>
          </h1>
          <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Relax, Rejuvenate, and Refresh in our serene white sanctuary.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Link 
              to="/services" 
              className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors duration-300 min-w-[180px] rounded-full shadow-lg"
            >
              Our Menu
            </Link>
            <a 
              href="https://wa.me/971567053281"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 min-w-[180px] rounded-full backdrop-blur-sm"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-white border-b border-gray-100 relative z-20 mx-auto shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="py-16 px-6 text-center group hover:bg-panda-gray transition-colors duration-500">
            <div className="w-16 h-16 mx-auto bg-black text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                <Flower2 size={28} />
            </div>
            <h3 className="text-xl font-serif text-black mb-3">Expert Therapists</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">Highly trained professionals dedicated to your wellness journey.</p>
          </div>
          <div className="py-16 px-6 text-center group hover:bg-panda-gray transition-colors duration-500">
             <div className="w-16 h-16 mx-auto bg-black text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                <Heart size={28} />
            </div>
            <h3 className="text-xl font-serif text-black mb-3">Organic Products</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">We use only premium, natural oils and organic ingredients.</p>
          </div>
          <div className="py-16 px-6 text-center group hover:bg-panda-gray transition-colors duration-500">
             <div className="w-16 h-16 mx-auto bg-black text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-serif text-black mb-3">Hygienic Environment</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">Impeccably clean facilities ensuring your safety and comfort.</p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 relative bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative p-4">
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-black/10"></div>
            <img
              src={homeImg}
              alt="Interior"
              loading="lazy"
              decoding="async"
              className="w-full max-h-[550px] h-auto object-contain rounded-lg shadow-2xl relative z-10 bg-gray-50"
            />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-black/10"></div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-2">
              <h4 className="text-gray-500 uppercase tracking-widest font-bold text-xs">Welcome to Panda Massage</h4>
              <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
                Pure Relaxation
              </h2>
            </div>
            <div className="w-24 h-1 bg-black rounded-full"></div>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              Nestled in the vibrant heart of Dubai Sport City, Panda Massage offers a retreat focused on professional care and purity. 
              Our minimalist, zen-inspired environment allows you to disconnect from the noise and reconnect with yourself.
            </p>
            <p className="text-gray-500 leading-relaxed font-light">
              From traditional Asian massages to modern therapies, every service is curated to provide 
              effective relaxation. Step into a world of calm.
            </p>
            <div className="pt-8">
              <Link to="/about" className="inline-block text-black border-b border-black pb-1 hover:text-gray-600 hover:border-gray-300 transition-all uppercase tracking-wider text-sm font-bold">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-panda-gray relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
             <h4 className="text-gray-500 uppercase tracking-widest font-bold text-xs">Indulge Yourself</h4>
             <h2 className="text-4xl md:text-5xl font-serif text-black">Signature Treatments</h2>
             <div className="w-16 h-0.5 bg-black mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              to="/services" 
              className="inline-block px-12 py-4 border-2 border-black text-black uppercase tracking-widest text-sm font-bold hover:bg-black hover:text-white transition-all duration-300 rounded-full"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-black relative overflow-hidden border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Ready to Relax?</h2>
          <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
            Book your appointment today and experience the professional care you deserve. 
            Walk-ins are welcome, but reservations are recommended.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a 
              href="tel:+971567053281"
              className="px-10 py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors shadow-xl rounded-full"
            >
              Call to Book
            </a>
            <a 
              href="https://wa.me/971567053281"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-black text-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors rounded-full group"
            >
               {/* Official WhatsApp SVG Logo (Black/Hover:White) */}
               <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
               </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;