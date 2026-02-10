import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
  duration: string;
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Konsultacja i Wizja',
    description: 'Spotkanie z klientem, analiza potrzeb i wizja projektu',
    details: [
      'Bezpłatna konsultacja na miejscu',
      'Analiza przestrzeni i możliwości',
      'Określenie budżetu i harmonogramu',
      'Prezentacja portfolio i referencji'
    ],
    duration: '1-2 tygodnie'
  },
  {
    number: '02',
    title: 'Projekt i Wizualizacje',
    description: 'Tworzenie koncepcji designerskiej i dokumentacji technicznej',
    details: [
      'Projekt aranżacji wnętrz',
      'Fotorealistyczne wizualizacje 3D',
      'Dobór materiałów i kolorystyki',
      'Kosztorys szczegółowy'
    ],
    duration: '2-4 tygodnie'
  },
  {
    number: '03',
    title: 'Przygotowanie Terenu',
    description: 'Profesjonalne przygotowanie przestrzeni do remontu',
    details: [
      'Demontaż i rozbiórki',
      'Zabezpieczenie przestrzeni',
      'Prace rozbiórkowe',
      'Wywóz gruzu i odpadów'
    ],
    duration: '1-2 tygodnie'
  },
  {
    number: '04',
    title: 'Realizacja Core',
    description: 'Kluczowe prace konstrukcyjne i instalacyjne',
    details: [
      'Prace konstrukcyjne i murowe',
      'Instalacje elektryczne i hydrauliczne',
      'Systemy grzewcze i klimatyzacja',
      'Ścianki działowe i sufity'
    ],
    duration: '4-8 tygodni'
  },
  {
    number: '05',
    title: 'Wykończenie Premium',
    description: 'Finalne prace wykończeniowe najwyższej jakości',
    details: [
      'Szpachlowanie i malowanie',
      'Układanie podłóg i płytek',
      'Montaż stolarki i mebli',
      'Oświetlenie dekoracyjne'
    ],
    duration: '3-6 tygodni'
  },
  {
    number: '06',
    title: 'Odbiór i Gwarancja',
    description: 'Finalizacja projektu i przekazanie klientowi',
    details: [
      'Odbiór techniczny wszystkich prac',
      'Sprzątanie końcowe',
      'Przekazanie dokumentacji',
      'Gwarancja i serwis posprzedażowy'
    ],
    duration: '1 tydzień'
  }
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="process" className="py-32 px-6 lg:px-12 bg-charcoal relative overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">Proces</span>
          <h2 className="text-5xl lg:text-6xl mb-6">Jak Pracujemy</h2>
          <p className="text-warm-white/60 text-lg max-w-2xl mx-auto">
            Transparentny proces od pierwszego kontaktu do finalnego odbioru projektu
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-warm-white/10">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gold origin-top"
              style={{
                scaleY: useTransform(scrollYProgress, [0, 1], [0, 1])
              }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-24">
            {processSteps.map((step, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`relative flex items-center ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:gap-16 gap-8`}
                >
                  {/* Content Card */}
                  <div className={`lg:w-1/2 w-full ${isLeft ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'} pl-20 lg:pl-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-warm-white/5 backdrop-blur-sm border border-warm-white/10 rounded-2xl p-8 hover:border-gold/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-6xl font-light text-gold/30">{step.number}</span>
                        <div className="flex-1">
                          <h3 className="text-2xl lg:text-3xl mb-2">{step.title}</h3>
                          <p className="text-warm-white/60">{step.description}</p>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                            <span className="text-warm-white/80">{detail}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-gold">
                        <ArrowRight className="w-5 h-5" />
                        <span className="text-sm tracking-wider">Czas: {step.duration}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Circle Indicator */}
                  <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                      className="w-16 h-16 rounded-full bg-charcoal border-4 border-gold flex items-center justify-center"
                    >
                      <span className="text-gold font-bold">{step.number}</span>
                    </motion.div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-24"
        >
          <div className="inline-flex items-center gap-4 bg-warm-white/5 backdrop-blur-sm border border-warm-white/10 rounded-full px-8 py-4">
            <span className="text-warm-white/60">Średni czas realizacji:</span>
            <span className="text-gold text-xl font-light">12-24 tygodnie</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
