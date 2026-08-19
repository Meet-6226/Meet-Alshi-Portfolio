import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { PROJECTS } from '../../data/projects';

gsap.registerPlugin(useGSAP);

export default function ProjectCaseStudy({ projectSlug, onClose, onNavigateNext }) {
  const containerRef = useRef();
  const transitionLineRef = useRef();

  // Find project by slug/id
  const projectIndex = PROJECTS.findIndex(p => p.slug === projectSlug || p.id === projectSlug);
  const project = PROJECTS[projectIndex !== -1 ? projectIndex : 0];
  const cs = project.caseStudy;

  // Determine Next Project in Loop
  const nextProjectIndex = (projectIndex + 1) % PROJECTS.length;
  const nextProject = PROJECTS[nextProjectIndex];

  // GSAP 500-700ms Entry Transition
  useGSAP(() => {
    if (containerRef.current) {
      window.scrollTo(0, 0);

      // Top Accent Line Expansion
      gsap.fromTo(
        transitionLineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.4, ease: 'power2.inOut', transformOrigin: 'left center' }
      );

      // Content Fade & Upward Entrance
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.1, ease: 'power3.out' }
      );
    }
  }, [projectSlug]);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F2F2F0] font-sans relative selection:bg-[#A6B84A] selection:text-[#050505] pb-32">
      
      {/* GSAP Top Accent Line */}
      <div 
        ref={transitionLineRef} 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#A6B84A] z-50 pointer-events-none" 
      />

      {/* Main Case Study Document Container (pt-32 ensures zero overlap underneath fixed global Navbar) */}
      <main ref={containerRef} className="max-w-5xl mx-auto px-6 md:px-12 pt-32 flex flex-col gap-24">
        
        {/* Top Header & Navigation Bar */}
        <section className="border-b border-[#242424] pb-16">
          <div className="flex justify-between items-center mb-8">
            <div className="inline-flex items-center gap-2.5 font-mono text-xs text-[#A6B84A] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#B7F000]" />
              <span>[ PROJECT / {project.num} ]</span>
            </div>

            <button 
              onClick={onClose}
              className="font-mono text-xs text-[#8A8A86] hover:text-[#A6B84A] transition-colors uppercase tracking-widest font-semibold flex items-center gap-2"
            >
              <span>← BACK TO PROJECTS</span>
            </button>
          </div>

          <h1 className="font-heading font-extrabold text-5xl sm:text-7xl lg:text-8xl text-[#F2F2F0] tracking-tight uppercase leading-[0.95] mb-6">
            {project.name}
          </h1>

          <div className="font-mono text-sm text-[#A6B84A] tracking-widest uppercase font-semibold mb-6">
            {project.category}
          </div>

          <p className="font-sans text-lg sm:text-xl text-[#8A8A86] max-w-3xl leading-relaxed">
            {project.tagline}
          </p>

          {/* Compact Metadata Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-[#242424] font-mono text-xs uppercase">
            <div>
              <span className="text-[#5F5F5B] block mb-1">ROLE</span>
              <span className="text-[#F2F2F0] font-semibold">{project.role}</span>
            </div>
            <div>
              <span className="text-[#5F5F5B] block mb-1">TEAM</span>
              <span className="text-[#F2F2F0] font-semibold">{project.team}</span>
            </div>
            <div>
              <span className="text-[#5F5F5B] block mb-1">YEAR</span>
              <span className="text-[#F2F2F0] font-semibold">{project.year}</span>
            </div>
            <div>
              <span className="text-[#5F5F5B] block mb-1">STATUS</span>
              <span className="text-[#A6B84A] font-bold">{project.status}</span>
            </div>
          </div>
        </section>

        {/* 01 // OVERVIEW */}
        <section className="flex flex-col gap-6">
          <h2 className="font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] font-semibold">
            01 // OVERVIEW
          </h2>
          <div className="flex flex-col gap-6 text-[#8A8A86] text-base sm:text-lg leading-relaxed font-sans max-w-4xl">
            {cs.overview.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* 02 // TECHNOLOGY */}
        <section className="flex flex-col gap-6 border-t border-[#242424] pt-16">
          <h2 className="font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] font-semibold">
            02 // TECHNOLOGY
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, idx) => (
              <span 
                key={idx} 
                className="font-mono text-xs bg-[#090909] border border-[#242424] text-[#F2F2F0] px-4 py-2.5 rounded-[2px] flex items-center gap-2"
              >
                <span className="text-[#A6B84A]">●</span>
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </section>

        {/* 03 // KEY FEATURES */}
        <section className="flex flex-col gap-8 border-t border-[#242424] pt-16">
          <h2 className="font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] font-semibold">
            03 // KEY FEATURES
          </h2>
          <div className="divide-y divide-[#242424] border-y border-[#242424]">
            {cs.features.map((feature, idx) => (
              <div key={idx} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-2 font-mono text-xs text-[#A6B84A] font-bold tracking-widest pt-1">
                  0{idx + 1}
                </div>
                <div className="md:col-span-4 font-heading font-extrabold text-lg text-[#F2F2F0] uppercase tracking-tight">
                  {feature.name}
                </div>
                <div className="md:col-span-6 font-sans text-sm text-[#8A8A86] leading-relaxed">
                  {feature.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 04 // MY CONTRIBUTION */}
        <section className="flex flex-col gap-6 border-t border-[#242424] pt-16">
          <h2 className="font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] font-semibold">
            04 // MY CONTRIBUTION
          </h2>
          <ul className="flex flex-col gap-4 font-sans text-base text-[#8A8A86]">
            {cs.contribution.map((item, idx) => (
              <li key={idx} className="flex gap-4 items-start">
                <span className="font-mono text-xs text-[#A6B84A] font-bold mt-1 shrink-0">›</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 05 // ARCHITECTURE */}
        <section className="flex flex-col gap-6 border-t border-[#242424] pt-16">
          <h2 className="font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] font-semibold">
            05 // ARCHITECTURE
          </h2>
          <div className="bg-[#090909] border border-[#242424] p-8 rounded-[2px] flex flex-col gap-6">
            <div className="flex justify-between items-center border-b border-[#242424] pb-4 font-mono text-xs text-[#8A8A86] uppercase">
              <span className="text-[#A6B84A] font-bold">SYSTEM TOPOLOGY // ARCHITECTURE SPEC</span>
              <span>{project.buildId}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cs.architecture.map((arch, idx) => (
                <div key={idx} className="border border-[#242424] p-6 bg-[#070707] rounded-[2px]">
                  <span className="font-mono text-[11px] text-[#A6B84A] block mb-2 font-bold">{arch.title}</span>
                  <p className="font-sans text-xs text-[#8A8A86] leading-relaxed">{arch.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 06 // ENGINEERING CHALLENGES */}
        <section className="flex flex-col gap-6 border-t border-[#242424] pt-16">
          <h2 className="font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] font-semibold">
            06 // ENGINEERING CHALLENGES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cs.challenges.map((ch, idx) => (
              <div key={idx} className="bg-[#090909] border border-[#242424] p-8 rounded-[2px]">
                <h3 className="font-mono text-xs text-[#A6B84A] font-bold uppercase tracking-wider mb-3">
                  {ch.title}
                </h3>
                <p className="font-sans text-sm text-[#8A8A86] leading-relaxed">
                  {ch.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 07 // OUTCOME */}
        <section className="flex flex-col gap-6 border-t border-[#242424] pt-16">
          <h2 className="font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] font-semibold">
            07 // OUTCOME
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#8A8A86] leading-relaxed max-w-3xl">
            {cs.outcome}
          </p>
        </section>

        {/* Bottom Loop Navigation */}
        <footer className="flex flex-col sm:flex-row justify-between items-center border-t border-[#242424] pt-16 gap-6">
          <button 
            onClick={onClose} 
            className="font-mono text-xs text-[#8A8A86] hover:text-[#A6B84A] transition-colors uppercase tracking-widest font-semibold"
          >
            ← BACK TO PROJECTS
          </button>
          
          <button 
            onClick={() => onNavigateNext(nextProject.slug)}
            className="font-mono text-xs bg-[#090909] border border-[#242424] text-[#A6B84A] font-bold px-8 py-4 uppercase tracking-widest hover:bg-[#A6B84A] hover:text-[#050505] hover:border-[#A6B84A] transition-all flex items-center gap-2"
          >
            <span>NEXT PROJECT: {nextProject.name}</span>
            <span>→</span>
          </button>
        </footer>

      </main>
    </div>
  );
}
