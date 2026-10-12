import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dark' | 'light';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'light',
  showSubtitle = true,
}) => {
  // Dimension scalers
  const sizeMap = {
    sm: { height: 32, globeSize: 28, titleSize: 'text-base', subSize: 'text-[9px]' },
    md: { height: 44, globeSize: 36, titleSize: 'text-xl', subSize: 'text-[10px]' },
    lg: { height: 60, globeSize: 48, titleSize: 'text-2xl', subSize: 'text-xs' },
    xl: { height: 80, globeSize: 64, titleSize: 'text-4xl', subSize: 'text-sm' },
  };

  const currentSize = sizeMap[size];
  const isLight = variant === 'light';

  return (
    <div className={`inline-flex flex-col select-none group ${className}`}>
      <div className="inline-flex items-center gap-1.5 leading-none">
        {/* "Global" text */}
        <span
          className={`font-extrabold tracking-tight font-sans transition-colors ${
            isLight ? 'text-slate-900' : 'text-white'
          } ${currentSize.titleSize}`}
        >
          Global
        </span>

        {/* Dynamic Globe with Red & Dark Sweeping Arcs */}
        <div
          className="relative flex items-center justify-center shrink-0"
          style={{ width: currentSize.globeSize * 1.35, height: currentSize.globeSize }}
        >
          <svg
            viewBox="0 0 120 90"
            className="w-full h-full overflow-visible drop-shadow-sm"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Globe radial highlight */}
              <radialGradient id="gfGlobeGrad" cx="38%" cy="32%" r="65%">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="35%" stopColor="#3b82f6" />
                <stop offset="70%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#172554" />
              </radialGradient>

              {/* Red swoop gradient */}
              <linearGradient id="gfRedArc" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7f1d1d" />
                <stop offset="45%" stopColor="#b91c1c" />
                <stop offset="85%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>

              {/* Dark swoop gradient */}
              <linearGradient id="gfDarkArc" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={isLight ? '#0f172a' : '#0f172a'} />
                <stop offset="50%" stopColor={isLight ? '#1e293b' : '#334155'} />
                <stop offset="100%" stopColor={isLight ? '#020617' : '#020617'} />
              </linearGradient>

              {/* Sphere 3D shading clip */}
              <clipPath id="gfGlobeClip">
                <circle cx="60" cy="45" r="28" />
              </clipPath>
            </defs>

            {/* Left Crescent Swoop (Red) */}
            <path
              d="M 40,6 C 18,18 10,48 24,72 C 34,88 56,86 64,80 C 44,80 30,66 26,48 C 23,34 32,18 48,10 Z"
              fill="url(#gfRedArc)"
            />

            {/* Central Globe Sphere */}
            <circle cx="60" cy="45" r="28" fill="url(#gfGlobeGrad)" />

            {/* Continents & Grid within the globe */}
            <g clipPath="url(#gfGlobeClip)">
              {/* Subtle Latitude Lines */}
              <ellipse cx="60" cy="45" rx="27" ry="10" stroke="#60a5fa" strokeWidth="0.75" strokeOpacity="0.4" fill="none" />
              <ellipse cx="60" cy="45" rx="27" ry="20" stroke="#60a5fa" strokeWidth="0.75" strokeOpacity="0.4" fill="none" />
              <line x1="60" y1="17" x2="60" y2="73" stroke="#60a5fa" strokeWidth="0.75" strokeOpacity="0.4" />

              {/* Stylized Continents: Americas, Europe, Africa, Asia */}
              <path
                d="M 46,26 Q 52,24 55,29 Q 53,35 48,37 Q 43,36 44,30 Z"
                fill="#ffffff"
                fillOpacity="0.88"
              />
              <path
                d="M 48,40 Q 54,40 55,48 Q 53,58 49,63 Q 46,60 46,49 Z"
                fill="#ffffff"
                fillOpacity="0.88"
              />
              <path
                d="M 64,24 Q 72,23 75,28 Q 72,34 66,32 Q 62,28 64,24 Z"
                fill="#ffffff"
                fillOpacity="0.88"
              />
              <path
                d="M 62,35 Q 73,34 76,44 Q 74,56 68,60 Q 64,54 63,42 Z"
                fill="#ffffff"
                fillOpacity="0.88"
              />
              <path
                d="M 76,26 Q 84,27 86,34 Q 82,42 77,38 Z"
                fill="#ffffff"
                fillOpacity="0.88"
              />

              {/* 3D Specular Sheen on Globe */}
              <ellipse cx="52" cy="35" rx="14" ry="8" fill="#ffffff" fillOpacity="0.25" transform="rotate(-20 52 35)" />
            </g>

            {/* Right Crescent Swoop (Black/Charcoal with crisp contrast) */}
            <path
              d="M 60,6 C 82,6 102,18 98,42 C 94,58 84,72 68,82 C 86,74 94,56 90,38 C 86,22 72,12 56,10 Z"
              fill="url(#gfDarkArc)"
              stroke={isLight ? 'none' : '#475569'}
              strokeWidth={isLight ? 0 : 0.5}
            />
          </svg>
        </div>

        {/* "Forte" text with Registered Trademark */}
        <div className="relative inline-flex items-baseline">
          <span
            className={`font-black font-sans tracking-tight ${currentSize.titleSize}`}
            style={{ color: '#b91c1c' }}
          >
            Forte
          </span>
          <span
            className="text-[10px] font-bold ml-0.5 -top-2 relative select-none"
            style={{ color: '#b91c1c' }}
          >
            ®
          </span>
        </div>
      </div>

      {/* Subtitle: "Information Technologies and Consultancy Inc." */}
      {showSubtitle && (
        <span
          className={`font-medium tracking-wider whitespace-nowrap mt-1 uppercase ${
            isLight ? 'text-slate-600' : 'text-slate-300'
          } ${currentSize.subSize}`}
          style={{ letterSpacing: '0.08em', fontFamily: 'var(--font-sans)' }}
        >
          Information Technologies and Consultancy Inc.
        </span>
      )}
    </div>
  );
};
