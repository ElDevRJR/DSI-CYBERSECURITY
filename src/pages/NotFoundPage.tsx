import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Home, Server, Mail } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-blue-50 text-[#176BFF] flex items-center justify-center mx-auto border border-blue-100 shadow-sm">
          <ShieldAlert className="w-10 h-10 text-[#176BFF]" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
            Error 404 · Ruta no encontrada
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101C32] font-display">
            Página fuera de perímetro
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
            La dirección solicitada no existe o ha sido reubicada dentro de nuestra arquitectura web corporativa.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3.5 bg-[#176BFF] hover:bg-[#1258d4] text-white font-semibold text-sm rounded-xl transition-all shadow-md shadow-[#176BFF]/20 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Volver al Inicio</span>
          </Link>

          <Link
            to="/soluciones"
            className="w-full sm:w-auto px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-[#101C32] font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <Server className="w-4 h-4" />
            <span>Ver Soluciones</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
