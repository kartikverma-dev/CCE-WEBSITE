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
    <header className="sticky top-0 z-40 w-full bg-white border-b border-[#E5E7EB] shadow-xs">
      {/* Main navigation row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo with light theme for crisp black text on white header */}
        <div 
          onClick={() => scrollToSection('hero')} 
          className="cursor-pointer transition-transform hover:scale-[1.01]"
        >
          <DummyLogo variant="full" size="md" theme="light" />
        </div>

        {/* Desktop Nav Links - Black (#000000) with Deep Teal (#039EA5) hover */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold text-[#000000]">
          <button 
            onClick={() => scrollToSection('chaos-to-clean')} 
            className="hover:text-[#039EA5] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#039EA5]" />
            <span>Chaos to Clean</span>
          </button>
          <button 
            onClick={() => scrollToSection('simulator')} 
            className="hover:text-[#039EA5] transition-colors cursor-pointer"
          >
            Simulator
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="hover:text-[#039EA5] transition-colors cursor-pointer"
          >
            How CCE Works
          </button>
          <button 
            onClick={() => scrollToSection('industries')} 
            className="hover:text-[#039EA5] transition-colors cursor-pointer"
          >
            Industries
          </button>
          <button 
            onClick={() => scrollToSection('pillars')} 
            className="hover:text-[#039EA5] transition-colors cursor-pointer"
          >
            Core Pillars
          </button>
          <button
            onClick={onOpenContact}
            className="hover:text-[#039EA5] transition-colors cursor-pointer"
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
            className="px-3 py-1.5 rounded-full border border-gray-300 bg-[#FDFEFD] text-[#1E1E1E] hover:text-[#039EA5] hover:border-[#039EA5] transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer"
          >
            <Presentation className="w-3.5 h-3.5 text-[#039EA5]" />
            <span>Notes [P]</span>
          </button>

          {/* Primary Teal Pill Button (#00AABB) */}
          <button
            onClick={() => scrollToSection('simulator')}
            className="px-4.5 py-1.5 rounded-full bg-[#00AABB] hover:bg-[#039EA5] text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
          >
            <span>Run Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile / Tablet menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={openPresenter}
            className="p-2 rounded-lg border border-gray-300 bg-white text-[#1E1E1E] sm:hidden"
            title="Presenter Notes"
          >
            <Presentation className="w-4 h-4 text-[#039EA5]" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-gray-300 bg-white text-[#1E1E1E] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-gray-200 bg-white px-6 py-5 flex flex-col gap-4 animate-in slide-in-from-top duration-200 text-[#000000]">
          <button 
            onClick={() => scrollToSection('chaos-to-clean')}
            className="text-left font-bold py-1 hover:text-[#039EA5] transition-colors"
          >
            Chaos to Clean
          </button>
          <button 
            onClick={() => scrollToSection('simulator')}
            className="text-left font-bold py-1 hover:text-[#039EA5] transition-colors"
          >
            Scenario Simulator (4 Demos)
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="text-left font-bold py-1 hover:text-[#039EA5] transition-colors"
          >
            How CCE Works
          </button>
          <button 
            onClick={() => scrollToSection('industries')}
            className="text-left font-bold py-1 hover:text-[#039EA5] transition-colors"
          >
            Industries
          </button>
          <button 
            onClick={() => scrollToSection('pillars')} 
            className="text-left font-bold py-1 hover:text-[#039EA5] transition-colors"
          >
            Core Pillars
          </button>
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="text-left font-bold text-[#039EA5] py-1"
          >
            Request Enterprise Pilot
          </button>
          <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs font-mono text-[#008361] font-bold">
              Presentation Mode: Active
            </span>
            <button
              onClick={() => {
                openPresenter();
                setMobileMenuOpen(false);
              }}
              className="text-xs font-mono text-[#1E1E1E] py-1 font-bold hover:text-[#039EA5]"
            >
              Presenter Script [P]
            </button>
          </div>
          <button
            onClick={() => {
              scrollToSection('simulator');
              setMobileMenuOpen(false);
            }}
            className="w-full py-2.5 rounded-full bg-[#00AABB] hover:bg-[#039EA5] text-white text-center font-bold text-xs shadow-sm"
          >
            Launch Demo Simulator
          </button>
        </div>
      )}
    </header>
  );
};
