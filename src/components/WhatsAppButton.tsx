import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '447731426615'; // Format: country code + number (no + or spaces)
  const message = 'Hello! I would like to inquire about your construction services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-3 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-40 blur-2xl transition-opacity rounded-full"></div>
      
      {/* Pulse Ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-green-500"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.8, 0, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Button with Text */}
      <div className="relative flex items-center gap-3 px-5 py-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-2xl cursor-pointer">
        <MessageCircle className="w-6 h-6 text-white" strokeWidth={2.5} />
        <span className="text-white font-semibold text-sm whitespace-nowrap">Chat with us</span>
        
        {/* Notification Badge */}
        <motion.div
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          1
        </motion.div>
      </div>

      {/* Enhanced Tooltip on Hover */}
      <motion.div
        className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#0A0F14]/95 backdrop-blur-xl px-5 py-3 rounded-xl border border-green-500/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl"
        initial={false}
      >
        <p className="text-white font-semibold mb-1">Need Help? 💬</p>
        <p className="text-white/70 text-xs">Get instant reply on WhatsApp</p>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-[#0A0F14]/95"></div>
      </motion.div>
    </motion.a>
  );
}