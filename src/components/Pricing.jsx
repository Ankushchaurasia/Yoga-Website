

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight, FiZap, FiStar, FiUser } from 'react-icons/fi';

const pricingPlans = [
  {
    id: 1,
    title: "Online Group",
    price: "1,999",
    type: "Monthly",
    desc: "Live virtual sessions for budget-friendly healing.",
    features: ["Daily Yoga Classes", "Pranayama Practice", "Basic Meditation", "WhatsApp Support"],
    highlight: false,
    btnText: "Book Online Group"
  },
  {
    id: 2,
    title: "Offline Group",
    price: "2,999",
    type: "Monthly",
    desc: "Energy of the studio with group healing vibes.",
    features: ["All Yoga", "Bowl Sound Healing", "Yoga Nidra Session", "Advance Yoga Poses"],
    highlight: true, // Most Popular
    btnText: "Book Offline Group"
  },
  {
    id: 3,
    title: "Online Personal",
    price: "8,999",
    type: "Monthly",
    desc: "1-on-1 dedicated care from your home.",
    features: ["Personal Attention", "Disease Specific Cure", "Ayurvedic Diet Plan", "Flexible Timing"],
    highlight: false,
    btnText: "Book Online VIP"
  },
  {
    id: 4,
    title: "Offline Personal",
    price: "11,999",
    type: "Monthly",
    desc: "Ultimate 1-on-1 physical healing at studio.",
    features: ["Full Physical Diagnosis", "Organ Cleansing Herbs", "Intense Sound Healing", "Premium Personal Care"],
    highlight: false,
    isVip: true,
    btnText: "Book Offline VIP"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 lg:py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-2"
          >
            Invest in Yourself
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-4"
          >
            Choose Your Wellness Plan
          </motion.h3>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* 4-Card Grid (Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-6 rounded-[2rem] flex flex-col h-full transition-all duration-300 group
                ${plan.highlight 
                  ? 'bg-emerald-700 text-white shadow-2xl scale-105 z-10 border-4 border-emerald-500/50' 
                  : plan.isVip 
                    ? 'bg-stone-900 text-white shadow-xl border border-stone-800'
                    : 'bg-white text-stone-800 shadow-md border border-stone-100 hover:shadow-xl'
                }`}
            >
              {/* Badges */}
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-stone-900 text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-tighter">
                  Most Popular
                </div>
              )}
              {plan.isVip && (
                <div className="absolute top-4 right-6 text-amber-400 flex gap-0.5">
                  <FiStar fill="currentColor" /><FiStar fill="currentColor" /><FiStar fill="currentColor" />
                </div>
              )}

              <div className="mb-6">
                <h4 className={`text-lg font-bold mb-1 ${plan.highlight || plan.isVip ? 'text-white' : 'text-stone-900'}`}>
                  {plan.title}
                </h4>
                <p className={`text-xs ${plan.highlight || plan.isVip ? 'text-stone-300' : 'text-stone-500'} leading-tight h-8`}>
                  {plan.desc}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-3xl font-black">₹{plan.price}</span>
                <span className={`text-xs font-medium ${plan.highlight || plan.isVip ? 'text-stone-400' : 'text-stone-400'}`}>
                  /{plan.type.toLowerCase()}
                </span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-xs font-medium">
                    <FiCheckCircle className={`mt-0.5 mr-2 shrink-0 ${plan.highlight ? 'text-emerald-300' : 'text-emerald-500'}`} />
                    <span className={plan.highlight || plan.isVip ? 'text-stone-200' : 'text-stone-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={`w-full py-3 rounded-xl font-bold text-sm text-center transition-all
                  ${plan.highlight 
                    ? 'bg-white text-emerald-800 hover:bg-stone-100 shadow-lg' 
                    : plan.isVip 
                      ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg'
                      : 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50'
                  }`}
              >
                {plan.btnText}
              </a>
            </motion.div>
          ))}
        </div>

        {/* corporate */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-emerald-100 flex flex-col md:flex-row items-center justify-between relative overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute top-0 left-0 w-32 h-full bg-emerald-500/5 blur-3xl pointer-events-none"></div>
          
          <div className="md:w-3/5 relative z-10 text-center md:text-left mb-8 md:mb-0">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <FiZap className="text-amber-500 fill-amber-500" />
              <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest">Premium Business Package</span>
            </div>
            <h3 className="text-3xl font-black text-stone-900 mb-4">Corporate Session</h3>
            <p className="text-stone-600 text-sm mb-6 max-w-lg">
              This is our <strong className="text-emerald-600">All-Inclusive Master Session</strong>. Your team gets access to everything: Sound Healing, Yoga Nidra, Advance Yoga, and Stress Management counseling in one mega session.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-left">
              <div className="flex items-center text-xs font-bold text-stone-700"><FiCheckCircle className="text-emerald-500 mr-2" /> All-in-One Premium Features</div>
              <div className="flex items-center text-xs font-bold text-stone-700"><FiCheckCircle className="text-emerald-500 mr-2" /> Stress & Anxiety Reset</div>
              <div className="flex items-center text-xs font-bold text-stone-700"><FiCheckCircle className="text-emerald-500 mr-2" /> Team Building through Yoga</div>
              <div className="flex items-center text-xs font-bold text-stone-700"><FiCheckCircle className="text-emerald-500 mr-2" /> Posture Correction Workshop</div>
            </div>
          </div>

          <div className="md:w-1/3 flex flex-col items-center md:items-end">
            <div className="text-center md:text-right mb-6">
              <span className="text-5xl font-black text-emerald-600">₹4,999</span>
              <p className="text-stone-400 font-bold text-xs uppercase mt-1 tracking-widest">Per Session Only</p>
            </div>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-10 py-4 bg-stone-900 text-white font-bold rounded-2xl hover:bg-emerald-600 hover:shadow-xl transition-all flex items-center justify-center group"
            >
              Book For Team <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Pricing;