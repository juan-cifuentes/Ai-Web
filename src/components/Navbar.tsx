import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onStartProjectClick: () => void;
}

export default function Navbar({ onStartProjectClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Proceso', href: '#proceso' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Planes', href: '#planes' },
    { name: 'Preguntas Frecuentes', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphic border-b border-white/5 bg-void/80 backdrop-blur-xl transition-all duration-300">
      <div className="layout-container py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="flex items-center space-x-2 group">
          <span className="font-display text-2xl font-extrabold tracking-tighter text-white">
            A<span className="text-lime-ai">N</span>N
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest bg-violet-ai/20 text-violet-ai border border-violet-ai/30 px-2 py-0.5 rounded-full font-mono">
            Webs IA
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-white/60 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button & Menu Trigger */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onStartProjectClick}
            className="hidden md:flex items-center space-x-2 bg-violet-ai hover:bg-violet-ai/90 text-white font-semibold text-xs py-2.5 px-6 rounded-md hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-violet-ai/20"
          >
            <span>START PROJECT</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/80 hover:text-white p-2 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glassmorphic border-t border-white/5 bg-void/95 flex flex-col py-6 px-5 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-white/75 hover:text-white text-lg font-medium py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onStartProjectClick();
            }}
            className="w-full flex items-center justify-center space-x-2 bg-violet-ai hover:bg-violet-ai/90 text-white font-semibold py-3 px-6 rounded-md transition-all text-sm"
          >
            <span>START PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </nav>
  );
}
