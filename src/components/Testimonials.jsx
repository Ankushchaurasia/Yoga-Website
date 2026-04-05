

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiCheckCircle } from 'react-icons/fi';
import video1 from '../assets/Videos/vid1.mp4';
import video2 from '../assets/Videos/vid2.mp4';
import video3 from '../assets/Videos/vid3.mp4';
import video4 from '../assets/Videos/vid4.mp4';
import video5 from '../assets/Videos/vid5.mp4';
import video6 from '../assets/Videos/vid6.mp4';

const videoReviews = [
  { 
    id: 1, 
    name: "Sakshi Arora", 
    issueResolved: "Severe Back Pain & Sciatica", 
    videoSrc: video1, 
    posterImg: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80"
  },
  { 
    id: 2, 
    name: "Sushil Malik", 
    issueResolved: "Frozen Shoulder", 
    videoSrc: video2, 
    posterImg: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80"
  },
  { 
    id: 3, 
    name: "Himangi", 
    issueResolved: "Sinus & Breathing Issue", 
    videoSrc: video3, 
    posterImg: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=600&q=80"
  },
  { 
    id: 4, 
    name: "Shiv kaushik", 
    issueResolved: "Frozen shoulder", 
    videoSrc: video4, 
    posterImg: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80"
  },
  { 
    id: 5, 
    name: "Ravi", 
    issueResolved: "Back Pain & Nerve Issue", 
    videoSrc: video5, 
    posterImg: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80"
  },
  { 
    id: 6, 
    name: "Kusum", 
    issueResolved: "Varicose vains ", 
    videoSrc: video6, 
    posterImg: "https://images.unsplash.com/photo-1552286450-4a669f880062?auto=format&fit=crop&w=600&q=80"
  }
];

const Testimonials = () => {
  
  const videoRefs = useRef([]);

 
  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {

      if (video && i !== index) {
        video.pause();
      }
    });
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
       
          if (!entry.isIntersecting && entry.target) {
            entry.target.pause(); // Video ko pause kar do
          }
        });
      },
      { threshold: 0.2 } 
    );

  
    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    // Cleanup function
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-2">Success Stories</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Real Healing, Real People</h3>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Don't just take our word for it. Listen directly to our students who have transformed their health and lives through our authentic Yogic and Ayurvedic treatments.
          </p>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoReviews.map((review, index) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-stone-800 rounded-2xl overflow-hidden shadow-2xl border border-stone-700 hover:border-emerald-500 hover:shadow-emerald-900/50 transition-all duration-300 group flex flex-col"
            >
              {/* HTML5 Video Player */}
              <div className="relative w-full aspect-video bg-black">
                <video 
                  // 👇 YAHAN NAYA LOGIC ADD KIYA GAYA HAI 👇
                  ref={(el) => (videoRefs.current[index] = el)}
                  onPlay={() => handlePlay(index)}
                  controls 
                  preload="none" 
                  poster={review.posterImg} 
                  controlsList="nodownload" 
                  className="w-full h-full object-cover"
                >
                  <source src={review.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Reviewer Details Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* 5 Stars */}
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => <FiStar key={i} fill="currentColor" className="w-4 h-4 mr-1" />)}
                </div>
                
                <h4 className="text-xl font-bold text-white mb-1">{review.name}</h4>
                
                {/* Verified Issue Badge */}
                <div className="flex items-start mt-auto pt-4 border-t border-stone-700">
                  <FiCheckCircle className="text-emerald-400 w-5 h-5 mr-2 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-stone-400 text-xs font-semibold uppercase tracking-wider mb-0.5">Successfully Cured</p>
                    <p className="text-emerald-300 text-sm font-medium">{review.issueResolved}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action below videos */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a 
            href="#contact" 
            className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300"
          >
            Start Your Healing Journey Today
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;