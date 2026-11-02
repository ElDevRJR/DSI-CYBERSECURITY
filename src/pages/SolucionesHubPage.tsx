import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/content';
import { BlurText } from '../components/animations/BlurText';
import { RevealImage } from '../components/animations/RevealImage';
import { ScrollReveal } from '../components/animations/ScrollReveal';
import { PageTransition } from '../components/animations/PageTransition';

interface SolucionesHubPageProps {
  onOpenEvaluation: (solutionSlug?: string) => void;
}

export const SolucionesHubPage: React.FC<SolucionesHubPageProps> = ({ onOpenEvaluation }) => {
  return (
    <PageTransition>
      <div className="w-full bg-white">
        {/* =========================================================================
            HERO SOLUCIONES
           ========================================================================= */}
        <section className="relative pt-6 pb-20 md:pt-10 md:pb-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden min-h-[500px] lg:min-h-[560px] flex flex-col justify-end p-8 sm:p-12 lg:p-16 shadow-2xl border border-slate-800/40">
              {/* Background Photography with Scale Reveal */}
              <div className="absolute inset-0 z-0">
                <motion.img
                  src="/assets/images/hero_datacenter_panorama.jpg"
                  alt="Infraestructura y soluciones de ciberseguridad corporativa"
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
                  <span>Portafolio de Soluciones · DSI CYBERSECURITY</span>
                </motion.div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.08]">
                  <BlurText
                    text="Protección inteligente para un negocio que no puede detenerse."
                    italicWord="detenerse."
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
                  Líneas de servicio integradas para salvaguardar sus activos de datos, blindar sus estaciones de trabajo y garantizar la continuidad absoluta de su operación.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            LAS 4 LÍNEAS DE SOLUCIONES (Editorial Photography Showcase)
           ========================================================================= */}
        <section className="py-20 md:py-28 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <ScrollReveal delay={0.05}>
                <span className="text-xs font-bold uppercase tracking-wider text-[#176BFF]">
                  Áreas de Especialidad
                </span>
              </ScrollReveal>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#101C32] mt-2 mb-4 font-display">
                <BlurText
                  text="Cuatro pilares de defensa y resiliencia."
                  italicWord="resiliencia."
                  italicClassName="italic-serif text-[#176BFF]"
                />
              </h2>

              <ScrollReveal delay={0.15}>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Cada solución responde a un vector crítico de la infraestructura corporativa moderna.
                </p>
              </ScrollReveal>
            </div>

            <div className="space-y-16 lg:space-y-24">
              {SOLUTIONS_DATA.map((sol, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={sol.id}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                      isEven ? '' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Photo Column with RevealImage */}
                    <div className={`lg:col-span-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                      <RevealImage
                        src={sol.image}
                        alt={sol.title}
                        variant={index % 2 === 0 ? 'clip' : 'scale'}
                        containerClassName="rounded-3xl shadow-xl border border-slate-200/80 h-80 sm:h-96 relative group"
                      />
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-6 space-y-5 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                      <ScrollReveal delay={0.1}>
                        <span className="text-xs font-mono font-bold text-[#176BFF] uppercase tracking-wider">
                          Línea 0{index + 1}
                        </span>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101C32] font-display mt-1">
                          {sol.title}
                        </h3>

                        <p className="text-base text-slate-600 leading-relaxed mt-2">
                          {sol.shortDesc}
                        </p>

                        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-1.5 my-4">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#102A56] block">
                            Beneficio Empresarial
                          </span>
                          <p className="text-sm text-slate-700 leading-relaxed font-medium">
                            {sol.businessBenefit}
                          </p>
                        </div>

                        <div className="pt-2 flex flex-wrap items-center gap-4">
                          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                            <Link
                              to={`/soluciones/${sol.slug}`}
                              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#176BFF] hover:bg-[#1258d4] text-white font-semibold text-sm rounded-xl transition-colors shadow-md shadow-[#176BFF]/20"
                            >
                              <span>Conocer más de esta solución</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </motion.div>

                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => onOpenEvaluation(sol.slug)}
                            className="px-5 py-3.5 bg-white hover:bg-slate-100 text-[#101C32] font-semibold text-sm rounded-xl border border-slate-300 transition-colors cursor-pointer"
                          >
                            Solicitar evaluación
                          </motion.button>
                        </div>
                      </ScrollReveal>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            FINAL CTA SOLUCIONES
           ========================================================================= */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <ScrollReveal delay={0.05}>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#101C32] font-display">
                ¿No está seguro de qué nivel de protección requiere su empresa?
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
                Efectuamos un diagnóstico inicial de vulnerabilidades y tiempos de recuperación para identificar los puntos de quiebre de su infraestructura.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onOpenEvaluation('general')}
                  className="px-8 py-4 bg-[#102A56] hover:bg-[#176BFF] text-white font-bold text-sm rounded-xl transition-colors shadow-md cursor-pointer"
                >
                  Agendar diagnóstico técnico con un especialista
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
