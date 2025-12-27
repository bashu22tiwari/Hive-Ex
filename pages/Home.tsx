import React from 'react';
import { Reveal } from '../components/Reveal';
import { NavRoute } from '../types';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  
  const advantages = [
    { text: "Top 1% pre-vetted global tech talent" },
    { text: "Developers available in as little as 48 hours" },
    { text: "Multiple flexible hiring models" },
    { text: "Reduced hiring risk and cost" },
    { text: "Backed by Exmura Solutions" },
    { text: "Dedicated account and talent support" }
  ];

  const clientTypes = [
    "Startups and scale-ups",
    "SaaS and product companies",
    "Enterprises and global organizations",
    "Digital agencies and consultancies"
  ];

  const industries = [
    "FinTech", "HealthTech", "E-Commerce", "EdTech", "Logistics", "SaaS", "Enterprise Software"
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-20">
        {/* Static, Majestic Atmosphere */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-electric/5 rounded-[100%] blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <Reveal delay={0.1}>
            <div className="inline-block mb-8 px-5 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
                <span className="text-electric font-sans text-xs font-semibold tracking-widest uppercase">Top 1% Tech Talent. Deployed in 48 Hours.</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.05] tracking-tight mb-8">
              Hire Elite Developers—<br />
              <span className="text-slate-500">
                Without the Hiring Delays
              </span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.3}>
            <p className="text-lg md:text-xl text-slate-400 font-light max-w-3xl mx-auto mb-6 leading-relaxed">
              Access pre-vetted, high-performing developers within 48 hours and scale your engineering team without recruitment friction.
            </p>
            <p className="text-base text-slate-500 font-light max-w-4xl mx-auto mb-10 leading-relaxed">
              Hive Ex, a talent solutions brand of Exmura Solutions, helps startups, scale-ups, and enterprises hire with speed and confidence. Through intelligent talent matching and rigorous human vetting, we deliver developers who are ready to perform from day one. Whether you need to build fast, scale responsibly, or fill critical skill gaps—Hive Ex gives you the talent advantage.
            </p>
            <div className="text-electric font-display font-semibold text-xl tracking-wide">
              Build Faster. Hire Smarter. Scale with Confidence.
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Clients Section */}
      <section className="py-24 px-6 bg-obsidian/30 border-y border-white/5 relative">
         <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-medium text-white mb-6">Trusted by Teams That Move Fast</h2>
                <p className="text-slate-400 max-w-2xl mx-auto font-light text-lg">
                  Hive Ex partners with companies across industries to help them build, scale, and innovate.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
               {/* Client Types */}
               <Reveal delay={0.1}>
                 <div className="bg-midnight p-10 rounded-3xl border border-white/5 h-full">
                    <h3 className="text-electric font-mono text-sm uppercase tracking-widest mb-8">We Work With</h3>
                    <ul className="space-y-4">
                      {clientTypes.map((item, idx) => (
                        <li key={idx} className="flex items-center text-xl text-slate-200 font-display">
                          <span className="w-2 h-2 rounded-full bg-electric mr-4"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                 </div>
               </Reveal>

               {/* Industries */}
               <Reveal delay={0.2}>
                 <div className="bg-midnight p-10 rounded-3xl border border-white/5 h-full">
                    <h3 className="text-electric font-mono text-sm uppercase tracking-widest mb-8">Industries Served</h3>
                    <div className="flex flex-wrap gap-3">
                      {industries.map((item, idx) => (
                        <span key={idx} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm hover:border-electric/30 transition-colors">
                          {item}
                        </span>
                      ))}
                    </div>
                 </div>
               </Reveal>
            </div>
         </div>
      </section>

      {/* 3. Why Hive Ex (Advantage) */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
               <span className="text-electric font-mono text-xs uppercase tracking-widest border border-electric/20 px-3 py-1 rounded-full bg-electric/5">Why Hive Ex</span>
               <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-6 mb-6">The Hive Ex Advantage</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-2xl bg-midnight border border-white/5 hover:border-electric/30 transition-all duration-500 group h-full flex items-center">
                    <div className="w-10 h-10 rounded-full bg-electric/10 flex items-center justify-center mr-5 flex-shrink-0 text-electric">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-lg text-slate-200 font-medium">{adv.text}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
