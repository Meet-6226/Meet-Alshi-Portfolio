import { Html } from '@react-three/drei';

export default function MonitorScreen() {
  return (
    <Html
      transform
      occlude="blended"
      position={[0, 0, 0]}
      scale={0.135}
      className="w-[520px] h-[300px] bg-[#080909] border border-white/10 overflow-hidden flex flex-col justify-between p-7 pointer-events-none select-none rounded-sm shadow-[inset_0_0_30px_rgba(0,0,0,0.9)]"
    >
      {/* Top Telemetry Header */}
      <div className="flex justify-between items-start font-mono text-[11px] tracking-widest text-[#858887] uppercase z-10 relative border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#B8F500] animate-pulse" />
          <span className="text-[#B8F500] font-semibold">SYS_001</span>
          <span className="text-white/20">|</span>
          <span>DEV_WORKSPACE</span>
        </div>
        <span>2026</span>
      </div>

      {/* Main Minimal Developer Interface */}
      <div className="flex flex-col justify-center my-auto z-10 relative">
        <span className="font-mono text-xs text-[#B8F500] tracking-[0.25em] uppercase mb-2 font-semibold">
          MEET ALSHI
        </span>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#F1F0EB] tracking-tight leading-[1.05] mb-2">
          FULL-STACK DEVELOPER
        </h2>
        <p className="font-sans text-[#858887] text-sm max-w-sm leading-relaxed">
          BUILDING DIGITAL PRODUCTS.
        </p>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="flex justify-between items-center z-10 relative pt-2 border-t border-white/10 text-[10px] font-mono text-[#858887]">
        <div className="flex items-center gap-2">
          <span className="text-[#B8F500]">●</span>
          <span>READY TO EXPLORE</span>
        </div>
        <span className="text-white/40">PORTFOLIO V2</span>
      </div>

      {/* Subtle bottom progress accent */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
        <div className="h-full bg-[#B8F500] w-full shadow-[0_0_8px_#B8F500]" />
      </div>
    </Html>
  );
}
