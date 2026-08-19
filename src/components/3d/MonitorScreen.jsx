import { Html } from '@react-three/drei';

export default function MonitorScreen() {
  return (
    <Html
      transform
      distanceFactor={3.15}
      position={[0, 0, 0]}
      className="w-[720px] h-[460px] bg-[#070707] border border-[#242424] overflow-hidden flex flex-col justify-between p-9 pointer-events-none select-none rounded-[2px] shadow-[inset_0_0_35px_rgba(0,0,0,0.95)]"
    >
      {/* Top Telemetry Header */}
      <div className="flex justify-between items-start font-mono text-xs tracking-widest text-[#8A8A86] uppercase z-10 relative border-b border-[#242424] pb-3">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#B7F000] animate-pulse shadow-[0_0_8px_#B7F000]" />
          <span className="text-[#A6B84A] font-bold text-xs">SYS_001</span>
          <span className="text-[#5F5F5B]">|</span>
          <span className="text-[#8A8A86]">ITM SKILLS UNIVERSITY (2024–2028)</span>
        </div>
        <span className="text-[#5F5F5B] font-semibold">2026</span>
      </div>

      {/* Main Developer Interface */}
      <div className="flex flex-col justify-center my-auto z-10 relative pl-1">
        <span className="font-mono text-xs text-[#A6B84A] tracking-[0.3em] uppercase mb-2 font-semibold">
          MEET ALSHI
        </span>
        <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-[#F2F2F0] tracking-tight leading-[1.05] mb-2 uppercase">
          CS STUDENT & FULL-STACK DEVELOPER
        </h2>
        <p className="font-sans text-[#8A8A86] text-xs max-w-md leading-relaxed font-normal">
          BUILDING PRACTICAL WEB APPS, AI & REAL-TIME SYSTEMS.
        </p>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="flex justify-between items-center z-10 relative pt-2.5 border-t border-[#242424] text-[11px] font-mono text-[#8A8A86]">
        <div className="flex items-center gap-2">
          <span className="text-[#B7F000] text-xs">●</span>
          <span className="text-[#F2F2F0] font-medium">READY TO EXPLORE</span>
        </div>
        <span className="text-[#5F5F5B] tracking-wider">PORTFOLIO V2</span>
      </div>

      {/* Bottom progress accent line */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/5">
        <div className="h-full bg-[#A6B84A] w-full" />
      </div>
    </Html>
  );
}
