import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavRoute } from '../types';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const links = [
    { label: 'Home', href: NavRoute.HOME },
    { label: 'About', href: NavRoute.ABOUT },
    { label: 'Services', href: NavRoute.SERVICES },
    { label: 'Contact', href: NavRoute.CONTACT },
  ];

  // Determine nav styles based on state
  // If menu is open, we make nav transparent so it blends with the overlay
  // If scrolled (and menu closed), we show the glass effect
  // Otherwise transparent
  const navBackgroundClass = isMobileMenuOpen 
    ? 'bg-transparent border-transparent' 
    : scrolled 
      ? 'bg-midnight/80 backdrop-blur-md border-white/5' 
      : 'bg-transparent border-transparent';

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 border-b ${navBackgroundClass}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
            {/* Logo */}
            <Link to={NavRoute.HOME} className="relative z-50 group" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-white">
                    HIVE<span className="text-electric">.EX</span>
                </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
                {links.map((link) => {
                    const isActive = location.pathname === link.href;
                    return (
                    <Link
                        key={link.href}
                        to={link.href}
                        className={`font-sans text-xs font-medium tracking-widest uppercase transition-all duration-300 relative ${
                        isActive ? 'text-electric' : 'text-slate-400 hover:text-white'
                        }`}
                    >
                        {link.label}
                        {isActive && (
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-electric rounded-full" />
                        )}
                    </Link>
                    );
                })}
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="lg:hidden relative z-50 p-2 text-white focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
            >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                    <span
                        className={`w-full h-0.5 bg-current transform transition-all duration-300 origin-left ${
                        isMobileMenuOpen ? 'rotate-45 translate-x-px' : ''
                        }`}
                    />
                    <span
                        className={`w-full h-0.5 bg-current transition-all duration-300 ${
                        isMobileMenuOpen ? 'opacity-0 translate-x-4' : 'opacity-100'
                        }`}
                    />
                    <span
                        className={`w-full h-0.5 bg-current transform transition-all duration-300 origin-left ${
                        isMobileMenuOpen ? '-rotate-45 translate-x-px' : ''
                        }`}
                    />
                </div>
            </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-midnight flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Background Texture */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')]"></div>

        {/* Menu Links */}
        <div className="flex flex-col space-y-8 text-center relative z-10 w-full px-6">
            {links.map((link, idx) => (
                <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-display text-2xl font-bold tracking-tight transition-all duration-300 transform block ${
                    isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${location.pathname === link.href ? 'text-electric' : 'text-slate-300'}`}
                style={{ transitionDelay: `${100 + idx * 50}ms` }}
                >
                {link.label}
                </Link>
            ))}
        </div>
      </div>
    </>
  );
};
