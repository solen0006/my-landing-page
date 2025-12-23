import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import AnimatedBackground from './components/AnimatedBackground';
import { ArrowUpRight } from 'lucide-react';

const App: React.FC = () => {
  const [showStickyCTA, setShowStickyCTA] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white font-sans selection:bg-purple-500/30 selection:text-white relative bg-black">
      <AnimatedBackground />
      
      <Navbar />
      
      <main className="relative z-10 flex flex-col">
        <Hero />
        
        {/* Why Choose Us - "Why they prefer..." section */}
        <WhyChooseUs />
        
        {/* Process - "Maximize your returns..." section (Darker contrast) */}
        <Process />
        
        {/* Stats - "We've helped..." section */}
        <Stats />
        
        <Services />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />

      {/* Sticky CTA */}
      <div 
        className={`md:hidden fixed bottom-6 left-6 right-6 z-50 transition-all duration-500 transform ${
          showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <button className="w-full bg-white text-black font-display font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          <span>Start Project</span>
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default App;