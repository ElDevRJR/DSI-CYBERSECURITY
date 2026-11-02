import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HardDrive, Activity, Server, Database, CheckCircle, RefreshCw, Lock, Zap } from 'lucide-react';

export const HeroTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'backup' | 'threats' | 'continuity'>('backup');
  const [syncProgress, setSyncProgress] = useState(100);
  const [isSimulating, setIsSimulating] = useState(false);

  const runSimulation = () => {
    setIsSimulating(true);
    setSyncProgress(35);
    const interval = setInterval(() => {
      setSyncProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSimulating(false);
          return 100;
        }
        return prev + 15;
      });
    }, 200);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Background Soft Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#176BFF]/20 via-[#102A56]/10 to-transparent rounded-3xl blur-2xl -z-10" />

      {/* Main Terminal Frame */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#101C32] text-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-700/60 overflow-hidden"
      >
        {/* Terminal Top Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-mono text-slate-400 tracking-wide ml-2">dsi-sentinel-gateway</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
            <span className="text-xs font-medium text-emerald-400">Protección Activa</span>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 rounded-xl my-4 border border-slate-800">
          <button
            onClick={() => setActiveTab('backup')}
            className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'backup'
                ? 'bg-[#176BFF] text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Respaldo Inmutable
          </button>
          <button
            onClick={() => setActiveTab('threats')}
            className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'threats'
                ? 'bg-[#176BFF] text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Defensa Activa
          </button>
          <button
            onClick={() => setActiveTab('continuity')}
            className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'continuity'
                ? 'bg-[#176BFF] text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Continuidad RTO
          </button>
        </div>

        {/* Dynamic Display Area */}
        {activeTab === 'backup' && (
          <div className="space-y-4">
            <div className="bg-slate-900/60 rounded-2xl p-4 border border-slate-800/80">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#176BFF]" />
                  <span className="text-xs font-semibold text-slate-200">Bóveda Cloud Híbrida</span>
                </div>
                <span className="text-xs font-mono text-emerald-400">Inmutable (WORM)</span>
              </div>

              {/* Progress bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Replicación síncrona geo-distribuida</span>
                  <span className="font-mono text-white">{syncProgress}% completado</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#176BFF] to-emerald-400 h-full rounded-full transition-all duration-300"
                    style={{ width: `${syncProgress}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-800/60 text-center">
                <div>
                  <div className="text-[10px] text-slate-400">Volumen Protegido</div>
                  <div className="text-xs font-bold text-white font-mono">1.84 TB</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Retención Legal</div>
                  <div className="text-xs font-bold text-white font-mono">365 Días</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Algoritmo</div>
                  <div className="text-xs font-bold text-[#176BFF] font-mono">AES-256-GCM</div>
                </div>
              </div>
            </div>

            {/* Live Chart Line */}
            <div className="bg-slate-900/40 rounded-2xl p-3 border border-slate-800/60">
              <div className="flex justify-between items-center mb-1 text-xs">
                <span className="text-slate-400">Integridad de bloques de copia</span>
                <span className="text-emerald-400 font-mono text-[11px]">100% verificado</span>
              </div>
              <svg className="w-full h-12" viewBox="0 0 300 50">
                <defs>
                  <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#176BFF" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#176BFF" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 35 Q30 25, 60 30 T120 20 T180 28 T240 15 T300 22 L300 50 L0 50 Z"
                  fill="url(#blueGradient)"
                />
                <path
                  d="M0 35 Q30 25, 60 30 T120 20 T180 28 T240 15 T300 22"
                  fill="none"
                  stroke="#176BFF"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        )}

        {activeTab === 'threats' && (
          <div className="space-y-4">
            <div className="bg-slate-900/60 rounded-2xl p-4 border border-slate-800/80">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-slate-200">Escudo Perimetral & EDR</span>
                </div>
                <span className="text-xs font-mono text-slate-400">Monitoreo 24/7/365</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/50">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-slate-300">Intento de fuerza bruta RDP</span>
                  </div>
                  <span className="text-slate-400 font-mono">Bloqueado (0.2s)</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/50">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-slate-300">Adjunto con macro maliciosa en correo</span>
                  </div>
                  <span className="text-slate-400 font-mono">Cuarentena</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/60">
                <div className="text-[11px] text-slate-400">Endpoints Cubiertos</div>
                <div className="text-base font-bold text-white font-mono mt-0.5">148 / 148</div>
              </div>
              <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/60">
                <div className="text-[11px] text-slate-400">Vulnerabilidades Críticas</div>
                <div className="text-base font-bold text-emerald-400 font-mono mt-0.5">0 detectadas</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'continuity' && (
          <div className="space-y-4">
            <div className="bg-slate-900/60 rounded-2xl p-4 border border-slate-800/80">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#176BFF]" />
                  <span className="text-xs font-semibold text-slate-200">Recuperación Operativa (BCP)</span>
                </div>
                <span className="text-xs font-mono text-emerald-400">Disponibilidad 99.99%</span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/40">
                  <div className="text-[10px] text-slate-400">RPO (Máx. pérdida datos)</div>
                  <div className="text-sm font-bold text-white font-mono">&lt; 5 minutos</div>
                </div>
                <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/40">
                  <div className="text-[10px] text-slate-400">RTO (Reanudación total)</div>
                  <div className="text-sm font-bold text-emerald-400 font-mono">&lt; 35 minutos</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-300 pt-2 border-t border-slate-800">
                <span>Cluster de respaldo en caliente (Failover)</span>
                <span className="text-emerald-400 font-mono font-semibold">Listo</span>
              </div>
            </div>

            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className="w-full py-2 px-3 bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white rounded-xl text-xs font-medium border border-slate-700/80 transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin text-[#176BFF]' : ''}`} />
              <span>{isSimulating ? 'Validando contingencia...' : 'Ejecutar Test de Recuperación'}</span>
            </button>
          </div>
        )}

        {/* Bottom Status Row */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-[#176BFF]" />
            <span>Infraestructura Certificada</span>
          </div>
          <span className="font-mono">Latencia nodo: 12ms</span>
        </div>
      </motion.div>

      {/* Floating Card 1 (Top Right) - Inspired by AdScale floating cards */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="hidden sm:flex absolute -top-5 -right-5 bg-white text-slate-900 rounded-2xl p-3.5 shadow-xl border border-slate-200/90 items-center gap-3 z-20 max-w-[240px]"
      >
        <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <div className="text-xs font-bold text-[#101C32]">Respaldo Inmutable</div>
          <div className="text-[11px] text-slate-500">1.8 TB blindados contra ransomware</div>
        </div>
      </motion.div>

      {/* Floating Card 2 (Bottom Left) - Inspired by AdScale Shopify badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="hidden sm:flex absolute -bottom-5 -left-5 bg-white text-slate-900 rounded-2xl p-3.5 shadow-xl border border-slate-200/90 items-center gap-3 z-20 max-w-[250px]"
      >
        <div className="w-9 h-9 rounded-xl bg-[#176BFF]/10 text-[#176BFF] flex items-center justify-center shrink-0">
          <Zap className="w-5 h-5 text-[#176BFF]" />
        </div>
        <div>
          <div className="text-xs font-bold text-[#101C32]">Continuidad Activa</div>
          <div className="text-[11px] text-slate-500">RPO 0 seg · RTO &lt; 35 min garantizado</div>
        </div>
      </motion.div>
    </div>
  );
};
