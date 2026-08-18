export default function ProjectPreview({ project }) {
  // Designed Dark Technical Preview Screen (No img tags, no broken images!)
  return (
    <div className="w-full h-[208px] bg-[#111111] border border-white/10 rounded flex flex-col justify-between p-4 relative overflow-hidden select-none">
      {/* Background Technical Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:20px_20px]" />

      {/* Top Telemetry Header */}
      <div className="flex justify-between items-center font-mono text-xs text-[#858887] uppercase z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C8F36A] animate-pulse" />
          <span className="text-[#C8F36A] font-semibold tracking-wider">{project?.buildId || 'BUILD_000'}</span>
        </div>
        <span className="tracking-widest text-white/40">PROJECT / PREVIEW</span>
      </div>

      {/* Center Project Name Badge */}
      <div className="flex flex-col items-center justify-center my-auto z-10">
        <span className="font-heading font-bold text-xl text-[#F1F0EB] tracking-widest uppercase">
          {project?.name || 'PROJECT'}
        </span>
        <span className="font-mono text-xs text-[#858887] tracking-[0.2em] uppercase mt-1">
          SYSTEM_READY · VISUAL_PREVIEW
        </span>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="flex justify-between items-center font-mono text-xs text-[#858887] z-10 pt-2 border-t border-white/10">
        <span>STATUS: ACTIVE</span>
        <span className="text-white/30">REF: {project?.id?.toUpperCase() || 'SYS'}</span>
      </div>
    </div>
  );
}
