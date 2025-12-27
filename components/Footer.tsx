import React from 'react';
import { Link } from 'react-router-dom';
import { NavRoute } from '../types';

export const Footer: React.FC = () => {
  const currentYear = 2025; // Updated to match prompt text "2025"

  return (
    <footer className="relative border-t border-white/5 bg-midnight pt-20 pb-10 overflow-hidden">
      {/* Footer Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Brand */}
            <div className="col-span-1 md:col-span-1">
                <h2 className="font-display text-2xl font-bold text-white mb-2">HIVE<span className="text-electric">.EX</span></h2>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                    A Tech Talent Solutions Brand of Exmura Solutions
                </p>
            </div>

            {/* Column 2: Navigation (Header Buttons) */}
            <div>
                <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-6 text-electric">Navigation</h4>
                <div className="flex flex-col space-y-4 text-sm text-slate-400">
                    <Link to={NavRoute.HOME} className="hover:text-white transition-colors">Home</Link>
                    <Link to={NavRoute.ABOUT} className="hover:text-white transition-colors">About</Link>
                    <Link to={NavRoute.SERVICES} className="hover:text-white transition-colors">Services</Link>
                    <Link to={NavRoute.CONTACT} className="hover:text-white transition-colors">Contact</Link>
                </div>
            </div>

            {/* Column 3: Contact Details */}
            <div>
                <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-6 text-electric">Contact Details</h4>
                <div className="flex flex-col space-y-4 text-sm text-slate-400">
                    <a href="mailto:adarsh@hiveex.in" className="hover:text-electric transition-colors">adarsh@hiveex.in</a>
                </div>
            </div>

            {/* Column 4: Connect */}
            <div>
                <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-6 text-electric">Connect</h4>
                <div className="flex flex-col space-y-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-slate-400 hover:text-white transition-colors group">
                        <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3 border border-white/10 group-hover:border-electric group-hover:bg-electric/10 transition-all">
                             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </span>
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
      
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 font-mono">
            <p>&copy; {currentYear} Hive Ex. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
