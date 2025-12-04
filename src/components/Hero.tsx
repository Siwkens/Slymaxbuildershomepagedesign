import { motion } from 'motion/react';
import logoImage from 'figma:asset/e47e3685f93d1b9665513a7612d90068758e001f.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
      
      {/* Radial glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4af37] opacity-5 blur-[120px] rounded-full" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img 
              src={logoImage} 
              alt="SLYMAX BUILDERS" 
              className="h-24 w-auto drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            />
          </motion.div>
          
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4e5b3] via-[#d4af37] to-[#b8941f]"
          >
            SLYMAX BUILDERS
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-gray-300"
          >
            Creating Spaces That Inspire
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105">
              <span className="relative z-10 font-semibold text-black">Get a Free Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#f4e5b3] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            
            <button className="group relative px-8 py-4 border-2 border-[#d4af37] rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105">
              <span className="relative z-10 font-semibold text-[#d4af37]">View Our Projects</span>
              <div className="absolute inset-0 bg-[#d4af37] opacity-0 group-hover:opacity-10 transition-opacity" />
            </button>
          </motion.div>
        </motion.div>
        
        {/* Right Content - 3D House Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative">
            {/* Glow effect behind house */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37] to-[#b8941f] opacity-20 blur-[80px] rounded-full" />
            
            {/* House under construction visualization */}
            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-8 border border-[#d4af37]/20 backdrop-blur-sm shadow-[0_0_40px_rgba(212,175,55,0.2)]">
              {/* Scaffolding effect - decorative lines */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 left-8 w-0.5 h-full bg-gradient-to-b from-transparent via-[#d4af37]/30 to-transparent" />
                <div className="absolute top-0 right-8 w-0.5 h-full bg-gradient-to-b from-transparent via-[#d4af37]/30 to-transparent" />
                <div className="absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
                <div className="absolute bottom-8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
              </div>
              
              {/* House SVG illustration */}
              <div className="relative z-10">
                <svg viewBox="0 0 400 300" className="w-full h-auto">
                  {/* House base */}
                  <defs>
                    <linearGradient id="houseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#2a2a2a" />
                      <stop offset="100%" stopColor="#1a1a1a" />
                    </linearGradient>
                    <linearGradient id="roofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3a3a3a" />
                      <stop offset="100%" stopColor="#2a2a2a" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Main house body */}
                  <rect x="100" y="140" width="200" height="140" fill="url(#houseGradient)" stroke="#d4af37" strokeWidth="2" />
                  
                  {/* Roof */}
                  <polygon points="90,140 200,60 310,140" fill="url(#roofGradient)" stroke="#d4af37" strokeWidth="2" />
                  
                  {/* Windows with warm light */}
                  <rect x="130" y="170" width="50" height="50" fill="#ffb347" filter="url(#glow)" opacity="0.9" />
                  <rect x="220" y="170" width="50" height="50" fill="#ffb347" filter="url(#glow)" opacity="0.9" />
                  <rect x="130" y="240" width="50" height="40" fill="#ffb347" filter="url(#glow)" opacity="0.9" />
                  
                  {/* Door */}
                  <rect x="220" y="230" width="50" height="50" fill="#8b6914" stroke="#d4af37" strokeWidth="2" />
                  
                  {/* Scaffolding */}
                  <line x1="320" y1="100" x2="320" y2="280" stroke="#d4af37" strokeWidth="2" opacity="0.6" />
                  <line x1="350" y1="120" x2="350" y2="280" stroke="#d4af37" strokeWidth="2" opacity="0.6" />
                  <line x1="320" y1="150" x2="350" y2="150" stroke="#d4af37" strokeWidth="2" opacity="0.6" />
                  <line x1="320" y1="200" x2="350" y2="200" stroke="#d4af37" strokeWidth="2" opacity="0.6" />
                  <line x1="320" y1="250" x2="350" y2="250" stroke="#d4af37" strokeWidth="2" opacity="0.6" />
                  
                  {/* Construction tools */}
                  <rect x="60" y="240" width="30" height="8" fill="#d4af37" opacity="0.7" />
                  <rect x="60" y="255" width="30" height="8" fill="#d4af37" opacity="0.7" />
                  <rect x="60" y="270" width="30" height="8" fill="#d4af37" opacity="0.7" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
