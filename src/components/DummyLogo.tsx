import React from 'react';

interface DummyLogoProps {
  variant?: 'full' | 'icon-only' | 'monochrome';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
}

export const DummyLogo: React.FC<DummyLogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md',
  theme = 'dark',
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

  const logoSrc = theme === 'light' ? '/logo-light.png' : '/logo.png';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Credge Clarity Engine"
        className={`${heightClasses} w-auto object-contain transition-transform duration-200 hover:scale-[1.02]`}
      />
    </div>
  );
};

export const Logo = DummyLogo;
