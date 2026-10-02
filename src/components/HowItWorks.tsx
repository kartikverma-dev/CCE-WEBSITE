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
      guarantee: 'Inputs are reconciled against ground truth before the policy check',
    },
    {
      num: '02',
      title: 'Deterministic Policy & Constraint Checks',
      subtitle: 'Rule-Based Governance',
      icon: Scale,
      badge: 'Consistent, rule-based results',
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
      title: 'Tamper-Resistant Evidence & Audit Provenance',
      subtitle: 'Cryptographic Proof for Enterprise Risk & Regulators',
      icon: FileCheck2,
      badge: 'Tamper-Evident Ledger',
      description: 'Every decision produces a structured evidence record capturing input telemetry, model identity, rule citations, detected conflicts, and human sign-offs. Designed to support compliance audits and statutory frameworks.',
      inputs: ['Deterministic State Digest', 'Rule Citation Provenance', 'Human Sign-off Timestamps', 'Actuator Verification Receipts'],
      guarantee: 'Audit trails designed to support regulator review',
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-20 lg:py-28 bg-[#FDFEFD] relative border-t border-gray-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-[#039EA5] text-xs font-mono font-bold mb-3 border border-teal-200">
            <Layers className="w-4 h-4 text-[#039EA5]" />
            <span>ARCHITECTURE &amp; CORE PRINCIPLES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#000000]">
            How the Credge Clarity Engine Works
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#1E1E1E] font-medium">
            A deterministic five-layer assurance pipeline sitting between autonomous models and operational actuators.
          </p>
        </div>

        {/* Why CCE Governs the Decision, Not the Model (The Core Philosophy) */}
        <div className="mb-10 sm:mb-16 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#FFFFFF] border border-gray-200 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div>
              <span className="text-[11px] sm:text-xs font-mono font-black uppercase tracking-wider text-[#039EA5]">
                Core Design Philosophy
              </span>
              <h3 className="text-xl sm:text-3xl font-black text-[#000000] mt-1">
                "We govern the decision, not the model."
              </h3>
              <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-base text-[#1E1E1E] leading-relaxed font-normal">
                Traditional AI governance attempts to inspect neural network weights, fine-tune prompts, or detect hallucinations probabilistically. But in production operations - power grids, cell towers, financial ledgers, and hospitals - what matters is the <strong>physical or financial action</strong>.
              </p>
              <p className="mt-2 text-xs sm:text-base text-[#1E1E1E] leading-relaxed font-normal">
                CCE leaves model development agile and unconstrained. It intercepts only the <strong>actuation proposal</strong>, applying deterministic enterprise guardrails so dangerous actions can never execute.
              </p>
            </div>

            <div className="p-4 sm:p-6 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs">
                <span className="w-32 font-mono font-bold text-gray-500 shrink-0">Model Monitoring:</span>
                <span className="text-[#1E1E1E] font-medium">Inspects drift, perplexity, and prompt tokens (probabilistic)</span>
              </div>
              <div className="h-px bg-gray-200" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs">
                <span className="w-32 font-mono font-black text-[#039EA5] shrink-0">CCE Layer:</span>
                <span className="font-bold text-[#000000]">
                  Governs real-world operational effects, SLAs, hardware safety &amp; legal liability (deterministic)
                </span>
              </div>
              <div className="h-px bg-gray-200" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs">
                <span className="w-32 font-mono font-black text-[#00AABB] shrink-0">Guarantee:</span>
                <span className="text-[#039EA5] font-bold">
                  Rule-based checks with an evidence record for each decision
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Layers Interactive Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Layer Navigation Buttons */}
          <div className="lg:col-span-4 space-y-2 sm:space-y-2.5">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              const isActive = activeLayer === index;

              return (
                <button
                  key={layer.num}
                  onClick={() => setActiveLayer(index)}
                  className={`w-full p-3.5 sm:p-4 rounded-2xl text-left transition-all border-2 flex items-center gap-3 sm:gap-4 cursor-pointer ${
                    isActive
                      ? 'bg-white border-[#00AABB] shadow-md text-[#000000]'
                      : 'bg-[#FFFFFF] border-gray-200 hover:border-[#039EA5] text-gray-700'
                  }`}
                >
                  <div className={`p-2 sm:p-2.5 rounded-xl shrink-0 ${isActive ? 'bg-teal-50 text-[#039EA5] font-bold' : 'bg-gray-100 text-gray-500'}`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">
                      Layer {layer.num}
                    </div>
                    <div className="text-xs sm:text-sm font-extrabold text-[#000000] leading-snug break-words">
                      {layer.title}
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-[#00AABB] translate-x-1' : 'opacity-0'}`} />
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
              className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#FFFFFF] border border-gray-200 shadow-sm space-y-5"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-[11px] sm:text-xs font-mono font-bold px-3 py-1 rounded-full bg-teal-50 text-[#039EA5] border border-teal-200">
                  {layers[activeLayer].badge}
                </span>
                <span className="text-[11px] sm:text-xs font-mono font-bold text-gray-400">
                  Layer {layers[activeLayer].num} / 05
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-3xl font-black text-[#000000]">
                  {layers[activeLayer].title}
                </h3>
                <p className="text-xs sm:text-base text-[#039EA5] font-bold mt-1">
                  {layers[activeLayer].subtitle}
                </p>
                <p className="text-xs sm:text-base text-[#1E1E1E] mt-2 sm:mt-3.5 leading-relaxed font-normal">
                  {layers[activeLayer].description}
                </p>
              </div>

              {/* Ingested Inputs / Checks */}
              <div>
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-gray-500 font-black block mb-2 sm:mb-2.5">
                  Key Reconciled Artifacts
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {layers[activeLayer].inputs.map((inp, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs font-bold text-[#1E1E1E] flex items-center gap-2 sm:gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00AABB] shrink-0" />
                      <span>{inp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Layer Operational Guarantee */}
              <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#039EA5] shrink-0" />
                <div className="text-xs sm:text-sm text-[#007053] font-medium">
                  <strong className="text-[#000000] font-bold">Architectural Guarantee:</strong> {layers[activeLayer].guarantee}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Operational Lifecycle Stepper */}
        <div className="mt-12 sm:mt-18 pt-10 border-t border-gray-200">
          <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-black text-[#000000]">
              The Autonomous Decision Lifecycle
            </h3>
            <p className="text-xs sm:text-sm text-[#1E1E1E] font-medium mt-1">
              From unverified AI proposal to executed and audited enterprise action.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5 text-center text-xs">
            {[
              { step: '1. Model Emit', desc: 'AI recommends an optimization' },
              { step: '2. Ingestion', desc: 'Sync telemetry & SLA state' },
              { step: '3. Constraint', desc: 'Deterministic policy match' },
              { step: '4. Envelope', desc: 'Calculate safe limit bounds' },
              { step: '5. Actuation', desc: 'Pass, Stage or Quarantine' },
              { step: '6. Attestation', desc: 'Cryptographic evidence digest' },
            ].map((cycle, i) => (
              <div key={i} className="p-3 sm:p-4 rounded-2xl bg-white border border-gray-200 shadow-xs hover:border-[#039EA5] transition-all">
                <div className="font-mono font-black text-[#039EA5] mb-1 text-[11px] sm:text-xs">
                  {cycle.step}
                </div>
                <div className="text-[#1E1E1E] font-medium text-[10px] sm:text-[11px] leading-tight">
                  {cycle.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Visible Mapping Between Architecture Layers, Lifecycle Steps, and Simulator Stepper (Section 4.8) */}
          <details className="mt-6 max-w-2xl mx-auto rounded-2xl bg-white border border-gray-200 p-4 text-xs shadow-xs text-left">
            <summary className="cursor-pointer font-mono font-bold text-[#039EA5] hover:text-[#00AABB] transition-colors flex items-center justify-between min-h-[44px] py-1">
              <span>View Process Sequence &amp; Architecture Mapping</span>
              <span className="text-gray-400 font-normal text-[11px]">(Click to expand)</span>
            </summary>
            <div className="mt-3 pt-3 border-t border-gray-100 space-y-2 text-[#1E1E1E]">
              <p className="text-gray-600 font-medium">
                How the 6-step lifecycle connects to the 5 simulator demo steps and the 5 platform architecture layers:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-[11px]">
                  <thead>
                    <tr className="border-b border-gray-200 text-gray-500">
                      <th className="py-1.5 pr-2">Lifecycle Stage</th>
                      <th className="py-1.5 px-2">Simulator Demo Step</th>
                      <th className="py-1.5 pl-2">Platform Layer</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-1.5 pr-2 text-gray-700">1. Model Emit</td>
                      <td className="py-1.5 px-2 font-bold text-[#039EA5]">Step 1: What the AI wanted to do</td>
                      <td className="py-1.5 pl-2 text-gray-700">External AI Model</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 pr-2 text-gray-700">2. Ingestion</td>
                      <td className="py-1.5 px-2 font-bold text-[#039EA5]">Step 2: What the AI missed</td>
                      <td className="py-1.5 pl-2 text-gray-700">Layer 1: Context Ingestion</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 pr-2 text-gray-700">3. Constraint</td>
                      <td className="py-1.5 px-2 font-bold text-[#039EA5]">Step 3: Which rules apply</td>
                      <td className="py-1.5 pl-2 text-gray-700">Layer 2: Rule Enforcement</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 pr-2 text-gray-700">4. Envelope</td>
                      <td className="py-1.5 px-2 font-bold text-[#039EA5]">Step 4: What CCE worked out</td>
                      <td className="py-1.5 pl-2 text-gray-700">Layer 3: Risk Envelope Solver</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 pr-2 text-gray-700">5. Actuation</td>
                      <td className="py-1.5 px-2 font-bold text-[#039EA5]">Step 5: What was decided</td>
                      <td className="py-1.5 pl-2 text-gray-700">Layer 4: Governed Routing</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 pr-2 text-gray-700">6. Attestation</td>
                      <td className="py-1.5 px-2 font-bold text-[#039EA5]">Evidence Drawer</td>
                      <td className="py-1.5 pl-2 text-gray-700">Layer 5: Tamper-Resistant Ledger</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};
