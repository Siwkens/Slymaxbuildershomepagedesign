import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Home, Building2, Palette, Calculator, Calendar, Mail, Phone, User } from 'lucide-react';

interface FormData {
  projectType: string;
  area: string;
  rooms: string;
  style: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormData: FormData = {
  projectType: '',
  area: '',
  rooms: '',
  style: '',
  budget: '',
  timeline: '',
  name: '',
  email: '',
  phone: '',
  message: ''
};

const projectTypes = [
  { id: 'apartment', label: 'Apartament', icon: Home },
  { id: 'house', label: 'Dom', icon: Building2 },
  { id: 'office', label: 'Biuro', icon: Building2 },
  { id: 'commercial', label: 'Komercyjne', icon: Building2 }
];

const styles = [
  { id: 'modern', label: 'Nowoczesny', image: 'modern minimalist interior' },
  { id: 'classic', label: 'Klasyczny', image: 'classic elegant interior' },
  { id: 'industrial', label: 'Industrialny', image: 'industrial loft interior' },
  { id: 'scandinavian', label: 'Skandynawski', image: 'scandinavian interior' }
];

const budgetRanges = [
  { id: 'standard', label: 'Standard', range: '100k - 300k PLN' },
  { id: 'premium', label: 'Premium', range: '300k - 600k PLN' },
  { id: 'luxury', label: 'Luxury', range: '600k - 1M PLN' },
  { id: 'ultra', label: 'Ultra Premium', range: '1M+ PLN' }
];

export function PriceEstimator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const totalSteps = 4;

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateEstimate = () => {
    let basePrice = 0;
    
    // Base on area
    const area = parseInt(formData.area) || 0;
    basePrice = area * 2500; // Base PLN per m²

    // Project type multiplier
    const typeMultipliers: { [key: string]: number } = {
      apartment: 1,
      house: 1.2,
      office: 1.3,
      commercial: 1.5
    };
    basePrice *= typeMultipliers[formData.projectType] || 1;

    // Budget range adjustment
    const budgetMultipliers: { [key: string]: number } = {
      standard: 0.8,
      premium: 1.2,
      luxury: 1.8,
      ultra: 2.5
    };
    basePrice *= budgetMultipliers[formData.budget] || 1;

    setEstimatedPrice(Math.round(basePrice));
  };

