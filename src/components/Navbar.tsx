import React from 'react';
import { motion } from 'motion/react';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference"
    >
      <div className="flex flex-col">
        <span className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase text-warm-white">
          Slymax
        </span>
        <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-gold -mt-1">
          Builders
        </span>
      </div>

      <div className="hidden md:flex gap-12 text-xs uppercase tracking-widest text-warm-white/80">
        <a href="#projekty" className="hover:text-gold transition-colors duration-300">Projekty</a>
        <a href="#uslugi" className="hover:text-gold transition-colors duration-300">Usługi</a>
        <a href="#o-nas" className="hover:text-gold transition-colors duration-300">O Nas</a>
        <a href="#kontakt" className="hover:text-gold transition-colors duration-300">Kontakt</a>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-[1px] bg-gold/50 hidden sm:block"></div>
        <button className="text-[10px] md:text-xs uppercase tracking-widest text-gold hover:text-warm-white transition-colors">
          PL / EN
        </button>
      </div>
    </motion.nav>
  );
}
