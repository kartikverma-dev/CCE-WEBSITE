import React from 'react';
import { 
  Radio, 
  ShieldCheck, 
  FileCheck2, 
  Activity, 
  CheckCircle2, 
  Sparkles,
  Lock,
  Cpu
} from 'lucide-react';
export const PillarsSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Telecom Slicing & AI-RAN Assurance',
      subtitle: 'Dynamic Spectrum Protection',
      icon: Radio,
      desc: 'Protects hospital, emergency services, and smart-grid priority slices from autonomous capacity reallocations while maximizing consumer QoE.',
      focus: 'Designed for O-RAN and 3GPP-based networks',
    },
    {
      num: '02',
      title: 'Physical Infrastructure & Asset Longevity',
      subtitle: 'Hardware Envelopes',
      icon: Activity,
      desc: 'Blocks autonomous dispatchers and fast chargers when battery degradation, thermal precursors, or physical warranty boundaries are exceeded.',
      focus: 'Thermal Runaway & Over-Cycle Quarantine',
    },
    {
      num: '03',
      title: 'Statutory AI Compliance & Audit Ledger',
      subtitle: 'Designed to support EU AI Act Article 14 human oversight requirements',
      icon: FileCheck2,
      desc: 'Generates tamper-resistant cryptographic evidence records with exact rule references, model identities, and assigned human review roles for audit compliance.',
      focus: 'Designed to support EU AI Act and global AI governance expectations',
    },
    {
      num: '04',
      title: 'Applies targeted limits instead of full shutdowns',
      subtitle: 'Original: Surgical Mitigation Over Blunt Outages',
      icon: ShieldCheck,
      desc: 'Uses staged limits where possible instead of all-or-nothing shutdowns - restricting actions to 5% safe increments or targeted port filtering to maintain business continuity.',
      focus: 'High-Availability Enterprise Actuation',
    },
  ];

  return (
    <section id="pillars" className="py-12 sm:py-20 lg:py-28 bg-[#FDFEFD] text-left relative overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-14">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#039EA5] text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#039EA5]" />
              <span>CORE ARCHITECTURAL PILLARS</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#008361]/10 border border-[#008361]/30 text-[#008361] text-xs font-mono font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#008361]" />
              <span>ARCHITECTURE SPECIFICATION</span>
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#000000]">
            Architectural Pillars of Assured Enterprise AI
          </h2>
          <p className="mt-2.5 sm:mt-4 text-xs sm:text-lg text-[#1E1E1E] leading-relaxed font-normal">
            Credge Clarity Engine provides the deterministic safety and governance foundation enabling telecom operators, financial institutions, and critical infrastructure to safely deploy autonomous AI into production.
          </p>

          {/* Enterprise capability pills */}
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3.5 text-xs font-mono">
            <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-white border border-gray-200 text-[#1E1E1E] font-bold shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#039EA5]" />
              <span>Consistent, rule-based results</span>
            </div>
            <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-white border border-gray-200 text-[#1E1E1E] font-bold shadow-xs">
              <Activity className="w-4 h-4 text-[#039EA5]" />
              <span>Low-latency policy checks</span>
            </div>
            <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-white border border-gray-200 text-[#1E1E1E] font-bold shadow-xs">
              <FileCheck2 className="w-4 h-4 text-[#00AABB]" />
              <span>Designed to support EU AI Act Article 14 human oversight requirements</span>
            </div>
            <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-white border border-gray-200 text-[#1E1E1E] font-bold shadow-xs">
              <Lock className="w-4 h-4 text-[#039EA5] shrink-0" />
              <div className="flex flex-col text-left">
                <span>A tamper-resistant record of decisions</span>
                <span className="text-[10px] text-gray-500 font-normal">Original: Immutable Cryptographic Audit Ledger</span>
              </div>
            </div>
          </div>
        </div>

        {/* The Four Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="p-5 sm:p-6 lg:p-7 rounded-3xl bg-[#FFFFFF] border border-gray-200 shadow-sm flex flex-col justify-between hover:border-[#039EA5] transition-all hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-3 sm:mb-4">
                    <span className="text-[#039EA5] font-black text-sm">Pillar {pillar.num}</span>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#039EA5] stroke-[2.2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-[#000000] mb-1 sm:mb-1.5">
                    {pillar.title}
                  </h3>
                  <div className="text-[11px] sm:text-xs text-[#039EA5] font-mono font-bold mb-2.5 sm:mb-3">
                    {pillar.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-[#1E1E1E] leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-3.5 border-t border-gray-100 text-[11px] sm:text-xs font-mono text-[#007053] font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#008361] shrink-0" />
                  <span>{pillar.focus}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Technical Resilience Guarantee in Solid Primary Teal (#00AABB) */}
        <div className="mt-8 sm:mt-14 p-6 sm:p-8 rounded-3xl bg-[#00AABB] text-white flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-md">
          <div>
            <div className="text-[11px] sm:text-xs font-mono uppercase text-teal-100 font-bold mb-1">
              ENTERPRISE RESILIENCE ARCHITECTURE
            </div>
            <div className="text-base sm:text-xl font-black text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-white shrink-0" />
              <span>Evaluates decisions against explicit, auditable rules</span>
            </div>
            <div className="text-[11px] text-teal-100 font-mono mt-1">
              Original: Zero Black-Box Dependency · Deterministic Runtime Execution
            </div>
            <p className="text-xs sm:text-sm text-teal-50 mt-1.5 max-w-xl font-normal leading-relaxed">
              Engineered specifically for mission-critical operations. Zero reliance on remote probabilistic models for decision verification; all statutory rules and physical envelopes evaluate deterministically inside your security perimeter.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono font-bold px-3.5 py-2 rounded-xl bg-white text-[#00AABB] shadow-sm flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00AABB] animate-pulse" />
              <span>Deterministic Core Engine</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
