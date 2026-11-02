import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, ArrowRight, CheckCircle2, Linkedin, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
  onOpenEvaluation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEvaluation }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter / Advisory Strip */}
        <div className="bg-[#F5F7FA] rounded-3xl p-8 sm:p-10 mb-16 border border-slate-200/80 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#176BFF]">Boletín de Continuidad & Ciberseguridad</span>
            <h4 className="text-xl sm:text-2xl font-bold text-[#101C32] mt-1 mb-2 font-display">
              Alertas de amenazas críticas y mejores prácticas
            </h4>
            <p className="text-sm text-slate-500">
              Reciba análisis periódicos sin spam sobre prevención de ransomware, normativas y resiliencia tecnológica.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-5 py-3 rounded-xl border border-emerald-200">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm font-medium">Suscripción confirmada. ¡Gracias!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md w-full">
                <input
                  type="email"
                  required
                  placeholder="tu.correo@empresa.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#176BFF] text-slate-800 placeholder-slate-400 min-w-[260px]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#102A56] hover:bg-[#176BFF] text-white text-sm font-medium rounded-xl transition-all whitespace-nowrap cursor-pointer"
                >
                  Suscribirme
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200/80">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 text-slate-900 font-extrabold tracking-tight">
              <div className="w-8 h-8 rounded-xl bg-[#176BFF] text-white flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-display tracking-tight text-[#101C32]">
                DSI <span className="text-[#176BFF] font-semibold">CYBERSECURITY</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Especialistas en ciberseguridad empresarial, protección de información y continuidad de negocio. Protegemos lo que hace posible la operación de su organización.
            </p>
            <div className="pt-2 flex items-center gap-3 text-slate-400">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center hover:text-[#176BFF] hover:border-[#176BFF]/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center hover:text-[#176BFF] hover:border-[#176BFF]/50 transition-colors"
                aria-label="X / Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center hover:text-[#176BFF] hover:border-[#176BFF]/50 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Soluciones */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#101C32]">Soluciones</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/soluciones/proteccion-informacion" className="hover:text-[#176BFF] transition-colors">
                  Protección de información
                </Link>
              </li>
              <li>
                <Link to="/soluciones/ciberseguridad" className="hover:text-[#176BFF] transition-colors">
                  Ciberseguridad empresarial
                </Link>
              </li>
              <li>
                <Link to="/soluciones/continuidad" className="hover:text-[#176BFF] transition-colors">
                  Continuidad de negocio
                </Link>
              </li>
              <li>
                <Link to="/soluciones/gestion-seguridad" className="hover:text-[#176BFF] transition-colors">
                  Gestión de seguridad
                </Link>
              </li>
            </ul>
          </div>

          {/* Navegación Corporativa */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#101C32]">Navegación</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#176BFF] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-[#176BFF] transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/soluciones" className="hover:text-[#176BFF] transition-colors">
                  Soluciones
                </Link>
              </li>
              <li>
                <Link to="/sectores" className="hover:text-[#176BFF] transition-colors">
                  Sectores Atendidos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-[#176BFF] transition-colors">
                  Contacto Directo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto & Solicitud */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#101C32]">Evaluación</h5>
            <p className="text-xs text-slate-500 leading-relaxed">
              Solicite un análisis de postura de seguridad y tiempos de recuperación para su infraestructura.
            </p>
            <button
              onClick={onOpenEvaluation}
              className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-[#176BFF] hover:text-[#1258d4] group cursor-pointer"
            >
              <span>Agendar diagnóstico</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} DSI CYBERSECURITY. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacidad de la Información</span>
            <span>·</span>
            <span>Términos del Servicio</span>
            <span>·</span>
            <span>Cumplimiento Normativo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
