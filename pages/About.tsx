import React from 'react';
import { Reveal } from '../components/Reveal';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-12">
      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <Reveal>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-16">THE HIVE <br /> PHILOSOPHY</h1>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal delay={0.2}>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-electric mb-4">ENGINEERING FIRST</h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  We aren't just recruiters; we are technical architects. Our sourcing process is led by former senior engineers who understand the nuance of your stack. We speak your language, not buzzwords.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-electric mb-4">THE 1% FILTER</h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  Quantity is the enemy of quality. Our automated vetting pipelines and manual code reviews filter out 99% of applicants, leaving you with only the elite tier of global talent ready to deploy.
                </p>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.4}>
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden glass-panel">
               {/* Placeholder for high-end tech imagery */}
               <img 
                 src="https://picsum.photos/800/1000?grayscale" 
                 alt="Tech Office" 
                 className="absolute inset-0 w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700 ease-out"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent"></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="bg-slate-900/30 border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Reveal delay={0.1}>
              <div className="p-8">
                <div className="text-6xl font-black text-indigo mb-2">15+</div>
                <div className="text-slate-400 uppercase tracking-widest text-sm">Countries Active</div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-8 border-x border-white/5">
                <div className="text-6xl font-black text-electric mb-2">200+</div>
                <div className="text-slate-400 uppercase tracking-widest text-sm">Elite Engineers Deployed</div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="p-8">
                <div className="text-6xl font-black text-white mb-2">98%</div>
                <div className="text-slate-400 uppercase tracking-widest text-sm">Client Retention Rate</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};