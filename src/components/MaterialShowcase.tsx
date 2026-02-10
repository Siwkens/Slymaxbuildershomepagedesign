import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RotateCw, Maximize2, Move } from 'lucide-react';

interface Material {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
}

const materials: Material[] = [
  {
    id: 'marble-calacatta',
    name: 'Marmur Calacatta Gold',
    category: 'Kamień naturalny',
    image: 'https://images.unsplash.com/photo-1594896733292-9a77b5809c63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxhY2F0dGElMjBnb2xkJTIwbWFyYmxlJTIwdGV4dHVyZXxlbnwxfHx8fDE3NzA3MDYyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Włoski marmur premium z charakterystycznymi złotymi żyłkami',
    features: ['Odporna na wilgoć', 'Ekskluzywny wygląd', 'Trwałość 50+ lat']
  },
  {
    id: 'wood-walnut',
    name: 'Drewno Orzech Amerykański',
    category: 'Drewno',
    image: 'https://images.unsplash.com/photo-1573987434762-76cb0f5bcf7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwd29vZCUyMGdyYWluJTIwdGV4dHVyZXxlbnwxfHx8fDE3NzA3MDYzMDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Ciemne drewno o bogatym usłojeniu, idealne do mebli premium',
    features: ['Naturalne usłojenie', 'Wysoka trwałość', 'Szlachetny wygląd']
  },
  {
    id: 'concrete-architectural',
    name: 'Beton Architektoniczny',
    category: 'Beton',
    image: 'https://images.unsplash.com/photo-1724676808301-b6341c710f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwY29uY3JldGUlMjB0ZXh0dXJlfGVufDF8fHx8MTc3MDcwNjI5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Nowoczesny materiał wykończeniowy o surowym charakterze',
    features: ['Styl industrialny', 'Wszechstronność', 'Łatwa konserwacja']
  },
  {
    id: 'brass-brushed',
    name: 'Mosiądz Szczotkowany',
    category: 'Metal',
    image: 'https://images.unsplash.com/photo-1738598631690-2255f0058930?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnVzaGVkJTIwYnJhc3MlMjBtZXRhbCUyMHRleHR1cmV8ZW58MXx8fHwxNzcwNzA2Mjk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Luksusowy metal w ciepłym, złotym odcieniu',
    features: ['Ponadczasowa elegancja', 'Odporna na korozję', 'Unikalna patyna']
  },
  {
    id: 'terrazzo',
    name: 'Terrazzo Premium',
    category: 'Kompozyt',
    image: 'https://images.unsplash.com/photo-1763965780173-a94955ed16c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXJyYXp6byUyMGZsb29yaW5nJTIwdGV4dHVyZXxlbnwxfHx8fDE3NzA3MDYyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Nowoczesna interpretacja klasycznego materiału z lat 50.',
    features: ['Design na miarę', 'Kolorystyka custom', 'Łatwe czyszczenie']
  },
  {
    id: 'glass-fluted',
    name: 'Szkło Ryflowane',
    category: 'Szkło',
    image: 'https://images.unsplash.com/photo-1652862730507-32988eb23a67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbHV0ZWQlMjBnbGFzcyUyMHRleHR1cmV8ZW58MXx8fHwxNzcwNzA2Mjk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Dekoracyjne szkło z charakterystycznymi rowkami',
    features: ['Efekt świetlny', 'Prywatność', 'Elegancja art deco']
  }
];

