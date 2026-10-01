import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sliders, ShieldCheck, AlertTriangle, RotateCcw } from 'lucide-react';

interface SliderConfig {
  paramName: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  safeThreshold: number;
  ruleCode: string;
  ruleName: string;
  breachConsequence: (val: number) => string;
  safeBenefit: (val: number) => string;
  presets: { label: string; value: number }[];
}

const CONFIGS: Record<string, SliderConfig> = {
  telecom: {
    paramName: 'Downlink Spectrum Reallocation Request',
    unit: '%',
    min: 1,
    max: 35,
    step: 1,
    defaultValue: 18,
    safeThreshold: 5,
    ruleCode: 'RULE-TEL-2024-09',
    ruleName: 'Emergency Hospital Slicing Protection',
    breachConsequence: (v) => `Trauma Hospital ICU Headroom drops to ${(100 - v * 1.5).toFixed(1)}% (< 95% SLA) — $45,000/hr SLA penalty breach!`,
    safeBenefit: (v) => `Hospital Headroom guaranteed at ${(100 - v * 0.56).toFixed(1)}% (Safe) — Video QoS safely boosted`,
    presets: [
      { label: '4% (Safe Range)', value: 4 },
      { label: '18% (Hero AI Surge)', value: 18 },
      { label: '30% (Aggressive Rush)', value: 30 },
    ],
  },
  ev: {
    paramName: 'Fast-Charge Station Power Dispatch',
    unit: 'kW',
    min: 40,
    max: 250,
    step: 5,
    defaultValue: 180,
    safeThreshold: 90,
    ruleCode: 'RULE-EV-2026-BATT-04',
    ruleName: 'Pack Thermal Runaway Ceiling',
    breachConsequence: (v) => `Cell temperature hits ${(36 + v * 0.045).toFixed(1)}°C (> 42°C limit) — Thermal runaway alert & OEM warranty voided!`,
    safeBenefit: () => 'Cell temperature bounded at 39.4°C — 847-cycle aged pack protected with active thermal dissipation',
    presets: [
      { label: '75 kW (Safe Thermal)', value: 75 },
      { label: '180 kW (AI Proposal)', value: 180 },
      { label: '240 kW (Extreme Charge)', value: 240 },
    ],
  },
  finance: {
    paramName: 'AML Quarantine Interception Radius',
    unit: 'Accounts',
    min: 1,
    max: 500,
    step: 1,
    defaultValue: 420,
    safeThreshold: 4,
    ruleCode: 'RULE-AML-PROP-03',
    ruleName: 'Statutory Proportionality Standard',
    breachConsequence: (v) => `${v} accounts frozen without forensic proof — 98% legitimate customers blocked (Regulatory appeal risk)`,
    safeBenefit: () => 'Surgically ring-fences 4 verified mule intermediary nodes — 416 legitimate transactions clear without disruption',
    presets: [
      { label: '4 Accounts (Targeted Ring)', value: 4 },
      { label: '150 Accounts (Sub-Cluster)', value: 150 },
      { label: '420 Accounts (AI Graph Freeze)', value: 420 },
    ],
  },
  hospital: {
    paramName: 'VLAN Switch Port Containment Scope',
    unit: 'Ports',
    min: 1,
    max: 24,
    step: 1,
    defaultValue: 16,
    safeThreshold: 1,
    ruleCode: 'RULE-MED-SECOPS-11',
    ruleName: 'Life-Support Network Immunity Protocol',
    breachConsequence: (v) => `${v} bedside Ethernet ports severed — ICU ventilators & cardiac monitors lose telemetry contact!`,
    safeBenefit: () => 'Single infected HVAC telemetry port isolated — Bedside life-support systems maintain 100% uptime',
    presets: [
      { label: '1 Port (Surgical HVAC Filter)', value: 1 },
      { label: '8 Ports (Zone Quarantine)', value: 8 },
      { label: '16 Ports (AI Switch Cutoff)', value: 16 },
    ],
  },
};

interface InteractiveParameterSliderProps {
  scenarioId: string;
}

