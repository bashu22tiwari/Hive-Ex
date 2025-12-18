import React from 'react';
import { NavRoute } from '../types';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-midnight pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h2 className="text-2xl font-black text-white mb-2">HIVE EX</h2>
          <p className="text-slate-500 text-sm max-w-xs">
            Redefining technical excellence through precision staffing and AI-driven insights.
          </p>
        </div>
        
        <div className="flex space-x-8 text-sm">
          <a href={NavRoute.ABOUT} className="text-slate-400 hover:text-electric transition-colors">About</a>
          <a href={NavRoute.SERVICES} className="text-slate-400 hover:text-electric transition-colors">Services</a>
          <a href={NavRoute.CONTACT} className="text-slate-400 hover:text-electric transition-colors">Contact</a>
          <span className="text-slate-600">Privacy Policy</span>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
        <p>&copy; {currentYear} Hive Ex Global. All rights reserved.</p>
        <p>Designed for the Future.</p>
      </div>
    </footer>
  );
};