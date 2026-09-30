import React, { useState } from 'react';
import { DummyLogo } from './DummyLogo';
import { 
  Presentation, 
  Menu, 
  X, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface HeaderProps {
  openPresenter: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  openPresenter,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-header">
      {/* Main navigation row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => scrollToSection('hero')} 
          className="cursor-pointer transition-transform hover:scale-[1.01]"
        >
          <DummyLogo variant="full" size="md" />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold text-slate-200">
          <button 
            onClick={() => scrollToSection('chaos-to-clean')} 
            className="hover:text-indigo-400 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Chaos to Clean</span>
          </button>
          <button 
            onClick={() => scrollToSection('simulator')} 
            className="hover:text-indigo-400 transition-colors cursor-pointer"
          >
            Simulator
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="hover:text-indigo-400 transition-colors cursor-pointer"
          >
            How CCE Works
          </button>
          <button 
            onClick={() => scrollToSection('industries')} 
            className="hover:text-indigo-400 transition-colors cursor-pointer"
          >
            Industries
          </button>
          <button 
            onClick={() => scrollToSection('pillars')} 
            className="hover:text-indigo-400 transition-colors cursor-pointer"
          >
            Core Pillars
          </button>
          <button
            onClick={onOpenContact}
            className="hover:text-indigo-400 transition-colors cursor-pointer"
          >
            Pilot Request
          </button>
        </nav>

        {/* Right Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Presenter Mode Button */}
          <button
            onClick={openPresenter}
            title="Open Presenter Script & Keyboard Shortcuts (Key: P)"
            className="px-3 py-1.5 rounded-lg border border-[#28354D] bg-[#0E1422] text-slate-200 hover:text-indigo-400 hover:border-indigo-500/50 transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer"
          >
            <Presentation className="w-3.5 h-3.5 text-indigo-400" />
            <span>Notes [P]</span>
          </button>

          {/* Clean Outline Pill Button */}
          <button
            onClick={() => scrollToSection('simulator')}
            className="px-4 py-1.5 rounded-lg border-2 border-slate-100 bg-transparent hover:bg-white hover:text-black text-slate-100 text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Run Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile / Tablet menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={openPresenter}
            className="p-2 rounded-lg border border-[#28354D] bg-[#0E1422] text-slate-200 sm:hidden"
            title="Presenter Notes"
          >
            <Presentation className="w-4 h-4 text-indigo-400" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-[#28354D] bg-[#0E1422] text-slate-200 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#1E293B] bg-[#080B11] px-6 py-5 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <button 
            onClick={() => scrollToSection('chaos-to-clean')}
            className="text-left font-bold text-slate-100 py-1"
          >
            Chaos to Clean
          </button>
          <button 
            onClick={() => scrollToSection('simulator')}
            className="text-left font-bold text-slate-100 py-1"
          >
            Scenario Simulator (4 Demos)
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="text-left font-bold text-slate-100 py-1"
          >
            How CCE Works
          </button>
          <button 
            onClick={() => scrollToSection('industries')}
            className="text-left font-bold text-slate-100 py-1"
          >
            Industries
          </button>
          <button 
            onClick={() => scrollToSection('pillars')} 
            className="text-left font-bold text-slate-100 py-1"
          >
            Core Pillars
          </button>
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="text-left font-bold text-indigo-400 py-1"
          >
            Request Enterprise Pilot
          </button>
          <div className="pt-2 border-t border-[#1E293B] flex items-center justify-between">
            <span className="text-xs font-mono text-emerald-400 font-bold">
              Presentation Mode: Active
            </span>
            <button
              onClick={() => {
                openPresenter();
                setMobileMenuOpen(false);
              }}
              className="text-xs font-mono text-slate-300 py-1 font-bold hover:text-white"
            >
              Presenter Script [P]
            </button>
          </div>
          <button
            onClick={() => {
              scrollToSection('simulator');
              setMobileMenuOpen(false);
            }}
            className="w-full py-2.5 rounded-full bg-indigo-600 text-white text-center font-bold text-xs"
          >
            Launch Demo Simulator
          </button>
        </div>
      )}
    </header>
  );
};
