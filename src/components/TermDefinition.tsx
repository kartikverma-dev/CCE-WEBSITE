import React, { useState, useEffect } from 'react';

interface TermDefinitionProps {
  term: string;
  definition: string;
  children?: React.ReactNode;
  variant?: 'inline' | 'pill';
}

export const TermDefinition: React.FC<TermDefinitionProps> = ({
  term,
  definition,
  children,
  variant,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isPill = variant === 'pill' || (!children && variant !== 'inline');

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <span className="relative inline-block text-left">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            e.preventDefault();
            setIsOpen(false);
          }
        }}
        className={
          isPill
            ? "min-h-[44px] min-w-[44px] px-3 py-2 rounded-lg bg-[#152232] border border-[#1E2D3E] hover:border-[#039EA5] text-slate-100 font-mono text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-[#12C9D3] focus-visible:outline-none"
            : "min-h-[44px] min-w-[44px] inline-flex items-center justify-center py-2 px-1 text-left underline decoration-dotted decoration-[#12C9D3] underline-offset-4 text-white hover:text-[#12C9D3] font-bold cursor-pointer gap-0.5 transition-colors focus-visible:ring-2 focus-visible:ring-[#12C9D3] focus-visible:outline-none"
        }
        aria-label={`${term}: ${definition}`}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <span>{children || term}</span>
        <span className="text-[11px] text-[#12C9D3] font-mono select-none ml-0.5">ⓘ</span>
      </button>

      {isOpen && (
        <>
          <span
            className="fixed inset-0 z-40"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          />
          <span
            role="dialog"
            aria-label={term}
            className="absolute left-0 bottom-full mb-2 z-50 w-64 max-w-[85vw] p-3 rounded-xl bg-[#0A1017] border border-[#039EA5] text-white text-xs font-normal shadow-2xl block text-left leading-relaxed animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <strong className="text-[#12C9D3] block font-mono text-[11px] mb-1 uppercase tracking-wider font-bold">
              {term}
            </strong>
            <span className="text-slate-200 text-xs font-medium leading-normal block">
              {definition}
            </span>
          </span>
        </>
      )}
    </span>
  );
};
