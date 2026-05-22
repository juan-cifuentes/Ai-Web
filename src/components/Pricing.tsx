import React from 'react';
import { Check, Flame } from 'lucide-react';
import { Plan } from '../types';

interface PricingProps {
  onSelectPlan: (planId: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const plans: Plan[] = [
    {
      id: 'esencial',
      name: 'Plan Esencial',
      price: '$299',
      period: '/sitio',
      recommended: false,
      features: [
        'Landing page de alto impacto',
        'Hosting premium optimizado',
        'Contenidos comerciales incluidos',
        'Entrega garantizada en 48h',
        'Diseño 100% móvil responsivo',
      ],
      buttonText: 'SELECCIONAR',
      buttonStyle: 'ghost',
    },
    {
      id: 'profesional',
      name: 'Plan Profesional',
      price: '$599',
      period: '/sitio',
      recommended: true,
      features: [
        'Sitio multi-página (hasta 5 páginas)',
        'Módulos e Integraciones de IA',
        'Hosting premium optimizado',
        'Contenidos y copywriting completos',
        'Soporte post-entrega prioritario',
        'Certificado SSL ilimitado gratis',
        'Entrega garantizada en 48h',
      ],
      buttonText: 'EMPEZAR AHORA',
      buttonStyle: 'solid',
    },
    {
      id: 'enterprise',
      name: 'Plan Enterprise',
      price: 'Consultar',
      period: '',
      recommended: false,
      features: [
        'Diseños premium personalizados',
        'E-commerce integrado avanzado',
        'Integraciones de API externas',
        'Consultoría estratégica de conversión',
        'Soporte dedicado 24/7',
        'SEO avanzado y configuraciones custom',
      ],
      buttonText: 'CONTACTAR',
      buttonStyle: 'ghost',
    },
  ];

  const handleSelect = (planId: string) => {
    onSelectPlan(planId);
    const targetElement = document.querySelector('#contacto');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="planes" className="relative py-24 md:py-32 bg-[#090b13] border-t border-white/5">
      {/* Visual backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-ai/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="layout-container relative z-10">
        
        {/* Headings */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="font-mono text-xs text-[#cebdff] font-bold tracking-widest uppercase bg-violet-ai/15 border border-violet-ai/30 px-3 py-1 rounded-full">
            PRECIOS TRANSPARENTES
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-6 mb-4">
            Nuestros Planes
          </h2>
          <p className="font-sans text-base text-[#cbc3da] leading-[1.6]">
            Inversión transparente para resultados extraordinarios. Escoge el que mejor se adapte a tu fase de crecimiento.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between bg-white/[0.03] rounded-2xl p-8 glassmorphic transition-all duration-300 ${
                plan.recommended
                  ? 'border-2 border-violet-ai scale-102 bg-white/[0.05] shadow-2xl shadow-violet-ai/10'
                  : 'border border-white/5 hover:border-white/10'
              }`}
            >
              {/* Highlight ribbon for recommended */}
              {plan.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center space-x-1 bg-violet-ai text-white text-[10px] font-mono tracking-wider font-extrabold px-3 py-1 rounded-full uppercase">
                  <Flame className="w-3 h-3 fill-white text-white select-none animate-bounce" />
                  <span>RECOMENDADO</span>
                </div>
              )}

              {/* Top part header details */}
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-mono tracking-widest text-[#cbc3da] uppercase">{plan.name}</p>
                  <div className="flex items-baseline mt-4">
                    <span className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-sm font-sans text-white/50 ml-2">{plan.period}</span>
                  </div>
                </div>

                <div className="h-px bg-white/5 w-full" />

                {/* Features list */}
                <ul className="space-y-4">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start text-left text-sm text-[#cbc3da] font-normal leading-relaxed">
                      <Check className={`w-4 h-4 shrink-0 mr-3 mt-0.5 ${plan.recommended ? 'text-lime-ai' : 'text-slate-400'}`} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom selection button */}
              <div className="mt-8">
                {plan.buttonStyle === 'solid' ? (
                  <button
                    onClick={() => handleSelect(plan.id)}
                    className="w-full bg-violet-ai hover:bg-violet-ai/90 text-white font-bold text-xs py-4 px-6 rounded-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-violet-ai/20"
                  >
                    {plan.buttonText}
                  </button>
                ) : (
                  <button
                    onClick={() => handleSelect(plan.id)}
                    className="w-full border border-white/20 hover:border-lime-ai bg-transparent hover:bg-lime-ai/5 text-white hover:text-white font-semibold text-xs py-4 px-6 rounded-md transition-all duration-300"
                  >
                    {plan.buttonText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
