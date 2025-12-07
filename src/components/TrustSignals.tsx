import { motion } from 'motion/react';
import { Award, Shield, Users, ThumbsUp, Star, CheckCircle2 } from 'lucide-react';

export function TrustSignals() {
  const partners = [
    {
      name: 'ISO Certified',
      icon: Shield,
      description: 'Quality Management',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Award Winner',
      icon: Award,
      description: 'Best Renovation 2024',
      gradient: 'from-amber-500 to-yellow-500'
    },
    {
      name: '500+ Projects',
      icon: CheckCircle2,
      description: 'Successfully Completed',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: '5-Star Rated',
      icon: Star,
      description: '4.9/5 Customer Rating',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: '15+ Years',
      icon: ThumbsUp,
      description: 'Industry Experience',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      name: 'Trust Mark',
      icon: Users,
      description: 'Government Endorsed',
      gradient: 'from-indigo-500 to-violet-500'
    }
  ];

  return (
    <section className="relative px-8 lg:px-16 py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F14] via-[#0A0F14]/50 to-[#0A0F14]"></div>
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Trusted by Homeowners Across Scotland
          </h3>
          <p className="text-white/50 max-w-2xl mx-auto">
            Certified professionals committed to excellence and customer satisfaction
          </p>
        </motion.div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="group relative"
            >
              {/* Glow */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${partner.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity rounded-2xl`}></div>
              
              {/* Card */}
              <div 
                className="relative p-6 rounded-2xl backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all text-center h-full flex flex-col items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                }}
              >
                {/* Icon */}
                <motion.div
                  className={`mb-3 p-3 rounded-xl bg-gradient-to-r ${partner.gradient}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <partner.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                </motion.div>
                
                {/* Text */}
                <h4 className="text-white font-bold text-sm mb-1">
                  {partner.name}
                </h4>
                <p className="text-white/50 text-xs">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
