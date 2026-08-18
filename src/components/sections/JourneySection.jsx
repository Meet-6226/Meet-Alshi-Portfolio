export default function JourneySection() {
  const milestones = [
    { year: '2024', role: 'Full-Stack Developer', focus: 'Built Spendr financial budgeting & AI paper trading platform.' },
    { year: '2025', role: 'Systems & Real-Time Specialist', focus: 'Engineered CampusCare emergency response & Medicare predictive staffing.' },
    { year: '2026', role: 'Distributed Systems Architect', focus: 'Designed SearchX distributed inverted-index engine & modern 3D web applications.' },
  ];

  return (
    <section id="journey" className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-black/10">
      
      {/* Section Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#666666] uppercase tracking-[0.25em] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#B8F500]" />
          <span>[ 04 // TIMELINE ]</span>
        </div>
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#111111] tracking-tight">
          DEVELOPMENT JOURNEY
        </h2>
      </div>

      {/* Timeline List */}
      <div className="flex flex-col gap-8">
        {milestones.map((m, idx) => (
          <div key={idx} className="bg-[#E8E7E2] p-8 rounded-[4px] border border-black/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <span className="font-mono text-2xl font-bold text-[#B8F500] bg-[#151515] px-4 py-2 rounded">
                {m.year}
              </span>
              <div>
                <h3 className="font-heading font-bold text-xl text-[#111111]">
                  {m.role}
                </h3>
                <p className="font-sans text-sm text-[#666666] mt-1">
                  {m.focus}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
