import React, { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TooltipProps {
  children: ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}

export function Tooltip({ 
  children, 
  content, 
  position = 'top',
  delay = 0.3 
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const positions = {
    top: { bottom: '100%', left: '50%', x: '-50%', y: '-8px' },
    bottom: { top: '100%', left: '50%', x: '-50%', y: '8px' },
    left: { right: '100%', top: '50%', x: '-8px', y: '-50%' },
    right: { left: '100%', top: '50%', x: '8px', y: '-50%' }
  };

  const handleMouseEnter = () => {
    const id = setTimeout(() => setIsVisible(true), delay * 1000);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsVisible(false);
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 whitespace-nowrap"
            style={positions[position]}
          >
            <div className="bg-charcoal border border-gold/50 rounded-lg px-3 py-2 text-sm text-warm-white shadow-xl backdrop-blur-sm">
              {content}
              {/* Arrow */}
              <div 
                className="absolute w-2 h-2 bg-charcoal border-gold/50 transform rotate-45"
                style={{
                  ...(position === 'top' && { bottom: '-5px', left: '50%', transform: 'translateX(-50%) rotate(45deg)', borderRight: '1px solid', borderBottom: '1px solid' }),
                  ...(position === 'bottom' && { top: '-5px', left: '50%', transform: 'translateX(-50%) rotate(45deg)', borderLeft: '1px solid', borderTop: '1px solid' }),
                  ...(position === 'left' && { right: '-5px', top: '50%', transform: 'translateY(-50%) rotate(45deg)', borderTop: '1px solid', borderRight: '1px solid' }),
                  ...(position === 'right' && { left: '-5px', top: '50%', transform: 'translateY(-50%) rotate(45deg)', borderBottom: '1px solid', borderLeft: '1px solid' })
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface BadgeProps {
  children: ReactNode;
  variant?: 'gold' | 'outline' | 'solid';
  icon?: ReactNode;
  pulse?: boolean;
}

export function Badge({ 
  children, 
  variant = 'gold',
  icon,
  pulse = false 
}: BadgeProps) {
  const variants = {
    gold: 'bg-gold/10 border-gold/50 text-gold',
    outline: 'bg-transparent border-warm-white/30 text-warm-white/80',
    solid: 'bg-gold text-charcoal border-gold'
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium ${variants[variant]}`}
    >
      {pulse && (
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-gold"
        />
      )}
      {icon && <span className="text-gold">{icon}</span>}
      {children}
    </motion.div>
  );
}

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
}

export function ProgressBar({ 
  value, 
  max = 100, 
  label,
  showPercentage = true 
}: ProgressBarProps) {
  const percentage = (value / max) * 100;

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex justify-between mb-2 text-sm text-warm-white/80">
          {label && <span>{label}</span>}
          {showPercentage && <span>{Math.round(percentage)}%</span>}
        </div>
      )}
      <div className="w-full h-2 bg-warm-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-gold to-gold/70 rounded-full relative"
        >
          <motion.div
            animate={{ x: ['0%', '100%'] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-warm-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
}

interface NotificationProps {
  title: string;
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  isVisible: boolean;
  onClose?: () => void;
}

export function Notification({ 
  title, 
  message, 
  type = 'info',
  isVisible,
  onClose 
}: NotificationProps) {
  const types = {
    success: { bg: 'bg-green-500/10', border: 'border-green-500/50', text: 'text-green-500' },
    error: { bg: 'bg-red-500/10', border: 'border-red-500/50', text: 'text-red-500' },
    info: { bg: 'bg-gold/10', border: 'border-gold/50', text: 'text-gold' },
    warning: { bg: 'bg-orange-500/10', border: 'border-orange-500/50', text: 'text-orange-500' }
  };

  const style = types[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className={`fixed top-24 right-6 z-50 ${style.bg} ${style.border} border rounded-2xl p-6 backdrop-blur-xl shadow-2xl max-w-md`}
        >
          <div className="flex justify-between items-start gap-4">
            <div>
              <h4 className={`text-lg font-medium mb-1 ${style.text}`}>{title}</h4>
              <p className="text-warm-white/70 text-sm">{message}</p>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="text-warm-white/60 hover:text-warm-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export function LoadingSpinner({ size = 'md', color = '#D6B46C' }: LoadingSpinnerProps) {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className={`${sizes[size]} rounded-full border-4 border-warm-white/20 border-t-[${color}]`}
    />
  );
}

interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
}

export function Skeleton({ width = '100%', height = '20px', className = '' }: SkeletonProps) {
  return (
    <div 
      className={`bg-warm-white/10 rounded-lg overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <motion.div
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        className="h-full w-full bg-gradient-to-r from-transparent via-warm-white/20 to-transparent"
      />
    </div>
  );
}
