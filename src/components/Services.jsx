

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheckCircle } from 'react-icons/fi';


const servicesData = [
  { id: 1, title: "Asana Practice", image: "/images/s1.jpeg", about: "Physical postures to align, strengthen, and balance the body.", benefits: ["Increases flexibility", "Builds muscle strength", "Improves posture"] },
  { id: 2, title: "Pranayama", image: "/images/s2.jpeg", about: "Synchronized breathing exercises to clear physical and emotional blockages.", benefits: ["Reduces stress & anxiety", "Improves lung capacity", "Calms the nervous system"] },
  { id: 3, title: "Mudra", image: "/images/s3.jpeg", about: "Symbolic hand gestures to channel the flow of energy in the body.", benefits: ["Stimulates brain functions", "Enhances deep focus", "Balances body elements"] },
  { id: 4, title: "Bandha", image: "/images/s4.jpeg", about: "Internal energy locks used to control Prana (life force) flow.", benefits: ["Strengthens core organs", "Boosts digestion", "Increases vitality"] },
  { id: 5, title: "Shatkarma", image: "/images/s5.jpeg", about: "Six yogic purification techniques to clean the body internally.", benefits: ["Detoxifies internal organs", "Balances Tridoshas", "Clears respiratory tract"] },
  { id: 6, title: "Acupressure", image: "/images/s6.jpeg", about: "Applying pressure to specific points to stimulate self-healing.", benefits: ["Relieves chronic pain", "Improves blood flow", "Promotes instant relaxation"] },
  { id: 7, title: "Meditation", image: "/images/s7.jpeg", about: "Mental training to achieve a clear, emotionally calm, and stable state.", benefits: ["Reduces negative thoughts", "Boosts self-awareness", "Improves sleep cycle"] },
  { id: 8, title: "Nadi Pariksha", image: "/images/s8.jpeg", about: "Ancient Ayurvedic pulse diagnosis to detect root causes of imbalances.", benefits: ["Accurate health diagnosis", "Custom dietary advice", "Early illness detection"] },
  { id: 9, title: "Ayurveda Therapy", image: "/images/s9.jpeg", about: "Holistic healing therapies based on your specific body constitution.", benefits: ["Enhances immunity", "Rejuvenates bodily tissues", "100% natural healing"] },
  { id: 10, title: "Diet & Nutrition", image: "/images/s10.jpeg", about: "Customized yogic diet plans to nourish and support your healing.", benefits: ["Sustainable weight loss", "Higher daily energy", "Better gut health"] },
  { id: 11, title: "Cleansing Therapy", image: "/images/s11.jpeg", about: "Deep detoxification processes to flush toxins from liver and kidneys.", benefits: ["Glowing, clear skin", "Reduces inflammation", "Resets digestion"] },
  { id: 12, title: "Corporate Yoga", image: "/images/s12.jpeg", about: "Tailored wellness programs to manage workplace stress and posture.", benefits: ["Fixes desk-job posture", "Increases productivity", "Reduces burnout"] }
];

// Card Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
  }),
  hover: {
    y: -8,
    transition: { duration: 0.2 }
  }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.4, duration: 0.6 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Background scroll lock
  if (selectedService) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <section id="services" className="py-20 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2">Our Offerings</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4">Elevate Your Wellbeing</h3>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              onClick={() => setSelectedService(service)}
              className="relative group h-[280px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Background Image that zooms on hover */}
              <motion.img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>
              
              {/* Text Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none">
                <h4 className="text-xl font-bold text-white mb-1 drop-shadow-md">{service.title}</h4>
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  whileHover={{ opacity: 1, height: 'auto' }}
                  className="text-emerald-100 text-sm line-clamp-2"
                >
                  {service.about}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL POPUP (The "Click to Open" part) */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            
            {/* Dark Background Overlay */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm cursor-pointer"
            ></motion.div>

            {/* The Actual Modal Box */}
            <motion.div 
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 bg-white/50 hover:bg-white text-stone-900 p-2 rounded-full transition-colors shadow-sm"
              >
                <FiX className="w-5 h-5" />
              </button>

              {/* Left Side: Image */}
              <div className="w-full md:w-2/5 h-48 md:h-auto relative shrink-0">
                <img src={selectedService.image} className="w-full h-full object-cover" alt={selectedService.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent md:bg-none"></div>
                {/* Mobile Title overlay */}
                <h3 className="absolute bottom-4 left-4 text-2xl font-extrabold text-white md:hidden drop-shadow-lg">
                  {selectedService.title}
                </h3>
              </div>

              {/* Right Side: Content (Scrollable if needed on very small screens) */}
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col overflow-y-auto">
                <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider mb-2 hidden md:block">Service Details</span>
                <h3 className="text-3xl font-extrabold text-stone-900 mb-4 hidden md:block">{selectedService.title}</h3>
                
                <p className="text-stone-600 text-[15px] leading-relaxed mb-6 bg-stone-50 p-4 rounded-xl border border-stone-100">
                  {selectedService.about}
                </p>

                <h4 className="text-stone-900 font-bold text-sm mb-4 uppercase tracking-wide">Key Benefits:</h4>
                <div className="space-y-4 mb-8">
                  {selectedService.benefits.map((benefit, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="flex items-center"
                    >
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-4 shrink-0">
                        <FiCheckCircle className="text-emerald-600 w-4 h-4" />
                      </div>
                      <span className="text-stone-700 text-sm font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-auto pt-4 border-t border-stone-100">
                  <a 
                    href="#contact" 
                    onClick={() => setSelectedService(null)} 
                    className="block w-full text-center bg-emerald-600 text-white py-3.5 rounded-xl font-bold hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm"
                  >
                    Book {selectedService.title} Session
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;