  const nextStep = () => {
    if (step === 3) {
      calculateEstimate();
    }
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.projectType && formData.area && formData.rooms;
      case 2:
        return formData.style;
      case 3:
        return formData.budget && formData.timeline;
      case 4:
        return formData.name && formData.email && formData.phone;
      default:
        return false;
    }
  };

  return (
    <section id="estimator" className="py-32 px-6 lg:px-12 bg-charcoal relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">Wycena Online</span>
          <h2 className="text-5xl lg:text-6xl mb-6">Konfigurator Ceny</h2>
          <p className="text-warm-white/60 text-lg max-w-2xl mx-auto">
            Uzyskaj wstępną wycenę swojego projektu w 4 prostych krokach
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                    s <= step ? 'bg-gold border-gold text-charcoal' : 'bg-charcoal border-warm-white/20 text-warm-white/40'
                  } transition-all duration-300`}
                >
                  {s}
                </motion.div>
                {s < 4 && (
                  <div className={`flex-1 h-1 mx-2 rounded ${
                    s < step ? 'bg-gold' : 'bg-warm-white/10'
                  } transition-all duration-300`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-warm-white/60 px-2">
            <span>Projekt</span>
            <span>Styl</span>
            <span>Budżet</span>
            <span>Kontakt</span>
          </div>
        </div>

        {/* Form Steps */}
        <motion.div
          className="bg-warm-white/5 backdrop-blur-sm border border-warm-white/10 rounded-3xl p-8 lg:p-12 min-h-[500px]"
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Project Details */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-8"
              >
                <h3 className="text-3xl mb-8">Szczegóły Projektu</h3>

                {/* Project Type */}
                <div>
                  <label className="block text-warm-white/80 mb-4">Typ projektu</label>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {projectTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <button
                          key={type.id}
                          onClick={() => updateFormData('projectType', type.id)}
                          className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                            formData.projectType === type.id
                              ? 'border-gold bg-gold/10'
                              : 'border-warm-white/10 hover:border-warm-white/30'
                          }`}
                        >
                          <Icon className="w-8 h-8 mx-auto mb-2 text-gold" />
                          <span className="block text-sm">{type.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Area */}
                <div>
                  <label className="block text-warm-white/80 mb-4">Powierzchnia (m²)</label>
                  <input
                    type="number"
                    value={formData.area}
                    onChange={(e) => updateFormData('area', e.target.value)}
                    placeholder="np. 80"
                    className="w-full bg-charcoal border border-warm-white/20 rounded-xl px-6 py-4 text-warm-white focus:border-gold outline-none transition-colors"
                  />
                </div>

                {/* Rooms */}
                <div>
                  <label className="block text-warm-white/80 mb-4">Liczba pomieszczeń</label>
                  <input
                    type="number"
                    value={formData.rooms}
                    onChange={(e) => updateFormData('rooms', e.target.value)}
                    placeholder="np. 3"
                    className="w-full bg-charcoal border border-warm-white/20 rounded-xl px-6 py-4 text-warm-white focus:border-gold outline-none transition-colors"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 2: Style Selection */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-8"
              >
                <h3 className="text-3xl mb-8">Wybierz Styl</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {styles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => updateFormData('style', style.id)}
                      className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                        formData.style === style.id
                          ? 'border-gold'
                          : 'border-warm-white/10 hover:border-warm-white/30'
                      }`}
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={`https://source.unsplash.com/800x600/?${style.image}`}
                          alt={style.label}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h4 className="text-2xl text-warm-white">{style.label}</h4>
                        </div>
                        {formData.style === style.id && (
                          <div className="absolute top-4 right-4 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                            <Palette className="w-5 h-5 text-charcoal" />
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Budget & Timeline */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-8"
              >
                <h3 className="text-3xl mb-8">Budżet i Termin</h3>

                {/* Budget */}
                <div>
                  <label className="block text-warm-white/80 mb-4">Przedział budżetowy</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {budgetRanges.map((budget) => (
                      <button
                        key={budget.id}
                        onClick={() => updateFormData('budget', budget.id)}
                        className={`p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                          formData.budget === budget.id
                            ? 'border-gold bg-gold/10'
                            : 'border-warm-white/10 hover:border-warm-white/30'
                        }`}
                      >
                        <Calculator className="w-6 h-6 text-gold mb-2" />
                        <div className="text-xl mb-1">{budget.label}</div>
                        <div className="text-warm-white/60 text-sm">{budget.range}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-warm-white/80 mb-4">Preferowany termin rozpoczęcia</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gold" />
                    <select
                      value={formData.timeline}
                      onChange={(e) => updateFormData('timeline', e.target.value)}
                      className="w-full bg-charcoal border border-warm-white/20 rounded-xl pl-14 pr-6 py-4 text-warm-white focus:border-gold outline-none transition-colors appearance-none"
                    >
                      <option value="">Wybierz termin</option>
                      <option value="asap">Jak najszybciej</option>
                      <option value="1-3months">1-3 miesiące</option>
                      <option value="3-6months">3-6 miesięcy</option>
                      <option value="6-12months">6-12 miesięcy</option>
                      <option value="flexible">Elastyczny</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Contact & Estimate */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-8"
              >
                {estimatedPrice && (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-gold/10 border-2 border-gold rounded-2xl p-8 text-center mb-8"
                  >
                    <div className="text-warm-white/80 mb-2">Szacowana wartość projektu:</div>
                    <div className="text-5xl lg:text-6xl text-gold font-light mb-2">
                      {estimatedPrice.toLocaleString('pl-PL')} PLN
                    </div>
                    <div className="text-warm-white/60 text-sm">
                      *Wycena orientacyjna, finalna cena po konsultacji
                    </div>
                  </motion.div>
                )}

                <h3 className="text-3xl mb-8">Dane Kontaktowe</h3>

                <div className="space-y-6">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      placeholder="Imię i nazwisko"
                      className="w-full bg-charcoal border border-warm-white/20 rounded-xl pl-14 pr-6 py-4 text-warm-white focus:border-gold outline-none transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      placeholder="Email"
                      className="w-full bg-charcoal border border-warm-white/20 rounded-xl pl-14 pr-6 py-4 text-warm-white focus:border-gold outline-none transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      placeholder="Telefon"
                      className="w-full bg-charcoal border border-warm-white/20 rounded-xl pl-14 pr-6 py-4 text-warm-white focus:border-gold outline-none transition-colors"
                    />
                  </div>

                  <textarea
                    value={formData.message}
                    onChange={(e) => updateFormData('message', e.target.value)}
                    placeholder="Dodatkowe informacje (opcjonalne)"
                    rows={4}
                    className="w-full bg-charcoal border border-warm-white/20 rounded-xl px-6 py-4 text-warm-white focus:border-gold outline-none transition-colors resize-none"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12 pt-8 border-t border-warm-white/10">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className={`flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300 ${
                step === 1
                  ? 'opacity-30 cursor-not-allowed'
                  : 'bg-warm-white/10 hover:bg-warm-white/20 text-warm-white'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Wstecz
            </button>

            <button
              onClick={step === 4 ? () => alert('Formularz wysłany! Skontaktujemy się wkrótce.') : nextStep}
              disabled={!canProceed()}
              className={`flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300 ${
                !canProceed()
                  ? 'opacity-30 cursor-not-allowed bg-warm-white/10'
                  : 'bg-gold text-charcoal hover:bg-gold/90'
              }`}
            >
              {step === 4 ? 'Wyślij zapytanie' : 'Dalej'}
              {step < 4 && <ChevronRight className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
