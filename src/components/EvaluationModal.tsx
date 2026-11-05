import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, CheckCircle2, Calendar, Building2, Server, ArrowRight } from 'lucide-react';

interface EvaluationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSolution?: string;
}

export const EvaluationModal: React.FC<EvaluationModalProps> = ({
  isOpen,
  onClose,
  initialSolution = 'general'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    solution: initialSolution,
    companySize: '11-50',
    criticalSystems: '',
    urgency: 'planificado'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#101C32]/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden z-10"
          >
            <div className="px-6 py-5 sm:px-8 bg-gradient-to-b from-[#F5F7FA] to-white border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#176BFF]/10 text-[#176BFF] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5 text-[#176BFF]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#101C32] font-display">Solicitar Evaluación Técnica</h3>
                  <p className="text-xs text-slate-500">Diagnóstico de ciberseguridad y continuidad sin compromiso</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {isSubmitted ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#101C32] mb-2 font-display">Solicitud Registrada Exitosamente</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                    Un especialista senior de <strong className="text-[#102A56]">DSI CYBERSECURITY</strong> revisará la información de <strong>{formData.company || 'su empresa'}</strong> y le contactará en menos de 24 horas hábiles para coordinar el diagnóstico.
                  </p>

                  <div className="bg-[#F5F7FA] rounded-2xl p-4 text-left mb-6 border border-slate-200/60 text-xs text-slate-600 space-y-2">
                    <div className="flex justify-between pb-1 border-b border-slate-200/50">
                      <span className="font-semibold text-slate-700">Contacto asignado:</span>
                      <span>{formData.name} ({formData.email})</span>
                    </div>
                    <div className="flex justify-between pb-1 border-b border-slate-200/50">
                      <span className="font-semibold text-slate-700">Enfoque seleccionado:</span>
                      <span className="capitalize">{formData.solution.replace('-', ' ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-700">Protocolo:</span>
                      <span>Acuerdo de confidencialidad previo (NDA)</span>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="w-full py-3 px-6 bg-[#176BFF] hover:bg-[#1258d4] text-white font-medium text-sm rounded-xl transition-all shadow-md shadow-[#176BFF]/20"
                  >
                    Entendido y Volver
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Nombre y Apellido *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Carlos Mendoza"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F5F7FA] border border-slate-200 rounded-xl focus:outline-none focus:border-[#176BFF] focus:bg-white transition-all text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Empresa u Organización *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Ej. Logística Global S.A."
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F5F7FA] border border-slate-200 rounded-xl focus:outline-none focus:border-[#176BFF] focus:bg-white transition-all text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Correo Corporativo *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="cmendoza@empresa.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F5F7FA] border border-slate-200 rounded-xl focus:outline-none focus:border-[#176BFF] focus:bg-white transition-all text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Teléfono Directo *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+34 600 000 000"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F5F7FA] border border-slate-200 rounded-xl focus:outline-none focus:border-[#176BFF] focus:bg-white transition-all text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Área de Interés Principal</label>
                      <select
                        value={formData.solution}
                        onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F5F7FA] border border-slate-200 rounded-xl focus:outline-none focus:border-[#176BFF] focus:bg-white transition-all text-slate-800"
                      >
                        <option value="general">Evaluación Integral (360°)</option>
                        <option value="proteccion-informacion">Protección y Respaldo de Información</option>
                        <option value="ciberseguridad-empresarial">Ciberseguridad y Prevención de Amenazas</option>
                        <option value="continuidad-negocio">Continuidad de Negocio y RTO/RPO</option>
                        <option value="gestion-seguridad">Gobierno de Seguridad y Accesos</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Cantidad de Equipos / Usuarios</label>
                      <select
                        value={formData.companySize}
                        onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F5F7FA] border border-slate-200 rounded-xl focus:outline-none focus:border-[#176BFF] focus:bg-white transition-all text-slate-800"
                      >
                        <option value="1-10">1 a 10 puestos de trabajo</option>
                        <option value="11-50">11 a 50 puestos de trabajo</option>
                        <option value="51-200">51 a 200 puestos de trabajo</option>
                        <option value="200+">Más de 200 puestos / Multisede</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Sistemas Críticos de la Empresa <span className="text-slate-400 font-normal">(Opcional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.criticalSystems}
                      onChange={(e) => setFormData({ ...formData, criticalSystems: e.target.value })}
                      placeholder="Ej. ERP SAP / Servidor de Archivos / SQL Server / Microsoft 365"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F5F7FA] border border-slate-200 rounded-xl focus:outline-none focus:border-[#176BFF] focus:bg-white transition-all text-slate-800"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 bg-[#176BFF] hover:bg-[#1258d4] disabled:opacity-70 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-[#176BFF]/25 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Procesando solicitud...</span>
                      ) : (
                        <>
                          <span>Agendar Evaluación con Ingeniero Especialista</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-slate-500 mt-2">
                      Sin compromisos contractuales. Confidencialidad garantizada bajo estrictos estándares corporativos.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
