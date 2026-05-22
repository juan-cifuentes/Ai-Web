import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, CheckCircle, Code, Cpu, Database, Layout } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onStartProjectClick: () => void;
  onShowcaseClick: () => void;
}

const mockCodeSnippets = [
  '<div class="relative overflow-hidden rounded-xl bg-void">',
  '  <header class="flex items-center justify-between border-b...">',
  '    <span class="text-lime-ai font-mono">IA Core Active</span>',
  '    <div class="h-2 w-2 rounded-full bg-lime-ai animate-ping" />',
  '  </header>',
  '  <main class="grid grid-cols-12 gap-8 py-12">',
  '    <h1 class="font-display text-4xl">Siguiente Gen Web</h1>',
  '    <p class="text-white/60">Contenido SEO autogenerado...</p>',
  '    <button class="bg-violet-ai text-white rounded">Click</button>',
  '  </main>',
  '</div>',
  '/* Optimización CDN móvil 100/100 Lighthouse */',
  '@media (max-width: 768px) {',
  '  .grid-cols-12 { grid-template-columns: 1fr; }',
  '}'
];

export default function Hero({ onStartProjectClick, onShowcaseClick }: HeroProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        if (currentLineIndex < mockCodeSnippets.length) {
          setCodeLines((prevExchange) => [...prevExchange, mockCodeSnippets[currentLineIndex]].slice(-8));
          setCurrentLineIndex((prevIndex) => prevIndex + 1);
        } else {
          // loop back
          setCodeLines([]);
          setCurrentLineIndex(0);
        }
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isPlaying, currentLineIndex]);

  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden bg-void">
      {/* Decorative background glow nodes */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-violet-ai/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-lime-ai/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="layout-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline Pill */}
            <div className="inline-flex items-center space-x-2 border border-lime-ai/30 bg-lime-ai/10 px-3.5 py-1.5 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-lime-ai animate-pulse" />
              <span className="text-[10px] font-sans font-bold tracking-widest text-[#73df27] uppercase">
                Disponible de inmediato
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Sitios Web Profesionales <br />
              Impulsados por IA <br />
              en <span className="text-violet-ai bg-clip-text">48 Horas</span>
            </h1>

            {/* Description */}
            <p className="font-sans text-base sm:text-lg md:text-xl text-[#cbc3da] leading-[1.6] max-w-xl mb-10 font-normal">
              Transformamos tu visión en una presencia digital impecable, rápida y eficiente utilizando tecnología de vanguardia. Diseñado con IA, perfeccionado por expertos, listo para vender desde el día 1.
            </p>

            {/* Buttons Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <button
                onClick={onStartProjectClick}
                className="flex items-center justify-center space-x-2 bg-violet-ai hover:bg-violet-ai/90 text-white font-bold text-sm py-4 px-8 rounded-md transition-all duration-200 shadow-xl shadow-violet-ai/25 active:scale-95 group"
              >
                <span>EMPEZAR PROYECTO</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onShowcaseClick}
                className="flex items-center justify-center space-x-2 border border-white/20 hover:border-lime-ai bg-[#0e111a] hover:bg-lime-ai/5 text-white hover:text-white font-semibold text-sm py-4 px-8 rounded-md transition-all duration-300 active:scale-95"
              >
                <span>VER SHOWCASE</span>
              </button>
            </div>
          </div>

          {/* Hero Right Media / Interactive Mockup */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="relative w-full max-w-[480px] aspect-[4/3] sm:aspect-square bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-2xl flex flex-col justify-between overflow-hidden group">
              
              {/* Card Title Bar */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="text-[10px] font-mono text-white/40 tracking-wider">ANN_COMPILER_V3</span>
              </div>

              {/* Central Code Generator Area */}
              <div className="flex-1 flex flex-col justify-center items-center relative min-h-[160px] bg-black/40 rounded-lg p-4 font-mono text-xs overflow-hidden">
                <AnimatePresence>
                  {!isPlaying ? (
                    <motion.div 
                      key="play-overlay"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col items-center justify-center bg-void/90 z-20"
                    >
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="w-16 h-16 rounded-full bg-violet-ai text-white flex items-center justify-center shadow-lg shadow-violet-ai/40 hover:scale-110 hover:bg-violet-ai/90 active:scale-95 transition-all cursor-pointer group/btn"
                      >
                        <Play className="w-6 h-6 fill-white ml-1 group-hover/btn:scale-110 transition-transform" />
                      </button>
                      <span className="text-[11px] font-sans font-medium tracking-wide mt-4 text-[#cbc3da]">
                        Ver Compilación IA en Tiempo Real
                      </span>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="code-stream"
                      initial={{ opacity: 0 }}
                      className="w-full text-left font-mono space-y-1.5 overflow-hidden text-[10px] sm:text-xs z-10"
                    >
                      <div className="flex items-center justify-between text-lime-ai text-[10px] pb-1 border-b border-white/5 mb-2">
                        <span className="flex items-center gap-1">
                          <Cpu className="w-3.5 h-3.5 animate-spin" /> Compilando Sitio...
                        </span>
                        <button 
                          onClick={() => { setIsPlaying(false); setCodeLines([]); setCurrentLineIndex(0); }}
                          className="text-white/40 hover:text-white px-2 py-0.5 rounded border border-white/10"
                        >
                          Pausar
                        </button>
                      </div>
                      {codeLines.map((line, i) => (
                        <div key={i} className="text-white/70 whitespace-pre font-mono hover:text-[#cebdff] transition-colors leading-[1.4]">
                          {line}
                        </div>
                      ))}
                      {codeLines.length === 0 && (
                        <div className="text-white/40 animate-pulse font-mono">Iniciando motor neuronal...</div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Visual backdrop graphics */}
                <div className="absolute inset-0 bg-gradient-to-t from-violet-ai/5 to-transparent pointer-events-none" />
              </div>

              {/* Footer Meta */}
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-sans font-bold uppercase tracking-wider text-white/40">ÚLTIMO PROYECTO</p>
                  <p className="text-sm font-sans font-extrabold tracking-tight text-white">CyberCore v2.0</p>
                </div>
                <div className="flex items-center space-x-1.5 bg-lime-ai/10 border border-lime-ai/30 px-3 py-1 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-ai animate-ping" />
                  <span className="text-[9px] font-mono font-bold tracking-wider text-[#73df27]">ESTRENO</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
