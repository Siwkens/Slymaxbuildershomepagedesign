import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { MaterialShowcase } from './components/MaterialShowcase';
import { ProcessTimeline } from './components/ProcessTimeline';
import { BeforeAfter } from './components/BeforeAfter';
import { Testimonials } from './components/Testimonials';
import { VirtualTour } from './components/VirtualTour';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { ScrollProgress, BackToTop, ScrollIndicator } from './components/ScrollUtilities';
import { PageLoader } from './components/PageLoader';
import { Toaster } from './components/ui/sonner';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  const sections = ['portfolio', 'materials', 'process', 'before-after', 'testimonials', 'virtual-tour', 'faq', 'kontakt-form'];

  return (
    <>
      <PageLoader />
      <Toaster position="top-right" />
      
      <main className="bg-charcoal min-h-screen">
        <ScrollProgress />
        <ScrollIndicator sections={sections} />
        <BackToTop />
        
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <MaterialShowcase />
        <ProcessTimeline />
        <BeforeAfter />
        <Testimonials />
        <VirtualTour />
        <FAQ />
        <ContactForm />
        <Footer />
        
        {/* Subtle Grain Overlay */}
        <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </main>
    </>
  );
}

export default App;