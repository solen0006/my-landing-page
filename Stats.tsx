import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-24 border-y border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
           <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-sm font-bold tracking-widest uppercase text-white/40"
           >
             Our Impact
           </motion.p>
           <motion.h2 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="font-display text-3xl md:text-4xl font-bold text-white mt-4"
           >
             We've helped innovative companies scale.
           </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                {stat.value}<span className="text-royal-500">{stat.suffix}</span>
              </div>
              <p className="text-sm font-medium text-white/40 uppercase tracking-widest mt-4">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;