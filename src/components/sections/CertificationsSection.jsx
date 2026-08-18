export default function CertificationsSection() {
  const honors = [
    {
      badge: 'HACKATHON 2025',
      title: '1ST PLACE WINNER',
      description: 'Full-Stack Innovation & Real-Time Architecture',
      issuer: 'National Student Portfolio Hackathon',
      date: '2025',
    },
    {
      badge: 'CERTIFIED ENGINEER',
      title: 'DISTRIBUTED SYSTEMS',
      description: 'Cloud Architecture, High-Throughput & Scalability',
      issuer: 'Systems & Distributed Computing Board',
      date: '2026',
    },
  ];

  return (
    <section id="certifications" className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-black/10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#666666] uppercase tracking-[0.25em] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B8F500]" />
            <span>[ 03 // RECOGNITION ]</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#111111] tracking-tight">
            HONORS & CERTIFICATIONS
          </h2>
        </div>
      </div>

      {/* Certificates Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {honors.map((item, idx) => (
          <div 
            key={idx}
            className="bg-[#F8F7F2] border border-black/10 p-8 rounded-[4px] shadow-sm flex flex-col justify-between h-[240px] text-center items-center hover:border-black/30 transition-all"
          >
            <span className="text-xs font-mono tracking-widest text-[#B8F500] uppercase font-bold bg-[#151515] px-3 py-1 rounded-[2px] mb-4">
              {item.badge}
            </span>
            <h3 className="text-2xl font-heading font-bold text-[#111111] mb-2">
              {item.title}
            </h3>
            <p className="text-sm font-sans text-[#666666] mb-4">
              {item.description}
            </p>
            <div className="text-xs font-mono text-[#888888] pt-3 border-t border-black/10 w-full flex justify-between">
              <span>{item.issuer}</span>
              <span>{item.date}</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
