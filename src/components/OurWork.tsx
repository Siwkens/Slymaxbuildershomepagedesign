import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    beforeImage: 'https://images.unsplash.com/photo-1699084260081-354ce46d738b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMHJvb20lMjBiZWZvcmUlMjByZW5vdmF0aW9ufGVufDF8fHx8MTc2NDYyMTY1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    afterImage: 'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY0NTg2ODMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Living Room',
    type: 'BEFORE / AFTER'
  },
  {
    id: 2,
    beforeImage: 'https://images.unsplash.com/photo-1699084260081-354ce46d738b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMHJvb20lMjBiZWZvcmUlMjByZW5vdmF0aW9ufGVufDF8fHx8MTc2NDYyMTY1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    afterImage: 'https://images.unsplash.com/photo-1759147960461-b74a7e9a75d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwcmVub3ZhdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NjQ2MjE2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Kitchen',
    type: 'BEFORE / AFTER'
  },
  {
    id: 3,
    afterImage: 'https://images.unsplash.com/photo-1758448018619-4cbe2250b9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMHJlbm92YXRpb24lMjBsdXh1cnl8ZW58MXx8fHwxNzY0NjIxNjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Bathroom',
    type: 'AFTER'
  },
  {
    id: 4,
    afterImage: 'https://images.unsplash.com/photo-1758862502366-92fd33c49ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGV4dGVyaW9yJTIwcmVub3ZhdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NjQ2MjE2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Exterior',
    type: 'AFTER'
  },
];

export function OurWork() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#d4af37] opacity-5 blur-[100px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4e5b3] via-[#d4af37] to-[#b8941f] mb-4">
            OUR WORK
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Gold frame effect */}
              <div className="relative p-1 bg-gradient-to-br from-[#d4af37] via-[#f4e5b3] to-[#b8941f] rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] transition-all duration-300">
                {/* Inner container */}
                <div className="relative bg-[#0a0a0a] rounded-xl overflow-hidden aspect-[4/3]">
                  {/* Image */}
                  <ImageWithFallback
                    src={project.afterImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Before/After badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#d4af37]/20 backdrop-blur-md border border-[#d4af37]/40 rounded-full">
                    <span className="text-xs text-[#f4e5b3]">{project.type}</span>
                  </div>
                  
                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white">{project.title}</h3>
                  </div>
                  
                  {/* Corner shine effect */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#d4af37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              {/* Outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#d4af37]/20 to-[#b8941f]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>
        
        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="group relative px-8 py-3 border-2 border-[#d4af37] rounded-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-105">
            <span className="relative z-10 font-semibold text-[#d4af37] group-hover:text-black transition-colors">View All Projects</span>
            <div className="absolute inset-0 bg-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
