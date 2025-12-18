import React from 'react';
import { Reveal } from '../components/Reveal';

export const Services: React.FC = () => {
  const specialisms = [
    { title: "Engineering", desc: "Full-stack, Backend, and DevOps specialists proficient in modern cloud-native architectures." },
    { title: "Leadership", desc: "CTOs, VPs of Engineering, and Tech Leads who drive strategy and culture." },
    { title: "AI & ML", desc: "Data Scientists and ML Engineers to build your predictive models and AI infrastructure." },
    { title: "Security", desc: "Cybersecurity experts ensuring your infrastructure is resilient against modern threats." }
  ];

  return (
    <div className="min-h-screen pt-12">
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <Reveal>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-20">CORE <br/> SPECIALISMS</h1>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specialisms.map((spec, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="group glass-panel p-10 rounded-xl border border-white/5 hover:border-electric/50 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-electric transition-colors">{spec.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-8">{spec.desc}</p>
                </div>
                <div className="flex items-center text-electric text-sm font-bold uppercase tracking-wider cursor-pointer group-hover:translate-x-2 transition-transform">
                  View Network <span className="ml-2">→</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <Reveal>
          <h2 className="text-3xl font-bold text-white mb-12 uppercase tracking-widest">Engagement Models</h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            { name: "Team Extension", price: "Flexible", features: ["Integrated into your workflows", "Scalable monthly", "Direct management"] },
            { name: "Dedicated Pods", price: "Managed", features: ["Project Manager included", "Guaranteed velocity", "Autonomous delivery"] },
            { name: "CTO Advisory", price: "Strategic", features: ["Architecture review", "Hiring strategy", "Tech roadmap design"] }
          ].map((model, idx) => (
            <Reveal key={idx} delay={0.2 + (idx * 0.1)}>
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:bg-slate-800/50 transition-colors">
                <div className="text-indigo text-xs font-bold uppercase tracking-widest mb-2">{model.price}</div>
                <h3 className="text-2xl font-bold text-white mb-6">{model.name}</h3>
                <ul className="space-y-4">
                  {model.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center text-slate-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-electric rounded-full mr-3"></span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};