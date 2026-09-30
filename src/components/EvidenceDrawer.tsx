import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  FileCheck2, 
  ShieldCheck, 
  Copy, 
  Check, 
  Printer, 
  AlertTriangle, 
  UserCheck, 
  Hash, 
  Clock, 
  Layers, 
  Info 
} from 'lucide-react';
import type { Scenario } from '../types';
import { OutcomeBadge, StatusBadge } from './StatusBadge';

interface EvidenceDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  scenario: Scenario;
}

export const EvidenceDrawer: React.FC<EvidenceDrawerProps> = ({
  isOpen,
  onClose,
  scenario,
}) => {
  const [copied, setCopied] = React.useState(false);
  const { evidence } = scenario;

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(evidence, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-50 transition-opacity"
          />

          {/* Drawer Panel */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-2xl bg-[#0E1422] border-l-2 border-[#1E293B] shadow-2xl flex flex-col overflow-hidden text-white"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#1E293B] flex items-center justify-between bg-[#080B11]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-950 text-indigo-300 border border-indigo-700">
                  <FileCheck2 className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-black text-white">
                      Decision Evidence Record
                    </h3>
                    <StatusBadge status="SIMULATED" size="sm" />
                  </div>
                  <div className="text-xs font-mono font-bold text-slate-400">
                    ID: {evidence.decisionId}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  title="Copy raw evidence JSON"
                  className="p-2 px-3 rounded-lg border border-[#28354D] text-slate-200 hover:bg-[#141C2E] hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'JSON'}</span>
                </button>
                <button
                  onClick={handlePrint}
                  title="Print evidence report"
                  className="p-2 px-2.5 rounded-lg border border-[#28354D] text-slate-200 hover:bg-[#141C2E] hover:text-white text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Mandatory Truthfulness Notice */}
            <div className="bg-amber-950/80 border-b border-amber-800 px-6 py-3 flex items-center gap-2.5 text-xs text-amber-200 font-bold">
              <Info className="w-4 h-4 shrink-0 text-amber-400" />
              <span>
                <strong>Mandatory Label:</strong> Illustrative demo record. Not a production CCE audit record.
              </span>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm">
              {/* Outcome summary card */}
              <div className="p-5 rounded-xl border border-[#1E293B] bg-[#141C2E] shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <span className="text-xs font-mono font-black text-slate-400">
                    Governed Outcome
                  </span>
                  <OutcomeBadge outcome={evidence.governedOutcome} size="md" />
                </div>
                <p className="text-sm sm:text-base font-bold text-white leading-relaxed">
                  {evidence.outcomeReason}
                </p>
              </div>

              {/* Provenance Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                <div className="p-3.5 rounded-xl border border-[#28354D] bg-[#141C2E]">
                  <div className="flex items-center gap-1.5 text-slate-400 font-mono font-bold mb-1">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Evaluation Timestamp</span>
                  </div>
                  <div className="font-mono text-white font-extrabold text-xs">
                    {evidence.timestamp}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-[#28354D] bg-[#141C2E]">
                  <div className="flex items-center gap-1.5 text-slate-400 font-mono font-bold mb-1">
                    <Layers className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Originating Model Identity</span>
                  </div>
                  <div className="font-extrabold text-white truncate" title={evidence.modelIdentity}>
                    {evidence.modelIdentity}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-[#28354D] bg-[#141C2E]">
                  <div className="flex items-center gap-1.5 text-slate-400 font-mono font-bold mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                    <span>Statutory / SLA Rule Ref</span>
                  </div>
                  <div className="font-mono text-indigo-300 font-black text-xs">
                    {evidence.ruleReference}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-[#28354D] bg-[#141C2E]">
                  <div className="flex items-center gap-1.5 text-slate-400 font-mono font-bold mb-1">
                    <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>Human Review Status</span>
                  </div>
                  <div className="font-mono font-black text-amber-300 text-xs">
                    {evidence.humanReviewStatus.replace('_', ' ')}
                  </div>
                </div>
              </div>

              {/* Detected Policy Conflict Breakdown */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-black uppercase tracking-wider text-slate-300">
                  Detected Policy Conflict
                </div>
                <div className="p-4 rounded-xl border border-rose-800/80 bg-rose-950/60 text-rose-100 text-xs sm:text-sm font-medium leading-relaxed">
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>{evidence.detectedConflict}</div>
                  </div>
                </div>
              </div>

              {/* Context Reconciliation Facts Recorded */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-black uppercase tracking-wider text-slate-300">
                  Corroborated Telemetry &amp; Context Facts
                </div>
                <div className="border border-[#28354D] rounded-xl divide-y divide-[#1E293B] overflow-hidden bg-[#141C2E]">
                  {scenario.contextFacts.map((fact, i) => (
                    <div key={i} className="p-3 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-white">
                          {fact.label}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono font-semibold">
                          Source: {fact.source}
                        </div>
                      </div>
                      <div className={`font-mono font-bold ${fact.isFlagged ? 'text-rose-400 font-black' : 'text-slate-200'}`}>
                        {fact.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deterministic Evaluation Log */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-black uppercase tracking-wider text-slate-300">
                  Deterministic Step Proofs
                </div>
                <div className="space-y-2.5">
                  {scenario.evaluationSteps.map((step) => (
                    <div
                      key={step.stepNumber}
                      className="p-3.5 rounded-xl border border-[#28354D] bg-[#141C2E] text-xs"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-white text-xs">
                          Step {step.stepNumber}: {step.title}
                        </span>
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded font-black bg-[#080B11] text-slate-200 border border-[#28354D]">
                          {step.status}
                        </span>
                      </div>
                      <p className="text-slate-200 font-medium leading-relaxed">{step.summary}</p>
                      <div className="mt-2 font-mono text-[11px] text-indigo-300 font-bold">
                        Ref: {step.telemetryRef}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cryptographic Digest (Labeled Simulated) */}
              <div className="p-4 rounded-xl border border-[#28354D] bg-[#141C2E]">
                <div className="flex items-center justify-between text-xs font-mono text-slate-300 font-bold mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Hash className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Simulated Evidence Digest</span>
                  </span>
                  <StatusBadge status="SIMULATED" size="sm" />
                </div>
                <div className="font-mono text-xs text-white font-bold break-all bg-[#080B11] p-2.5 rounded border border-[#28354D]">
                  {evidence.immutableDigest}
                </div>
                <p className="text-[11px] text-slate-400 font-medium mt-1.5">
                  In production, CCE emits deterministic SHA-256 state hashes chained to enterprise SIEM/audit sinks.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-[#1E293B] bg-[#080B11] flex items-center justify-between">
              <span className="text-xs text-slate-300 font-mono font-bold">
                Assigned: {evidence.assignedAuditorRole}
              </span>
              <button
                onClick={onClose}
                className="btn-pill-primary cursor-pointer text-xs"
              >
                Close Drawer
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
