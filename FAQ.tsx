import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative z-10 py-24">
      <div className="w-full max-w-[1000px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/50 font-light">
            Everything you need to know about the platform.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-royal-900/40 border-royal-500/50 shadow-[0_0_30px_rgba(91,33,182,0.15)]' 
                    : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/[0.07]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between gap-6 text-left"
                >
                  <span className={`font-display text-lg md:text-xl font-bold transition-colors ${
                    isOpen ? 'text-white' : 'text-white/70'
                  }`}>
                    {item.question}
                  </span>
                  <div className={`shrink-0 p-2 rounded-full transition-all duration-300 ${
                    isOpen ? 'bg-royal-500 text-white rotate-180' : 'bg-white/10 text-white/50 group-hover:bg-white/20'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-8 pb-8 pt-0">
                        <p 
                          className="text-white/50 leading-relaxed text-lg font-light"
                          dangerouslySetInnerHTML={{ 
                            __html: item.answer.replace(/\*\*(.*?)\*\*/g, '<span class="text-white font-medium">$1</span>') 
                          }} 
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;