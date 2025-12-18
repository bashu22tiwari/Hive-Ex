import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 1: Brand Name Entry
    const timer1 = setTimeout(() => setStage(1), 500);
    // Stage 2: Tagline Entry
    const timer2 = setTimeout(() => setStage(2), 1500);
    // Stage 3: Fade Out
    const timer3 = setTimeout(() => setStage(3), 3000);
    // Complete
    const timer4 = setTimeout(() => onComplete(), 3600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  if (stage === 3) return null; // Or keep in DOM but transparent

  return (
    <div className={`fixed inset-0 z-[100] bg-midnight flex flex-col items-center justify-center transition-opacity duration-1000 ${stage === 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative z-10 text-center">
        <h1 className={`text-6xl md:text-8xl font-black text-white tracking-tighter transform transition-all duration-1000 ${stage >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          HIVE EX
        </h1>
        <p className={`mt-4 text-electric text-sm uppercase tracking-[0.3em] font-medium transform transition-all duration-1000 delay-300 ${stage >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
          Intelligence in Recruitment
        </p>
      </div>

      {/* Loading Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-900">
        <div 
            className="h-full bg-gradient-to-r from-indigo via-electric to-indigo animate-gradient-x transition-all duration-[3000ms] ease-out"
            style={{ width: stage >= 1 ? '100%' : '0%' }}
        />
      </div>
    </div>
  );
};