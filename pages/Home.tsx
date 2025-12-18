import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { generateJobProfile } from '../services/aiService';
import { JobProfile } from '../types';

export const Home: React.FC = () => {
  const [roleInput, setRoleInput] = useState('');
  const [aiResult, setAiResult] = useState<JobProfile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAiSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!roleInput.trim()) return;

    setIsLoading(true);
    setError('');
    setAiResult(null);

    try {
      const result = await generateJobProfile(roleInput);
      setAiResult(result);
    } catch (err) {
      setError('Connection to Hive Intelligence failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo/20 rounded-full blur-[120px] -z-10 mix-blend-screen animate-pulse duration-1000" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-electric/10 rounded-full blur-[100px] -z-10 mix-blend-screen" />

        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tight mb-6">
              YOUR PARTNER IN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-indigo">
                PERFECT HIRING
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto">
              Global staffing solutions provider connecting elite enterprises with the top 1% of engineering talent.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-16 uppercase tracking-widest text-center">The Hive Protocol</h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { id: '01', title: 'Discovery', desc: 'Deep-dive architectural analysis of your needs.' },
              { id: '02', title: 'Sourcing', desc: 'AI-driven search across our proprietary global network.' },
              { id: '03', title: 'Vetting', desc: 'Rigorous technical testing and cultural alignment checks.' }
            ].map((step, idx) => (
              <Reveal key={step.id} delay={idx * 0.2} className="relative group p-8 glass-panel rounded-xl">
                <span className="absolute -top-6 -right-4 text-9xl font-black text-white/5 pointer-events-none z-0 group-hover:text-electric/10 transition-colors duration-500">
                  {step.id}
                </span>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI Lab Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">HIVE INTELLIGENCE LAB</h2>
              <p className="text-electric uppercase tracking-widest text-sm">Powered by Gemini 3 Flash</p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass-panel p-8 md:p-12 rounded-2xl shadow-2xl shadow-electric/5 border-t border-white/10">
              <form onSubmit={handleAiSubmit} className="mb-8">
                <label className="block text-slate-400 text-sm uppercase tracking-wider mb-2">Define Your Ideal Role</label>
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    value={roleInput}
                    onChange={(e) => setRoleInput(e.target.value)}
                    placeholder="e.g. Lead DevOps Engineer, Senior React Developer"
                    className="flex-grow bg-slate-950/80 border border-slate-700 text-white p-4 rounded-lg focus:outline-none focus:border-electric transition-colors placeholder-slate-600 font-mono"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-electric hover:bg-sky-400 text-midnight font-bold px-8 py-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
                  >
                    {isLoading ? 'Processing...' : 'Analyze Role'}
                  </button>
                </div>
              </form>

              {error && <div className="text-red-400 text-sm mt-4 font-mono">{error}</div>}

              {aiResult && (
                <div className="mt-8 pt-8 border-t border-white/10 animate-fade-in">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-white">{aiResult.title}</h3>
                        <span className="bg-indigo/20 text-indigo px-3 py-1 rounded text-xs uppercase font-bold tracking-wider">
                            {aiResult.seniorityLevel}
                        </span>
                    </div>
                    
                    <p className="text-slate-300 mb-6 font-light leading-relaxed">
                        {aiResult.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-slate-500 text-xs uppercase tracking-widest mb-3">Key Competencies</h4>
                            <ul className="space-y-2">
                                {aiResult.competencies.map((comp, i) => (
                                    <li key={i} className="flex items-center text-slate-300">
                                        <span className="w-1.5 h-1.5 bg-electric rounded-full mr-3"></span>
                                        {comp}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-slate-500 text-xs uppercase tracking-widest mb-3">Market Compensation</h4>
                            <div className="text-3xl font-light text-electric font-mono">
                                {aiResult.estimatedSalaryRange}
                            </div>
                            <p className="text-slate-500 text-xs mt-2">*Estimated global average</p>
                        </div>
                    </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};