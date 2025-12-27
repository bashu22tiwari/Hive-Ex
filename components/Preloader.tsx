import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    // Reveal tagline slightly after mount
    const timerTagline = setTimeout(() => {
      setShowTagline(true);
    }, 500);

    // Start exit sequence
    const timerExit = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    // Unmount
    const timerComplete = setTimeout(onComplete, 3300);

    return () => {
      clearTimeout(timerTagline);
      clearTimeout(timerExit);
      clearTimeout(timerComplete);
    };
  }, [onComplete]);

  return (
    <div 
        className={`fixed inset-0 z-[100] bg-midnight flex flex-col items-center justify-center transition-all duration-700 ease-out-expo ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
        <div className={`flex flex-col items-center transition-all duration-1000 ease-out-expo ${isExiting ? 'scale-105 opacity-0' : 'scale-100 opacity-100'}`}>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter mb-6">
                HIVE<span className="text-electric">.EX</span>
            </h1>
            
            <div className="overflow-hidden h-8 flex items-center justify-center">
                <p 
                    className={`text-xs md:text-sm font-sans text-slate-400 font-medium tracking-[0.2em] uppercase transition-all duration-1000 ease-out-expo transform ${showTagline ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                >
                    Top 1% Tech Talent. Deployed in 48 Hours.
                </p>
            </div>
        </div>
    </div>
  );
};
