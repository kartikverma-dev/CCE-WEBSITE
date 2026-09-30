import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Send, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    industry: 'Telecom O-RAN & 5G Slicing',
    interest: 'Request Technical Pilot / Staging Evaluation',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

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

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-xl bg-[#0E1422] border-2 border-[#1E293B] rounded-2xl shadow-2xl p-6 sm:p-8 z-10 text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#1E293B]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-950 text-indigo-300 border border-indigo-700">
                <Mail className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  Connect with CredgeSol AI
                </h3>
                <p className="text-xs text-indigo-300 font-mono font-bold">
                  Enterprise Decision Assurance Pilot
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-200 font-bold mb-1 text-xs">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh Sharma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141C2E] border border-[#28354D] focus:outline-hidden focus:border-indigo-500 text-white font-medium text-xs placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-200 font-bold mb-1 text-xs">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rajesh@enterprise.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141C2E] border border-[#28354D] focus:outline-hidden focus:border-indigo-500 text-white font-medium text-xs placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-200 font-bold mb-1 text-xs">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Telecom / Utility / Bank"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141C2E] border border-[#28354D] focus:outline-hidden focus:border-indigo-500 text-white font-medium text-xs placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-200 font-bold mb-1 text-xs">
                    Industry Sector
                  </label>
                  <select
                    value={form.industry}
                    onChange={(e) => setForm({ ...form, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141C2E] border border-[#28354D] focus:outline-hidden focus:border-indigo-500 text-white font-bold text-xs"
                  >
                    <option>Telecom O-RAN &amp; 5G Slicing</option>
                    <option>Commercial EV Fleet Operations</option>
                    <option>Financial Services &amp; AML Clearing</option>
                    <option>Healthcare SecOps &amp; Critical Infrastructure</option>
                    <option>Energy &amp; Power Grid Automation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-200 font-bold mb-1 text-xs">
                  Primary Objective
                </label>
                <select
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141C2E] border border-[#28354D] focus:outline-hidden focus:border-indigo-500 text-white font-bold text-xs"
                >
                  <option>Request Technical Pilot / Staging Evaluation</option>
                  <option>Schedule an Executive Technical Briefing</option>
                  <option>Request Architectural Whitepaper &amp; PRD</option>
                  <option>Explore Partnership / Investor Discussion</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-200 font-bold mb-1 text-xs">
                  Operational Context (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your current autonomous AI models, actuators, or SLA constraints..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141C2E] border border-[#28354D] focus:outline-hidden focus:border-indigo-500 text-white font-medium text-xs resize-none placeholder:text-slate-500"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <a
                  href={`mailto:contact@credgesol.ai?subject=${encodeURIComponent(form.interest)}&body=${encodeURIComponent(
                    `Name: ${form.name}\nCompany: ${form.company}\nSector: ${form.industry}\n\nNotes: ${form.message}`
                  )}`}
                  className="text-xs font-bold text-indigo-400 hover:underline"
                >
                  Or email directly: contact@credgesol.ai
                </a>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-md flex items-center justify-center gap-1.5 cursor-pointer text-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="mt-8 text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center mx-auto border-2 border-emerald-500">
                <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
              </div>
              <h4 className="text-xl font-black text-white">
                Inquiry Recorded for CredgeSol AI
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 max-w-sm mx-auto leading-relaxed font-medium">
                Thank you, {form.name || 'Visitor'}. A member of the CredgeSol AI team will reach out promptly to coordinate your enterprise evaluation and technical deep-dive.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold cursor-pointer"
                >
                  Return to Presentation
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
