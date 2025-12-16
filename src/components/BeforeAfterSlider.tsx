import { motion } from 'motion/react';
import { useState, useRef } from 'react';
import { ArrowLeftRight, Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  category: string;
  categoryColor: string;
  categoryIcon: React.ReactNode;
  title: string;
  description: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  category,
  categoryColor,
  categoryIcon,
  title,
  description,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#FFD700]/20 via-[#D6B46C]/20 to-[#FFA500]/20 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity rounded-3xl"></div>
      
      <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 group-hover:border-[#D6B46C]/50 transition-all">
        {/* Slider Container */}
        <div
          ref={containerRef}
          className="relative w-full h-[500px] select-none cursor-ew-resize overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
        >
          {/* After Image (Full Width) */}
          <div className="absolute inset-0">
            <img
              src={afterImage}
              alt={afterLabel}
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
            
            {/* After Badge */}
            <motion.div 
              className="absolute top-6 left-6 z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="px-5 py-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full shadow-2xl flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-black" fill="currentColor" strokeWidth={2.5} />
                <span className="text-black font-bold uppercase tracking-widest text-xs">{afterLabel}</span>
              </div>
            </motion.div>
          </div>

          {/* Before Image (Clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            }}
          >
            <img
              src={beforeImage}
              alt={beforeLabel}
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
            
            {/* Before Badge */}
            <motion.div 
              className="absolute top-6 left-6 z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="px-5 py-2 bg-gray-900/90 backdrop-blur-xl rounded-full border border-white/20">
                <span className="text-white font-bold uppercase tracking-widest text-xs">{beforeLabel}</span>
              </div>
            </motion.div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 cursor-ew-resize z-30"
            style={{
              left: `${sliderPosition}%`,
              transform: 'translateX(-50%)',
            }}
          >
            {/* Vertical Line */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#D6B46C] to-white shadow-[0_0_20px_rgba(214,180,108,0.8)]"></div>
            
            {/* Handle Button */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing"
              style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #D6B46C 50%, #FFA500 100%)',
                boxShadow: '0 10px 40px rgba(214, 180, 108, 0.6), 0 0 0 4px rgba(255, 255, 255, 0.2)',
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: isDragging ? 1.15 : 1,
              }}
            >
              <ArrowLeftRight className="w-6 h-6 text-black" strokeWidth={3} />
            </motion.div>

            {/* Top Arrow Indicator */}
            <motion.div
              className="absolute top-4 left-1/2 -translate-x-1/2"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-8 h-8 rounded-full bg-[#D6B46C]/90 backdrop-blur-xl flex items-center justify-center">
                <ArrowLeftRight className="w-4 h-4 text-white rotate-90" strokeWidth={2.5} />
              </div>
            </motion.div>

            {/* Bottom Arrow Indicator */}
            <motion.div
              className="absolute bottom-4 left-1/2 -translate-x-1/2"
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-8 h-8 rounded-full bg-[#D6B46C]/90 backdrop-blur-xl flex items-center justify-center">
                <ArrowLeftRight className="w-4 h-4 text-white rotate-90" strokeWidth={2.5} />
              </div>
            </motion.div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-6 right-6 z-20">
            <motion.div
              className={`px-4 py-2 ${categoryColor} backdrop-blur-xl rounded-full border border-white/20 flex items-center gap-2`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {categoryIcon}
              <span className="text-white font-semibold text-xs">{category}</span>
            </motion.div>
          </div>

          {/* Bottom Info */}
          <div className="absolute bottom-6 left-6 right-6 z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
              <p className="text-white/70">{description}</p>
            </motion.div>
          </div>

          {/* Drag Instruction (shows on hover) */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
            initial={{ opacity: 1 }}
            animate={{
              opacity: isDragging ? 0 : [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <div className="px-6 py-3 bg-black/80 backdrop-blur-xl rounded-full border border-[#D6B46C]/50 text-white text-sm font-medium">
              ← Drag to compare →
            </div>
          </motion.div>
        </div>

        {/* Particle Effects on Hover */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#D6B46C]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -60],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
