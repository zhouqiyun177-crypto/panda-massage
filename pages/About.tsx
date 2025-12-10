import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
      
      {/* Header */}
      <div className="bg-panda-gray py-16 md:py-20 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover opacity-20" alt="About Header" />
             <div className="absolute inset-0 bg-white/80"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-serif text-black mb-4">About Us</h1>
            <p className="text-gray-600 text-base md:text-lg">
                Discover our story and philosophy of wellness
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center">
            <div className="space-y-6 md:space-y-8">
                <h4 className="text-gray-500 uppercase tracking-widest font-bold text-xs">Our Story</h4>
                <h2 className="text-3xl md:text-5xl font-serif text-black leading-tight">
                    Professional Care in Pure Simplicity
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base font-light">
                    Established in 2015, Panda Massage was born from a desire to provide straightforward, high-quality massage therapies. We cut out the noise and focused on what matters: the skill of the therapist and the relaxation of the client.
                </p>
                <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base">
                    Our team consists of certified therapists from across Asia and Europe, bringing authentic techniques to the heart of Dubai. Our aesthetics are minimalist, inspired by the friendly balance of the panda, to clear your mind the moment you step in.
                </p>
                
                <div className="grid grid-cols-2 gap-4 md:gap-8 pt-6 md:pt-8 border-t border-gray-100">
                    <div>
                        <span className="block text-3xl md:text-5xl font-serif text-black mb-2">8+</span>
                        <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Years of Excellence</span>
                    </div>
                    <div>
                        <span className="block text-3xl md:text-5xl font-serif text-black mb-2">15k+</span>
                        <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Happy Guests</span>
                    </div>
                </div>
            </div>

            <div className="relative hidden lg:block">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-48 h-48 md:w-64 md:h-64 bg-panda-gray rounded-full opacity-50 z-0"></div>
                <img 
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop" 
                    alt="Spa Interior" 
                    className="w-full h-auto rounded-xl shadow-2xl relative z-10"
                />
                <div className="absolute bottom-4 md:bottom-8 -left-4 md:-left-8 bg-white p-4 md:p-8 shadow-xl border-l-4 border-black max-w-xs z-20 rounded-r-xl">
                    <p className="text-black italic font-serif text-sm md:text-lg">
                        "Simplicity is the ultimate sophistication."
                    </p>
                </div>
            </div>
        </div>

        {/* Philosophy */}
        <div className="mt-16 md:mt-32 text-center max-w-5xl mx-auto bg-panda-gray p-8 md:p-16 rounded-2xl">
             <h2 className="text-2xl md:text-4xl font-serif text-black mb-12 md:mb-16">Our Philosophy</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                 <div className="space-y-4">
                     <div className="w-16 h-16 md:w-20 md:h-20 bg-white text-black rounded-full flex items-center justify-center mx-auto shadow-md text-2xl md:text-3xl">
                         <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>
                     </div>
                     <h3 className="text-lg md:text-xl text-black font-serif font-bold">Natural</h3>
                     <p className="text-gray-600 text-xs md:text-sm leading-relaxed">We believe in the healing power of nature, using only organic, sustainable products.</p>
                 </div>
                 <div className="space-y-4">
                     <div className="w-16 h-16 md:w-20 md:h-20 bg-white text-black rounded-full flex items-center justify-center mx-auto shadow-md text-2xl md:text-3xl">
                         <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
                     </div>
                     <h3 className="text-lg md:text-xl text-black font-serif font-bold">Professional</h3>
                     <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Expert hands, certified skills. We take your relaxation seriously.</p>
                 </div>
                 <div className="space-y-4">
                     <div className="w-16 h-16 md:w-20 md:h-20 bg-white text-black rounded-full flex items-center justify-center mx-auto shadow-md text-2xl md:text-3xl">
                         <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                     </div>
                     <h3 className="text-lg md:text-xl text-black font-serif font-bold">Balanced</h3>
                     <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Like Yin and Yang, our treatments aim to restore the equilibrium of your body.</p>
                 </div>
             </div>
        </div>

      </div>
    </div>
  );
};

export default About;
