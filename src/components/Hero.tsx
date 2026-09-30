import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Database, 
  Scale, 
  Zap, 
  Lock, 
  BarChart3 
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [isClarity, setIsClarity] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to('.gap-pulse-dot', {
      x: '100%',
      duration: 3,
      repeat: -1,
      ease: 'power2.inOut',
    });
  }, { scope: containerRef });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="hero" ref={containerRef} className="relative w-full bg-[#080B11] overflow-hidden pt-10 pb-0">
      {/* Hero Content Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Subtle pill tag above headline */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/80 border border-indigo-800 text-indigo-200 text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Credge Clarity Engine · Trust in Every AI Decision</span>
        </div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] max-w-4xl mx-auto"
        >
          Making AI Decisions Governable, Assured &amp; Accountable
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed"
        >
          An independent AI decision-assurance and governance layer between model recommendations and real enterprise operations.
        </motion.p>

        {/* Center Pill Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 flex items-center justify-center gap-3"
        >
          <button
            onClick={() => scrollToSection('simulator')}
            className="btn-pill-primary flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Try Scenario Simulator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>

      {/* Iridescent Silk Fluid Ribbon */}
      <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[360px] pointer-events-none mt-2 overflow-hidden">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1440 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Ambient luminous glow under the wave */}
          <ellipse cx="420" cy="280" rx="460" ry="140" fill="url(#wave-ambient-glow)" opacity="0.35" filter="blur(40px)" />

          {/* Ribbon Back Layer */}
          <path
            d="M-40 320C180 180 340 380 580 230C820 80 1020 280 1280 160C1380 120 1440 180 1480 210"
            stroke="url(#ribbon-grad-deep)"
            strokeWidth="86"
            strokeLinecap="round"
            className="filter blur-md opacity-40"
          />

          {/* Ribbon Main Body */}
          <path
            d="M-20 280C220 140 390 350 630 190C870 30 1070 250 1340 130C1420 95 1470 140 1500 170"
            stroke="url(#ribbon-grad-main)"
            strokeWidth="48"
            strokeLinecap="round"
            className="opacity-95"
          />

          {/* Specular White Gloss Refraction */}
          <path
            d="M20 260C250 125 410 330 650 175C890 20 1080 235 1330 120"
            stroke="url(#ribbon-grad-gloss)"
            strokeWidth="14"
            strokeLinecap="round"
            className="opacity-90"
          />

          {/* Secondary Ribbon Wisps */}
          <path
            d="M120 295C320 170 480 340 710 205C940 70 1120 250 1380 150"
            stroke="url(#ribbon-grad-cyan)"
            strokeWidth="18"
            strokeLinecap="round"
            className="opacity-80"
          />

          <defs>
            <linearGradient id="ribbon-grad-main" x1="0" y1="100" x2="1400" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="25%" stopColor="#4F46E5" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="75%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0D9488" />
            </linearGradient>

            <linearGradient id="ribbon-grad-deep" x1="0" y1="0" x2="1400" y2="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="40%" stopColor="#4338CA" />
              <stop offset="80%" stopColor="#6D28D9" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>

            <linearGradient id="ribbon-grad-gloss" x1="0" y1="100" x2="1350" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#E0E7FF" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#F5F3FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#CCFBF1" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="ribbon-grad-cyan" x1="100" y1="200" x2="1350" y2="250" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="50%" stopColor="#A78BFA" />
              <stop offset="100%" stopColor="#2DD4BF" />
            </linearGradient>

            <radialGradient id="wave-ambient-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(600 240) rotate(90) scale(180 500)">
              <stop stopColor="#6366F1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* FULL-WIDTH SOLID JET BLACK BRAND/PARTNER BAND */}
      <div className="w-full bg-black text-white py-4.5 px-4 sm:px-8 border-y border-[#1E293B]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-6 text-xs sm:text-sm font-semibold tracking-wide">
          <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
            <span className="text-indigo-400 font-mono text-base">✦</span>
            <span>O-RAN Telecom</span>
          </div>
          <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
            <span className="text-teal-400 font-mono text-base">⬡</span>
            <span>Hospital ICU Telemetry</span>
          </div>
          <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
            <span className="text-cyan-400 font-mono text-base">𝚷</span>
            <span>Commercial EV Fleets</span>
          </div>
          <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
            <span className="text-amber-400 font-mono text-base">◎</span>
            <span>FinTech AML Clearing</span>
          </div>
          <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
            <span className="text-purple-400 font-mono text-base">❄</span>
            <span>Critical Power Grid</span>
          </div>
          <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
            <span className="text-emerald-400 font-mono text-base">⚡</span>
            <span>Zero-Hallucination Governance</span>
          </div>
        </div>
      </div>

      {/* "One platform, all the tools you need to grow" (CCE Architecture Overview) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-[#080B11]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            One platform, all the governance you need to assure
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base font-normal">
            Deterministic policies, context reconciliation, and safe action enforcement for enterprise AI.
          </p>
        </div>

        {/* 3 Columns with sleek dark cards and violet accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start text-left p-6 rounded-2xl bg-[#0E1422] border border-[#1E293B]">
            <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-700/60 flex items-center justify-center text-indigo-400 mb-4">
              <Database className="w-5 h-5 stroke-[2.2]" />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">
              Ingest context &amp; telemetry
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Reconcile live radio blocks, battery temperatures, transaction graphs, and topological dependencies before evaluating actions.
            </p>
          </div>

          <div className="flex flex-col items-start text-left p-6 rounded-2xl bg-[#0E1422] border border-[#1E293B]">
            <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-700/60 flex items-center justify-center text-indigo-400 mb-4">
              <Scale className="w-5 h-5 stroke-[2.2]" />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">
              Reconcile enterprise policies
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Execute deterministic policies without probabilistic variance. Ensure statutory contracts, safety envelopes, and SLAs are preserved.
            </p>
          </div>

          <div className="flex flex-col items-start text-left p-6 rounded-2xl bg-[#0E1422] border border-[#1E293B]">
            <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-700/60 flex items-center justify-center text-indigo-400 mb-4">
              <Zap className="w-5 h-5 stroke-[2.2]" />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">
              Assure &amp; actuate safely
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Staged parameter limits (18% &rarr; 5%), surgical ring-fencing, and immutable audit logs that satisfy Article 14 of the EU AI Act.
            </p>
          </div>
        </div>

        {/* Split Showcase Card ("Assured" Dashboard Preview) */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#0E1422] border border-[#1E293B]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Headline & Button */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141C2E] border border-[#28354D] text-xs font-bold text-white">
                <Lock className="w-3.5 h-3.5 text-indigo-400" />
                <span>Deterministic Safety</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Assured
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Govern your operational AI models in real time using deterministic policies automatically, and get instant decision evidence records with full audit provenance.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => scrollToSection('simulator')}
                  className="btn-pill-secondary flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Explore Scenario Demos</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Dashboard Preview Card */}
            <div className="lg:col-span-7">
              <div className="p-6 rounded-2xl bg-[#080B11] border border-[#1E293B] shadow-xl space-y-5">
                <div className="flex items-center justify-between border-b border-[#1E293B] pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-indigo-950 flex items-center justify-center text-indigo-400">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Decision Telemetry Monitor</span>
                      <span className="text-[10px] text-slate-400 font-mono">Real-time ground truth arbitration</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 font-bold border border-emerald-500">
                    Live Assured
                  </span>
                </div>

                {/* Simulated bar chart graph */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#141C2E] border border-[#28354D]">
                    <div className="flex justify-between items-center text-xs mb-2">
                      <span className="text-slate-400 font-medium">Spectrum Capacity</span>
                      <span className="font-mono font-bold text-indigo-400">5.0% Staged</span>
                    </div>
                    {/* Visual Bar Columns */}
                    <div className="h-16 flex items-end justify-between gap-1 pt-2">
                      {[40, 65, 80, 45, 90, 70, 85, 50, 95, 30, 75, 50].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className={`w-full rounded-xs ${
                            i === 8 ? 'bg-indigo-500' : i === 7 ? 'bg-indigo-400' : 'bg-slate-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#141C2E] border border-[#28354D]">
                    <div className="flex justify-between items-center text-xs mb-2">
                      <span className="text-slate-400 font-medium">Hospital Slice Headroom</span>
                      <span className="font-mono font-bold text-teal-400">97.2% Safe</span>
                    </div>
                    {/* Visual Bar Columns */}
                    <div className="h-16 flex items-end justify-between gap-1 pt-2">
                      {[85, 90, 92, 95, 96, 98, 97, 97, 98, 97, 97, 97].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className="w-full rounded-xs bg-teal-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Micro record footer */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                  <span>Record: CCE-DEMO-2026-TEL-8041</span>
                  <span className="text-indigo-400 font-bold">Rule: RULE-TEL-2024-09 Enforced</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Signature Chaos to Clarity interactive switcher */}
        <div id="chaos-to-clean" className="mt-20 pt-14 border-t border-[#1E293B] text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950 text-indigo-200 text-xs font-bold mb-3 border border-indigo-800">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Signature Interactive Concept</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            From Chaos to Clarity
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl mx-auto">
            Toggle between uncoordinated, risky autonomous proposals and CCE’s deterministic five-layer assurance pipeline.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 p-1.5 rounded-full bg-[#0E1422] border border-[#1E293B]">
            <button
              onClick={() => setIsClarity(false)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                !isClarity ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              Simulate Chaos
            </button>
            <button
              onClick={() => setIsClarity(true)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                isClarity ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              <span>Bring Order (CCE Clean)</span>
            </button>
          </div>

          <div className="mt-8 relative min-h-[340px] rounded-3xl border border-[#1E293B] bg-[#0E1422] p-6 overflow-hidden">
            <AnimatePresence mode="wait">
              {!isClarity ? (
                <motion.div
                  key="chaos"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="relative w-full min-h-[340px] sm:min-h-[300px] flex items-center justify-center"
                >
                  <div className="absolute text-center max-w-[280px] sm:max-w-sm z-10 pointer-events-none bg-[#080B11] p-4 sm:p-5 rounded-2xl shadow-xl border border-rose-500/60">
                    <span className="text-xs font-mono font-black text-rose-400 uppercase tracking-wider block mb-1">
                      ⚠️ Ungoverned Autonomous Execution
                    </span>
                    <p className="text-xs text-slate-200 font-medium">
                      Uncoordinated AI outputs act directly on networks and assets without contract or physical safety arbitration.
                    </p>
                  </div>

                  <motion.div
                    animate={{ y: [-4, 6, -4], rotate: [-4, -2, -4] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-2 left-2 sm:top-4 sm:left-12 p-3 sm:p-3.5 bg-[#141C2E] rounded-xl shadow-lg border border-[#28354D] w-48 sm:w-56 text-[11px] sm:text-xs text-left"
                  >
                    <div className="font-mono text-indigo-400 font-bold text-[10px] sm:text-xs">AI Recommendation</div>
                    <div className="font-bold text-white mt-1">"Reallocate +18% Bandwidth"</div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [6, -6, 6], rotate: [5, 3, 5] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-4 right-2 sm:top-6 sm:right-16 p-3 sm:p-3.5 bg-rose-950/80 rounded-xl shadow-lg border border-rose-700/80 w-48 sm:w-60 text-[11px] sm:text-xs text-left"
                  >
                    <div className="font-mono text-rose-400 font-bold text-[10px] sm:text-xs">Unchecked SLA Rule</div>
                    <div className="font-bold text-rose-100 mt-1">Hospital Penalty: $45,000/hr</div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [-5, 7, -5], rotate: [-2, 1, -2] }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-2 left-2 sm:bottom-6 sm:left-24 p-3 sm:p-3.5 bg-amber-950/80 rounded-xl shadow-lg border border-amber-700/80 w-48 sm:w-56 text-[11px] sm:text-xs text-left hidden sm:block"
                  >
                    <div className="font-mono text-amber-400 font-bold text-[10px] sm:text-xs">Hardware Wear Telemetry</div>
                    <div className="font-bold text-amber-100 mt-1">Battery Cycles: 847 &gt; 800</div>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="clarity"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35 }}
                  className="w-full flex flex-col justify-center py-4"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      CCE Five-Layer Deterministic Pipeline
                    </span>
                    <span className="text-xs text-slate-400 font-mono font-bold">
                      Deterministic · Auditable · Safe
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-3.5 text-left">
                    <div className="p-4 rounded-2xl bg-[#141C2E] border border-[#28354D] shadow-xs">
                      <div className="text-[10px] font-mono font-bold text-slate-400">01. INGEST</div>
                      <div className="text-xs font-bold text-white mt-1">Context Ingestion</div>
                      <div className="text-[11px] text-slate-400 mt-1">SLA maps, telemetry, contracts</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#141C2E] border border-[#28354D] shadow-xs">
                      <div className="text-[10px] font-mono font-bold text-indigo-400">02. MODEL</div>
                      <div className="text-xs font-bold text-white mt-1">AI Proposal</div>
                      <div className="text-[11px] text-slate-400 mt-1">Target recommendation received</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#141C2E] border-2 border-indigo-500 shadow-xs">
                      <div className="text-[10px] font-mono font-bold text-indigo-400">03. POLICY</div>
                      <div className="text-xs font-bold text-white mt-1">Constraint Check</div>
                      <div className="text-[11px] text-slate-400 mt-1">Deterministic safety check</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#141C2E] border-2 border-teal-500 shadow-xs">
                      <div className="text-[10px] font-mono font-bold text-teal-400">04. DECISION</div>
                      <div className="text-xs font-bold text-white mt-1">Governed Verdict</div>
                      <div className="text-[11px] text-slate-400 mt-1">ALLOW, LIMIT, or HOLD</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#141C2E] border-2 border-emerald-500 shadow-xs">
                      <div className="text-[10px] font-mono font-bold text-emerald-400">05. AUDIT</div>
                      <div className="text-xs font-bold text-white mt-1">Immutable Evidence</div>
                      <div className="text-[11px] text-slate-400 mt-1">Assigned auditor &amp; proof hash</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
