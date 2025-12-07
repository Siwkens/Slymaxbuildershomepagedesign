import { motion } from 'motion/react';
import logoImage from 'figma:asset/2efec2bbd367343602568c94572f81890c7ead9a.png';

export function LoadingAnimation({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A0F14]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      onAnimationComplete={onComplete}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(214, 180, 108, 0.3) 1px, transparent 1px),
              linear-gradient(0deg, rgba(214, 180, 108, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Logo with Animations */}
      <div className="relative flex flex-col items-center gap-6">
        {/* Golden Glow Ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(214, 180, 108, 0.4) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Logo */}
        <motion.img
          src={logoImage}
          alt="Slymax Builders"
          className="h-32 w-auto relative z-10"
          style={{
            filter: 'drop-shadow(0 0 40px rgba(214, 180, 108, 0.6))',
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.1, 1],
            opacity: [0, 1, 1],
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut"
          }}
        />

        {/* Company Name */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div 
            className="text-4xl mb-2"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #D6B46C 50%, #FFA500 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '900',
              letterSpacing: '-0.03em',
            }}
          >
            SLYMAX
          </div>
          <div 
            className="text-2xl tracking-widest"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #D6B46C 50%, #FFA500 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '700',
            }}
          >
            BUILDERS
          </div>
        </motion.div>

        {/* Loading Bar */}
        <motion.div 
          className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mt-8"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#D6B46C] to-[#FFA500]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          className="text-white/50 text-sm tracking-widest uppercase mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ 
            duration: 2,
            times: [0, 0.2, 0.8, 1],
            delay: 0.3
          }}
        >
          Loading Premium Experience...
        </motion.p>
      </div>
    </motion.div>
  );
}
