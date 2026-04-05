


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Services', path: '#services' },
    { name: 'Programs', path: '#programs' },
    { name: 'Pricing', path: '#pricing' },
    { name: 'Testimonials', path: '#testimonials' }, 
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-white/90 backdrop-blur-md py-4' 
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
         
          <a href="#home" className="flex-shrink-0 flex items-center group cursor-pointer">
            <h1 className="text-2xl font-extrabold tracking-tight text-emerald-700">
              Dadu Yoga <span className="text-stone-500 font-medium group-hover:text-emerald-500 transition-colors">& Wellness</span>
            </h1>
          </a>

      
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.path} 
                className="relative text-stone-600 hover:text-emerald-600 font-bold text-[13px] lg:text-sm uppercase tracking-wider transition-colors group"
              >
                {link.name}
                {/* 🪄 Hover Underline Animation */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* Glowing CTA Button */}
            <a 
              href="#contact" 
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Session
            </a>
          </div>

      
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-stone-800 text-3xl focus:outline-none p-2 bg-stone-50 rounded-lg"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <FiX />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <FiMenu />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-stone-100 overflow-hidden absolute w-full shadow-2xl"
          >
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.path} 
                  onClick={handleLinkClick}
                  className="block px-4 py-3 text-stone-700 font-bold uppercase tracking-wider text-sm bg-stone-50 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="#contact" 
                onClick={handleLinkClick}
                className="block w-full text-center mt-6 bg-emerald-600 text-white px-6 py-4 rounded-xl font-bold uppercase tracking-wider shadow-md hover:bg-emerald-500"
              >
                Book Session Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;