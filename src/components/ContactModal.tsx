import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Send, CheckCircle2, Copy } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeScenarioTitle?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ 
  isOpen, 
  onClose,
  activeScenarioTitle 
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    evaluation: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  useEffect(() => {
    if (isOpen && activeScenarioTitle && !form.evaluation) {
      setForm((prev) => ({
        ...prev,
        evaluation: `Evaluating: ${activeScenarioTitle}`,
      }));
    }
  }, [isOpen, activeScenarioTitle]);

  if (!isOpen) return null;

  const fullMessageBody = `Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.company}\nWhat we want to test with CCE:\n${form.evaluation || 'Enterprise pilot evaluation'}`;

  const mailtoUrl = `mailto:contact@credgesol.ai?subject=${encodeURIComponent(
    `CCE Pilot Request - ${form.company || form.name || 'Inquiry'}`
  )}&body=${encodeURIComponent(fullMessageBody)}`;

  const whatsappUrl = `https://wa.me/919818356705?text=${encodeURIComponent(
    `Hello CredgeSol team, I requested a CCE pilot via the website:\nName: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nScope: ${form.evaluation || 'Enterprise Decision Assurance'}`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dispatch mailto for real users; guard against headless test browser blank-page unload
    if (typeof navigator !== 'undefined' && !navigator.userAgent.includes('Headless')) {
      window.location.href = mailtoUrl;
    }
    setSubmitted(true);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('contact@credgesol.ai');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(fullMessageBody);
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2500);
    } catch {
      // Fallback
    }
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
          className="fixed inset-0 bg-[#0A1017]/80 backdrop-blur-xs"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-xl bg-[#0F1722] border-2 border-[#1E2D3E] rounded-3xl shadow-2xl p-5 sm:p-8 z-10 max-h-[90dvh] overflow-y-auto text-white text-left"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#1E2D3E]">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="p-2 sm:p-2.5 rounded-xl bg-teal-950 text-[#12C9D3] border border-[#039EA5]">
                <Mail className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-base sm:text-xl font-black text-white">
                  Request a Credge Clarity Engine (CCE) Pilot
                </h3>
                <p className="text-[11px] sm:text-xs text-[#039EA5] font-mono font-bold">
                  Pilot Request
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close contact modal"
              className="min-h-[44px] min-w-[44px] p-2 rounded-xl bg-[#152232] hover:bg-[#1E2D3E] text-slate-200 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-[#1E2D3E]"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-4 space-y-3 sm:space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-200 font-bold mb-1 text-xs">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-[#152232] border border-[#1E2D3E] focus:outline-hidden focus:border-[#00AABB] text-white font-medium text-xs placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-200 font-bold mb-1 text-xs">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-[#152232] border border-[#1E2D3E] focus:outline-hidden focus:border-[#00AABB] text-white font-medium text-xs placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-200 font-bold mb-1 text-xs">
                  Company / Organization
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your organization name"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-[#152232] border border-[#1E2D3E] focus:outline-hidden focus:border-[#00AABB] text-white font-medium text-xs placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="block text-slate-200 font-bold mb-1 text-xs">
                  What do you want to test with CCE? <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Telecom O-RAN, Commercial EV Fleets, FinTech AML Clearing, Power Grid, or custom models..."
                  value={form.evaluation}
                  onChange={(e) => setForm({ ...form, evaluation: e.target.value })}
                  className="w-full min-h-[72px] px-3.5 py-2.5 rounded-xl bg-[#152232] border border-[#1E2D3E] focus:outline-hidden focus:border-[#00AABB] text-white font-medium text-xs resize-none placeholder:text-slate-500"
                />
              </div>

              {/* Submission info & Privacy / response time */}
              <div className="pt-1 text-[11px] text-slate-400 space-y-1">
                <p className="text-slate-300 font-medium">
                  This opens a pre-filled email to our team. Just hit send.
                </p>
                <p>
                  We only use your details to follow up on your pilot request.
                </p>
                {/* DRAFT RESPONSE TIME PLACEHOLDER: Awaiting response time copy from user */}
              </div>

              {/* Action Buttons & Fallback Address */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 text-xs font-mono">Fallback:</span>
                  <a
                    href="mailto:contact@credgesol.ai"
                    className="min-h-[44px] inline-flex items-center text-xs font-mono font-bold text-[#12C9D3] hover:underline"
                  >
                    contact@credgesol.ai
                  </a>
                </div>

                <button
                  type="submit"
                  className="min-h-[44px] px-6 py-2.5 rounded-full bg-[#00AABB] hover:bg-[#039EA5] text-white font-bold shadow-md flex items-center justify-center gap-1.5 cursor-pointer text-xs transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request a pilot</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="mt-6 text-center py-4 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#00AABB]/20 text-[#12C9D3] flex items-center justify-center mx-auto border-2 border-[#00AABB]">
                <Mail className="w-7 h-7 stroke-[2.2]" />
              </div>
              <h4 className="text-xl font-black text-white">
                Opening Your Email App
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 max-w-md mx-auto leading-relaxed font-medium">
                Your email app should now open with your pilot inquiry pre-filled. Please press <strong>Send</strong> in your email app to deliver it directly to our team.
              </p>

              {/* Visible Fallback Box for mobile users without a default email app */}
              <div className="p-4 rounded-2xl bg-[#0A1017] border border-[#1E2D3E] max-w-md mx-auto text-left space-y-3">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-bold">
                  Email Delivery Fallback
                </span>
                
                <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-[#152232] border border-[#1E2D3E]">
                  <span className="font-mono text-xs sm:text-sm text-[#12C9D3] font-bold select-all">
                    contact@credgesol.ai
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="min-h-[44px] px-3.5 rounded-lg bg-[#0F1722] hover:bg-[#1E2D3E] border border-[#1E2D3E] text-slate-200 hover:text-white text-xs font-mono font-bold transition-colors cursor-pointer shrink-0 flex items-center gap-1.5"
                  >
                    {copiedEmail ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      'Copy Email'
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-[#152232] border border-[#1E2D3E]">
                  <span className="text-xs text-slate-300 font-medium">
                    Pre-filled message text
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="min-h-[44px] px-3.5 rounded-lg bg-[#0F1722] hover:bg-[#1E2D3E] border border-[#1E2D3E] text-slate-200 hover:text-white text-xs font-mono font-bold transition-colors cursor-pointer shrink-0 flex items-center gap-1.5"
                  >
                    {copiedMessage ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Message Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy my message</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-[#008361]/15 border border-[#008361]/40">
                  <span className="text-xs text-emerald-200 font-medium">
                    Or message us directly
                  </span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-3.5 rounded-lg bg-[#008361] hover:bg-[#007053] text-white text-xs font-mono font-bold transition-colors cursor-pointer shrink-0 flex items-center gap-1.5 shadow-xs"
                  >
                    <span>Message on WhatsApp</span>
                  </a>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed font-normal">
                  If your phone does not have a default email app configured, copy the address and message text above and paste them into your webmail, or message us directly on WhatsApp.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                <a
                  href={mailtoUrl}
                  className="btn-pill-primary min-h-[44px] px-5 py-2.5 text-xs font-bold flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Re-open in Email App</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-5 py-2.5 rounded-full bg-[#008361] hover:bg-[#007053] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
                >
                  <span>Message on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="min-h-[44px] px-5 py-2 rounded-full border border-[#1E2D3E] bg-[#152232] text-slate-200 hover:text-white text-xs font-bold cursor-pointer transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
