import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { ReactLenis } from 'lenis/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EvaluationModal } from './components/EvaluationModal';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { NosotrosPage } from './pages/NosotrosPage';
import { SolucionesHubPage } from './pages/SolucionesHubPage';
import { SolutionDetail } from './pages/SolutionDetail';
import { SectoresPage } from './pages/SectoresPage';
import { ContactoPage } from './pages/ContactoPage';
import { NotFoundPage } from './pages/NotFoundPage';

interface AnimatedRoutesProps {
  onOpenEvaluation: (solution?: string) => void;
}

const AnimatedRoutes: React.FC<AnimatedRoutesProps> = ({ onOpenEvaluation }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage onOpenEvaluation={onOpenEvaluation} />} />
        <Route path="/nosotros" element={<NosotrosPage onOpenEvaluation={() => onOpenEvaluation('general')} />} />
        <Route path="/soluciones" element={<SolucionesHubPage onOpenEvaluation={onOpenEvaluation} />} />
        <Route path="/soluciones/:slug" element={<SolutionDetail onOpenEvaluation={onOpenEvaluation} />} />
        <Route path="/soluciones/ciberseguridad-empresarial" element={<Navigate to="/soluciones/ciberseguridad" replace />} />
        <Route path="/soluciones/continuidad-negocio" element={<Navigate to="/soluciones/continuidad" replace />} />
        <Route path="/sectores" element={<SectoresPage onOpenEvaluation={() => onOpenEvaluation('general')} />} />
        <Route path="/contacto" element={<ContactoPage onOpenEvaluation={() => onOpenEvaluation('general')} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  const [evaluationOpen, setEvaluationOpen] = useState(false);
  const [evaluationSolution, setEvaluationSolution] = useState<string>('general');

  const handleOpenEvaluation = (solution?: string) => {
    setEvaluationSolution(solution || 'general');
    setEvaluationOpen(true);
  };

  const handleCloseEvaluation = () => {
    setEvaluationOpen(false);
  };

  const lenisOptions = {
    duration: 1.25,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical' as const,
    gestureOrientation: 'vertical' as const,
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.2,
    touchInertiaMultiplier: 1.2,
    syncTouch: false,
    autoRaf: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-white text-[#111827]">
          <Navbar onOpenEvaluation={() => handleOpenEvaluation('general')} />

          <main className="flex-1">
            <AnimatedRoutes onOpenEvaluation={handleOpenEvaluation} />
          </main>

          <Footer onOpenEvaluation={() => handleOpenEvaluation('general')} />

          <EvaluationModal
            isOpen={evaluationOpen}
            onClose={handleCloseEvaluation}
            initialSolution={evaluationSolution}
          />
        </div>
      </BrowserRouter>
    </ReactLenis>
  );
}


