import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Target,
  ArrowRight,
  Eye,
  Activity,
  CheckCircle2,
  Lock,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import { BlurText } from '../components/animations/BlurText';
import { RevealImage } from '../components/animations/RevealImage';
import { ScrollReveal } from '../components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer';
import { PageTransition } from '../components/animations/PageTransition';

interface NosotrosPageProps {
  onOpenEvaluation: () => void;
}

export const NosotrosPage: React.FC<NosotrosPageProps> = ({ onOpenEvaluation }) => {
  return (
    <PageTransition>
      <div className="w-full bg-white">
        {/* =========================================================================
            HERO VISUAL CON FOTOGRAFÍA TECNOLÓGICA AMPLIA & BLUR TO FOCUS
           ========================================================================= */}
        <section className="relative pt-6 pb-20 md:pt-10 md:pb-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden min-h-[500px] lg:min-h-[560px] flex flex-col justify-end p-8 sm:p-12 lg:p-16 shadow-2xl border border-slate-800/40">
              {/* Background Photography with Scale Reveal */}
              <div className="absolute inset-0 z-0">
                <motion.img
                  src="/assets/images/sol_governance_board.jpg"
                  alt="DSI CYBERSECURITY — Equipo directivo y consultores de ciberseguridad"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="w-full h-full object-cover object-center filter brightness-75 contrast-105 will-change-transform"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101C32] via-[#101C32]/80 to-transparent" />
              </div>

              {/* Overlaid Hero Content */}
              <div className="relative z-10 max-w-3xl space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-blue-200"
                >
                  <span className="w-2 h-2 rounded-full bg-[#176BFF]" />
                  <span>Nosotros · DSI CYBERSECURITY</span>
                </motion.div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.08]">
                  <BlurText
                    text="La seguridad es parte del futuro de cada empresa."
                    italicWord="empresa."
                    italicClassName="italic-serif text-blue-300"
                    animateOnMount
                    delay={0.3}
                    duration={1.3}
                  />
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 1.05, delay: 0.85, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="text-base sm:text-lg text-slate-200 leading-relaxed font-light max-w-2xl"
                >
                  En DSI CYBERSECURITY concebimos la ciberseguridad no como un freno, sino como el habilitador que permite a las organizaciones innovar, operar y expandirse sin temor a interrupciones.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            PRESENTACIÓN DE DSI CYBERSECURITY & NUESTRA VISIÓN
           ========================================================================= */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-6">
                <ScrollReveal delay={0.05}>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#176BFF]">
                    Identidad & Propósito
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101C32] font-display mt-2">
                    Protección sólida para organizaciones en constante movimiento
                  </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.15}>
                  <p className="text-base text-slate-600 leading-relaxed">
                    DSI CYBERSECURITY es una firma especializada en ciberseguridad corporativa, protección de datos y continuidad operacional. Acompañamos a directores de tecnología y líderes empresariales a diseñar defensas proactivas que resistan los incidentes más complejos.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.25}>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Nuestra visión es erradicar el tiempo de inactividad no planificado en el ecosistema empresarial, asegurando que cada activo digital crítico cuente con redundancia, inmutabilidad y supervisión especializada.
                  </p>
                </ScrollReveal>
              </div>

              <div className="lg:col-span-6">
                <RevealImage
                  src="/assets/images/datacenter_hallway_blue.jpg"
                  alt="Centro de datos e infraestructura digital DSI"
                  variant="clip"
                  containerClassName="rounded-3xl shadow-xl border border-slate-200 h-80 sm:h-96 relative"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            ENFOQUE EN CONTINUIDAD EMPRESARIAL
           ========================================================================= */}
        <section className="py-20 md:py-28 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <ScrollReveal delay={0.05}>
                <span className="text-xs font-bold uppercase tracking-wider text-[#176BFF]">
                  Enfoque Estratégico
                </span>
              </ScrollReveal>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101C32] mt-2 mb-4 font-display">
                <BlurText
                  text="Más allá de la defensa pasiva: resiliencia real."
                  italicWord="real."
                  italicClassName="italic-serif text-[#176BFF]"
                />
              </h2>

              <ScrollReveal delay={0.15}>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Un antivirus tradicional solo avisa cuando detecta un problema. Nuestro enfoque combina prevención activa, respaldos inmutables y entornos de contingencia para que su empresa vuelva a operar en minutos frente a cualquier contingencia.
                </p>
              </ScrollReveal>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.12}>
              <StaggerItem>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-shadow space-y-4 h-full"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#176BFF] flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#176BFF]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#101C32] font-display">Prevención Anticipada</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Supervisión heurística y control perimetral para aislar amenazas en estaciones y servidores antes de que puedan extenderse por la red corporativa.
                  </p>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-shadow space-y-4 h-full"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#176BFF] flex items-center justify-center">
                    <Lock className="w-6 h-6 text-[#176BFF]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#101C32] font-display">Datos Inmutables</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Copias blindadas mediante tecnología WORM que impiden cualquier modificación, borrado o cifrado no autorizado, protegiendo el núcleo del negocio.
                  </p>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-shadow space-y-4 h-full"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#176BFF] flex items-center justify-center">
                    <Activity className="w-6 h-6 text-[#176BFF]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#101C32] font-display">Recuperación Veloz</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Arquitecturas preparadas para conmutación inmediata (Failover), garantizando que las ventas y la facturación continúen sin pausas.
                  </p>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* =========================================================================
            PRINCIPIOS QUE GUÍAN NUESTRO TRABAJO
           ========================================================================= */}
        <section className="py-20 md:py-28 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <ScrollReveal delay={0.05}>
                <span className="text-xs font-bold uppercase tracking-wider text-[#176BFF]">
                  Pilares de Ejecución
                </span>
              </ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101C32] mt-2 mb-4 font-display">
                <BlurText
                  text="Principios que guían nuestro trabajo."
                  italicWord="trabajo."
                  italicClassName="italic-serif text-[#176BFF]"
                />
              </h2>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl" staggerDelay={0.1}>
              <StaggerItem>
                <div className="space-y-3 p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/60 hover:border-slate-300 transition-colors">
                  <div className="text-2xl font-mono font-bold text-[#176BFF]">01</div>
                  <h3 className="text-lg font-bold text-[#101C32] font-display">Confidencialidad Absoluta</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Cada diagnóstico y proyecto se formaliza bajo estrictos acuerdos de confidencialidad (NDA) para resguardar la privacidad de su infraestructura.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="space-y-3 p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/60 hover:border-slate-300 transition-colors">
                  <div className="text-2xl font-mono font-bold text-[#176BFF]">02</div>
                  <h3 className="text-lg font-bold text-[#101C32] font-display">Cero Interrupción Operativa</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Implementamos y probamos las capas de seguridad sin pausar las tareas diarias de sus colaboradores ni la disponibilidad de sus servicios.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="space-y-3 p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/60 hover:border-slate-300 transition-colors">
                  <div className="text-2xl font-mono font-bold text-[#176BFF]">03</div>
                  <h3 className="text-lg font-bold text-[#101C32] font-display">Soluciones Proporcionales</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    No recomendamos herramientas innecesarias ni sobredimensionadas; diseñamos la arquitectura precisa que protege sus activos clave con eficiencia.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="space-y-3 p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/60 hover:border-slate-300 transition-colors">
                  <div className="text-2xl font-mono font-bold text-[#176BFF]">04</div>
                  <h3 className="text-lg font-bold text-[#101C32] font-display">Acompañamiento Continuo</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    La seguridad no concluye con una instalación. Realizamos simulacros, revisiones periódicas y optimizaciones constantes ante nuevas amenazas.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* =========================================================================
            CTA PARA CONOCER NUESTRAS SOLUCIONES
           ========================================================================= */}
        <section className="py-20 md:py-28 bg-[#101C32] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <ScrollReveal delay={0.05}>
              <span className="text-xs font-mono uppercase tracking-widest text-[#176BFF]">
                Portafolio Especializado
              </span>
            </ScrollReveal>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display">
              <BlurText
                text="Descubra cómo blindar la operación de su organización."
                italicWord="organización."
                italicClassName="italic-serif text-blue-300"
              />
            </h2>

            <ScrollReveal delay={0.15}>
              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
                Explore nuestras cuatro líneas de soluciones en protección de datos, ciberseguridad activa, continuidad operativa y gobierno de accesos.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/soluciones"
                    className="w-full sm:w-auto px-8 py-4 bg-[#176BFF] hover:bg-[#1258d4] text-white font-bold text-sm rounded-xl transition-colors shadow-lg shadow-[#176BFF]/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Ver todas las soluciones</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenEvaluation}
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 transition-colors cursor-pointer"
                >
                  Solicitar diagnóstico técnico
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
