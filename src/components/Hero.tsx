import React, { useState, useRef, useEffect } from 'react';
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
  BarChart3,
  AlertTriangle,
  Play,
  Pause
} from 'lucide-react';

interface HeroProps {
  onOpenContact?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [isClarity, setIsClarity] = useState<boolean>(true);
  const [isMarqueePaused, setIsMarqueePaused] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsMarqueePaused(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const marqueeItems = [
    { symbol: '✦', text: 'O-RAN Telecom' },
    { symbol: '⬡', text: 'Hospital ICU Telemetry' },
    { symbol: '𝚷', text: 'Commercial EV Fleets' },
    { symbol: '◎', text: 'FinTech AML Clearing' },
    { symbol: '❄', text: 'Critical Power Grid' },
    { symbol: '⚡', text: 'Rule-Based Governance' },
  ];

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
    <div id="hero" ref={containerRef} className="relative w-full overflow-hidden pt-0 pb-0 bg-[#FDFEFD]">
      {/* 1. Hero Dark Slate Showcase with 55-65% Black Overlay */}
      <div className="relative w-full bg-[#0A1017] pt-8 sm:pt-14 pb-4 sm:pb-8 overflow-hidden">
        {/* Dark Slate 60% Black Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.60)' }} 
        />

        {/* Ambient Teal Backlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#12C9D3]/15 rounded-full blur-[140px] pointer-events-none" />

        {/* Hero Content Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Subtle pill tag above headline */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#0A1017]/90 border border-[#039EA5]/60 text-white text-xs font-semibold mb-4 sm:mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#12C9D3] animate-pulse" />
            <span className="font-mono text-[#12C9D3] font-bold">CREDGE CLARITY ENGINE</span>
            <span className="text-gray-400">·</span>
            <span className="text-slate-200">Trust in Every AI Decision</span>
          </div>

          {/* Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl mx-auto"
          >
            Making AI Decisions Governable, Assured &amp; Accountable
          </motion.h1>

          {/* Subtitle (Section 4.3) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3.5 sm:mt-5 max-w-2xl mx-auto space-y-1.5"
          >
            <p className="text-sm sm:text-lg text-slate-100 font-medium leading-relaxed">
              AI can recommend actions that look smart but cause real harm. CCE checks each recommendation against real-world rules and limits before it is acted on.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-normal">
              An independent AI decision-assurance and governance layer between model recommendations and real enterprise operations.
            </p>
          </motion.div>

          {/* Center Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <button
              onClick={() => scrollToSection('simulator')}
              className="btn-pill-primary flex items-center gap-2 cursor-pointer shadow-lg text-xs sm:text-sm font-bold min-h-[44px]"
            >
              <span>Try the demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            {onOpenContact && (
              <button
                onClick={onOpenContact}
                className="btn-pill-secondary flex items-center gap-2 cursor-pointer shadow-xs text-xs sm:text-sm font-bold min-h-[44px]"
              >
                <span>Request a pilot</span>
              </button>
            )}
          </motion.div>
        </div>

        {/* Iridescent Silk Fluid Ribbon with Brand Teals (#12C9D3, #00AABB, #039EA5) */}
        <div className="relative w-full h-[140px] sm:h-[260px] lg:h-[340px] pointer-events-none mt-2 overflow-hidden">
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

            {/* Secondary Ribbon Wisps in Bright Logo Teal */}
            <path
              d="M120 295C320 170 480 340 710 205C940 70 1120 250 1380 150"
              stroke="url(#ribbon-grad-teal)"
              strokeWidth="18"
              strokeLinecap="round"
              className="opacity-80"
            />

            <defs>
              <linearGradient id="ribbon-grad-main" x1="0" y1="100" x2="1400" y2="300" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#039EA5" />
                <stop offset="35%" stopColor="#00AABB" />
                <stop offset="70%" stopColor="#12C9D3" />
                <stop offset="100%" stopColor="#039EA5" />
              </linearGradient>

              <linearGradient id="ribbon-grad-deep" x1="0" y1="0" x2="1400" y2="400" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#026469" />
                <stop offset="50%" stopColor="#039EA5" />
                <stop offset="100%" stopColor="#007F8C" />
              </linearGradient>

              <linearGradient id="ribbon-grad-gloss" x1="0" y1="100" x2="1350" y2="200" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="40%" stopColor="#E0FFFF" stopOpacity="0.85" />
                <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#12C9D3" stopOpacity="0.95" />
              </linearGradient>

              <linearGradient id="ribbon-grad-teal" x1="100" y1="200" x2="1350" y2="250" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00AABB" />
                <stop offset="50%" stopColor="#12C9D3" />
                <stop offset="100%" stopColor="#039EA5" />
              </linearGradient>

              <radialGradient id="wave-ambient-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(600 240) rotate(90) scale(180 500)">
                <stop stopColor="#12C9D3" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#00AABB" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* 2. SOLID SECTION BACKGROUND ("AI GOVERNANCE" BAND) IN PRIMARY TEAL (#00AABB) */}
      <div className="w-full bg-[#00AABB] text-white py-3.5 sm:py-4 px-3 sm:px-8 shadow-md relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
          {/* Main Items Content */}
          <div className="flex-1 overflow-hidden relative">
            {/* Desktop View: Distributed single line */}
            <div className="hidden lg:flex items-center justify-between gap-6 text-xs sm:text-sm font-bold tracking-wide">
              {marqueeItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 opacity-95 hover:opacity-100 transition-opacity shrink-0">
                  <span className="text-[#12C9D3] bg-white/10 w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs">{item.symbol}</span>
                  <span className="whitespace-nowrap">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Mobile/Tablet View: One continuous clean line with smooth scroll */}
            <div 
              role="region"
              aria-label="Key operational domains"
              className="lg:hidden relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
            >
              <motion.div
                className="flex items-center gap-6 whitespace-nowrap text-xs font-bold tracking-wide py-1"
                animate={isMarqueePaused ? { x: 0 } : { x: ['0%', '-50%'] }}
                transition={isMarqueePaused ? { duration: 0 } : {
                  repeat: Infinity,
                  ease: 'linear',
                  duration: 22,
                }}
              >
                {[...marqueeItems, ...marqueeItems].map((item, i) => {
                  const isDuplicate = i >= marqueeItems.length;
                  return (
                    <div 
                      key={i} 
                      aria-hidden={isDuplicate ? "true" : undefined}
                      className="flex items-center gap-2 shrink-0 opacity-95"
                    >
                      <span className="text-[#12C9D3] bg-white/10 w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs" aria-hidden="true">{item.symbol}</span>
                      <span className="whitespace-nowrap">{item.text}</span>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Pause / Play Control Button on Mobile/Tablet */}
          <button
            onClick={() => setIsMarqueePaused(!isMarqueePaused)}
            aria-label={isMarqueePaused ? 'Resume banner animation' : 'Pause banner animation'}
            className="lg:hidden min-w-[44px] min-h-[44px] p-2 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            title={isMarqueePaused ? 'Resume banner' : 'Pause banner'}
          >
            {isMarqueePaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* 3. "One platform, all the governance you need to assure" (Architecture Cards) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-[#FDFEFD]">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <span className="text-xs font-mono font-bold tracking-widest text-[#039EA5] uppercase block mb-1">
            DECISION ASSURANCE PLATFORM
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#000000] tracking-tight">
            One platform, all the governance you need to assure
          </h2>
          <p className="mt-2.5 sm:mt-3 text-[#1E1E1E] text-xs sm:text-base font-normal">
            Deterministic policies, context reconciliation, and safe action enforcement for enterprise AI.
          </p>
        </div>

        {/* 3 Columns with rounded off-white cards (#FDFEFD), white surfaces, deep teal accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          <div className="flex flex-col items-start text-left p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-gray-200 shadow-sm hover:border-[#039EA5] transition-all">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#039EA5] mb-4">
              <Database className="w-5 h-5 stroke-[2.2]" />
            </div>
            <h3 className="text-base font-bold text-[#000000] mb-1.5">
              Ingest context &amp; telemetry
            </h3>
            <p className="text-xs sm:text-sm text-[#1E1E1E] leading-relaxed font-normal">
              Reconcile live radio blocks, battery temperatures, transaction graphs, and topological dependencies before evaluating actions.
            </p>
          </div>

          <div className="flex flex-col items-start text-left p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-gray-200 shadow-sm hover:border-[#039EA5] transition-all">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#039EA5] mb-4">
              <Scale className="w-5 h-5 stroke-[2.2]" />
            </div>
            <h3 className="text-base font-bold text-[#000000] mb-1.5">
              Reconcile enterprise policies
            </h3>
            <p className="text-xs sm:text-sm text-[#1E1E1E] leading-relaxed font-normal">
              Execute deterministic policies without probabilistic variance. Ensure statutory contracts, safety envelopes, and SLAs are preserved.
            </p>
          </div>

          <div className="flex flex-col items-start text-left p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-gray-200 shadow-sm hover:border-[#039EA5] transition-all">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#039EA5] mb-4">
              <Zap className="w-5 h-5 stroke-[2.2]" />
            </div>
            <h3 className="text-base font-bold text-[#000000] mb-1.5">
              Assure &amp; actuate safely
            </h3>
            <p className="text-xs sm:text-sm text-[#1E1E1E] leading-relaxed font-normal">
              Staged parameter limits (18% &rarr; 5%), surgical ring-fencing, and structured audit logs designed to support EU AI Act Article 14 human oversight requirements.
            </p>
          </div>
        </div>

        {/* Split Showcase Card ("Assured" Dashboard Preview) */}
        <div className="mt-10 sm:mt-16 p-6 sm:p-9 lg:p-12 rounded-3xl bg-[#FFFFFF] border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left: Headline & Button */}
            <div className="lg:col-span-5 space-y-3 sm:space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-xs font-bold text-[#039EA5]">
                <Lock className="w-3.5 h-3.5 text-[#039EA5]" />
                <span>Deterministic Safety Boundary</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#000000] tracking-tight">
                Assured
              </h3>
              <p className="text-xs sm:text-sm text-[#1E1E1E] leading-relaxed font-normal">
                Govern your operational AI models in real time using deterministic policies automatically, and get instant decision evidence records with full audit provenance.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => scrollToSection('simulator')}
                  className="btn-pill-secondary flex items-center gap-2 cursor-pointer shadow-xs text-xs sm:text-sm font-bold min-h-[44px]"
                >
                  <span>Try the demo</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#039EA5]" />
                </button>
              </div>
            </div>

            {/* Right: Dashboard Preview Card */}
            <div className="lg:col-span-7">
              <div className="p-4 sm:p-6 rounded-2xl bg-[#0A1017] border border-[#1E2D3E] shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-[#1E2D3E] pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#039EA5]/20 flex items-center justify-center text-[#12C9D3] shrink-0">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-bold text-white block">Decision Telemetry Monitor</span>
                      <span className="text-[10px] text-slate-400 font-mono">Real-time ground truth arbitration</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#00AABB]/20 text-[#12C9D3] font-bold border border-[#00AABB] shrink-0">
                    Live Assured
                  </span>
                </div>

                {/* Simulated bar chart graph */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#0F1722] border border-[#1E2D3E] text-left">
                    <div className="flex justify-between items-center text-xs mb-2">
                      <span className="text-slate-400 font-medium">Spectrum Capacity</span>
                      <span className="font-mono font-bold text-[#12C9D3]">5.0% Staged</span>
                    </div>
                    <div className="h-14 sm:h-16 flex items-end justify-between gap-1 pt-2">
                      {[40, 65, 80, 45, 90, 70, 85, 50, 95, 30, 75, 50].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className={`w-full rounded-xs ${
                            i === 8 ? 'bg-[#00AABB]' : i === 7 ? 'bg-[#039EA5]' : 'bg-slate-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#0F1722] border border-[#1E2D3E] text-left">
                    <div className="flex justify-between items-center text-xs mb-2">
                      <span className="text-slate-400 font-medium">Hospital Slice Headroom</span>
                      <span className="font-mono font-bold text-[#00AABB]">97.2% Safe</span>
                    </div>
                    <div className="h-14 sm:h-16 flex items-end justify-between gap-1 pt-2">
                      {[85, 90, 92, 95, 96, 98, 97, 97, 98, 97, 97, 97].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className="w-full rounded-xs bg-[#00AABB]"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Micro record footer */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400 pt-1 gap-1 text-left">
                  <span>Record: CCE-DEMO-2026-TEL-8041</span>
                  <span className="text-[#12C9D3] font-bold">Rule: RULE-TEL-2024-09 Enforced</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Signature Chaos to Clarity (The Core Problem) */}
        <div id="chaos-to-clean" className="mt-14 sm:mt-24 pt-10 sm:pt-14 border-t border-gray-200 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 text-[#039EA5] text-xs font-bold mb-3 border border-teal-200">
            <Sparkles className="w-3.5 h-3.5 text-[#039EA5]" />
            <span>Signature Interactive Concept</span>
          </div>

          {/* Heading: Black (#000000) as requested */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#000000] tracking-tight">
            The Core Problem: From Chaos to Clarity
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#1E1E1E] max-w-xl mx-auto">
            Toggle between uncoordinated, risky autonomous proposals and CCE’s deterministic five-layer assurance pipeline.
          </p>

          {/* Toggle Buttons */}
          <div className="mt-6 inline-flex items-center gap-2 p-1.5 rounded-full bg-gray-100 border border-gray-200">
            <button
              onClick={() => setIsClarity(false)}
              className={`px-4 sm:px-5 py-2.5 min-h-[44px] inline-flex items-center justify-center rounded-full text-xs font-bold transition-all cursor-pointer ${
                !isClarity ? 'bg-[#D32F2F] text-white shadow-xs' : 'text-gray-700 hover:text-black'
              }`}
            >
              Simulate Chaos
            </button>
            <button
              onClick={() => setIsClarity(true)}
              className={`px-4 sm:px-5 py-2.5 min-h-[44px] inline-flex items-center justify-center rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                isClarity ? 'bg-[#00AABB] text-white shadow-xs' : 'text-gray-700 hover:text-black'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              <span>Bring Order (CCE Clean)</span>
            </button>
          </div>

          {/* Interactive Simulation Frame */}
          <div className="mt-8 relative min-h-[300px] sm:min-h-[350px] rounded-3xl border border-gray-200 bg-[#FFFFFF] p-4 sm:p-6 overflow-hidden shadow-xs">
            <AnimatePresence mode="wait">
              {!isClarity ? (
                <motion.div
                  key="chaos"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="relative w-full min-h-[300px] bg-gray-50/70 rounded-2xl p-2 sm:p-0"
                >
                  {/* Mobile Stacked View: Prevents overlapping cards on 360-430px viewports */}
                  <div className="flex flex-col gap-3 sm:hidden w-full max-w-xs mx-auto py-2">
                    <div className="p-3 bg-white rounded-xl shadow-md border border-gray-300 text-left -rotate-1">
                      <div className="font-mono text-[#039EA5] font-bold text-[10px] flex items-center gap-1">
                        <span>AI Recommendation</span>
                      </div>
                      <div className="font-bold text-[#000000] text-xs mt-0.5">"Reallocate +18% Bandwidth"</div>
                    </div>

                    <div className="text-center bg-white p-4 rounded-2xl shadow-xl border-2 border-[#D32F2F]">
                      <div className="flex items-center justify-center gap-1 text-[#D32F2F] mb-1 font-mono font-black text-xs uppercase tracking-wider">
                        <AlertTriangle className="w-4 h-4 text-[#D32F2F] shrink-0 stroke-[2.5]" />
                        <span>Ungoverned Autonomous Execution</span>
                      </div>
                      <p className="text-xs text-[#1E1E1E] font-medium leading-relaxed">
                        Uncoordinated AI outputs act directly on networks and assets without contract or physical safety arbitration.
                      </p>
                    </div>

                    <div className="p-3 bg-rose-50 rounded-xl shadow-md border-2 border-[#D32F2F] text-left rotate-1">
                      <div className="font-mono text-[#D32F2F] font-bold text-[10px] flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 text-[#D32F2F]" />
                        <span>Unchecked SLA Rule</span>
                      </div>
                      <div className="font-bold text-[#D32F2F] text-xs mt-0.5">Hospital Penalty: $45,000/hr</div>
                    </div>
                  </div>

                  {/* Desktop / Tablet Floating View: Preserves dynamic showcase on larger screens */}
                  <div className="hidden sm:flex relative w-full min-h-[300px] items-center justify-center">
                    <div className="absolute text-center max-w-sm z-10 pointer-events-none bg-white p-5 rounded-2xl shadow-xl border-2 border-[#D32F2F]">
                      <div className="flex items-center justify-center gap-1 text-[#D32F2F] mb-1 font-mono font-black text-xs uppercase tracking-wider">
                        <AlertTriangle className="w-4 h-4 text-[#D32F2F] shrink-0 stroke-[2.5]" />
                        <span>Ungoverned Autonomous Execution</span>
                      </div>
                      <p className="text-xs text-[#1E1E1E] font-medium leading-relaxed">
                        Uncoordinated AI outputs act directly on networks and assets without contract or physical safety arbitration.
                      </p>
                    </div>

                    <motion.div
                      animate={isMarqueePaused ? { y: 0, rotate: -3 } : { y: [-4, 6, -4], rotate: [-4, -2, -4] }}
                      transition={isMarqueePaused ? { duration: 0 } : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute top-6 left-12 p-4 bg-white rounded-xl shadow-lg border border-gray-300 w-56 text-xs text-left"
                    >
                      <div className="font-mono text-[#039EA5] font-bold text-xs flex items-center gap-1">
                        <span>AI Recommendation</span>
                      </div>
                      <div className="font-bold text-[#000000] mt-1">"Reallocate +18% Bandwidth"</div>
                    </motion.div>

                    <motion.div
                      animate={isMarqueePaused ? { y: 0, rotate: 4 } : { y: [6, -6, 6], rotate: [5, 3, 5] }}
                      transition={isMarqueePaused ? { duration: 0 } : { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute top-8 right-16 p-4 bg-rose-50 rounded-xl shadow-lg border-2 border-[#D32F2F] w-60 text-xs text-left"
                    >
                      <div className="font-mono text-[#D32F2F] font-bold text-xs flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 text-[#D32F2F]" />
                        <span>Unchecked SLA Rule</span>
                      </div>
                      <div className="font-bold text-[#D32F2F] mt-1">Hospital Penalty: $45,000/hr</div>
                    </motion.div>

                    <motion.div
                      animate={isMarqueePaused ? { y: 0, rotate: -1 } : { y: [-5, 7, -5], rotate: [-2, 1, -2] }}
                      transition={isMarqueePaused ? { duration: 0 } : { duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute bottom-6 left-24 p-4 bg-amber-50 rounded-xl shadow-lg border border-amber-300 w-56 text-xs text-left"
                    >
                      <div className="font-mono text-amber-700 font-bold text-xs flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 text-[#D32F2F]" />
                        <span>Hardware Wear Telemetry</span>
                      </div>
                      <div className="font-bold text-amber-900 mt-1">Battery Cycles: 847 &gt; 800</div>
                    </motion.div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="clarity"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35 }}
                  className="w-full flex flex-col justify-center py-2 sm:py-4 text-left"
                >
                  {/* Early Result Showcase: What AI wanted, what CCE did instead, why it matters */}
                  <div className="mb-4 sm:mb-6 p-4 sm:p-5 rounded-2xl bg-teal-50/70 border-2 border-[#00AABB]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-1">
                      <div className="flex items-center gap-2 text-[#039EA5] font-mono font-black text-xs uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4 text-[#00AABB] shrink-0" />
                        <span>The Governed Result (Early Summary)</span>
                      </div>
                      <span className="self-start sm:self-auto text-[11px] font-mono text-[#008361] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 border border-emerald-300">
                        Zero Risk Actuation
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      <div className="p-3.5 rounded-xl bg-white border border-teal-200">
                        <strong className="block text-gray-700 font-bold mb-1">What the AI Wanted:</strong>
                        <p className="text-gray-900 font-medium leading-relaxed">Shift 18% radio spectrum capacity to eliminate video buffering during a stadium surge.</p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white border border-teal-200">
                        <strong className="block text-[#039EA5] font-bold mb-1">What CCE Did Instead:</strong>
                        <p className="text-gray-900 font-medium leading-relaxed">Constrained reallocation to a safe 5% staged capacity limit with a 180s watcher.</p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white border border-teal-200">
                        <strong className="block text-[#008361] font-bold mb-1">Why It Matters for People:</strong>
                        <p className="text-gray-900 font-medium leading-relaxed">Preserved trauma hospital telemetry at 97.2% headroom while still speeding up consumer video.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-1">
                    <span className="text-xs font-mono font-bold text-[#039EA5] uppercase tracking-wider flex items-center gap-1.5">
                      <span>Five-Step Assurance Pipeline</span>
                    </span>
                    <span className="text-[11px] sm:text-xs text-gray-500 font-mono font-bold">
                      Deterministic · Auditable · Safe
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 sm:gap-3.5 text-left mb-4 sm:mb-5">
                    <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-gray-200 shadow-xs hover:border-[#00AABB] transition-all">
                      <div className="text-[10px] font-mono font-bold text-gray-500">01. INGEST</div>
                      <div className="text-xs font-bold text-[#000000] mt-1">Context Ingestion</div>
                      <div className="text-[11px] text-[#1E1E1E] mt-1">SLA maps, telemetry, contracts</div>
                    </div>

                    <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-gray-200 shadow-xs hover:border-[#00AABB] transition-all">
                      <div className="text-[10px] font-mono font-bold text-[#039EA5]">02. MODEL</div>
                      <div className="text-xs font-bold text-[#000000] mt-1">AI Proposal</div>
                      <div className="text-[11px] text-[#1E1E1E] mt-1">Target recommendation received</div>
                    </div>

                    <div className="p-3.5 sm:p-4 rounded-xl bg-white border-2 border-[#039EA5] shadow-xs">
                      <div className="text-[10px] font-mono font-bold text-[#039EA5]">03. POLICY</div>
                      <div className="text-xs font-bold text-[#000000] mt-1">Constraint Check</div>
                      <div className="text-[11px] text-[#1E1E1E] mt-1">Deterministic safety check</div>
                    </div>

                    <div className="p-3.5 sm:p-4 rounded-xl bg-white border-2 border-[#00AABB] shadow-xs">
                      <div className="text-[10px] font-mono font-bold text-[#00AABB]">04. DECISION</div>
                      <div className="text-xs font-bold text-[#000000] mt-1">Governed Verdict</div>
                      <div className="text-[11px] text-[#1E1E1E] mt-1">ALLOW, LIMIT, or HOLD</div>
                    </div>

                    <div className="p-3.5 sm:p-4 rounded-xl bg-teal-50/60 border-2 border-[#008361] shadow-xs">
                      <div className="text-[10px] font-mono font-bold text-[#008361]">05. AUDIT</div>
                      <div className="text-xs font-bold text-[#000000] mt-1">Tamper-Resistant Evidence</div>
                      <div className="text-[11px] text-[#1E1E1E] mt-1">Assigned auditor &amp; proof hash</div>
                    </div>
                  </div>

                  {/* Primary Bridge to Scenario Simulator */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                    <span className="text-xs text-[#1E1E1E] font-medium text-center sm:text-left">
                      Experience how CCE recalculates this decision live with custom parameters.
                    </span>
                    <button
                      onClick={() => scrollToSection('simulator')}
                      className="btn-pill-primary min-h-[48px] h-12 px-6 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md shrink-0 w-full sm:w-auto"
                    >
                      <span>Try the demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
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