export const InteractiveParameterSlider: React.FC<InteractiveParameterSliderProps> = ({
  scenarioId,
}) => {
  const config = CONFIGS[scenarioId] || CONFIGS.telecom;
  const [val, setVal] = useState<number>(config.defaultValue);

  // Sync default value when scenario changes
  useEffect(() => {
    setVal(config.defaultValue);
  }, [scenarioId, config.defaultValue]);

  const isBreach = val > config.safeThreshold;
  const clampedVal = Math.min(val, config.safeThreshold);
  const rawPercentage = ((val - config.min) / (config.max - config.min)) * 100;
  const safePercentage = ((clampedVal - config.min) / (config.max - config.min)) * 100;
  const thresholdPercentage = ((config.safeThreshold - config.min) / (config.max - config.min)) * 100;

  return (
    <div className="p-4 sm:p-6 rounded-2xl bg-[#0A1017] border-2 border-[#00AABB] shadow-2xl space-y-4 sm:space-y-5 text-left">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1E2D3E] pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#00AABB]/20 border border-[#00AABB] flex items-center justify-center text-[#12C9D3]">
            <Sliders className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs sm:text-sm font-extrabold text-white block">
              Interactive Decision Boundary Simulator
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono text-[#12C9D3]">
              Drag slider to test live policy clamping in real time
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full font-bold border ${
            isBreach
              ? 'bg-[#00AABB]/20 text-[#12C9D3] border-[#00AABB]'
              : 'bg-[#008361]/20 text-[#008361] border-[#008361]'
          }`}>
            {isBreach ? 'LIMIT / STAGED ENVELOPE' : 'ALLOW / DIRECT EXECUTION'}
          </span>
          <button
            onClick={() => setVal(config.defaultValue)}
            title="Reset slider to default"
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-[#152232] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Parameter Control Slider */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs">
          <span className="text-slate-300 font-bold">
            {config.paramName}:
          </span>
          <span className="font-mono text-sm sm:text-base font-black text-white bg-[#0F1722] px-2.5 py-0.5 rounded border border-[#1E2D3E]">
            {val} {config.unit}
          </span>
        </div>

        {/* Range Slider Track */}
        <div className="relative pt-2 pb-3">
          <input
            type="range"
            min={config.min}
            max={config.max}
            step={config.step}
            value={val}
            onChange={(e) => setVal(Number(e.target.value))}
            className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00AABB]"
          />

          {/* SLA Threshold Marker Pin */}
          <div
            style={{ left: `${thresholdPercentage}%` }}
            className="absolute top-0 -translate-x-1/2 flex flex-col items-center pointer-events-none"
          >
            <span className="w-1.5 h-3 bg-[#12C9D3] rounded-full shadow-sm" />
            <span className="text-[9px] font-mono text-[#12C9D3] font-bold whitespace-nowrap mt-4 hidden sm:block">
              Threshold: {config.safeThreshold} {config.unit}
            </span>
          </div>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-0.5">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold mr-1">
            Presets:
          </span>
          {config.presets.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => setVal(preset.value)}
              className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-mono font-bold transition-all cursor-pointer border ${
                val === preset.value
                  ? 'bg-[#00AABB] text-white border-[#12C9D3] shadow-xs'
                  : 'bg-[#0F1722] text-slate-300 border-[#1E2D3E] hover:border-[#039EA5]'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Before & After Real-Time Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 pt-1">
        {/* Box 1: Ungoverned Raw AI Output */}
        <div className={`p-3.5 sm:p-4 rounded-xl border-2 transition-colors ${
          isBreach
            ? 'bg-rose-950/40 border-[#D32F2F]'
            : 'bg-[#0F1722] border-[#1E2D3E]'
        }`}>
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-bold text-slate-300 flex items-center gap-1.5">
              {isBreach ? <AlertTriangle className="w-4 h-4 text-[#D32F2F] shrink-0" /> : <ShieldCheck className="w-4 h-4 text-[#008361] shrink-0" />}
              <span>Without CCE (Raw Model)</span>
            </span>
            <span className={`font-mono text-xs font-black ${isBreach ? 'text-[#D32F2F]' : 'text-[#008361]'}`}>
              {val} {config.unit} (Direct)
            </span>
          </div>

          {/* Bar Gauge */}
          <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden my-2 border border-slate-700">
            <motion.div
              animate={{ width: `${Math.min(100, Math.max(8, rawPercentage))}%` }}
              transition={{ duration: 0.2 }}
              className={`h-full rounded-full ${isBreach ? 'bg-[#D32F2F]' : 'bg-[#008361]'}`}
            />
          </div>

          <p className="text-[11px] sm:text-xs leading-relaxed font-medium text-slate-200 mt-1">
            {isBreach ? config.breachConsequence(val) : 'Within standard bounds. Allowed for immediate execution.'}
          </p>
        </div>

        {/* Box 2: CCE Governed Decision Boundary */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-[#0F1722] border-2 border-[#00AABB] shadow-md">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-bold text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#12C9D3] shrink-0" />
              <span>With CCE Decision Assurance</span>
            </span>
            <span className="font-mono text-xs font-black text-[#12C9D3]">
              {clampedVal} {config.unit} (Governed)
            </span>
          </div>

          {/* Bar Gauge */}
          <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden my-2 border border-slate-700">
            <motion.div
              animate={{ width: `${Math.min(100, Math.max(8, safePercentage))}%` }}
              transition={{ duration: 0.2 }}
              className="h-full rounded-full bg-[#00AABB] shadow-sm"
            />
          </div>

          <p className="text-[11px] sm:text-xs leading-relaxed font-medium text-[#12C9D3] mt-1">
            {isBreach ? (
              <>
                <strong className="text-white font-bold">{config.ruleCode}:</strong> Clamped to safe envelope ({config.safeThreshold} {config.unit}). {config.safeBenefit(clampedVal)}
              </>
            ) : (
              <>
                <strong className="text-white font-bold">Rule Verified:</strong> Proposal satisfies all deterministic policies. Dispatched cleanly to actuators.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
