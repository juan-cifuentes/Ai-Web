import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle, RefreshCw, Palette, Layers, ChevronRight, LayoutTemplate } from 'lucide-react';
import { WebsiteBlueprint } from '../types';

interface AIPlannerProps {
  onSelectBlueprint: (blueprintText: string) => void;
}

export default function AIPlanner({ onSelectBlueprint }: AIPlannerProps) {
  const [businessName, setBusinessName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [blueprint, setBlueprint] = useState<WebsiteBlueprint | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim() || !description.trim()) return;

    setLoading(true);
    setError('');
    setBlueprint(null);

    try {
      const response = await fetch('/api/generate-blueprint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessName, description }),
      });

      if (!response.ok) {
        throw new Error('Error al procesar la solicitud con el servidor.');
      }

      const data = await response.json();
      setBlueprint(data);
    } catch (err: any) {
      console.error(err);
      setError('Hubo una demora temporaria o error en la generación con IA. Por favor, reintenta.');
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = () => {
    if (!blueprint) return;
    const structureText = `Hola, quiero cotizar un sitio para "${blueprint.title}". Estructura recomendada: Páginas: [${blueprint.recommendedPages.join(', ')}]. Secciones: [${blueprint.sections.map(s => s.sectionName).join(', ')}]. Funcionalidades: [${blueprint.featuresToBuild.join(', ')}].`;
    onSelectBlueprint(structureText);
    
    // Scroll to contact form
    const contactSection = document.querySelector('#contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="proceso" className="relative py-24 md:py-32 bg-[#080b13] border-y border-white/5">
      {/* Visual neon circles */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-violet-ai/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-lime-ai/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="layout-container relative z-10">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-1 border border-violet-ai/20 bg-violet-ai/5 px-3 py-1 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#cebdff]" />
            <span className="text-[10px] font-mono tracking-widest text-[#cebdff] uppercase">DISEÑO INSTANTÁNEO</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Prueba Nuestra IA en Segundos
          </h2>
          <p className="text-white/60 font-sans text-base max-w-2xl mx-auto">
            Ingresa los datos de tu empresa hoy mismo y mira cómo nuestro motor neuronal bosqueja la estructura inicial, los módulos de conversión y el copywriting de tu futuro sitio.
          </p>
        </div>

        {/* Form and Result grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Form Side */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 glassmorphic relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-ai to-lime-ai" />
            
            <form onSubmit={handleGenerate} className="space-y-6">
              <div>
                <label htmlFor="ia-business-name" className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-2">
                  Nombre del Negocio
                </label>
                <input
                  id="ia-business-name"
                  type="text"
                  placeholder="ej. Café Místico, Consultorio Dental Nova..."
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full bg-black/30 border-b border-white/20 focus:border-lime-ai py-3 px-1 text-white text-sm outline-none transition-all duration-300 rounded"
                  required
                />
              </div>

              <div>
                <label htmlFor="ia-business-description" className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-2">
                  ¿A qué se dedica tu negocio y qué te hace único?
                </label>
                <textarea
                  id="ia-business-description"
                  rows={4}
                  placeholder="ej. Café orgánico y repostería artesanal en un ambiente místico. Ofrecemos catas presenciales..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-black/30 border-b border-white/20 focus:border-lime-ai py-3 px-1 text-white text-sm outline-none transition-all duration-300 rounded resize-none"
                  required
                />
              </div>

              {error && (
                <div className="p-3.5 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-xs text-left">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center space-x-2 bg-violet-ai hover:bg-violet-ai/90 disabled:bg-violet-ai/40 text-white font-bold text-xs py-4 px-6 rounded-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-violet-ai/20"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-lime-ai mr-2" />
                    <span>DISEÑANDO CON IA...</span>
                  </>
                ) : (
                  <>
                    <span>CREAR BOSQUEJO WEB</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-start gap-3 text-left">
              <CheckCircle className="w-5 h-5 text-lime-ai shrink-0" />
              <p className="text-[11px] font-sans text-white/50 leading-relaxed">
                El blueprint generado está automatizado y sigue principios estrictos de UI minimalista y copywriting de alta persuasión comercial.
              </p>
            </div>
          </div>

          {/* Result Side */}
          <div className="lg:col-span-7 flex flex-col justify-start min-h-[350px]">
            {loading ? (
              <div className="flex-1 flex flex-col items-center justify-center bg-white/[0.01] border border-white/5 rounded-xl p-8 text-center glassmorphic min-h-[400px]">
                {/* Thin, high-precision loading bar using Acid Lime */}
                <div className="w-64 h-1.5 bg-white/5 rounded-full overflow-hidden mb-6">
                  <div className="h-full bg-lime-ai animate-[loading_2s_infinite]" style={{ width: '40%' }}>
                    <style>{`
                      @keyframes loading {
                        0% { transform: translateX(-100%); width: 30%; }
                        50% { transform: translateX(100%); width: 60%; }
                        100% { transform: translateX(300%); width: 30%; }
                      }
                    `}</style>
                  </div>
                </div>
                <p className="text-sm font-mono text-lime-ai animate-pulse">PROCESO CREATIVO ACTIVO</p>
                <p className="text-white/40 text-xs font-sans mt-2">Nuestra IA está estructurando las secciones, páginas y paleta cromática...</p>
              </div>
            ) : blueprint ? (
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 text-left glassmorphic flex flex-col justify-between h-full animate-[fadeIn_0.5s_ease]">
                <div>
                  {/* Blueprint Title & Meta */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 pb-4 mb-6 gap-3">
                    <div>
                      <span className="text-[9px] font-mono text-[#73df27] tracking-widest uppercase bg-lime-ai/10 border border-lime-ai/20 px-2.5 py-1 rounded">
                        Estructura Recomendada
                      </span>
                      <h3 className="text-2xl font-display font-extrabold text-white mt-2">{blueprint.title}</h3>
                    </div>
                    {/* Visualizer colors */}
                    <div className="flex items-center space-x-2">
                      <Palette className="w-3.5 h-3.5 text-white/40" />
                      <div className="flex -space-x-1.5">
                        {blueprint.suggestedColors.map((hex, index) => (
                          <div
                            key={index}
                            title={hex}
                            className="w-5 h-5 rounded-full border border-void shadow"
                            style={{ backgroundColor: hex }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Subtitle recommended by IA */}
                  <p className="text-[#cbc3da] text-sm italic font-sans mb-6 font-medium leading-relaxed">
                    "{blueprint.heroSubtitle}"
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Sections outline */}
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-mono uppercase text-white/40 tracking-wider flex items-center gap-1.5">
                        <Layers className="w-3 h-3 text-[#cebdff]" /> Estructura de Secciones
                      </h4>
                      <div className="space-y-3.5 max-h-[190px] overflow-y-auto pr-2">
                        {blueprint.sections.map((sec, i) => (
                          <div key={i} className="bg-white/[0.02] border border-white/5 rounded p-3 text-xs">
                            <p className="font-display font-bold text-white mb-1 flex items-center gap-1.5">
                              <span className="text-lime-ai font-mono font-medium">{i + 1}.</span> {sec.sectionName}
                            </p>
                            <p className="text-white/50 leading-relaxed font-sans text-[11px]">
                              {sec.copywritingSummary}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Meta/Integration Pages */}
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-mono uppercase text-white/40 tracking-wider flex items-center gap-1.5">
                        <LayoutTemplate className="w-3 h-3 text-lime-ai" /> Arquitectura y Filtros
                      </h4>
                      <div className="space-y-3.5">
                        {/* Recommended Pages tags */}
                        <div className="bg-white/[0.01] border border-white/5 rounded p-3 text-xs">
                          <p className="font-[500] text-white/70 mb-2">Páginas a Crear:</p>
                          <div className="flex flex-wrap gap-1.5">
                            {blueprint.recommendedPages.map((pg, idx) => (
                              <span key={idx} className="text-[10px] py-0.5 px-2 bg-white/5 border border-white/10 rounded text-white/80">
                                {pg}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Custom Core features */}
                        <div className="bg-white/[0.01] border border-white/5 rounded p-3 text-xs">
                          <p className="font-[500] text-white/70 mb-2">Funcionalidades Clave:</p>
                          <ul className="space-y-1.5 text-white/50 font-sans text-[11px]">
                            {blueprint.featuresToBuild.map((feat, idx) => (
                              <li key={idx} className="flex items-start gap-1">
                                <span className="text-lime-ai select-none shrink-0">•</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-[11px] font-sans text-white/40">¿Quieres un diseño idéntico o expandido listo en 48 horas?</p>
                  <button
                    onClick={handleSelect}
                    className="flex items-center justify-center space-x-1.5 bg-lime-ai hover:bg-lime-ai/90 text-void font-bold text-xs py-2.5 px-5 rounded hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg shadow-lime-ai/10"
                  >
                    <span>Elegir Estructura y Cotizar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center bg-white/[0.01] border border-white/5 rounded-xl p-8 text-center glassmorphic min-h-[400px]">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-white/40 mb-4 animate-[pulse_2s_infinite]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">Sin propuestas creadas aún</h3>
                <p className="text-white/40 text-xs font-sans max-w-sm">
                  Configura el formulario de la izquierda con tu negocio o idea, presiona en generar, y proyectaremos tu landing page premium en tiempo real.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
