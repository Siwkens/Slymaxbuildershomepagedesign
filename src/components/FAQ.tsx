import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Jak długo trwa realizacja projektu?',
    answer: 'Średni czas realizacji projektu to 12-24 tygodnie, w zależności od jego rozmiaru i złożoności. Po wstępnej konsultacji przedstawimy dokładny harmonogram dostosowany do Twoich potrzeb.'
  },
  {
    question: 'Czy oferujecie gwarancję na wykonane prace?',
    answer: 'Tak, oferujemy 5-letnią gwarancję na wszystkie prace wykończeniowe oraz 2-letnią gwarancję na instalacje elektryczne i hydrauliczne. Dodatkowo zapewniamy serwis posprzedażowy i wsparcie techniczne.'
  },
  {
    question: 'Jakie materiały stosujecie w projektach premium?',
    answer: 'Współpracujemy wyłącznie z renomowanymi dostawcami premium: Miele, Hansgrohe, Villeroy & Boch, Kaldewei. Używamy włoskich marmurów, drewna orzechowego, mosiądzu i innych materiałów najwyższej jakości.'
  },
  {
    question: 'Czy projekt wnętrza jest wliczony w cenę?',
    answer: 'Tak, kompleksowy projekt aranżacji wnętrz wraz z fotorealistycznymi wizualizacjami 3D jest standardem w naszych pakietach premium. Współpracujemy z doświadczonymi architektami wnętrz.'
  },
  {
    question: 'Jak wygląda proces płatności?',
    answer: 'Płatność jest podzielona na etapy: 30% przy podpisaniu umowy, 40% w trakcie realizacji (po kluczowych etapach), 30% po odbiorze końcowym. Akceptujemy przelewy bankowe i płatności ratalne.'
  },
  {
    question: 'Czy mogę wprowadzać zmiany w trakcie realizacji?',
    answer: 'Tak, jesteśmy elastyczni i otwarci na modyfikacje. Jednak zmiany wprowadzone po rozpoczęciu prac mogą wpłynąć na harmonogram i kosztorys - zawsze informujemy o tym z wyprzedzeniem.'
  },
  {
    question: 'Czy realizujecie projekty poza Warszawą?',
    answer: 'Tak, realizujemy projekty w całej Polsce. Dla projektów oddalonych o więcej niż 100 km od Warszawy doliczamy koszt dojazdu i zakwaterowania ekipy.'
  },
  {
    question: 'Jakie certyfikaty posiadacie?',
    answer: 'Posiadamy certyfikaty ISO 9001:2015, certyfikat budownictwa ekologicznego, jesteśmy członkami Polskiej Izby Projektowania Wnętrz oraz autoryzowanym partnerem wiodących marek premium.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 px-6 lg:px-12 bg-gradient-to-b from-charcoal via-charcoal/98 to-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">FAQ</span>
          <h2 className="text-5xl lg:text-6xl mb-6">Najczęściej Zadawane Pytania</h2>
          <p className="text-warm-white/60 text-lg max-w-2xl mx-auto">
            Odpowiedzi na pytania, które pomogą Ci lepiej zrozumieć nasz proces pracy
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-warm-white/5 backdrop-blur-sm border border-warm-white/10 rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg lg:text-xl pr-8 group-hover:text-gold transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-gold" />
                  ) : (
                    <Plus className="w-6 h-6 text-gold" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-warm-white/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-warm-white/60 mb-6">Nie znalazłeś odpowiedzi na swoje pytanie?</p>
          <a
            href="#kontakt"
            className="inline-block bg-gold text-charcoal px-8 py-4 rounded-full hover:bg-gold/90 transition-all duration-300 hover:scale-105"
          >
            Skontaktuj się z nami
          </a>
        </motion.div>
      </div>
    </section>
  );
}
