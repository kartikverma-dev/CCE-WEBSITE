import React from 'react';
import type { StatusBadgeType, OutcomeType } from '../types';
import { CheckCircle2, ShieldCheck, ShieldAlert, PauseCircle, UserCheck } from 'lucide-react';

interface StatusBadgeProps {
  status: StatusBadgeType;
  size?: 'sm' | 'md';
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'sm', className = '' }) => {
  const styles = {
    VERIFIED: 'bg-emerald-100 text-emerald-950 border-emerald-400 dark:bg-emerald-950/90 dark:text-emerald-200 dark:border-emerald-500 font-bold',
    SIMULATED: 'bg-indigo-100 text-indigo-950 border-indigo-400 dark:bg-indigo-950/90 dark:text-indigo-200 dark:border-indigo-500 font-bold',
    PROPOSED: 'bg-amber-100 text-amber-950 border-amber-400 dark:bg-amber-950/90 dark:text-amber-200 dark:border-amber-500 font-bold',
    'TO VERIFY': 'bg-rose-100 text-rose-950 border-rose-400 dark:bg-rose-950/90 dark:text-rose-200 dark:border-rose-500 font-bold',
  }[status];

  const sizeClass = size === 'sm' ? 'text-[11px] px-2.5 py-0.5' : 'text-xs px-3 py-1';

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono uppercase tracking-wider rounded-md border ${styles} ${sizeClass} ${className}`}
      title={`Truthfulness classification: ${status}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      {status}
    </span>
  );
};

interface OutcomeBadgeProps {
  outcome: OutcomeType;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}

export const OutcomeBadge: React.FC<OutcomeBadgeProps> = ({
  outcome,
  size = 'md',
  showIcon = true,
  className = '',
}) => {
  const meta = {
    ALLOW: {
      label: 'Allowed',
      code: 'ALLOW',
      icon: CheckCircle2,
      style: 'bg-emerald-100 text-emerald-950 border-emerald-500 dark:bg-emerald-950 dark:text-emerald-200 dark:border-emerald-400',
    },
    LIMIT: {
      label: 'Allowed with a safe limit',
      code: 'LIMIT / STAGED',
      icon: ShieldCheck,
      style: 'bg-teal-100 text-teal-950 border-teal-500 dark:bg-teal-950 dark:text-teal-200 dark:border-teal-400',
    },
    HOLD: {
      label: 'Paused for human review',
      code: 'HOLD / REVIEW',
      icon: PauseCircle,
      style: 'bg-amber-100 text-amber-950 border-amber-500 dark:bg-amber-950 dark:text-amber-200 dark:border-amber-400',
    },
    ESCALATE: {
      label: 'Sent to a person to decide',
      code: 'ESCALATE / ROUTED',
      icon: UserCheck,
      style: 'bg-purple-100 text-purple-950 border-purple-500 dark:bg-purple-950 dark:text-purple-200 dark:border-purple-400',
    },
    REJECT: {
      label: 'Not allowed',
      code: 'REJECT / BLOCK',
      icon: ShieldAlert,
      style: 'bg-rose-100 text-rose-950 border-rose-500 dark:bg-rose-950 dark:text-rose-200 dark:border-rose-400',
    },
  }[outcome];

  const Icon = meta.icon;

  const sizeClass = {
    sm: 'text-xs px-2.5 py-1 gap-1.5 font-bold',
    md: 'text-sm px-3.5 py-1.5 gap-2 font-bold',
    lg: 'text-base px-4 py-2 gap-2.5 font-extrabold',
  }[size];

  return (
    <span
      className={`inline-flex items-center font-mono tracking-wide rounded-lg border-2 ${meta.style} ${sizeClass} shadow-xs ${className}`}
      title={`Verdict Code: ${meta.code}`}
    >
      {showIcon && <Icon className={size === 'lg' ? 'w-5 h-5 shrink-0 stroke-[2.5]' : 'w-4 h-4 shrink-0 stroke-[2.5]'} />}
      <span className="flex flex-col text-left leading-tight">
        <span>{meta.label}</span>
        {size !== 'sm' && (
          <span className="text-[10px] opacity-75 font-normal tracking-normal">{meta.code}</span>
        )}
      </span>
    </span>
  );
};
