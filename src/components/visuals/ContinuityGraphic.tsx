import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Database, RefreshCw, CheckCircle2, ArrowRight, Activity, Server, Radio } from 'lucide-react';

interface ContinuityGraphicProps {
  onSelectAction?: (action: string) => void;
}

export const ContinuityGraphic: React.FC<ContinuityGraphicProps> = ({ onSelectAction }) => {
  const [activeElement, setActiveElement] = useState<'prevencion' | 'respaldo' | 'recuperacion'>('respaldo');

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-b from-[#101C32] via-[#102A56] to-[#0A162B] text-white p-6 sm:p-10 lg:p-14 border border-slate-700/60 shadow-2xl">
      {/* Background Architectural Datacenter Graphics */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="datacenter-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#176BFF" strokeWidth="0.8" opacity="0.4" />
              <circle cx="0" cy="0" r="1.5" fill="#176BFF" />
            </pattern>
            <linearGradient id="glow-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#176BFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#102A56" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#datacenter-grid)" />
          <path d="M 0 100 Q 300 200 600 80 T 1200 120" fill="none" stroke="#176BFF" strokeWidth="1.5" opacity="0.3" />
          <path d="M 0 300 Q 400 150 800 350 T 1400 220" fill="none" stroke="#00E5FF" strokeWidth="1.2" opacity="0.2" />
        </svg>
      </div>

      {/* Decorative Ambient Light Cones */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#176BFF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-blue-200 mb-4">
          <Activity className="w-3.5 h-3.5 text-emerald-400" />
          <span>Arquitectura de Continuidad Integral</span>
        </div>

        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 font-display">
          Preparados para lo <span className="italic-serif text-blue-300">inesperado.</span>
        </h3>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Porque proteger la información también significa proteger el futuro de tu empresa.
        </p>
      </div>

      {/* 3 Core Interactive Floating Pillars: Prevención, Respaldo, Recuperación */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Pillar 1: Prevención */}
        <motion.div
          whileHover={{ y: -4 }}
          onClick={() => setActiveElement('prevencion')}
          className={`cursor-pointer rounded-2xl p-6 transition-all border ${
            activeElement === 'prevencion'
              ? 'bg-white/15 backdrop-blur-xl border-blue-400/80 shadow-lg shadow-[#176BFF]/20 ring-2 ring-[#176BFF]/30'
              : 'bg-slate-900/60 backdrop-blur-md border-slate-700/60 hover:bg-slate-900/80'
          }`}
        >
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300 mb-4">
            <Shield className="w-6 h-6 text-blue-300" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-lg font-bold text-white font-display">Prevención</h4>
            <span className="text-xs font-mono text-emerald-400">24/7 Shield</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            Monitoreo perimetral, filtrado heurístico y control de accesos para neutralizar intrusiones antes del impacto.
          </p>
          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
            <span>Detección temprana</span>
            <span className="font-mono text-white font-semibold">&lt; 60 segundos</span>
          </div>
        </motion.div>

        {/* Pillar 2: Respaldo */}
        <motion.div
          whileHover={{ y: -4 }}
          onClick={() => setActiveElement('respaldo')}
          className={`cursor-pointer rounded-2xl p-6 transition-all border ${
            activeElement === 'respaldo'
              ? 'bg-white/15 backdrop-blur-xl border-[#176BFF] shadow-xl shadow-[#176BFF]/30 ring-2 ring-[#176BFF]/40'
              : 'bg-slate-900/60 backdrop-blur-md border-slate-700/60 hover:bg-slate-900/80'
          }`}
        >
          <div className="w-12 h-12 rounded-xl bg-[#176BFF]/30 border border-[#176BFF]/50 flex items-center justify-center text-white mb-4">
            <Database className="w-6 h-6 text-[#176BFF]" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-lg font-bold text-white font-display">Respaldo</h4>
            <span className="text-xs font-mono text-emerald-400">WORM Inmutable</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            Copias blindadas locales y replicadas en la nube. Protección anti-borrado que ningún malware puede alterar.
          </p>
          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
            <span>Objetivo RPO</span>
            <span className="font-mono text-white font-semibold">Cero pérdida crítica</span>
          </div>
        </motion.div>

        {/* Pillar 3: Recuperación */}
        <motion.div
          whileHover={{ y: -4 }}
          onClick={() => setActiveElement('recuperacion')}
          className={`cursor-pointer rounded-2xl p-6 transition-all border ${
            activeElement === 'recuperacion'
              ? 'bg-white/15 backdrop-blur-xl border-blue-400/80 shadow-lg shadow-[#176BFF]/20 ring-2 ring-[#176BFF]/30'
              : 'bg-slate-900/60 backdrop-blur-md border-slate-700/60 hover:bg-slate-900/80'
          }`}
        >
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 mb-4">
            <RefreshCw className="w-6 h-6 text-emerald-400" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-lg font-bold text-white font-display">Recuperación</h4>
            <span className="text-xs font-mono text-emerald-400">RTO Ágil</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            Protocolos probados y entornos espejo para levantar sistemas críticos en minutos, asegurando la continuidad.
          </p>
          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
            <span>Reanudación operativa</span>
            <span className="font-mono text-white font-semibold">&lt; 35 minutos</span>
          </div>
        </motion.div>
      </div>

      {/* Simulated Infrastructure Rack Telemetry Footer Strip */}
      <div className="relative z-10 mt-8 pt-6 border-t border-white/10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Server className="w-4 h-4 text-[#176BFF]" />
            <span>Infraestructura Híbrida Certificada</span>
          </div>
          <span>·</span>
          <span>Cifrado AES-256</span>
          <span>·</span>
          <span>Auditabilidad ISO 27001</span>
        </div>

        <button
          onClick={() => onSelectAction && onSelectAction('continuidad-negocio')}
          className="text-xs text-blue-300 hover:text-white font-medium flex items-center gap-1 transition-colors"
        >
          <span>Conocer protocolo de recuperación</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
