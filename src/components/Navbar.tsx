import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenEvaluation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEvaluation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Soluciones', path: '/soluciones' },
    { label: 'Sectores', path: '/sectores' },
    { label: 'Contacto', path: '/contacto' },
  ];

  const isLinkActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-20">
        <Link
          to="/"
          className="flex items-center gap-2.5 text-slate-900 font-extrabold tracking-tight whitespace-nowrap shrink-0 group"
        >
          <div className="w-9 h-9 rounded-xl bg-[#176BFF] text-white flex items-center justify-center shadow-md shadow-[#176BFF]/25 group-hover:scale-105 transition-transform">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-display tracking-tight text-[#101C32]">
            DSI <span className="text-[#176BFF] font-semibold">CYBERSECURITY</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => {
            const active = isLinkActive(link.path);
            return (
              <Link
                key={link.label}
                to={link.path}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                  active
                    ? 'text-[#176BFF] font-bold'
                    : 'text-slate-600 hover:text-[#176BFF]'
                }`}
              >
                <span>{link.label}</span>
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#176BFF] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenEvaluation}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#176BFF] hover:bg-[#1258d4] rounded-xl transition-all shadow-md shadow-[#176BFF]/20 whitespace-nowrap shrink-0 hover:shadow-lg active:scale-98 cursor-pointer"
          >
            Solicitar evaluación
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base py-1.5 transition-colors ${
                    active ? 'text-[#176BFF] font-bold' : 'text-slate-700 hover:text-[#176BFF]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEvaluation();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-[#176BFF] rounded-xl shadow-md cursor-pointer"
            >
              Solicitar evaluación
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
