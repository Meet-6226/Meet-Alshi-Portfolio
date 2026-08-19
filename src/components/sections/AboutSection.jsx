export default function AboutSection() {
  const skillCategories = [
    {
      num: '01',
      title: 'LANGUAGES',
      items: ['JavaScript', 'Java', 'Python', 'C++'],
    },
    {
      num: '02',
      title: 'FRONTEND',
      items: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
      num: '03',
      title: 'BACKEND',
      items: ['Node.js', 'Express.js', 'REST APIs'],
    },
    {
      num: '04',
      title: 'DATABASE',
      items: ['MongoDB', 'PostgreSQL', 'Firebase'],
    },
    {
      num: '05',
      title: 'TOOLS & CLOUD',
      items: ['Git', 'GitHub', 'AWS', 'Docker'],
    },
    {
      num: '06',
      title: 'AI / CREATIVE',
      items: ['Gemini API', 'Three.js', 'GSAP'],
    },
  ];

  return (
    <section id="about" className="py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-[#242424] bg-[#050505] text-[#F2F2F0]">
      
      {/* Editorial Header & Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] mb-4 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#B7F000]" />
            <span>[ 01 // ABOUT ]</span>
          </div>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F2F2F0] tracking-tight leading-[1.05] uppercase">
            COMPUTER SCIENCE <br className="hidden sm:inline" />
            STUDENT & <br className="hidden sm:inline" />
            DEVELOPER
          </h2>
        </div>

        {/* Right Column: Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-end gap-6 text-[#8A8A86] text-base sm:text-lg leading-relaxed font-sans border-l border-[#242424] pl-0 sm:pl-8 lg:pl-12">
          <p>
            I am a Computer Science student at ITM Skills University (2024–2028) focused on full-stack development, real-world product engineering, and AI integration.
          </p>
          <p>
            I learn by building software, participating in hackathons, and collaborating in team environments. Most of my technical progression comes from turning practical ideas into working applications across fintech, healthcare, and real-time campus safety.
          </p>
        </div>
      </div>

      {/* Structured Technical Stack Specification */}
      <div className="flex flex-col gap-6">
        
        {/* Section Title & Subtitle Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end pb-6 border-b border-[#242424] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] mb-2 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7F000]" />
              <span>[ TECHNICAL STACK ]</span>
            </div>
            <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#F2F2F0] tracking-tight uppercase">
              TOOLS I USE TO BUILD
            </h3>
          </div>
          <span className="font-mono text-xs text-[#8A8A86] uppercase tracking-widest">
            CATEGORIZED SKILLS OVERVIEW
          </span>
        </div>

        {/* 6-Category Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.num} className="bg-[#090909] border border-[#242424] p-7 rounded-[2px] flex flex-col justify-between group hover:border-[#3A3A32] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#242424]">
                  <h4 className="font-heading font-extrabold text-lg text-[#F2F2F0] uppercase tracking-tight">
                    {cat.title}
                  </h4>
                  <span className="font-mono text-xs font-bold text-[#A6B84A]">[{cat.num}]</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, idx) => (
                    <span 
                      key={idx}
                      className="font-mono text-xs bg-[#080808] border border-[#242424] text-[#8A8A86] px-3 py-1.5 rounded-[2px] group-hover:text-[#F2F2F0] transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
