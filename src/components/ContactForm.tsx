import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, AlertCircle, Loader2, Upload, X } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: ''
};

const validateForm = (formData: FormData): boolean => {
  const newErrors: Partial<FormData> = {};

  if (!formData.name.trim()) newErrors.name = 'Imię i nazwisko jest wymagane';
  if (!formData.email.trim()) {
    newErrors.email = 'Email jest wymagany';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = 'Nieprawidłowy format email';
  }
  if (!formData.phone.trim()) {
    newErrors.phone = 'Telefon jest wymagany';
  } else if (!/^[\d\s\+\-\(\)]{9,}$/.test(formData.phone)) {
    newErrors.phone = 'Nieprawidłowy numer telefonu';
  }

  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e: React.FormEvent, formData: FormData) => {
  e.preventDefault();

  if (!validateForm(formData)) {
    toast.error('Proszę wypełnić wszystkie wymagane pola');
    return;
  }

  setIsSubmitting(true);

  try {
    // Here you would integrate with Supabase or your backend
    // For now, we'll simulate an API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Success
    setSubmitStatus('success');
    toast.success('Dziękujemy! Skontaktujemy się wkrótce.');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData(initialFormData);
      setSubmitStatus('idle');
    }, 3000);

  } catch (error) {
    console.error('Submit error:', error);
    setSubmitStatus('error');
    toast.error('Wystąpił błąd. Spróbuj ponownie.');
  } finally {
    setIsSubmitting(false);
  }
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="kontakt-form" className="py-32 px-6 lg:px-12 bg-gradient-to-b from-charcoal to-charcoal/95">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">Kontakt</span>
          <h2 className="text-5xl lg:text-6xl mb-6">Rozpocznijmy Współpracę</h2>
          <p className="text-warm-white/60 text-lg max-w-2xl mx-auto">
            Wypełnij formularz, a nasz zespół skontaktuje się z Tobą w ciągu 24 godzin
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={(e) => handleSubmit(e, formData)}
          className="bg-warm-white/5 backdrop-blur-sm border border-warm-white/10 rounded-3xl p-8 lg:p-12"
        >
          {submitStatus === 'success' ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <CheckCircle className="w-20 h-20 text-gold mx-auto mb-6" />
              <h3 className="text-3xl mb-4">Dziękujemy!</h3>
              <p className="text-warm-white/70">
                Twoja wiadomość została wysłana. Skontaktujemy się wkrótce.
              </p>
            </motion.div>
          ) : (
            <div className="space-y-8">
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-warm-white/80 mb-3 text-sm">
                    Imię i nazwisko <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className={`w-full bg-charcoal border ${
                      errors.name ? 'border-red-500' : 'border-warm-white/20'
                    } rounded-xl px-6 py-4 text-warm-white focus:border-gold outline-none transition-colors`}
                    placeholder="Jan Kowalski"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-warm-white/80 mb-3 text-sm">
                    Email <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className={`w-full bg-charcoal border ${
                      errors.email ? 'border-red-500' : 'border-warm-white/20'
                    } rounded-xl px-6 py-4 text-warm-white focus:border-gold outline-none transition-colors`}
                    placeholder="jan@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-warm-white/80 mb-3 text-sm">
                  Telefon <span className="text-gold">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  className={`w-full bg-charcoal border ${
                    errors.phone ? 'border-red-500' : 'border-warm-white/20'
                  } rounded-xl px-6 py-4 text-warm-white focus:border-gold outline-none transition-colors`}
                  placeholder="+48 123 456 789"
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* RODO */}
              <div className="pt-6 border-t border-warm-white/10">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-5 h-5 rounded border-warm-white/20 bg-charcoal checked:bg-gold checked:border-gold focus:ring-gold focus:ring-offset-charcoal"
                  />
                  <span className="text-warm-white/60 text-xs leading-relaxed">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych przez SLYMAX BUILDERS 
                    w celu kontaktu dotyczącego zapytania ofertowego zgodnie z{' '}
                    <a href="#" className="text-gold hover:underline">Polityką Prywatności</a>.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold text-charcoal px-8 py-5 rounded-full hover:bg-gold/90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3 text-lg font-medium"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Wysyłanie...
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    Wyślij zapytanie
                  </>
                )}
              </button>
            </div>
          )}
        </motion.form>

        {/* Alternative Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-warm-white/60 mb-4">Lub skontaktuj się bezpośrednio:</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="tel:+48123456789"
              className="bg-warm-white/5 hover:bg-warm-white/10 border border-warm-white/10 hover:border-gold/50 px-6 py-3 rounded-full transition-all duration-300 text-warm-white/80 hover:text-gold"
            >
              +48 123 456 789
            </a>
            <a
              href="mailto:kontakt@slymax.pl"
              className="bg-warm-white/5 hover:bg-warm-white/10 border border-warm-white/10 hover:border-gold/50 px-6 py-3 rounded-full transition-all duration-300 text-warm-white/80 hover:text-gold"
            >
              kontakt@slymax.pl
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}