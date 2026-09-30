import React from 'react';

interface DummyLogoProps {
  variant?: 'full' | 'icon-only' | 'monochrome';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const DummyLogo: React.FC<DummyLogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md',
}) => {
  const iconDimensions = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  }[size];

  const textSize = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Geometric Precision Iris / Clarity Mark */}
      <div className={`relative ${iconDimensions} rounded-xl bg-gradient-to-tr from-indigo-900 via-slate-900 to-indigo-950 p-[1px] shadow-sm flex items-center justify-center overflow-hidden group`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-teal-500/10 to-cyan-400/20 opacity-80 group-hover:opacity-100 transition-opacity" />
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1.5 relative z-10"
        >
          {/* Outer Assurance Bracket */}
          <path
            d="M6 11V8C6 6.89543 6.89543 6 8 6H12"
            stroke="url(#cce-grad-1)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M26 21V24C26 25.1046 25.1046 26 24 26H20"
            stroke="url(#cce-grad-1)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Inner Clarity Diamond Prism */}
          <path
            d="M16 8L23 16L16 24L9 16L16 8Z"
            fill="url(#cce-grad-fill)"
            stroke="url(#cce-grad-2)"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          {/* Core Decision Anchor Point */}
          <circle cx="16" cy="16" r="2.2" fill="#22D3EE" />

          <defs>
            <linearGradient id="cce-grad-1" x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse">
              <stop stopColor="#818CF8" />
              <stop offset="0.5" stopColor="#22D3EE" />
              <stop offset="1" stopColor="#0D9488" />
            </linearGradient>
            <linearGradient id="cce-grad-2" x1="9" y1="8" x2="23" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366F1" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient id="cce-grad-fill" x1="9" y1="8" x2="23" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4F46E5" stopOpacity="0.3" />
              <stop offset="1" stopColor="#0D9488" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {variant === 'full' && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span className={`font-semibold tracking-tight ${textSize} text-slate-900 dark:text-slate-100 font-sans`}>
              CCE
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/40">
              Clarity Engine
            </span>
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-normal">
            CredgeSol AI
          </span>
        </div>
      )}
    </div>
  );
};
