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
  const heightClasses = {
    sm: 'h-7',
    md: 'h-8 sm:h-9',
    lg: 'h-10 sm:h-12',
  }[size];

  if (variant === 'icon-only') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src="/logo-mark.png"
          alt="CCE Emblem"
          className={`${heightClasses} w-auto object-contain transition-transform duration-200 hover:scale-[1.02]`}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/logo.png"
        alt="Credge Clarity Engine"
        className={`${heightClasses} w-auto object-contain transition-transform duration-200 hover:scale-[1.02]`}
      />
    </div>
  );
};

export const Logo = DummyLogo;
