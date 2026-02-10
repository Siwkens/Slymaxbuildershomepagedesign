import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, Info, X } from 'lucide-react';

interface Scene {
  id: number;
  title: string;
  description: string;
  image: string;
  hotspots: Hotspot[];
}

interface Hotspot {
  x: number; // percentage
  y: number; // percentage
  title: string;
  description: string;
}

const scenes: Scene[] = [
  {
    id: 1,
    title: 'Salon Premium',
    description: 'Nowoczesny salon z wysokiej klasy meblami i systemem oświetleniowym',
    image: 'https://images.unsplash.com/photo-1758998202918-d921125a700f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwcmVub3ZhdGlvbnxlbnwxfHx8fDE3NzA3MDYyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hotspots: [
      { x: 30, y: 50, title: 'Sofa Design', description: 'Włoska sofa z naturalnej skóry' },
      { x: 60, y: 40, title: 'System Audio', description: 'Zaawansowany system audio 7.1' },
      { x: 80, y: 70, title: 'Drewno Orzech', description: 'Podłoga z orzecha amerykańskiego' }
    ]
  },
  {
    id: 2,
    title: 'Kuchnia Premium',
    description: 'Funkcjonalna kuchnia z urządzeniami Miele i wyspą centralną',
    image: 'https://images.unsplash.com/photo-1643034738686-d69e7bc047e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwNjM0MDg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    hotspots: [
      { x: 45, y: 55, title: 'Wyspa Kuchenna', description: 'Blat z marmuru Calacatta' },
      { x: 25, y: 45, title: 'Sprzęt AGD', description: 'Komplet urządzeń Miele' },
      { x: 70, y: 35, title: 'Smart Home', description: 'System sterowania inteligentnego domu' }
    ]
  },
  {
    id: 3,
    title: 'Sypialnia Master',
    description: 'Przestronna sypialnia z garderobą i łazienką en-suite',
    image: 'https://images.unsplash.com/photo-1572742482459-e04d6cfdd6f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXN0ZXIlMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwNzA2MzAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    hotspots: [
      { x: 50, y: 60, title: 'Łóżko King Size', description: 'Tapicerowane łóżko premium' },
      { x: 20, y: 50, title: 'Garderoba', description: 'Walk-in closet z oświetleniem LED' },
      { x: 75, y: 45, title: 'Klimatyzacja', description: 'System klimatyzacji VRV' }
    ]
  },
  {
    id: 4,
    title: 'Łazienka SPA',
    description: 'Luksusowa łazienka z kabiną prysznicową i wanną wolnostojącą',
    image: 'https://images.unsplash.com/photo-1769253523308-f7bff35c60b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjBiYXRocm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc3MDcwNjMwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    hotspots: [
      { x: 40, y: 65, title: 'Wanna Wolnostojąca', description: 'Wanna z kompozytu mineralnego' },
      { x: 65, y: 50, title: 'Prysznic Rain', description: 'Deszczownica z funkcją termostatyczną' },
      { x: 25, y: 55, title: 'Armatura Grohe', description: 'Zestaw armatury premium' }
    ]
  }
];

export function VirtualTour() {
  const [currentScene, setCurrentScene] = useState(0);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextScene = () => {
    setCurrentScene((prev) => (prev + 1) % scenes.length);
    setSelectedHotspot(null);
  };

  const prevScene = () => {
    setCurrentScene((prev) => (prev - 1 + scenes.length) % scenes.length);
    setSelectedHotspot(null);
  };

  const scene = scenes[currentScene];

  return (
    <section id="virtual-tour" className="py-32 px-6 lg:px-12 bg-charcoal relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">Virtual Tour</span>
          <h2 className="text-5xl lg:text-6xl mb-6">Wirtualny Spacer</h2>
          <p className="text-warm-white/60 text-lg max-w-2xl mx-auto">
            Odkryj nasze realizacje w interaktywnym 360° tour z opisami elementów
          </p>
        </motion.div>

        {/* Main Viewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-charcoal p-6' : ''}`}
        >
          <div className={`relative ${isFullscreen ? 'h-full' : 'aspect-video'} rounded-3xl overflow-hidden bg-charcoal border border-warm-white/10`}>
            {/* Scene Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentScene}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full relative"
              >
                <img
                  src={scene.image}
                  alt={scene.title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/20" />

                {/* Hotspots */}
                {scene.hotspots.map((hotspot, idx) => (
                  <motion.button
                    key={idx}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setSelectedHotspot(hotspot)}
                    className="absolute w-12 h-12 rounded-full bg-gold/80 backdrop-blur-sm border-2 border-warm-white/30 flex items-center justify-center cursor-pointer hover:bg-gold transition-all duration-300 group"
                    style={{
                      left: `${hotspot.x}%`,
                      top: `${hotspot.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className="w-3 h-3 bg-charcoal rounded-full animate-pulse" />
                    
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-gold animate-ping opacity-75" />
                  </motion.button>
                ))}

                {/* Scene Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-3xl lg:text-4xl mb-2">{scene.title}</h3>
                    <p className="text-warm-white/70">{scene.description}</p>
                  </motion.div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevScene}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-warm-white/10 backdrop-blur-sm hover:bg-warm-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <ChevronLeft className="w-7 h-7 text-gold group-hover:scale-110 transition-transform" />
                </button>

                <button
                  onClick={nextScene}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-warm-white/10 backdrop-blur-sm hover:bg-warm-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <ChevronRight className="w-7 h-7 text-gold group-hover:scale-110 transition-transform" />
                </button>

                {/* Fullscreen Toggle */}
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="absolute top-6 right-6 w-12 h-12 bg-warm-white/10 backdrop-blur-sm hover:bg-warm-white/20 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  {isFullscreen ? (
                    <X className="w-6 h-6 text-gold" />
                  ) : (
                    <Maximize2 className="w-6 h-6 text-gold" />
                  )}
                </button>

                {/* Scene Counter */}
                <div className="absolute top-6 left-6 bg-warm-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="text-gold font-light">
                    {currentScene + 1} / {scenes.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Scene Thumbnails */}
          {!isFullscreen && (
            <div className="flex gap-4 mt-6 justify-center overflow-x-auto pb-4">
              {scenes.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setCurrentScene(idx);
                    setSelectedHotspot(null);
                  }}
                  className={`relative flex-shrink-0 w-32 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    idx === currentScene
                      ? 'border-gold scale-110'
                      : 'border-warm-white/20 hover:border-warm-white/50 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                  {idx === currentScene && (
                    <div className="absolute inset-0 bg-gold/20" />
                  )}
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Hotspot Info Panel */}
        <AnimatePresence>
          {selectedHotspot && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 max-w-md w-full mx-6"
            >
              <div className="bg-charcoal border-2 border-gold rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                      <Info className="w-5 h-5 text-gold" />
                    </div>
                    <h4 className="text-xl">{selectedHotspot.title}</h4>
                  </div>
                  <button
                    onClick={() => setSelectedHotspot(null)}
                    className="w-8 h-8 rounded-full bg-warm-white/10 hover:bg-warm-white/20 flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-warm-white/70">{selectedHotspot.description}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-center mt-12 text-warm-white/40 text-sm"
        >
          Kliknij w oznaczone punkty, aby poznać szczegóły projektu
        </motion.div>
      </div>
    </section>
  );
}