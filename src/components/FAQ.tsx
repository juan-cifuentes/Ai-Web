import React, { useState } from 'react';
import { Plus, Minus, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';
import { FAQItem } from '../types';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('entrega');

  const faqs: FAQItem[] = [
    {
      id: 'entrega',
      question: '¿Cómo logran la entrega en 48 horas?',
      answer: 'Utilizamos frameworks propios y una suite de herramientas IA que automatizan el 80% del código base y la optimización de activos, permitiéndonos enfocarnos 100% en el diseño, la optimización SEO y la personalización para tu negocio.',
    },
    {
      id: 'escalar',
      question: '¿Puedo escalar mi sitio después?',
      answer: 'Totalmente. Todos nuestros sitios están construidos sobre una arquitectura modular e higiénica. Puedes empezar perfectamente con el Plan Esencial (landing single page) y expandirte luego a un Plan Profesional o Enterprise sin perder tu posicionamiento inicial.',
    },
    {
      id: 'hosting',
      question: '¿Qué incluye el hosting IA?',
      answer: 'Servidores dedicados de alta velocidad con CDN global integrada que optimiza dinámicamente el renderizado y comprime las imágenes en formatos de última generación (.webp) según la ubicación de tus clientes.',
    },
    {
      id: 'contenidos',
      question: '¿Los contenidos son redactados de cero?',
      answer: 'Sí. Procesamos tu giro de negocio para generar el copywriting persuasivo estructurado bajo marcos AIDA (Atención, Interés, Deseo, Acción) afinados por un curador experto, entregándote textos finales optimizados y listos.',
    }
  ];

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-void">
      <div className="layout-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* FAQ Left Block - Design Image Card */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="font-mono text-xs text-lime-ai font-bold tracking-widest uppercase bg-lime-ai/10 border border-lime-ai/20 px-3 py-1 rounded-full w-max mb-6">
              RESOLVEMOS TUS DUDAS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-8">
              Preguntas Frecuentes
            </h2>

            {/* Premium Overlay Brand Card */}
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-tr from-[#6600FF]/40 to-[#5EC900]/10 border border-white/10 p-8 shadow-2xl flex flex-col justify-between group">
              <div className="absolute inset-0 bg-void/50 pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-lime-ai" />
                </div>
                <div className="flex items-center space-x-1.5 px-3 py-1 bg-lime-ai/10 border border-lime-ai/30 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-ai animate-pulse" />
                  <span className="text-[10px] font-mono font-extrabold text-[#73df27]">AUDITADO</span>
                </div>
              </div>

              <div className="relative z-10">
                <p className="text-2xl font-display font-extrabold text-white tracking-tight leading-tight">
                  IA + Experiencia
                </p>
                <p className="text-white/60 text-xs font-sans mt-2">
                  Fusionando tecnología automatizada de punta y el toque estético del diseño experto humano.
                </p>
              </div>

              {/* Futuristic light bar */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-violet-ai to-lime-ai" />
            </div>
          </div>

          {/* FAQ Right Block - Accordions List */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden glassmorphic shadow-sm transition-all duration-300"
                >
                  {/* Header/Question toggler */}
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-white leading-tight">
                      {faq.question}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 group-hover:text-white transition-colors ml-4 shrink-0">
                      {isOpen ? <Minus className="w-4 h-4 text-lime-ai" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Body/Answer panel */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? 'max-h-[200px] border-t border-white/5' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 text-sm text-[#cbc3da] leading-[1.6] font-normal font-sans">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Global safety trust badge */}
        <div className="mt-20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center p-6 border border-white/5 bg-white/[0.01] rounded-xl text-center sm:text-left gap-4 glassmorphic">
          <ShieldCheck className="w-8 h-8 text-lime-ai" />
          <p className="text-xs font-sans text-white/50 leading-normal max-w-xl">
            <strong>Garantía de Satisfacción ANN:</strong> Si por alguna eventualidad técnica justificada tu primer bosquejo no responde a tus especificaciones iniciales en 48 horas, re-estructuramos de inmediato sin cargos extra.
          </p>
        </div>

      </div>
    </section>
  );
}
