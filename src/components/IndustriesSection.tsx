import React from 'react';
import { 
  Radio, 
  BatteryCharging, 
  CreditCard, 
  ShieldAlert, 
  ArrowRight, 
  Sparkles,
  AlertTriangle 
} from 'lucide-react';
import { SCENARIOS } from '../data/scenarios';
import { OutcomeBadge } from './StatusBadge';

interface IndustriesSectionProps {
  onSelectScenario: (index: number) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onSelectScenario }) => {
  const icons = [Radio, BatteryCharging, CreditCard, ShieldAlert];

  const handleRunScenario = (index: number) => {
    onSelectScenario(index);
    const sim = document.getElementById('simulator');
    if (sim) {
      sim.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="industries" className="py-12 sm:py-20 lg:py-28 bg-[#FDFEFD] border-t border-gray-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-8 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-[#039EA5] text-xs font-mono font-bold mb-2 sm:mb-3 border border-teal-200">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#039EA5]" />
              <span>TESTED OPERATIONAL ARCHETYPES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#000000]">
              Governing Decisions Where Failure is Not an Option
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-base text-[#1E1E1E] font-medium max-w-2xl leading-relaxed">
              High-consequence domains where AI models optimize for mathematical goals without knowing real-world legal, SLA, and physical boundaries.
            </p>
          </div>

          <div className="text-[11px] sm:text-xs font-mono font-bold text-gray-500">
            Click any archetype to launch interactive simulation
          </div>
        </div>

        {/* 4 Cards Grid with Off-white / White rounded surfaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {SCENARIOS.map((sc, idx) => {
            const Icon = icons[idx % icons.length];

            return (
              <div
                key={sc.id}
                className="group p-5 sm:p-7 lg:p-8 rounded-3xl border border-gray-200 bg-[#FFFFFF] hover:border-[#039EA5] transition-all duration-300 hover:shadow-lg relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="p-3 rounded-2xl bg-teal-50 border border-teal-200 text-[#039EA5] shadow-xs">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                      {sc.badge}
                    </span>
                  </div>

                  <span className="text-[11px] sm:text-xs font-mono text-[#039EA5] font-extrabold block mb-1 uppercase tracking-wider">
                    {sc.industry}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-black text-[#000000] group-hover:text-[#039EA5] transition-colors">
                    {sc.title}
                  </h3>

                  {/* AI Recommends vs What it Missed */}
                  <div className="mt-4 sm:mt-5 space-y-2.5 text-xs">
                    <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                      <span className="font-extrabold text-[#000000] block mb-0.5 text-xs">
                        AI Recommends:
                      </span>
                      <span className="text-[#1E1E1E] font-medium text-xs leading-relaxed">
                        {sc.aiRecommendation.action}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-rose-50/70 border border-[#D32F2F]/40">
                      <span className="font-extrabold text-[#D32F2F] flex items-center gap-1 mb-0.5 text-xs">
                        <AlertTriangle className="w-3.5 h-3.5 text-[#D32F2F]" />
                        <span>What It Missed:</span>
                      </span>
                      <span className="text-rose-950 font-bold text-xs leading-relaxed">
                        {sc.blindSpots[0]}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 sm:mt-7 pt-4 border-t border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] sm:text-xs text-gray-500 font-mono font-bold">Outcome:</span>
                    <OutcomeBadge outcome={sc.outcome.type} size="sm" />
                  </div>

                  <button
                    onClick={() => handleRunScenario(idx)}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#039EA5] group-hover:text-[#00AABB] transition-colors cursor-pointer"
                  >
                    <span>Run in Simulator</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
