
import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle } from 'react-icons/fi';
import guruPhoto from '../assets/main.jpeg';


const qualifications = [
  { 
    id: 1, 
    title: "YCB Certified", 
    subtitle: "Yoga Certification Board",
  },
  { 
    id: 2, 
    title: "Diploma in Yogic Science", 
    subtitle: "& Naturopathy",
  },
  { 
    id: 3, 
    title: "Master in Yogic Science", 
    subtitle: "Advanced Yoga Philosophy",
  },
  { 
    id: 4, 
    title: "Diet & Ayurvedic Nutritionist", 
    subtitle: "Holistic Diet Planning",
  },
  { 
    id: 5, 
    title: "Acupressure & Cupping", 
    subtitle: "Alternative Therapy Diploma",
  },
  { 
    id: 6, 
    title: "Ayurved Pharmacist", 
    subtitle: "(Upvaid) Certification",
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 relative"
          >
           
            <div className="absolute inset-0 bg-emerald-600 rounded-[3rem] transform -rotate-3 scale-105 opacity-10"></div>
            
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white z-10">
              <img 
                src={guruPhoto}
                alt="Yoga Acharya Rakesh Sharma" 
                className="w-full h-[500px] lg:h-[650px] object-cover bg-stone-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-bold text-3xl mb-1 drop-shadow-lg">Rakesh Sharma</p>
                <p className="text-emerald-300 font-semibold tracking-wider uppercase text-sm">Yoga Acharya & Healer</p>
              </div>
            </div>

           
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-stone-100 z-20 flex items-center gap-4 animate-bounce-slow">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <FiCheckCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl font-extrabold text-stone-800">100%</p>
                <p className="text-xs font-bold text-stone-500 uppercase tracking-wider">Authentic Healing</p>
              </div>
            </div>
          </motion.div>



          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-7/12"
          >
            <h2 className="text-emerald-600 font-bold tracking-widest text-sm uppercase mb-3">About The Founder</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-6 leading-tight">
              Healing through the <br/> wisdom of ancient sciences.
            </h3>
            <p className="text-stone-600 mb-8 text-lg leading-relaxed bg-stone-50 p-6 rounded-2xl border border-stone-100">
              With deep expertise in Yogic Science, Naturopathy, and Ayurveda, <strong>Yoga Acharya Rakesh Sharma</strong> brings a holistic approach to wellness. We don't just treat symptoms; we identify the root cause of your ailments and cure them naturally without harsh chemicals.
            </p>
            
            <h4 className="text-stone-900 font-bold text-xl mb-6 flex items-center">
              <FiAward className="text-emerald-500 mr-3 w-6 h-6" /> Qualifications & Expertise
            </h4>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {qualifications.map((qual, index) => (
                <motion.div 
                  key={qual.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-stone-200 p-4 rounded-xl flex items-center shadow-sm hover:border-emerald-200 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mr-4 shrink-0">
                    <FiCheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-800 text-sm">{qual.title}</h5>
                    <p className="text-stone-500 text-xs mt-0.5">{qual.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;