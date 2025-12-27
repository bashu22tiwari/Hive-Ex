import React from 'react';
import { Reveal } from '../components/Reveal';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        
        {/* Left Side Info */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8">LET'S BUILD <br/><span className="text-electric">YOUR TEAM</span></h1>
            <p className="text-slate-400 text-lg mb-12 max-w-md font-light">
              Looking for reliable developers or a long-term hiring partner? Tell us your requirements and our experts will get back to you within 24 hours.
            </p>
          </Reveal>

          <div className="space-y-8 font-mono text-sm">
            {[
                { icon: '📧', text: 'adarsh@hiveex.in' },
            ].map((item, idx) => (
                <Reveal key={idx} delay={0.2 + (idx * 0.1)}>
                    <div className="flex items-center space-x-6 group cursor-pointer">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-electric transition-all duration-300 group-hover:scale-110">
                            <span className="text-xl">{item.icon}</span>
                        </div>
                        <span className="text-slate-300 group-hover:text-white transition-colors">{item.text}</span>
                    </div>
                </Reveal>
            ))}
          </div>
        </div>

        {/* Right Side Form */}
        <div className="flex flex-col justify-center">
          <Reveal delay={0.3}>
            <form className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl shadow-black/40">
              <div className="space-y-8 relative z-10">
                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2 font-mono group-focus-within:text-electric transition-colors">Identity</label>
                  <input type="text" className="w-full bg-transparent border-b border-slate-700 py-3 text-white focus:outline-none focus:border-electric transition-colors placeholder-slate-700 font-light" placeholder="FULL NAME" />
                </div>
                
                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2 font-mono group-focus-within:text-electric transition-colors">Coordinates</label>
                  <input type="email" className="w-full bg-transparent border-b border-slate-700 py-3 text-white focus:outline-none focus:border-electric transition-colors placeholder-slate-700 font-light" placeholder="EMAIL ADDRESS" />
                </div>

                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2 font-mono group-focus-within:text-electric transition-colors">Transmission</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-slate-700 py-3 text-white focus:outline-none focus:border-electric transition-colors placeholder-slate-700 font-light" placeholder="BRIEFING..."></textarea>
                </div>

                <button type="button" className="w-full bg-electric hover:bg-sky-400 text-midnight font-bold uppercase tracking-widest py-5 rounded-xl transition-all duration-300 hover:shadow-lg font-sans text-sm hover:-translate-y-1 active:translate-y-0">
                  Get Started Today
                </button>
              </div>
            </form>
          </Reveal>
        </div>

      </div>
    </div>
  );
};
