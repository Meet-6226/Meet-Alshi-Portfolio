import { PROJECTS, EXPERIMENTS } from '../../data/projects';

export default function ProjectsSection({ onOpenProject }) {
  return (
    <section id="projects" className="py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-[#242424] bg-[#050505] text-[#F2F2F0]">
      
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 pb-8 border-b border-[#242424]">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B7F000]" />
            <span>[ 02 // FEATURED BUILDS ]</span>
          </div>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F2F2F0] tracking-tight uppercase">
            SELECTED PROJECTS
          </h2>
        </div>
        <p className="font-mono text-xs text-[#8A8A86] uppercase tracking-widest">
          4 FEATURED BUILDS
        </p>
      </div>

      {/* Editorial 2-Column Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            onClick={() => onOpenProject && onOpenProject(project.slug)}
            className="bg-[#090909] border border-[#242424] p-8 rounded-[2px] flex flex-col justify-between h-[310px] group transition-all duration-300 hover:-translate-y-[3px] hover:border-[#3A3A32] relative overflow-hidden cursor-pointer shadow-none"
          >
            {/* Top Subtle Hover Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#A6B84A] transition-colors duration-300" />

            {/* Top Row: BUILD_001 & Category */}
            <div className="flex justify-between items-center font-mono text-xs uppercase pb-4 border-b border-[#242424]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B7F000] shrink-0" />
                <span className="text-[#A6B84A] font-bold tracking-widest">{project.buildId}</span>
              </div>
              <span className="tracking-widest text-[#8A8A86] font-medium">{project.category}</span>
            </div>

            {/* Main Content: Large Title & Tagline */}
            <div className="flex flex-col gap-2 my-auto">
              <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#F2F2F0] tracking-tight group-hover:text-white group-hover:translate-x-0.5 transition-transform uppercase">
                {project.name}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#8A8A86] leading-relaxed line-clamp-2">
                {project.tagline}
              </p>
            </div>

            {/* Bottom Row: Tech Tags & EXPLORE Action */}
            <div className="flex items-center justify-between font-mono text-xs pt-4 border-t border-[#242424]">
              <div className="flex gap-2 flex-wrap text-[#8A8A86]">
                {project.techStack.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="bg-[#080808] border border-[#242424] px-2.5 py-0.5 rounded-[2px] text-[11px] text-[#8A8A86]">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="bg-[#080808] border border-[#242424] px-2.5 py-0.5 rounded-[2px] text-[11px] text-[#8A8A86]">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>
              <button 
                type="button"
                className="text-[#F2F2F0] group-hover:text-[#A6B84A] font-mono text-xs tracking-widest font-bold flex items-center gap-1.5 ml-2 shrink-0 transition-colors"
              >
                <span>EXPLORE</span>
                <span className="text-[#A6B84A] group-hover:translate-x-1.5 transition-transform inline-block">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Sub-Section: Experiments & Hackathon Builds */}
      <div className="pt-12 border-t border-[#242424]">
        <div className="font-mono text-xs text-[#A6B84A] uppercase tracking-widest mb-6 font-semibold flex items-center gap-2">
          <span>[ EXPERIMENTS / HACKATHON BUILDS ]</span>
        </div>

        {EXPERIMENTS.map((exp) => (
          <div key={exp.id} className="bg-[#090909] border border-[#242424] p-8 rounded-[2px] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-[#8A8A86] mb-2 uppercase">
                <span className="text-[#A6B84A] font-bold">{exp.event}</span>
                <span>•</span>
                <span>{exp.type}</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-[#F2F2F0] uppercase tracking-tight mb-2">
                {exp.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#8A8A86] max-w-3xl leading-relaxed">
                {exp.description}
              </p>
            </div>

            <div className="flex gap-2 flex-wrap font-mono text-xs shrink-0">
              {exp.techStack.map((tech, idx) => (
                <span key={idx} className="bg-[#080808] border border-[#242424] px-3 py-1 rounded-[2px] text-xs text-[#F2F2F0]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
