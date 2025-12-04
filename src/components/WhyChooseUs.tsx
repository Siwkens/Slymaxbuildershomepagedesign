import { motion } from 'motion/react';
import { Award, Gem, Clock, Boxes } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: '10+ Years Experience',
    description: 'Decade of expertise in construction and renovation excellence',
    stat: '500+',
    statLabel: 'Projects Completed'
  },
  {
    icon: Gem,
    title: 'Premium Materials',
    description: 'Only the finest quality materials for lasting results',
    stat: '100%',
    statLabel: 'Quality Guarantee'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Committed to meeting deadlines without compromise',
    stat: '98%',
    statLabel: 'On-Time Rate'
  },
  {
    icon: Boxes,
    title: '3D Project Visualization',
    description: 'See your project before construction begins',
    stat: '3D',
    statLabel: 'Preview Available'
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#d4af37] opacity-5 blur-[120px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4e5b3] via-[#d4af37] to-[#b8941f] mb-4">
            WHY CHOOSE US
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Combining years of expertise with cutting-edge technology to deliver exceptional results
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card container */}
              <div className="relative h-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-8 border border-[#d4af37]/20 shadow-[0_0_40px_rgba(212,175,55,0.1)] group-hover:border-[#d4af37]/50 group-hover:shadow-[0_0_60px_rgba(212,175,55,0.3)] transition-all duration-500">
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  {/* Icon with animated ring */}
                  <div className="relative">
                    {/* Animated ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-4 rounded-full border-2 border-dashed border-[#d4af37]/30"
                    />
                    
                    {/* Icon container */}
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#d4af37]/30 to-[#b8941f]/10 flex items-center justify-center border-2 border-[#d4af37]/40 shadow-[0_0_30px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] transition-all duration-500">
                      <feature.icon className="w-10 h-10 text-[#d4af37]" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div>
                    <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-br from-[#f4e5b3] to-[#d4af37] mb-1">
                      {feature.stat}
                    </div>
                    <div className="text-sm text-[#d4af37]/70">{feature.statLabel}</div>
                  </div>
                  
                  {/* Title and Description */}
                  <div className="space-y-3">
                    <h3 className="text-[#f4e5b3]">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
                
                {/* Bottom shine effect */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
                
                {/* Corner decorations */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#d4af37]/30 rounded-tl-lg" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#d4af37]/30 rounded-br-lg" />
              </div>
              
              {/* Outer glow on hover */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[#d4af37]/0 to-[#d4af37]/0 group-hover:from-[#d4af37]/10 group-hover:to-[#b8941f]/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
            </motion.div>
          ))}
        </div>
        
        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] rounded-2xl px-8 py-6 border border-[#d4af37]/30 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
            <p className="text-gray-300 mb-4">
              Ready to transform your space?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="group relative px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105">
                <span className="relative z-10 font-semibold text-black">Schedule a Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#f4e5b3] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
