import React from 'react';
import { motion } from 'motion/react';
import { Award, Shield, Users, TrendingUp } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  specialty: string;
}

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Michał Kowalski',
    role: 'CEO & Architekt Wnętrz',
    image: 'professional architect man portrait',
    specialty: 'Design Premium & Zarządzanie'
  },
  {
    name: 'Anna Wiśniewska',
    role: 'Project Manager',
    image: 'professional woman project manager',
    specialty: 'Koordynacja Projektów'
  },
  {
    name: 'Piotr Nowak',
    role: 'Kierownik Budowy',
    image: 'construction manager man portrait',
    specialty: 'Nadzór Techniczny'
  },
  {
    name: 'Katarzyna Lewandowska',
    role: 'Interior Designer',
    image: 'interior designer woman portrait',
    specialty: 'Aranżacje Wnętrz'
  }
];

const stats: Stat[] = [
  {
    icon: <Award className="w-8 h-8" />,
    value: '150+',
    label: 'Zrealizowanych Projektów'
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: '30+',
    label: 'Specjalistów w Zespole'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    value: '100%',
    label: 'Gwarancja Jakości'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: '12 lat',
    label: 'Doświadczenia'
  }
];

const certifications = [
  'ISO 9001:2015',
  'Certyfikat Budownictwa Ekologicznego',
  'Autoryzowany Partner Hansgrohe',
  'Członek Polskiej Izby Projektowania Wnętrz',
  'Certyfikat BIM Manager',
  'Nagroda Arch Design Award 2023'
];

export function Team() {
  return (
    <section id="team" className="py-32 px-6 lg:px-12 bg-gradient-to-b from-charcoal to-charcoal/95 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #D6B46C 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">Zespół</span>
          <h2 className="text-5xl lg:text-6xl mb-6">Eksperci SLYMAX</h2>
          <p className="text-warm-white/60 text-lg max-w-2xl mx-auto">
            Doświadczeni profesjonaliści z pasją do perfekcji w każdym detalu
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-warm-white/5 backdrop-blur-sm border border-warm-white/10 rounded-2xl p-8 text-center hover:border-gold/50 transition-all duration-300"
            >
              <div className="text-gold mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-4xl lg:text-5xl font-light text-gold mb-2">{stat.value}</div>
              <div className="text-warm-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-6">
                <img
                  src={`https://source.unsplash.com/400x600/?${member.image}`}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gold/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <div className="text-center text-charcoal">
                    <p className="text-lg font-medium">{member.specialty}</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl lg:text-2xl mb-2 group-hover:text-gold transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-warm-white/60">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-warm-white/5 backdrop-blur-sm border border-warm-white/10 rounded-3xl p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl mb-4">Certyfikaty i Nagrody</h3>
            <p className="text-warm-white/60">Potwierdzenie najwyższej jakości naszych usług</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-charcoal border border-gold/30 rounded-xl p-6 text-center hover:border-gold hover:bg-gold/5 transition-all duration-300"
              >
                <Award className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-warm-white">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <blockquote className="text-2xl lg:text-3xl font-light text-warm-white/80 italic max-w-4xl mx-auto">
            "Każdy projekt to dla nas wyjątkowa historia, którą tworzymy razem z klientem. 
            Nasza pasja to przekształcanie przestrzeni w dzieła sztuki."
          </blockquote>
          <p className="text-gold mt-6 tracking-wider">— Michał Kowalski, CEO SLYMAX BUILDERS</p>
        </motion.div>
      </div>
    </section>
  );
}
