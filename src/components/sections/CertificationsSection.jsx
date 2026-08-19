export default function CertificationsSection() {
  const honors = [
    {
      num: '01',
      category: 'HACKATHON / PROJECT ACHIEVEMENT',
      project: 'AAYU-OPD',
      title: '1ST RUNNER-UP',
      description: 'Outpatient department management system focused on patient registration, doctor scheduling and digital prescriptions.',
    },
  ];

  return (
    <section id="certifications" className="py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-[#242424] bg-[#050505] text-[#F2F2F0]">
      
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 pb-8 border-b border-[#242424]">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B7F000]" />
            <span>[ 03 // RECOGNITION ]</span>
          </div>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F2F2F0] tracking-tight uppercase">
            HONORS & ACHIEVEMENTS
          </h2>
        </div>
      </div>

      {/* Recognition Ledger Archive */}
      <div className="divide-y divide-[#242424] border-y border-[#242424]">
        {honors.map((item) => (
          <div 
            key={item.num}
            className="py-10 px-4 sm:px-8 border-l-2 border-l-transparent hover:border-l-[#A6B84A] hover:bg-[#090909] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start lg:items-center group rounded-[2px]"
          >
            {/* Left Column: Number Marker */}
            <div className="lg:col-span-1 font-mono text-sm font-bold text-[#A6B84A]">
              [{item.num}]
            </div>

            {/* Center Column: Achievement Details */}
            <div className="lg:col-span-7 flex flex-col gap-1.5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#A6B84A] tracking-widest uppercase font-semibold">
                  {item.project}
                </span>
                <span className="text-[#5F5F5B]">•</span>
                <span className="font-mono text-xs text-[#8A8A86] tracking-wider uppercase">
                  {item.category}
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#F2F2F0] tracking-tight uppercase group-hover:translate-x-1 transition-transform">
                {item.title}
              </h3>
              
              <p className="font-sans text-xs sm:text-sm text-[#8A8A86] leading-relaxed mt-0.5">
                {item.description}
              </p>
            </div>

            {/* Right Column: Organization */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col items-center lg:items-end justify-between font-mono text-xs text-[#8A8A86] uppercase tracking-wider pt-4 lg:pt-0 border-t lg:border-t-0 border-[#242424] gap-2">
              <span className="text-[#8A8A86] text-left lg:text-right font-medium">PROJECT COMPETITION</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
