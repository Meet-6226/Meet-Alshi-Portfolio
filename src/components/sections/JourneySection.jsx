export default function JourneySection() {
  const experiences = [
    {
      role: 'FULL-STACK DEVELOPER INTERN',
      company: 'HARI OM THALASSIC',
      type: 'Work Experience',
      period: '2025',
      desc: 'Worked as a Full-Stack Developer and contributed to building a CRM system using the MERN stack as part of a 5-member team. Developed backend REST APIs, MongoDB data schemas, and React frontend workflows.',
    },
  ];

  const communityEvents = [
    { name: 'MUMBAI HACKS 2025', type: 'Hackathon' },
    { name: 'BUILD & GROW AI HACKATHON 2025', type: 'Solo AI Stock Predictor' },
    { name: 'BUILD WITH AI / GOOGLE I/O EXTENDED', type: 'Developer Conference' },
    { name: 'AWS COMMUNITY DAY 2025', type: 'Cloud Conference' },
    { name: 'MUMBAI TECH WEEK 2026', type: 'Developer Summit' },
    { name: 'SMARTTECH ASIA 2026', type: 'Tech Expo' },
  ];

  return (
    <section id="journey" className="py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-[#242424] bg-[#050505] text-[#F2F2F0]">
      
      {/* Editorial Section Header */}
      <div className="mb-16 pb-8 border-b border-[#242424]">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] mb-3 font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#B7F000]" />
          <span>[ 04 // EXPERIENCE & COMMUNITY ]</span>
        </div>
        <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F2F2F0] tracking-tight uppercase mb-3">
          EXPERIENCE & HACKATHONS
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#8A8A86]">
          Real-world developer experience, hackathon experimentation, and active technical community involvement.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Work Experience */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <h3 className="font-mono text-xs font-bold text-[#A6B84A] uppercase tracking-widest flex items-center gap-2">
            <span>[ WORK EXPERIENCE ]</span>
          </h3>

          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-[#090909] border border-[#242424] p-8 rounded-[2px] hover:border-[#3A3A32] transition-colors">
              <div className="flex justify-between items-center font-mono text-xs text-[#8A8A86] mb-3">
                <span className="text-[#A6B84A] font-bold">{exp.company}</span>
                <span className="text-[#5F5F5B]">{exp.period}</span>
              </div>
              <h4 className="font-heading font-extrabold text-2xl text-[#F2F2F0] uppercase tracking-tight mb-3">
                {exp.role}
              </h4>
              <p className="font-sans text-sm text-[#8A8A86] leading-relaxed">
                {exp.desc}
              </p>
            </div>
          ))}

          {/* Leadership & Campus Involvement */}
          <div className="bg-[#090909] border border-[#242424] p-8 rounded-[2px] hover:border-[#3A3A32] transition-colors">
            <div className="flex justify-between items-center font-mono text-xs text-[#8A8A86] mb-3">
              <span className="text-[#A6B84A] font-bold">ITM SKILLS UNIVERSITY</span>
              <span className="text-[#5F5F5B]">2024 – PRESENT</span>
            </div>
            <h4 className="font-heading font-extrabold text-xl text-[#F2F2F0] uppercase tracking-tight mb-2">
              PLACEMENT CLUB & EVENT LEADERSHIP
            </h4>
            <p className="font-sans text-sm text-[#8A8A86] leading-relaxed">
              Involved with the Placement Club at ITM Skills University. Helped organize the <span className="text-[#F2F2F0] font-semibold">Technology | Innovation | People</span> panel with industry leaders, coordinating team communications and event execution.
            </p>
          </div>
        </div>

        {/* Right Column: Hackathons & Building */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <h3 className="font-mono text-xs font-bold text-[#A6B84A] uppercase tracking-widest flex items-center gap-2">
            <span>[ HACKATHONS & COMMUNITY ]</span>
          </h3>

          <div className="bg-[#090909] border border-[#242424] p-6 rounded-[2px] flex flex-col gap-4">
            <p className="font-sans text-xs text-[#8A8A86] leading-relaxed">
              I learn by building, experimenting, and engaging with developers solving real technical challenges.
            </p>
            <div className="divide-y divide-[#242424]">
              {communityEvents.map((evt, idx) => (
                <div key={idx} className="py-3 flex justify-between items-center font-mono text-xs">
                  <span className="text-[#F2F2F0] font-medium">{evt.name}</span>
                  <span className="text-[#5F5F5B] text-[11px]">{evt.type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
