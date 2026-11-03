import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  ArrowRight,
  Database,
  Lock,
  Server,
  Zap,
  ChevronDown,
  Building2,
  Factory,
  Briefcase,
  Truck,
  CheckCircle2,
  PhoneCall,
  Activity
} from 'lucide-react';
import {
  SOLUTIONS_DATA,
  WORK_PROCESS_STEPS,
  PILLARS_DATA,
  SECTORS_DATA,
  FAQS_DATA
} from '../data/content';
import { BlurText } from '../components/animations/BlurText';
import { RevealImage } from '../components/animations/RevealImage';
import { ScrollReveal } from '../components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer';
import { PageTransition } from '../components/animations/PageTransition';

interface HomePageProps {
  onOpenEvaluation: (solution?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenEvaluation }) => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');
  const [activeStep, setActiveStep] = useState(0);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const getSectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Store':
        return <Building2 className="w-5 h-5 text-[#176BFF]" />;
      case 'Factory':
        return <Factory className="w-5 h-5 text-[#176BFF]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#176BFF]" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-[#176BFF]" />;
      case 'Server':
      default:
        return <Server className="w-5 h-5 text-[#176BFF]" />;
    }
  };

  return (
    <PageTransition>
      <div className="w-full overflow-hidden bg-white">
        <section className="relative pt-6 pb-20 md:pt-10 md:pb-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden min-h-[620px] lg:min-h-[700px] flex flex-col justify-between shadow-2xl border border-slate-800/40">
              <div className="absolute inset-0 z-0">
                <motion.img
                  src="/assets/images/hero_datacenter_panorama.jpg"
                  alt="Infraestructura de centro de datos y ciberseguridad corporativa"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-105 will-change-transform"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101C32] via-[#101C32]/75 to-[#101C32]/35" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#101C32]/90 via-[#101C32]/60 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="relative z-10 p-6 sm:p-10 flex flex-wrap items-center justify-between gap-4"
              >
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-blue-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono">DSI SENTINEL · INFRAESTRUCTURA ACTIVA</span>
                </div>

                <div className="hidden sm:flex items-center gap-6 text-xs text-slate-300 font-mono">
                  <span>RPO: &lt; 5 min</span>
                  <span>·</span>
                  <span>RTO: &lt; 35 min</span>
                  <span>·</span>
                  <span>Cifrado: AES-256</span>
                </div>
              </motion.div>

              <div className="relative z-10 px-6 sm:px-10 lg:px-14 py-8 max-w-4xl space-y-6">
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.9, delay: 0.25 }}
                    className="text-xs font-bold uppercase tracking-wider text-blue-300"
                  >
                    Ciberseguridad y Continuidad Operativa
                  </motion.div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.06] font-display">
                    <BlurText
                      text="Tu negocio sigue. Nosotros protegemos lo que lo hace"
                      as="span"
                      animateOnMount
                      delay={0.3}
                      duration={1.3}
                      stagger={0.05}
                    />{' '}
                    <motion.span
                      initial={{ opacity: 0, y: 16, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ duration: 1.1, delay: 0.85, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                      className="italic-serif text-blue-300 inline-block"
                    >
                      posible.
                    </motion.span>
                  </h1>

                  <motion.p
                    initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1.05, delay: 0.95, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    className="text-lg sm:text-xl text-slate-200 max-w-2xl leading-relaxed font-light"
                  >
                    Ciberseguridad y continuidad empresarial para organizaciones que no pueden detenerse.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 1.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onOpenEvaluation('general')}
                    className="px-8 py-4 bg-[#176BFF] hover:bg-[#1258d4] text-white font-bold text-sm rounded-xl transition-colors shadow-lg shadow-[#176BFF]/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Hablemos de seguridad</span>
                  </motion.button>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/soluciones"
                      className="w-full sm:w-auto px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-semibold text-sm rounded-xl backdrop-blur-md border border-white/25 transition-colors text-center flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Conocer soluciones</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, delay: 1.35 }}
                className="relative z-10 p-6 sm:p-10 border-t border-white/10 bg-black/30 backdrop-blur-md"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Protección Perimetral</div>
                    <div className="text-sm sm:text-base font-bold font-mono text-white mt-0.5 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>24/7/365 Activa</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Respaldo Inmutable</div>
                    <div className="text-sm sm:text-base font-bold font-mono text-white mt-0.5 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>WORM Multi-Cloud</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Objetivo de Recuperación</div>
                    <div className="text-sm sm:text-base font-bold font-mono text-white mt-0.5 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[#176BFF]" />
                      <span>RTO &lt; 35 minutos</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Disponibilidad de Servicio</div>
                    <div className="text-sm sm:text-base font-bold font-mono text-emerald-400 mt-0.5 flex items-center gap-2">
                      <span>99.99% Uptime</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <ScrollReveal delay={0.05}>
                <span className="text-xs font-bold uppercase tracking-wider text-[#176BFF]">
                  Garantía de Continuidad
                </span>
              </ScrollReveal>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#101C32] mt-2 font-display">
                <BlurText
                  text="La continuidad comienza con una buena protección."
                  italicWord="protección."
                  italicClassName="italic-serif text-[#176BFF]"
                />
              </h2>

              <ScrollReveal delay={0.2}>
                <p className="text-base sm:text-lg text-slate-500 mt-4 leading-relaxed">
                  Diseñamos defensas digitales para que ninguna contingencia paralice la operación, los ingresos ni la reputación de su organización.
                </p>
              </ScrollReveal>
            </div>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.12}>
              <StaggerItem>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group space-y-3 p-5 rounded-2xl transition-all border border-transparent hover:border-slate-200/80 hover:bg-[#F8FAFC]"
                >
                  <div className="text-3xl font-mono font-extrabold text-[#176BFF]">01</div>
                  <h3 className="text-xl font-bold text-[#101C32] font-display group-hover:text-[#176BFF] transition-colors">
                    Información protegida
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Copias locales y en nube cifradas con inmutabilidad contra ataques destructivos.
                  </p>
                  <div className="pt-2 text-xs font-semibold text-slate-400 group-hover:text-[#176BFF] transition-colors flex items-center gap-1.5">
                    <span>Inmutabilidad WORM</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group space-y-3 p-5 rounded-2xl transition-all border border-transparent hover:border-slate-200/80 hover:bg-[#F8FAFC]"
                >
                  <div className="text-3xl font-mono font-extrabold text-[#176BFF]">02</div>
                  <h3 className="text-xl font-bold text-[#101C32] font-display group-hover:text-[#176BFF] transition-colors">
                    Riesgos controlados
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Prevención proactiva en estaciones y servidores para neutralizar amenazas al instante.
                  </p>
                  <div className="pt-2 text-xs font-semibold text-slate-400 group-hover:text-[#176BFF] transition-colors flex items-center gap-1.5">
                    <span>Detección en &lt; 60s</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group space-y-3 p-5 rounded-2xl transition-all border border-transparent hover:border-slate-200/80 hover:bg-[#F8FAFC]"
                >
                  <div className="text-3xl font-mono font-extrabold text-[#176BFF]">03</div>
                  <h3 className="text-xl font-bold text-[#101C32] font-display group-hover:text-[#176BFF] transition-colors">
                    Sistemas preparados
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Arquitecturas redundantes diseñadas para reanudar operaciones críticas en minutos.
                  </p>
                  <div className="pt-2 text-xs font-semibold text-slate-400 group-hover:text-[#176BFF] transition-colors flex items-center gap-1.5">
                    <span>Clúster de contingencia</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group space-y-3 p-5 rounded-2xl transition-all border border-transparent hover:border-slate-200/80 hover:bg-[#F8FAFC]"
                >
                  <div className="text-3xl font-mono font-extrabold text-[#176BFF]">04</div>
                  <h3 className="text-xl font-bold text-[#101C32] font-display group-hover:text-[#176BFF] transition-colors">
                    Negocios resilientes
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Políticas de gobierno y control que aseguran la actividad comercial ininterrumpida.
                  </p>
                  <div className="pt-2 text-xs font-semibold text-slate-400 group-hover:text-[#176BFF] transition-colors flex items-center gap-1.5">
                    <span>Gobernanza ISO 27001</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        <section id="soluciones" className="py-20 md:py-32 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <ScrollReveal delay={0.05}>
                <span className="text-xs font-bold uppercase tracking-wider text-[#176BFF]">
                  Servicios Especializados
                </span>
              </ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#101C32] mt-2 mb-4 font-display">
                <BlurText
                  text="Protección diseñada para tu empresa."
                  italicWord="empresa."
                  italicClassName="italic-serif text-[#176BFF]"
                />
              </h2>
              <ScrollReveal delay={0.15}>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Soluciones para proteger tus activos digitales y mantener tu operación preparada.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {SOLUTIONS_DATA.map((sol, idx) => (
                <ScrollReveal key={sol.id} delay={idx * 0.1} yOffset={30}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                        <motion.img
                          src={sol.image}
                          alt={sol.title}
                          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out filter brightness-95"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-semibold text-white">
                            {sol.badge}
                          </span>
                        </div>

                        <div className="absolute bottom-4 left-6 right-6 text-white">
                          <h3 className="text-2xl font-bold font-display leading-tight mb-1">
                            {sol.title}
                          </h3>
                          <p className="text-xs text-slate-200 line-clamp-1 font-light">
                            {sol.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="p-6 sm:p-8">
                        <p className="text-sm text-slate-600 leading-relaxed mb-6">
                          {sol.shortDesc}
                        </p>

                        <div className="grid grid-cols-2 gap-3 py-4 border-y border-slate-100 text-xs">
                          <div>
                            <span className="text-slate-400 font-mono block">Tiempo de Respuesta</span>
                            <span className="font-bold text-[#101C32]">{sol.keyMetrics[0]?.value || 'Inmediato'}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 font-mono block">Estándar de Seguridad</span>
                            <span className="font-bold text-[#176BFF]">{sol.keyMetrics[1]?.value || 'Certificado'}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 flex items-center justify-between">
                      <Link
                        to={`/soluciones/${sol.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#102A56] group-hover:text-[#176BFF] transition-colors"
                      >
                        <span>Conocer solución</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </Link>

                      <button
                        onClick={() => onOpenEvaluation(sol.slug)}
                        className="text-xs text-slate-500 hover:text-slate-900 font-medium py-1.5 px-3 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                      >
                        Solicitar diagnóstico
                      </button>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-[#101C32] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <ScrollReveal delay={0.05}>
                <span className="text-xs font-mono uppercase tracking-widest text-[#176BFF]">
                  Metodología Rigurosa
                </span>
              </ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-2 mb-4 font-display">
                <BlurText
                  text="Seguridad con una visión integral."
                  italicWord="integral."
                  italicClassName="italic-serif text-blue-300"
                />
              </h2>
              <ScrollReveal delay={0.15}>
                <p className="text-base text-slate-300 leading-relaxed">
                  Un proceso claro, predecible y riguroso para blindar cada punto crítico de su organización.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative">
                <RevealImage
                  src="/assets/images/datacenter_hallway_blue.jpg"
                  alt="Centro de operaciones e infraestructura de ciberseguridad"
                  variant="clip"
                  containerClassName="rounded-3xl shadow-2xl border border-slate-700/60 min-h-[460px] lg:min-h-[580px] relative"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101C32] via-[#101C32]/40 to-transparent pointer-events-none rounded-3xl" />

                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-md rounded-2xl p-5 border border-white/10 text-white z-10"
                >
                  <div className="text-xs font-mono text-emerald-400 mb-1">DSI Continuous Lifecycle</div>
                  <div className="text-sm font-bold font-display">
                    {WORK_PROCESS_STEPS[activeStep].title} — Fase {WORK_PROCESS_STEPS[activeStep].step}
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    {WORK_PROCESS_STEPS[activeStep].details}
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                {WORK_PROCESS_STEPS.map((step, idx) => (
                  <motion.div
                    key={step.step}
                    onClick={() => setActiveStep(idx)}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    className={`cursor-pointer p-6 rounded-2xl transition-all border ${
                      activeStep === idx
                        ? 'bg-slate-900/90 border-[#176BFF] shadow-lg shadow-[#176BFF]/15'
                        : 'bg-transparent border-slate-800 hover:bg-slate-900/40 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-mono font-extrabold text-[#176BFF]">
                        {step.step}.
                      </span>
                      <h3 className="text-xl font-bold text-white font-display">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed ml-10">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden min-h-[580px] lg:min-h-[640px] flex flex-col justify-between p-8 sm:p-12 lg:p-16 shadow-2xl border border-slate-800/40">
              <div className="absolute inset-0 z-0">
                <motion.img
                  src="/assets/images/visual_continuity_superdatacenter.jpg"
                  alt="Superdatacenter y centro de continuidad de negocio"
                  initial={{ scale: 1.06 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-105 will-change-transform"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101C32] via-[#101C32]/70 to-[#101C32]/40" />
              </div>

              <div className="relative z-10 max-w-3xl">
                <ScrollReveal delay={0.05}>
                  <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono text-blue-200 mb-4">
                    Continuidad de Negocio Garantizada
                  </span>
                </ScrollReveal>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.08]">
                  <BlurText
                    text="Preparados para lo inesperado."
                    italicWord="inesperado."
                    italicClassName="italic-serif text-blue-300"
                  />
                </h2>

                <ScrollReveal delay={0.2}>
                  <p className="text-base sm:text-lg text-slate-200 mt-4 max-w-xl leading-relaxed font-light">
                    Porque proteger la información también significa proteger el futuro de tu empresa.
                  </p>
                </ScrollReveal>
              </div>

              <StaggerContainer className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10" staggerDelay={0.12}>
                <StaggerItem>
                  <motion.div
                    whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.3)' }}
                    className="bg-black/50 backdrop-blur-xl rounded-2xl p-6 border border-white/15 text-white space-y-2 transition-colors"
                  >
                    <div className="text-xs font-mono text-emerald-400">01 · ESCUDO ACTIVO</div>
                    <h3 className="text-lg font-bold font-display">Prevención</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Monitoreo perimetral y filtrado heurístico para neutralizar intrusiones antes del impacto.
                    </p>
                  </motion.div>
                </StaggerItem>

                <StaggerItem>
                  <motion.div
                    whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.3)' }}
                    className="bg-black/50 backdrop-blur-xl rounded-2xl p-6 border border-white/15 text-white space-y-2 transition-colors"
                  >
                    <div className="text-xs font-mono text-blue-300">02 · BÓVEDA WORM</div>
                    <h3 className="text-lg font-bold font-display">Respaldo</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Copias blindadas inmutables locales y en nube privada que ningún malware puede alterar.
                    </p>
                  </motion.div>
                </StaggerItem>

                <StaggerItem>
                  <motion.div
                    whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.3)' }}
                    className="bg-black/50 backdrop-blur-xl rounded-2xl p-6 border border-white/15 text-white space-y-2 transition-colors"
                  >
                    <div className="text-xs font-mono text-emerald-400">03 · FAILOVER RTO</div>
                    <h3 className="text-lg font-bold font-display">Recuperación</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Protocolos probados y entornos espejo para reanudar operaciones críticas en minutos.
                    </p>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-20">
              <ScrollReveal delay={0.05}>
                <span className="text-xs font-bold uppercase tracking-wider text-[#176BFF]">
                  Pilares Estratégicos
                </span>
              </ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#101C32] mt-2 mb-4 font-display">
                <BlurText
                  text="Una estrategia. Múltiples capas de protección."
                  italicWord="protección."
                  italicClassName="italic-serif text-[#176BFF]"
                />
              </h2>
              <ScrollReveal delay={0.15}>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Fotografía, infraestructura y seguridad operando sin fisuras.
                </p>
              </ScrollReveal>
            </div>

            <div className="space-y-24">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-6">
                  <RevealImage
                    src="/assets/images/proposal_fiber_network.jpg"
                    alt="Protección inteligente y conectividad de red"
                    variant="parallax"
                    containerClassName="rounded-3xl shadow-xl border border-slate-200 h-80 sm:h-96"
                  />
                </div>
                <div className="lg:col-span-6 space-y-4">
                  <ScrollReveal delay={0.1}>
                    <span className="text-xs font-mono font-bold text-[#176BFF] uppercase tracking-wider">
                      Pilar 01
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#101C32] font-display mt-1">
                      Protección inteligente
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed mt-2">
                      Defensa que anticipa el impacto antes de que ocurra. Monitoreo y bloqueo automatizado en estaciones de trabajo y servidores, deteniendo ataques dirigidos y filtrado no deseado de datos.
                    </p>
                    <div className="pt-3 flex items-center gap-2 text-xs font-semibold text-[#176BFF]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>Anticipación proactiva y contención automática</span>
                    </div>
                  </ScrollReveal>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
                  <ScrollReveal delay={0.1}>
                    <span className="text-xs font-mono font-bold text-[#176BFF] uppercase tracking-wider">
                      Pilar 02
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#101C32] font-display mt-1">
                      Continuidad empresarial
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed mt-2">
                      Capacidad de respuesta inmediata frente a cualquier contingencia. Respaldos inmutables y planes de contingencia documentados para que ningún imprevisto detenga el flujo comercial ni la facturación.
                    </p>
                    <div className="pt-3 flex items-center gap-2 text-xs font-semibold text-[#176BFF]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>RTO y RPO garantizados por contrato</span>
                    </div>
                  </ScrollReveal>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <RevealImage
                    src="/assets/images/sol_continuity_hardware.jpg"
                    alt="Continuidad empresarial e infraestructura redundante"
                    variant="parallax"
                    containerClassName="rounded-3xl shadow-xl border border-slate-200 h-80 sm:h-96"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-6">
                  <RevealImage
                    src="/assets/images/sector_datacenter.jpg"
                    alt="Seguridad escalable para infraestructura corporativa"
                    variant="parallax"
                    containerClassName="rounded-3xl shadow-xl border border-slate-200 h-80 sm:h-96"
                  />
                </div>
                <div className="lg:col-span-6 space-y-4">
                  <ScrollReveal delay={0.1}>
                    <span className="text-xs font-mono font-bold text-[#176BFF] uppercase tracking-wider">
                      Pilar 03
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#101C32] font-display mt-1">
                      Seguridad escalable
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed mt-2">
                      Arquitectura modular que crece con la estructura de tu empresa. Protección adaptable que acompaña el crecimiento de sedes, volumen de datos y colaboradores sin complejidades técnicas innecesarias.
                    </p>
                    <div className="pt-3 flex items-center gap-2 text-xs font-semibold text-[#176BFF]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>Control unificado sin sobrecostes operativos</span>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <ScrollReveal delay={0.05}>
                <span className="text-xs font-bold uppercase tracking-wider text-[#176BFF]">
                  Adaptabilidad por Industria
                </span>
              </ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#101C32] mt-2 mb-4 font-display">
                <BlurText
                  text="Protección para empresas que necesitan avanzar."
                  italicWord="avanzar."
                  italicClassName="italic-serif text-[#176BFF]"
                />
              </h2>
              <ScrollReveal delay={0.15}>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Cada sector enfrenta riesgos operativos únicos. Diseñamos defensas a la medida de su modelo productivo.
                </p>
              </ScrollReveal>
            </div>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
              {SECTORS_DATA.map((sector) => (
                <StaggerItem key={sector.id}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="group p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#176BFF] transition-colors hover:shadow-xl flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        {getSectorIcon(sector.icon)}
                      </div>

                      <h3 className="text-xl font-bold text-[#101C32] mb-2 font-display">
                        {sector.name}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {sector.description}
                      </p>

                      <div className="space-y-3 pt-4 border-t border-slate-200/60 text-xs">
                        <div>
                          <span className="font-semibold text-slate-700 block mb-0.5">Riesgo crítico:</span>
                          <span className="text-slate-500">{sector.threatScenario}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-[#176BFF] block mb-0.5">Enfoque DSI:</span>
                          <span className="text-slate-600">{sector.solutionApproach}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 mt-4">
                      <Link
                        to="/sectores"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#102A56] group-hover:text-[#176BFF] transition-colors"
                      >
                        <span>Ver matriz del sector</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-[#F8FAFC] border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <ScrollReveal delay={0.05}>
                <span className="text-xs font-bold uppercase tracking-wider text-[#176BFF]">
                  Claridad y Criterio
                </span>
              </ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101C32] mt-2 mb-3 font-display">
                <BlurText
                  text="Preguntas Frecuentes."
                  italicWord="Frecuentes."
                  italicClassName="italic-serif text-[#176BFF]"
                />
              </h2>
              <ScrollReveal delay={0.15}>
                <p className="text-sm sm:text-base text-slate-600">
                  Respuestas directas y comerciales sobre cómo garantizamos la seguridad y continuidad de su operación.
                </p>
              </ScrollReveal>
            </div>

            <div className="space-y-4">
              {FAQS_DATA.map((faq, idx) => {
                const isOpen = openFaq === faq.id;
                return (
                  <ScrollReveal key={faq.id} delay={idx * 0.06}>
                    <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs transition-colors">
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-base text-[#101C32] hover:text-[#176BFF] transition-colors cursor-pointer"
                      >
                        <span className="font-display">{faq.question}</span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0"
                        >
                          <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-[#176BFF]' : ''}`} />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal yOffset={30}>
              <div className="relative rounded-3xl overflow-hidden min-h-[460px] flex items-center justify-center text-center p-8 sm:p-16 shadow-2xl border border-slate-800">
                <div className="absolute inset-0 z-0">
                  <img
                    src="/assets/images/hero_datacenter_panorama.jpg"
                    alt="Datacenter ciberseguridad corporativa"
                    className="w-full h-full object-cover object-center filter brightness-50"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#101C32]/95 via-[#102A56]/90 to-[#176BFF]/85" />
                </div>

                <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                  <span className="inline-block text-xs font-mono uppercase tracking-widest text-blue-200 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
                    Seguridad & Continuidad Sin Fricción
                  </span>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-tight">
                    <BlurText
                      text="Tu empresa no puede detenerse."
                      italicWord="detenerse."
                      italicClassName="italic-serif text-blue-200"
                    />
                  </h2>

                  <p className="text-base sm:text-lg text-slate-200 max-w-xl mx-auto leading-relaxed font-light">
                    Empecemos a fortalecer su seguridad y continuidad digital con un diagnóstico técnico riguroso.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onOpenEvaluation('general')}
                      className="w-full sm:w-auto px-9 py-4 bg-white text-[#101C32] hover:bg-slate-100 font-bold text-sm rounded-xl transition-all shadow-lg cursor-pointer"
                    >
                      Solicitar una evaluación
                    </motion.button>
                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        to="/contacto"
                        className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/25 transition-all text-center block"
                      >
                        Hablar con un asesor
                      </Link>
                    </motion.div>
                  </div>

                  <div className="text-xs text-blue-200 pt-2 font-mono">
                    Sin interrupción de servicio · Confidencialidad bajo NDA · Diagnóstico en 24h
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
