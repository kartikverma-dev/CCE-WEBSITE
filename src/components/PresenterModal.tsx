import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Presentation, 
  Keyboard, 
  Clock, 
  Target,
  Tv
} from 'lucide-react';

interface PresenterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PresenterModal: React.FC<PresenterModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-3xl bg-[#0E1422] border-2 border-[#1E293B] rounded-2xl shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#1E293B]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-950 text-indigo-300 border border-indigo-700">
                <Presentation className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  CCE Presentation &amp; Operator Guide
                </h3>
                <p className="text-xs text-indigo-300 font-mono font-bold flex items-center gap-1.5 mt-0.5">
                  <Tv className="w-3.5 h-3.5 text-cyan-400" />
                  <span>High-Visibility Presentation Scale (Enabled by Default)</span>
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          <div className="mt-6 space-y-6 text-sm">
            {/* 10-Second Elevator Pitch */}
            <div className="p-5 rounded-xl bg-indigo-950/60 border border-indigo-700/80 shadow-xs">
              <div className="flex items-center gap-2 text-indigo-300 font-black mb-1.5 text-xs uppercase tracking-wider font-mono">
                <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>10-Second Executive Pitch</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-semibold italic">
                "AI models are great at proposing optimizations, but terrible at knowing enterprise SLAs and physical hazards. Credge Clarity Engine is the deterministic safety layer that intercepts recommendations, enforces hard policies, and generates an auditable record before anything executes."
              </p>
            </div>

            {/* 2-Minute Guided Demo Flow (Telecom Hero) */}
            <div>
              <div className="flex items-center gap-2 text-white font-black text-sm mb-3">
                <Target className="w-4 h-4 text-teal-400" />
                <span>2-Minute Flagship Demo Runbook (Telecom Scenario)</span>
              </div>
              <div className="space-y-2.5 text-xs">
                <div className="p-3.5 rounded-xl bg-[#141C2E] border border-[#28354D] flex items-start gap-3">
                  <span className="font-mono font-black text-indigo-400 text-sm">01</span>
                  <div className="text-slate-100 text-xs sm:text-sm">
                    <strong className="text-white font-bold">Show the AI proposal:</strong> "A dynamic traffic RL model sees a packed stadium and wants to move 18% of capacity to video streaming."
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#141C2E] border border-[#28354D] flex items-start gap-3">
                  <span className="font-mono font-black text-indigo-400 text-sm">02</span>
                  <div className="text-slate-100 text-xs sm:text-sm">
                    <strong className="text-white font-bold">Reveal the blind spot:</strong> "What it didn't know is the same sector powers the Metropolitan Trauma Hospital ICU telemetry slice, carrying a $45,000/hour SLA breach fine."
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#141C2E] border border-[#28354D] flex items-start gap-3">
                  <span className="font-mono font-black text-indigo-400 text-sm">03</span>
                  <div className="text-slate-100 text-xs sm:text-sm">
                    <strong className="text-white font-bold">The CCE Safe Envelope:</strong> "Instead of blocking everything or causing an outage, CCE limits the reallocation to 5% staged capacity. The hospital stays safe, and video gets a boost."
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#141C2E] border border-[#28354D] flex items-start gap-3">
                  <span className="font-mono font-black text-indigo-400 text-sm">04</span>
                  <div className="text-slate-100 text-xs sm:text-sm">
                    <strong className="text-white font-bold">Open the Evidence Drawer:</strong> "Press 'E' or click 'Inspect Evidence' to show the immutable record with rule references and assigned NOC role."
                  </div>
                </div>
              </div>
            </div>

            {/* Keyboard Shortcuts Matrix */}
            <div>
              <div className="flex items-center gap-2 text-white font-black text-sm mb-3">
                <Keyboard className="w-4 h-4 text-cyan-400" />
                <span>Hardware Keyboard Shortcuts</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-[#141C2E] border border-[#28354D] flex items-center justify-between">
                  <span className="text-slate-200 font-bold">Next Step</span>
                  <span className="px-2.5 py-1 rounded bg-[#080B11] border border-[#28354D] text-white font-black">→ / Space</span>
                </div>
                <div className="p-3 rounded-xl bg-[#141C2E] border border-[#28354D] flex items-center justify-between">
                  <span className="text-slate-200 font-bold">Prev Step</span>
                  <span className="px-2.5 py-1 rounded bg-[#080B11] border border-[#28354D] text-white font-black">←</span>
                </div>
                <div className="p-3 rounded-xl bg-[#141C2E] border border-[#28354D] flex items-center justify-between">
                  <span className="text-slate-200 font-bold">Reset Step</span>
                  <span className="px-2.5 py-1 rounded bg-[#080B11] border border-[#28354D] text-white font-black">R</span>
                </div>
                <div className="p-3 rounded-xl bg-[#141C2E] border border-[#28354D] flex items-center justify-between">
                  <span className="text-slate-200 font-bold">Evidence Drawer</span>
                  <span className="px-2.5 py-1 rounded bg-[#080B11] border border-[#28354D] text-white font-black">E</span>
                </div>
                <div className="p-3 rounded-xl bg-[#141C2E] border border-[#28354D] flex items-center justify-between">
                  <span className="text-slate-200 font-bold">Presenter Notes</span>
                  <span className="px-2.5 py-1 rounded bg-[#080B11] border border-[#28354D] text-white font-black">P</span>
                </div>
                <div className="p-3 rounded-xl bg-[#141C2E] border border-[#28354D] flex items-center justify-between">
                  <span className="text-slate-200 font-bold">Display Scale</span>
                  <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-500 font-black">
                    LARGE / DEFAULT ON
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#1E293B] flex justify-end">
            <button
              onClick={onClose}
              className="btn-pill-primary cursor-pointer text-xs"
            >
              Ready to Present
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
