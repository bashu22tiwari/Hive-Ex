import React from 'react';
import { Reveal } from '../components/Reveal';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full py-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        
        {/* Left Side Info */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8">INITIATE <br/> CONTACT</h1>
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              Ready to scale your engineering capability? Send a secure transmission to our team. We respond within 24 hours.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📍</span>
                <span className="text-white font-medium">San Francisco, CA (HQ)</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📧</span>
                <span className="text-white font-medium">hello@hive-ex.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📱</span>
                <span className="text-white font-medium">+1 (555) 019-2834</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Side Form */}
        <div className="flex flex-col justify-center">
          <Reveal delay={0.3}>
            <form className="glass-panel p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Identity</label>
                  <input type="text" className="w-full bg-slate-950/50 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-electric transition-colors" placeholder="Full Name" />
                </div>
                
                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Coordinates</label>
                  <input type="email" className="w-full bg-slate-950/50 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-electric transition-colors" placeholder="Email Address" />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Transmission</label>
                  <textarea rows={4} className="w-full bg-slate-950/50 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-electric transition-colors" placeholder="Describe your staffing needs..."></textarea>
                </div>

                <button type="button" className="w-full bg-electric hover:bg-sky-400 text-midnight font-bold uppercase tracking-widest py-4 rounded transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]">
                  Send Transmission
                </button>
              </div>
            </form>
          </Reveal>
        </div>

      </div>
    </div>
  );
};