import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiClock, FiMapPin, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

// 👇 YAHAN EXTENSIONS (.jpeg aur .avif) FIX KAR DIYE GAYE HAIN 👇
const programsData = [
  { 
    id: 1, 
    title: "Weight Loss Yoga", 
    tag: "Popular",
    tagColor: "bg-orange-100 text-orange-700",
    image: "/images/p1.jpeg", // Fix: .jpeg
    duration: "60 Mins", 
    mode: "Online & Offline",
    about: "A high-energy, dynamic yoga sequence designed to burn calories, boost metabolism, and tone muscles naturally without heavy gym equipment.",
    highlights: ["Fat-burning Asanas", "Core strengthening", "Personalized diet chart included"]
  },
  { 
    id: 2, 
    title: "Back Pain & Cervical", 
    tag: "Therapy",
    tagColor: "bg-blue-100 text-blue-700",
    image: "/images/p2.jpeg", // Fix: .jpeg
    duration: "45 Mins", 
    mode: "Offline Recommended",
    about: "Therapeutic stretching and strengthening focusing specifically on spinal health to relieve chronic back, neck, and shoulder pain.",
    highlights: ["Spinal alignment correction", "Gentle tension release", "Posture improvement techniques"]
  },
  { 
    id: 3, 
    title: "Anxiety & Depression", 
    tag: "Counseling",
    tagColor: "bg-purple-100 text-purple-700",
    image: "/images/p3.jpeg", // Fix: .jpeg
    duration: "60 Mins", 
    mode: "Online & Offline",
    about: "A calming blend of restorative yoga, breathwork, and mental wellness counseling to help soothe the nervous system and bring emotional stability.",
    highlights: ["Deep breathing (Pranayama)", "Guided Meditation", "1-on-1 mental wellness chat"]
  },
  { 
    id: 4, 
    title: "PCOD / Thyroid Yoga", 
    tag: "Women's Health",
    tagColor: "bg-pink-100 text-pink-700",
    image: "/images/p4.jpeg", // Fix: .avif (Yeh file alag thi)
    duration: "60 Mins", 
    mode: "Online & Offline",
    about: "Specialized sequences targeting the endocrine system to help balance hormones naturally and manage symptoms of PCOD and Thyroid.",
    highlights: ["Hormonal balancing poses", "Stress reduction techniques", "Pelvic floor strengthening"]
  },
  { 
    id: 5, 
    title: "Diabetes Management", 
    tag: "Therapy",
    tagColor: "bg-blue-100 text-blue-700",
    image: "/images/p5.jpeg", // Fix: .jpeg
    duration: "50 Mins", 
    mode: "Online & Offline",
    about: "Specific Asanas and internal abdominal locks (Bandhas) that stimulate the pancreas, improve insulin sensitivity, and regulate blood sugar.",
    highlights: ["Abdominal organ stimulation", "Blood circulation boost", "Dietary adjustments"]
  },
  { 
    id: 6, 
    title: "Pregnancy Yoga", 
    tag: "Care",
    tagColor: "bg-rose-100 text-rose-700",
    image: "/images/p6.jpeg", // Fix: .jpeg
    duration: "45 Mins", 
    mode: "Offline Only",
    about: "Safe, gentle prenatal yoga to keep the mother active, relieve pregnancy-related discomfort, and prepare the body for a smooth delivery.",
    highlights: ["Safe stretching for joints", "Breathing for labor", "Relaxation for mother & baby"]
  },
  { 
    id: 7, 
    title: "Sleep Disorders (Insomnia)", 
    tag: "Relaxation",
    tagColor: "bg-indigo-100 text-indigo-700",
    image: "/images/p7.jpeg", // Fix: .jpeg
    duration: "40 Mins", 
    mode: "Online",
    about: "Late evening sessions focusing on Yoga Nidra (Yogic Sleep) and extreme relaxation techniques to cure insomnia and improve sleep quality.",
    highlights: ["Yoga Nidra practice", "Screen-free wind down", "Deep nervous system reset"]
  },
  { 
    id: 8, 
    title: "BP Control Yoga", 
    tag: "Therapy",
    tagColor: "bg-blue-100 text-blue-700",
    image: "/images/p8.jpeg", // Fix: .jpeg
    duration: "45 Mins", 
    mode: "Online & Offline",
    about: "A gentle practice that avoids sudden inversions and focuses on cooling pranayama and relaxing postures to safely lower high blood pressure.",
    highlights: ["Cooling breathing methods", "Heart-rate regulation", "Zero-strain asanas"]
  }
];

