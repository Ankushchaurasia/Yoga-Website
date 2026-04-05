

import React from 'react';
import { motion } from 'framer-motion';

import { FaInstagram, FaFacebookF, FaHeart } from 'react-icons/fa'; 
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-20 pb-8 border-t-[6px] border-emerald-600 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
              Dadu Yoga <span className="text-emerald-500">& Wellness</span>
            </h2>
            <p className="text-stone-400 max-w-sm mb-8 leading-relaxed">
              Harmony & Balance for your Body, Mind & Soul. We blend ancient Yogic wisdom with Ayurveda to bring you complete holistic healing.
            </p>
            
            {/* 🔗 SOCIAL MEDIA LINKS (Animated Buttons) */}
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/kaushirakesh?utm_source=qr&igsh=ZjJ4ZjF6b2hueWU1" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-stone-300 hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600 hover:text-white transition-all shadow-lg"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </motion.a>
              
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.facebook.com/share/1C3s4ZcGrm/" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-stone-300 hover:bg-blue-600 hover:text-white transition-all shadow-lg"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="flex items-center hover:text-emerald-400 transition-colors group"><FiArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500 -ml-6 group-hover:ml-0" /> Home</a></li>
              <li><a href="#about" className="flex items-center hover:text-emerald-400 transition-colors group"><FiArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500 -ml-6 group-hover:ml-0" /> About Us</a></li>
              <li><a href="#services" className="flex items-center hover:text-emerald-400 transition-colors group"><FiArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500 -ml-6 group-hover:ml-0" /> Our Services</a></li>
              <li><a href="#programs" className="flex items-center hover:text-emerald-400 transition-colors group"><FiArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500 -ml-6 group-hover:ml-0" /> Therapy Programs</a></li>
              <li><a href="#gallery" className="flex items-center hover:text-emerald-400 transition-colors group"><FiArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500 -ml-6 group-hover:ml-0" /> Gallery</a></li>
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Contact Us</h4>
            <ul className="space-y-4">
              {/* Updated Address */}
              <li className="flex items-start">
                <FiMapPin className="text-emerald-500 mt-1 mr-3 w-5 h-5 shrink-0" />
                <span className="text-stone-400">Sector-11, Khandsa Road</span>
              </li>
              
              {/* Updated Phone Numbers (Both added beautifully) */}
              <li className="flex items-start">
                <FiPhone className="text-emerald-500 mt-1 mr-3 w-5 h-5 shrink-0" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:+919991544606" className="text-stone-400 hover:text-emerald-400 transition-colors">+91 99915 44606</a>
                  <a href="tel:+917015091875" className="text-stone-400 hover:text-emerald-400 transition-colors">+91 70150 91875</a>
                </div>
              </li>

              <li className="flex items-center mt-2">
                <FiMail className="text-emerald-500 mr-3 w-5 h-5 shrink-0" />
                <a href="mailto:rakeshkaushik932@gmail.com" className="text-stone-400 hover:text-emerald-400 transition-colors break-all">rakeshkaushik932@gmail.com</a>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
      
     
      <div className="border-t border-stone-800 bg-stone-950 mt-12 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-sm text-stone-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Dadu Yoga & Wellness. All rights reserved.
          </p>

          {/* YAHAN HAIN AAPKA NAAM AUR NUMBER (Animated & Highlighted) */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center text-sm text-stone-500 bg-stone-900/50 px-4 py-2 rounded-full border border-stone-800/50 flex-wrap justify-center"
          >
            This website design by 
            <FaHeart className="text-rose-500 mx-2 animate-pulse shrink-0" /> 
            <a 
              href="tel:+917307520789" // Aapke number par call link
              className="text-emerald-400 font-bold tracking-wide hover:text-emerald-300 transition-colors ml-1"
            >
              Ankush Chaurasia (+91 73075 20789)
            </a>
          </motion.div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;