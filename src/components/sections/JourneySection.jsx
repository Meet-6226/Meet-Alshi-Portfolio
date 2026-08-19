export default function JourneySection() {
  const milestones = [
    { year: '2024', role: 'FULL-STACK DEVELOPER', focus: 'Built Spendr financial budgeting & AI paper trading platform.', active: false },
    { year: '2025', role: 'SYSTEMS & REAL-TIME SPECIALIST', focus: 'Engineered CampusCare emergency response & MediCare predictive staffing.', active: false },
    { year: '2026', role: 'DISTRIBUTED SYSTEMS ARCHITECT', focus: 'Designed SearchX distributed inverted-index engine & modern 3D web applications.', active: true },
  ];

  return (
    <section id="journey" className="py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-[#242424] bg-[#050505] text-[#F2F2F0]">
      
      {/* Editorial Section Header */}
      <div className="mb-20">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#B7F000]" />
          <span>[ 04 // TIMELINE ]</span>
        </div>
        <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F2F2F0] tracking-tight uppercase">
          DEVELOPMENT JOURNEY
        </h2>
      </div>

      {/* Clean Vertical Timeline Structure */}
      <div className="relative pl-6 sm:pl-32">
        {/* Vertical Timeline Wire Line */}
        <div className="absolute left-[7px] sm:left-[111px] top-4 bottom-4 w-[1px] bg-[#242424]" />

        <div className="flex flex-col gap-16">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative flex flex-col sm:flex-row items-start gap-6 group">
              
              {/* Year Marker (Left Column) */}
              <div className="sm:absolute sm:-left-32 sm:w-24 text-left sm:text-right font-mono text-2xl font-extrabold tracking-tight text-[#A6B84A] flex items-center sm:justify-end gap-3">
                <span>{m.year}</span>
              </div>

              {/* Timeline Node Point */}
              <div className="absolute left-[-23px] sm:left-[-25px] top-2.5 w-3 h-3 rounded-full bg-[#050505] border-2 border-[#A6B84A] group-hover:border-[#A6B84A] group-hover:bg-[#A6B84A] transition-colors z-10">
                {m.active && (
                  <div className="absolute inset-0 rounded-full bg-[#B7F000] animate-ping opacity-75" />
                )}
              </div>

              {/* Milestone Details (Right Column) */}
              <div className="bg-[#090909] border border-[#242424] p-8 rounded-[2px] w-full group-hover:border-[#3A3A32] transition-colors">
                <div className="font-mono text-xs text-[#A6B84A] tracking-widest uppercase mb-2 font-semibold">
                  MILESTONE // 0{idx + 1}
                </div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#F2F2F0] tracking-tight uppercase">
                  {m.role}
                </h3>
                <p className="font-sans text-sm text-[#8A8A86] mt-2 leading-relaxed">
                  {m.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
