
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageLayoutProps {
  eyebrow: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  lastUpdated?: string;
  sections: LegalSection[];
}

export function LegalPageLayout({
  eyebrow,
  title,
  description,
  icon,
  lastUpdated = '17 de noviembre de 2026',
  sections,
}: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#101C32]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[480px] w-[480px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-[-220px] h-[400px] w-[400px] rounded-full bg-slate-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8 lg:pb-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-[#176BFF]"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>

          <div className="mt-14 max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#176BFF]">
              {icon}
              {eyebrow}
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-[#101C32] sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
              {description}
            </p>

            <p className="mt-8 text-xs font-medium text-slate-400">
              Última actualización: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-8 lg:py-20">
        {/* Table of contents */}
        <aside className="h-fit lg:sticky lg:top-28">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            En esta página
          </p>

          <nav className="space-y-1">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="group flex items-start gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-500 transition-colors hover:bg-white hover:text-[#176BFF]"
              >
                <span className="mt-0.5 text-xs font-semibold text-slate-300 group-hover:text-[#176BFF]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{section.title}</span>
              </a>
            ))}
          </nav>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
            <ShieldCheck className="mb-3 h-6 w-6 text-[#176BFF]" />
            <p className="text-sm font-semibold text-[#101C32]">
              ¿Tienes alguna consulta?
            </p>
            <p className="mt-2 text-xs leading-6 text-slate-500">
              Nuestro equipo puede orientarte sobre esta información.
            </p>
            <Link
              to="/contacto"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#176BFF] hover:gap-3 transition-all"
            >
              Contáctanos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>

        {/* Legal text */}
        <div className="min-w-0">
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
            <div className="mb-10 border-b border-slate-100 pb-8">
              <p className="text-sm leading-7 text-slate-500">
                La siguiente información describe los criterios y condiciones
                aplicables a la relación con DSI CYBERSECURITY. Te recomendamos
                leer cada apartado para conocer su alcance.
              </p>
            </div>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.45, delay: Math.min(index * 0.03, 0.15) }}
                  className="scroll-mt-28"
                >
                  <div className="mb-4 flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-[#176BFF]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="pt-1 text-xl font-bold tracking-tight text-[#101C32] sm:text-2xl">
                      {section.title}
                    </h2>
                  </div>

                  <div className="pl-0 text-sm leading-8 text-slate-600 sm:pl-[52px]">
                    {section.content}
                  </div>
                </motion.section>
              ))}
            </div>
          </div>

          {/* Bottom navigation */}
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold text-[#101C32]">
                ¿Necesitas más información?
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Estamos disponibles para atender tus consultas.
              </p>
            </div>

            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 rounded-xl bg-[#176BFF] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700"
            >
              Contactar
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
