import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center z-10">
        
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Apple-like ease
          className="font-display font-bold text-6xl md:text-8xl lg:text-[7rem] leading-[1.1] md:leading-[1] tracking-tight mb-8 text-white"
        >
          Deploy elite <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-300 via-bleach-100 to-white">
            engineering talent.
          </span>
        </motion.h1>

        {/* Subtitle - Dimmed for Contrast */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-white/50 max-w-2xl leading-relaxed mb-10 font-light"
        >
          Skip the hiring friction. Access the top 1% of developers, vetted and ready to ship code in under 24 hours.
        </motion.p>

      </div>
    </section>
  );
};

export default Hero;