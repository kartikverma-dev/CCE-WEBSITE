import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Sparkles } from 'lucide-react';

interface MascotGuideProps {
  isHidden?: boolean;
  onOpenContact: () => void;
}

export const MascotGuide: React.FC<MascotGuideProps> = ({
  isHidden = false,
  onOpenContact,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  if (isHidden) {
    return null;
  }

  const handleDemoClick = () => {
    setIsOpen(false);
    const el = document.getElementById('simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePilotClick = () => {
    setIsOpen(false);
    onOpenContact();
  };

  return (
    <div ref={cardRef} className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-30">
      {/* Popover Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-label="CredgeSol Owl Guide"
            className="absolute bottom-16 left-0 w-72 max-w-[calc(100vw-2rem)] sm:w-84 p-4 sm:p-5 rounded-2xl bg-[#0F1722] border-2 border-[#00AABB] shadow-2xl text-left text-white space-y-3 z-40"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#1E2D3E] pb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#12C9D3] animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#12C9D3]">
                  The CredgeSol Guardian
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close owl message"
                className="min-h-[44px] min-w-[44px] p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#152232] transition-colors flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Slogan & Note */}
            <div>
              <div className="text-xs sm:text-sm font-extrabold text-white leading-snug">
                "Clarity before decisions.<br />
                <span className="text-[#12C9D3]">Confidence after AI.</span>"
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300 font-medium leading-relaxed mt-2">
                I watch over automated decisions around the clock so critical infrastructure never fails in the dark.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="pt-1 flex flex-col gap-2">
              <button
                onClick={handleDemoClick}
                className="w-full min-h-[44px] px-3.5 py-2 rounded-xl bg-[#00AABB] hover:bg-[#039EA5] text-white text-xs font-bold flex items-center justify-between cursor-pointer transition-colors shadow-sm"
              >
                <span>Try Interactive Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handlePilotClick}
                className="w-full min-h-[44px] px-3.5 py-2 rounded-xl bg-[#152232] hover:bg-[#1E2D3E] border border-[#1E2D3E] text-slate-200 hover:text-white text-xs font-bold flex items-center justify-between cursor-pointer transition-colors"
              >
                <span>Request a Pilot</span>
                <Sparkles className="w-3.5 h-3.5 text-[#12C9D3]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Mascot Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Meet the CredgeSol Owl"
        title="Meet the CredgeSol Owl - Clarity before decisions, confidence after AI"
        className="w-12 h-12 min-w-[48px] min-h-[48px] sm:w-14 sm:h-14 sm:min-w-[56px] sm:min-h-[56px] rounded-full border-2 border-[#12C9D3] shadow-xl bg-[#0A1017] p-0.5 relative group cursor-pointer flex items-center justify-center transition-transform hover:scale-105 focus-visible:ring-4 focus-visible:ring-[#12C9D3]/40 focus-visible:outline-none"
      >
        {/* Subtle breathing glow ring */}
        <span className="absolute inset-0 rounded-full bg-[#12C9D3] opacity-25 animate-ping pointer-events-none" />

        {/* Circular Mascot Face Crop */}
        <span className="w-full h-full rounded-full overflow-hidden block bg-[#0A1017] relative z-10">
          <img
            src="/mascot-avatar.jpg"
            alt="CredgeSol mascot owl with glasses"
            className="w-full h-full object-cover block"
          />
        </span>
      </button>
    </div>
  );
};
