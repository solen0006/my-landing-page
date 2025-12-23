import React from 'react';
import { motion } from 'framer-motion';
import { WHY_CHOOSE_US } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-solen" className="relative py-32 bg-black z-10">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header - Centered */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-royal-300 text-sm font-bold tracking-widest uppercase">The Advantage</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Why leaders prefer Solen
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/50 max-w-2xl mx-auto font-light"
          >
            Engineered to remove friction. Designed for speed.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-10 md:p-14 rounded-[32px] bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="mb-10 w-16 h-16 rounded-2xl bg-royal-500/10 flex items-center justify-center text-royal-300 group-hover:bg-royal-500 group-hover:text-white transition-all duration-300">
                <item.icon className="w-8 h-8" />
              </div>
              
              <div className="mb-6">
                 <h3 className="font-display text-3xl font-bold text-white mb-3">{item.title}</h3>
                 <p className="text-white/50 leading-relaxed text-lg">{item.description}</p>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-white/10 text-sm font-mono text-royal-300">
                 {item.stat}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;