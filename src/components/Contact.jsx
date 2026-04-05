

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiClock, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    program: 'General Yoga',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 


    const whatsappNumber = "919991544606"; 


    const textMessage = `Name: ${formData.name}%0APhone: ${formData.phone}%0AProgram: ${formData.program}%0AMessage: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${textMessage}`;
    window.open(whatsappUrl, "_blank");

    setFormData({ name: '', phone: '', program: 'General Yoga', message: '' });
  };

  return (
    <section id="contact" className="py-12 lg:py-16 bg-stone-50 overflow-hidden relative min-h-[85vh] flex items-center">
      
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/50 rounded-l-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Compact Header */}
        <div className="text-center mb-10">
          <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-1">Connect With Us</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-3">Start Your Healing Journey</h3>
          <div className="w-12 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-stone-100 max-w-5xl mx-auto">
          
        
          <div className="bg-emerald-700 text-white p-8 lg:p-10 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-600 rounded-full opacity-50 blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold mb-3">Get in Touch</h3>
              <p className="text-emerald-100 mb-8 text-sm leading-relaxed">
                Fill out the form to instantly connect with our team on WhatsApp.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-emerald-600/50 rounded-full flex items-center justify-center mr-4 shrink-0 mt-1">
                    <FiPhone className="w-5 h-5 text-emerald-100" />
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-100 text-[10px] uppercase tracking-wider mb-1">Phone & WhatsApp</p>
                    <p className="text-lg font-bold leading-snug">+91 99915 44606</p>
                    <p className="text-lg font-bold leading-snug">+91 70150 91875</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald-600/50 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <FiClock className="w-5 h-5 text-emerald-100" />
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-100 text-[10px] uppercase tracking-wider">Working Hours</p>
                    <p className="font-bold text-sm">Mon–Sat: 5:00 AM – 9:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald-600/50 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <FiMapPin className="w-5 h-5 text-emerald-100" />
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-100 text-[10px] uppercase tracking-wider">Clinic Address</p>
                    <p className="font-medium text-sm leading-tight text-emerald-50">
                      Sector-11, Khandsa Road
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

      
          <div className="p-8 lg:p-10 lg:w-3/5 bg-white">
            <h3 className="text-xl font-extrabold text-stone-900 mb-5">Book a Session</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1 uppercase tracking-wide">Your Name <span className="text-rose-500">*</span></label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-stone-100 bg-stone-50 focus:bg-white focus:border-emerald-500 outline-none transition-all text-sm font-medium text-stone-800" 
                    placeholder="Enter full name" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1 uppercase tracking-wide">Phone Number <span className="text-rose-500">*</span></label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-stone-100 bg-stone-50 focus:bg-white focus:border-emerald-500 outline-none transition-all text-sm font-medium text-stone-800" 
                    placeholder="WhatsApp number" 
                  />
                </div>
              </div>
              
              {/* Select Program */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1 uppercase tracking-wide">Select Program <span className="text-rose-500">*</span></label>
                <select 
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-stone-100 bg-stone-50 focus:bg-white focus:border-emerald-500 outline-none transition-all text-sm font-medium text-stone-800 cursor-pointer"
                >
                  <option value="General Yoga">General Yoga Practice</option>
                  <option value="Weight Loss">Weight Loss Program</option>
                  <option value="Back Pain Therapy">Back Pain & Cervical Therapy</option>
                  <option value="PCOD / Thyroid">PCOD / Thyroid Management</option>
                  <option value="Counseling">Mental Wellness Counseling</option>
                  <option value="Personal Training">1-on-1 Premium Personal Training</option>
                  <option value="Corporate Session">Corporate Wellness Session</option>
                </select>
              </div>

              {/* Message Area */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1 uppercase tracking-wide">Message (Optional)</label>
                <textarea 
                  rows="2" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-stone-100 bg-stone-50 focus:bg-white focus:border-emerald-500 outline-none transition-all text-sm font-medium text-stone-800 resize-none" 
                  placeholder="Any specific health conditions..."
                ></textarea>
              </div>

              {/* Submit Button (WhatsApp Style) */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full flex items-center justify-center bg-[#25D366] text-white font-bold text-base py-3.5 rounded-lg hover:bg-[#1ebe57] hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 mt-2 group"
              >
                <FaWhatsapp className="mr-2 text-xl" />
                Send via WhatsApp
                <FiSend className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all absolute right-8" />
              </motion.button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;