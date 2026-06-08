import React from 'react';

interface LogoProps {
  mode?: 'header' | 'footer' | 'large' | 'monogram';
  className?: string;
  light?: boolean;
}

export default function Logo({ mode = 'header', className = '', light = false }: LogoProps) {
  const textColor = light ? 'text-white' : 'text-[#0B0B0B]';
  const subextColor = light ? 'text-zinc-400' : 'text-zinc-500';
  
  if (mode === 'monogram') {
    return (
      <svg
        viewBox="0 0 200 200"
        className={`w-12 h-12 ${className}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="96" fill="none" stroke={light ? "#ffffff40" : "#0b0b0b1a"} strokeWidth="1.5" />
        <circle cx="100" cy="100" r="92" fill="none" stroke={light ? "#ffffff1f" : "#0b0b0b0a"} strokeWidth="1" />
        <text
          x="78"
          y="130"
          fontFamily="'Playfair Display', 'Didot', 'Bodoni MT', 'Georgia', serif"
          fontSize="90"
          fontWeight="bold"
          fill={light ? "#ffffff" : "#000000"}
        >
          I
        </text>
        <text
          x="104"
          y="130"
          fontFamily="'Playfair Display', 'Didot', 'Bodoni MT', 'Georgia', serif"
          fontSize="90"
          fontWeight="bold"
          fontStyle="italic"
          fill="#D4AF37"
        >
          S
        </text>
      </svg>
    );
  }

  if (mode === 'header') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {/* Compact circular monogram */}
        <svg
          viewBox="0 0 200 200"
          className="w-9 h-9"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="94" fill="none" stroke="#D4AF37" strokeWidth="2" />
          <text
            x="76"
            y="132"
            fontFamily="'Playfair Display', 'Didot', 'Bodoni MT', 'Georgia', serif"
            fontSize="95"
            fontWeight="bold"
            fill={light ? "#ffffff" : "#000000"}
          >
            I
          </text>
          <text
            x="106"
            y="132"
            fontFamily="'Playfair Display', 'Didot', 'Bodoni MT', 'Georgia', serif"
            fontSize="95"
            fontWeight="bold"
            fontStyle="italic"
            fill="#D4AF37"
          >
            S
          </text>
        </svg>
        <div className="flex flex-col">
          <span className={`font-serif text-base md:text-lg tracking-[0.2em] font-bold ${textColor} leading-none`}>
            IJITUYI
          </span>
          <span className={`font-mono text-[8px] tracking-[0.4em] ${subextColor} uppercase mt-1 leading-none`}>
            SIGNATURE
          </span>
        </div>
      </div>
    );
  }

  // Large wordmark signature logo (represented gracefully as SVG)
  return (
    <div className={`flex flex-col items-center text-center max-w-[320px] mx-auto ${className}`}>
      <svg
        viewBox="0 0 400 120"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base font classes fallback directly */}
        <text
          x="50%"
          y="50"
          textAnchor="middle"
          fontFamily="'Playfair Display', 'Didot', 'Bodoni MT', serif"
          fontSize="36"
          fontWeight="400"
          letterSpacing="8"
          fill={light ? "#ffffff" : "#000000"}
        >
          IJITUYI
        </text>
        
        {/* Subtle decorative divider */}
        <line
          x1="130"
          y1="68"
          x2="270"
          y2="68"
          stroke="#D4AF37"
          strokeWidth="1"
        />

        <text
          x="50%"
          y="95"
          textAnchor="middle"
          fontFamily="'Playfair Display', 'Didot', 'Georgia', serif"
          fontSize="13"
          fontWeight="400"
          letterSpacing="14"
          fill={light ? "#ffffffbb" : "#000000aa"}
          style={{ textTransform: 'uppercase' }}
        >
          SIGNATURE
        </text>
      </svg>
    </div>
  );
}
