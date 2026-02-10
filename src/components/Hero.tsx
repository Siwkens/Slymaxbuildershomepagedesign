import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Multi-Layer Background with Construction Theme */}
      <div className="absolute inset-0 z-0">
        {/* Base Image */}
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758998202918-d921125a700f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwcmVub3ZhdGlvbnxlbnwxfHx8fDE3NzA3MDYyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury Renovation"
          className="w-full h-full object-cover scale-105"
        />
        
        {/* Blueprint Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(214, 180, 108, .05) 25%, rgba(214, 180, 108, .05) 26%, transparent 27%, transparent 74%, rgba(214, 180, 108, .05) 75%, rgba(214, 180, 108, .05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(214, 180, 108, .05) 25%, rgba(214, 180, 108, .05) 26%, transparent 27%, transparent 74%, rgba(214, 180, 108, .05) 75%, rgba(214, 180, 108, .05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '80px 80px',
            backgroundPosition: '-2px -2px'
          }}
        />
        
        {/* Animated Construction Tools Silhouettes */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 120,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 right-20 text-gold"
            style={{ fontSize: '300px' }}
          >
            <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
              <path d="M13.78 15.3l-0.47-0.47c-0.39-0.39-1.02-0.39-1.41 0l-2.83 2.83c-0.39 0.39-0.39 1.02 0 1.41l0.47 0.47c0.39 0.39 1.02 0.39 1.41 0l2.83-2.83c0.39-0.39 0.39-1.02 0-1.41zm3.54-3.54l-0.47-0.47c-0.39-0.39-1.02-0.39-1.41 0l-7.07 7.07c-0.39 0.39-0.39 1.02 0 1.41l0.47 0.47c0.39 0.39 1.02 0.39 1.41 0l7.07-7.07c0.39-0.39 0.39-1.02 0-1.41zm4.24-4.24l-0.47-0.47c-0.39-0.39-1.02-0.39-1.41 0l-11.31 11.31c-0.39 0.39-0.39 1.02 0 1.41l0.47 0.47c0.39 0.39 1.02 0.39 1.41 0l11.31-11.31c0.39-0.39 0.39-1.02 0-1.41z"/>
            </svg>
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-32 left-32 text-gold"
            style={{ fontSize: '200px' }}
          >
            <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
              <path d="M12 2l-5.5 9h11z"/>
              <circle cx="12" cy="18" r="3"/>
            </svg>
          </motion.div>
        </div>
        
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/80 via-charcoal/60 to-charcoal/90 backdrop-blur-[1px]"></div>
        
        {/* Gold Accent Corners */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-gold/20"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-gold/20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-gold/20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-gold/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-gold text-xs md:text-sm tracking-[0.4em] uppercase mb-4 block">
            Architektura & Wykończenia
          </span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-extralight text-warm-white leading-tight mb-8">
            Definiujemy <br /> 
            <span className="italic">Luksus</span> Na Nowo
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="flex flex-col items-center gap-12"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
          <p className="max-w-md text-warm-white/60 text-sm md:text-base font-light leading-relaxed tracking-wide">
            Slymax Builders to kunszt rzemiosła połączony z wizjonerskim designem. Tworzymy przestrzenie, które oddychają prestiżem.
          </p>
        </motion.div>
      </div>

      {/* Side Label */}
      <div className="absolute left-6 bottom-12 hidden lg:block origin-left -rotate-90">
        <span className="text-[10px] tracking-[0.5em] uppercase text-warm-white/40">
          Od 2013 • Warszawa • Premium Quality
        </span>
      </div>
      
      {/* Floating Metrics */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute left-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8"
      >
        <div className="bg-warm-white/5 backdrop-blur-sm border border-warm-white/10 rounded-2xl p-6">
          <div className="text-3xl text-gold mb-1">250+</div>
          <div className="text-xs text-warm-white/60 uppercase tracking-wider">Projektów</div>
        </div>
        <div className="bg-warm-white/5 backdrop-blur-sm border border-warm-white/10 rounded-2xl p-6">
          <div className="text-3xl text-gold mb-1">10+</div>
          <div className="text-xs text-warm-white/60 uppercase tracking-wider">Lat Doświadczenia</div>
        </div>
      </motion.div>
    </section>
  );
}