import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="expertise" className="relative z-10 py-24">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
            Precision Engineering on Demand
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
            Bypass hiring bottlenecks. Deploy top 1% talent for critical tasks instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative glass-panel p-10 rounded-[24px] border border-white/5 hover:border-royal-500/50 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(91,33,182,0.15)] flex flex-col"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-royal-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-royal-500/10 flex items-center justify-center mb-8 group-hover:bg-royal-500 group-hover:shadow-[0_0_20px_rgba(126,34,206,0.4)] transition-all duration-300">
                  <service.icon className="w-7 h-7 text-royal-300 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-bleach-100 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-white/50 mb-8 leading-relaxed text-base min-h-[3rem]">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-bold uppercase tracking-wider text-white/30 border border-white/10 px-3 py-1.5 rounded-lg group-hover:border-royal-300/30 group-hover:text-white/80 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;