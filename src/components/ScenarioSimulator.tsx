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

interface ScenarioSimulatorProps {
  initialScenarioIndex?: number;
}

export const ScenarioSimulator: React.FC<ScenarioSimulatorProps> = ({
  initialScenarioIndex = 0,
}) => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(initialScenarioIndex);
  const [currentStep, setCurrentStep] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isEvidenceOpen, setIsEvidenceOpen] = useState(false);
  const [showPresenterScript, setShowPresenterScript] = useState(true);

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
        setIsEvidenceOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="simulator" className="py-16 sm:py-24 bg-slate-950 text-slate-100 relative overflow-hidden transition-all duration-300">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950 border-2 border-indigo-700 text-indigo-200 text-xs font-mono font-bold mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Interactive Decision Assurance Engine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              CCE Scenario Simulator
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-200 font-medium max-w-2xl">
              Experience how CCE catches AI model blind spots, enforces enterprise constraints, and issues governed actions in real-time.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <StatusBadge status="SIMULATED" size="md" />
            <button
              onClick={() => setShowPresenterScript(!showPresenterScript)}
              className="text-xs font-mono font-bold px-3.5 py-2 rounded-lg border-2 border-slate-700 bg-slate-900 text-slate-200 hover:text-white hover:border-slate-500 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Volume2 className="w-4 h-4 text-cyan-400" />
              <span>{showPresenterScript ? 'Hide Narration' : 'Show Narration'}</span>
            </button>
          </div>
        </div>

        {/* Mandatory Illustrative Demo Warning Banner */}
        <div className="mb-6 p-3.5 rounded-xl bg-slate-900 border-2 border-slate-700 flex items-center justify-between gap-3 text-xs text-slate-200 font-mono">
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              <strong className="text-white">Illustrative Demo:</strong> Fixed deterministic outcomes. Not connected to production systems.
            </span>
          </div>
          <span className="text-xs text-slate-300 font-bold hidden sm:inline">
            Shortcuts: [→] Next | [←] Back | [R] Reset | [E] Evidence
          </span>
        </div>

        {/* 1. Scenario Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
          {SCENARIOS.map((sc, idx) => {
            const isSelected = selectedScenarioIndex === idx;
            const icons = [Radio, BatteryCharging, CreditCard, ShieldAlert];
            const Icon = icons[idx % icons.length];

            return (
              <button
                key={sc.id}
                onClick={() => switchScenario(idx)}
                className={`p-4 rounded-xl text-left transition-all border-2 relative cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 border-indigo-400 shadow-lg shadow-indigo-500/20'
                    : 'bg-slate-900/70 border-slate-700/80 hover:bg-slate-900 hover:border-slate-500'
                }`}
              >
                {isSelected && (
                  <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm" />
                )}
                <div className="flex items-center gap-2 mb-2 text-xs font-mono text-slate-300 font-bold">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span className="truncate">{sc.industry}</span>
                </div>
                <div className={`text-sm font-extrabold truncate ${isSelected ? 'text-white' : 'text-slate-100'}`}>
                  {sc.title}
                </div>
                <div className="text-xs text-cyan-200/90 font-medium truncate mt-1">
                  {sc.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Presenter Script Cue Card (Collapsible) */}
        <AnimatePresence>
          {showPresenterScript && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 p-5 rounded-xl bg-indigo-950/80 border-2 border-indigo-700 text-xs overflow-hidden shadow-md"
            >
              <div className="flex items-center justify-between text-indigo-200 font-mono font-bold mb-3">
                <span className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">Presenter Talking Points ({scenario.industry})</span>
                </span>
                <span className="text-xs text-slate-300 font-bold bg-indigo-900 px-2 py-0.5 rounded">Presenter Cue</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-slate-100">
                <div className="p-3 rounded-lg bg-slate-950 border border-indigo-700">
                  <strong className="text-cyan-300 text-xs uppercase tracking-wider block mb-1">1. The AI Setup:</strong>
                  <p className="text-xs leading-relaxed text-slate-200">{scenario.presenterNarration.setup}</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-indigo-700">
                  <strong className="text-amber-300 text-xs uppercase tracking-wider block mb-1">2. The Blind Spot:</strong>
                  <p className="text-xs leading-relaxed text-slate-200">{scenario.presenterNarration.theBlindSpot}</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-indigo-700">
                  <strong className="text-emerald-300 text-xs uppercase tracking-wider block mb-1">3. CCE Governed Value:</strong>
                  <p className="text-xs leading-relaxed text-slate-200">{scenario.presenterNarration.cceValuePitch}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Stage & Stepper Rail Container */}
        <div className="rounded-2xl border-2 border-slate-700 bg-slate-900/90 backdrop-blur-xl overflow-hidden shadow-2xl">
          {/* Stepper Progress Rail */}
          <div className="p-4 sm:p-5 border-b-2 border-slate-700 bg-slate-950/90 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
              {[
                { num: 1, label: 'AI Proposal' },
                { num: 2, label: 'Context & Blind Spots' },
                { num: 3, label: 'Policy Checks' },
                { num: 4, label: 'CCE Evaluation' },
                { num: 5, label: 'Governed Verdict' },
              ].map((step) => {
                const isActive = currentStep === step.num;
                const isPassed = currentStep > step.num;

                return (
                  <button
                    key={step.num}
                    onClick={() => setCurrentStep(step.num)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono transition-all shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-indigo-600 text-white font-extrabold border-2 border-indigo-400 shadow-md'
                        : isPassed
                        ? 'bg-emerald-950 text-emerald-200 border-2 border-emerald-600 font-bold'
                        : 'bg-slate-900 text-slate-300 border-2 border-slate-700 hover:text-white font-bold'
                    }`}
                  >
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-[11px] font-bold bg-black/40">
                      {isPassed ? '✓' : step.num}
                    </span>
                    <span>{step.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Stepper Actions */}
            <div className="flex items-center gap-2 ml-auto">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-3.5 py-2 rounded-lg border-2 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  isAutoPlaying
                    ? 'bg-amber-500/30 text-amber-200 border-amber-400'
                    : 'bg-slate-800 text-slate-200 border-slate-600 hover:bg-slate-700'
                }`}
              >
                <Play className="w-3.5 h-3.5" />
                <span>{isAutoPlaying ? 'Pause Auto' : 'Auto Play'}</span>
              </button>

              <button
                onClick={handleReset}
                title="Reset simulation step"
                className="p-2 rounded-lg bg-slate-800 border-2 border-slate-600 text-slate-200 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={handlePrev}
                disabled={currentStep === 1}
                className="p-2 rounded-lg bg-slate-800 border-2 border-slate-600 text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                disabled={currentStep === totalSteps}
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-bold text-xs disabled:opacity-30 disabled:cursor-not-allowed hover:bg-indigo-500 transition-all flex items-center gap-1.5 shadow-md cursor-pointer"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Stepper Body / Dynamic Content */}
          <div className="p-6 sm:p-8 min-h-[460px]">
            <AnimatePresence mode="wait">
              {/* STEP 1: AI RECOMMENDATION */}
              {currentStep === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-indigo-300 font-bold uppercase tracking-wider">
                        Phase 01 / Autonomous AI Recommendation
                      </span>
                      <h3 className="text-2xl font-black text-white mt-1">
                        Model Proposes Operational Action
                      </h3>
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full bg-blue-950 border-2 border-blue-600 text-blue-200 text-xs font-mono font-bold">
                      Confidence: {(scenario.aiRecommendation.confidence * 100).toFixed(0)}%
                    </span>
                  </div>

                  <div className="p-6 rounded-xl bg-slate-950 border-2 border-slate-700">
                    <div className="text-xs font-mono text-slate-300 font-semibold mb-1">
                      Originating Model: {scenario.aiRecommendation.modelType}
                    </div>
                    <div className="text-xl sm:text-2xl font-extrabold text-cyan-200 mt-2">
                      "{scenario.aiRecommendation.action}"
                    </div>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-700">
                        <span className="text-slate-300 font-bold block mb-1">Intended Optimization:</span>
                        <span className="text-white font-medium text-sm leading-relaxed">
                          {scenario.aiRecommendation.intendedBenefit}
                        </span>
                      </div>
                      <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-700">
                        <span className="text-slate-300 font-bold block mb-1">Requested Change:</span>
                        <span className="text-indigo-200 font-mono font-bold text-base">
                          {scenario.aiRecommendation.proposedMetricChange}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-indigo-950/70 border-2 border-indigo-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-sm text-slate-100 font-medium leading-relaxed">
                      <strong className="text-white font-bold">The Problem:</strong> The model calculated its objective function accurately, but is completely unaware of enterprise SLAs and physical hazards.
                    </div>
                    <button
                      onClick={handleNext}
                      className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shrink-0 flex items-center gap-1.5 cursor-pointer shadow-md"
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
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-amber-300 font-bold uppercase tracking-wider">
                        Phase 02 / Operational Context &amp; Blind Spots
                      </span>
                      <h3 className="text-2xl font-black text-white mt-1">
                        Critical Enterprise Realities AI Missed
                      </h3>
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full bg-rose-950 border-2 border-rose-600 text-rose-200 text-xs font-mono font-bold flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4" />
                      <span>{scenario.blindSpots.length} Blind Spots Flagged</span>
                    </span>
                  </div>

                  {/* Blind spots list */}
                  <div className="p-5 rounded-xl bg-rose-950/50 border-2 border-rose-600 space-y-2.5">
                    <div className="text-xs font-mono uppercase tracking-wider text-rose-300 font-black mb-2">
                      ⚠️ Critical Blind Spots Uncovered by CCE
                    </div>
                    {scenario.blindSpots.map((spot, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-slate-100 font-medium">
                        <span className="w-2 h-2 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                        <span>{spot}</span>
                      </div>
                    ))}
                  </div>

                  {/* Context facts table */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-mono text-slate-300 uppercase tracking-wider font-bold">
                      Reconciled Telemetry &amp; Context Registers
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                      {scenario.contextFacts.map((fact, idx) => (
                        <div
                          key={idx}
                          className={`p-3.5 rounded-xl border-2 ${
                            fact.isFlagged
                              ? 'bg-rose-950/60 border-rose-600'
                              : 'bg-slate-950 border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between text-slate-300 text-xs mb-1">
                            <span className="font-medium">{fact.label}</span>
                            <span className="font-mono text-cyan-300 font-semibold">{fact.source}</span>
                          </div>
                          <div className={`text-sm ${fact.isFlagged ? 'text-rose-200 font-black' : 'text-white font-bold'}`}>
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
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                        Phase 03 / Deterministic Policy Evaluation
                      </span>
                      <h3 className="text-2xl font-black text-white mt-1">
                        Hard Safety &amp; Contract Constraints Checked
                      </h3>
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full bg-cyan-950 border-2 border-cyan-600 text-cyan-200 text-xs font-mono font-bold">
                      Deterministic Rules
                    </span>
                  </div>

                  <p className="text-sm text-slate-200 font-medium">
                    CCE does not use an LLM or probabilistic model for verdicts. It evaluates deterministic enterprise policies, regulatory standards, and physical limits against verified context.
                  </p>

                  <div className="space-y-3.5">
                    {scenario.constraints.map((rule, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl bg-slate-950 border-2 border-slate-700 hover:border-slate-500 transition-colors shadow-sm"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2.5">
                            <span className="font-mono text-xs font-extrabold text-indigo-200 bg-indigo-950 px-2.5 py-1 rounded border border-indigo-600">
                              {rule.code}
                            </span>
                            <span className="text-base font-extrabold text-white">{rule.name}</span>
                          </div>
                          <span className={`text-xs font-mono px-2.5 py-0.5 rounded uppercase font-black ${
                            rule.severity === 'CRITICAL' ? 'bg-rose-950 text-rose-200 border border-rose-500' : 'bg-amber-950 text-amber-200 border border-amber-500'
                          }`}>
                            {rule.severity} Severity
                          </span>
                        </div>
                        <p className="text-sm text-slate-100 font-medium leading-relaxed mb-3">
                          {rule.description}
                        </p>
                        <div className="p-3 rounded-lg bg-slate-900 border-2 border-teal-500/80 text-xs font-mono text-teal-200 font-bold">
                          <strong className="text-white">Active Threshold:</strong> {rule.threshold}
                        </div>
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
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-teal-300 font-bold uppercase tracking-wider">
                        Phase 04 / CCE Safe Envelope Solver
                      </span>
                      <h3 className="text-2xl font-black text-white mt-1">
                        Arbitration &amp; Constraint Solving
                      </h3>
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full bg-teal-950 border-2 border-teal-600 text-teal-200 text-xs font-mono font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Zero Hallucination</span>
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {scenario.evaluationSteps.map((evStep) => (
                      <div
                        key={evStep.stepNumber}
                        className="p-4 rounded-xl bg-slate-950 border-2 border-slate-700 flex items-start justify-between gap-4"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2.5">
                            <span className="w-6 h-6 rounded-full bg-indigo-900 text-indigo-200 flex items-center justify-center text-xs font-mono font-black">
                              {evStep.stepNumber}
                            </span>
                            <span className="text-sm font-bold text-white">
                              {evStep.title}
                            </span>
                          </div>
                          <p className="text-sm text-slate-100 pl-8 leading-relaxed font-medium">
                            {evStep.summary}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className={`text-xs font-mono px-2.5 py-1 rounded font-bold ${
                            evStep.status === 'PASSED'
                              ? 'bg-emerald-950 text-emerald-200 border border-emerald-500'
                              : evStep.status === 'LIMITATION_APPLIED'
                              ? 'bg-teal-950 text-teal-200 border border-teal-500'
                              : 'bg-amber-950 text-amber-200 border border-amber-500'
                          }`}>
                            {evStep.status.replace('_', ' ')}
                          </span>
                          <div className="text-xs font-mono text-cyan-300 font-bold mt-1.5">
                            {evStep.telemetryRef}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Visual Signature Moment: Telecom 18% vs 5% Capacity Slider */}
                  {scenario.id === 'telecom' && (
                    <div className="p-5 rounded-xl bg-slate-950 border-2 border-teal-500 shadow-xl">
                      <div className="flex items-center justify-between text-xs mb-3">
                        <span className="font-mono text-cyan-300 font-extrabold text-sm">
                          Visual Safeguard: The 18% → 5% Moment
                        </span>
                        <span className="text-xs text-slate-200 font-bold bg-slate-800 px-2 py-0.5 rounded">
                          Hospital ICU Headroom Shield
                        </span>
                      </div>

                      {/* Animated comparison meter */}
                      <div className="space-y-4 pt-1">
                        <div>
                          <div className="flex justify-between text-xs text-slate-200 font-bold mb-1.5">
                            <span>AI Recommends (Ungoverned):</span>
                            <span className="text-rose-300 font-mono font-black text-sm">18% Borrow (Hospital SLA Breach!)</span>
                          </div>
                          <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden relative border border-slate-700">
                            <div className="h-full bg-rose-500 rounded-full w-[72%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs text-slate-200 font-bold mb-1.5">
                            <span>CCE Governed Staged Limit:</span>
                            <span className="text-teal-300 font-mono font-black text-sm">5% Staged (Hospital Headroom 97.2% Safe)</span>
                          </div>
                          <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden relative border border-slate-700">
                            <motion.div 
                              initial={{ width: '72%' }}
                              animate={{ width: '20%' }}
                              transition={{ duration: 1.2, ease: 'easeInOut' }}
                              className="h-full bg-teal-400 rounded-full shadow-md" 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-emerald-300 font-bold uppercase tracking-wider">
                        Phase 05 / Final Governed Decision &amp; Audit Emit
                      </span>
                      <h3 className="text-2xl font-black text-white mt-1">
                        Decision Assured with Audit Trail
                      </h3>
                    </div>
                    <OutcomeBadge outcome={scenario.outcome.type} size="lg" />
                  </div>

                  {/* Governed Action Banner */}
                  <div className="p-6 rounded-xl bg-slate-950 border-2 border-teal-400 shadow-2xl">
                    <div className="text-xs font-mono uppercase text-teal-300 font-black mb-2">
                      Governed Action Dispatched to Enterprise Actuator
                    </div>
                    <div className="text-lg sm:text-xl font-black text-white">
                      "{scenario.outcome.governedAction}"
                    </div>
                    <p className="mt-3 text-sm text-slate-100 font-medium leading-relaxed">
                      {scenario.outcome.explanation}
                    </p>
                    <div className="mt-4 pt-3.5 border-t-2 border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="text-slate-300 font-mono font-medium">
                        Safeguard Enforced: <span className="text-teal-300 font-bold">{scenario.outcome.safeguardApplied}</span>
                      </span>
                      <span className="text-indigo-200 font-mono font-bold">
                        Human Status: {scenario.evidence.humanReviewStatus}
                      </span>
                    </div>
                  </div>

                  {/* Evidence Drawer Trigger Strip */}
                  <div className="p-5 rounded-xl bg-indigo-950/80 border-2 border-indigo-600 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <FileCheck2 className="w-5 h-5 text-cyan-400" />
                        <span className="text-base font-extrabold text-white">
                          Decision Evidence Record Generated
                        </span>
                      </div>
                      <p className="text-xs text-slate-200 font-medium mt-1">
                        Record ID: <span className="font-mono text-white font-bold">{scenario.evidence.decisionId}</span> (Deterministic hash &amp; telemetry snapshot)
                      </p>
                    </div>

                    <button
                      onClick={() => setIsEvidenceOpen(true)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-500 hover:to-teal-500 text-white font-extrabold text-xs shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Inspect Evidence Drawer</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Evidence Drawer Component */}
        <EvidenceDrawer
          isOpen={isEvidenceOpen}
          onClose={() => setIsEvidenceOpen(false)}
          scenario={scenario}
        />
      </div>
    </section>
  );
};
