import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { PROJECTS } from '../../data/projects';

gsap.registerPlugin(useGSAP);

export default function ProjectCaseStudy({ projectSlug, onClose, onNavigateNext }) {
  const containerRef = useRef();
  const transitionLineRef = useRef();

  // Find project by slug/id (handles banquet-management and banquet-management-system)
  const normalizedSlug = projectSlug === 'banquet-management' ? 'banquet-management-system' : projectSlug;
  const projectIndex = PROJECTS.findIndex(p => p.slug === normalizedSlug || p.id === normalizedSlug);
  const project = PROJECTS[projectIndex !== -1 ? projectIndex : 0];
  const cs = project.caseStudy;

  // Navigation Loops
  const totalProjects = PROJECTS.length;
  const prevProjectIndex = (projectIndex - 1 + totalProjects) % totalProjects;
  const nextProjectIndex = (projectIndex + 1) % totalProjects;
  const prevProject = PROJECTS[prevProjectIndex];
  const nextProject = PROJECTS[nextProjectIndex];

  // GSAP Entrance Animation
  useGSAP(() => {
    if (containerRef.current) {
      window.scrollTo(0, 0);

      gsap.fromTo(
        transitionLineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.4, ease: 'power2.inOut', transformOrigin: 'left center' }
      );

      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.1, ease: 'power3.out' }
      );
    }
  }, [projectSlug]);

  // Project Specific Process Flow Steps
  const getProcessFlow = () => {
    if (project.id === 'spendr') {
      return [
        { num: '01', title: 'TRACK', desc: 'Budget & financial goals' },
        { num: '02', title: 'LEARN', desc: 'Financial education' },
        { num: '03', title: 'ASK', desc: 'AI financial guidance' },
        { num: '04', title: 'PRACTICE', desc: 'Risk-free paper trading' },
        { num: '05', title: 'REWARD', desc: 'Virtual rewards' }
      ];
    } else if (project.id === 'aayu-opd') {
      return [
        { num: '01', title: 'REGISTER', desc: 'Patient digital onboarding' },
        { num: '02', title: 'SCHEDULE', desc: 'Doctor availability booking' },
        { num: '03', title: 'CONSULT', desc: 'Queue & doctor evaluation' },
        { num: '04', title: 'PRESCRIBE', desc: 'Digital prescription issuance' }
      ];
    } else if (project.id === 'campuscare') {
      return [
        { num: '01', title: 'TRIGGER SOS', desc: 'Instant emergency alert' },
        { num: '02', title: 'LOCATION', desc: 'Live coordinate sharing' },
        { num: '03', title: 'NOTIFY FCM', desc: 'Authority push alert' },
        { num: '04', title: 'RESPOND', desc: 'Incident resolution map' }
      ];
    } else {
      return [
        { num: '01', title: 'BOOK HALL', desc: 'Venue availability check' },
        { num: '02', title: 'SCHEDULE', desc: 'Event timetable setup' },
        { num: '03', title: 'CATERING', desc: 'Menu & logistics selection' },
        { num: '04', title: 'BILLING', desc: 'Invoice generation' }
      ];
    }
  };

  const processFlow = getProcessFlow();

  return (
    <div className="min-h-screen bg-[#050505] text-[#F2F2F0] font-sans relative selection:bg-[#A6B84A] selection:text-[#050505] pb-32">
      
      {/* GSAP Top Accent Line */}
      <div 
        ref={transitionLineRef} 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#A6B84A] z-50 pointer-events-none" 
      />

      {/* Main Container */}
      <main ref={containerRef} className="max-w-6xl mx-auto px-6 md:px-12 pt-32 flex flex-col gap-28">
        
        {/* ==================================================
            PROJECT HERO
            ================================================== */}
        <section className="border-b border-[#242424] pb-16">
          <div className="flex justify-between items-center mb-8">
            <div className="inline-flex items-center gap-2.5 font-mono text-xs text-[#A6B84A] tracking-widest uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#B7F000]" />
              <span>PROJECT {project.num} // {project.category}</span>
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

          <p className="font-sans text-xl sm:text-2xl text-[#A6B84A] font-extrabold tracking-tight uppercase mb-4">
            "{cs.heroStatement}"
          </p>

          <p className="font-sans text-base sm:text-lg text-[#8A8A86] max-w-3xl leading-relaxed mb-10">
            {project.tagline}
          </p>

          {/* Compact Metadata Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#242424] font-mono text-xs uppercase">
            <div>
              <span className="text-[#5F5F5B] block mb-1">ROLE</span>
              <span className="text-[#F2F2F0] font-semibold">{project.role}</span>
            </div>
            <div>
              <span className="text-[#5F5F5B] block mb-1">TYPE</span>
              <span className="text-[#F2F2F0] font-semibold">{project.type}</span>
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

          <div className="mt-12 flex justify-center">
            <span className="font-mono text-[11px] text-[#5F5F5B] uppercase tracking-widest flex items-center gap-2 animate-bounce">
              <span>SCROLL TO EXPLORE</span>
              <span>↓</span>
            </span>
          </div>
        </section>

        {/* ==================================================
            SECTION 01 — THE IDEA (WHY PROJECT?)
            ================================================== */}
        <section className="flex flex-col gap-10 pb-16 border-b border-[#242424]">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] mb-2 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7F000]" />
              <span>[ 01 // OVERVIEW ]</span>
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F2F2F0] tracking-tight uppercase mb-3">
              {cs.whyHeader}
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8A8A86]">
              Understanding the human problem and core objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <p className="font-sans text-lg sm:text-xl text-[#8A8A86] leading-relaxed">
                {cs.overview[0]}
              </p>
              <div className="p-6 bg-[#090909] border-l-2 border-l-[#A6B84A] border-y border-r border-[#242424] rounded-[2px]">
                <p className="font-heading font-extrabold text-xl sm:text-2xl text-[#F2F2F0] uppercase tracking-tight mb-2">
                  "{cs.heroStatement}"
                </p>
                <p className="font-sans text-xs sm:text-sm text-[#8A8A86] leading-relaxed">
                  {cs.solution}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#090909] border border-[#242424] p-6 rounded-[2px]">
              <span className="font-mono text-xs text-[#A6B84A] font-bold block mb-2 uppercase">PROBLEM FOCUS</span>
              <p className="font-sans text-xs sm:text-sm text-[#8A8A86] leading-relaxed">
                {cs.problem}
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================
            SECTION 02 — WHAT'S INSIDE (CAPABILITIES)
            ================================================== */}
        <section className="flex flex-col gap-10 pb-16 border-b border-[#242424]">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] mb-2 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7F000]" />
              <span>[ 02 // CAPABILITIES ]</span>
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F2F2F0] tracking-tight uppercase mb-3">
              WHAT'S INSIDE
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8A8A86]">
              A quick look at what the product enables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cs.features.map((feature, idx) => (
              <div 
                key={idx}
                className="p-6 bg-[#090909] border border-[#242424] rounded-[2px] flex flex-col justify-between group hover:border-[#3A3A32] hover:bg-[#0D0D0D] transition-all"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-xs font-bold text-[#A6B84A] group-hover:translate-x-1 transition-transform">
                    0{idx + 1}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#242424] group-hover:bg-[#A6B84A] transition-colors" />
                </div>
                <h3 className="font-heading font-extrabold text-lg text-[#F2F2F0] uppercase tracking-tight group-hover:translate-x-0.5 transition-transform mb-2">
                  {feature.name}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#8A8A86] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            SECTION 03 — HOW IT WORKS (PRODUCT FLOW)
            ================================================== */}
        <section className="flex flex-col gap-10 pb-16 border-b border-[#242424]">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] mb-2 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7F000]" />
              <span>[ 03 // PRODUCT FLOW ]</span>
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F2F2F0] tracking-tight uppercase mb-3">
              HOW IT WORKS
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8A8A86]">
              The step-by-step user journey across the application.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {processFlow.map((step, idx) => (
              <div key={idx} className="bg-[#090909] border border-[#242424] p-5 rounded-[2px] flex flex-col justify-between group hover:border-[#3A3A32] transition-all relative">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-base font-extrabold text-[#A6B84A] group-hover:scale-110 transition-transform">
                    {step.num}
                  </span>
                  {idx < processFlow.length - 1 && (
                    <span className="hidden lg:inline text-[#A6B84A] text-xs font-mono">→</span>
                  )}
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-base text-[#F2F2F0] uppercase tracking-tight mb-1 group-hover:translate-x-0.5 transition-transform">
                    {step.title}
                  </h4>
                  <p className="font-sans text-xs text-[#8A8A86]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            SECTION 04 — UNDER THE HOOD (ENGINEERING)
            ================================================== */}
        <section className="flex flex-col gap-10 pb-16 border-b border-[#242424]">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] mb-2 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7F000]" />
              <span>[ 04 // ENGINEERING ]</span>
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F2F2F0] tracking-tight uppercase mb-3">
              UNDER THE HOOD
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8A8A86]">
              Frontend, backend, and data services working together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cs.technology.map((tech, idx) => (
              <div key={idx} className="bg-[#090909] border border-[#242424] p-8 rounded-[2px] group hover:border-[#3A3A32] transition-colors">
                <span className="font-mono text-xs text-[#A6B84A] font-bold block mb-3 uppercase tracking-wider">
                  {tech.name}
                </span>
                <p className="font-sans text-sm text-[#8A8A86] leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            SECTION 05 — MY ROLE (CONTRIBUTION)
            ================================================== */}
        <section className="flex flex-col gap-10 pb-16 border-b border-[#242424]">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] mb-2 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7F000]" />
              <span>[ 05 // CONTRIBUTION ]</span>
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F2F2F0] tracking-tight uppercase mb-3">
              MY ROLE
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8A8A86]">
              Personal developer contributions and core feature implementations.
            </p>
          </div>

          <p className="font-sans text-base text-[#8A8A86] max-w-3xl leading-relaxed">
            Working as a {project.role}, I contributed across the application to build reliable workflows and core features.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cs.contribution.map((item, idx) => (
              <div key={idx} className="bg-[#090909] border border-[#242424] p-6 rounded-[2px] flex flex-col justify-between group hover:border-[#3A3A32] transition-colors">
                <div className="font-mono text-xs text-[#A6B84A] font-bold mb-3 uppercase tracking-wider">
                  {item.title}
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#8A8A86] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            SECTION 06 — PROJECT OUTCOME (RECOGNITION)
            ================================================== */}
        <section className="flex flex-col gap-10 pb-16">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] mb-2 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7F000]" />
              <span>[ 06 // RECOGNITION ]</span>
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F2F2F0] tracking-tight uppercase mb-3">
              PROJECT OUTCOME
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8A8A86]">
              Milestones, awards, and showcase presentation.
            </p>
          </div>

          <div className="bg-[#090909] border border-[#242424] p-8 sm:p-12 rounded-[2px] flex flex-col gap-4">
            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#F2F2F0] uppercase tracking-tight">
              {cs.outcomeTitle}
            </h3>

            <p className="font-sans text-sm sm:text-base text-[#8A8A86] max-w-3xl leading-relaxed">
              {cs.outcome}
            </p>
          </div>
        </section>

        {/* ==================================================
            SECTION 07 — EXPLORE MORE (ARCHIVE NAVIGATION)
            ================================================== */}
        <footer className="pt-12 border-t border-[#242424] flex flex-col gap-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] mb-2 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7F000]" />
              <span>[ 07 // ARCHIVE NAVIGATION ]</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#F2F2F0] tracking-tight uppercase mb-2">
              EXPLORE MORE
            </h2>
            <p className="font-sans text-sm text-[#8A8A86]">
              More projects from the portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <button 
              onClick={() => onNavigateNext(prevProject.slug)}
              className="p-5 bg-[#090909] border border-[#242424] text-[#8A8A86] hover:text-[#A6B84A] hover:border-[#3A3A32] rounded-[2px] transition-all flex items-center justify-between group"
            >
              <span>← PREVIOUS: {prevProject.name}</span>
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
            </button>

            <button 
              onClick={() => onNavigateNext(nextProject.slug)}
              className="p-5 bg-[#090909] border border-[#242424] text-[#A6B84A] font-bold hover:bg-[#A6B84A] hover:text-[#050505] hover:border-[#A6B84A] rounded-[2px] transition-all flex items-center justify-between group"
            >
              <span>NEXT: {nextProject.name} →</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </footer>

      </main>
    </div>
  );
}
