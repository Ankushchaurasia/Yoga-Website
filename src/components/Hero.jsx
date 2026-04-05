

import React from 'react';
import { motion } from 'framer-motion';
import { FiPlayCircle, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-stone-50">
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-6">
              🌿 Welcome to Dadu Yoga & Wellness
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-stone-800 mb-6 leading-tight">
              Harmony & Balance <br/>
              <span className="text-emerald-600 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
                Body, Mind & Soul
              </span>
            </h1>
            <p className="text-lg text-stone-600 mb-8 max-w-lg leading-relaxed">
              Transform your life through ancient yoga techniques, personalized Ayurveda, and mental wellness counseling guided by Yoga Acharya Rakesh Sharma.
            </p>
            
            {/* Working Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/30 group"
              >
                Book Your Session
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#programs"
                className="flex items-center justify-center bg-white text-stone-800 border-2 border-stone-200 px-8 py-4 rounded-full font-bold hover:border-emerald-600 hover:text-emerald-600 transition-all"
              >
                <FiPlayCircle className="mr-2 text-xl" />
                Explore Classes
              </a>
            </div>
            
            {/* Trust Metrics */}
            <div className="mt-10 pt-8 border-t border-stone-200 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-stone-800">5k+</p>
                <p className="text-sm text-stone-500 font-medium">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-stone-800">15+</p>
                <p className="text-sm text-stone-500 font-medium">Therapy Types</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              
              <img 
                src="/images/h1.jpeg" 
                alt="Yoga Meditation" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
            </div>

            {/* Floating Experience Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-stone-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-2xl">
                  🏆
                </div>
                <div>
                  <p className="text-xl font-bold text-stone-800">10+ Years</p>
                  <p className="text-sm text-stone-500">Of Teaching Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;