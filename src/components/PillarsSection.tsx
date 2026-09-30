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
import { StatusBadge } from './StatusBadge';

export const PillarsSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Telecom Slicing & AI-RAN Assurance',
      subtitle: 'Dynamic Spectrum Protection',
      icon: Radio,
      desc: 'Protects hospital, emergency services, and smart-grid priority slices from autonomous capacity reallocations while maximizing consumer QoE.',
      focus: 'O-RAN Alliance & 3GPP SLA Protection',
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
      subtitle: 'Article 14 Human Oversight',
      icon: FileCheck2,
      desc: 'Generates immutable cryptographic evidence records with exact rule references, model identities, and assigned human review roles for audit compliance.',
      focus: 'EU AI Act & Global AI Governance Standards',
    },
    {
      num: '04',
      title: 'Surgical Mitigation Over Blunt Outages',
      subtitle: 'Safe Operational Envelopes',
      icon: ShieldCheck,
      desc: 'Replaces blunt all-or-nothing shutdowns with staged bounds—restricting actions to 5% safe increments or targeted port filtering to maintain business continuity.',
      focus: 'High-Availability Enterprise Actuation',
    },
  ];

  return (
    <section id="pillars" className="py-12 sm:py-20 lg:py-28 bg-[#080B11] text-slate-100 relative overflow-hidden border-t border-[#1E293B]">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-14">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
            <span className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-indigo-950 border border-indigo-700 text-indigo-300 text-xs font-mono font-black">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Core Architectural Pillars</span>
            </span>
            <StatusBadge status="VERIFIED" size="sm" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
            Architectural Pillars of Assured Enterprise AI
          </h2>
          <p className="mt-2.5 sm:mt-4 text-xs sm:text-lg text-slate-300 leading-relaxed font-normal">
            Credge Clarity Engine provides the deterministic safety and governance foundation enabling telecom operators, financial institutions, and critical infrastructure to safely deploy autonomous AI into production.
          </p>

          {/* Enterprise capability pills */}
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3.5 text-xs font-mono">
            <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-[#0E1422] border border-[#28354D] text-slate-200 font-bold">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>Zero Probabilistic Variance</span>
            </div>
            <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-[#0E1422] border border-[#28354D] text-slate-200 font-bold">
              <Activity className="w-4 h-4 text-teal-400" />
              <span>Sub-Millisecond Policy Interception</span>
            </div>
            <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-[#0E1422] border border-[#28354D] text-slate-200 font-bold">
              <FileCheck2 className="w-4 h-4 text-cyan-400" />
              <span>Statutory Compliance (EU AI Act Art. 14)</span>
            </div>
            <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-[#0E1422] border border-[#28354D] text-slate-200 font-bold">
              <Lock className="w-4 h-4 text-amber-400" />
              <span>Immutable Cryptographic Audit Ledger</span>
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
                className="p-4 sm:p-6 lg:p-7 rounded-2xl bg-[#0E1422] border border-[#1E293B] shadow-md flex flex-col justify-between hover:border-indigo-500/60 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-3 sm:mb-4">
                    <span className="text-indigo-400 font-black text-sm">Pillar {pillar.num}</span>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 stroke-[2.2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-white mb-1 sm:mb-1.5">
                    {pillar.title}
                  </h3>
                  <div className="text-[11px] sm:text-xs text-indigo-300 font-mono font-bold mb-2.5 sm:mb-3">
                    {pillar.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-3 sm:pt-3.5 border-t border-[#1E293B] text-[11px] sm:text-xs font-mono text-teal-300 font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>{pillar.focus}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Technical Resilience Guarantee */}
        <div className="mt-8 sm:mt-14 p-4 sm:p-6 lg:p-7 rounded-2xl bg-[#0E1422] border border-[#1E293B] flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-lg">
          <div>
            <div className="text-[11px] sm:text-xs font-mono uppercase text-indigo-400 font-bold mb-1">
              Enterprise Resilience Architecture
            </div>
            <div className="text-base sm:text-lg font-black text-white flex items-center gap-2">
              <Cpu className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-indigo-400" />
              <span>Zero Black-Box Dependency · Deterministic Runtime Execution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl font-normal leading-relaxed">
              Engineered specifically for mission-critical operations. Zero reliance on remote probabilistic models for decision verification; all statutory rules and physical envelopes evaluate deterministically inside your security perimeter.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono font-bold px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-600 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Deterministic Core v2.4</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
