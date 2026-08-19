import { useState } from 'react';
import ContactModal from '../contact/ContactModal';

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-[#242424] bg-[#050505] text-[#F2F2F0]">
      
      {/* Contact Modal Dialog */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Main Terminal Box Container */}
      <div className="bg-[#080808] border border-[#242424] p-8 sm:p-14 lg:p-20 rounded-[2px] relative overflow-hidden flex flex-col gap-12 shadow-2xl">
        
        {/* Top Telemetry Header */}
        <div className="flex justify-between items-center font-mono text-xs uppercase text-[#8A8A86] border-b border-[#242424] pb-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#B7F000] animate-pulse" />
            <span className="text-[#A6B84A] font-bold tracking-widest">[ CONTACT // 01 ]</span>
          </div>
          <span className="tracking-widest text-[#5F5F5B]">AVAILABILITY: OPEN FOR OPPORTUNITIES</span>
        </div>

        {/* Large Prominent Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#F2F2F0] tracking-tight uppercase leading-[0.95]">
            LET'S BUILD SOMETHING.
          </h2>
          <p className="font-sans text-base sm:text-xl text-[#8A8A86] leading-relaxed">
            Have a project, opportunity, or idea worth exploring? Tell me a little about what you'd like to build.
          </p>
        </div>

        {/* Direct Action Strip */}
        <div className="flex flex-wrap gap-4 pt-4">
          <button 
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-[#A6B84A] text-[#050505] font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#B7F000] hover:scale-[1.02] transition-all rounded-[2px] flex items-center gap-3 shadow-lg"
          >
            <span>GET IN TOUCH</span>
            <span>→</span>
          </button>

          <a 
            href="#/resume"
            className="px-8 py-4 bg-[#090909] border border-[#242424] text-[#F2F2F0] font-mono text-xs font-bold uppercase tracking-widest hover:border-[#A6B84A] hover:text-[#A6B84A] transition-all rounded-[2px] flex items-center gap-2"
          >
            <span>VIEW RESUME</span>
            <span>↗</span>
          </a>
        </div>

        {/* Social Links Ledger Footer */}
        <div className="pt-10 border-t border-[#242424] grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs text-[#8A8A86] uppercase">
          <div>
            <span className="text-[#5F5F5B] block mb-1">LINKEDIN</span>
            <a 
              href="https://www.linkedin.com/in/meet-alshi/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#F2F2F0] hover:text-[#A6B84A] font-semibold transition-colors flex items-center gap-1"
            >
              <span>meet-alshi</span>
              <span>↗</span>
            </a>
          </div>

          <div>
            <span className="text-[#5F5F5B] block mb-1">GITHUB</span>
            <a 
              href="https://github.com/Meet-6226" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#F2F2F0] hover:text-[#A6B84A] font-semibold transition-colors flex items-center gap-1"
            >
              <span>Meet-6226</span>
              <span>↗</span>
            </a>
          </div>

          <div>
            <span className="text-[#5F5F5B] block mb-1">DIRECT EMAIL</span>
            <a 
              href="mailto:meet.alshi@gmail.com" 
              className="text-[#F2F2F0] hover:text-[#A6B84A] font-semibold transition-colors flex items-center gap-1"
            >
              <span>meet.alshi@gmail.com</span>
              <span>↗</span>
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
