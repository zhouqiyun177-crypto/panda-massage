import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  // Helper to get current page title for Mobile Header
  const getPageTitle = (path: string) => {
    switch (path) {
      case '/': return 'Panda Massage';
      case '/services': return 'Our Treatments';
      case '/therapists': return 'Therapists';
      case '/about': return 'About Us';
      case '/contact': return 'Contact';
      default: return 'Panda Massage';
    }
  };

  const currentTitle = getPageTitle(location.pathname);

  // Navigation Style Logic
  // Home Page (Top): Transparent bg, White Text
  // Home Page (Scrolled): White bg, Black Text
  // Other Pages: Always White bg, Black Text
  const isTransparent = isHome && !scrolled;
  
  const navBackgroundClass = isTransparent ? 'bg-transparent' : 'bg-white shadow-md';
  const textColorClass = isTransparent ? 'text-white' : 'text-black';
  const borderClass = isTransparent ? 'border-white' : 'border-black';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${navBackgroundClass} ${isTransparent ? 'py-5' : 'py-3'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          
          {/* Left: Logo - Always White Background, Black/White Panda */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group z-10">
            <div className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105 bg-white text-black shadow-sm p-1">
              {/* Panda SVG - Static Colors */}
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
            <div className="hidden sm:block">
              <span className={`block font-serif text-2xl font-bold tracking-wider transition-colors ${textColorClass}`}>
                Panda Massage
              </span>
              <span className={`block text-xs tracking-[0.1em] uppercase ${isTransparent ? 'text-gray-200' : 'text-gray-500'}`}>
                Professional Massage & Spa
              </span>
            </div>
          </Link>

          {/* Mobile Center Title - Only Visible on Scroll */}
          <div 
            className={`md:hidden absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-500 flex flex-col items-center ${scrolled ? 'opacity-100' : 'opacity-0'}`}
          >
            <span className="font-serif font-bold text-lg text-black whitespace-nowrap">
              {currentTitle}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold transition-colors duration-200 tracking-widest uppercase hover:opacity-70 ${
                  location.pathname === item.path ? `border-b-2 ${borderClass}` : ''
                } ${textColorClass}`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/971509917415"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2 border transition-all duration-300 rounded-full font-serif italic ${
                isTransparent 
                  ? 'border-white text-white hover:bg-white hover:text-black' 
                  : 'border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Right Actions */}
          <div className="md:hidden flex items-center gap-4 z-10">
             <a href="tel:+971509917415" className={`${textColorClass} transition-colors`}>
                <Phone size={20} />
             </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${textColorClass} hover:opacity-70 focus:outline-none transition-colors`}
            >
              {isOpen ? <X size={28} className="text-black" /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 text-base font-bold uppercase tracking-widest ${
                 location.pathname === item.path ? 'text-black' : 'text-gray-500 hover:text-black'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-100 w-full flex flex-col gap-3">
             <a
              href="https://wa.me/971509917415"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 bg-black text-white font-bold uppercase tracking-wider rounded-full"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
