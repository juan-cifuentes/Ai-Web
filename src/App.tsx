import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIPlanner from './components/AIPlanner';
import Services from './components/Services';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import ExportModal from './components/ExportModal';
import { Globe, Cpu, Cloud, Send } from 'lucide-react';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [prefilledDetails, setPrefilledDetails] = useState('');

  const scrollSection = (selector: string) => {
    const targetElement = document.querySelector(selector);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll directly to pricing
  const handleShowcaseClick = () => {
    scrollSection('#servicios');
  };

  const handleStartProjectClick = () => {
    scrollSection('#contacto');
  };

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleSelectBlueprint = (blueprintText: string) => {
    setPrefilledDetails(blueprintText);
  };

  const handleClearPrefilled = () => {
    setPrefilledDetails('');
  };

  return (
    <div className="min-h-screen bg-void text-white font-sans relative overflow-x-hidden selection:bg-violet-ai selection:text-white">
      {/* Dynamic Header Navbar */}
      <Navbar onStartProjectClick={handleStartProjectClick} />

      {/* Main Hero block */}
      <Hero onStartProjectClick={handleStartProjectClick} onShowcaseClick={handleShowcaseClick} />

      {/* Repeating Marquee Status strip - Matches wireframe structure */}
      <div className="py-10 bg-black/30 border-y border-white/5 overflow-hidden select-none">
        <div className="flex w-max whitespace-nowrap">
          <div className="animate-[marquee_25s_linear_infinite] flex items-center space-x-12 sm:space-x-20 text-white/20 text-xl sm:text-2xl font-extrabold font-display tracking-widest uppercase">
            <span>* ENTREGA GARANTIZADA EN 48 HORAS *</span>
            <span>SITIOS WEB IMPULSADOS POR INTELIGENCIA ARTIFICIAL</span>
            <span>SEO INCORPORADO</span>
            <span>CONTENIDOS COMERCIALES INCLUIDOS</span>
            <span>* ENTREGA EN 48 HORAS GARANTIZADA *</span>
            <span>SITIOS WEB IMPULSADOS POR INTELIGENCIA ARTIFICIAL</span>
            <span>SEO INCORPORADO</span>
            <span>CONTENIDOS COMERCIALES INCLUIDOS</span>
          </div>
          <div className="animate-[marquee_25s_linear_infinite] flex items-center space-x-12 sm:space-x-20 text-white/20 text-xl sm:text-2xl font-extrabold font-display tracking-widest uppercase" aria-hidden="true">
            <span>* ENTREGA GARANTIZADA EN 48 HORAS *</span>
            <span>SITIOS WEB IMPULSADOS POR INTELIGENCIA ARTIFICIAL</span>
            <span>SEO INCORPORADO</span>
            <span>CONTENIDOS COMERCIALES INCLUIDOS</span>
            <span>* ENTREGA EN 48 HORAS GARANTIZADA *</span>
            <span>SITIOS WEB IMPULSADOS POR INTELIGENCIA ARTIFICIAL</span>
            <span>SEO INCORPORADO</span>
            <span>CONTENIDOS COMERCIALES INCLUIDOS</span>
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* Interactive AI Website Blueprint Planner block */}
      <AIPlanner onSelectBlueprint={handleSelectBlueprint} />

      {/* Bento-grid services / features */}
      <Services />

      {/* Pricing cards */}
      <Pricing onSelectPlan={handleSelectPlan} />

      {/* FAQ accordion */}
      <FAQ />

      {/* Form with target email juan@dejabu.ec */}
      <ContactForm
        selectedPlan={selectedPlan}
        prefilledDetails={prefilledDetails}
        onClearPrefilled={handleClearPrefilled}
      />

      {/* Export to cPanel index.html downloadable tool */}
      <ExportModal />

      {/* Highly polished footer */}
      <footer className="bg-black/60 border-t border-white/5 py-16 text-white/50 text-xs text-left">
        <div className="layout-container grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          
          <div className="md:col-span-6 flex flex-col items-start text-left">
            <span className="font-display text-2xl font-extrabold tracking-tighter text-white">
              A<span className="text-lime-ai">N</span>N
            </span>
            <p className="mt-4 max-w-sm leading-[1.6] text-white/60">
              Liderando la revolución del desarrollo web con inteligencia artificial y diseños altamente sofisticados entregados listos para producir resultados en 48 horas.
            </p>
            {/* Visual Icon links */}
            <div className="flex items-center space-x-4 mt-6">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200">
                <Globe className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200">
                <Cloud className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="font-bold text-white font-mono uppercase tracking-widest text-[10px] mb-4">SERVICIOS</p>
            <ul className="space-y-2.5">
              <li><span className="hover:text-white transition-colors cursor-pointer">Web Development</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">AI Integration</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">UI/UX Design</span></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-bold text-white font-mono uppercase tracking-widest text-[10px] mb-4">COMPAÑÍA</p>
            <ul className="space-y-2.5">
              <li><span className="hover:text-white transition-colors cursor-pointer">Sobre Nosotros</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Nuestro Proceso</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Carreras (We are hiring)</span></li>
            </ul>
          </div>

        </div>

        <div className="layout-container pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between text-[10px] text-white/30 gap-4">
          <p>© 2026 Aether AI Development. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
