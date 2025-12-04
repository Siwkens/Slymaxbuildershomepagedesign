import { motion } from 'motion/react';
import { Home, PaintBucket, Sparkles, Layers, Paintbrush, Hammer, Droplets, Package } from 'lucide-react';

const services = [
  { icon: Home, title: 'Renovations', description: 'Complete home transformations' },
  { icon: Layers, title: 'Interior Finishing', description: 'Premium quality finishes' },
  { icon: Sparkles, title: 'Modernization', description: 'Contemporary upgrades' },
  { icon: PaintBucket, title: 'Flooring', description: 'Expert floor installations' },
  { icon: Paintbrush, title: 'Painting', description: 'Professional painting services' },
  { icon: Hammer, title: 'Carpentry', description: 'Custom woodwork solutions' },
  { icon: Droplets, title: 'Waterproofing', description: 'Long-lasting protection' },
  { icon: Package, title: 'Furniture Assembly', description: 'Expert assembly services' },
];

export function Services() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#d4af37] opacity-5 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#d4af37] opacity-5 blur-[100px] rounded-full" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4e5b3] via-[#d4af37] to-[#b8941f] mb-4">
            OUR SERVICES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              {/* Glassmorphism card */}
              <div className="relative h-full bg-gradient-to-br from-[#1a1a1a]/80 to-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl p-8 border border-[#d4af37]/30 shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-300 group-hover:border-[#d4af37]/60 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/0 to-[#d4af37]/0 group-hover:from-[#d4af37]/5 group-hover:to-[#d4af37]/10 rounded-2xl transition-all duration-300" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  {/* Icon container */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#b8941f]/10 flex items-center justify-center border border-[#d4af37]/30 shadow-[0_0_20px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300">
                    <service.icon className="w-8 h-8 text-[#d4af37]" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-[#f4e5b3]">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#d4af37]/20 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#d4af37]/20 rounded-br-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
