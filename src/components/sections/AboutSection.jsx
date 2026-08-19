export default function AboutSection() {
  const stackGroups = [
    {
      num: '01',
      category: 'FRONTEND ARCHITECTURE',
      items: ['React', 'Next.js', 'Three.js / WebGL', 'Tailwind CSS', 'TypeScript'],
    },
    {
      num: '02',
      category: 'BACKEND & SYSTEMS',
      items: ['Node.js', 'Python', 'Distributed Systems', 'Express', 'REST & GraphQL'],
    },
    {
      num: '03',
      category: 'DATA & CLOUD',
      items: ['Cloud Firestore', 'MongoDB', 'Firebase', 'PostgreSQL', 'Docker'],
    },
    {
      num: '04',
      category: 'AI & PERFORMANCE',
      items: ['Gemini API', 'Vector Embeddings', 'Core Web Vitals', 'GSAP Animations'],
    },
  ];

  return (
    <section id="about" className="py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-[#242424] bg-[#050505] text-[#F2F2F0]">
      
      {/* Editorial Header & Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B7F000]" />
            <span>[ 01 // ABOUT ]</span>
          </div>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F2F2F0] tracking-tight leading-[1.05] uppercase">
            ENGINEERING <br className="hidden sm:inline" />
            DIGITAL <br className="hidden sm:inline" />
            EXPERIENCES
          </h2>
        </div>

        {/* Right Column: Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-end gap-6 text-[#8A8A86] text-base sm:text-lg leading-relaxed font-sans border-l border-[#242424] pl-0 sm:pl-8 lg:pl-12">
          <p>
            I am a full-stack engineer passionate about building high-performance web applications, scalable distributed systems, and immersive 3D web interfaces. My work bridges technical rigor with refined architectural aesthetics.
          </p>
          <p>
            From architecting real-time emergency dispatch platforms to developing AI-assisted financial trading tools and high-throughput search engines, I craft software that delivers measurable impact.
          </p>
        </div>
      </div>

      {/* Single Wide Technical STACK / CAPABILITIES Specification Panel */}
      <div className="border border-[#242424] bg-[#090909] rounded-[2px] overflow-hidden">
        {/* Panel Top Title */}
        <div className="px-6 py-4 border-b border-[#242424] bg-[#070707] flex justify-between items-center font-mono text-xs text-[#8A8A86] uppercase tracking-wider">
          <span className="text-[#A6B84A] font-bold">SYSTEM CAPABILITIES // STACK SPECIFICATION</span>
          <span className="hidden sm:inline text-[#5F5F5B]">V2.6 CORE</span>
        </div>

        {/* 4 Vertical Columns Specification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#242424]">
          {stackGroups.map((group) => (
            <div key={group.num} className="p-8 flex flex-col justify-between group hover:bg-[#0D0D0D] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-[#A6B84A] tracking-widest">[ {group.num} ]</span>
                  <span className="w-1.5 h-1.5 bg-[#242424] group-hover:bg-[#A6B84A] transition-colors" />
                </div>
                <h3 className="font-mono text-xs font-bold text-[#F2F2F0] uppercase tracking-wider mb-6 pb-3 border-b border-[#242424]">
                  {group.category}
                </h3>
                <ul className="flex flex-col gap-3 font-mono text-xs text-[#8A8A86]">
                  {group.items.map((item, idx) => (
                    <li key={idx} className="flex items-center justify-between group/item">
                      <span className="group-hover/item:text-[#F2F2F0] transition-colors">{item}</span>
                      <span className="text-[#5F5F5B] group-hover/item:text-[#A6B84A] transition-colors">.0{idx + 1}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
