import { PROJECTS } from '../../data/projects';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-black/10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#666666] uppercase tracking-[0.25em] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B8F500]" />
            <span>[ 02 // FEATURED BUILDS ]</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#111111] tracking-tight">
            PROJECT ARCHIVE
          </h2>
        </div>
        <p className="font-mono text-xs text-[#666666] uppercase tracking-widest">
          2024 — 2026 · SELECTED WORK
        </p>
      </div>

      {/* Projects 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            className="bg-[#111214] border border-white/10 p-8 rounded-[4px] shadow-2xl flex flex-col justify-between h-[360px] group transition-all duration-300 hover:border-[#B8F500]/60 relative overflow-hidden"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center font-mono text-xs text-[#A0A0A0] uppercase border-b border-white/10 pb-4">
              <span className="text-[#B8F500] font-bold tracking-widest">{project.buildId}</span>
              <span className="tracking-widest text-[#A0A0A0] font-semibold">{project.category}</span>
            </div>

            {/* Main Content */}
            <div className="flex flex-col gap-3 my-auto z-10">
              <h3 className="font-heading font-bold text-3xl md:text-4xl text-[#F1F0EB] tracking-tight group-hover:text-white transition-colors">
                {project.name}
              </h3>
              <p className="font-sans text-sm md:text-base text-[#858887] leading-relaxed max-w-md">
                {project.tagline}
              </p>
            </div>

            {/* Footer Bar */}
            <div className="flex items-center justify-between font-mono text-xs pt-4 border-t border-white/10 z-10">
              <div className="flex gap-2 flex-wrap text-[#C0C0C0]">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="bg-white/10 px-2.5 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={`#${project.id}`}
                className="text-[#B8F500] font-mono text-xs tracking-widest font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>EXPLORE</span>
                <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
