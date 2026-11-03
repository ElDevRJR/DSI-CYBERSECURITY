import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  FileCheck,
  Check
} from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/content';
import { BlurText } from '../components/animations/BlurText';
import { RevealImage } from '../components/animations/RevealImage';
import { ScrollReveal } from '../components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer';
import { PageTransition } from '../components/animations/PageTransition';

interface SolutionDetailProps {
  onOpenEvaluation: (solutionSlug: string) => void;
}

export const SolutionDetail: React.FC<SolutionDetailProps> = ({ onOpenEvaluation }) => {
  const { slug } = useParams<{ slug: string }>();
  const solution = SOLUTIONS_DATA.find((s) => s.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!solution) {
    return <Navigate to="/soluciones" replace />;
  }

  const otherSolutions = SOLUTIONS_DATA.filter((s) => s.slug !== slug);

  return (
    <PageTransition>
      <div className="w-full bg-[#F8FAFC]">
        <div className="bg-white border-b border-slate-200/80 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500">
            <Link to="/" className="hover:text-[#176BFF]">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/soluciones" className="hover:text-[#176BFF]">Soluciones</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#101C32] font-semibold">{solution.title}</span>
          </div>
        </div>

        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F5F7FA] border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#176BFF] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100"
                >
                  <ShieldCheck className="w-4 h-4 text-[#176BFF]" />
                  <span>{solution.badge}</span>
                </motion.div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#101C32] font-display leading-[1.12]">
                  <BlurText
                    text={`${solution.title} Empresarial.`}
                    italicWord="Empresarial."
                    italicClassName="italic-serif text-[#176BFF]"
                    animateOnMount
                    delay={0.25}
                    duration={1.3}
                  />
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 14, filter: 'blur(5px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 1.0, delay: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="text-lg text-slate-600 font-medium"
                >
                  {solution.subtitle}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 14, filter: 'blur(5px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 1.05, delay: 0.85, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="text-sm text-slate-500 leading-relaxed max-w-xl"
                >
                  {solution.fullDesc}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 1.05, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="pt-2 flex flex-col sm:flex-row items-center gap-3"
                >
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onOpenEvaluation(solution.slug)}
                    className="w-full sm:w-auto px-7 py-3.5 bg-[#176BFF] hover:bg-[#1258d4] text-white font-semibold text-sm rounded-xl transition-colors shadow-md shadow-[#176BFF]/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Solicitar Evaluación para esta Solución</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <a
                    href="#especificaciones"
                    className="w-full sm:w-auto px-6 py-3.5 bg-white text-[#101C32] hover:bg-slate-50 font-semibold text-sm rounded-xl border border-slate-300 transition-colors text-center"
                  >
                    Ver especificaciones
                  </a>
                </motion.div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 h-[380px] sm:h-[440px] group">
                  <RevealImage
                    src={solution.image}
                    alt={solution.title}
                    variant="clip"
                    priority
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                    <div className="text-xs font-mono text-emerald-400 mb-1">DSI Certified Infrastructure</div>
                    <div className="text-lg font-bold font-display">{solution.title}</div>
                    <div className="text-xs text-slate-300 mt-0.5">Operatividad y monitoreo 24/7 sin impacto en producción</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.08}>
              {solution.keyMetrics.map((metric, idx) => (
                <StaggerItem key={idx}>
                  <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/60 text-center hover:border-slate-300 transition-colors">
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#176BFF] font-mono mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs font-semibold text-slate-600">
                      {metric.label}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section id="especificaciones" className="py-20 bg-[#F5F7FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <ScrollReveal delay={0.05}>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#176BFF]">Alcance Tecnológico</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#101C32] mt-1 font-display">
                      Capacidades y Cobertura Operativa
                    </h2>
                  </ScrollReveal>
                </div>

                <div className="space-y-3.5">
                  {solution.bulletPoints.map((point, idx) => (
                    <ScrollReveal key={idx} delay={idx * 0.08} yOffset={16}>
                      <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:border-slate-300 transition-colors">
                        <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#176BFF] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-[#176BFF]" />
                        </div>
                        <span className="text-sm text-slate-700 leading-relaxed font-medium">
                          {point}
                        </span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <ScrollReveal delay={0.15}>
                  <div className="bg-[#101C32] text-white rounded-3xl p-7 sm:p-8 shadow-xl border border-slate-800 space-y-5">
                    <div className="flex items-center gap-2 text-xs font-mono text-blue-300">
                      <FileCheck className="w-4 h-4 text-[#176BFF]" />
                      <span>Entregables de la Implementación</span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-white">
                      Qué recibe su equipo de TI y Gerencia
                    </h3>

                    <ul className="space-y-3 text-xs text-slate-300">
                      {solution.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 pb-2.5 border-b border-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onOpenEvaluation(solution.slug)}
                      className="w-full py-3 px-4 bg-[#176BFF] hover:bg-[#1258d4] text-white text-xs font-semibold rounded-xl transition-colors shadow-md mt-4 cursor-pointer"
                    >
                      Agendar reunión con el especialista técnico
                    </motion.button>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <ScrollReveal delay={0.05}>
                <h3 className="text-2xl font-bold text-[#101C32] font-display">
                  Preguntas específicas sobre {solution.title}
                </h3>
              </ScrollReveal>
            </div>

            <div className="space-y-3">
              {solution.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <ScrollReveal key={idx} delay={idx * 0.08}>
                    <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200/80 overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between text-sm font-semibold text-[#101C32] hover:text-[#176BFF] transition-colors cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <ChevronDown className="w-4 h-4 text-slate-500" />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-200/50 pt-3">
                              {faq.a}
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

        <section className="py-16 bg-[#F5F7FA] border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal delay={0.05}>
              <h3 className="text-xl font-bold text-[#101C32] mb-8 font-display text-center">
                Explorar otras soluciones de DSI CYBERSECURITY
              </h3>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
              {otherSolutions.map((item) => (
                <StaggerItem key={item.id}>
                  <Link
                    to={`/soluciones/${item.slug}`}
                    className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-[#176BFF] transition-all hover:shadow-lg flex flex-col justify-between group h-full block"
                  >
                    <div>
                      <span className="text-[11px] font-semibold text-[#176BFF] uppercase tracking-wider">{item.badge}</span>
                      <h4 className="text-base font-bold text-[#101C32] mt-1 mb-2 font-display group-hover:text-[#176BFF] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.shortDesc}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#102A56] group-hover:text-[#176BFF]">
                      <span>Ver detalle</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
