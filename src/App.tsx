import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ScenarioSimulator } from './components/ScenarioSimulator';
import { HowItWorks } from './components/HowItWorks';
import { IndustriesSection } from './components/IndustriesSection';
import { PillarsSection } from './components/PillarsSection';
import { PresenterModal } from './components/PresenterModal';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export function App() {
  const [isPresenterOpen, setIsPresenterOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState<number>(0);

  // Set dark mode and high-visibility scale permanently on mount
  useEffect(() => {
    document.documentElement.classList.add('dark', 'booth-mode');
  }, []);

  // Global key bindings: P for Presenter notes
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) return;

      if (e.key.toLowerCase() === 'p') {
        setIsPresenterOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-page)] text-[var(--text-primary)]">
      {/* Navigation Header */}
      <Header
        openPresenter={() => setIsPresenterOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section: Iridescent Ribbon, One Platform & Chaos to Clarity */}
        <Hero />

        {/* 2. Interactive Scenario Simulator (Telecom 18% -> 5% Hero, EV, Money Mule, SecOps) */}
        <ScenarioSimulator initialScenarioIndex={selectedScenarioIndex} />

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

      {/* Footer */}
      <Footer
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
      />
    </div>
  );
}

export default App;
