import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758998202918-d921125a700f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwcmVub3ZhdGlvbnxlbnwxfHx8fDE3Njg0NjM2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury Renovation"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-[2px]"></div>
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
          Est. 2025 • Premium Quality
        </span>
      </div>
    </section>
  );
}
