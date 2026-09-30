import React from 'react';
import { DummyLogo } from './DummyLogo';
import { StatusBadge } from './StatusBadge';
import { ArrowUp, Mail } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
  openPresenter: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, openPresenter }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#080B11] text-slate-300 border-t border-[#1E293B] text-xs py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#1E293B]">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <DummyLogo variant="full" size="md" />
            <p className="text-slate-300 text-xs sm:text-sm max-w-md leading-relaxed mt-2 font-normal">
              Credge Clarity Engine (CCE) is an independent AI decision-assurance and governance layer between model recommendations and operational enterprise actuators.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-[#0E1422] border border-[#28354D] text-white">
                "Trust in Every AI Decision."
              </span>
              <StatusBadge status="SIMULATED" size="sm" />
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-2">
            <div className="font-mono text-white uppercase font-black text-xs tracking-wider mb-3">
              Navigation
            </div>
            <ul className="space-y-2.5 text-slate-300 text-xs font-medium">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Overview &amp; Hero
                </a>
              </li>
              <li>
                <a href="#chaos-to-clean" className="hover:text-white transition-colors">
                  Chaos to Clarity
                </a>
              </li>
              <li>
                <a href="#simulator" className="hover:text-white transition-colors">
                  Scenario Simulator (4 Archetypes)
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  Five-Layer Architecture
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Operational Archetypes
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-white transition-colors">
                  Core Assurance Pillars
                </a>
              </li>
            </ul>
          </div>

          {/* Enterprise & Contact */}
          <div className="space-y-2">
            <div className="font-mono text-white uppercase font-black text-xs tracking-wider mb-3">
              Enterprise &amp; Pilots
            </div>
            <ul className="space-y-2.5 text-slate-300 text-xs font-medium">
              <li>
                <button
                  onClick={openPresenter}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Presenter Runbook &amp; Keybindings
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white transition-colors text-left flex items-center gap-1.5 cursor-pointer font-bold text-indigo-400"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Request Staging Pilot</span>
                </button>
              </li>
              <li className="pt-2 text-slate-400 font-mono text-[11px]">
                Product: Credge Clarity Engine (CCE)
              </li>
              <li className="text-slate-400 font-mono text-[11px]">
                Deterministic AI Decision Assurance
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimers & Truthfulness Note */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="text-slate-300 font-medium">
              © 2026 CredgeSol AI. All rights reserved. Credge Clarity Engine (CCE).
            </div>
            <div className="text-slate-300 leading-relaxed font-normal">
              <strong className="text-white">Mandatory Disclosure:</strong> All scenarios, hashes, and telemetry presented on this website are fictional and for demonstration purposes. Not connected to production CCE consoles.
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono font-bold px-2.5 py-1 rounded bg-[#0E1422] border border-[#28354D] text-slate-300">
              Build v2.4-enterprise
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-[#0E1422] hover:bg-[#141C2E] text-white border border-[#28354D] transition-colors cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
