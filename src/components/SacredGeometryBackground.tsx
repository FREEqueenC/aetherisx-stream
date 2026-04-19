import React from 'react';

export default function SacredGeometryBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Metatron's Cube inspired grid */}
        <g stroke="var(--color-primary)" strokeWidth="0.05" fill="none" opacity="0.3">
          {Array.from({ length: 12 }).map((_, i) => (
            <circle key={i} cx="50" cy="50" r={10 * (i + 1)} strokeDasharray="1,1" />
          ))}
          
          {Array.from({ length: 12 }).map((_, i) => (
            <line 
              key={i} 
              x1="50" y1="50" 
              x2={50 + 100 * Math.cos(i * Math.PI / 6)} 
              y2={50 + 100 * Math.sin(i * Math.PI / 6)} 
              strokeDasharray="2,2"
            />
          ))}
        </g>

        {/* Floating geometric particles */}
        <g className="animate-pulse">
          <polygon points="50,45 55,55 45,55" fill="var(--color-secondary)" opacity="0.1" />
          <rect x="20" y="20" width="2" height="2" fill="var(--color-primary)" opacity="0.1" transform="rotate(45 21 21)" />
          <circle cx="80" cy="80" r="1" fill="var(--color-primary)" opacity="0.1" />
        </g>
      </svg>
    </div>
  );
}
