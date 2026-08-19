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
        { opacity: 1, y: 0, duration: 0.4, delay: 0.1, ease: 'power3.out' }
      );
    }
  }, [projectSlug]);

  // Domain-specific Process Flow Steps
  const getProcessFlow = () => {
    if (project.id === 'spendr') {
      return [
        { num: '01', title: 'TRACK', actor: 'User Budgeting', detail: 'Income & expense parameters synced' },
        { num: '02', title: 'LEARN', actor: 'Gamified Modules', detail: 'Financial concepts unlocked' },
        { num: '03', title: 'ASK', actor: 'AI Advisor', detail: 'Stock insights & pros/cons generated' },
        { num: '04', title: 'PRACTICE', actor: 'Paper Trading', detail: 'Simulated market decisions executed' },
        { num: '05', title: 'REWARD', actor: 'Virtual Coin Store', detail: 'Milestone rewards claimed' }
      ];
    } else if (project.id === 'aayu-opd') {
      return [
        { num: '01', title: 'REGISTER', actor: 'Patient Onboarding', detail: 'Digital profile & history recorded' },
        { num: '02', title: 'SCHEDULE', actor: 'Doctor Availability', detail: 'Appointment queue slot booked' },
        { num: '03', title: 'CONSULT', actor: 'Doctor Evaluation', detail: 'Medical consultation conducted' },
        { num: '04', title: 'PRESCRIBE', actor: 'Digital Prescription', detail: 'Electronic record issued & stored' }
      ];
    } else if (project.id === 'campuscare') {
      return [
        { num: '01', title: 'TRIGGER SOS', actor: 'Student Emergency', detail: 'One-touch SOS button pressed' },
        { num: '02', title: 'LOCATION', actor: 'Geolocation API', detail: 'Live GPS coordinates captured' },
        { num: '03', title: 'NOTIFY FCM', actor: 'Cloud Messaging', detail: 'Push notification sent to security' },
        { num: '04', title: 'RESPOND', actor: 'Security Dashboard', detail: 'Live incident resolution tracked' }
      ];
    } else {
      return [
        { num: '01', title: 'BOOK HALL', actor: 'Venue Reservation', detail: 'Date & hall availability locked' },
        { num: '02', title: 'SCHEDULE', actor: 'Event Timetable', detail: 'Function timeline configured' },
        { num: '03', title: 'CATERING', actor: 'Menu Selection', detail: 'Catering logistics package chosen' },
        { num: '04', title: 'BILLING', actor: 'Invoice Engine', detail: 'Automated expense summary generated' }
      ];
    }
  };

  const processFlow = getProcessFlow();

  // Project Specific Reflections
  const getReflection = () => {
    if (project.id === 'spendr') {
      return "Building Spendr made me realize that financial education isn't just about showing numbers — it's about giving users a risk-free environment to practice and learn.";
    } else if (project.id === 'aayu-opd') {
      return "Building a healthcare workflow made me think beyond individual features — every screen had to connect smoothly to the next step.";
    } else if (project.id === 'campuscare') {
      return "Building real-time emergency dispatch taught me how critical low latency and reliable state synchronization are when seconds count for safety.";
    } else {
      return "Designing a business management system showed me how connecting booking calendars, catering, and billing into one flow removes operational friction.";
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F2F2F0] font-sans relative selection:bg-[#A6B84A] selection:text-[#050505] pb-28">
      
      {/* GSAP Top Accent Line */}
      <div 
        ref={transitionLineRef} 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#A6B84A] z-50 pointer-events-none" 
      />

      {/* Main Container with Restrained Spacing */}
      <main ref={containerRef} className="max-w-6xl mx-auto px-6 md:px-12 pt-28 flex flex-col gap-20">
        
        {/* ==================================================
            HERO — DOMINANT TITLE + SUBTLE TECHNICAL ARTIFACT
            ================================================== */}
        <section className="border-b border-[#242424] pb-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Hero Title & Metadata */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] tracking-[0.25em] uppercase font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B7F000]" />
                  <span>PROJECT {project.num} // {project.category}</span>
                </div>

                <button 
                  onClick={onClose}
                  className="font-mono text-xs text-[#8A8A86] hover:text-[#A6B84A] transition-colors uppercase tracking-widest font-semibold flex items-center gap-2"
                >
                  <span>← BACK TO PROJECTS</span>
                </button>
              </div>

              {/* Dominant Focal Title: Restrained 80-90px desktop */}
              <h1 className="font-heading font-extrabold text-5xl sm:text-7xl lg:text-[88px] text-[#F2F2F0] tracking-tight uppercase leading-[0.95] mb-5">
                {project.name}
              </h1>

              {/* Restrained Supporting Statement */}
              <p className="font-sans text-xl sm:text-2xl text-[#F2F2F0] font-medium max-w-xl leading-snug mb-8">
                "{cs.heroStatement}"
              </p>
            </div>

            {/* Compact Metadata Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#242424] font-mono text-xs uppercase">
              <div>
                <span className="text-[#5F5F5B] block mb-1">ROLE</span>
                <span className="text-[#F2F2F0] font-semibold">{project.role}</span>
              </div>
              <div>
                <span className="text-[#5F5F5B] block mb-1">TYPE</span>
                <span className="text-[#F2F2F0] font-semibold">{project.type}</span>
              </div>
              <div>
                <span className="text-[#5F5F5B] block mb-1">RESULT</span>
                <span className="text-[#A6B84A] font-bold">{project.status}</span>
              </div>
              <div>
                <span className="text-[#5F5F5B] block mb-1">YEAR</span>
                <span className="text-[#F2F2F0] font-semibold">{project.year}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Subtle Technical Artifact */}
          <div className="lg:col-span-5 bg-[#080808] border border-[#242424] p-7 rounded-[2px] shadow-lg flex flex-col justify-between h-[300px]">
            <div className="flex justify-between items-center font-mono text-[11px] text-[#8A8A86] border-b border-[#242424] pb-2.5 uppercase">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B7F000]" />
                <span className="text-[#A6B84A] font-bold">SYSTEM_SPEC</span>
              </div>
              <span className="text-[#5F5F5B]">{project.buildId}</span>
            </div>

            <div className="my-auto flex flex-col gap-2.5 font-mono text-xs text-[#8A8A86]">
              <div className="p-2.5 bg-[#090909] border border-[#242424] rounded-[2px] flex items-center justify-between">
                <span className="text-[#F2F2F0]">INTERFACE LAYER</span>
                <span className="text-[#A6B84A]">{project.techStack[0]}</span>
              </div>
              <div className="w-[1px] h-2 bg-[#A6B84A] mx-auto" />
              <div className="p-2.5 bg-[#090909] border border-[#242424] rounded-[2px] flex items-center justify-between">
                <span className="text-[#F2F2F0]">API DISPATCH ENGINE</span>
                <span className="text-[#A6B84A]">{project.techStack[1] || 'REST API'}</span>
              </div>
              <div className="w-[1px] h-2 bg-[#A6B84A] mx-auto" />
              <div className="p-2.5 bg-[#090909] border border-[#242424] rounded-[2px] flex items-center justify-between">
                <span className="text-[#F2F2F0]">DATA REPOSITORY</span>
                <span className="text-[#A6B84A]">{project.techStack[2] || 'DATABASE'}</span>
              </div>
            </div>

            <div className="flex justify-between items-center font-mono text-[11px] text-[#5F5F5B] pt-2.5 border-t border-[#242424] uppercase">
              <span>ARCHITECTURE VERIFIED</span>
              <span className="text-[#A6B84A]">● ACTIVE</span>
            </div>
          </div>

        </section>

        {/* ==================================================
            THE CHALLENGE & RESTRAINED CORE INSIGHT
            ================================================== */}
        <section className="flex flex-col gap-8 pb-14 border-b border-[#242424]">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] mb-2 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7F000]" />
              <span>[ 01 // THE PROBLEM ]</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[52px] text-[#F2F2F0] tracking-tight uppercase mb-2">
              THE CHALLENGE
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 flex flex-col gap-4">
              <p className="font-sans text-base sm:text-[18px] text-[#8A8A86] leading-relaxed">
                {cs.overview[0]}
              </p>
              <p className="font-sans text-base text-[#8A8A86] leading-relaxed">
                {cs.problem}
              </p>
            </div>

            {/* Restrained Core Insight Statement */}
            <div className="lg:col-span-5 bg-[#090909] border-l-2 border-l-[#A6B84A] border-y border-r border-[#242424] p-7 rounded-[2px]">
              <span className="font-mono text-xs text-[#A6B84A] font-bold block mb-2 uppercase tracking-wider">CORE INSIGHT</span>
              <p className="font-heading font-extrabold text-xl sm:text-2xl text-[#F2F2F0] uppercase tracking-tight leading-snug">
                {project.id === 'spendr' && '"Financial confusion stems from lack of safe practice before risking money."'}
                {project.id === 'aayu-opd' && '"Disconnected workflows create unnecessary friction for patients."'}
                {project.id === 'campuscare' && '"Emergency alerts without live coordinates slow down response times."'}
                {project.id === 'banquet-management-system' && '"Uncoordinated venue scheduling leads to double bookings."'}
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================
            WHAT'S INSIDE — RESTRAINED FEATURE CARDS
            ================================================== */}
        <section className="flex flex-col gap-8 pb-14 border-b border-[#242424]">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] mb-2 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7F000]" />
              <span>[ 02 // CAPABILITIES ]</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[52px] text-[#F2F2F0] tracking-tight uppercase mb-2">
              WHAT'S INSIDE
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8A8A86]">
              A quick breakdown of core product capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cs.features.map((feature, idx) => (
              <div 
                key={idx}
                className="p-6 bg-[#090909] border border-[#242424] rounded-[2px] flex flex-col justify-between group hover:border-[#3A3A32] hover:bg-[#0D0D0D] transition-all"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-sm font-bold text-[#A6B84A]">
                    0{idx + 1}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#242424] group-hover:bg-[#A6B84A] transition-colors" />
                </div>
                <h3 className="font-heading font-extrabold text-lg text-[#F2F2F0] uppercase tracking-tight mb-2">
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
            HOW IT WORKS — STEPPED USER JOURNEY
            ================================================== */}
        <section className="flex flex-col gap-8 pb-14 border-b border-[#242424]">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] mb-2 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7F000]" />
              <span>[ 03 // PRODUCT FLOW ]</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[52px] text-[#F2F2F0] tracking-tight uppercase mb-2">
              HOW IT WORKS
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8A8A86]">
              The step-by-step user journey across the application.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processFlow.map((step, idx) => (
              <div key={idx} className="bg-[#090909] border border-[#242424] p-5 rounded-[2px] flex flex-col justify-between group hover:border-[#3A3A32] transition-all">
                <div className="flex justify-between items-center mb-5">
                  <span className="font-mono text-base font-bold text-[#A6B84A]">
                    {step.num}
                  </span>
                  {idx < processFlow.length - 1 && (
                    <span className="hidden lg:inline text-[#A6B84A] text-xs font-mono">→</span>
                  )}
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-base text-[#F2F2F0] uppercase tracking-tight mb-1">
                    {step.title}
                  </h4>
                  <span className="font-mono text-[11px] text-[#A6B84A] block mb-1.5">{step.actor}</span>
                  <p className="font-sans text-xs text-[#8A8A86] leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            UNDER THE HOOD — TECHNICAL PILLARS
            ================================================== */}
        <section className="flex flex-col gap-8 pb-14 border-b border-[#242424]">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] mb-2 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7F000]" />
              <span>[ 04 // ENGINEERING ]</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[52px] text-[#F2F2F0] tracking-tight uppercase mb-2">
              UNDER THE HOOD
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8A8A86]">
              System architecture relationships and technology pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cs.technology.map((tech, idx) => (
              <div key={idx} className="bg-[#090909] border border-[#242424] p-7 rounded-[2px] group hover:border-[#3A3A32] transition-colors">
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
            MY ROLE — PERSONAL CONTRIBUTIONS
            ================================================== */}
        <section className="flex flex-col gap-8 pb-14 border-b border-[#242424]">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] mb-2 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7F000]" />
              <span>[ 05 // CONTRIBUTION ]</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[52px] text-[#F2F2F0] tracking-tight uppercase mb-2">
              MY ROLE
            </h2>
            <p className="font-sans text-base text-[#8A8A86]">
              Personal developer contributions and core implementations.
            </p>
          </div>

          <p className="font-sans text-base text-[#F2F2F0] font-medium max-w-3xl leading-relaxed">
            "I worked across the product rather than owning a single layer, ensuring frontend components and backend API models connected reliably."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cs.contribution.map((item, idx) => (
              <div key={idx} className="bg-[#090909] border border-[#242424] p-6 rounded-[2px] flex flex-col justify-between group hover:border-[#3A3A32] transition-colors">
                <div className="font-mono text-xs text-[#A6B84A] font-bold mb-2 uppercase tracking-wider">
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
            PROJECT RESULT & REFLECTION
            ================================================== */}
        <section className="flex flex-col gap-8 pb-14">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] mb-2 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7F000]" />
              <span>[ 06 // OUTCOME & REFLECTION ]</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[52px] text-[#F2F2F0] tracking-tight uppercase mb-2">
              PROJECT RESULT
            </h2>
          </div>

          {/* Refined Prestigious Achievement Block */}
          <div className="bg-[#090909] border border-[#242424] p-8 sm:p-10 rounded-[2px] flex flex-col gap-4">
            <span className="font-mono text-xs text-[#A6B84A] uppercase tracking-widest font-bold">RESULT</span>
            
            <h3 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#F2F2F0] uppercase tracking-tight">
              {cs.outcomeTitle}
            </h3>

            <p className="font-sans text-base text-[#8A8A86] max-w-2xl leading-relaxed">
              {cs.outcome}
            </p>

            {/* Restrained Personal Reflection */}
            <div className="mt-4 pt-5 border-t border-[#242424] font-sans text-sm text-[#F2F2F0] italic max-w-xl leading-relaxed">
              <span className="font-mono text-xs text-[#A6B84A] uppercase not-italic block mb-1 font-semibold font-mono">
                WHAT I LEARNED
              </span>
              "{getReflection()}"
            </div>
          </div>
        </section>

        {/* ==================================================
            NEXT PROJECT TRANSITION
            ================================================== */}
        <footer className="pt-10 border-t border-[#242424] flex flex-col gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] mb-2 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7F000]" />
              <span>[ 07 // EXPLORE MORE ]</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#F2F2F0] tracking-tight uppercase mb-1">
              CONTINUE EXPLORING
            </h2>
            <p className="font-sans text-sm text-[#8A8A86]">
              Explore the next build in the portfolio archive.
            </p>
          </div>

          {/* Next Project Invitation Card */}
          <div 
            onClick={() => onNavigateNext(nextProject.slug)}
            className="bg-[#090909] border border-[#242424] p-7 rounded-[2px] hover:border-[#A6B84A] transition-all cursor-pointer group flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
          >
            <div>
              <span className="font-mono text-xs text-[#A6B84A] font-bold block mb-1">NEXT PROJECT →</span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#F2F2F0] uppercase tracking-tight group-hover:translate-x-1 transition-transform">
                {nextProject.name}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#8A8A86] mt-0.5">
                {nextProject.tagline}
              </p>
            </div>

            <button 
              type="button"
              className="px-6 py-3.5 bg-[#A6B84A] text-[#050505] font-mono text-xs font-bold uppercase tracking-widest rounded-[2px] group-hover:bg-[#B7F000] group-hover:translate-x-1 transition-all shrink-0"
            >
              EXPLORE PROJECT →
            </button>
          </div>
        </footer>

      </main>
    </div>
  );
}
