import React from 'react';
import { NavRoute } from '../types';

interface NavbarProps {
  currentPath: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const links = [
    { label: 'Home', href: NavRoute.HOME },
    { label: 'About', href: NavRoute.ABOUT },
    { label: 'Services', href: NavRoute.SERVICES },
    { label: 'Contact', href: NavRoute.CONTACT },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href={NavRoute.HOME} className="text-3xl font-black tracking-tight text-white hover:text-electric transition-colors">
          HIVE EX
        </a>

        <div className="hidden md:flex space-x-8">
          {links.map((link) => {
            const isActive = currentPath === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-widest font-medium transition-all duration-300 relative group ${
                  isActive ? 'text-electric' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-electric transform transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button (simplified for this scope) */}
        <div className="md:hidden">
          <a href={NavRoute.CONTACT} className="text-electric font-bold text-sm">GET IN TOUCH</a>
        </div>
      </div>
    </nav>
  );
};