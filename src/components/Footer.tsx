import React from 'react';
import { Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer id="kontakt" className="bg-charcoal pt-24 pb-12 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
          <div>
            <h2 className="text-5xl md:text-7xl font-extralight text-warm-white mb-12">
              Stwórzmy <br /> 
              <span className="italic text-gold">Coś Razem</span>
            </h2>
            <div className="flex flex-col gap-6">
              <a href="mailto:office@slymax.pl" className="group flex items-center gap-4 text-xl md:text-2xl text-warm-white/80 hover:text-gold transition-colors">
                office@slymax.pl
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
              </a>
              <a href="tel:+48500600700" className="group flex items-center gap-4 text-xl md:text-2xl text-warm-white/80 hover:text-gold transition-colors">
                +48 500 600 700
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
              <span className="text-gold text-[10px] tracking-[0.4em] uppercase">Lokalizacja</span>
              <p className="text-warm-white/60 text-sm font-light leading-loose uppercase tracking-widest">
                ul. Prestiżowa 12/4<br />
                00-001 Warszawa<br />
                Polska
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-gold text-[10px] tracking-[0.4em] uppercase">Social Media</span>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-warm-white/60 hover:text-gold text-xs uppercase tracking-widest transition-colors">Instagram</a>
                <a href="#" className="text-warm-white/60 hover:text-gold text-xs uppercase tracking-widest transition-colors">Facebook</a>
                <a href="#" className="text-warm-white/60 hover:text-gold text-xs uppercase tracking-widest transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-warm-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col">
            <span className="text-lg font-light tracking-[0.3em] uppercase text-warm-white">
              Slymax
            </span>
            <span className="text-[8px] tracking-[0.5em] uppercase text-gold -mt-1">
              Builders
            </span>
          </div>
          
          <div className="text-[10px] tracking-[0.2em] uppercase text-warm-white/20">
            © 2025 SLYMAX BUILDERS. WSZELKIE PRAWA ZASTRZEŻONE.
          </div>

          <div className="flex gap-8 text-[10px] tracking-[0.2em] uppercase text-warm-white/40">
            <a href="#" className="hover:text-gold">Polityka Prywatności</a>
            <a href="#" className="hover:text-gold">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