export function MaterialShowcase() {
  const [selectedMaterial, setSelectedMaterial] = useState<Material>(materials[0]);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  const handleRotate = () => {
    setRotation((prev) => (prev + 45) % 360);
  };

  const handleZoom = () => {
    setScale((prev) => (prev === 1 ? 1.5 : 1));
  };

  return (
    <section id="materials" className="py-32 px-6 lg:px-12 bg-gradient-to-b from-charcoal via-charcoal/98 to-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">Materiały</span>
          <h2 className="text-5xl lg:text-6xl mb-6">3D Material Showcase</h2>
          <p className="text-warm-white/60 text-lg max-w-2xl mx-auto">
            Interaktywna prezentacja premium materiałów wykończeniowych
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 3D Viewer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-24"
          >
            <div className="bg-warm-white/5 backdrop-blur-sm border border-warm-white/10 rounded-3xl p-8 lg:p-12">
              {/* Material Display */}
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-charcoal">
                <motion.div
                  animate={{
                    rotate: rotation,
                    scale: scale
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="w-full h-full"
                >
                  <img
                    src={selectedMaterial.image}
                    alt={selectedMaterial.name}
                    className="w-full h-full object-cover"
                    style={{
                      filter: 'brightness(1.1) contrast(1.05)'
                    }}
                  />
                </motion.div>

                {/* Overlay Grid */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="w-full h-full" style={{
                    backgroundImage: 'linear-gradient(rgba(214, 180, 108, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(214, 180, 108, 0.05) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>
              </div>

              {/* Controls */}
              <div className="flex gap-4 justify-center mb-8">
                <button
                  onClick={handleRotate}
                  className="flex items-center gap-2 px-6 py-3 bg-warm-white/10 hover:bg-warm-white/20 rounded-full transition-colors"
                >
                  <RotateCw className="w-5 h-5 text-gold" />
                  <span className="text-sm">Obróć</span>
                </button>
                <button
                  onClick={handleZoom}
                  className="flex items-center gap-2 px-6 py-3 bg-warm-white/10 hover:bg-warm-white/20 rounded-full transition-colors"
                >
                  <Maximize2 className="w-5 h-5 text-gold" />
                  <span className="text-sm">{scale === 1 ? 'Powiększ' : 'Pomniejsz'}</span>
                </button>
              </div>

              {/* Material Info */}
              <div className="space-y-4">
                <div>
                  <div className="text-gold text-sm tracking-wider uppercase mb-2">
                    {selectedMaterial.category}
                  </div>
                  <h3 className="text-3xl mb-3">{selectedMaterial.name}</h3>
                  <p className="text-warm-white/70">{selectedMaterial.description}</p>
                </div>

                <div className="pt-4 border-t border-warm-white/10">
                  <div className="text-warm-white/60 text-sm mb-3">Właściwości:</div>
                  <div className="space-y-2">
                    {selectedMaterial.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                        <span className="text-warm-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Interaction Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-6 text-center text-warm-white/40 text-sm flex items-center justify-center gap-2"
            >
              <Move className="w-4 h-4" />
              Użyj przycisków aby manipulować materiałem
            </motion.div>
          </motion.div>

          {/* Materials List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {materials.map((material, index) => (
              <motion.button
                key={material.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
                onClick={() => setSelectedMaterial(material)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                  selectedMaterial.id === material.id
                    ? 'border-gold bg-gold/10'
                    : 'border-warm-white/10 hover:border-warm-white/30 bg-warm-white/5'
                }`}
              >
                <div className="flex gap-6 items-center">
                  {/* Thumbnail */}
                  <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={material.image}
                      alt={material.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="text-gold text-xs tracking-wider uppercase mb-2">
                      {material.category}
                    </div>
                    <h4 className="text-xl lg:text-2xl mb-2 truncate">
                      {material.name}
                    </h4>
                    <p className="text-warm-white/60 text-sm line-clamp-2">
                      {material.description}
                    </p>
                  </div>

                  {/* Selected Indicator */}
                  {selectedMaterial.id === material.id && (
                    <div className="w-3 h-3 rounded-full bg-gold flex-shrink-0 animate-pulse" />
                  )}
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-warm-white/5 backdrop-blur-sm border border-warm-white/10 rounded-2xl px-8 py-6">
            <p className="text-warm-white/80 mb-4">
              Chcesz zobaczyć więcej materiałów w naszym showroomie?
            </p>
            <button className="bg-gold text-charcoal px-8 py-3 rounded-full hover:bg-gold/90 transition-colors">
              Umów wizytę
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}