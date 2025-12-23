import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: 'Open your request',
      description: 'Post your technical requirements or simply link a GitHub issue. We parse it instantly.'
    },
    {
      id: '02',
      title: 'Match & Deposit',
      description: 'Review your auto-matched expert. Secure funds in escrow to start the sprint immediately.'
    },
    {
      id: '03',
      title: 'Watch code ship',
      description: 'Pull requests arrive in your repo. Tests pass. You approve. Funds release automatically.'
    }
  ];

  return (
    <section className="relative py-32 bg-royal-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3b0764,transparent_70%)] opacity-30" />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-royal-300 mb-4"
          >
            Workflow
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white max-w-3xl"
          >
            Maximize velocity with a workflow that generates.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group"
            >
              <div className="text-6xl font-display font-bold text-white/5 mb-8 group-hover:text-royal-500/20 transition-colors duration-500">
                {step.id}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-bleach-100 transition-colors">
                {step.title}
              </h3>
              <p className="text-white/50 leading-relaxed text-lg">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;