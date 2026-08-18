export default function AboutSection() {
  const skills = [
    { category: 'Frontend Architecture', items: ['React', 'Next.js', 'Three.js / WebGL', 'Tailwind CSS', 'TypeScript'] },
    { category: 'Backend & Systems', items: ['Node.js', 'Python', 'Distributed Systems', 'Express', 'REST & GraphQL'] },
    { category: 'Databases & Cloud', items: ['Cloud Firestore', 'MongoDB', 'Firebase', 'PostgreSQL', 'Docker'] },
    { category: 'AI & Performance', items: ['Gemini API', 'Vector Embeddings', 'Core Web Vitals', 'GSAP Animations'] },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-black/10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        
        {/* Left Column: Heading */}
        <div className="md:w-1/3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#666666] uppercase tracking-[0.25em] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B8F500]" />
            <span>[ 01 // ABOUT ]</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#111111] tracking-tight leading-tight">
            ENGINEERING DIGITAL EXPERIENCES
          </h2>
        </div>

        {/* Right Column: Bio */}
        <div className="md:w-2/3 flex flex-col gap-6 text-[#444444] text-base md:text-lg leading-relaxed">
          <p className="font-sans">
            I am a full-stack engineer passionate about building high-performance web applications, scalable distributed systems, and immersive 3D web interfaces. My work bridges technical rigor with refined architectural aesthetics.
          </p>
          <p className="font-sans">
            From architecting real-time emergency dispatch platforms to developing AI-assisted financial trading tools and high-throughput search engines, I craft software that delivers measurable impact.
          </p>
        </div>
      </div>

      {/* Technical Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-black/10">
        {skills.map((group, idx) => (
          <div key={idx} className="bg-[#E8E7E2] p-6 rounded-[4px] border border-black/5 flex flex-col justify-between">
            <h3 className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider mb-4 border-b border-black/10 pb-2">
              {group.category}
            </h3>
            <ul className="flex flex-col gap-2">
              {group.items.map((item, itemIdx) => (
                <li key={itemIdx} className="font-sans text-sm text-[#444444] flex items-center gap-2">
                  <span className="text-[#B8F500] font-bold">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
