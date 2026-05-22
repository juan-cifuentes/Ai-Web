import React, { useState } from 'react';
import { Download, Sparkles, Check, FileCode, CheckCircle2 } from 'lucide-react';

export default function ExportModal() {
  const [success, setSuccess] = useState(false);

  const generateHTMLCode = () => {
    return `<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ANN - Sitios Web Inteligentes en 48 Horas</title>
  
  <!-- SEO Meta Tags -->
  <meta name="description" content="Diseño y desarrollo de sitios web profesionales optimizados y creados con Inteligencia Artificial y entregados en 48 horas listos para vender.">
  <meta name="author" content="ANN">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS Play CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Tailwind Configuration -->
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"DM Sans"', 'sans-serif'],
            display: ['"Plus Jakarta Sans"', 'sans-serif'],
          },
          colors: {
            void: '#050913',
            violetAi: '#6600FF',
            limeAi: '#5EC900',
          }
        }
      }
    }
  </script>
  
  <!-- Styling -->
  <style>
    body {
      background-color: #050913;
      color: #FDFDFD;
      font-family: 'DM Sans', sans-serif;
    }
    .glassmorphic {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    .glassmorphic-card {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.05);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .glassmorphic-card:hover {
      background: rgba(255, 255, 255, 0.06);
      border-color: rgba(94, 201, 0, 0.3);
      transform: translateY(-4px);
    }
  </style>
</head>
<body class="overflow-x-hidden">

  <!-- GLOWS -->
  <div class="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-violetAi/5 rounded-full blur-[110px] pointer-events-none z-0"></div>
  <div class="absolute top-[60%] right-1/4 w-[500px] h-[500px] bg-limeAi/5 rounded-full blur-[140px] pointer-events-none z-0"></div>

  <!-- NAVIGATION -->
  <nav class="fixed top-0 left-0 right-0 z-50 glassmorphic border-b border-white/5 bg-void/85 backdrop-blur-xl">
    <div class="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 py-5 flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <span class="font-display text-2xl font-extrabold tracking-tighter text-white">A<span class="text-limeAi">N</span>N</span>
        <span class="text-[10px] uppercase tracking-widest bg-violetAi/20 text-white/90 border border-violetAi/30 px-2 py-0.5 rounded-full font-mono">IA WEB</span>
      </div>
      <div class="hidden md:flex items-center space-x-8 text-sm font-medium">
        <a href="#proceso" class="text-white/60 hover:text-white transition-colors duration-200">Proceso</a>
        <a href="#servicios" class="text-white/60 hover:text-white transition-colors duration-200">Servicios</a>
        <a href="#planes" class="text-white/60 hover:text-white transition-colors duration-200">Planes</a>
        <a href="#faq" class="text-white/60 hover:text-white transition-colors duration-200">Preguntas</a>
      </div>
      <div>
        <a href="#contacto" class="bg-violetAi hover:bg-violetAi/90 text-white font-semibold text-xs py-2.5 px-6 rounded-md transition-all duration-200 shadow-lg shadow-violetAi/20 inline-block">
          START PROJECT
        </a>
      </div>
    </div>
  </nav>

  <!-- HERO SECTION -->
  <section class="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden">
    <div class="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 text-left">
          <div class="inline-flex items-center space-x-2 border border-limeAi/30 bg-limeAi/10 px-3.5 py-1.5 rounded-full mb-8">
            <span class="w-2 h-2 rounded-full bg-limeAi animate-pulse"></span>
            <span class="text-[10px] font-sans font-bold tracking-widest text-[#73df27] uppercase">Disponible ahora</span>
          </div>
          <h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Sitios Web Profesionales <br>
            Impulsados por IA <br>
            en <span class="text-violetAi">48 Horas</span>
          </h1>
          <p class="text-base sm:text-lg text-[#cbc3da] leading-[1.6] max-w-xl mb-10 font-normal">
            Transformamos tu visión en una presencia digital impecable, rápida y eficiente utilizando tecnología de vanguardia. Diseñado con IA, perfeccionado por expertos, listo para vender desde el día 1.
          </p>
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contacto" class="flex items-center justify-center space-x-2 bg-violetAi hover:bg-violetAi/90 text-white font-bold text-sm py-4 px-8 rounded-md transition-all duration-200 shadow-xl shadow-violetAi/25">
              <span>EMPEZAR PROYECTO</span>
            </a>
            <a href="#servicios" class="flex items-center justify-center border border-white/20 hover:border-limeAi bg-[#0e111a] hover:bg-limeAi/5 text-white py-4 px-8 rounded-md transition-all duration-300">
              <span>VER SERVICIOS</span>
            </a>
          </div>
        </div>
        <div class="lg:col-span-5 flex justify-center">
          <div class="w-full max-w-[450px] aspect-square bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 p-6 flex flex-col justify-between overflow-hidden">
            <div class="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
              <div class="flex space-x-1.5">
                <div class="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
              </div>
              <span class="text-[9px] font-mono text-white/40 tracking-wider">ANN_MOCKUP_V3</span>
            </div>
            <div class="flex-1 bg-black/40 rounded-lg p-5 flex flex-col justify-center items-center text-center">
              <div class="w-14 h-14 rounded-full bg-violetAi text-white flex items-center justify-center shadow-lg shadow-violetAi/40 mb-4 animate-bounce">
                <svg class="w-6 h-6 ml-1 fill-white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <p class="font-display font-semibold text-white text-sm">Próximo Portal Web</p>
              <p class="text-xs text-white/50 mt-1 max-w-[200px]">Optimizaciones de alta fidelidad cargadas con contenido SEO</p>
            </div>
            <div class="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-left">
              <div>
                <p class="text-[9px] font-bold text-white/40 uppercase">ÚLTIMO PROYECTO</p>
                <p class="text-sm font-extrabold text-white">CyberCore v2.0</p>
              </div>
              <span class="text-[9px] text-limeAi bg-limeAi/10 border border-limeAi/20 px-2.5 py-1 rounded font-bold font-mono">ESTRENO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- MARQUEE / STATUS LINE -->
  <div class="py-10 bg-black/40 border-y border-white/5 overflow-hidden">
    <div class="whitespace-nowrap overflow-hidden flex">
      <div class="animate-[marquee_25s_linear_infinite] flex items-center space-x-20 text-white/30 text-2xl font-display font-black tracking-widest uppercase">
        <span>* ENTREGA EN 48 HORAS GARANTIZADA *</span>
        <span>SITIOS WEB CON INTELIGENCIA ARTIFICIAL</span>
        <span>SEO INCORPORADO</span>
        <span>CONTENIDOS COMERCIALES INCLUIDOS</span>
        <span>* ENTREGA EN 48 HORAS GARANTIZADA *</span>
        <span>SITIOS WEB CON INTELIGENCIA ARTIFICIAL</span>
        <span>SEO INCORPORADO</span>
        <span>CONTENIDOS COMERCIALES INCLUIDOS</span>
      </div>
    </div>
    <style>
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
    </style>
  </div>

  <!-- PROCESS SECTION -->
  <section id="proceso" class="relative py-24 bg-[#080b13] border-b border-white/5 text-center">
    <div class="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
      <span class="font-mono text-xs text-limeAi font-bold tracking-widest uppercase bg-limeAi/10 border border-limeAi/20 px-3 py-1 rounded-full">DISEÑO ÁGIL</span>
      <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-6 mb-4">¿Cómo optimizamos en 48 Horas?</h2>
      <p class="text-white/60 text-base max-w-2xl mx-auto mb-16">El proceso es sencillo pero altamente tecnológico. Diseñamos la base mediante IA y perfeccionamos a mano para una entrega perfecta.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div class="bg-white/[0.02] border border-white/5 rounded-xl p-8 glassmorphic-card">
          <div class="w-10 h-10 rounded-full bg-violetAi/10 text-[#cebdff] border border-violetAi/20 flex items-center justify-center font-bold font-mono text-sm mb-6">01</div>
          <h3 class="text-xl font-bold mb-3">Especificación IA</h3>
          <p class="text-sm text-[#cbc3da] leading-relaxed">Analizamos tu nicho mediante algoritmos lingüísticos de IA y creamos el bosquejo de secciones y contenidos en minutos.</p>
        </div>
        <div class="bg-white/[0.02] border border-white/5 rounded-xl p-8 glassmorphic-card">
          <div class="w-10 h-10 rounded-full bg-limeAi/10 text-limeAi border border-limeAi/20 flex items-center justify-center font-bold font-mono text-sm mb-6">02</div>
          <h3 class="text-xl font-bold mb-3">Curación y Ajustes</h3>
          <p class="text-sm text-[#cbc3da] leading-relaxed">Nuestros diseñadores humanos ajustan detalles, jerarquía visual, logotipos y configuran las integraciones comerciales.</p>
        </div>
        <div class="bg-white/[0.02] border border-white/5 rounded-xl p-8 glassmorphic-card">
          <div class="w-10 h-10 rounded-full bg-violetAi/10 text-[#cebdff] border border-violetAi/20 flex items-center justify-center font-bold font-mono text-sm mb-6">03</div>
          <h3 class="text-xl font-bold mb-3">Lanzamiento</h3>
          <p class="text-sm text-[#cbc3da] leading-relaxed">Subimos tu sitio optimizado a servidores de alta velocidad. Se te entregan accesos completos y soporte ilimitado.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section id="servicios" class="relative py-24 bg-void text-center">
    <div class="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
      <span class="font-mono text-xs text-limeAi font-bold tracking-widest uppercase bg-limeAi/10 border border-limeAi/20 px-3 py-1 rounded-full">SERVICIOS DE ÉLITE</span>
      <h2 class="font-display text-4xl sm:text-5xl font-extrabold text-white mt-6 mb-4">Ingeniería para cada pixel.</h2>
      <p class="text-white/60 text-base max-w-2xl mx-auto mb-16">Estructuramos un portal veloz y amigable para garantizar tu retorno de inversión.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
        <div class="bg-white/[0.03] border border-white/5 rounded-2xl p-8 glassmorphic-card">
          <h3 class="text-2xl font-bold mb-3">Diseño Minimalista</h3>
          <p class="text-sm text-[#cbc3da] leading-relaxed">Bordes suaves, paneles glassmórficos elegantes y tipografía de alto nivel para posicionar a tu marca en el primer escaño del sector.</p>
        </div>
        <div class="bg-white/[0.03] border border-white/5 rounded-2xl p-8 glassmorphic-card">
          <h3 class="text-2xl font-bold mb-3">Optimización SEO</h3>
          <p class="text-sm text-[#cbc3da] leading-relaxed">Arquitectura semántica en HTML5 estructurada desde el inicio para facilitar el rastreo orgánico de Google.</p>
        </div>
        <div class="bg-white/[0.03] border border-white/5 rounded-2xl p-8 glassmorphic-card">
          <h3 class="text-2xl font-bold mb-3">Velocidad Extrema</h3>
          <p class="text-sm text-[#cbc3da] leading-relaxed">Sitios optimizados para arrancar de inmediato en redes móviles. Carga ultra veloz que evita pérdidas de visitas.</p>
        </div>
        <div class="bg-white/[0.03] border border-white/5 rounded-2xl p-8 glassmorphic-card">
          <h3 class="text-2xl font-bold mb-3">Contenidos Persuasivos</h3>
          <p class="text-sm text-[#cbc3da] leading-relaxed">Textos comerciales ya integrados y listos de principio a fin, eliminando la necesidad de redactores independientes.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PRICING -->
  <section id="planes" class="relative py-24 bg-[#090b13] border-t border-white/5 text-center">
    <div class="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
      <span class="font-mono text-xs text-[#cebdff] font-bold tracking-widest uppercase bg-violetAi/15 border border-violetAi/30 px-3 py-1 rounded-full">PRECIOS TRANSPARENTES</span>
      <h2 class="font-display text-4xl sm:text-5xl font-extrabold text-white mt-6 mb-4">Nuestros Planes</h2>
      <p class="text-white/60 text-base max-w-2xl mx-auto mb-16">Inversión transparente para resultados extraordinarios.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        <!-- PLAN 1 -->
        <div class="flex flex-col justify-between bg-white/[0.03] border border-white/5 rounded-2xl p-8 glassmorphic text-left">
          <div>
            <p class="text-xs font-mono tracking-widest text-[#cbc3da] uppercase">Plan Esencial</p>
            <div class="flex items-baseline mt-4">
              <span class="text-4xl font-extrabold text-white">$299</span>
              <span class="text-sm text-white/50 ml-2">/sitio</span>
            </div>
            <div class="h-px bg-white/5 my-6"></div>
            <ul class="space-y-4 text-sm text-[#cbc3da]">
              <li>✓ Landing page de impacto</li>
              <li>✓ Hosting premium (1 año)</li>
              <li>✓ Contenidos comerciales</li>
              <li>✓ Entrega garantizada en 48h</li>
              <li>✓ Diseño responsivo móvil</li>
            </ul>
          </div>
          <a href="#contacto" onclick="selectPlan('esencial')" class="mt-8 block text-center border border-white/20 hover:border-limeAi bg-transparent hover:bg-limeAi/5 text-white py-3 px-6 rounded font-semibold text-xs duration-300">SELECCIONAR</a>
        </div>
        <!-- PLAN 2 -->
        <div class="relative flex flex-col justify-between bg-white/[0.05] border-2 border-violetAi rounded-2xl p-8 glassmorphic text-left shadow-2xl">
          <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-violetAi text-white text-[9px] font-mono font-extrabold px-3 py-1 rounded-full">RECOMENDADO</div>
          <div>
            <p class="text-xs font-mono tracking-widest text-[#cbc3da] uppercase">Plan Profesional</p>
            <div class="flex items-baseline mt-4">
              <span class="text-4xl font-extrabold text-white">$599</span>
              <span class="text-sm text-white/50 ml-2">/sitio</span>
            </div>
            <div class="h-px bg-white/5 my-6"></div>
            <ul class="space-y-4 text-sm text-[#cbc3da]">
              <li>✓ Multi-página (hasta 5 págs)</li>
              <li>✓ Integraciones de IA</li>
              <li>✓ Hosting premium (1 año)</li>
              <li>✓ Copywriting persuasivo</li>
              <li>✓ Soporte post-entrega</li>
              <li>✓ Certificado SSL ilimitado</li>
            </ul>
          </div>
          <a href="#contacto" onclick="selectPlan('profesional')" class="mt-8 block text-center bg-violetAi hover:bg-violetAi/90 text-white py-3.5 px-6 rounded font-bold text-xs duration-200">EMPEZAR AHORA</a>
        </div>
        <!-- PLAN 3 -->
        <div class="flex flex-col justify-between bg-white/[0.03] border border-white/5 rounded-2xl p-8 glassmorphic text-left">
          <div>
            <p class="text-xs font-mono tracking-widest text-[#cbc3da] uppercase">Plan Enterprise</p>
            <div class="flex items-baseline mt-4">
              <span class="text-4xl font-extrabold text-white">Consultar</span>
            </div>
            <div class="h-px bg-white/5 my-6"></div>
            <ul class="space-y-4 text-sm text-[#cbc3da]">
              <li>✓ Diseños premium custom</li>
              <li>✓ E-commerce integrado</li>
              <li>✓ Integraciones API externas</li>
              <li>✓ Consultoría estratégica</li>
              <li>✓ Soporte dedicado 24/7</li>
              <li>✓ SEO avanzado continuo</li>
            </ul>
          </div>
          <a href="#contacto" onclick="selectPlan('enterprise')" class="mt-8 block text-center border border-white/20 hover:border-limeAi bg-transparent hover:bg-limeAi/5 text-white py-3 px-6 rounded font-semibold text-xs duration-300">CONTACTAR</a>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq" class="relative py-24 bg-void text-left">
    <div class="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div class="lg:col-span-5 text-left">
          <span class="font-mono text-xs text-limeAi font-bold tracking-widest uppercase bg-limeAi/10 border border-limeAi/20 px-3 py-1 rounded-full">RESOLVEMOS TUS DUDAS</span>
          <h2 class="font-display text-4xl sm:text-5xl font-extrabold text-white mt-6 mb-8">Preguntas Frecuentes</h2>
          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-tr from-[#6600FF]/30 to-[#5EC900]/5 border border-white/10 p-8 shadow-2xl min-h-[220px] flex flex-col justify-end">
            <p class="text-2xl font-display font-extrabold text-white">IA + Experiencia</p>
            <p class="text-white/60 text-xs mt-2">La perfecta sinergia entre automatización precisa y diseñadores que asisten cada paso.</p>
          </div>
        </div>
        <div class="lg:col-span-7 space-y-4">
          <div class="bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden glassmorphic">
            <button onclick="toggleFaq('f1')" class="w-full py-5 px-6 flex justify-between items-center text-left font-display font-bold text-lg text-white">
              <span>¿Cómo logran la entrega en 48 horas?</span>
              <span id="f1-icon" class="text-limeAi font-bold text-xl">-</span>
            </button>
            <div id="f1" class="px-6 pb-6 text-sm text-[#cbc3da] leading-relaxed">
              Utilizamos frameworks propios y una suite de herramientas IA que automatizan el 80% del código base y la optimización de activos, permitiéndonos enfocarnos 100% en el diseño y la personalización.
            </div>
          </div>
          <div class="bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden glassmorphic">
            <button onclick="toggleFaq('f2')" class="w-full py-5 px-6 flex justify-between items-center text-left font-display font-bold text-lg text-white">
              <span>¿Puedo escalar mi sitio después?</span>
              <span id="f2-icon" class="text-white/50 font-bold text-xl">+</span>
            </button>
            <div id="f2" class="px-6 pb-6 text-sm text-[#cbc3da] leading-relaxed hidden">
              Totalmente. Todos nuestros sitios están construidos sobre una arquitectura modular. Puedes empezar con el Plan Esencial y expandirte a una solución Enterprise sin necesidad de reconstruir desde cero.
            </div>
          </div>
          <div class="bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden glassmorphic">
            <button onclick="toggleFaq('f3')" class="w-full py-5 px-6 flex justify-between items-center text-left font-display font-bold text-lg text-white">
              <span>¿Qué incluye el hosting IA?</span>
              <span id="f3-icon" class="text-white/50 font-bold text-xl">+</span>
            </button>
            <div id="f3" class="px-6 pb-6 text-sm text-[#cbc3da] leading-relaxed hidden">
              Servidores de alta velocidad con CDN integrada que optimiza dinámicamente las imágenes y el contenido según la ubicación geográfica y el dispositivo del usuario.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FORMULARIO DE CONTACTO APUNTANDO A JUAN@DEJABU.EC -->
  <!-- Utiliza FormSubmit para enviar leads directamente de forma gratuita y segura -->
  <section id="contacto" class="relative py-24 bg-[#050913] border-t border-white/5">
    <div class="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 text-center">
      <span class="font-mono text-xs text-limeAi font-bold tracking-widest uppercase bg-limeAi/10 border border-limeAi/20 px-3 py-1 rounded-full">FORMULARIO DE CONTACTO</span>
      <h2 class="font-display text-4xl sm:text-5xl font-extrabold text-white mt-6 mb-4">Arranquemos Hoy</h2>
      <p class="text-[#cbc3da] text-base max-w-lg mx-auto mb-16 font-sans">Compártenos tu idea y un asesor registrará tu entrega en menos de 2 horas de forma garantizada.</p>
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left max-w-5xl mx-auto items-stretch">
        <div class="lg:col-span-4 flex flex-col justify-between bg-white/[0.01] border border-white/5 rounded-2xl p-8 glassmorphic">
          <div>
            <h3 class="text-xl font-bold mb-4">Ventas Directas</h3>
            <p class="text-sm text-[#cbc3da] leading-relaxed mb-6">¿Quieres adjuntar algún material o realizar una pregunta técnica específica por correo?</p>
            <a href="mailto:juan@dejabu.ec" class="text-[#cebdff] font-sans font-medium text-sm hover:underline block break-all">juan@dejabu.ec</a>
          </div>
          <div class="border-t border-white/5 pt-6 mt-6">
            <span class="text-[9px] font-mono text-limeAi font-bold uppercase block">TIEMPO PROMEDIO</span>
            <p class="text-xs text-white/40 mt-1">Atención rápida por nuestro equipo en menos de 120 minutos.</p>
          </div>
        </div>

        <div class="lg:col-span-8 bg-white/[0.03] border border-white/5 rounded-2xl p-6 sm:p-8 glassmorphic">
          <!-- FormSubmit Endpoint configurado para juan@dejabu.ec -->
          <form action="https://formsubmit.co/juan@dejabu.ec" method="POST" class="space-y-6">
            
            <!-- Configuraciones FormSubmit -->
            <input type="hidden" name="_next" value="https://dejabu.ec">
            <input type="hidden" name="_subject" value="Nuevo Lead registrado desde Landing Page ANN">
            <input type="hidden" name="_template" value="table">
            <input type="text" name="_honey" style="display:none">

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-[10px] font-mono text-white/40 uppercase mb-2">Nombre Completo</label>
                <input type="text" name="name" required class="w-full bg-black/30 border-b border-white/20 focus:border-limeAi py-3 text-white text-sm outline-none transition-all rounded px-2" placeholder="ej. Juan Pérez">
              </div>
              <div>
                <label class="block text-[10px] font-mono text-white/40 uppercase mb-2">Correo Electrónico</label>
                <input type="email" name="email" required class="w-full bg-black/30 border-b border-white/20 focus:border-limeAi py-3 text-white text-sm outline-none transition-all rounded px-2" placeholder="ej. juan@dejabu.ec">
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-[10px] font-mono text-white/40 uppercase mb-2">Teléfono / WhatsApp</label>
                <input type="tel" name="phone" required class="w-full bg-black/30 border-b border-white/20 focus:border-limeAi py-3 text-white text-sm outline-none transition-all rounded px-2" placeholder="ej. +593 99 999 9999">
              </div>
              <div>
                <label class="block text-[10px] font-mono text-white/40 uppercase mb-2">Plan Deseado</label>
                <select id="selected-plan-dropdown" name="plan" class="w-full bg-[#12141c] border-b border-white/20 focus:border-limeAi py-3 text-white text-sm outline-none rounded px-2">
                  <option value="esencial">Plan Esencial — $299</option>
                  <option value="profesional" selected>Plan Profesional — $599</option>
                  <option value="enterprise">Plan Enterprise — Consultar</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-[10px] font-mono text-white/40 uppercase mb-2">Breve Descripción de tu Idea o Portal</label>
              <textarea name="message" rows="4" required class="w-full bg-black/30 border-b border-white/20 focus:border-limeAi py-3 text-white text-sm outline-none transition-all rounded px-2 resize-none" placeholder="ej. Sitio para mi marca corporativa, con portafolio e integrado con mi WhatsApp comercial..."></textarea>
            </div>

            <button type="submit" class="w-full sm:w-auto bg-limeAi text-void font-extrabold text-xs py-4 px-8 rounded hover:scale-105 active:scale-95 transition-all shadow-lg shadow-limeAi/20 cursor-pointer">
              ENVIAR SOLICITUD AHORA
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-black/80 border-t border-white/5 py-16 text-white/45 text-xs text-left">
    <div class="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
      <div class="md:col-span-6">
        <span class="font-display text-2xl font-extrabold tracking-tighter text-white">A<span class="text-limeAi">N</span>N</span>
        <p class="mt-4 max-w-sm leading-relaxed text-[#cbc3da]/60">Liderando la revolución del desarrollo web con inteligencia artificial y diseños premium ultra veloces en 48 horas.</p>
      </div>
      <div class="md:col-span-3">
        <p class="font-bold text-white font-mono uppercase text-[10px] mb-4">Compañía</p>
        <ul class="space-y-2">
          <li><a href="#proceso" class="hover:text-white transition-colors">Nuestro Proceso</a></li>
          <li><a href="#servicios" class="hover:text-white transition-colors">Servicios IA</a></li>
          <li><a href="#planes" class="hover:text-white transition-colors">Nuestros Planes</a></li>
        </ul>
      </div>
      <div class="md:col-span-3">
        <p class="font-bold text-white font-mono uppercase text-[10px] mb-4">Contacto Directo</p>
        <p class="leading-relaxed">Soporte técnico y briefings de marca oficiales escribiendo a:</p>
        <a href="mailto:juan@dejabu.ec" class="text-white hover:underline block mt-2 text-sm font-semibold">juan@dejabu.ec</a>
      </div>
    </div>
    <div class="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between text-[10px] text-white/20">
      <p>© 2026 Aether AI Development. Todos los derechos reservados.</p>
      <div class="flex space-x-4 mt-4 sm:mt-0">
        <span class="hover:text-white/40 cursor-pointer">Privacy Policy</span>
        <span class="hover:text-white/40 cursor-pointer">Terms of Service</span>
      </div>
    </div>
  </footer>

  <!-- DYNAMIC LOGIC SCRIPT -->
  <script>
    function selectPlan(planId) {
      const dropdown = document.getElementById('selected-plan-dropdown');
      if (dropdown) {
        dropdown.value = planId;
      }
    }

    function toggleFaq(faqId) {
      const ans = document.getElementById(faqId);
      const icon = document.getElementById(faqId + '-icon');
      
      // close all first for clean layout
      const faqs = ['f1', 'f2', 'f3'];
      faqs.forEach(f => {
        if (f !== faqId) {
          const block = document.getElementById(f);
          const blockIcon = document.getElementById(f + '-icon');
          if (block) block.classList.add('hidden');
          if (blockIcon) {
            blockIcon.textContent = '+';
            blockIcon.classList.remove('text-limeAi');
            blockIcon.classList.add('text-white/50');
          }
        }
      });

      if (ans) {
        if (ans.classList.contains('hidden')) {
          ans.classList.remove('hidden');
          if (icon) {
            icon.textContent = '-';
            icon.classList.add('text-limeAi');
            icon.classList.remove('text-white/50');
          }
        } else {
          ans.classList.add('hidden');
          if (icon) {
            icon.textContent = '+';
            icon.classList.remove('text-limeAi');
            icon.classList.add('text-white/50');
          }
        }
      }
    }
  </script>
</body>
</html>`;
  };

  const handleDownload = () => {
    setSuccess(true);
    const code = generateHTMLCode();
    const blob = new Blob([code], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 max-w-4xl mx-auto my-12 text-center glassmorphic relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-lime-ai/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-left">
        <div>
          <div className="inline-flex items-center space-x-1 border border-lime-ai/20 bg-lime-ai/5 px-2 bg-blend-lighten py-0.5 rounded mb-3">
            <Sparkles className="w-3 h-3 text-lime-ai shrink-0" />
            <span className="text-[9px] font-mono text-lime-ai tracking-wider uppercase font-bold">ENTREGA INSTANTÁNEA</span>
          </div>
          <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
            ¿Listo para subirlo a tu cPanel? <FileCode className="w-5 h-5 text-lime-ai" />
          </h3>
          <p className="text-xs text-white/50 font-sans mt-2 max-w-xl leading-relaxed">
            Hemos automatizado la compilación de este diseño para ti. Al presionar el botón de abajo, se descargará un archivo <strong>HTML único</strong> que incluye todo el CSS y código interactivo. El formulario de contacto está pre-configurado para enviar leads directamente a <strong>juan@dejabu.ec</strong> mediante FormSubmit, ¡sin necesidad de programar servidores!
          </p>
        </div>

        <div className="shrink-0">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center space-x-2 bg-[#6600ff] hover:bg-violet-ai/90 text-white font-bold text-xs py-4 px-6 rounded-md hover:scale-105 active:scale-95 transition-all shadow-xl shadow-violet-ai/20 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>DESCARGAR HTML PARA CPANEL</span>
          </button>
        </div>
      </div>

      {success && (
        <div className="mt-4 p-3 bg-lime-ai/15 border border-lime-ai/30 text-lime-ai text-xs rounded-lg flex items-center justify-center space-x-1.5 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>¡Tu archivo <strong>index.html</strong> modular se ha compilado y descargado con éxito! Súbelo directo a tu carpeta <strong>public_html</strong>.</span>
        </div>
      )}
    </div>
  );
}
