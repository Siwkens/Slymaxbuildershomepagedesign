import React from 'react';
import { Instagram, Facebook, Linkedin, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const trackSocialClick = (platform: string) => {
    if (window.gtag) {
      window.gtag('event', 'social_click', {
        event_category: 'Social Media',
        event_label: platform,
      });
    }
  };

  const trackPhoneClick = () => {
    if (window.gtag) {
      window.gtag('event', 'phone_click', {
        event_category: 'Contact',
        event_label: 'Click to call',
      });
    }
  };

  const trackEmailClick = () => {
    if (window.gtag) {
      window.gtag('event', 'email_click', {
        event_category: 'Contact',
        event_label: 'Click to email',
      });
    }
  };

  return (
    <footer id="kontakt" className="bg-charcoal pt-24 pb-12 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
          <div>
            <h2 className="text-5xl md:text-7xl font-extralight text-warm-white mb-12">
              Stwórzmy <br /> 
              <span className="italic text-gold">Coś Razem</span>
            </h2>
            <div className="flex flex-col gap-6">
              <a 
                href="mailto:kontakt@slymax.pl" 
                onClick={() => trackEmailClick()}
                className="group flex items-center gap-4 text-xl md:text-2xl text-warm-white/80 hover:text-gold transition-colors"
              >
                <Mail className="w-6 h-6 text-gold" />
                kontakt@slymax.pl
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
              </a>
              <a 
                href="tel:+48123456789" 
                onClick={() => trackPhoneClick()}
                className="group flex items-center gap-4 text-xl md:text-2xl text-warm-white/80 hover:text-gold transition-colors"
              >
                <Phone className="w-6 h-6 text-gold" />
                +48 123 456 789
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
              </a>
              <div className="flex items-start gap-4 text-lg text-warm-white/60 mt-4">
                <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-light">ul. Złota 59</p>
                  <p className="font-light">00-120 Warszawa</p>
                  <p className="font-light">Polska</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-12 pt-8 border-t border-warm-white/10">
              <span className="text-gold text-xs tracking-[0.3em] uppercase block mb-4">Godziny Otwarcia</span>
              <div className="space-y-2 text-warm-white/60 text-sm">
                <p>Pon - Pt: 8:00 - 18:00</p>
                <p>Sobota: 10:00 - 14:00</p>
                <p>Niedziela: Zamknięte</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
              <span className="text-gold text-[10px] tracking-[0.4em] uppercase">Nawigacja</span>
              <div className="flex flex-col gap-4">
                <a href="#portfolio" className="text-warm-white/60 hover:text-gold text-xs uppercase tracking-widest transition-colors">Portfolio</a>
                <a href="#uslugi" className="text-warm-white/60 hover:text-gold text-xs uppercase tracking-widest transition-colors">Usługi</a>
                <a href="#process" className="text-warm-white/60 hover:text-gold text-xs uppercase tracking-widest transition-colors">Proces</a>
                <a href="#team" className="text-warm-white/60 hover:text-gold text-xs uppercase tracking-widest transition-colors">Zespół</a>
                <a href="#estimator" className="text-warm-white/60 hover:text-gold text-xs uppercase tracking-widest transition-colors">Wycena</a>
                <a href="#faq" className="text-warm-white/60 hover:text-gold text-xs uppercase tracking-widest transition-colors">FAQ</a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-gold text-[10px] tracking-[0.4em] uppercase">Social Media</span>
              <div className="flex flex-col gap-4">
                <a 
                  href="https://instagram.com/slymaxbuilders" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => trackSocialClick('Instagram')}
                  className="text-warm-white/60 hover:text-gold text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <a 
                  href="https://facebook.com/slymaxbuilders" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => trackSocialClick('Facebook')}
                  className="text-warm-white/60 hover:text-gold text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
                <a 
                  href="https://linkedin.com/company/slymax-builders" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => trackSocialClick('LinkedIn')}
                  className="text-warm-white/60 hover:text-gold text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>

              {/* Company Info */}
              <div className="mt-6 pt-6 border-t border-warm-white/10">
                <span className="text-gold text-[10px] tracking-[0.4em] uppercase block mb-3">Informacje</span>
                <div className="space-y-2 text-warm-white/60 text-xs">
                  <p>NIP: 1234567890</p>
                  <p>REGON: 123456789</p>
                  <p>KRS: 0000123456</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-warm-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col">
            <span className="text-lg font-light tracking-[0.3em] uppercase text-warm-white">
              Slymax
            </span>
            <span className="text-[8px] tracking-[0.5em] uppercase text-gold -mt-1">
              Builders
            </span>
          </div>
          
          <div className="text-[10px] tracking-[0.2em] uppercase text-warm-white/20">
            © 2025 SLYMAX BUILDERS. WSZELKIE PRAWA ZASTRZEŻONE.
          </div>

          <div className="flex gap-8 text-[10px] tracking-[0.2em] uppercase text-warm-white/40">
            <a href="#" className="hover:text-gold transition-colors">Polityka Prywatności</a>
            <a href="#" className="hover:text-gold transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}