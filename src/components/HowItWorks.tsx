import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Scale, 
  FileCheck2, 
  CheckCircle2, 
  ArrowRight, 
  Database, 
  Workflow 
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      num: '01',
      title: 'Context & Telemetry Ingestion',
      subtitle: 'Reconciling Live Reality with Model Blind Spots',
      icon: Database,
      badge: 'Multi-Source Sync',
      description: 'Before any AI recommendation is approved, CCE pulls the active ground truth: real-time telemetry streams, contract SLA databases, physical asset health registers, and dependencies that the originating model never saw.',
      inputs: ['Contract SLA Tables', 'Real-time Hardware Telemetry', 'Topological Dependencies', 'Statutory Priority Registers'],
      guarantee: '100% ground-truth reconciliation before policy arbitration',
    },
    {
      num: '02',
      title: 'Deterministic Policy & Constraint Checks',
      subtitle: 'Zero-Hallucination Rule Enforcement',
      icon: Scale,
      badge: 'Zero Probabilistic Variance',
      description: 'CCE evaluates unambiguous, deterministic rules created by domain engineers and compliance officers. No LLM or generative model makes the verdict. Rules are version-controlled, auditable, and mathematically deterministic.',
      inputs: ['Safety Thresholds (e.g. Max 42°C, 800 cycles)', 'Contractual Penalties ($45k/hr SLA breaches)', 'Emergency Life-Support Shields', 'AML Proportionality Standards'],
      guarantee: 'Deterministic execution with zero prompt injection vulnerability',
    },
    {
      num: '03',
      title: 'Safe Risk Envelope & Impact Solver',
      subtitle: 'Intelligent Mitigation Over Blunt Rejection',
      icon: Cpu,
      badge: 'Adaptive Bounding',
      description: 'Instead of binary pass/fail that breaks autonomous pipelines, CCE calculates the safe operational envelope. When a model proposes +18% capacity, CCE discovers that +5% is completely compliant, allowing partial optimization safely.',
      inputs: ['Boundary Relaxation Algorithms', 'Degraded Fallback Matrices', 'Staged Capacity Rollouts', 'Multi-Variable Impact Bounds'],
      guarantee: 'Preserves autonomous optimization value while bounding worst-case downside',
    },
    {
      num: '04',
      title: 'Governed Decision Routing & Human Oversight',
      subtitle: 'Strict Responsibility and Role Assignment',
      icon: Workflow,
      badge: 'Human-in-the-Loop',
      description: 'Decisions are categorized into standardized enterprise outcomes: ALLOW, LIMIT, HOLD, ESCALATE, or REJECT. When human intervention is required, it routes directly to the designated accountable role with full context prep.',
      inputs: ['ALLOW (Direct Actuation)', 'LIMIT (Throttled Execution)', 'HOLD (Quarantine & Review)', 'ESCALATE (Executive Approval)'],
      guarantee: 'Never leaves an autonomous agent with unmonitored critical actuator access',
    },
    {
      num: '05',
      title: 'Immutable Evidence & Audit Provenance',
      subtitle: 'Cryptographic Proof for Enterprise Risk & Regulators',
      icon: FileCheck2,
      badge: 'Tamper-Evident Ledger',
      description: 'Every decision produces a structured evidence record capturing input telemetry, model identity, rule citations, detected conflicts, and human sign-offs. Designed for instant compliance audits under EU AI Act and statutory frameworks.',
      inputs: ['Deterministic State Digest', 'Rule Citation Provenance', 'Human Sign-off Timestamps', 'Actuator Verification Receipts'],
      guarantee: 'Immutable, regulator-ready audit trails for every AI interaction',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#080B11] relative border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950 text-indigo-300 text-xs font-mono font-bold mb-3 border border-indigo-800">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>Architecture &amp; Core Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            How the Credge Clarity Engine Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-medium">
            A deterministic five-layer assurance pipeline sitting between autonomous models and operational actuators.
          </p>
        </div>

        {/* Why CCE Governs the Decision, Not the Model (The Core Philosophy) */}
        <div className="mb-16 p-7 sm:p-9 rounded-2xl bg-[#0E1422] border-2 border-[#1E293B] shadow-md relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-mono font-black uppercase tracking-wider text-indigo-400">
                Core Design Philosophy
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                "We govern the decision, not the model."
              </h3>
              <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Traditional AI governance attempts to inspect neural network weights, fine-tune prompts, or detect hallucinations probabilistically. But in production operations—power grids, cell towers, financial ledgers, and hospitals—what matters is the <strong>physical or financial action</strong>.
              </p>
              <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                CCE leaves model development agile and unconstrained. It intercepts only the <strong>actuation proposal</strong>, applying deterministic enterprise guardrails so dangerous actions can never execute.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#141C2E] border border-[#28354D] space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs">
                <span className="w-32 font-mono font-bold text-slate-400 shrink-0">Model Monitoring:</span>
                <span className="text-slate-300 font-medium">Inspects drift, perplexity, and prompt tokens (probabilistic)</span>
              </div>
              <div className="h-px bg-[#28354D]" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs">
                <span className="w-32 font-mono font-black text-indigo-400 shrink-0">CCE Layer:</span>
                <span className="font-bold text-white">
                  Governs real-world operational effects, SLAs, hardware safety &amp; legal liability (deterministic)
                </span>
              </div>
              <div className="h-px bg-[#28354D]" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs">
                <span className="w-32 font-mono font-black text-emerald-400 shrink-0">Guarantee:</span>
                <span className="text-emerald-300 font-bold">
                  Zero hallucinations, zero prompt leaks, 100% auditable evidence record
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Layers Interactive Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Layer Navigation Buttons */}
          <div className="lg:col-span-4 space-y-2.5">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              const isActive = activeLayer === index;

              return (
                <button
                  key={layer.num}
                  onClick={() => setActiveLayer(index)}
                  className={`w-full p-4 rounded-xl text-left transition-all border-2 flex items-center gap-4 cursor-pointer ${
                    isActive
                      ? 'bg-[#141C2E] border-indigo-500 shadow-md text-white'
                      : 'bg-[#0E1422] border-[#1E293B] hover:border-slate-600 text-slate-300'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg ${isActive ? 'bg-indigo-950 text-indigo-300 font-bold' : 'bg-slate-900 text-slate-400'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      Layer {layer.num}
                    </div>
                    <div className="text-sm font-extrabold truncate text-white">
                      {layer.title}
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-indigo-400 translate-x-1' : 'opacity-0'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Layer Detail View */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeLayer}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-7 sm:p-9 rounded-2xl bg-[#0E1422] border-2 border-[#1E293B] shadow-xl space-y-6"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                  {layers[activeLayer].badge}
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">
                  Layer {layers[activeLayer].num} / 05
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {layers[activeLayer].title}
                </h3>
                <p className="text-base text-indigo-300 font-bold mt-1">
                  {layers[activeLayer].subtitle}
                </p>
                <p className="text-sm sm:text-base text-slate-200 mt-3.5 leading-relaxed font-normal">
                  {layers[activeLayer].description}
                </p>
              </div>

              {/* Ingested Inputs / Checks */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-black block mb-2.5">
                  Key Reconciled Artifacts
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {layers[activeLayer].inputs.map((inp, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#141C2E] border border-[#28354D] text-xs font-bold text-white flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>{inp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Layer Operational Guarantee */}
              <div className="p-4.5 rounded-xl bg-teal-950/80 border border-teal-600 flex items-center gap-3.5">
                <ShieldCheck className="w-5 h-5 text-teal-300 shrink-0" />
                <div className="text-xs sm:text-sm text-teal-100 font-medium">
                  <strong className="text-white font-bold">Architectural Guarantee:</strong> {layers[activeLayer].guarantee}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Operational Lifecycle Stepper */}
        <div className="mt-16 pt-12 border-t border-[#1E293B]">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl font-black text-white">
              The Autonomous Decision Lifecycle
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              From unverified AI proposal to executed and audited enterprise action.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 text-center text-xs">
            {[
              { step: '1. Model Emit', desc: 'AI recommends an optimization' },
              { step: '2. Ingestion', desc: 'Sync telemetry & SLA state' },
              { step: '3. Constraint', desc: 'Deterministic policy match' },
              { step: '4. Envelope', desc: 'Calculate safe limit bounds' },
              { step: '5. Actuation', desc: 'Pass, Stage or Quarantine' },
              { step: '6. Attestation', desc: 'Immutable evidence digest' },
            ].map((cycle, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#0E1422] border border-[#1E293B] shadow-xs">
                <div className="font-mono font-black text-indigo-400 mb-1 text-xs">
                  {cycle.step}
                </div>
                <div className="text-slate-300 font-medium text-[11px] leading-tight">
                  {cycle.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