// ... (Baki ka neeche ka code waisa hi rahega)

// Animation setups
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Lock background scroll when modal is open
  if (selectedProgram) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2">Targeted Healing</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4">Specialized Programs</h3>
          <p className="text-stone-600 max-w-2xl mx-auto mb-6">Explore our specifically designed classes tailored to address unique health goals and medical conditions.</p>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Programs Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {programsData.map((prog) => (
            <motion.div
              key={prog.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProgram(prog)}
              className="bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group flex flex-col h-full"
            >
              {/* Card Image Area */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={prog.image} 
                  alt={prog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className={`absolute top-4 right-4 ${prog.tagColor} px-3 py-1 rounded-full text-xs font-bold shadow-sm`}>
                  {prog.tag}
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-emerald-600 transition-colors">{prog.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-stone-500 text-sm">
                    <FiClock className="mr-2 text-emerald-500" />
                    <span>Duration: <strong className="text-stone-700">{prog.duration}</strong></span>
                  </div>
                  <div className="flex items-center text-stone-500 text-sm">
                    <FiMapPin className="mr-2 text-emerald-500" />
                    <span>Mode: <strong className="text-stone-700">{prog.mode}</strong></span>
                  </div>
                </div>

                {/* Bottom link pushed to bottom via flex-grow on parent */}
                <div className="mt-auto pt-4 border-t border-stone-50 flex items-center text-emerald-600 font-semibold text-sm group-hover:text-emerald-700">
                  View Full Details <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* POPUP MODAL (Side-by-Side Design) */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            
            {/* Dark Overlay */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProgram(null)}
              className="absolute inset-0 bg-stone-900/70 backdrop-blur-sm cursor-pointer"
            ></motion.div>

            {/* Modal Box */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 z-20 bg-white shadow-md hover:bg-stone-100 text-stone-800 p-2 rounded-full transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>

              {/* Left Image Side */}
              <div className="w-full md:w-2/5 h-56 md:h-auto relative shrink-0">
                <img src={selectedProgram.image} className="w-full h-full object-cover" alt={selectedProgram.title} />
                <div className={`absolute top-4 left-4 ${selectedProgram.tagColor} px-4 py-1.5 rounded-full text-sm font-bold shadow-md`}>
                  {selectedProgram.tag}
                </div>
              </div>

              {/* Right Content Side */}
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col overflow-y-auto bg-stone-50/50">
                <h3 className="text-2xl md:text-3xl font-extrabold text-stone-900 mb-4">{selectedProgram.title}</h3>
                
                {/* Info Pills */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="bg-white px-4 py-2 rounded-lg border border-stone-200 shadow-sm flex items-center text-sm font-medium text-stone-700">
                    <FiClock className="mr-2 text-emerald-500 text-lg" /> {selectedProgram.duration}
                  </div>
                  <div className="bg-white px-4 py-2 rounded-lg border border-stone-200 shadow-sm flex items-center text-sm font-medium text-stone-700">
                    <FiMapPin className="mr-2 text-emerald-500 text-lg" /> {selectedProgram.mode}
                  </div>
                </div>

                <p className="text-stone-600 text-[15px] leading-relaxed mb-6">
                  {selectedProgram.about}
                </p>

                <h4 className="text-stone-900 font-bold text-sm mb-3 uppercase tracking-wide">Program Highlights:</h4>
                <div className="space-y-3 mb-8">
                  {selectedProgram.highlights.map((highlight, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                      className="flex items-start"
                    >
                      <FiCheckCircle className="text-emerald-500 w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-stone-700 text-sm font-medium">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Working Book Button - Points to #contact and closes modal */}
                <div className="mt-auto pt-4 border-t border-stone-200">
                  <a 
                    href="#contact" 
                    onClick={() => setSelectedProgram(null)} 
                    className="flex justify-center items-center w-full bg-stone-900 text-white py-3.5 rounded-xl font-bold hover:bg-emerald-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm group"
                  >
                    Enroll in {selectedProgram.title} <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
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

export default Programs;