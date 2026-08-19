export default function CertificationsSection() {
  const achievements = [
    {
      num: '01',
      category: 'PROJECT COMPETITION ACHIEVEMENT',
      title: '1ST RUNNER-UP — AAYU-OPD',
      issuer: 'PROJECT COMPETITION',
      date: '2025',
      desc: 'Outpatient department management system recognized for streamlining patient registration, doctor scheduling, and digital prescription workflows.',
    },
    {
      num: '02',
      category: 'JOB SIMULATION / CERTIFICATION',
      title: 'AWS APAC — SOLUTIONS ARCHITECTURE',
      issuer: 'FORAGE',
      date: 'JUNE 2025',
      desc: 'Completed practical simulation on AWS cloud architectural patterns, infrastructure design, and hosting solutions.',
    },
    {
      num: '03',
      category: 'JOB SIMULATION / CERTIFICATION',
      title: 'GOLDMAN SACHS — SOFTWARE ENGINEERING',
      issuer: 'FORAGE',
      date: 'OCTOBER 2024',
      desc: 'Completed software engineering simulation covering backend data structures, algorithms, and security practices.',
    },
  ];

  return (
    <section id="certifications" className="py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-[#242424] bg-[#050505] text-[#F2F2F0]">
      
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 pb-8 border-b border-[#242424]">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] mb-3 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#B7F000]" />
            <span>[ 03 // RECOGNITION ]</span>
          </div>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F2F2F0] tracking-tight uppercase mb-3">
            ACHIEVEMENTS & CERTIFICATIONS
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#8A8A86]">
            Verified competition achievements and software engineering job simulations.
          </p>
        </div>
      </div>

      {/* Recognition Ledger Archive */}
      <div className="divide-y divide-[#242424] border-y border-[#242424]">
        {achievements.map((item) => (
          <div 
            key={item.num}
            className="py-8 px-4 sm:px-8 border-l-2 border-l-transparent hover:border-l-[#A6B84A] hover:bg-[#090909] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start lg:items-center group rounded-[2px]"
          >
            {/* Left Column: Number Marker */}
            <div className="lg:col-span-1 font-mono text-sm font-bold text-[#A6B84A]">
              [{item.num}]
            </div>

            {/* Center Column: Achievement Details */}
            <div className="lg:col-span-7 flex flex-col gap-1.5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#A6B84A] tracking-widest uppercase font-semibold">
                  {item.issuer}
                </span>
                <span className="text-[#5F5F5B]">•</span>
                <span className="font-mono text-xs text-[#8A8A86] tracking-wider uppercase">
                  {item.category}
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#F2F2F0] tracking-tight uppercase group-hover:translate-x-1 transition-transform">
                {item.title}
              </h3>
              
              <p className="font-sans text-xs sm:text-sm text-[#8A8A86] leading-relaxed mt-0.5">
                {item.desc}
              </p>
            </div>

            {/* Right Column: Date */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col items-center lg:items-end justify-between font-mono text-xs text-[#8A8A86] uppercase tracking-wider pt-4 lg:pt-0 border-t lg:border-t-0 border-[#242424] gap-2">
              <span className="font-bold text-[#F2F2F0] text-sm lg:text-base shrink-0">{item.date}</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
