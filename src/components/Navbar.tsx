import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Usługi', href: '#uslugi' },
    { label: 'Proces', href: '#process' },
    { label: 'Zespół', href: '#team' },
    { label: 'Wycena', href: '#estimator' },
    { label: 'Virtual Tour', href: '#virtual-tour' },
    { label: 'Kontakt', href: '#kontakt' }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 backdrop-blur-sm bg-charcoal/80 border-b border-warm-white/5"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="flex flex-col">
            <span className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase text-warm-white">
              Slymax
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-gold -mt-1">
              Builders
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 text-xs uppercase tracking-widest text-warm-white/80">
            {menuItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="hover:text-gold transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-[1px] bg-gold/50 hidden sm:block"></div>
            <button className="text-[10px] md:text-xs uppercase tracking-widest text-gold hover:text-warm-white transition-colors">
              PL / EN
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-gold/10 hover:bg-gold/20 flex items-center justify-center transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-gold" />
              ) : (
                <Menu className="w-5 h-5 text-gold" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-0 w-full z-40 lg:hidden"
          >
            <div className="bg-charcoal/95 backdrop-blur-xl border-b border-warm-white/10 px-6 py-8 mx-6 rounded-2xl">
              <div className="flex flex-col gap-6">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-warm-white/80 hover:text-gold transition-colors duration-300 text-lg uppercase tracking-wider"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}