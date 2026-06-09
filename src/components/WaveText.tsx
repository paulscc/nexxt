import { useEffect, useState } from 'react';

interface WaveTextProps {
  text: string;
  className?: string;
  id?: string;
}

export default function WaveText({ text, className = '', id }: WaveTextProps) {
  const letters = text.split('').map((char, i) => (
    <span
      key={i}
      className="wave-letter"
      style={{
        display: 'inline-block',
        animation: `wave 2.5s ease-in-out infinite`,
        animationDelay: `${i * 0.12}s`,
      }}
    >
      {char}
    </span>
  ));

  return (
    <div className={`${className} relative`} id={id}>
      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0px) scale(1); }
          25% { transform: translateY(-12px) scale(1.05); }
          50% { transform: translateY(0px) scale(1); }
          75% { transform: translateY(-6px) scale(1.02); }
        }
        .wave-letter {
          will-change: transform;
        }
      `}</style>
      {letters}
    </div>
  );
}