

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiZoomIn } from 'react-icons/fi';

import img1 from '../assets/g1.jpeg';
import img2 from '../assets/g2.jpeg';
import img3 from '../assets/g3.jpeg';
import img4 from '../assets/g4.jpeg';


const galleryPhotos = [
  { id: 1, src: img1, alt: "Yoga Class" },
  
  
  { id: 2, src: "/images/s5.jpeg", alt: "Meditation Space" }, 
  
  { id: 3, src: img2, alt: "Yoga Pose" },
  { id: 4, src: img3, alt: "Therapy Session" }, 
  
  
  { id: 5, src: "/images/s7.jpeg", alt: "Group Yoga" }, 
  
  { id: 6, src: img4, alt: "Pranayama" }, 
];

const Gallery = () => {
  
  const [selectedImage, setSelectedImage] = useState(null);

  
  if (selectedImage) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2">Moments of Peace</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-4">Our Healing Space</h3>
          <p className="text-stone-500 max-w-2xl mx-auto">Glimpses of our daily yoga practice, therapy sessions, and the serene environment at Dadu Yoga & Wellness.</p>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mt-6"></div>
        </motion.div>

        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryPhotos.map((photo, index) => (
            <motion.div 
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              onClick={() => setSelectedImage(photo.src)}
              className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={photo.src} 
                alt={photo.alt} 
                loading="lazy"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
             
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-colors duration-300 flex items-center justify-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="bg-white/90 text-stone-800 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100"
                >
                  <FiZoomIn className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-8">
            
           
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-stone-950/90 backdrop-blur-md cursor-zoom-out"
            ></motion.div>

           
            <motion.button 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-[120] text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
            >
              <FiX className="w-8 h-8" />
            </motion.button>

            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 max-w-5xl w-full max-h-full flex justify-center"
              onClick={(e) => e.stopPropagation()} 
            >
              <img 
                src={selectedImage} 
                alt="Enlarged Yoga View" 
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl ring-1 ring-white/10"
              />
            </motion.div>
            
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
