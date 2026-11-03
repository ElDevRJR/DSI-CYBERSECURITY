import React from 'react';
import { Building2, Factory, Briefcase, Truck, Server, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SECTORS_DATA } from '../data/content';
import { BlurText } from '../components/animations/BlurText';
import { RevealImage } from '../components/animations/RevealImage';
import { ScrollReveal } from '../components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer';
import { PageTransition } from '../components/animations/PageTransition';

interface SectoresPageProps {
  onOpenEvaluation: () => void;
}

export const SectoresPage: React.FC<SectoresPageProps> = ({ onOpenEvaluation }) => {
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
      <div className="w-full bg-white">
        <section className="relative pt-6 pb-20 md:pt-10 md:pb-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden min-h-[500px] lg:min-h-[560px] flex flex-col justify-end p-8 sm:p-12 lg:p-16 shadow-2xl border border-slate-800/40">
              <div className="absolute inset-0 z-0">
                <motion.img
                  src="/assets/images/sector_datacenter.jpg"
                  alt="Sectores empresariales e infraestructura digital DSI"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="w-full h-full object-cover object-center filter brightness-70 contrast-105 will-change-transform"
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
                  <span className="w-2 h-2 rounded-full bg-[#176BFF]" />
                  <span>Sectores & Industrias · DSI CYBERSECURITY</span>
                </motion.div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.08]">
                  <BlurText
                    text="Cada empresa tiene riesgos diferentes. Su protección también debería serlo."
                    italicWord="serlo."
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
                  Los requerimientos de continuidad de una planta industrial difieren radicalmente de los de un centro de distribución o una firma de servicios. Diseñamos planes de protección y recuperación ajustados al modelo operativo de cada sector.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <ScrollReveal delay={0.05}>
                <span className="text-xs font-bold uppercase tracking-wider text-[#176BFF]">
                  Especialización por Actividad
                </span>
              </ScrollReveal>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#101C32] mt-2 mb-4 font-display">
                <BlurText
                  text="Organizaciones preparadas para cualquier escenario."
                  italicWord="escenario."
                  italicClassName="italic-serif text-[#176BFF]"
                />
              </h2>

              <ScrollReveal delay={0.15}>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Descubra cómo nuestras soluciones se adaptan a las exigencias operativas y regulatorias de los principales sectores.
                </p>
              </ScrollReveal>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
              {SECTORS_DATA.map((sector) => (
                <StaggerItem key={sector.id}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="relative h-56 w-full overflow-hidden">
                        <motion.img
                          src={sector.image}
                          alt={sector.name}
                          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-5 right-5 text-white flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0">
                            {getSectorIcon(sector.icon)}
                          </div>
                          <h3 className="text-lg font-bold font-display text-white leading-tight">
                            {sector.name}
                          </h3>
                        </div>
                      </div>

                      <div className="p-6 space-y-4">
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {sector.description}
                        </p>

                        <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
                          <div>
                            <span className="font-bold text-slate-700 block mb-0.5">Riesgo crítico:</span>
                            <span className="text-slate-500">{sector.threatScenario}</span>
                          </div>
                          <div>
                            <span className="font-bold text-[#176BFF] block mb-0.5">Enfoque DSI:</span>
                            <span className="text-slate-700">{sector.solutionApproach}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={onOpenEvaluation}
                        className="w-full py-2.5 px-4 bg-[#F8FAFC] hover:bg-[#176BFF] text-slate-700 hover:text-white text-xs font-semibold rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Consultar para este sector</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </motion.button>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <ScrollReveal delay={0.05}>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101C32] font-display">
                ¿Su sector requiere tiempos de recuperación específicos?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
                Analizamos la arquitectura tecnológica de su empresa y definimos los objetivos RPO y RTO adecuados para su volumen de transacciones.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenEvaluation}
                  className="px-8 py-4 bg-[#176BFF] hover:bg-[#1258d4] text-white font-bold text-sm rounded-xl transition-colors shadow-lg shadow-[#176BFF]/25 cursor-pointer"
                >
                  Solicitar evaluación para su sector
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
