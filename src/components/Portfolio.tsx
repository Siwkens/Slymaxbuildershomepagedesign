import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
  details: {
    area: string;
    duration: string;
    budget: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Luksusowa Rezydencja Wilanów',
    category: 'residential',
    location: 'Warszawa, Wilanów',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1758998202918-d921125a700f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwcmVub3ZhdGlvbnxlbnwxfHx8fDE3NzA3MDYyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Kompleksowy remont 250m² apartamentu z wykorzystaniem marmuru Calacatta i drewna orzechowego.',
    details: { area: '250 m²', duration: '6 miesięcy', budget: 'Premium' }
  },
  {
    id: 2,
    title: 'Biuro Korporacyjne Mokotów',
    category: 'commercial',
    location: 'Warszawa, Mokotów',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1641998148499-cb6b55a3c0d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBzcGFjZSUyMGludGVyaW9yfGVufDF8fHx8MTc3MDYxMzQ5NHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Nowoczesna przestrzeń biurowa z systemem smart office i ekologicznymi materiałami.',
    details: { area: '450 m²', duration: '4 miesiące', budget: 'Premium' }
  },
  {
    id: 3,
    title: 'Penthouse Złota 44',
    category: 'residential',
    location: 'Warszawa, Śródmieście',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1677553512940-f79af72efd1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzA2ODQyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Ekskluzywny penthouse z tarasem, automatyka budynkowa i design na zamówienie.',
    details: { area: '320 m²', duration: '8 miesięcy', budget: 'Ultra Premium' }
  },
  {
    id: 4,
    title: 'Restauracja Fine Dining',
    category: 'commercial',
    location: 'Warszawa, Powiśle',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1768697358705-c1b60333da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc3MDYyMDA1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Ekskluzywna restauracja z otwartą kuchnią i autorskimi rozwiązaniami oświetleniowymi.',
    details: { area: '180 m²', duration: '5 miesięcy', budget: 'Premium' }
  },
  {
    id: 5,
    title: 'Villa SPA & Wellness',
    category: 'residential',
    location: 'Konstancin-Jeziorna',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1769011496342-2bd1ad232d8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjB3ZWxsbmVzcyUyMGludGVyaW9yfGVufDF8fHx8MTc3MDcwNjI5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Prywatna strefa SPA z basenem, sauną i sale fitness w rezydencji pod Warszawą.',
    details: { area: '150 m²', duration: '7 miesięcy', budget: 'Ultra Premium' }
  },
  {
    id: 6,
    title: 'Showroom Premium',
    category: 'commercial',
    location: 'Warszawa, Żoliborz',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1760072513403-d70003481414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzaG93cm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc3MDYxODU0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Salon sprzedaży premium z interaktywną ekspozycją i systemem multimedialnym.',
    details: { area: '280 m²', duration: '3 miesiące', budget: 'Premium' }
  }
];

const categories = [
  { id: 'all', label: 'Wszystkie Projekty' },
  { id: 'residential', label: 'Rezydencje' },
  { id: 'commercial', label: 'Komercyjne' }
];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-32 px-6 lg:px-12 bg-charcoal relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">Portfolio</span>
          <h2 className="text-5xl lg:text-6xl mb-6">Zrealizowane Projekty</h2>
          <p className="text-warm-white/60 text-lg max-w-2xl mx-auto">
            Odkryj nasze najnowsze realizacje premium, które łączą innowacyjny design z najwyższą jakością wykonania
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-16 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-8 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-gold text-charcoal'
                  : 'bg-warm-white/5 text-warm-white/60 hover:bg-warm-white/10 hover:text-warm-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gold text-charcoal p-4 rounded-full">
                      <ChevronRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-warm-white/60">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl text-warm-white group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-warm-white/60 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-charcoal/95 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-charcoal border border-warm-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-warm-white/10 hover:bg-warm-white/20 rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6 text-warm-white" />
              </button>

              {/* Image */}
              <div className="relative h-96 overflow-hidden rounded-t-2xl">
                <ImageWithFallback
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gold text-sm tracking-[0.2em] uppercase">
                      {selectedProject.category === 'residential' ? 'Rezydencja' : 'Komercyjne'}
                    </span>
                    <span className="text-warm-white/60">{selectedProject.year}</span>
                  </div>
                  <h3 className="text-4xl mb-2">{selectedProject.title}</h3>
                  <p className="text-warm-white/60">{selectedProject.location}</p>
                </div>

                <p className="text-warm-white/80 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Details Grid */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-warm-white/10">
                  <div>
                    <div className="text-warm-white/60 text-sm mb-2">Powierzchnia</div>
                    <div className="text-gold text-xl">{selectedProject.details.area}</div>
                  </div>
                  <div>
                    <div className="text-warm-white/60 text-sm mb-2">Czas realizacji</div>
                    <div className="text-gold text-xl">{selectedProject.details.duration}</div>
                  </div>
                  <div>
                    <div className="text-warm-white/60 text-sm mb-2">Kategoria</div>
                    <div className="text-gold text-xl">{selectedProject.details.budget}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}