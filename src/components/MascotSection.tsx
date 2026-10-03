import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, ArrowRight, Sparkles } from 'lucide-react';

interface MascotSectionProps {
  onOpenContact: () => void;
}

export const MascotSection: React.FC<MascotSectionProps> = ({ onOpenContact }) => {
  const scrollToSimulator = () => {
    const el = document.getElementById('simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="guardian" 
      aria-label="The CredgeSol Guardian"
      className="py-12 sm:py-20 lg:py-24 bg-[#0A1017] text-white relative overflow-hidden border-t border-[#1E2D3E]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[#00AABB]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#039EA5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Mascot Image Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Glowing accent border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#00AABB] via-[#12C9D3] to-[#039EA5] opacity-30 blur-sm group-hover:opacity-50 transition-opacity" />
              
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#00AABB]/50 bg-[#0F1722] shadow-2xl">
                <img 
                  src="/mascot-owl.jpg" 
                  alt="CredgeSol mascot owl with glasses overlooking a night city skyline - Clarity before decisions, confidence after AI"
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                />
              </div>

              {/* Caption Tag */}
              <div className="mt-3.5 flex items-center justify-center gap-2 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#12C9D3] animate-pulse" />
                <span className="font-bold text-white">The CredgeSol Owl</span>
                <span className="text-slate-500">·</span>
                <span className="text-[#12C9D3]">Guardian of AI Decisions</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Values */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 text-left space-y-4 sm:space-y-6"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F1722] border border-[#00AABB]/60 text-xs font-mono font-bold text-[#12C9D3] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#12C9D3]" />
              <span>THE CREDGESOL GUARDIAN</span>
            </div>

            {/* Headline matching the mascot slogan */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Clarity before decisions.<br />
              <span className="text-[#12C9D3]">Confidence after AI.</span>
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-base text-slate-200 font-normal leading-relaxed">
              <p>
                In high-consequence operations, you need 360-degree awareness and sharp vision in the dark. Just as an owl spots what others miss, Credge Clarity Engine watches over automated AI actions around the clock.
              </p>
              <p className="text-slate-300">
                Autonomous models calculate optimizations in milliseconds, but they remain blind to enterprise SLAs, legal liability, and physical danger. CCE stands between machine proposals and live execution, checking every action against hard rules and safety envelopes before anything changes.
              </p>
            </div>

            {/* Feature Value Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[#0F1722] border border-[#1E2D3E] flex items-center gap-2.5">
                <Eye className="w-4 h-4 text-[#12C9D3] shrink-0" />
                <span className="text-xs font-mono font-bold text-white">360° Awareness</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0F1722] border border-[#1E2D3E] flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#00AABB] shrink-0" />
                <span className="text-xs font-mono font-bold text-white">Rule Envelopes</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0F1722] border border-[#1E2D3E] flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#008361] shrink-0" />
                <span className="text-xs font-mono font-bold text-white">Human Oversight</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenContact}
                className="btn-pill-primary min-h-[44px] px-6 py-2.5 text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Request a pilot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={scrollToSimulator}
                className="min-h-[44px] px-5 py-2.5 rounded-full border border-[#1E2D3E] bg-[#152232] hover:bg-[#1E2D3E] text-slate-200 hover:text-white text-xs sm:text-sm font-bold cursor-pointer transition-colors"
              >
                <span>Test a scenario</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
