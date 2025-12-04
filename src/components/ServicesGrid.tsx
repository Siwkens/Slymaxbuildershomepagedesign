import { motion } from "motion/react";
import { Home, Sparkles, Zap, Layers, Paintbrush, Hammer, Droplet, Box } from "lucide-react";

const services = [
  { icon: Home, title: "Renovations", description: "Complete home transformations" },
  { icon: Sparkles, title: "Interior Finishing", description: "Premium interior detailing" },
  { icon: Zap, title: "Modernization", description: "Contemporary upgrades" },
  { icon: Layers, title: "Flooring", description: "Expert flooring solutions" },
  { icon: Paintbrush, title: "Painting", description: "Professional paint services" },
  { icon: Hammer, title: "Carpentry", description: "Custom woodwork" },
  { icon: Droplet, title: "Waterproofing", description: "Advanced protection systems" },
  { icon: Box, title: "Furniture Assembly", description: "Expert assembly services" },
];

export function ServicesGrid() {
  return (
    <section id="services" className="relative py-24 px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/98 to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/10 rounded-full blur-[150px]" />
      
      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4">
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
              OUR SERVICES
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Comprehensive construction and renovation solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="relative h-full p-8 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-950/20 via-black/40 to-black/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-300 group-hover:border-amber-400/60 group-hover:shadow-[0_0_40px_rgba(251,191,36,0.3)]">
                  {/* Glowing Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-600/0 group-hover:from-amber-500/10 group-hover:to-amber-600/5 transition-all duration-500" />
                  
                  {/* Corner Glow */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-amber-500/20 rounded-full blur-2xl group-hover:bg-amber-400/30 transition-all duration-500" />
                  
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/40 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.2)] group-hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]">
                      <Icon className="w-8 h-8 text-amber-400" strokeWidth={1.5} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl text-white group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Bottom Border Glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
