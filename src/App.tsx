import { motion, useScroll, useTransform } from 'motion/react';
import { Home, Leaf, Zap, ChefHat, Paintbrush, Grid3x3, Hammer, Trees, Box, Fence, Award, Trophy, Clock, CheckCircle, Phone, Mail, MapPin, ChevronDown, Menu, X, ArrowRight, Star, Sparkles, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroImage from 'figma:asset/9ce3f11a2825db662e1ee7c9ee40ee9590666b17.png';
import logoImage from 'figma:asset/2efec2bbd367343602568c94572f81890c7ead9a.png';
import { LoadingAnimation } from './components/LoadingAnimation';
import { WhatsAppButton } from './components/WhatsAppButton';
import { TrustSignals } from './components/TrustSignals';
import { FloatingParticles, RippleEffect, ScrollProgress, CursorFollower } from './components/MicroInteractions';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { scrollY } = useScroll();
  
  // Advanced Parallax
  const heroY = useTransform(scrollY, [0, 800], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const mainServices = [
    { 
      icon: ChefHat, 
      title: 'Kitchens & Bathrooms', 
      color: 'from-amber-500 to-orange-600',
      features: ['Custom cabinetry', 'Modern fixtures', 'Space optimization', 'Premium finishes']
    },
    { 
      icon: Paintbrush, 
      title: 'Painting & Decorating', 
      color: 'from-purple-500 to-pink-600',
      features: ['Interior painting', 'Exterior coating', 'Wallpaper installation', 'Color consultation']
    },
    { 
      icon: Grid3x3, 
      title: 'Flooring & Tiling', 
      color: 'from-blue-500 to-cyan-600',
      features: ['Hardwood flooring', 'Ceramic tiles', 'Vinyl installation', 'Floor restoration']
    },
    { 
      icon: Hammer, 
      title: 'Carpentry & Built-ins', 
      color: 'from-emerald-500 to-teal-600',
      features: ['Custom furniture', 'Built-in storage', 'Shelving systems', 'Wood restoration']
    },
    { 
      icon: Trees, 
      title: 'Garden Design', 
      color: 'from-green-500 to-lime-600',
      features: ['Landscape planning', 'Plant selection', 'Garden layouts', 'Water features']
    },
    { 
      icon: Box, 
      title: 'Decking & Terraces', 
      color: 'from-rose-500 to-red-600',
      features: ['Composite decking', 'Patio construction', 'Terrace design', 'Outdoor flooring']
    },
    { 
      icon: Fence, 
      title: 'Outdoor Structures', 
      color: 'from-indigo-500 to-blue-600',
      features: ['Pergolas', 'Gazebos', 'Fencing', 'Garden rooms']
    },
    { 
      icon: Home, 
      title: 'Full Home Renovation', 
      color: 'from-yellow-500 to-amber-600',
      features: ['Complete makeover', 'Structural changes', 'Extension work', 'Project management']
    },
  ];

  const whyChooseUs = [
    { icon: Award, title: '10+ Years Experience', description: 'Proven track record of excellence', gradient: 'from-amber-400 via-yellow-500 to-orange-600' },
    { icon: Trophy, title: 'High-Quality Materials', description: 'Premium products only', gradient: 'from-purple-400 via-pink-500 to-rose-600' },
    { icon: CheckCircle, title: 'Interior + Garden Expertise', description: 'Complete solutions', gradient: 'from-cyan-400 via-blue-500 to-indigo-600' },
    { icon: Clock, title: 'Clean & On-Time Work', description: 'Delivered as promised', gradient: 'from-emerald-400 via-green-500 to-teal-600' },
  ];

  // Show loading animation
  if (isLoading) {
    return <LoadingAnimation onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className={`${isDarkMode ? 'bg-[#0A0F14]' : 'bg-[#F5F2EB]'} min-h-screen ${isDarkMode ? 'text-white' : 'text-[#0A0F14]'} font-sans antialiased overflow-x-hidden relative transition-colors duration-500`}>
      {/* Micro Interactions */}
      <FloatingParticles />
      <RippleEffect />
      <ScrollProgress />
      <CursorFollower />

      {/* Animated Background Gradient Mesh */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #D6B46C 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #74C7FF 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #C9A961 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Cursor Follow Light Effect */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-50 opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #D6B46C 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* HEADER - Ultra Modern */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? `${isDarkMode ? 'bg-[#0A0F14]/80' : 'bg-[#F5F2EB]/80'} backdrop-blur-2xl shadow-2xl ${isDarkMode ? 'border-b border-white/5' : 'border-b border-[#0A0F14]/10'}` 
            : 'bg-transparent'
        }`}
        style={{ height: '90px' }}
      >
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {/* Architectural Grid Pattern */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(214, 180, 108, 0.1) 1px, transparent 1px),
                linear-gradient(0deg, rgba(214, 180, 108, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
          {/* Diagonal Construction Lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="construction-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="100" y2="100" stroke="rgba(214, 180, 108, 0.15)" strokeWidth="0.5"/>
                <line x1="100" y1="0" x2="0" y2="100" stroke="rgba(214, 180, 108, 0.15)" strokeWidth="0.5"/>
                <circle cx="50" cy="50" r="2" fill="rgba(214, 180, 108, 0.2)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#construction-pattern)"/>
          </svg>
          
          {/* Animated Tool Icons Watermark */}
          <div className="absolute inset-0 flex items-center justify-end pr-32 opacity-10">
            <motion.div
              animate={{
                y: [-5, 5, -5],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Hammer className="w-16 h-16 text-[#D6B46C]" strokeWidth={1} />
            </motion.div>
          </div>
          
          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(90deg, 
                  rgba(10, 15, 20, 0.95) 0%,
                  rgba(10, 15, 20, 0.7) 50%,
                  rgba(10, 15, 20, 0.95) 100%
                )
              `
            }}
          />
          
          {/* Animated Shimmer Line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #D6B46C 50%, transparent 100%)',
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scaleX: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-[1600px] mx-auto px-8 lg:px-16 h-full relative z-10">
          <div className="flex items-center justify-between h-full">
            {/* Logo with Text */}
            <motion.a 
              href="#home" 
              className="flex items-center gap-3 relative group"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D6B46C] to-[#C9A961] opacity-0 group-hover:opacity-30 blur-3xl transition-opacity rounded-lg"></div>
              <img 
                src={logoImage} 
                alt="Slymax Builders Logo" 
                className="h-16 w-auto relative z-10 drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(214, 180, 108, 0.4))',
                }}
              />
              <div className="relative z-10 text-xl hidden sm:block" style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #D6B46C 50%, #FFA500 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '900',
                letterSpacing: '-0.03em',
              }}>
                <div>SLYMAX</div>
                <div className="text-sm tracking-wider">BUILDERS</div>
              </div>
            </motion.a>

            {/* Center Menu - Floating Pills */}
            <nav className="hidden lg:flex items-center gap-2">
              {['Home', 'Services', 'Projects', 'Reviews', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative px-6 py-3 ${isDarkMode ? 'text-white/80 hover:text-white' : 'text-[#0A0F14]/80 hover:text-[#0A0F14]'} transition-all rounded-full overflow-hidden group`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D6B46C]/20 to-[#C9A961]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
                  <span className="relative z-10 text-sm tracking-wider uppercase">{item}</span>
                </motion.a>
              ))}
            </nav>

            {/* Right CTAs - 3D Glass Effect */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Theme Toggle */}
              <motion.button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="relative p-3 rounded-full overflow-hidden group"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D6B46C]/20 to-[#C9A961]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
                {isDarkMode ? (
                  <Sun className="relative z-10 w-5 h-5 text-[#D6B46C]" strokeWidth={2.5} />
                ) : (
                  <Moon className="relative z-10 w-5 h-5 text-[#D6B46C]" strokeWidth={2.5} />
                )}
              </motion.button>

              <motion.button
                className="relative px-7 py-3.5 rounded-2xl overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D6B46C]/0 via-[#D6B46C]/20 to-[#D6B46C]/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 text-sm font-semibold tracking-wider uppercase">Estimate Cost</span>
              </motion.button>
              
              <motion.button
                className="relative px-7 py-3.5 rounded-2xl overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] via-[#D6B46C] to-[#FFA500] rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFA500] via-[#FFD700] to-[#D6B46C] opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="absolute inset-0 opacity-50 group-hover:opacity-70 blur-xl bg-gradient-to-r from-[#FFD700] to-[#FFA500]"></div>
                <span className="relative z-10 text-sm font-bold tracking-wider uppercase text-black flex items-center gap-2">
                  Book Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </div>

            {/* Mobile Menu */}
            <button 
              className={`lg:hidden ${isDarkMode ? 'text-white' : 'text-[#0A0F14]'} p-2 relative group`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className={`absolute inset-0 ${isDarkMode ? 'bg-white/5' : 'bg-[#0A0F14]/5'} rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              {isMobileMenuOpen ? <X className="w-7 h-7 relative z-10" /> : <Menu className="w-7 h-7 relative z-10" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`lg:hidden ${isDarkMode ? 'bg-[#0A0F14]/95' : 'bg-[#F5F2EB]/95'} backdrop-blur-2xl ${isDarkMode ? 'border-t border-white/5' : 'border-t border-[#0A0F14]/10'}`}
          >
            <div className="px-6 py-8 space-y-4">
              {['Home', 'Services', 'Projects', 'Reviews', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className={`block ${isDarkMode ? 'text-white' : 'text-[#0A0F14]'} text-xl px-4 py-3 rounded-xl ${isDarkMode ? 'hover:bg-white/5' : 'hover:bg-[#0A0F14]/5'} transition-all`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className={`w-full px-6 py-3 ${isDarkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-[#0A0F14]/5 border-[#0A0F14]/10 text-[#0A0F14]'} border rounded-xl`}>
                Estimate Cost
              </button>
              <button className="w-full px-6 py-3 rounded-xl text-black bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </header>

      {/* HERO - Cinematic */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        {/* Animated 3D Background */}
        <div className="absolute inset-0 z-0">
          {/* Dark Base */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F14] via-[#0F1419] to-[#0A0F14]"></div>
          
          {/* Animated Geometric Grid */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(214, 180, 108, 0.1) 1px, transparent 1px),
                linear-gradient(0deg, rgba(214, 180, 108, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />

          {/* Floating 3D Cards */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-2xl backdrop-blur-sm border border-white/10"
                style={{
                  width: `${100 + Math.random() * 200}px`,
                  height: `${100 + Math.random() * 200}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: 'linear-gradient(135deg, rgba(214, 180, 108, 0.05) 0%, rgba(116, 199, 255, 0.05) 100%)',
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  rotate: [0, Math.random() * 10 - 5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Particle System */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${2 + Math.random() * 4}px`,
                  height: `${2 + Math.random() * 4}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: Math.random() > 0.5 ? '#D6B46C' : '#74C7FF',
                  boxShadow: `0 0 ${10 + Math.random() * 20}px currentColor`,
                }}
                animate={{
                  y: [0, -100 - Math.random() * 200],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Animated Architectural Icons */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative w-[800px] h-[800px]"
            >
              {[Home, Hammer, Trees, Paintbrush, Grid3x3, ChefHat, Box, Fence].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: '-40px',
                    marginTop: '-40px',
                  }}
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <motion.div
                    style={{
                      transform: `rotate(${i * 45}deg) translateY(-400px)`,
                    }}
                  >
                    <Icon className="w-20 h-20 text-[#D6B46C]" strokeWidth={0.5} />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Radial Gradient Overlays */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(214, 180, 108, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(214, 180, 108, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(214, 180, 108, 0.15) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 80% 30%, rgba(116, 199, 255, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 70%, rgba(116, 199, 255, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 30%, rgba(116, 199, 255, 0.1) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Top & Bottom Gradient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F14] via-transparent to-[#0A0F14]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F14]/80 via-transparent to-[#0A0F14]/40"></div>

          {/* Animated Light Rays */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(214, 180, 108, 0.1) 45deg, transparent 90deg, transparent 180deg, rgba(116, 199, 255, 0.1) 225deg, transparent 270deg)',
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Construction Blueprint Overlay */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="blueprint" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="150" x2="300" y2="150" stroke="#D6B46C" strokeWidth="2" strokeDasharray="10,5"/>
                  <line x1="150" y1="0" x2="150" y2="300" stroke="#D6B46C" strokeWidth="2" strokeDasharray="10,5"/>
                  <circle cx="150" cy="150" r="80" fill="none" stroke="#74C7FF" strokeWidth="2"/>
                  <rect x="50" y="50" width="200" height="200" fill="none" stroke="#D6B46C" strokeWidth="1"/>
                  <text x="150" y="160" fill="#D6B46C" fontSize="12" textAnchor="middle" opacity="0.5">SLYMAX</text>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#blueprint)"/>
            </svg>
          </div>

          {/* Animated Scanline Effect */}
          <motion.div
            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D6B46C] to-transparent"
            style={{
              boxShadow: '0 0 20px rgba(214, 180, 108, 0.5)',
            }}
            animate={{
              top: ['0%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-20 w-full"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-[1600px] mx-auto px-8 lg:px-16 pt-32">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="flex flex-col items-center text-center mb-12"
              >
                {/* Logo - Centered Above Premium Tag */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-8 relative group"
                  whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] via-[#D6B46C] to-[#FFA500] opacity-40 group-hover:opacity-60 blur-3xl transition-opacity rounded-full"></div>
                  <img 
                    src={logoImage} 
                    alt="Slymax Builders" 
                    className="h-32 w-auto relative z-10"
                    style={{
                      filter: 'drop-shadow(0 10px 30px rgba(214, 180, 108, 0.5))',
                    }}
                  />
                </motion.div>

                {/* Premium Tag - Animated */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="inline-block relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] blur-xl opacity-50 group-hover:opacity-80 transition-opacity rounded-full"></div>
                  <span 
                    className="relative z-10 px-8 py-3 rounded-full text-xs uppercase tracking-[0.3em] font-bold shadow-2xl flex items-center gap-2"
                    style={{
                      background: 'linear-gradient(135deg, #FFD700 0%, #D6B46C 50%, #FFA500 100%)',
                      color: '#0A0F14'
                    }}
                  >
                    <Star className="w-4 h-4" fill="currentColor" />
                    Premium Construction Services
                    <Star className="w-4 h-4" fill="currentColor" />
                  </span>
                </motion.div>

                {/* H1 - Gradient Text */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="mb-6 text-center"
                  style={{
                    fontSize: 'clamp(48px, 8vw, 96px)',
                    lineHeight: '1.1',
                    fontWeight: '800',
                    letterSpacing: '-0.03em'
                  }}
                >
                  <motion.span 
                    className="block bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: '200% 200%',
                    }}
                  >
                    Transforming spaces.
                  </motion.span>
                  <motion.span 
                    className="block mt-2"
                    style={{
                      background: 'linear-gradient(135deg, #FFD700 0%, #D6B46C 30%, #FFA500 60%, #FFD700 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundSize: '200% 200%',
                      filter: 'drop-shadow(0 0 30px rgba(214, 180, 108, 0.4))',
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    Connecting home & garden.
                  </motion.span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="text-xl text-white/70 mb-12 max-w-2xl leading-relaxed text-center mx-auto"
                >
                  Experience the future of construction with cutting-edge design and unmatched craftsmanship.
                </motion.p>

                {/* CTA Buttons - Enhanced */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="flex flex-col sm:flex-row gap-5 justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative px-12 py-5 rounded-2xl overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] via-[#D6B46C] to-[#FFA500] rounded-2xl"></div>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-[#FFA500] via-[#FFD700] to-[#D6B46C] opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        backgroundSize: '200% 200%',
                      }}
                    />
                    <div className="absolute inset-0 opacity-60 group-hover:opacity-100 blur-2xl bg-gradient-to-r from-[#FFD700] to-[#FFA500] transition-opacity"></div>
                    <span className="relative z-10 text-lg font-bold tracking-wider uppercase text-black flex items-center justify-center gap-2">
                      <Zap className="w-5 h-5" fill="currentColor" />
                      Get a Free Quote
                    </span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative px-12 py-5 rounded-2xl overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border-2 border-white/20 rounded-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative z-10 text-lg font-semibold tracking-wider uppercase text-white flex items-center justify-center gap-2">
                      View Transformations
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <span className="text-[#D6B46C] text-xs uppercase tracking-[0.3em] font-semibold">Scroll</span>
          <div className="w-6 h-10 border-2 border-[#D6B46C] rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-[#D6B46C] rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* MINI SERVICES - 3D Floating Cards */}
      <section className="relative py-0 -mt-40 z-30">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Interior Renovations', icon: Home, gradient: 'from-purple-500 via-pink-500 to-rose-500' },
              { title: 'Garden & Outdoor Living', icon: Trees, gradient: 'from-emerald-500 via-green-500 to-teal-500' },
              { title: 'Home Modernization', icon: Zap, gradient: 'from-blue-500 via-cyan-500 to-indigo-500' }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* 3D Shadow Layer */}
                <div className={`absolute -inset-4 bg-gradient-to-r ${service.gradient} opacity-30 group-hover:opacity-50 blur-3xl transition-opacity rounded-3xl`}></div>
                
                {/* Card */}
                <div className="relative h-[320px] rounded-3xl overflow-hidden backdrop-blur-2xl border border-white/10"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  }}
                >
                  {/* Animated Gradient Border */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl bg-gradient-to-r ${service.gradient} p-[2px]`}>
                    <div className="w-full h-full bg-[#0A0F14] rounded-3xl"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8">
                    {/* Icon with Glow */}
                    <motion.div
                      className="mb-6 relative"
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-50 blur-2xl rounded-full`}></div>
                      <div className={`relative p-6 rounded-2xl bg-gradient-to-r ${service.gradient}`}>
                        <service.icon className="w-14 h-14 text-white" strokeWidth={2} />
                      </div>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <div className={`w-20 h-1 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                  </div>

                  {/* Animated Particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${service.gradient}`}
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + i * 10}%`,
                        }}
                        animate={{
                          y: [-20, 20, -20],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3 + i,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN SERVICES GRID - Modern Cards */}
      <section id="services" className="relative py-32 px-8 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8 }}
              className="inline-block mb-6"
            >
              <div className="px-6 py-2 rounded-full bg-gradient-to-r from-[#D6B46C]/20 to-[#C9A961]/20 border border-[#D6B46C]/30">
                <span className="text-[#D6B46C] text-sm uppercase tracking-widest font-semibold">Our Expertise</span>
              </div>
            </motion.div>
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Premium Services
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#D6B46C] to-transparent rounded-full"></div>
              <Sparkles className="w-5 h-5 text-[#D6B46C]" />
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#D6B46C] to-transparent rounded-full"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500 rounded-3xl`}></div>
                
                {/* Card */}
                <div 
                  className="relative h-[380px] rounded-3xl overflow-hidden backdrop-blur-xl border border-white/10 transition-all duration-500 group-hover:border-white/20"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                  }}
                >
                  {/* Top Gradient Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-between text-center p-8">
                    {/* Icon */}
                    <motion.div
                      className="mb-3 relative"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20 blur-xl rounded-full`}></div>
                      <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all">
                        <service.icon className="w-16 h-16 text-white" strokeWidth={2.5} />
                      </div>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white mb-auto mt-3">
                      {service.title}
                    </h3>

                    {/* Features List - Always Visible */}
                    <div className="space-y-2.5 text-left w-full mt-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-white/80 text-sm">
                          <CheckCircle className="w-4 h-4 text-[#D6B46C] flex-shrink-0" strokeWidth={2.5} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Hover Arrow */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowRight className="w-6 h-6 text-[#D6B46C]" strokeWidth={2.5} />
                    </motion.div>
                  </div>

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={false}
                    whileHover={{
                      background: [
                        'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                        'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)'
                      ],
                      x: ['-100%', '100%'],
                    }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER - Compact with Categories */}
      <section id="projects" className="relative px-8 lg:px-16 py-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Amazing Transformations
            </h2>
            <p className="text-lg text-white/60">
              Witness the power of expert craftsmanship
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -10, rotateY: 5, rotateX: 2 }}
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
              className="group relative"
            >
              <div className="absolute -inset-3 bg-gradient-to-r from-gray-500 to-gray-700 opacity-20 group-hover:opacity-40 blur-3xl transition-opacity rounded-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-white/20 transition-all">
                <motion.img 
                  src="https://images.unsplash.com/photo-1625766924037-97152552d03a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBiZWZvcmUlMjByZW5vdmF0aW9ufGVufDF8fHx8MTc2NDgwNzY4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Before"
                  className="w-full h-[400px] object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <div className="px-5 py-2 bg-gray-900/90 backdrop-blur-xl rounded-full border border-white/20">
                    <span className="text-white font-bold uppercase tracking-widest text-xs">Before</span>
                  </div>
                </div>
                <div className="absolute top-6 right-6">
                  <div className="px-4 py-2 bg-green-500/90 backdrop-blur-xl rounded-full border border-green-400/30 flex items-center gap-2">
                    <Leaf className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                    <span className="text-white font-semibold text-xs">Garden</span>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-1">Garden Space</h3>
                  <p className="text-white/70 text-sm">Ready for transformation</p>
                </div>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -10, rotateY: -5, rotateX: -2 }}
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
              className="group relative"
            >
              <div className="absolute -inset-3 bg-gradient-to-r from-[#FFD700] via-[#D6B46C] to-[#FFA500] opacity-40 group-hover:opacity-60 blur-3xl transition-opacity rounded-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#D6B46C]/30 group-hover:border-[#D6B46C]/60 transition-all">
                <motion.img 
                  src="https://images.unsplash.com/photo-1588075147961-e0e9670e98aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnYXJkZW4lMjBhZnRlciUyMHRyYW5zZm9ybWF0aW9ufGVufDF8fHx8MTc2NDgwOTU4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="After"
                  className="w-full h-[400px] object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <div className="px-5 py-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full shadow-2xl">
                    <span className="text-black font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5" fill="currentColor" strokeWidth={2.5} />
                      After
                    </span>
                  </div>
                </div>
                <div className="absolute top-6 right-6">
                  <div className="px-4 py-2 bg-green-500/90 backdrop-blur-xl rounded-full border border-green-400/30 flex items-center gap-2">
                    <Leaf className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                    <span className="text-white font-semibold text-xs">Garden</span>
                  </div>
                </div>
                
                {/* Animated Slider Handle */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #FFD700 0%, #D6B46C 50%, #FFA500 100%)',
                    boxShadow: '0 10px 40px rgba(214, 180, 108, 0.6)',
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="flex gap-1">
                    <div className="w-1 h-6 bg-black rounded-full"></div>
                    <div className="w-1 h-6 bg-black rounded-full"></div>
                  </div>
                </motion.div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-1">Luxury Garden</h3>
                  <p className="text-white/70 text-sm">Complete transformation</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GARDEN FEATURE - Split Layout */}
      <section className="relative px-8 lg:px-16 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F14] via-[#0F1419] to-[#0A0F14]"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #D6B46C 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-20 group-hover:opacity-30 blur-3xl transition-opacity rounded-3xl"></div>
              <div className="relative rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1693760028936-faae3f7005fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjB0ZXJyYWNlJTIwcGVyZ29sYSUyMGdvbGRlbiUyMGhvdXJ8ZW58MXx8fHwxNzY0ODA5NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Garden Terrace"
                  className="w-full h-[700px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-teal-500/20"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-400 text-sm uppercase tracking-widest font-semibold">
                  Outdoor Excellence
                </span>
              </div>
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent">
                Garden & Outdoor Living
              </h2>
              <div className="space-y-6">
{[
                  { text: 'Premium decking installation with sustainable materials', icon: Box },
                  { text: 'Custom pergolas and outdoor structures', icon: Home },
                  { text: 'Professional landscape lighting design', icon: Zap },
                  { text: 'Beautiful pathways and hardscaping', icon: Grid3x3 },
                  { text: 'Expert plant selection and garden planning', icon: Trees }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:scale-110 transition-transform">
                      <item.icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                    </div>
                    <p className="text-lg text-white/80 group-hover:text-white transition-colors">{item.text}</p>
                  </motion.div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.98 }}
                className="mt-12 px-10 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg flex items-center gap-3 shadow-2xl shadow-emerald-500/30"
              >
                Explore Garden Projects
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Modern Icons */}
      <section id="reviews" className="relative px-8 lg:px-16 py-32">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Why Choose Us
            </h2>
            <p className="text-xl text-white/60">Excellence in every detail</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -15, scale: 1.03 }}
                className="group relative text-center"
              >
                {/* Glow Background */}
                <div className={`absolute -inset-6 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-30 blur-3xl transition-all duration-500 rounded-3xl`}></div>
                
                {/* Card */}
                <div className="relative p-8 rounded-3xl backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className="mb-6 inline-flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={`relative w-28 h-28 rounded-full bg-gradient-to-r ${item.gradient} p-[3px] group-hover:p-[4px] transition-all`}>
                      <div className="w-full h-full bg-[#0A0F14] rounded-full flex items-center justify-center">
                        <item.icon className="w-14 h-14 text-white" strokeWidth={2} />
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Animated Underline */}
                  <motion.div 
                    className={`mb-6 mx-auto h-1.5 rounded-full bg-gradient-to-r ${item.gradient}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  />
                  
                  <h3 className={`text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${item.gradient} group-hover:bg-clip-text transition-all`}>
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT - Glassmorphism Panel */}
      <section id="contact" className="relative px-8 lg:px-16 py-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Mega Glow */}
            <div className="absolute -inset-20 bg-gradient-to-r from-[#FFD700] via-[#D6B46C] to-[#FFA500] opacity-20 blur-3xl rounded-full"></div>
            
            {/* Panel */}
            <div 
              className="relative rounded-3xl overflow-hidden backdrop-blur-2xl border border-white/20 p-16"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#D6B46C]/20 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#74C7FF]/20 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <span className="px-5 py-2 rounded-full bg-gradient-to-r from-[#D6B46C]/20 to-[#C9A961]/20 border border-[#D6B46C]/30 text-[#D6B46C] text-sm uppercase tracking-widest font-semibold">
                      Get In Touch
                    </span>
                  </motion.div>
                  <h2 className="text-5xl font-bold mt-6 mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Start Your Project
                  </h2>
                  <p className="text-white/70 mb-10 text-lg leading-relaxed">
                    Ready to transform your space? Our expert team is here to bring your vision to life with premium craftsmanship and attention to detail.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative px-10 py-5 rounded-2xl overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] via-[#D6B46C] to-[#FFA500] rounded-2xl"></div>
                    <div className="absolute inset-0 opacity-60 blur-2xl bg-gradient-to-r from-[#FFD700] to-[#FFA500] group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative z-10 text-lg font-bold text-black flex items-center gap-3">
                      <Zap className="w-5 h-5" fill="currentColor" />
                      Get Started Today
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </div>

                {/* Right Contact Cards */}
                <div className="space-y-5">
                  {[
                    { icon: Phone, label: 'Phone', value: '+44 7731 426615', gradient: 'from-blue-500 to-cyan-500' },
                    { icon: Mail, label: 'Email', value: 'g.janecki@wp.pl', gradient: 'from-purple-500 to-pink-500' },
                    { icon: MapPin, label: 'Location', value: 'Aberdeen, Scotland', gradient: 'from-emerald-500 to-teal-500' }
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: -5, scale: 1.02 }}
                      className="relative group"
                    >
                      <div className={`absolute -inset-2 bg-gradient-to-r ${contact.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity rounded-2xl`}></div>
                      <div 
                        className="relative p-6 rounded-2xl backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                        }}
                      >
                        <div className="flex items-center gap-5">
                          <div className={`p-4 rounded-xl bg-gradient-to-r ${contact.gradient}`}>
                            <contact.icon className="w-6 h-6 text-white" strokeWidth={2} />
                          </div>
                          <div>
                            <h4 className="text-white/50 mb-1 text-xs uppercase tracking-widest">{contact.label}</h4>
                            <p className="text-white text-lg font-semibold">{contact.value}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <TrustSignals />

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* FOOTER - Modern */}
      <motion.footer 
        className={`relative px-8 lg:px-16 py-20 ${isDarkMode ? 'border-t border-white/5' : 'border-t border-[#0A0F14]/10'}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-b from-transparent to-[#0A0F14]/50' : 'bg-gradient-to-b from-transparent to-[#F5F2EB]/50'}`}></div>
        
        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={logoImage} 
                  alt="Slymax Builders" 
                  className="h-20 w-auto"
                  style={{
                    filter: 'drop-shadow(0 4px 20px rgba(214, 180, 108, 0.3))',
                  }}
                />
                <div className="text-3xl" style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #D6B46C 50%, #FFA500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: '900',
                  letterSpacing: '-0.03em',
                }}>
                  <div>SLYMAX</div>
                  <div className="text-xl tracking-wide">BUILDERS</div>
                </div>
              </div>
              <p className={`${isDarkMode ? 'text-white/50' : 'text-[#0A0F14]/50'} leading-relaxed mb-6`}>
                Premium construction and renovation services. Transforming spaces with exceptional craftsmanship and innovative design since 2010.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a href="tel:+447731426615" className="flex items-center gap-3 text-white/60 hover:text-[#D6B46C] transition-colors group">
                  <Phone className="w-5 h-5 text-[#D6B46C]" strokeWidth={2.5} />
                  <span>+44 7731 426615</span>
                </a>
                <a href="mailto:g.janecki@wp.pl" className="flex items-center gap-3 text-white/60 hover:text-[#D6B46C] transition-colors group">
                  <Mail className="w-5 h-5 text-[#D6B46C]" strokeWidth={2.5} />
                  <span>g.janecki@wp.pl</span>
                </a>
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin className="w-5 h-5 text-[#D6B46C]" strokeWidth={2.5} />
                  <span>Aberdeen, Scotland</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'Services', 'Projects', 'Reviews', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-white/50 hover:text-[#D6B46C] transition-colors flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" strokeWidth={2.5} />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Services</h4>
              <ul className="space-y-3">
                {['Kitchens & Bathrooms', 'Garden Design', 'Home Renovation', 'Interior Design'].map((item) => (
                  <li key={item}>
                    <a href="#services" className="text-white/50 hover:text-[#D6B46C] transition-colors flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" strokeWidth={2.5} />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-white/30 text-sm">
              &copy; 2025 SLYMAX BUILDERS. All rights reserved. Crafted with <span className="text-[#D6B46C]">❤</span> and passion.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}