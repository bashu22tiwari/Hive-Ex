import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-lg font-medium text-slate-200 group-hover:text-electric transition-colors pr-8">{question}</span>
        <span className={`transform transition-transform duration-300 text-electric flex-shrink-0 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-out-expo ${isOpen ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-400 font-light leading-relaxed text-sm md:text-base pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const About: React.FC = () => {
  
  const faqs = [
    {
      question: "How quickly can we hire developers?",
      answer: "In most cases, we match and deploy developers within 48 hours, depending on role complexity and requirements."
    },
    {
      question: "What does “pre-vetted” mean?",
      answer: "All Hive Ex developers go through rigorous technical assessments, real-world problem-solving evaluations, and communication screening before being added to our talent pool."
    },
    {
      question: "What engagement models do you offer?",
      answer: "We offer on-demand hiring, staff augmentation, full-time (FTE) recruitment, and RPO—all with flexible terms."
    },
    {
      question: "Can developers work with our existing team and tools?",
      answer: "Yes. Our developers integrate seamlessly with your workflows, tools, and processes while working as an extension of your team."
    },
    {
      question: "Do you support startups as well as enterprises?",
      answer: "Absolutely. We work with early-stage startups, scale-ups, and large enterprises across multiple industries."
    },
    {
      question: "What technologies do you support?",
      answer: "We cover a wide range of technologies including frontend, backend, full-stack, mobile, cloud, DevOps, AI/ML, and QA."
    },
    {
      question: "Is there a minimum commitment?",
      answer: "Engagement terms are flexible and depend on the hiring model. On-demand and staff augmentation models do not require long-term commitments."
    },
    {
      question: "How do you ensure quality and reliability?",
      answer: "We combine smart talent matching with hands-on human vetting and continuous support throughout the engagement."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 overflow-hidden bg-midnight">
      
      {/* 1. Hero */}
      <section className="max-w-6xl mx-auto px-6 mb-32 text-center">
        <Reveal>
             <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-10 tracking-tight">
                BUILT FOR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-violet">MODERN TECH TEAMS.</span>
            </h1>
        </Reveal>
        <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-slate-300 font-light max-w-4xl mx-auto leading-relaxed mb-8">
                Hive Ex is the dedicated tech talent division of Exmura Solutions, created to solve one problem exceptionally well—finding the right developers, fast.
            </p>
            <p className="text-slate-500 max-w-3xl mx-auto leading-relaxed text-base">
                We curate a global network of the top 1% engineering talent, evaluated for technical depth, problem-solving ability, and communication skills. Our approach blends smart matching technology with expert-led screening to ensure every placement delivers long-term value. We don’t just fill roles—we help teams build better products with confidence.
            </p>
        </Reveal>
      </section>

      {/* 2. FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 mb-32">
        <Reveal>
            <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white">FREQUENTLY ASKED QUESTIONS</h2>
            </div>
        </Reveal>
        
        <Reveal delay={0.2}>
            <div className="bg-midnight/50 border border-white/5 rounded-3xl p-8 md:p-12">
                {faqs.map((faq, idx) => (
                    <FaqItem key={idx} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </Reveal>
      </section>

    </div>
  );
};
