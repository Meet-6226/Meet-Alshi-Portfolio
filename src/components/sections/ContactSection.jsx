export default function ContactSection() {
  const socialLinks = [
    { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/meet-alshi/' },
    { name: 'GITHUB', url: 'https://github.com/Meet-6226' },
  ];

  return (
    <section id="contact" className="py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-[#242424] bg-[#050505] text-[#F2F2F0]">
      
      {/* System Terminal Call-To-Action Panel */}
      <div className="bg-[#090909] border border-[#242424] p-10 sm:p-16 rounded-[2px] shadow-2xl relative overflow-hidden mb-16">
        
        {/* Terminal Header Bar */}
        <div className="flex justify-between items-center font-mono text-xs text-[#8A8A86] uppercase pb-6 border-b border-[#242424] mb-10">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B7F000]" />
            <span className="text-[#A6B84A] font-bold tracking-widest">[ 05 // CONTACT ]</span>
          </div>
          <span className="hidden sm:inline text-[#5F5F5B]">SYSTEM DISPATCH // OPEN FOR ROLES</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          {/* Main Title & Description */}
          <div className="lg:col-span-8">
            <h2 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.0] text-[#F2F2F0] uppercase mb-6">
              LET'S BUILD <br />
              SOMETHING.
            </h2>
            <p className="font-sans text-[#8A8A86] text-base sm:text-lg max-w-xl leading-relaxed">
              Open for full-stack engineering roles, technical architecture projects, and high-impact software collaborations.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 w-full">
            <a
              href="mailto:meetalshi@gmail.com"
              className="px-8 py-4 bg-[#A6B84A] text-[#050505] font-mono text-xs font-bold uppercase tracking-widest rounded-[2px] hover:bg-[#B7F000] transition-all text-center shadow-lg"
            >
              GET IN TOUCH →
            </a>
            <a
              href="#resume"
              className="px-8 py-4 bg-[#080808] border border-[#242424] text-[#F2F2F0] font-mono text-xs font-semibold uppercase tracking-widest rounded-[2px] hover:bg-[#A6B84A] hover:text-[#050505] hover:border-[#A6B84A] transition-all text-center"
            >
              DOWNLOAD RESUME
            </a>
          </div>
        </div>

        {/* Compact Technical Social Links Strip inside Terminal Panel */}
        <div className="mt-12 pt-8 border-t border-[#242424]">
          <div className="font-mono text-xs text-[#8A8A86] uppercase tracking-widest mb-4">
            SOCIAL CHANNELS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md font-mono text-xs">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-[#080808] border border-[#242424] rounded-[2px] text-[#F2F2F0] hover:text-[#A6B84A] hover:border-[#A6B84A] transition-all group"
              >
                <span className="font-semibold tracking-wider group-hover:translate-x-1 transition-transform inline-block">
                  {social.name}
                </span>
                <span className="text-[#A6B84A] font-bold text-sm">↗</span>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Editorial Footer with LinkedIn & GitHub Links */}
      <div className="pt-8 border-t border-[#242424] flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-[#8A8A86] gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[#B7F000]">●</span>
          <span>MEET ALSHI · FULL-STACK DEVELOPER</span>
        </div>
        
        <div className="flex items-center gap-6">
          <span className="text-[#5F5F5B]">2026 ARCHITECTURAL PORTFOLIO</span>
          <span className="text-[#242424]">|</span>
          <a 
            href="https://www.linkedin.com/in/meet-alshi/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#A6B84A] transition-colors flex items-center gap-1 font-semibold"
          >
            LINKEDIN ↗
          </a>
          <a 
            href="https://github.com/Meet-6226" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#A6B84A] transition-colors flex items-center gap-1 font-semibold"
          >
            GITHUB ↗
          </a>
        </div>
      </div>

    </section>
  );
}
