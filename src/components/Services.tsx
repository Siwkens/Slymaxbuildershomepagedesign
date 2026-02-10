import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles, Home, Box, Palette, Ruler, Shield } from 'lucide-react';

const services = [
  {
    title: "Projekty Wnętrz",
    description: "Kompleksowe wizje przestrzeni, które łączą funkcjonalność z unikalnym charakterem. Od koncepcji po wizualizacje 3D.",
    icon: Palette,
    img: "https://images.unsplash.com/photo-1768353114966-b296f12fd0b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmFsJTIwZGV0YWlscyUyMG1pbmltYWx8ZW58MXx8fHwxNzY4NDYzNjgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    details: "Projekty 3D • Wizualizacje • Dobór materiałów"
  },
  {
    title: "Remonty Pod Klucz",
    description: "Zarządzanie pełnym cyklem remontowym. Od surowego stanu po wykończenie pod klucz z 5-letnią gwarancją.",
    icon: Home,
    img: "https://images.unsplash.com/photo-1603901622056-0a5bee231395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBhcmNoaXRlY3R1cmFsJTIwcHJvZmVzc2lvbmFsJTIwdG9vbHMlMjBsdXh1cnl8ZW58MXx8fHwxNzY4NDYzNjgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    details: "Mieszkania • Domy • Biura • Lokale komercyjne"
  },
  {
    title: "Materiały Premium",
    description: "Dostęp do ekskluzywnych selekcji marmurów włoskich, drewna egzotycznego i autorskich systemów oświetlenia.",
    icon: Sparkles,
    img: "https://images.unsplash.com/photo-1759262151424-7b8ed20a31a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMG1hcmJsZSUyMGdvbGQlMjBkZXRhaWxzfGVufDF8fHx8MTc2ODQ2MzY4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    details: "Marmury • Parkiety • Oświetlenie • Armatura"
  }
];

export function Services() {
  return (
    <section id="uslugi" className="py-24 px-6 md:px-12 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-gold text-xs tracking-[0.4em] uppercase mb-4 block">Ekspertyza</span>
            <h2 className="text-3xl md:text-5xl font-light text-warm-white">
              Sztuka transformacji <br /> w najwyższym standardzie.
            </h2>
          </div>
          <div className="text-warm-white/60 text-sm max-w-xs leading-relaxed">
            <p className="mb-3">Ponad 150 zrealizowanych projektów w Warszawie i okolicach.</p>
            <p className="text-gold text-xs tracking-wider">✓ Gwarancja 5 lat • ✓ Certyfikowane materiały</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative h-[500px] overflow-hidden rounded-sm border border-warm-white/5 hover:border-gold/30 transition-all duration-500"
            >
              <div className="absolute inset-0 z-0">
                <ImageWithFallback
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent"></div>
              </div>

              <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                <service.icon className="w-6 h-6 text-gold mb-6" />
                <h3 className="text-xl text-warm-white mb-4 tracking-wide">{service.title}</h3>
                <p className="text-warm-white/60 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.description}
                </p>
                <p className="text-gold/80 text-xs tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-6">
                  {service.details}
                </p>
                <div className="w-0 group-hover:w-12 h-[1px] bg-gold transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}