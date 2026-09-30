import React from 'react';
import { 
  Radio, 
  BatteryCharging, 
  CreditCard, 
  ShieldAlert, 
  ArrowRight, 
  Sparkles 
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
    <section id="industries" className="py-20 sm:py-28 bg-[#080B11] border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950 text-teal-200 text-xs font-mono font-bold mb-3 border border-teal-700">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Tested Operational Archetypes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Governing Decisions Where Failure is Not an Option
            </h2>
            <p className="mt-3 text-base text-slate-300 font-medium max-w-2xl">
              High-consequence domains where AI models optimize for mathematical goals without knowing real-world legal, SLA, and physical boundaries.
            </p>
          </div>

          <div className="text-xs font-mono font-bold text-slate-400">
            Click any archetype to launch interactive simulation
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SCENARIOS.map((sc, idx) => {
            const Icon = icons[idx % icons.length];

            return (
              <div
                key={sc.id}
                className="group p-7 sm:p-8 rounded-2xl border-2 border-[#1E293B] bg-[#0E1422] hover:bg-[#141C2E] transition-all duration-300 hover:shadow-xl hover:border-indigo-500 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3.5 rounded-xl bg-[#141C2E] border border-[#28354D] text-indigo-400 shadow-xs">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#141C2E] text-slate-300 border border-[#28354D]">
                      {sc.badge}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-indigo-400 font-extrabold block mb-1">
                    {sc.industry}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-indigo-400 transition-colors">
                    {sc.title}
                  </h3>

                  {/* AI Recommends vs What it Missed */}
                  <div className="mt-5 space-y-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-[#141C2E] border border-[#28354D]">
                      <span className="font-extrabold text-white block mb-1 text-xs">
                        AI Recommends:
                      </span>
                      <span className="text-slate-300 font-medium text-xs leading-relaxed">
                        {sc.aiRecommendation.action}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-800/80">
                      <span className="font-extrabold text-rose-300 block mb-1 text-xs">
                        What It Missed:
                      </span>
                      <span className="text-rose-100 font-bold text-xs leading-relaxed">
                        {sc.blindSpots[0]}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-7 pt-4 border-t border-[#1E293B] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400 font-mono font-bold">Outcome:</span>
                    <OutcomeBadge outcome={sc.outcome.type} size="sm" />
                  </div>

                  <button
                    onClick={() => handleRunScenario(idx)}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-indigo-400 group-hover:underline cursor-pointer"
                  >
                    <span>Run in Simulator</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
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
