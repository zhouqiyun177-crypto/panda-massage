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
            <div>
                <h3 className="text-2xl font-serif font-bold text-white tracking-wide">PANDA MASSAGE</h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Professional Massage & Spa</p>
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
                <span>Marina Walk, Dubai Marina,<br />Dubai, UAE</span>
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
                <span className="text-white font-bold">10:00 AM - 12:00 AM</span>
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