import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-black flex-shrink-0 p-1">
                {/* Panda SVG Logo */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Ears (Black) */}
                  <circle cx="25" cy="25" r="15" fill="#111" />
                  <circle cx="75" cy="25" r="15" fill="#111" />
                  {/* Head (White) */}
                  <circle cx="50" cy="55" r="40" fill="white" stroke="#111" strokeWidth="2" />
                  {/* Eye Patches (Black) */}
                  <ellipse cx="35" cy="50" rx="12" ry="10" fill="#111" transform="rotate(-15 35 50)" />
                  <ellipse cx="65" cy="50" rx="12" ry="10" fill="#111" transform="rotate(15 65 50)" />
                  {/* Eyes (White dots) */}
                  <circle cx="37" cy="48" r="3" fill="white" />
                  <circle cx="63" cy="48" r="3" fill="white" />
                  {/* Nose (Black) */}
                  <ellipse cx="50" cy="65" rx="7" ry="5" fill="#111" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-white tracking-wide">PANDA MASSAGE</h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Professional Massage & Spa</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Experience professional relaxation in Dubai. 
              Clean, serene, and expert therapies to restore your balance.
            </p>
            <div className="flex space-x-4 pt-2">
              <span className="text-gray-400 cursor-default"><Instagram size={20} /></span>
              <span className="text-gray-400 cursor-default"><Facebook size={20} /></span>
              <span className="text-gray-400 cursor-default"><Twitter size={20} /></span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-8 text-sm">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors block hover:translate-x-1 duration-200">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white text-sm transition-colors block hover:translate-x-1 duration-200">Treatments</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors block hover:translate-x-1 duration-200">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors block hover:translate-x-1 duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-8 text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-white mt-1 flex-shrink-0" />
                <span>Dubai Sport City,<br />Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-white flex-shrink-0" />
                <span>+971 56 705 3281</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-white flex-shrink-0" />
                <span>info@pandamassage.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-8 text-sm">Opening Hours</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Monday - Sunday</span>
                <span className="text-white font-bold">10:00 AM - 1:00 AM</span>
              </li>
              <li className="pt-2 text-xs italic text-gray-500">
                *Late night bookings available upon request.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Panda Massage. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-600">
            <span className="cursor-default">Privacy Policy</span>
            <span className="cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;