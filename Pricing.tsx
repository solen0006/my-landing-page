import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PRICING_TIERS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="relative z-10">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Pricing</h2>
          <p className="text-xl text-bleach-DEFAULT/60 font-light">Flexible engagement models.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 rounded-3xl backdrop-blur-xl border transition-all duration-300 flex flex-col ${
                tier.isPopular 
                  ? 'bg-royal-900/40 border-royal-500/50 shadow-[0_0_50px_rgba(91,33,182,0.2)]' 
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="text-4xl font-light mb-4 text-royal-300">{tier.price}</div>
                <p className="text-bleach-DEFAULT/50 text-sm leading-relaxed min-h-[3rem]">{tier.description}</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-royal-500/30 text-royal-300 mt-0.5">
                        <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm text-bleach-DEFAULT/70">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${
                tier.isPopular
                  ? 'bg-white text-black hover:bg-bleach-100 shadow-lg shadow-white/10'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/5'
              }`}>
                {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;