import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#020005]">
      {/* 
         ROYAL TINT BASE
         A deep, regal purple gradient emanating from the top
      */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: 'radial-gradient(circle at 50% -10%, #3b0764, #1e0030, #000000 90%)'
        }}
      />

      {/* 
          ANIMATED ORBS
          Orb 1: Deep Royal Purple (Foundation)
          Orb 2: The "Bleach" Light (High contrast white/pale violet)
          Orb 3: Rich Magenta/Plum (Accent)
      */}
      
      {/* Royal Purple Orb */}
      <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#581c87] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-blob" />
      
      {/* The Bleach Light (Right side, as requested) */}
      <div className="absolute top-[10%] -right-[10%] w-[600px] h-[600px] bg-[#e9d5ff] rounded-full mix-blend-overlay filter blur-[120px] opacity-30 animate-blob animation-delay-2000" />
      
      {/* Lower Atmosphere */}
      <div className="absolute bottom-[-20%] left-[20%] w-[900px] h-[900px] bg-[#4c1d95] rounded-full mix-blend-screen filter blur-[180px] opacity-10 animate-blob animation-delay-4000" />

      {/* Bleach/Static Noise Overlay for Texture */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />
      
      {/* Thin Grid Lines - Bleached Silver */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: 'linear-gradient(rgba(233, 213, 255, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(233, 213, 255, 0.8) 1px, transparent 1px)',
          backgroundSize: '120px 120px'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;