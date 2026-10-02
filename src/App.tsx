import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ScenarioSimulator } from './components/ScenarioSimulator';
import { HowItWorks } from './components/HowItWorks';
import { IndustriesSection } from './components/IndustriesSection';
import { PillarsSection } from './components/PillarsSection';
import { PresenterModal } from './components/PresenterModal';
import { ContactModal } from './components/ContactModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';
import { SCENARIOS } from './data/scenarios';

export function App() {
  const [isPresenterOpen, setIsPresenterOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isEvidenceOpen, setIsEvidenceOpen] = useState<boolean>(false);
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState<number>(0);

  // Simple presenter mode check (?presenter=1 or ?presenter=true)
  const [isPresenterMode, setIsPresenterMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const params = new URLSearchParams(window.location.search);
    return params.get('presenter') === '1' || params.get('presenter') === 'true';
  });

  useEffect(() => {
    const checkPresenter = () => {
      const params = new URLSearchParams(window.location.search);
      setIsPresenterMode(params.get('presenter') === '1' || params.get('presenter') === 'true');
    };
    checkPresenter();
    window.addEventListener('popstate', checkPresenter);
    return () => window.removeEventListener('popstate', checkPresenter);
  }, []);

  // Set presentation scale mode permanently on mount
  useEffect(() => {
    document.documentElement.classList.add('booth-mode');
  }, []);

  // Key bindings: P for Presenter notes only when in presenter mode
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) return;

      if (e.key.toLowerCase() === 'p' && isPresenterMode) {
        setIsPresenterOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, [isPresenterMode]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFEFD] text-[#1E1E1E]">
      {/* Navigation Header */}
      <Header
        isPresenterMode={isPresenterMode}
        openPresenter={() => setIsPresenterOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full pb-12 sm:pb-8">
        {/* 1. Hero Section: Iridescent Teal Ribbon, AI Governance Band & Chaos to Clarity */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* 2. Interactive Scenario Simulator (Decision Diagnostic Section) */}
        <ScenarioSimulator 
          isPresenterMode={isPresenterMode}
          initialScenarioIndex={selectedScenarioIndex}
          onScenarioChange={setSelectedScenarioIndex}
          onEvidenceDrawerChange={setIsEvidenceOpen}
        />

        {/* 3. Five-Layer Architecture & Operational Lifecycle */}
        <HowItWorks />

        {/* 4. Industries & Operational Archetypes */}
        <IndustriesSection
          onSelectScenario={(idx) => {
            setSelectedScenarioIndex(idx);
          }}
        />

        {/* 5. Enterprise Architectural Pillars */}
        <PillarsSection />
      </main>

      {/* Floating WhatsApp Action Button (#008361) */}
      <WhatsAppButton isHidden={isPresenterOpen || isContactOpen || isEvidenceOpen} />

      {/* Footer */}
      <Footer
        isPresenterMode={isPresenterMode}
        onOpenContact={() => setIsContactOpen(true)}
        openPresenter={() => setIsPresenterOpen(true)}
      />

      {/* Presenter Modal */}
      <PresenterModal
        isOpen={isPresenterOpen}
        onClose={() => setIsPresenterOpen(false)}
      />

      {/* Contact Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        activeScenarioTitle={SCENARIOS[selectedScenarioIndex]?.title}
      />
    </div>
  );
}

export default App;
