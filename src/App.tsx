import { motion, useScroll, useTransform } from 'motion/react';
import { Home, Leaf, Zap, ChefHat, Paintbrush, Grid3x3, Hammer, Trees, Box, Fence, Award, CheckCircle, Phone, Mail, MapPin, ChevronDown, Menu, X, ArrowRight, Star, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroImage from 'figma:asset/9ce3f11a2825db662e1ee7c9ee40ee9590666b17.png';
import logoImage from 'figma:asset/2efec2bbd367343602568c94572f81890c7ead9a.png';
import bathroomBefore from 'figma:asset/4c5456590d62ef5dd6f3aa3108694101749ca660.png';
import bathroomAfter from 'figma:asset/08d2711280e94c9f5c281771f14876f2710d4dc3.png';
import kitchenBefore from 'figma:asset/d4827bc7af129169a0d13f7b44bcdea1a0766773.png';
import kitchenAfter from 'figma:asset/4074db97f00925dcace4662641f36035ee425d7a.png';
import interiorBefore from 'figma:asset/9059f6e0deed518fb03be42702980ff13d7632e7.png';
import interiorAfter from 'figma:asset/e3a17bfc2f4766facf34ce6a5ec9c19a50f76c93.png';
import gardenBefore from 'figma:asset/37b363fd960a96603ddb0103c09c1fdb850ca440.png';
import gardenAfter from 'figma:asset/ad0e3362644fb48849374e1302326bc0a04a6b7a.png';
import { LoadingAnimation } from './components/LoadingAnimation';
import { WhatsAppButton } from './components/WhatsAppButton';
import { FloatingParticles, RippleEffect, ScrollProgress, CursorFollower } from './components/MicroInteractions';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';

export default function App() {
  // Dark mode only - no theme switching
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
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

  // Show loading animation
  if (isLoading) {
    return <LoadingAnimation onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="bg-[#0A0F14] min-h-screen text-white font-sans antialiased overflow-x-hidden relative transition-colors duration-500">
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
            ? 'bg-[#0A0F14]/80 backdrop-blur-2xl shadow-2xl border-b border-white/5' 
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
                  className="relative px-6 py-3 text-white/80 hover:text-white transition-all rounded-full overflow-hidden group"
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



            {/* Mobile Menu */}
            <button 
              className="lg:hidden text-white p-2 relative group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="absolute inset-0 bg-white/5 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {isMobileMenuOpen ? <X className="w-7 h-7 relative z-10" /> : <Menu className="w-7 h-7 relative z-10" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-[#0A0F14]/95 backdrop-blur-2xl border-t border-white/5"
          >
            <div className="px-6 py-8 space-y-4">
              {['Home', 'Services', 'Projects', 'Reviews', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="block text-white text-xl px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
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
                    className="h-48 w-auto relative z-10 mx-auto"
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

      {/* BEFORE & AFTER - Interactive Sliders with Category Filters */}
      <section id="projects" className="relative px-8 lg:px-16 py-32 overflow-hidden bg-gradient-to-b from-[#0A0F14] via-[#0F1419] to-[#0A0F14]">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(214, 180, 108, 0.2) 1px, transparent 1px),
                linear-gradient(0deg, rgba(214, 180, 108, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Floating Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #D6B46C 0%, transparent 70%)',
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #74C7FF 0%, transparent 70%)',
            }}
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          {/* Section Header with Stats */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D6B46C]/20 to-[#C9A961]/20 border-[#D6B46C]/30 border backdrop-blur-xl text-[#D6B46C] uppercase tracking-widest text-sm font-bold inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" fill="currentColor" />
                Portfolio
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-6xl lg:text-7xl font-black mb-6"
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Amazing Transformations
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/60 max-w-2xl mx-auto mb-12"
            >
              Drag the slider to witness the power of expert craftsmanship
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-8 mb-12"
            >
              {[
                { number: '400+', label: 'Projects Completed', icon: CheckCircle },
                { number: '98%', label: 'Satisfaction Rate', icon: Star },
                { number: '10+', label: 'Years Experience', icon: Award },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[#FFD700] to-[#D6B46C]">
                    <stat.icon className="w-5 h-5 text-black" strokeWidth={2.5} />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] to-[#D6B46C] bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Category Filter Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {['All', 'Interior', 'Garden', 'Kitchen', 'Bathroom'].map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold uppercase tracking-wider text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black shadow-[0_0_30px_rgba(214,180,108,0.5)]'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Before/After Sliders Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Garden Transformation */}
            {(selectedCategory === 'All' || selectedCategory === 'Garden') && (
              <BeforeAfterSlider
                beforeImage={gardenBefore}
                afterImage={gardenAfter}
                category="Garden"
                categoryColor="bg-green-500/90"
                categoryIcon={<Leaf className="w-4 h-4 text-white" strokeWidth={2.5} />}
                title="Premium Garden & Hot Tub Area"
                description="Custom wooden pergola with landscaping and outdoor relaxation space"
              />
            )}

            {/* Kitchen Transformation */}
            {(selectedCategory === 'All' || selectedCategory === 'Interior' || selectedCategory === 'Kitchen') && (
              <BeforeAfterSlider
                beforeImage={kitchenBefore}
                afterImage={kitchenAfter}
                category="Kitchen"
                categoryColor="bg-amber-500/90"
                categoryIcon={<ChefHat className="w-4 h-4 text-white" strokeWidth={2.5} />}
                title="Complete Kitchen Transformation"
                description="From bare walls to modern fitted kitchen with premium finishes"
              />
            )}

            {/* Bathroom Transformation */}
            {(selectedCategory === 'All' || selectedCategory === 'Interior' || selectedCategory === 'Bathroom') && (
              <BeforeAfterSlider
                beforeImage={bathroomBefore}
                afterImage={bathroomAfter}
                category="Bathroom"
                categoryColor="bg-blue-500/90"
                categoryIcon={<Zap className="w-4 h-4 text-white" strokeWidth={2.5} />}
                title="Complete Bathroom Renovation"
                description="Professional tiling with custom cabinetry and fixtures"
              />
            )}

            {/* Living Room Transformation */}
            {(selectedCategory === 'All' || selectedCategory === 'Interior') && (
              <BeforeAfterSlider
                beforeImage={interiorBefore}
                afterImage={interiorAfter}
                category="Interior"
                categoryColor="bg-purple-500/90"
                categoryIcon={<Home className="w-4 h-4 text-white" strokeWidth={2.5} />}
                title="Luxury Living Room Makeover"
                description="From construction site to elegant living space with feature wall"
              />
            )}
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS - Reviews Section */}
      <section id="reviews" className="relative px-8 lg:px-16 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F14] via-[#0F1419] to-[#0A0F14]"></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #D6B46C 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8 }}
              className="inline-block mb-6"
            >
              <div className="px-6 py-2 rounded-full bg-gradient-to-r from-[#D6B46C]/20 to-[#C9A961]/20 border border-[#D6B46C]/30">
                <span className="text-[#D6B46C] text-sm uppercase tracking-widest font-semibold">Testimonials</span>
              </div>
            </motion.div>
            
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Real feedback from homeowners who trusted us with their dream projects
            </p>
          </motion.div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah McKenzie',
                location: 'Aberdeen',
                rating: 5,
                text: 'Absolutely exceptional work! The team transformed our kitchen beyond our expectations. Professional, clean, and finished on time. Highly recommended!',
                project: 'Kitchen Renovation',
                image: '👩‍💼'
              },
              {
                name: 'James Robertson',
                location: 'Edinburgh',
                rating: 5,
                text: 'Outstanding craftsmanship on our bathroom renovation. Attention to detail was incredible. The quality of materials and workmanship is top-notch.',
                project: 'Bathroom Remodel',
                image: '👨‍💼'
              },
              {
                name: 'Emma Thompson',
                location: 'Glasgow',
                rating: 5,
                text: 'Our garden deck is beautiful! The team was professional, respectful, and the finished product exceeded all expectations. Worth every penny.',
                project: 'Garden Decking',
                image: '👩'
              },
              {
                name: 'David Wilson',
                location: 'Dundee',
                rating: 5,
                text: 'Complete home renovation done to perfection. Communication was excellent throughout. They truly care about their work and it shows.',
                project: 'Full Home Renovation',
                image: '👨'
              },
              {
                name: 'Claire Anderson',
                location: 'Inverness',
                rating: 5,
                text: 'The painting and decorating service was fantastic. Clean work, beautiful finish, and very reasonable pricing. Will definitely use again!',
                project: 'Interior Painting',
                image: '👩‍🦰'
              },
              {
                name: 'Michael Brown',
                location: 'Aberdeen',
                rating: 5,
                text: 'From design to completion, everything was perfect. The team listened to our needs and delivered exactly what we wanted. Five stars!',
                project: 'Custom Carpentry',
                image: '👨‍🦱'
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-3 bg-gradient-to-r from-[#D6B46C] to-[#C9A961] opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 rounded-3xl"></div>
                
                {/* Card */}
                <div 
                  className="relative h-full p-8 rounded-3xl backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  }}
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-6xl opacity-10">
                    "
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" 
                        strokeWidth={0}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-white/80 mb-6 leading-relaxed">
                    "{review.text}"
                  </p>

                  {/* Project Badge */}
                  <div className="mb-6">
                    <span className="px-3 py-1 rounded-full text-xs bg-[#D6B46C]/20 text-[#D6B46C] border border-[#D6B46C]/30 uppercase tracking-wider font-semibold">
                      {review.project}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D6B46C] to-[#C9A961] flex items-center justify-center text-2xl">
                      {review.image}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">
                        {review.name}
                      </h4>
                      <p className="text-sm text-white/50">
                        {review.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
              <Award className="w-6 h-6 text-[#D6B46C]" strokeWidth={2.5} />
              <div className="text-sm text-white/70">
                <span className="font-bold text-[#D6B46C]">4.9/5</span> Average Rating from <span className="font-bold text-[#D6B46C]">200+</span> Happy Clients
              </div>
              <Star className="w-6 h-6 text-[#FFD700] fill-[#FFD700]" strokeWidth={0} />
            </div>
          </motion.div>
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

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* FOOTER - Modern */}
      <motion.footer 
        className="relative px-8 lg:px-16 py-20 border-t border-white/5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0F14]/50"></div>
        
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
              <p className="text-white/50 leading-relaxed mb-6">
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