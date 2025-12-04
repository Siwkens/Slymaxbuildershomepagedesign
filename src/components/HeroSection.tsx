import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import logoImage from "figma:asset/e47e3685f93d1b9665513a7612d90068758e001f.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logoImage} alt="SLYMAX BUILDERS" className="h-16 w-auto" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex items-center gap-8"
        >
          <a href="#home" className="text-white/80 hover:text-amber-400 transition-colors">Home</a>
          <a href="#services" className="text-white/80 hover:text-amber-400 transition-colors">Services</a>
          <a href="#projects" className="text-white/80 hover:text-amber-400 transition-colors">Projects</a>
          <a href="#why-us" className="text-white/80 hover:text-amber-400 transition-colors">Why Choose Us</a>
          <a href="#contact" className="text-white/80 hover:text-amber-400 transition-colors">Contact</a>
          <button className="px-6 py-2.5 border-2 border-amber-500 text-amber-400 rounded-md hover:bg-amber-500 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.3)]">
            Get a Free Quote
          </button>
        </motion.div>
      </nav>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-8 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="inline-block"
              >
                <span className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 backdrop-blur-sm">
                  Premium Construction & Renovation
                </span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl text-white">
                <span className="block bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                  SLYMAX BUILDERS
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-white/90">
                Creating Spaces That Inspire
              </p>
              
              <p className="text-lg text-white/60 max-w-xl">
                Transform your vision into reality with our expert renovation and construction services. 
                Premium craftsmanship, innovative design, and unparalleled attention to detail.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(251, 191, 36, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-lg shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:shadow-[0_0_50px_rgba(251,191,36,0.6)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-amber-500/50 text-amber-400 rounded-lg hover:bg-amber-500/10 transition-all duration-300 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]"
              >
                View Our Projects
              </motion.button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-amber-500/20"
            >
              <div>
                <div className="text-3xl text-amber-400">10+</div>
                <div className="text-sm text-white/60">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl text-amber-400">500+</div>
                <div className="text-sm text-white/60">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl text-amber-400">100%</div>
                <div className="text-sm text-white/60">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D House Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-2xl mx-auto">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/30 via-transparent to-amber-400/20 rounded-3xl blur-3xl" />
              
              {/* 3D House Container */}
              <div className="relative z-10 p-8">
                <div className="relative aspect-square bg-gradient-to-br from-black/40 to-black/20 rounded-2xl border border-amber-500/30 backdrop-blur-xl overflow-hidden shadow-[0_0_60px_rgba(251,191,36,0.3)]">
                  {/* Scaffolding Lines */}
                  <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-500/40 to-transparent" />
                    <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-500/40 to-transparent" />
                    <div className="absolute left-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
                    <div className="absolute left-0 bottom-1/4 w-full h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
                  </div>
                  
                  {/* House Illustration (simplified) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-3/4 h-3/4">
                      {/* House Base */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-2/3 bg-gradient-to-br from-amber-900/40 to-amber-950/60 border-2 border-amber-600/50 rounded-lg backdrop-blur-sm shadow-[inset_0_0_60px_rgba(251,191,36,0.1)]">
                        {/* Windows with light */}
                        <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-amber-400 rounded-sm shadow-[0_0_30px_rgba(251,191,36,0.8)] animate-pulse" style={{ animationDuration: '3s' }} />
                        <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-amber-400 rounded-sm shadow-[0_0_30px_rgba(251,191,36,0.8)] animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                        <div className="absolute bottom-1/4 left-1/3 w-16 h-20 bg-gradient-to-t from-amber-500 to-amber-400 rounded-sm shadow-[0_0_40px_rgba(251,191,36,0.9)]" />
                      </div>
                      
                      {/* Roof */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[160px] border-l-transparent border-r-[160px] border-r-transparent border-b-[100px] border-b-amber-800/60" style={{ filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.3))' }} />
                      
                      {/* Scaffolding Accent */}
                      <div className="absolute -right-8 top-1/4 w-2 h-2/3 bg-gradient-to-b from-amber-500/60 to-amber-600/40 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.5)]" />
                      <div className="absolute -left-8 top-1/3 w-2 h-1/2 bg-gradient-to-b from-amber-500/60 to-amber-600/40 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.5)]" />
                    </div>
                  </div>
                  
                  {/* Floating Particles */}
                  <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-amber-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(251,191,36,0.8)]" style={{ animationDuration: '2s' }} />
                  <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-amber-300 rounded-full animate-bounce shadow-[0_0_8px_rgba(251,191,36,0.6)]" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}
