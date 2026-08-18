import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useStore } from '../../utils/store';
import { PROJECTS } from '../../data/projects';

gsap.registerPlugin(useGSAP);

export default function SpendrCaseStudy() {
  const isCaseStudyOpen = useStore((state) => state.isCaseStudyOpen);
  const closeCaseStudy = useStore((state) => state.closeCaseStudy);
  const spendr = PROJECTS[0];
  const cs = spendr.caseStudy;
  const containerRef = useRef();

  useGSAP(() => {
    if (isCaseStudyOpen) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );
    }
  }, [isCaseStudyOpen]);

  if (!isCaseStudyOpen) return null;

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-50 bg-[#090A0A] text-primary overflow-y-auto font-sans"
    >
      {/* Sticky Header Navigation */}
      <header className="sticky top-0 z-20 bg-[#090A0A]/90 backdrop-blur-md border-b border-border/40 px-6 md:px-12 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3 font-mono text-xs text-primary-muted">
          <span className="text-accent font-semibold">{spendr.buildId}</span>
          <span>/</span>
          <span>{spendr.category}</span>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={closeCaseStudy}
            className="font-mono text-xs text-primary-muted hover:text-accent transition-colors uppercase tracking-wider flex items-center gap-1.5"
          >
            ← BACK TO WORK
          </button>
        </div>
      </header>

      {/* Main Editorial Container */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-20">
        
        {/* Title & Tagline */}
        <section className="border-b border-border/30 pb-12">
          <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-3">
            {spendr.buildId} • {spendr.year}
          </span>
          <h1 className="font-heading font-bold text-5xl md:text-7xl text-primary tracking-tight mb-6">
            {spendr.name}
          </h1>
          <p className="font-heading text-xl md:text-2xl text-primary-muted max-w-2xl leading-relaxed">
            {spendr.tagline}
          </p>
          <div className="flex flex-wrap gap-2 mt-8">
            {spendr.techStack.map((tech, i) => (
              <span key={i} className="font-mono text-xs bg-surface-secondary text-primary-muted px-3 py-1.5 rounded border border-border/40">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* 01 — Overview */}
        <section className="flex flex-col gap-4">
          <h2 className="font-mono text-xs text-accent uppercase tracking-widest">
            {cs.overview.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 pt-2">
            <div>
              <h3 className="font-heading font-semibold text-lg text-primary mb-2">What is it?</h3>
              <p className="text-primary-muted text-sm leading-relaxed">{cs.overview.what}</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg text-primary mb-2">Who is it for?</h3>
              <p className="text-primary-muted text-sm leading-relaxed">{cs.overview.who}</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg text-primary mb-2">Problem Solved</h3>
              <p className="text-primary-muted text-sm leading-relaxed">{cs.overview.problem}</p>
            </div>
          </div>
        </section>

        {/* 02 — Problem & 03 — Solution */}
        <section className="grid md:grid-cols-2 gap-12 bg-surface/50 border border-border/40 p-8 rounded-sm">
          <div>
            <h2 className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
              {cs.problem.title}
            </h2>
            <p className="text-primary-muted text-base leading-relaxed">{cs.problem.description}</p>
          </div>
          <div>
            <h2 className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
              {cs.solution.title}
            </h2>
            <p className="text-primary-muted text-base leading-relaxed">{cs.solution.description}</p>
          </div>
        </section>

        {/* 04 — My Contribution */}
        <section className="flex flex-col gap-4">
          <h2 className="font-mono text-xs text-accent uppercase tracking-widest">
            {cs.contribution.title}
          </h2>
          <ul className="flex flex-col gap-3 pt-2">
            {cs.contribution.details.map((item, i) => (
              <li key={i} className="flex gap-3 text-primary-muted text-base items-start">
                <span className="text-accent font-mono text-xs mt-1">0{i+1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 05 — Features */}
        <section className="flex flex-col gap-6">
          <h2 className="font-mono text-xs text-accent uppercase tracking-widest">
            05 — Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cs.features.map((f, i) => (
              <div key={i} className="bg-surface-secondary border border-border/40 p-6 rounded-sm">
                <h3 className="font-heading font-bold text-lg text-primary mb-2">{f.name}</h3>
                <p className="text-primary-muted text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 06 — Architecture */}
        <section className="flex flex-col gap-6 bg-surface-monitor border border-border/40 p-8 rounded-sm">
          <h2 className="font-mono text-xs text-accent uppercase tracking-widest">
            {cs.architecture.title}
          </h2>
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            {cs.architecture.nodes.map((node, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="bg-surface-secondary border border-border/60 text-primary px-4 py-2 rounded">
                  {node}
                </span>
                {i < cs.architecture.nodes.length - 1 && (
                  <span className="text-accent font-bold">→</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 07 — Technical Decisions */}
        <section className="flex flex-col gap-6">
          <h2 className="font-mono text-xs text-accent uppercase tracking-widest">
            07 — Technical Decisions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {cs.technicalDecisions.map((td, i) => (
              <div key={i} className="bg-surface border border-border/40 p-6 rounded-sm">
                <h3 className="font-mono text-sm text-accent font-bold mb-2">{td.decision}</h3>
                <p className="text-primary-muted text-sm leading-relaxed">{td.rationale}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 08 — Challenges & 09 — Results */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="font-mono text-xs text-accent uppercase tracking-widest">
              {cs.challenges.title}
            </h2>
            <p className="text-primary-muted text-sm leading-relaxed">{cs.challenges.description}</p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-mono text-xs text-accent uppercase tracking-widest">
              {cs.results.title}
            </h2>
            <div className="grid grid-cols-3 gap-4 pt-1">
              {cs.results.metrics.map((m, i) => (
                <div key={i} className="bg-surface-secondary p-4 rounded text-center border border-border/30">
                  <span className="font-heading font-bold text-xl text-primary block">{m.value}</span>
                  <span className="font-mono text-[10px] text-primary-muted uppercase block mt-1">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10 — Future Improvements */}
        <section className="flex flex-col gap-4 border-t border-border/30 pt-8">
          <h2 className="font-mono text-xs text-accent uppercase tracking-widest">
            {cs.futureImprovements.title}
          </h2>
          <ul className="list-disc list-inside text-primary-muted text-sm flex flex-col gap-2">
            {cs.futureImprovements.points.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
        </section>

        {/* Interview Notes Section */}
        <section className="bg-accent/10 border border-accent/30 p-8 rounded-sm flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
              ⚡ INTERVIEW NOTES — SPENDR
            </h2>
            <span className="text-[10px] font-mono text-accent/80 border border-accent/40 px-2 py-0.5 rounded">
              30-SEC RECRUITER CHEAT SHEET
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <span className="font-mono text-xs text-primary block mb-1">30-Second Pitch:</span>
              <p className="text-primary-muted text-xs leading-relaxed">{cs.interviewNotes.pitch}</p>
            </div>
            <div>
              <span className="font-mono text-xs text-primary block mb-1">Key Technical Challenge:</span>
              <p className="text-primary-muted text-xs leading-relaxed">{cs.interviewNotes.keyChallenge}</p>
            </div>
            <div>
              <span className="font-mono text-xs text-primary block mb-1">Key Architecture Decision:</span>
              <p className="text-primary-muted text-xs leading-relaxed">{cs.interviewNotes.keyDecision}</p>
            </div>
            <div>
              <span className="font-mono text-xs text-primary block mb-1">Biggest Lesson:</span>
              <p className="text-primary-muted text-xs leading-relaxed">{cs.interviewNotes.biggestLesson}</p>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <footer className="flex justify-between items-center border-t border-border/40 pt-12">
          <button onClick={closeCaseStudy} className="font-mono text-xs text-primary-muted hover:text-accent transition-colors">
            ← BACK TO WORK
          </button>
          <button onClick={closeCaseStudy} className="font-mono text-xs bg-accent text-background font-bold px-6 py-3 uppercase tracking-wider hover:bg-accent-hover transition-colors">
            CLOSE CASE STUDY
          </button>
        </footer>
      </main>
    </div>
  );
}
