import React from 'react';
import { Database, ShieldCheck, Activity, Key, Server, Lock, HardDrive, Check, ArrowUpRight } from 'lucide-react';

interface SolutionIllustrationProps {
  type: 'proteccion-informacion' | 'ciberseguridad-empresarial' | 'continuidad-negocio' | 'gestion-seguridad';
}

export const SolutionIllustration: React.FC<SolutionIllustrationProps> = ({ type }) => {
  if (type === 'proteccion-informacion') {
    return (
      <div className="relative w-full h-48 bg-gradient-to-br from-[#102A56] via-[#101C32] to-[#0D1527] rounded-2xl p-4 overflow-hidden flex flex-col justify-between border border-slate-700/50">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#176BFF_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-[11px] font-mono text-slate-300">WORM Inmutable Vault</span>
          </div>
          <span className="text-[10px] font-mono bg-white/10 text-white px-2 py-0.5 rounded-full border border-white/10">
            AES-256
          </span>
        </div>

        {/* Central Graphic: Server & Cloud Backup Bridge */}
        <div className="relative z-10 grid grid-cols-3 gap-2 items-center my-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 text-center border border-white/15">
            <Server className="w-5 h-5 mx-auto text-blue-300 mb-1" />
            <div className="text-[10px] text-slate-300">Servidor Local</div>
            <div className="text-[9px] font-mono text-emerald-400">Sync Activo</div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="w-full flex items-center">
              <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-emerald-400 to-[#176BFF] relative">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-sm shadow-[#176BFF]" />
              </div>
            </div>
            <span className="text-[9px] text-slate-400 font-mono mt-1">Cifrado E2E</span>
          </div>

          <div className="bg-[#176BFF]/20 backdrop-blur-md rounded-xl p-2.5 text-center border border-[#176BFF]/40">
            <Database className="w-5 h-5 mx-auto text-[#176BFF] mb-1" />
            <div className="text-[10px] text-slate-200">Bóveda Nube</div>
            <div className="text-[9px] font-mono text-emerald-400">Protegido</div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/10">
          <span>Snapshot diferencial</span>
          <span className="font-mono text-white">0% pérdida de datos</span>
        </div>
      </div>
    );
  }

  if (type === 'ciberseguridad-empresarial') {
    return (
      <div className="relative w-full h-48 bg-gradient-to-br from-[#101C32] via-[#0F1E38] to-[#102A56] rounded-2xl p-4 overflow-hidden flex flex-col justify-between border border-slate-700/50">
        <div className="absolute inset-0 bg-[radial-gradient(#176BFF_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-[11px] font-mono text-slate-300">EDR / Antivirus Heurístico</span>
          </div>
          <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
            Escudo Activo
          </span>
        </div>

        {/* Central Shield Pulse */}
        <div className="relative z-10 flex items-center justify-center my-auto py-2">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-20 h-20 rounded-full border border-blue-400/20 animate-ping" />
            <div className="absolute w-16 h-16 rounded-full bg-[#176BFF]/15 border border-[#176BFF]/40" />
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#176BFF] to-blue-500 flex items-center justify-center text-white shadow-lg shadow-[#176BFF]/40">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>
          <div className="ml-4 space-y-1.5 text-left">
            <div className="flex items-center gap-1.5 text-xs text-white">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Contención en &lt; 60s</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Anti-Ransomware</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Filtro Phishing</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/10">
          <span>Telemetría de amenazas</span>
          <span className="font-mono text-emerald-400">99.8% efectividad</span>
        </div>
      </div>
    );
  }

  if (type === 'continuidad-negocio') {
    return (
      <div className="relative w-full h-48 bg-gradient-to-br from-[#0F1E38] via-[#102A56] to-[#101C32] rounded-2xl p-4 overflow-hidden flex flex-col justify-between border border-slate-700/50">
        <div className="absolute inset-0 bg-[radial-gradient(#176BFF_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-[11px] font-mono text-slate-300">Cluster Espejo de Contingencia</span>
          </div>
          <span className="text-[10px] font-mono bg-[#176BFF]/20 text-blue-200 px-2 py-0.5 rounded-full border border-blue-400/30">
            Failover Ready
          </span>
        </div>

        {/* Central Graphic: High Availability Mirror */}
        <div className="relative z-10 my-auto py-2">
          <div className="flex items-center justify-between px-2">
            <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-xl border border-white/15 text-center flex-1">
              <div className="text-[10px] text-slate-400">Sede Principal</div>
              <div className="text-xs font-bold text-white font-mono mt-0.5">Operación Normal</div>
              <div className="w-2 h-2 rounded-full bg-emerald-400 mx-auto mt-1" />
            </div>

            <div className="px-3 flex flex-col items-center">
              <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="text-[9px] font-mono text-slate-400 mt-1">Heartbeat</span>
            </div>

            <div className="bg-[#176BFF]/20 backdrop-blur-md p-2.5 rounded-xl border border-[#176BFF]/30 text-center flex-1">
              <div className="text-[10px] text-slate-400">Entorno Réplica</div>
              <div className="text-xs font-bold text-blue-300 font-mono mt-0.5">Espejo Caliente</div>
              <div className="w-2 h-2 rounded-full bg-blue-400 mx-auto mt-1" />
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/10">
          <span>Tiempo RTO garantizado</span>
          <span className="font-mono text-white">&lt; 35 min reanudación</span>
        </div>
      </div>
    );
  }

  // gestion-seguridad
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-[#101C32] via-[#102A56] to-[#0A162B] rounded-2xl p-4 overflow-hidden flex flex-col justify-between border border-slate-700/50">
      <div className="absolute inset-0 bg-[radial-gradient(#176BFF_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-[11px] font-mono text-slate-300">Gobierno & Identidades MFA</span>
        </div>
        <span className="text-[10px] font-mono bg-white/10 text-white px-2 py-0.5 rounded-full border border-white/10">
          ISO 27001
        </span>
      </div>

      {/* Central Graphic: Key Vault & Roles */}
      <div className="relative z-10 my-auto py-2">
        <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-700/60 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-white">
              <Key className="w-3.5 h-3.5 text-[#176BFF]" />
              <span>Bóveda de Credenciales</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400">Cifrada</span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-white">
              <Lock className="w-3.5 h-3.5 text-blue-400" />
              <span>Doble Factor (MFA / Passkeys)</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400">100% Enforced</span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-white">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Privilegios Mínimos (RBAC)</span>
            </div>
            <span className="text-[10px] font-mono text-blue-300">Activo</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/10">
        <span>Reducción de riesgo humano</span>
        <span className="font-mono text-emerald-400">-85% incidentes</span>
      </div>
    </div>
  );
};
