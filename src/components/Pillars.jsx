

import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiWind, FiSmile, FiSun } from 'react-icons/fi';

const pillars = [
  { 
    id: 1, 
    title: 'Physical Health', 
    icon: <FiHeart className="w-8 h-8" />, 
    desc: 'Build unstoppable strength, flexibility, and vitality in your body through dedicated Asana practice.',
    image: '/images/s1.jpeg',
    accent: 'text-rose-500',
    bgAccent: 'bg-rose-50',
    shadowHover: 'hover:shadow-rose-200'
  },
  { 
    id: 2, 
    title: 'Mental Clarity', 
    icon: <FiWind className="w-8 h-8" />, 
    desc: 'Achieve laser-sharp focus and absolute peace of mind through disciplined Pranayama and breathwork.',
    image: '/images/s2.jpeg',
    accent: 'text-blue-500',
    bgAccent: 'bg-blue-50',
    shadowHover: 'hover:shadow-blue-200'
  },
  { 
    id: 3, 
    title: 'Emotional Balance', 
    icon: <FiSmile className="w-8 h-8" />, 
    desc: 'Release trapped traumatic energy and cultivate a permanent state of joy and internal stability.',
    image: '/images/s5.jpeg',
    accent: 'text-emerald-500',
    bgAccent: 'bg-emerald-50',
    shadowHover: 'hover:shadow-emerald-200'
  },
  { 
    id: 4, 
    title: 'Spiritual Peace', 
    icon: <FiSun className="w-8 h-8" />, 
    desc: 'Connect with your higher self, awaken your chakras, and discover deeper inner peace through Meditation.',
    image: '/images/s7.jpeg',
    accent: 'text-amber-500',
    bgAccent: 'bg-amber-50',
    shadowHover: 'hover:shadow-amber-200'
  },
];

// Stagger Animation Setup (Cards ek-ek karke upar aayenge)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  }
};

const Pillars = () => {
  return (
    <section className="relative py-24 bg-stone-50 overflow-hidden">
      
      {/* 🟢 Background Floating Glow Blobs (To remove dimness) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        ></motion.div>
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 -right-20 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-bold tracking-widest text-xs uppercase mb-4"
          >
            The Foundation
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-4"
          >
            Our 4 Pillars of Wellness
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-500 max-w-2xl mx-auto text-lg"
          >
            True healing happens when all aspects of your being are in perfect harmony.
          </motion.p>
        </div>

        {/* The 4 Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`bg-white rounded-[2rem] overflow-hidden shadow-lg border border-stone-100 cursor-pointer transition-all duration-300 group ${pillar.shadowHover} hover:shadow-2xl`}
            >
              {/* Image Section - Top Half */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={pillar.image} 
                  alt={pillar.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Soft gradient bottom so image fades into white nicely */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
              </div>

              {/* Content Section - Bottom Half */}
              <div className="relative p-6 pt-10 flex flex-col items-center text-center">
                
                {/* Floating Icon overlapping image and text */}
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`absolute -top-12 w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-white ${pillar.accent}`}
                >
                  <div className={`w-full h-full rounded-full flex items-center justify-center ${pillar.bgAccent}`}>
                    {pillar.icon}
                  </div>
                </motion.div>

                <h4 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  {pillar.desc}
                </p>

                {/* Interactive Bottom Bar */}
                <div className={`w-12 h-1.5 rounded-full transition-all duration-300 group-hover:w-full ${pillar.bgAccent}`}></div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Pillars;