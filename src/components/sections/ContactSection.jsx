export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-black/10">
      
      <div className="bg-[#151515] text-[#F2F1ED] p-10 md:p-16 rounded-[4px] shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden">
        
        {/* Left Column */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#B8F500] uppercase tracking-[0.25em] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B8F500] animate-pulse" />
            <span>[ 05 // CONTACT ]</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight leading-tight mb-4">
            LET'S BUILD SOMETHING.
          </h2>
          <p className="font-sans text-[#A0A0A0] text-base leading-relaxed">
            Open for full-stack engineering roles, technical architecture projects, and high-impact software collaborations.
          </p>
        </div>

        {/* Right Column: CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <a
            href="mailto:meetalshi@gmail.com"
            className="px-6 py-3.5 bg-[#B8F500] text-[#111111] font-mono text-xs font-bold uppercase tracking-wider rounded-[2px] hover:bg-white transition-all text-center"
          >
            GET IN TOUCH →
          </a>
          <a
            href="#resume"
            className="px-6 py-3.5 bg-transparent border border-white/20 text-[#F2F1ED] font-mono text-xs font-semibold uppercase tracking-wider rounded-[2px] hover:border-white transition-all text-center"
          >
            DOWNLOAD RESUME
          </a>
        </div>

      </div>

      {/* Footer Copyright */}
      <div className="mt-16 pt-8 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-[#888888] gap-4">
        <div>MEET ALSHI · FULL-STACK DEVELOPER</div>
        <div>2026 ARCHITECTURAL PORTFOLIO</div>
      </div>

    </section>
  );
}
