import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  RotateCcw, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  AlertTriangle, 
  FileCheck2, 
  Eye, 
  Radio, 
  BatteryCharging, 
  CreditCard, 
  ShieldAlert,
  Info,
  Volume2
} from 'lucide-react';
import { SCENARIOS } from '../data/scenarios';
import type { Scenario } from '../types';
import { OutcomeBadge, StatusBadge } from './StatusBadge';
import { EvidenceDrawer } from './EvidenceDrawer';
import { InteractiveParameterSlider } from './InteractiveParameterSlider';
import { TermDefinition } from './TermDefinition';

interface ScenarioSimulatorProps {
  initialScenarioIndex?: number;
  onEvidenceDrawerChange?: (isOpen: boolean) => void;
  isPresenterMode?: boolean;
  onScenarioChange?: (index: number) => void;
}

export const ScenarioSimulator: React.FC<ScenarioSimulatorProps> = ({
  initialScenarioIndex = 0,
  onEvidenceDrawerChange,
  isPresenterMode = false,
  onScenarioChange,
}) => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(initialScenarioIndex);
  const [currentStep, setCurrentStep] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isEvidenceOpen, setIsEvidenceOpen] = useState(false);
  const [showPresenterScript, setShowPresenterScript] = useState(isPresenterMode);

  const setEvidenceDrawerOpen = (open: boolean) => {
    setIsEvidenceOpen(open);
    onEvidenceDrawerChange?.(open);
  };

  // Sync external index change if provided
  useEffect(() => {
    setSelectedScenarioIndex(initialScenarioIndex);
    setCurrentStep(1);
  }, [initialScenarioIndex]);

  const scenario: Scenario = SCENARIOS[selectedScenarioIndex];
  const totalSteps = 5;

  // Auto-play through simulation steps (attract mode for booth)
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= totalSteps) {
            setIsAutoPlaying(false);
            return totalSteps;
          }
          return prev + 1;
        });
      }, 3500);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((c) => c + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((c) => c - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setIsAutoPlaying(false);
  };

  const switchScenario = (idx: number) => {
    setSelectedScenarioIndex(idx);
    setCurrentStep(1);
    setIsAutoPlaying(false);
    onScenarioChange?.(idx);
  };

  // Keyboard controls listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setCurrentStep((c) => Math.min(totalSteps, c + 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentStep((c) => Math.max(1, c - 1));
      } else if (e.key.toLowerCase() === 'r') {
        setCurrentStep(1);
        setIsAutoPlaying(false);
      } else if (e.key.toLowerCase() === 'e') {
        setEvidenceDrawerOpen(!isEvidenceOpen);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="simulator" className="py-10 sm:py-16 lg:py-24 bg-[#0A1017] text-slate-100 relative overflow-hidden transition-all duration-300">
      {/* 55-65% Black Overlay for Dark Slate Look */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.60)' }} 
      />

      {/* Bright Logo Teal (#12C9D3) Ambient Glow Rings */}
      <div className="absolute top-10 left-1/4 w-[550px] h-[550px] bg-[#12C9D3]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[480px] h-[480px] bg-[#00AABB]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Concentric Glow Rings in Graphics (as specified) */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-[#12C9D3]/20 pointer-events-none animate-pulse" />
      <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-[#039EA5]/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5 sm:mb-8 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#0F1722] border border-[#039EA5] text-[#12C9D3] text-xs font-mono font-bold mb-2">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#12C9D3] animate-pulse" />
              <span>DECISION DIAGNOSTIC ENGINE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              CCE Scenario Simulator
            </h2>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-base text-slate-300 font-medium max-w-2xl leading-relaxed">
              Experience how CCE catches AI model blind spots, enforces enterprise constraints, and issues governed actions in real-time.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <StatusBadge status="SIMULATED" size="md" />
            {isPresenterMode && (
              <button
                onClick={() => setShowPresenterScript(!showPresenterScript)}
                className="text-xs font-mono font-bold px-3 py-2 sm:px-3.5 min-h-[44px] rounded-lg border border-[#1E2D3E] bg-[#0F1722] text-slate-200 hover:text-white hover:border-[#039EA5] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Volume2 className="w-4 h-4 text-[#12C9D3]" />
                <span>{showPresenterScript ? 'Hide Narration' : 'Show Narration'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Orientation Line (Section 3.5) */}
        <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-[#0F1722] border border-[#00AABB]/40 flex items-center gap-3 text-xs sm:text-sm text-slate-200 shadow-sm text-left">
          <span className="w-2.5 h-2.5 rounded-full bg-[#12C9D3] shrink-0 animate-pulse" />
          <span className="leading-relaxed">
            A short, simulated example of how CCE checks an AI decision before it is acted on. Press Next to step through it.
          </span>
        </div>

        {/* Mandatory Illustrative Demo Warning Banner (Larger per Section 5.3) */}
        <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-[#0A1017] border-2 border-[#00AABB]/60 flex items-center justify-between gap-3 text-xs sm:text-sm text-slate-100 font-mono shadow-md">
          <div className="flex items-center gap-2.5">
            <Info className="w-5 h-5 text-[#12C9D3] shrink-0" />
            <span>
              <strong className="text-white font-black">Illustrative Demo / Simulated:</strong> Fixed deterministic outcomes for demonstration purposes. Not connected to live production networks.
            </span>
          </div>
          <span className="text-xs text-slate-400 font-bold shortcut-hint hidden lg:inline shrink-0">
            Shortcuts: [→] Next | [←] Back | [R] Reset | [E] Evidence
          </span>
        </div>

        {/* 1. Scenario Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3.5 mb-5 sm:mb-8 text-left">
          {SCENARIOS.map((sc, idx) => {
            const isSelected = selectedScenarioIndex === idx;
            const icons = [Radio, BatteryCharging, CreditCard, ShieldAlert];
            const Icon = icons[idx % icons.length];

            return (
              <button
                key={sc.id}
                onClick={() => switchScenario(idx)}
                className={`p-2.5 sm:p-4 rounded-xl text-left transition-all border-2 relative cursor-pointer flex flex-col justify-between min-h-[110px] sm:min-h-[120px] ${
                  isSelected
                    ? 'bg-[#0F1722] border-[#00AABB] shadow-lg shadow-[#00AABB]/15'
                    : 'bg-[#0F1722]/70 border-[#1E2D3E] hover:bg-[#0F1722] hover:border-[#039EA5]'
                }`}
              >
                {isSelected && (
                  <span className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#12C9D3] shadow-sm animate-pulse" />
                )}
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2 text-[10px] sm:text-xs font-mono text-slate-300 font-bold">
                    <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isSelected ? 'text-[#12C9D3]' : 'text-slate-400'}`} />
                    <span className="break-words leading-tight">{sc.industry}</span>
                  </div>
                  <div className={`text-[11px] sm:text-sm font-extrabold leading-snug break-words ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                    {sc.title}
                  </div>
                </div>
                <div className="text-[10px] sm:text-xs text-[#12C9D3]/90 font-medium leading-tight break-words mt-1.5">
                  {sc.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Presenter Script Cue Card (Only shown when presenter mode is active) */}
        <AnimatePresence>
          {isPresenterMode && showPresenterScript && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-5 sm:mb-8 p-3.5 sm:p-5 rounded-xl bg-[#0F1722] border border-[#039EA5]/50 text-xs overflow-hidden shadow-md text-left"
            >
              <div className="flex items-center justify-between text-[#12C9D3] font-mono font-bold mb-3">
                <span className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-[#12C9D3]" />
                  <span className="text-xs sm:text-sm">Presenter Talking Points ({scenario.industry})</span>
                </span>
                <span className="text-[10px] sm:text-xs text-white font-bold bg-[#039EA5]/40 px-2 py-0.5 rounded">Presenter Cue</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3.5 text-slate-100">
                <div className="p-3 rounded-lg bg-[#0A1017] border border-[#1E2D3E]">
                  <strong className="text-[#12C9D3] text-xs uppercase tracking-wider block mb-1">1. The AI Setup:</strong>
                  <p className="text-xs leading-relaxed text-slate-200">{scenario.presenterNarration.setup}</p>
                </div>
                <div className="p-3 rounded-lg bg-[#0A1017] border border-[#1E2D3E]">
                  <strong className="text-[#D32F2F] text-xs uppercase tracking-wider block mb-1">2. The Blind Spot:</strong>
                  <p className="text-xs leading-relaxed text-slate-200">{scenario.presenterNarration.theBlindSpot}</p>
                </div>
                <div className="p-3 rounded-lg bg-[#0A1017] border border-[#1E2D3E]">
                  <strong className="text-[#00AABB] text-xs uppercase tracking-wider block mb-1">3. CCE Governed Value:</strong>
                  <p className="text-xs leading-relaxed text-slate-200">{scenario.presenterNarration.cceValuePitch}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Stage & Stepper Rail Container */}
        <div className="rounded-2xl border border-[#1E2D3E] bg-[#0F1722]/95 backdrop-blur-xl overflow-hidden shadow-2xl">
          {/* Orientation Line & Persistent Simulated Notice (Section 3.5 & 5.3) */}
          <div className="px-3.5 sm:px-5 py-2.5 bg-[#0A1017] border-b border-[#1E2D3E] text-xs sm:text-sm text-slate-200 font-medium flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#12C9D3] animate-pulse shrink-0" />
              <span>Follow this decision through five steps from proposal to audit.</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#0F1722] border border-[#039EA5] text-xs font-mono text-teal-200">
              <Info className="w-3.5 h-3.5 text-[#12C9D3] shrink-0" />
              <span className="font-extrabold text-white">Illustrative Demo / Simulated</span>
            </div>
          </div>

          {/* Stepper Progress Rail (Fixed & Stable position docked below header) */}
          <div className="sticky top-16 z-20 p-3 sm:p-5 border-b border-[#1E2D3E] bg-[#0A1017] flex items-center justify-between flex-wrap gap-2.5 sm:gap-4 shadow-sm">
            <div className="flex items-center gap-1.5 sm:gap-3 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto scrollbar-none">
              {[
                { num: 1, label: 'What the AI wanted to do', subtitle: 'AI Proposal' },
                { num: 2, label: 'What the AI missed', subtitle: 'Context & Blind Spots' },
                { num: 3, label: 'Which rules apply', subtitle: 'Policy Checks' },
                { num: 4, label: 'What CCE worked out', subtitle: 'CCE Evaluation (Live Slider)', isInteractive: true },
                { num: 5, label: 'What was decided', subtitle: 'Governed Verdict' },
              ].map((step) => {
                const isActive = currentStep === step.num;
                const isPassed = currentStep > step.num;

                return (
                  <button
                    key={step.num}
                    onClick={() => setCurrentStep(step.num)}
                    className={`flex items-center gap-2 px-2.5 sm:px-3.5 py-2 min-h-[44px] rounded-lg text-left font-mono transition-all shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#00AABB] text-white font-extrabold border-2 border-[#12C9D3] shadow-md'
                        : isPassed
                        ? 'bg-[#039EA5]/20 text-[#12C9D3] border border-[#039EA5] font-bold'
                        : 'bg-[#0F1722] text-slate-400 border border-[#1E2D3E] hover:text-white font-bold'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] sm:text-[11px] font-bold bg-black/40 shrink-0">
                      {isPassed ? '✓' : step.num}
                    </span>
                    <div className="flex flex-col text-left">
                      <span className={`text-[11px] sm:text-xs leading-tight ${isActive ? 'text-white font-black' : isPassed ? 'text-teal-200 font-bold' : 'text-slate-200'}`}>
                        {step.label}
                      </span>
                      <span className={`text-[9px] sm:text-[10px] leading-tight font-normal ${isActive ? 'text-teal-100' : 'text-slate-400'}`}>
                        {step.subtitle}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Stepper Actions with accessible min 44x44px touch targets */}
            <div className="flex items-center gap-1.5 sm:gap-2 ml-auto w-full sm:w-auto justify-between sm:justify-end pt-1.5 sm:pt-0 border-t sm:border-t-0 border-[#1E2D3E]">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                aria-label={isAutoPlaying ? 'Pause automatic playback' : 'Start automatic playback'}
                className={`min-h-[44px] px-3 sm:px-3.5 py-2 rounded-lg border text-[11px] sm:text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#12C9D3] focus-visible:outline-none ${
                  isAutoPlaying
                    ? 'bg-amber-500/20 text-amber-200 border-amber-400'
                    : 'bg-[#152232] text-slate-200 border-[#1E2D3E] hover:bg-[#1E2D3E]'
                }`}
              >
                <Play className="w-3.5 h-3.5 text-[#12C9D3]" />
                <span>{isAutoPlaying ? 'Pause Auto' : 'Auto Play'}</span>
              </button>

              <button
                onClick={handleReset}
                title="Reset simulation step"
                aria-label="Reset simulation step"
                className="min-h-[44px] min-w-[44px] p-2.5 rounded-lg bg-[#152232] border border-[#1E2D3E] text-slate-200 hover:text-white transition-colors cursor-pointer flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#12C9D3] focus-visible:outline-none"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={handlePrev}
                disabled={currentStep === 1}
                aria-label="Previous step"
                className="min-h-[44px] min-w-[44px] p-2.5 rounded-lg bg-[#152232] border border-[#1E2D3E] text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#1E2D3E] transition-colors cursor-pointer flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#12C9D3] focus-visible:outline-none"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                disabled={currentStep === totalSteps}
                aria-label="Next step"
                className="min-h-[44px] px-4 py-2 rounded-lg bg-[#00AABB] hover:bg-[#039EA5] text-white font-bold text-xs disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1.5 shadow-md cursor-pointer focus-visible:ring-2 focus-visible:ring-[#12C9D3] focus-visible:outline-none"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Stepper Body / Dynamic Content with Stable Minimum Height */}
          <div className="p-4 sm:p-6 lg:p-8 min-h-[500px] sm:min-h-[540px] text-left">
            <AnimatePresence mode="wait">
              {/* STEP 1: AI RECOMMENDATION */}
              {currentStep === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-[11px] sm:text-xs font-mono text-[#12C9D3] font-bold uppercase tracking-wider block">
                        Phase 01 / AI Proposal
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5 sm:mt-1">
                        What the AI wanted to do
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        Model Proposes Operational Action
                      </p>
                    </div>
                    <span className="self-start sm:self-auto px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#0A1017] border border-[#039EA5] text-[#12C9D3] text-xs font-mono font-bold">
                      Confidence: {(scenario.aiRecommendation.confidence * 100).toFixed(0)}%
                    </span>
                  </div>

                  {/* Human Stakes Lead (Section 4.4) */}
                  {scenario.humanStakes && (
                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#00AABB]/10 border border-[#00AABB]/40 text-xs sm:text-sm text-slate-100">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#12C9D3]" />
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#12C9D3] font-bold">
                          The Situation &amp; Human Stakes
                        </span>
                      </div>
                      <p className="leading-relaxed font-medium">
                        {scenario.humanStakes}
                      </p>
                    </div>
                  )}

                  {/* Non-expert friendly caption (Section 3.2) */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#0F1722] border border-[#00AABB]/40 text-xs sm:text-sm text-slate-200">
                    <strong className="text-[#12C9D3] block mb-1 font-mono uppercase tracking-wider text-[11px]">What is happening:</strong>
                    <p className="leading-relaxed font-medium">{scenario.presenterNarration.setup}</p>
                  </div>

                  <div className="p-4 sm:p-6 rounded-xl bg-[#0A1017] border border-[#1E2D3E]">
                    <div className="text-lg sm:text-2xl font-extrabold text-[#12C9D3]">
                      "{scenario.aiRecommendation.action}"
                    </div>
                    <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 text-xs">
                      <div className="p-3 sm:p-3.5 rounded-lg bg-[#0F1722] border border-[#1E2D3E]">
                        <span className="text-slate-300 font-bold block mb-1">Intended Optimization:</span>
                        <span className="text-white font-medium text-xs sm:text-sm leading-relaxed">
                          {scenario.aiRecommendation.intendedBenefit}
                        </span>
                      </div>
                      <div className="p-3 sm:p-3.5 rounded-lg bg-[#0F1722] border border-[#1E2D3E]">
                        <span className="text-slate-300 font-bold block mb-1">Requested Change:</span>
                        <span className="text-[#00AABB] font-mono font-bold text-sm sm:text-base">
                          {scenario.aiRecommendation.proposedMetricChange}
                        </span>
                      </div>
                    </div>

                    {/* Key Term Definitions for Non-Specialists (Section 4.1) */}
                    {scenario.id === 'telecom' && (
                      <div className="mt-3 pt-2.5 border-t border-[#1E2D3E]/80 flex flex-wrap items-center gap-2 text-xs">
                        <span className="text-slate-400 text-[11px] font-mono">Tap for term definition:</span>
                        <TermDefinition term="Spectrum capacity" definition="The portion of the radio network that carries traffic." />
                        <TermDefinition term="Network slice" definition="A reserved share of the mobile network for a specific purpose." />
                      </div>
                    )}

                    {/* Collapsible Technical Details (Section 3.6) */}
                    <details className="mt-3 pt-3 border-t border-[#1E2D3E]/80 text-left">
                      <summary className="cursor-pointer text-[11px] font-mono text-slate-400 hover:text-[#12C9D3] transition-colors min-h-[44px] inline-flex items-center py-2">
                        See technical model details
                      </summary>
                      <div className="text-[11px] font-mono text-slate-300 mt-1.5 pl-2.5 border-l-2 border-[#039EA5]">
                        Originating Model: {scenario.aiRecommendation.modelType}
                      </div>
                    </details>
                  </div>

                  <div className="p-3.5 sm:p-5 rounded-xl bg-[#0F1722] border border-[#039EA5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                    <div className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                      <strong className="text-white font-bold">The Problem:</strong> The model calculated its objective function accurately, but is completely unaware of enterprise SLAs and physical hazards.
                    </div>
                    <button
                      onClick={handleNext}
                      className="w-full sm:w-auto min-h-[44px] px-4 sm:px-5 py-2.5 rounded-xl bg-[#00AABB] hover:bg-[#039EA5] text-white text-xs font-bold shrink-0 flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                    >
                      <span>Inspect What It Missed</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: CONTEXT & BLIND SPOTS */}
              {currentStep === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-[11px] sm:text-xs font-mono text-[#D32F2F] font-bold uppercase tracking-wider block">
                        Phase 02 / Context &amp; Blind Spots
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5 sm:mt-1">
                        What the AI missed
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        Critical Enterprise Realities AI Overlooked
                      </p>
                    </div>
                    <span className="self-start sm:self-auto px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-rose-950/80 border-2 border-[#D32F2F] text-rose-200 text-xs font-mono font-bold flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-[#D32F2F]" />
                      <span>{scenario.blindSpots.length} Blind Spots Flagged</span>
                    </span>
                  </div>

                  {/* Non-expert friendly caption (Section 3.2) */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-rose-950/30 border border-[#D32F2F]/50 text-xs sm:text-sm text-slate-200">
                    <strong className="text-[#D32F2F] block mb-1 font-mono uppercase tracking-wider text-[11px]">What is happening:</strong>
                    <p className="leading-relaxed font-medium">{scenario.presenterNarration.theBlindSpot}</p>
                  </div>

                  {/* Blind spots list with Alert Red (#D32F2F) as specified */}
                  <div className="p-3.5 sm:p-5 rounded-xl bg-rose-950/40 border-2 border-[#D32F2F] space-y-2 sm:space-y-2.5">
                    <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#D32F2F] font-black mb-1 sm:mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-[#D32F2F]" />
                      <span>Critical Blind Spots Uncovered by CCE</span>
                    </div>
                    {scenario.blindSpots.map((spot, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-100 font-medium">
                        <span className="w-2 h-2 rounded-full bg-[#D32F2F] mt-1.5 shrink-0" />
                        <span>{spot}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Term Definitions for Non-Specialists (Section 4.1) */}
                  {scenario.id === 'telecom' && (
                    <div className="p-3 rounded-xl bg-[#0A1017] border border-[#1E2D3E] flex flex-wrap items-center gap-2 text-xs">
                      <span className="text-slate-400 text-[11px] font-mono">Tap for term definition:</span>
                      <TermDefinition term="SLA" definition="The level of service a customer, such as a hospital, has been promised." />
                      <TermDefinition term="QoE" definition="How smooth the experience looks to users, for example video without buffering." />
                      <TermDefinition term="Network slice" definition="A reserved share of the mobile network for a specific purpose." />
                    </div>
                  )}

                  {/* Context facts table */}
                  <div className="space-y-2 sm:space-y-2.5">
                    <div className="text-[11px] sm:text-xs font-mono text-slate-300 uppercase tracking-wider font-bold">
                      Reconciled Telemetry &amp; Context Registers
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 text-xs">
                      {scenario.contextFacts.map((fact, idx) => (
                        <div
                          key={idx}
                          className={`p-3 sm:p-3.5 rounded-xl border-2 ${
                            fact.isFlagged
                              ? 'bg-rose-950/40 border-[#D32F2F]'
                              : 'bg-[#0A1017] border-[#1E2D3E]'
                          }`}
                        >
                          <div className="flex items-center justify-between text-slate-300 text-[11px] sm:text-xs mb-1">
                            <span className="font-medium">
                              {fact.label === 'Contract SLA Headroom' ? (
                                <TermDefinition term="SLA" definition="The level of service a customer, such as a hospital, has been promised.">
                                  Contract SLA Headroom
                                </TermDefinition>
                              ) : fact.label === 'Protected Slice' ? (
                                <TermDefinition term="Network slice" definition="A reserved share of the mobile network for a specific purpose.">
                                  Protected Slice
                                </TermDefinition>
                              ) : (
                                fact.label
                              )}
                            </span>
                            <span className="font-mono text-[#12C9D3] font-semibold">{fact.source}</span>
                          </div>
                          <div className={`text-xs sm:text-sm ${fact.isFlagged ? 'text-rose-200 font-black' : 'text-white font-bold'}`}>
                            {fact.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: POLICY & CONSTRAINTS */}
              {currentStep === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-[11px] sm:text-xs font-mono text-[#039EA5] font-bold uppercase tracking-wider block">
                        Phase 03 / Policy Checks
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5 sm:mt-1">
                        Which rules apply
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        Hard Safety &amp; Contract Constraints Checked
                      </p>
                    </div>
                    <span className="self-start sm:self-auto px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#0A1017] border border-[#039EA5] text-[#12C9D3] text-xs font-mono font-bold">
                      Deterministic Rules
                    </span>
                  </div>

                  {/* Non-expert friendly caption (Section 3.2) */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#0F1722] border border-[#039EA5]/40 text-xs sm:text-sm text-slate-200">
                    <strong className="text-[#12C9D3] block mb-1 font-mono uppercase tracking-wider text-[11px]">What is happening:</strong>
                    <p className="leading-relaxed font-medium">
                      CCE evaluates whether the AI proposal violates fixed safety rules, contract penalties, or regulatory standards before any command is executed.
                    </p>
                  </div>

                  {/* Key Term Definitions for Non-Specialists (Section 4.1) */}
                  {scenario.id === 'telecom' && (
                    <div className="p-3 rounded-xl bg-[#0A1017] border border-[#1E2D3E] flex flex-wrap items-center gap-2 text-xs">
                      <span className="text-slate-400 text-[11px] font-mono">Tap for term definition:</span>
                      <TermDefinition term="Spectrum capacity / radio block" definition="The portion of the radio network that carries traffic." />
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-200 font-medium">
                    CCE does not use an LLM or probabilistic model for verdicts. It evaluates deterministic enterprise policies, regulatory standards, and physical limits against verified context.
                  </p>

                  <div className="space-y-2.5 sm:space-y-3.5">
                    {scenario.constraints.map((rule, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 sm:p-5 rounded-xl bg-[#0A1017] border border-[#1E2D3E] hover:border-[#039EA5] transition-colors shadow-sm"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1.5">
                          <span className="text-sm sm:text-base font-extrabold text-white">{rule.name}</span>
                          <span className={`self-start sm:self-auto text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded uppercase font-black ${
                            rule.severity === 'CRITICAL' ? 'bg-rose-950 text-rose-200 border border-[#D32F2F]' : 'bg-amber-950 text-amber-200 border border-amber-500'
                          }`}>
                            {rule.severity} Severity
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed mb-2.5 sm:mb-3">
                          {rule.description}
                        </p>
                        <div className="p-2.5 sm:p-3 rounded-lg bg-[#0F1722] border border-[#039EA5] text-[11px] sm:text-xs font-mono text-[#12C9D3] font-bold">
                          <strong className="text-white">Active Threshold:</strong> {rule.threshold}
                        </div>

                        {/* Collapsible Technical Details (Section 3.6) */}
                        <details className="mt-2.5 pt-2 border-t border-[#1E2D3E]/80 text-left">
                          <summary className="cursor-pointer text-[11px] font-mono text-slate-400 hover:text-[#12C9D3] transition-colors min-h-[44px] inline-flex items-center py-2">
                            See technical rule identifier
                          </summary>
                          <div className="text-[11px] font-mono text-slate-300 mt-1 pl-2.5 border-l-2 border-[#039EA5]">
                            Rule Code: {rule.code}
                          </div>
                        </details>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 4: CCE EVALUATION ENGINE */}
              {currentStep === 4 && (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-[11px] sm:text-xs font-mono text-[#00AABB] font-bold uppercase tracking-wider block">
                        Phase 04 / CCE Evaluation (Live Slider)
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5 sm:mt-1">
                        What CCE worked out
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        Arbitration &amp; Constraint Solving
                      </p>
                    </div>
                    <span className="self-start sm:self-auto px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#0A1017] border border-[#00AABB] text-[#12C9D3] text-xs font-mono font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#12C9D3]" />
                      <span>Rule-Based Check</span>
                    </span>
                  </div>

                  {/* Non-expert friendly caption (Section 3.2) */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#0F1722] border border-[#00AABB]/40 text-xs sm:text-sm text-slate-200">
                    <strong className="text-[#12C9D3] block mb-1 font-mono uppercase tracking-wider text-[11px]">What is happening:</strong>
                    <p className="leading-relaxed font-medium">
                      Instead of rejecting the action outright, CCE solves for a safe operational envelope where the benefit is achieved without crossing danger thresholds.
                    </p>
                  </div>

                  <div className="space-y-2.5 sm:space-y-3.5">
                    {scenario.evaluationSteps.map((evStep) => (
                      <div
                        key={evStep.stepNumber}
                        className="p-3.5 sm:p-4 rounded-xl bg-[#0A1017] border border-[#1E2D3E] flex flex-col sm:flex-row items-start sm:items-start justify-between gap-2 sm:gap-4"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#00AABB] text-white flex items-center justify-center text-[11px] sm:text-xs font-mono font-black shrink-0">
                              {evStep.stepNumber}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-white">
                              {evStep.title}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-200 pl-7 sm:pl-8 leading-relaxed font-medium">
                            {evStep.summary}
                          </p>
                        </div>
                        <div className="text-left sm:text-right shrink-0 pl-7 sm:pl-0">
                          <span className={`text-[10px] sm:text-xs font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded font-bold ${
                            evStep.status === 'PASSED'
                              ? 'bg-[#008361]/20 text-[#008361] border border-[#008361]'
                              : evStep.status === 'LIMITATION_APPLIED'
                              ? 'bg-[#00AABB]/20 text-[#12C9D3] border border-[#00AABB]'
                              : 'bg-amber-950 text-amber-200 border border-amber-500'
                          }`}>
                            {evStep.status.replace('_', ' ')}
                          </span>
                          <div className="text-[10px] sm:text-xs font-mono text-[#12C9D3] font-bold mt-1 sm:mt-1.5">
                            {evStep.telemetryRef}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Real-Time Decision Boundary Solver (Supports all 4 scenarios) */}
                  <div className="pt-2">
                    <InteractiveParameterSlider scenarioId={scenario.id} />
                  </div>
                </motion.div>
              )}

              {/* STEP 5: GOVERNED OUTCOME & EVIDENCE */}
              {currentStep === 5 && (
                <motion.div
                  key="step-5"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-[11px] sm:text-xs font-mono text-[#00AABB] font-bold uppercase tracking-wider block">
                        Phase 05 / Governed Verdict
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5 sm:mt-1">
                        What was decided
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        Decision Assured with Audit Trail
                      </p>
                    </div>
                    <div className="self-start sm:self-auto">
                      <OutcomeBadge outcome={scenario.outcome.type} size="lg" />
                    </div>
                  </div>

                  {/* Non-expert friendly caption (Section 3.2) */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#0F1722] border border-[#008361]/50 text-xs sm:text-sm text-slate-200">
                    <strong className="text-[#12C9D3] block mb-1 font-mono uppercase tracking-wider text-[11px]">What is happening:</strong>
                    <p className="leading-relaxed font-medium">{scenario.presenterNarration.cceValuePitch}</p>
                  </div>

                  {/* Key Term Definitions for Non-Specialists (Section 4.1) */}
                  {scenario.id === 'telecom' && (
                    <div className="p-3 rounded-xl bg-[#0A1017] border border-[#1E2D3E] flex flex-wrap items-center gap-2 text-xs">
                      <span className="text-slate-400 text-[11px] font-mono">Tap for term definition:</span>
                      <TermDefinition term="Staged capacity" definition="A small, safe step instead of one big change." />
                    </div>
                  )}

                  {/* Governed Action Banner */}
                  <div className="p-4 sm:p-6 rounded-xl bg-[#0A1017] border-2 border-[#00AABB] shadow-2xl">
                    <div className="text-[11px] sm:text-xs font-mono uppercase text-[#12C9D3] font-black mb-1.5 sm:mb-2">
                      Governed Action Dispatched to Enterprise Actuator
                    </div>
                    <div className="text-base sm:text-xl font-black text-white">
                      "{scenario.outcome.governedAction}"
                    </div>
                    <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                      {scenario.outcome.explanation}
                    </p>
                    <div className="mt-3.5 sm:mt-4 pt-3 sm:pt-3.5 border-t border-[#1E2D3E] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                      <span className="text-slate-300 font-mono font-medium">
                        Safeguard Enforced: <span className="text-[#12C9D3] font-bold">{scenario.outcome.safeguardApplied}</span>
                      </span>
                      <span className="text-[#00AABB] font-mono font-bold">
                        Human Review: {scenario.evidence.humanReviewStatus}
                      </span>
                    </div>
                  </div>

                  {/* Human Oversight in the loop (Section 3.7) */}
                  <div id="human-oversight-card" className="p-4 sm:p-5 rounded-xl bg-[#0F1722] border border-[#1E2D3E] space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#12C9D3] animate-pulse" />
                        <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono">
                          Human Oversight in the Loop
                        </span>
                      </div>
                      <span className="self-start sm:self-auto text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-[#039EA5]/20 text-[#12C9D3] border border-[#039EA5]">
                        Status: {scenario.evidence.humanReviewStatus}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-[#0A1017] border border-[#1E2D3E]">
                        <span className="text-slate-400 font-medium block mb-1">Designated Role Notified:</span>
                        <span className="text-white font-bold">{scenario.evidence.assignedAuditorRole}</span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#0A1017] border border-[#1E2D3E]">
                        <span className="text-slate-400 font-medium block mb-1">Available Human Actions:</span>
                        <div className="flex flex-wrap gap-1.5 mt-1 font-mono text-[11px] font-bold">
                          <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-200 border border-blue-700">Review</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-200 border border-emerald-700">Approve</span>
                          <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-200 border border-amber-700">Override</span>
                          <span className="px-2 py-0.5 rounded bg-rose-950 text-rose-200 border border-rose-700">Escalate</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Evidence Drawer Trigger Strip */}
                  <div className="p-3.5 sm:p-5 rounded-xl bg-[#0F1722] border border-[#039EA5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 shadow-lg">
                    <div>
                      <div className="flex items-center gap-2">
                        <FileCheck2 className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#12C9D3] shrink-0" />
                        <span className="text-sm sm:text-base font-extrabold text-white">
                          Decision Evidence Record Generated
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-300 font-medium mt-1">
                        Record ID: <span className="font-mono text-white font-bold">{scenario.evidence.decisionId}</span> (Deterministic hash &amp; telemetry snapshot)
                      </p>
                    </div>

                    <button
                      onClick={() => setEvidenceDrawerOpen(true)}
                      className="w-full sm:w-auto min-h-[44px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#00AABB] hover:bg-[#039EA5] text-white font-extrabold text-xs shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Inspect Evidence Drawer</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Stepper Navigation Bar (ensures Next/Back stay reachable on 360x640) */}
          <div className="p-3 sm:p-4 border-t border-[#1E2D3E] bg-[#0A1017] flex items-center justify-between text-xs">
            <button
              onClick={handlePrev}
              disabled={currentStep === 1}
              aria-label="Previous step"
              className="min-h-[44px] px-3.5 py-2 rounded-lg bg-[#152232] border border-[#1E2D3E] text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer font-bold focus-visible:ring-2 focus-visible:ring-[#12C9D3] focus-visible:outline-none"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <span className="text-slate-400 font-mono text-[11px] font-bold">
              Step {currentStep} of {totalSteps}
            </span>
            <button
              onClick={handleNext}
              disabled={currentStep === totalSteps}
              aria-label="Next step"
              className="min-h-[44px] px-4 py-2 rounded-lg bg-[#00AABB] hover:bg-[#039EA5] text-white font-bold disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer shadow-md focus-visible:ring-2 focus-visible:ring-[#12C9D3] focus-visible:outline-none"
            >
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Evidence Drawer Component */}
        <EvidenceDrawer
          isOpen={isEvidenceOpen}
          onClose={() => setEvidenceDrawerOpen(false)}
          scenario={scenario}
        />
      </div>
    </section>
  );
};
