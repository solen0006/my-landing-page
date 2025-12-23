import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="relative z-10 py-32 bg-black/20">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header - Large Subheading style */}
        <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Industry Feedback
            </h2>
            <p className="text-xl text-white/50 font-light">
                Trusted by the best.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col justify-between relative p-10 md:p-12 border border-white/10 bg-white/[0.02] rounded-3xl hover:bg-white/[0.04] transition-colors duration-300"
            >
              <Quote className="w-10 h-10 text-royal-500/50 mb-8" />
              
              {/* Quote - Lighter weight, not bold */}
              <blockquote className="font-display text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-10 relative z-10">
                “{testimonial.quote}”
              </blockquote>

              <div className="flex items-center gap-5 mt-auto">
                {/* Image (Avatar) - Slightly larger with shadow */}
                <div className="w-16 h-16 shrink-0 rounded-full p-[2px] bg-gradient-to-tr from-royal-300 to-royal-600 shadow-lg shadow-royal-500/20">
                   <img 
                     src={testimonial.image} 
                     alt={testimonial.author}
                     className="w-full h-full rounded-full object-cover border-2 border-black"
                   />
                </div>
                
                <div>
                  <div className="font-display font-bold text-2xl text-white tracking-tight mb-1">
                    {testimonial.author}
                  </div>
                  <div className="text-base text-white/60 font-light flex flex-wrap items-center gap-2">
                    <span className="text-bleach-100">{testimonial.role}</span>
                    <span className="w-1 h-1 rounded-full bg-royal-500/50"></span>
                    <span className="text-royal-300 font-medium">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;