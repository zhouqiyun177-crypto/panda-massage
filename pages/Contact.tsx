import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="bg-panda-gray py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-black mb-4">Contact & Booking</h1>
        <p className="text-gray-600 text-lg">We are here to assist you with your wellness journey.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-serif text-black mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                Whether you have a question about our treatments or want to book a session, 
                our team is ready to help instantly via WhatsApp or phone.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-full border border-gray-100 text-black shadow-sm group-hover:bg-black group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-black font-bold uppercase text-sm mb-1 tracking-wider">Location</h4>
                    <p className="text-gray-500 leading-relaxed">Dubai Sport City<br/>Dubai, United Arab Emirates</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-full border border-gray-100 text-black shadow-sm group-hover:bg-black group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-black font-bold uppercase text-sm mb-1 tracking-wider">Phone</h4>
                    <p className="text-gray-500 font-medium">+971 50 991 7415</p>
                    <p className="text-gray-400 text-xs mt-1">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-full border border-gray-100 text-black shadow-sm group-hover:bg-black group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-black font-bold uppercase text-sm mb-1 tracking-wider">Email</h4>
                    <p className="text-gray-500">info@pandamassage.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-full border border-gray-100 text-black shadow-sm group-hover:bg-black group-hover:text-white transition-colors">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-black font-bold uppercase text-sm mb-1 tracking-wider">Hours</h4>
                    <p className="text-gray-500">Monday - Sunday: 10:00 AM - 1:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA Card */}
          <div className="bg-white p-12 rounded-2xl border border-gray-100 text-center space-y-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#25D366] to-black"></div>
            
            <div className="w-24 h-24 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
               {/* Official WhatsApp SVG Logo */}
                <svg viewBox="0 0 24 24" className="w-12 h-12 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            </div>

            <div className="space-y-4">
                <h3 className="text-3xl font-serif text-black">Quick Booking</h3>
                <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                    The fastest way to book your appointment is via WhatsApp. 
                    Our reception team will confirm your slot immediately.
                </p>
            </div>

            <a 
                href="https://wa.me/971509917415"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
                {/* Official WhatsApp SVG Logo (White) */}
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
            </a>

            <div className="pt-8 border-t border-gray-100">
                 <p className="text-sm text-gray-500">
                    Prefer to call? <a href="tel:+971509917415" className="text-black font-bold hover:text-gray-600 transition-colors">+971 50 991 7415</a>
                 </p>
            </div>
          </div>

        </div>
        
        {/* Google Maps Embed */}
        <div className="mt-20">
          <h2 className="text-3xl font-serif text-black mb-8">Find Us on the Map</h2>
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Panda Massage Location - Dubai Sport City"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.734426247832!2d55.169901476483326!3d25.132918627193154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b9b9b9b9b9b%3A0x9b9b9b9b9b9b9b9b!2sDubai%20Sports%20City!5e0!3m2!1sen!2sae!4v1234567890"
            ></iframe>
          </div>
          <div className="mt-6 p-6 bg-panda-gray rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Panda Massage</strong> is located in Dubai Sport City, Dubai, UAE. 
              We serve the entire Dubai community with professional massage and spa services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
