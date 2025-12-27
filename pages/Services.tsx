import React from 'react';
import { Reveal } from '../components/Reveal';
import { Link } from 'react-router-dom';
import { NavRoute } from '../types';

export const Services: React.FC = () => {
  
  const models = [
    {
      title: "On-Demand Talent",
      subtitle: "Immediate access to elite developers.",
      desc: "Hire highly skilled developers for short-term or long-term needs without the commitment of permanent hiring. Ideal for fast-moving teams and urgent project requirements.",
      idealFor: ["Startups and product teams", "MVPs and rapid launches", "Evolving or time-bound projects"],
      benefits: ["Pre-vetted top 1% developers", "Deployment within 48 hours", "Flexible hourly, part-time, or full-time engagement"]
    },
    {
      title: "Staff Augmentation",
      subtitle: "Extend your team—without increasing overhead.",
      desc: "Seamlessly integrate experienced developers into your existing team while maintaining full control over delivery. We manage sourcing, compliance, and talent operations behind the scenes.",
      idealFor: ["Ongoing development initiatives", "Skill gap coverage", "Tight delivery timelines"],
      benefits: ["Fast and flexible scaling", "Seamless team integration", "Transparent engagement models"]
    },
    {
      title: "Recruitment – FTE Model",
      subtitle: "Build your core engineering team with confidence.",
      desc: "Hire full-time developers who align with both your technical requirements and company culture. We handle sourcing, screening, and shortlisting—so you hire only the best.",
      idealFor: ["Long-term team building", "Core and leadership engineering roles", "Specialized or niche tech positions"],
      benefits: ["Reduced time-to-hire", "Quality-first candidate screening", "Lower hiring risk"]
    },
    {
      title: "RPO",
      subtitle: "Your recruitment function, professionally managed.",
      desc: "Hive Ex acts as an extension of your internal hiring team, managing part or all of your recruitment lifecycle. Designed for companies that need consistent, scalable hiring outcomes.",
      idealFor: ["High-volume hiring", "Rapidly growing organizations", "Teams without internal recruitment capacity"],
      benefits: [] // Not specified in source text, keeping empty or handling gracefully
    }
  ];

  // Keeping skills as they support the FAQ "What technologies do you support?"
  const capabilities = [
    {
      category: "Frontend",
      skills: ["HTML5", "CSS3 / SCSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "Three.js"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "Java", "Go (Golang)", "Rust", "C# / .NET", "PHP", "Ruby on Rails", "Microservices", "GraphQL"]
    },
    {
      category: "Mobile",
      skills: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "PWA"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins", "Linux"]
    },
    {
      category: "Data & AI",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Machine Learning", "OpenAI API", "PyTorch", "Data Engineering"]
    },
    {
      category: "Specialized",
      skills: ["Blockchain", "AR / VR", "Embedded Systems", "SAP / ERP", "Salesforce", "Legacy Systems", "Cybersecurity", "Any Custom Tech"]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 overflow-hidden bg-midnight">
      
      {/* 1. Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <Reveal>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8">
                FLEXIBLE HIRING MODELS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-violet">THAT ADAPT TO YOUR BUSINESS.</span>
            </h1>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
                No two teams scale the same way. Hive Ex offers multiple engagement models designed to meet your timelines, budgets, and growth plans—without compromising on talent quality.
            </p>
        </Reveal>
      </section>

      {/* 2. Engagement Models */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.map((model, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="group relative bg-midnight p-10 rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-electric/50 hover:shadow-[0_0_40px_rgba(56,189,248,0.1)] h-full flex flex-col">
                
                {/* Background Glow Effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-electric/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-electric/10 transition-colors duration-500"></div>

                <div className="relative z-10">
                    <h3 className="font-display text-3xl font-bold text-white mb-2">{model.title}</h3>
                    <p className="text-electric font-mono text-sm mb-6">{model.subtitle}</p>
                    
                    <p className="text-slate-400 leading-relaxed font-light text-base mb-8">{model.desc}</p>
                    
                    <div className="grid grid-cols-1 gap-6 mb-8">
                        <div>
                            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-3">Ideal For:</h4>
                            <ul className="list-disc list-inside space-y-1 text-slate-400 text-sm">
                                {model.idealFor.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                        {model.benefits.length > 0 && (
                            <div>
                                <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-3">Key Benefits:</h4>
                                <ul className="list-disc list-inside space-y-1 text-slate-400 text-sm">
                                    {model.benefits.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="mt-auto pt-6 border-t border-white/5">
                     <Link to={NavRoute.CONTACT} className="inline-flex items-center text-sm font-bold text-white group-hover:text-electric transition-colors">
                        GET STARTED 
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                     </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      
      {/* 3. Skills Section (Visualizing the wide range of tech supported) */}
      <section className="bg-obsidian/50 border-y border-white/5 py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
            <Reveal>
                <div className="mb-20 text-center">
                    <h2 className="font-display text-4xl font-bold text-white mb-6">TECHNOLOGIES</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        We cover a wide range of technologies including frontend, backend, full-stack, mobile, cloud, DevOps, AI/ML, and QA.
                    </p>
                </div>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {capabilities.map((cap, idx) => (
                    <Reveal key={idx} delay={0.1 + (idx * 0.1)}>
                        <div className="bg-white/5 border border-white/5 rounded-xl p-8 hover:bg-white/10 transition-colors duration-300 h-full">
                            <h4 className="text-electric font-bold mb-6 font-display text-xl">{cap.category}</h4>
                            <div className="flex flex-wrap gap-2">
                                {cap.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="px-3 py-1.5 bg-midnight border border-white/10 rounded-md text-slate-300 text-xs font-mono hover:border-electric/50 hover:text-white transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
      </section>

      {/* 4. Call to Action */}
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-12 text-center">
        <Reveal>
            <h2 className="text-3xl font-display font-bold text-white mb-8">WORK WITH US</h2>
            <Link to={NavRoute.CONTACT}>
                <button className="px-10 py-4 bg-white text-midnight font-bold rounded-full hover:bg-electric transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    CONTACT US
                </button>
            </Link>
        </Reveal>
      </section>

    </div>
  );
};
