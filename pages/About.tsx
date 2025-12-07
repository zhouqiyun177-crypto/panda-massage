import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
                <h4 className="text-gray-500 uppercase tracking-widest font-bold text-sm">Our Story</h4>
                <h1 className="text-5xl md:text-6xl font-serif text-black leading-tight">
                    Professional Care <br/>in Pure Simplicity
                </h1>
                <p className="text-gray-600 leading-relaxed text-lg font-light">
                    Established in 2015, Panda Massage was born from a desire to provide straightforward, high-quality massage therapies. 
                    We cut out the noise and focused on what matters: the skill of the therapist and the relaxation of the client.
                </p>
                <p className="text-gray-600 leading-relaxed font-light">
                    Our team consists of certified therapists from across Asia and Europe, bringing authentic techniques to the heart of Dubai. 
                    Our aesthetics are minimalist—inspired by the friendly balance of the panda—to clear your mind the moment you step in.
                </p>
                
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                    <div>
                        <span className="block text-5xl font-serif text-black mb-2">8+</span>
                        <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Years of Excellence</span>
                    </div>
                    <div>
                        <span className="block text-5xl font-serif text-black mb-2">15k+</span>
                        <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Happy Guests</span>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-64 h-64 bg-panda-gray rounded-full opacity-50 z-0"></div>
                <img 
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop" 
                    alt="Spa Interior" 
                    className="w-full h-auto rounded-xl shadow-2xl relative z-10"
                />
                <div className="absolute bottom-8 -left-8 bg-white p-8 shadow-xl border-l-4 border-black max-w-xs z-20 rounded-r-xl">
                    <p className="text-black italic font-serif text-lg">
                        "Simplicity is the ultimate sophistication."
                    </p>
                </div>
            </div>
        </div>

        {/* Philosophy */}
        <div className="mt-32 text-center max-w-5xl mx-auto bg-panda-gray p-16 rounded-2xl">
             <h2 className="text-4xl font-serif text-black mb-16">Our Philosophy</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 <div className="space-y-4">
                     <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center mx-auto shadow-md text-3xl">
                         🌿
                     </div>
                     <h3 className="text-xl text-black font-serif font-bold">Natural</h3>
                     <p className="text-gray-500 text-sm leading-relaxed">We believe in the healing power of nature, using only organic, sustainable products.</p>
                 </div>
                 <div className="space-y-4">
                     <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center mx-auto shadow-md text-3xl">
                         👐
                     </div>
                     <h3 className="text-xl text-black font-serif font-bold">Professional</h3>
                     <p className="text-gray-500 text-sm leading-relaxed">Expert hands, certified skills. We take your relaxation seriously.</p>
                 </div>
                 <div className="space-y-4">
                     <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center mx-auto shadow-md text-3xl">
                         ☯️
                     </div>
                     <h3 className="text-xl text-black font-serif font-bold">Balanced</h3>
                     <p className="text-gray-500 text-sm leading-relaxed">Like Yin and Yang, our treatments aim to restore the equilibrium of your body.</p>
                 </div>
             </div>
        </div>

      </div>
    </div>
  );
};

export default About;