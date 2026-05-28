import React, { useState, useEffect } from 'react';
import { Mail, Phone, Send, CheckSquare, RefreshCw, User, MessageSquare, Database } from 'lucide-react';
import { ContactFormInput } from '../types';
import { initAuth, googleSignIn, logout, appendToGoogleSheet } from '../lib/googleSheetsService';
import { User as FirebaseUser } from 'firebase/auth';

interface ContactFormProps {
  selectedPlan: string;
  prefilledDetails: string;
  onClearPrefilled: () => void;
}

export default function ContactForm({ selectedPlan, prefilledDetails, onClearPrefilled }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    plan: 'profesional',
    details: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Google Sheets state
  const [googleUser, setGoogleUser] = useState<FirebaseUser | null>(null);
  const [googleToken, setGoogleToken] = useState<string | null>(null);
  const [isSheetsLoading, setIsSheetsLoading] = useState(false);
  const [sheetsSuccessMessage, setSheetsSuccessMessage] = useState('');
  const [sheetsErrorMsg, setSheetsErrorMsg] = useState('');
  const [sheetsAppendedStatus, setSheetsAppendedStatus] = useState<boolean | null>(null);

  // Google Apps Script state
  const [appsScriptUrl, setAppsScriptUrl] = useState(() => {
    const stored = localStorage.getItem('apps_script_url');
    const oldUrl = 'https://script.google.com/macros/s/AKfycbynXBqL69UYfAlo2gsAB8tfnWu9tFc0JtT5ieByM8Jm5TwAXlHhATAvWM8QJZQIbMn8jQ/exec';
    if (stored === oldUrl) {
      localStorage.removeItem('apps_script_url');
      return (import.meta as any).env?.VITE_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbwXKFw3auGPldk6OLtqVLYXBhfuASiJNHTGyhQUHQUtcn1CJjzuGZ-UUco7h0eUm4tQFA/exec';
    }
    return stored || (import.meta as any).env?.VITE_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbwXKFw3auGPldk6OLtqVLYXBhfuASiJNHTGyhQUHQUtcn1CJjzuGZ-UUco7h0eUm4tQFA/exec';
  });
  const [gasAppendedStatus, setGasAppendedStatus] = useState<boolean | null>(null);
  const [gasErrorMsg, setGasErrorMsg] = useState('');
  const [gasSavedSuccessMsg, setGasSavedSuccessMsg] = useState('');

  // Initialize Auth state listener
  useEffect(() => {
    const unsubscribe = initAuth(
      (user, token) => {
        setGoogleUser(user);
        setGoogleToken(token);
      },
      () => {
        setGoogleUser(null);
        setGoogleToken(null);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    setIsSheetsLoading(true);
    setSheetsErrorMsg('');
    try {
      const result = await googleSignIn();
      if (result) {
        setGoogleUser(result.user);
        setGoogleToken(result.accessToken);
        setSheetsSuccessMessage('¡Google Sheets conectado con éxito!');
        setTimeout(() => setSheetsSuccessMessage(''), 4000);
      }
    } catch (err: any) {
      console.error(err);
      setSheetsErrorMsg(err?.message || 'Error al conectar con Google Sheets.');
    } finally {
      setIsSheetsLoading(false);
    }
  };

  const handleGoogleSignOut = async () => {
    try {
      await logout();
      setGoogleUser(null);
      setGoogleToken(null);
      setSheetsAppendedStatus(null);
    } catch (err) {
      console.error(err);
    }
  };

  // Sincronizar planes seleccionados externamente y prescripciones de IA
  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({ ...prev, plan: selectedPlan }));
    }
  }, [selectedPlan]);

  useEffect(() => {
    if (prefilledDetails) {
      setFormData((prev) => ({ ...prev, details: prefilledDetails }));
    }
  }, [prefilledDetails]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSheetsErrorMsg('');
    setSheetsAppendedStatus(null);
    setGasErrorMsg('');
    setGasAppendedStatus(null);
    setSuccess(false);

    try {
      // 1. Submit to FormSubmit ajax/juan@dejabu.ec configuration
      const formBody = new FormData();
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('phone', formData.phone);
      formBody.append('plan', formData.plan);
      formBody.append('details', formData.details);
      formBody.append('_captcha', 'false');
      formBody.append('_honey', (e.target as any)._honey?.value || '');

      const response = await fetch('https://formsubmit.co/ajax/juan@dejabu.ec', {
        method: 'POST',
        body: formBody,
      });

      if (!response.ok) {
        throw new Error('Hubo un error con el servidor.');
      }

      await response.json();
      
      // 2. Append to Google Sheets if token exists
      if (googleToken) {
        try {
          await appendToGoogleSheet(googleToken, formData);
          setSheetsAppendedStatus(true);
        } catch (sheetErr: any) {
          console.error(sheetErr);
          setSheetsErrorMsg(`Guardado en correo juan@dejabu.ec, pero falló carga a Sheets: ${sheetErr.message || sheetErr}`);
          setSheetsAppendedStatus(false);
        }
      }

      // 3. Append to Google Sheets via Google Apps Script if URL exists
      if (appsScriptUrl) {
        try {
          const payload = {
            name: formData.name,
            nombre: formData.name,
            email: formData.email,
            phone: formData.phone,
            telefono: formData.phone,
            plan: formData.plan,
            details: formData.details,
            detalles: formData.details
          };

          // We use Content-Type: text/plain to bypass browser CORS preflight requests
          await fetch(appsScriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'text/plain;charset=utf-8'
            },
            body: JSON.stringify(payload)
          });

          setGasAppendedStatus(true);
        } catch (gasErr: any) {
          console.error("Error al guardar en Google Apps Script:", gasErr);
          setGasErrorMsg(`Guardado en FormSubmit pero falló Apps Script: ${gasErr.message || gasErr}`);
          setGasAppendedStatus(false);
        }
      }

      setSuccess(true);
      // Clear inputs after success, keep plan set to profesional
      setFormData({
        name: '',
        email: '',
        phone: '',
        plan: 'profesional',
        details: '',
      });
      onClearPrefilled();
    } catch (err: any) {
      console.error(err);
      setErrorMessage('Upps, no logramos conectar con el servidor de correos instantáneos. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="relative py-24 md:py-32 bg-[#050913] border-t border-white/5">
      {/* Decorative fluorescent light */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-lime-ai/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-violet-ai/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="layout-container relative z-10">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-mono text-xs text-lime-ai font-bold tracking-widest uppercase bg-lime-ai/10 border border-lime-ai/20 px-3 py-1 rounded-full">
            COTIZAR AHORA
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-6 mb-4">
            Empecemos tu Sitio Web
          </h2>
          <p className="font-sans text-base text-[#cbc3da] leading-[1.6]">
            Envíanos un mensaje directo. Responderemos en menos de 2 horas con tu fecha exacta de entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Info Side (juan@dejabu.ec details) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8 bg-white/[0.01] border border-white/5 rounded-2xl p-8 glassmorphic">
            <div className="space-y-6 text-left">
              <h3 className="font-display text-xl font-bold text-white mb-2">Canales Directos</h3>
              <p className="text-sm font-sans text-[#cbc3da] leading-relaxed">
                ¿Prefieres conversar por correo o necesitas enviar material de marca adjunto como logotipos o brief PDF? Contáctanos de forma inmediata.
              </p>

              <div className="space-y-4 pt-4">
                <a
                  href="mailto:juan@dejabu.ec"
                  className="flex items-center space-x-3.5 text-[#cebdff] hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded bg-[#cebdff]/10 border border-[#cebdff]/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-wider text-white/40 uppercase">CORREO DE VENTAS</p>
                    <p className="font-sans font-medium text-sm group-hover:underline">juan@dejabu.ec</p>
                  </div>
                </a>

                <div className="flex items-center space-x-3.5 text-white/85">
                  <div className="w-10 h-10 rounded bg-lime-ai/10 border border-lime-ai/20 flex items-center justify-center shrink-0 text-lime-ai">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-wider text-white/40 uppercase">SOPORTE 24/7</p>
                    <p className="font-sans font-medium text-sm">+593 99 999 9999</p>
                  </div>
                </div>
              </div>

              {/* Live Testing Google Sheets Connection Widget */}
              <div className="pt-6 border-t border-white/5 text-left space-y-4">
                <span className="text-[10px] font-mono text-lime-ai font-bold uppercase tracking-wider block flex items-center gap-1">
                  <Database className="w-3 h-3 text-lime-ai shrink-0" /> INTEGRACIÓN GOOGLE SHEETS
                </span>
                
                <div className="space-y-4">
                  {/* Opción A: Google Apps Script Web App */}
                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold font-mono text-white/80">OPCIÓN A: APPS SCRIPT (Recomendado)</span>
                      <span className="text-[8px] font-mono text-lime-ai bg-lime-ai/10 border border-lime-ai/20 px-1.5 py-0.5 rounded uppercase font-bold">Sin Login</span>
                    </div>
                    <p className="text-xs text-[#cbc3da] font-sans leading-relaxed">
                      Sube prospectos en tiempo real sin obligar a tus visitas a iniciar sesión de Google.
                    </p>
                    <div>
                      <label className="block text-[9px] font-mono text-white/40 mb-1.5 uppercase">URL DE WEB APP DE GOOGLE</label>
                      <input
                        type="text"
                        value={appsScriptUrl}
                        onChange={(e) => {
                          setAppsScriptUrl(e.target.value);
                          localStorage.setItem('apps_script_url', e.target.value);
                        }}
                        placeholder="https://script.google.com/macros/s/.../exec"
                        className="w-full bg-black/40 border border-white/10 rounded px-2 py-2 text-xs text-white font-mono placeholder-white/20 focus:border-lime-ai focus:outline-none transition-all"
                      />
                    </div>
                    {appsScriptUrl ? (
                      <div className="flex items-center gap-1.5 text-[9px] font-mono text-lime-ai">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-ai animate-pulse" />
                        <span>Apps Script configurado correctamente</span>
                      </div>
                    ) : (
                      <div className="text-[10px] font-sans text-amber-300/75 leading-relaxed">
                        ⚠️ Inserta la URL de tu Web App arriba para registrar tus leads directamente.
                      </div>
                    )}
                  </div>

                  {/* Opción B: API directa OAuth */}
                  <div className="bg-white/[0.01] border border-white/5 rounded-xl p-4 space-y-3">
                    <span className="text-[10px] font-bold font-mono text-white/80 block">OPCIÓN B: API DIRECTA OAUTH</span>
                    <p className="text-xs text-[#cbc3da] font-sans leading-relaxed">
                      Especial para pruebas rápidas de conexión directa del propietario desde el navegador.
                    </p>

                    {googleUser ? (
                      <div className="bg-lime-ai/5 border border-lime-ai/20 rounded-xl p-3 space-y-2">
                        <div className="flex items-center space-x-2 justify-between">
                          <div className="flex items-center space-x-2 overflow-hidden">
                            <span className="w-1.5 h-1.5 rounded-full bg-lime-ai animate-pulse shrink-0" />
                            <span className="text-xs font-semibold text-white truncate block max-w-[130px]">
                              {googleUser.email}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={handleGoogleSignOut}
                            className="text-[9px] text-red-400 hover:text-red-300 underline cursor-pointer shrink-0"
                          >
                            Cerrar
                          </button>
                        </div>

                        <a
                          href="https://docs.google.com/spreadsheets/d/15d4gh2gsSPK9KdddxPlA836VheJ3KCdzMWqrmbSlMoQ/edit"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center space-x-1 text-[10px] font-mono font-bold text-lime-ai hover:underline"
                        >
                          <span>➔ VER HOJA EN VIVO</span>
                        </a>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <button
                          type="button"
                          onClick={handleGoogleSignIn}
                          disabled={isSheetsLoading}
                          className="w-full bg-[#111420] border border-white/10 hover:border-lime-ai/30 text-white font-mono text-[9px] font-bold py-2.5 px-3 rounded flex items-center justify-center space-x-2 transition-all cursor-pointer hover:bg-white/[0.02]"
                        >
                          {isSheetsLoading ? (
                            <span>CONECTANDO...</span>
                          ) : (
                            <span>CONECTAR OAUTH DIRECTO</span>
                          )}
                        </button>
                        {sheetsSuccessMessage && (
                          <p className="text-[10px] text-lime-ai font-mono leading-tight">{sheetsSuccessMessage}</p>
                        )}
                        {sheetsErrorMsg && (
                          <p className="text-[10px] text-red-400 font-mono leading-tight">{sheetsErrorMsg}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 text-left">
              <span className="text-[10px] font-mono text-lime-ai font-bold uppercase tracking-wider">ENTREGA SEGURA</span>
              <p className="text-xs text-white/40 font-sans mt-1 leading-relaxed">
                Todos los datos transmitidos a través de este canal de ventas son gobernados de forma confidencial para el diseño y entrega en 48 horas.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-8 bg-white/[0.03] border border-white/5 rounded-2xl p-6 sm:p-8 glassmorphic relative">
            
            {success ? (
              <div className="absolute inset-0 bg-void/95 flex flex-col items-center justify-center p-8 rounded-2xl z-20 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-lime-ai/10 border border-lime-ai/30 text-lime-ai flex items-center justify-center mb-6">
                  <Send className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-white mb-3">¡Mensaje Enviado con Éxito!</h3>
                <p className="text-sm font-sans text-[#cbc3da] max-w-md mb-6 leading-relaxed">
                  Tu solicitud ha sido transmitida de forma segura a <strong>juan@dejabu.ec</strong>. Estamos asignando tu diseñador y redactores de inmediato para empezar el proyecto.
                </p>

                {sheetsAppendedStatus === true && (
                  <div className="bg-lime-ai/10 border border-lime-ai/20 text-lime-ai text-xs font-mono py-2.5 px-4 rounded-lg mb-2 max-w-md flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-ai animate-pulse" />
                    <span>¡Fila añadida vía Google API (OAuth)!</span>
                  </div>
                )}
                
                {gasAppendedStatus === true && (
                  <div className="bg-lime-ai/10 border border-lime-ai/20 text-lime-ai text-xs font-mono py-2.5 px-4 rounded-lg mb-4 max-w-md flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-ai animate-pulse" />
                    <span>¡Fila añadida vía Google Apps Script!</span>
                  </div>
                )}

                {sheetsAppendedStatus === false && (
                  <div className="bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-mono py-2.5 px-4 rounded-lg mb-2 max-w-md">
                    <span>Ocurrió un error al cargar vía API Google (OAuth).</span>
                  </div>
                )}

                {gasAppendedStatus === false && (
                  <div className="bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-mono py-2.5 px-4 rounded-lg mb-4 max-w-md">
                    <span>{gasErrorMsg || 'Error al cargar vía Google Apps Script.'}</span>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setSuccess(false);
                    setSheetsAppendedStatus(null);
                    setGasAppendedStatus(null);
                  }}
                  className="bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-xs py-2.5 px-6 rounded transition-all cursor-pointer mt-2"
                >
                  Volver al Formulario
                </button>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              {/* FormSubmit configurations */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                className="absolute opacity-0 pointer-events-none w-0 h-0"
                style={{ position: 'absolute', top: 0, left: 0, zIndex: -10 }}
                placeholder="Spam prevention honeypot"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" /> Nombre Completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/30 border-b border-white/20 focus:border-lime-ai py-3 px-1 text-white text-sm outline-none transition-all duration-300 rounded"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" /> Correo Electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="ej. contacto@tuempresa.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/30 border-b border-white/20 focus:border-lime-ai py-3 px-1 text-white text-sm outline-none transition-all duration-300 rounded"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" /> Teléfono / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="ej. +593 999 999 999"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/30 border-b border-white/20 focus:border-lime-ai py-3 px-1 text-white text-sm outline-none transition-all duration-300 rounded"
                  />
                </div>

                {/* Plan dropdown selection */}
                <div>
                  <label htmlFor="plan" className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-2 flex items-center gap-1.5">
                    <CheckSquare className="w-3.5 h-3.5" /> Plan Deseado
                  </label>
                  <select
                    id="plan"
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    className="w-full bg-[#12141c] border-b border-white/20 focus:border-lime-ai py-3 px-2 text-white text-sm outline-none transition-all duration-300 rounded cursor-pointer"
                  >
                    <option value="esencial">Plan Esencial — $299</option>
                    <option value="profesional">Plan Profesional — $599 (Recomendado)</option>
                    <option value="enterprise">Plan Enterprise — Consultar</option>
                  </select>
                </div>

              </div>

              {/* Details Brief */}
              <div>
                <label htmlFor="details" className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-2 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" /> Detalles del Proyecto / Idea de Negocio
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  placeholder="ej. Necesito promocionar mis servicios de consultoría legal rápida para pymes, incluir agendamiento de citas telefónicas y pasarela de pago inicial..."
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full bg-black/30 border-b border-white/20 focus:border-lime-ai py-3 px-1 text-white text-sm outline-none transition-all duration-300 rounded resize-none"
                />
                {prefilledDetails && (
                  <p className="text-[10px] text-lime-ai font-mono mt-2 animate-pulse">
                    * Tu estructura recomendada por IA ha sido precargada automáticamente.
                  </p>
                )}
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded">
                  {errorMessage}
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-lime-ai hover:bg-lime-ai/90 disabled:bg-lime-ai/40 text-void font-extrabold text-xs py-4 px-8 rounded hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg shadow-lime-ai/20"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-void mr-2" />
                    <span>ENVIANDO...</span>
                  </>
                ) : (
                  <>
                    <span>ENVIAR SOLICITUD</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
