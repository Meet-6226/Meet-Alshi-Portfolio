export default function JourneySection() {
  const milestones = [
    {
      num: '01',
      year: '2024',
      label: 'MILESTONE // 01',
      title: 'STARTED BUILDING FOR THE WEB',
      description: 'Started learning web development and building projects including Spendr, a financial literacy and AI paper trading platform.',
      active: false,
    },
    {
      num: '02',
      year: '2025',
      label: 'MILESTONE // 02',
      title: 'FULL-STACK DEVELOPMENT & COMPETITION',
      description: 'Built applications using React, Node.js, MongoDB and Firebase. Achieved 1st Runner-Up for AAYU-OPD and built CampusCare as a second-year examination project.',
      active: false,
    },
    {
      num: '03',
      year: '2026',
      label: 'MILESTONE // 03',
      title: 'EXPLORING AI & IMMERSIVE SYSTEMS',
      description: 'Working on AI-assisted applications, backend systems, and interactive 3D web experiences through my developer portfolio.',
      active: true,
    },
  ];

  return (
    <section id="journey" className="py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-[#242424] bg-[#050505] text-[#F2F2F0]">
      
      {/* Editorial Section Header */}
      <div className="mb-20">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] mb-3 font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#B7F000]" />
          <span>[ 04 // TIMELINE ]</span>
        </div>
        <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F2F2F0] tracking-tight uppercase mb-3">
          DEVELOPMENT JOURNEY
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#8A8A86]">
          My practical learning progression as a CS student and developer.
        </p>
      </div>

      {/* Clean Vertical Timeline Structure */}
      <div className="relative pl-6 sm:pl-32">
        {/* Vertical Timeline Wire Line */}
        <div className="absolute left-[7px] sm:left-[111px] top-4 bottom-4 w-[1px] bg-[#242424]" />

        <div className="flex flex-col gap-12">
          {milestones.map((m) => (
            <div key={m.num} className="relative flex flex-col sm:flex-row items-start gap-6 group">
              
              {/* Year Marker (Left Column) */}
              <div className="sm:absolute sm:-left-32 sm:w-24 text-left sm:text-right font-mono text-2xl font-extrabold tracking-tight text-[#A6B84A] flex items-center sm:justify-end gap-3 pt-1">
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
                  {m.label}
                </div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#F2F2F0] tracking-tight uppercase">
                  {m.title}
                </h3>
                <p className="font-sans text-sm text-[#8A8A86] mt-2 leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
