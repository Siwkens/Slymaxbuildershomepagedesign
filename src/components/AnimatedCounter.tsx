import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({ end, duration = 2, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString('pl-PL')}{suffix}
    </span>
  );
}

interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: React.ReactNode;
  delay?: number;
}

export function StatCard({ value, suffix, prefix, label, icon, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-warm-white/5 backdrop-blur-sm border border-warm-white/10 rounded-2xl p-8 hover:border-gold/50 transition-all duration-300 group"
    >
      {icon && (
        <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}
      <div className="text-4xl lg:text-5xl font-light text-gold mb-2">
        <AnimatedCounter end={value} suffix={suffix} prefix={prefix} />
      </div>
      <div className="text-warm-white/60 text-sm">{label}</div>
    </motion.div>
  );
}
