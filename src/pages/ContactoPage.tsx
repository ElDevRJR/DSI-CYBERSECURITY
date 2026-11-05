import React, { useState } from 'react';
import {
  Mail,
  Clock,
  Lock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
} from 'lucide-react';
import { motion } from 'motion/react';
import { PageTransition } from '../components/animations/PageTransition';
import { BlurText } from '../components/animations/BlurText';
import { ScrollReveal } from '../components/animations/ScrollReveal';

interface ContactoPageProps {
  onOpenEvaluation: () => void;
}

export const ContactoPage: React.FC<ContactoPageProps> = ({
  onOpenEvaluation,
}) => {
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    servicioInteres: 'proteccion-informacion',
    mensaje: '',
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    validating: boolean;
    error: string | null;
  }>({
    submitted: false,
    validating: false,
    error: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormStatus({
      submitted: false,
      validating: true,
      error: null,
    });

    if (
      !form.nombre.trim() ||
      !form.empresa.trim() ||
      !form.email.trim() ||
      !form.telefono.trim()
    ) {
      setFormStatus({
        submitted: false,
        validating: false,
        error: 'Por favor complete todos los campos obligatorios para continuar.',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      setFormStatus({
        submitted: false,
        validating: false,
        error: 'Por favor introduzca un correo electrónico válido.',
      });
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error('No se pudo enviar la solicitud.');
      }

      setFormStatus({
        submitted: true,
        validating: false,
        error: null,
      });
    } catch {
      setFormStatus({
        submitted: false,
        validating: false,
        error: 'No pudimos enviar tu solicitud. Inténtalo nuevamente o comunícate directamente con nuestro equipo de ventas por WhatsApp.',
      });
    }
  };

  return (
    <PageTransition>
      <div className="w-full bg-white">

        <section className="relative pt-6 pb-20 md:pt-10 md:pb-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden min-h-[460px] lg:min-h-[520px] flex flex-col justify-end p-8 sm:p-12 lg:p-16 shadow-2xl border border-slate-800/40">

              <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.img
                  initial={{ scale: 1.12, opacity: 0.6 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  src="/assets/images/sol_cyber_soc.jpg"
                  alt="Centro de atención y monitoreo de ciberseguridad DSI"
                  className="w-full h-full object-cover object-center filter brightness-70 contrast-105"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#101C32] via-[#101C32]/80 to-transparent" />
              </div>

              <div className="relative z-10 max-w-3xl space-y-5">

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-blue-200"
                >
                  <span className="w-2 h-2 rounded-full bg-[#176BFF] animate-pulse" />
                  <span>Contacto Directo · DSI CYBERSECURITY</span>
                </motion.div>

                <div>
                  <BlurText
                    text="Conversemos sobre la seguridad de tu empresa."
                    as="h1"
                    italicWord="empresa."
                    italicClassName="italic-serif text-blue-300"
                    animateOnMount={true}
                    delay={0.3}
                    duration={1.3}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.08]"
                  />
                </div>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 16,
                    filter: 'blur(6px)',
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                  }}
                  transition={{
                    duration: 1.05,
                    delay: 0.85,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-base sm:text-lg text-slate-200 leading-relaxed font-light max-w-2xl"
                >
                  Nuestro equipo de ingenieros de ciberseguridad y continuidad
                  está disponible para analizar su infraestructura bajo
                  estrictos estándares de confidencialidad.
                </motion.p>

              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

              <ScrollReveal
                direction="up"
                duration={0.7}
                className="lg:col-span-5 space-y-8"
              >

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#176BFF]">
                    Atención Directa
                  </span>

                  <BlurText
                    text="Canales de Asesoría Corporativa"
                    as="h2"
                    delay={0.1}
                    className="text-2xl sm:text-3xl font-extrabold text-[#101C32] mt-2 mb-3 font-display block"
                  />

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Cada consulta es atendida por un especialista con
                    experiencia en soluciones de seguridad y continuidad
                    empresarial.
                  </p>
                </div>

                <div className="space-y-4">

                  <motion.div
                    whileHover={{
                      y: -3,
                      transition: { duration: 0.2 },
                    }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#176BFF] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Correo Corporativo
                      </div>

                      <div className="text-sm font-bold text-[#101C32] mt-0.5">
                        contacto@dsicybersecurity.com
                      </div>

                      <div className="text-xs text-slate-500 mt-0.5">
                        Respuesta en menos de 24 horas hábiles
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -3,
                      transition: { duration: 0.2 },
                    }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#176BFF] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Horario de Consultoría
                      </div>

                      <div className="text-sm font-bold text-[#101C32] mt-0.5">
                        Lunes a Viernes: 08:30 – 19:00
                      </div>

                      <div className="text-xs text-slate-500 mt-0.5">
                        Atención según disponibilidad del equipo
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -3,
                      transition: { duration: 0.2 },
                    }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#176BFF] flex items-center justify-center shrink-0">
                      <Lock className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Acuerdo de Confidencialidad
                      </div>

                      <div className="text-sm font-bold text-[#101C32] mt-0.5">
                        Tratamiento confidencial
                      </div>

                      <div className="text-xs text-slate-500 mt-0.5">
                        Protegemos la información compartida durante la consulta
                      </div>
                    </div>
                  </motion.div>

                  <motion.a
                    href="https://wa.me/51940769186"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -3,
                      transition: { duration: 0.2 },
                    }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-200 transition-all group"
                    aria-label="Contactar a ventas por WhatsApp al +51 940 769 186"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        WhatsApp de Ventas
                      </div>

                      <div className="text-sm font-bold text-[#101C32] mt-0.5 group-hover:text-[#176BFF] transition-colors">
                        +51 940 769 186
                      </div>

                      <div className="text-xs text-slate-500 mt-0.5">
                        Escríbenos directamente para recibir asesoría
                      </div>
                    </div>
                  </motion.a>

                </div>

                <div className="p-6 rounded-3xl bg-[#101C32] text-white border border-slate-800 space-y-3">

                  <span className="text-xs font-mono text-emerald-400">
                    Diagnóstico Guiado
                  </span>

                  <h3 className="text-lg font-bold font-display">
                    ¿Prefiere agendar directamente en calendario?
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Utilice nuestro asistente interactivo de evaluación para
                    predefinir el tamaño de su empresa y sistemas críticos.
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onOpenEvaluation}
                    className="w-full py-3 bg-[#176BFF] hover:bg-[#1258d4] text-white text-xs font-bold rounded-xl transition-all shadow-md mt-2 cursor-pointer"
                  >
                    Abrir Asistente de Evaluación
                  </motion.button>

                </div>

              </ScrollReveal>

              <ScrollReveal
                direction="up"
                delay={0.15}
                duration={0.7}
                className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl"
              >

                <BlurText
                  text="Formulario de Evaluación Técnica"
                  as="h3"
                  className="text-2xl font-extrabold text-[#101C32] mb-2 font-display block"
                />

                <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                  Complete los datos de su organización. Nuestro equipo
                  revisará su solicitud para identificar la solución adecuada.
                </p>

                {formStatus.submitted ? (

                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200 text-slate-700 space-y-4"
                  >

                    <div className="flex items-center gap-2.5 text-[#102A56] font-bold text-base">
                      <CheckCircle2 className="w-5 h-5 text-[#176BFF]" />
                      <span>Solicitud enviada correctamente</span>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      Hemos recibido la solicitud de <strong>{form.empresa}</strong>.
                      Nuestro equipo podrá revisar los datos proporcionados.
                    </p>

                    <div className="text-xs font-mono bg-white p-4 rounded-xl border border-slate-200 space-y-1 text-slate-600">
                      <div>
                        <strong>Contacto:</strong> {form.nombre} ({form.email})
                      </div>
                      <div>
                        <strong>Teléfono:</strong> {form.telefono}
                      </div>
                      <div>
                        <strong>Servicio:</strong> {form.servicioInteres}
                      </div>
                    </div>

                    <p className="text-xs text-slate-500">
                      También puede comunicarse directamente con nuestro equipo
                      de ventas por WhatsApp.
                    </p>

                    <a
                      href="https://wa.me/51940769186"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#176BFF] hover:text-[#1258d4]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      +51 940 769 186
                    </a>

                    <button
                      onClick={() => {
                        setFormStatus({
                          submitted: false,
                          validating: false,
                          error: null,
                        });

                        setForm({
                          nombre: '',
                          empresa: '',
                          email: '',
                          telefono: '',
                          servicioInteres: 'proteccion-informacion',
                          mensaje: '',
                        });
                      }}
                      className="text-xs font-semibold text-[#176BFF] hover:underline pt-2 block"
                    >
                      Restablecer formulario
                    </button>

                  </motion.div>

                ) : (

                  <form onSubmit={handleSubmit} className="space-y-5">

                    {formStatus.error && (
                      <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{formStatus.error}</span>
                      </div>
                    )}

                    {/* NOMBRE Y EMPRESA */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Nombre *
                        </label>

                        <input
                          type="text"
                          required
                          value={form.nombre}
                          onChange={(e) =>
                            setForm({ ...form, nombre: e.target.value })
                          }
                          placeholder="Ej. Carlos Mendoza"
                          className="w-full px-4 py-3 text-sm bg-[#F8FAFC] border border-slate-200 rounded-xl focus:outline-none focus:border-[#176BFF] focus:bg-white text-slate-800 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Empresa *
                        </label>

                        <input
                          type="text"
                          required
                          value={form.empresa}
                          onChange={(e) =>
                            setForm({ ...form, empresa: e.target.value })
                          }
                          placeholder="Ej. Distribuidora del Norte S.A."
                          className="w-full px-4 py-3 text-sm bg-[#F8FAFC] border border-slate-200 rounded-xl focus:outline-none focus:border-[#176BFF] focus:bg-white text-slate-800 transition-colors"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Correo electrónico *
                        </label>

                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          placeholder="cmendoza@empresa.com"
                          className="w-full px-4 py-3 text-sm bg-[#F8FAFC] border border-slate-200 rounded-xl focus:outline-none focus:border-[#176BFF] focus:bg-white text-slate-800 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Teléfono *
                        </label>

                        <input
                          type="tel"
                          required
                          value={form.telefono}
                          onChange={(e) =>
                            setForm({ ...form, telefono: e.target.value })
                          }
                          placeholder="+51 900 000 000"
                          className="w-full px-4 py-3 text-sm bg-[#F8FAFC] border border-slate-200 rounded-xl focus:outline-none focus:border-[#176BFF] focus:bg-white text-slate-800 transition-colors"
                        />
                      </div>

                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Servicio de interés
                      </label>

                      <select
                        value={form.servicioInteres}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            servicioInteres: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 text-sm bg-[#F8FAFC] border border-slate-200 rounded-xl focus:outline-none focus:border-[#176BFF] focus:bg-white text-slate-800 transition-colors"
                      >
                        <option value="proteccion-informacion">
                          Protección y respaldo de información
                        </option>

                        <option value="ciberseguridad">
                          Ciberseguridad empresarial
                        </option>

                        <option value="continuidad">
                          Continuidad y recuperación
                        </option>

                        <option value="gestion-seguridad">
                          Gestión y gobierno de seguridad
                        </option>

                        <option value="evaluacion-integral">
                          Evaluación integral 360°
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Mensaje <span className="text-slate-400 font-normal">(Opcional)</span>
                      </label>

                      <textarea
                        rows={4}
                        value={form.mensaje}
                        onChange={(e) =>
                          setForm({ ...form, mensaje: e.target.value })
                        }
                        placeholder="Indique sistemas críticos, requerimientos de continuidad o detalles de su consulta..."
                        className="w-full px-4 py-3 text-sm bg-[#F8FAFC] border border-slate-200 rounded-xl focus:outline-none focus:border-[#176BFF] focus:bg-white text-slate-800 transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2">

                      <motion.button
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        type="submit"
                        disabled={formStatus.validating}
                        className="w-full py-4 px-6 bg-[#176BFF] hover:bg-[#1258d4] disabled:opacity-70 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-[#176BFF]/25 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>
                          {formStatus.validating
                            ? 'Enviando solicitud...'
                            : 'Solicitar evaluación'}
                        </span>

                        <ArrowRight className="w-4 h-4" />
                      </motion.button>

                      <p className="text-center text-[11px] text-slate-400 mt-2.5">
                        Tratamiento confidencial de datos bajo estricto secreto profesional.
                      </p>

                    </div>

                  </form>
                )}

              </ScrollReveal>

            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};