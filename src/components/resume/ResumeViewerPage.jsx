import { useEffect } from 'react';

export default function ResumeViewerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F2F2F0] font-sans pt-28 pb-16 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-8 selection:bg-[#A6B84A] selection:text-[#050505]">
      
      {/* Top Header & Actions Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-[#242424]">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] tracking-widest uppercase mb-2 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#B7F000]" />
            <span>[ RESUME ]</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#F2F2F0] tracking-tight uppercase mb-2">
            MEET ALSHI — FULL-STACK DEVELOPER
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#8A8A86]">
            View my resume and explore my experience, projects and technical skills.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs shrink-0">
          <a
            href="/Meet%20Alshi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-[#080808] border border-[#242424] text-[#F2F2F0] rounded-[2px] hover:border-[#A6B84A] hover:text-[#A6B84A] transition-all font-semibold flex items-center gap-2"
          >
            <span>OPEN PDF</span>
            <span className="text-[#A6B84A]">↗</span>
          </a>

          <a
            href="/Meet%20Alshi.pdf"
            download="Meet Alshi.pdf"
            className="px-6 py-3.5 bg-[#A6B84A] text-[#050505] font-bold rounded-[2px] hover:bg-[#B7F000] hover:-translate-y-0.5 transition-all flex items-center gap-2 shadow-md"
          >
            <span>DOWNLOAD RESUME</span>
            <span>↓</span>
          </a>
        </div>
      </div>

      {/* Embedded Large Centered PDF Preview (Desktop: max-w-[950px], h-[80vh], Mobile: w-full) */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[950px] bg-[#090909] border border-[#242424] rounded-[2px] overflow-hidden shadow-2xl p-2">
          <iframe
            src="/Meet%20Alshi.pdf"
            title="Meet Alshi Resume Preview"
            className="w-full h-[80vh] min-h-[600px] border-0 rounded-[2px] bg-[#090909]"
          />
        </div>
      </div>

    </div>
  );
}
