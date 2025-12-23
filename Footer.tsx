import React from 'react';
import { Command } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-20 border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 md:gap-24 mb-20">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white">
                 <Command className="w-4 h-4" />
               </div>
               <span className="font-display font-bold text-xl tracking-tight text-white">solen</span>
            </a>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Research</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Index</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Latest</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">API</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Docs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Charter</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 text-xs text-white/30">
          <p>Solen © 2024</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms & policies</a>
            <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-white transition-colors">Brand guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;