import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Marek Wiśniewski",
    role: "Właściciel Rezydencji",
    text: "Slymax Builders to nie tylko ekipa remontowa, to partnerzy w tworzeniu wizji. Ich dbałość o detale w marmurach i oświetleniu przerosła moje oczekiwania."
  },
  {
    name: "Anna Kwiatkowska",
    role: "Architekt Wnętrz",
    text: "Współpraca z nimi to czysta przyjemność. Rozumieją język designu i potrafią przełożyć najbardziej skomplikowane rysunki na rzeczywistość."
  },
  {
    name: "Robert Lewandowski",
    role: "Inwestor",
    text: "Terminowość i bezkompromisowa jakość. W dzisiejszych czasach trudno o firmę, która tak bardzo szanuje czas i wizję klienta."
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 bg-charcoal border-y border-warm-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <Quote className="w-8 h-8 text-gold/20 mb-8" />
          <h2 className="text-3xl md:text-5xl font-light text-warm-white mb-4">Głosy Zadowolenia</h2>
          <div className="w-12 h-[1px] bg-gold"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <p className="text-warm-white/70 italic font-light leading-relaxed text-lg">
                "{t.text}"
              </p>
              <div>
                <h4 className="text-gold text-sm tracking-widest uppercase mb-1">{t.name}</h4>
                <span className="text-warm-white/30 text-[10px] uppercase tracking-widest">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
