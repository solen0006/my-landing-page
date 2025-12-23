import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Command } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/5 backdrop-blur-xl border-b border-white/5">
        <div className="w-full px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white to-royal-300 flex items-center justify-center text-royal-900 shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-shadow">
               <Command className="w-4 h-4" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">solen</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-bold text-white hover:text-bleach-100 transition-all hover:shadow-[0_1px_0_0_white]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
             <a href="#" className="text-sm font-bold text-white hover:text-bleach-100 transition-colors">Log in</a>
             {/* High Contrast Sign Up Button */}
             <button className="bg-white text-black text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
               Sign up
             </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white z-50 p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-royal-900/95 backdrop-blur-3xl flex flex-col pt-24 px-6"
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-3xl font-display font-bold text-white py-6 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
            <div className="mt-8 flex flex-col gap-4">
               <button className="w-full bg-white text-black py-4 rounded-xl font-bold shadow-lg shadow-white/10">Sign up</button>
               <button className="w-full text-white py-4 font-bold border border-white/10 rounded-xl">Log in</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;