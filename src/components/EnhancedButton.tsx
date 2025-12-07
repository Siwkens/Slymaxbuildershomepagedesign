import { motion } from 'motion/react';
import { useState } from 'react';

interface EnhancedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function EnhancedButton({ 
  children, 
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href
}: EnhancedButtonProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black',
    secondary: 'bg-white/5 border border-white/10 text-white',
    outline: 'border-2 border-[#D6B46C] text-[#D6B46C]',
  };

  const Component = href ? motion.a : motion.button;
  const extraProps = href ? { href } : { onClick };

  return (
    <Component
      className={`relative overflow-hidden rounded-xl font-bold uppercase tracking-wider transition-all ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      {...extraProps}
    >
      {/* Ripple effect on hover */}
      {isHovered && (
        <motion.span
          className="absolute inset-0 bg-white/20 rounded-full"
          style={{
            left: mousePos.x,
            top: mousePos.y,
          }}
          initial={{ width: 0, height: 0, x: '-50%', y: '-50%' }}
          animate={{ width: 500, height: 500 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      )}

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Glow effect */}
      {variant === 'primary' && (
        <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] opacity-0 group-hover:opacity-50 blur-xl transition-opacity rounded-xl" />
      )}
    </Component>
  );
}

// Magnetic button that follows mouse
export function MagneticButton({
  children,
  className = '',
  onClick,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * 0.2;
    const deltaY = (e.clientY - centerY) * 0.2;
    
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = href ? motion.a : motion.button;
  const extraProps = href ? { href } : { onClick };

  return (
    <Component
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...extraProps}
    >
      {children}
    </Component>
  );
}
