import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-xs tracking-[0.4em] uppercase mb-4 block">Efekty</span>
          <h2 className="text-3xl md:text-5xl font-light text-warm-white">Moc Przemiany</h2>
        </div>

        <div 
          ref={containerRef}
          className="relative h-[600px] w-full overflow-hidden rounded-sm cursor-col-resize select-none"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After (Bottom Layer) */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759147960461-b74a7e9a75d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVub3ZhdGlvbiUyMGx1eHVyeXxlbnwxfHx8fDE3Njg0NjM2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="After Renovation"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 right-8 bg-charcoal/80 px-4 py-2 backdrop-blur-md">
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold">Po Realizacji</span>
            </div>
          </div>

          {/* Before (Top Layer) */}
          <div 
            className="absolute inset-0 z-10"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1603901622056-0a5bee231395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBhcmNoaXRlY3R1cmFsJTIwcHJvZmVzc2lvbmFsJTIwdG9vbHMlMjBsdXh1cnl8ZW58MXx8fHwxNzY4NDYzNjgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Before Renovation"
              className="w-full h-full object-cover grayscale brightness-50"
            />
            <div className="absolute bottom-8 left-8 bg-charcoal/80 px-4 py-2 backdrop-blur-md">
              <span className="text-[10px] tracking-[0.3em] uppercase text-warm-white/60">Stan Pierwotny</span>
            </div>
          </div>

          {/* Slider Line */}
          <div 
            className="absolute top-0 bottom-0 z-20 w-[1px] bg-gold"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border border-gold rounded-full flex items-center justify-center bg-charcoal backdrop-blur-md">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-gold rounded-full"></div>
                <div className="w-1 h-1 bg-gold rounded-full"></div>
                <div className="w-1 h-1 bg-gold rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
