export default function AboutSection() {
  const coreCategories = [
    {
      num: '01',
      title: 'PROGRAMMING & WEB',
      items: ['JavaScript', 'Java', 'Python', 'C++', 'HTML / CSS'],
    },
    {
      num: '02',
      title: 'FRONTEND',
      items: ['React', 'Next.js', 'Tailwind CSS', 'Responsive Design', 'UI/UX'],
    },
    {
      num: '03',
      title: 'BACKEND & DATABASES',
      items: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'REST APIs', 'Firestore'],
    },
  ];

  const toolsAndCloud = [
    'Git', 'GitHub', 'AWS', 'Docker', 'Vercel', 'Netlify'
  ];

  const currentlyExploring = [
    'AI / ML', 'Distributed Systems', 'Cloud Architecture'
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
            I am a Computer Science student and Full-Stack Developer passionate about building practical web applications, full-stack systems, and AI-assisted products.
          </p>
          <p>
            From developing real-time campus safety platforms and OPD management solutions to engineering financial literacy platforms and MERN stack applications, I focus on writing clean code and solving real-world problems.
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
            CORE SKILLS & TECHNOLOGIES
          </span>
        </div>

        {/* Row 1: 3-Column Grid for Programming, Frontend, Backend & Databases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreCategories.map((cat) => (
            <div key={cat.num} className="bg-[#090909] border border-[#242424] p-8 rounded-[2px] flex flex-col justify-between group hover:border-[#3A3A32] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#242424]">
                  <h4 className="font-heading font-extrabold text-lg text-[#F2F2F0] uppercase tracking-tight">
                    {cat.title}
                  </h4>
                  <span className="font-mono text-xs font-bold text-[#A6B84A]">[{cat.num}]</span>
                </div>

                <ul className="flex flex-col gap-3 font-sans text-sm text-[#8A8A86]">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-center justify-between group/item">
                      <span className="group-hover/item:text-[#F2F2F0] transition-colors font-medium">{item}</span>
                      <span className="font-mono text-[11px] text-[#5F5F5B] group-hover/item:text-[#A6B84A] transition-colors">0{idx + 1}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Full-Width Card for Tools & Cloud */}
        <div className="bg-[#090909] border border-[#242424] p-8 rounded-[2px] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-[#3A3A32] transition-colors">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#A6B84A]">[04]</span>
            <h4 className="font-heading font-extrabold text-lg text-[#F2F2F0] uppercase tracking-tight">
              TOOLS & CLOUD
            </h4>
          </div>

          <div className="flex flex-wrap gap-3">
            {toolsAndCloud.map((tool, idx) => (
              <span 
                key={idx}
                className="font-mono text-xs bg-[#080808] border border-[#242424] text-[#F2F2F0] px-4 py-2 rounded-[2px] hover:border-[#A6B84A] hover:text-[#A6B84A] transition-all"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Row 3: Subtle Separate Row for Currently Exploring */}
        <div className="bg-[#070707] border border-[#242424]/60 p-6 rounded-[2px] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3 font-mono text-xs text-[#8A8A86] uppercase tracking-wider">
            <span className="text-[#A6B84A] font-bold">[05]</span>
            <span className="font-semibold text-[#8A8A86]">CURRENTLY EXPLORING:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {currentlyExploring.map((topic, idx) => (
              <span 
                key={idx}
                className="font-mono text-xs bg-[#090909] border border-[#242424] text-[#8A8A86] px-3.5 py-1.5 rounded-[2px]"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
