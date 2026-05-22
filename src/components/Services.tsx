import React from 'react';
import { Palette, Rocket, FileText, Zap, Shield, HelpCircle } from 'lucide-react';

export default function Services() {
  const listItems = [
    {
      id: 'diseno',
      title: 'Diseño Minimalista',
      description: 'Estética sofisticada que prioriza la claridad y el impacto visual de tu marca.',
      icon: Palette,
      gradient: 'from-violet-ai/20 to-transparent',
      span: 'md:col-span-8',
      iconBg: 'bg-violet-ai/10 text-[#cebdff] border-violet-ai/20',
    },
    {
      id: 'seo',
      title: 'Optimización SEO',
      description: 'Estructura automática optimizada para buscadores desde el primer segundo.',
      icon: Rocket,
      gradient: 'from-lime-ai/20 to-transparent',
      span: 'md:col-span-4',
      iconBg: 'bg-lime-ai/10 text-lime-ai border-lime-ai/20',
    },
    {
      id: 'vel',
      title: 'Velocidad Extrema',
      description: 'Optimización absoluta para móviles que garantiza cargas instantáneas en cualquier dispositivo (100% Core Web Vitals).',
      icon: Zap,
      gradient: 'from-lime-ai/20 to-transparent',
      span: 'md:col-span-4',
      iconBg: 'bg-lime-ai/10 text-lime-ai border-lime-ai/20',
    },
    {
      id: 'ia-copy',
      title: 'Contenidos de IA Perfeccionados',
      description: 'Generación de copys comerciales magnéticos redactados específicamente para enganchar a tu audiencia ideal, afinados y completados de manera profesional.',
      icon: FileText,
      gradient: 'from-violet-ai/20 to-transparent',
      span: 'md:col-span-8',
      iconBg: 'bg-violet-ai/10 text-[#cebdff] border-violet-ai/20',
    },
  ];

  return (
    <section id="servicios" className="relative py-24 md:py-32 bg-void">
      <div className="layout-container">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="font-mono text-xs text-lime-ai font-bold tracking-widest uppercase bg-lime-ai/10 border border-lime-ai/20 px-3 py-1 rounded-full">
            SERVICIOS DE ÉLITE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-6 mb-4">
            Tecnología de punta aplicada a cada píxel.
          </h2>
          <p className="font-sans text-base text-[#cbc3da] leading-[1.6] max-w-2xl mx-auto font-normal">
            Creamos experiencias que cargan antes de que el usuario parpadee. Una combinación de automatización de código e intervención artesanal experta.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 max-w-6xl mx-auto">
          {listItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`${item.span} group relative bg-white/[0.03] border border-white/5 rounded-2xl p-8 overflow-hidden glassmorphic shadow-lg transition-all duration-500 hover:border-white/10 hover:bg-white/[0.05] hover:-translate-y-1`}
              >
                {/* Accent Gradient Glow background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg border flex items-center justify-center ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-[#cbc3da] leading-[1.6]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic status stats indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-20 p-8 border border-white/5 bg-white/[0.01] rounded-2xl text-center glassmorphic">
          <div>
            <p className="font-display text-3xl md:text-4xl font-extrabold text-lime-ai">48h</p>
            <p className="text-xs font-sans text-white/50 uppercase tracking-widest mt-1">Tiempo de Entrega</p>
          </div>
          <div>
            <p className="font-display text-3xl md:text-4xl font-extrabold text-[#cbc3da]">100%</p>
            <p className="text-xs font-sans text-white/50 uppercase tracking-widest mt-1">Lighthouse Score</p>
          </div>
          <div>
            <p className="font-display text-3xl md:text-4xl font-extrabold text-[#cbc3da]">Listo</p>
            <p className="text-xs font-sans text-white/50 uppercase tracking-widest mt-1">Incluye Copys e Img</p>
          </div>
          <div>
            <p className="font-display text-3xl md:text-4xl font-extrabold text-lime-ai">Cero</p>
            <p className="text-xs font-sans text-white/50 uppercase tracking-widest mt-1">Suscripciones Atadas</p>
          </div>
        </div>

      </div>
    </section>
  );
}
