import { RoundedBox, Html } from '@react-three/drei';
import { PROJECTS } from '../../data/projects';

function SingleProjectCard({ project, position }) {
  const frameMat = (
    <meshStandardMaterial color="#151515" roughness={0.6} metalness={0.3} />
  );

  return (
    <group position={position}>
      {/* 1. Outer Physical Frame Mesh (1.5m wide x 1.0m high - UNTOUCHED) */}
      <RoundedBox args={[1.5, 1.0, 0.06]} radius={0.02} castShadow receiveShadow>
        {frameMat}
      </RoundedBox>

      {/* 2. Synchronized Full-Size HTML/CSS Content Layer (distanceFactor = 2.2) */}
      <Html 
        transform 
        distanceFactor={2.2}
        position={[0, 0, 0.035]} 
        className="pointer-events-none select-none"
      >
        <div className="w-[340px] h-[220px] bg-[#111214] border border-white/20 p-5 flex flex-col justify-between overflow-hidden rounded-[4px] shadow-2xl text-left transition-all duration-200 hover:border-[#B8F500]/60 group">
          
          {/* Header Bar: Project ID & Category */}
          <div className="flex justify-between items-center font-mono text-[11px] text-[#A0A0A0] uppercase border-b border-white/10 pb-2 leading-none">
            <span className="text-[#B8F500] font-bold tracking-widest">{project.buildId}</span>
            <span className="tracking-widest text-[#A0A0A0] font-semibold">{project.category}</span>
          </div>

          {/* Main Content Area: Project Title & Tagline Description */}
          <div className="flex flex-col justify-center gap-1.5 my-auto">
            <h2 className="font-heading font-bold text-2xl text-[#F1F0EB] tracking-tight leading-none group-hover:text-white transition-colors">
              {project.name}
            </h2>
            <p className="font-sans text-[11px] text-[#858887] leading-relaxed line-clamp-2 font-normal">
              {project.tagline}
            </p>
          </div>

          {/* Footer Bar: Tech Stack & EXPLORE Action */}
          <div className="flex items-center justify-between font-mono text-[10px] pt-2 border-t border-white/10 leading-none">
            <div className="text-[#C0C0C0] font-mono text-[10px] font-medium tracking-wide">
              {project.techStack.join('  ·  ')}
            </div>
            <span className="text-[#B8F500] font-mono text-[11px] tracking-widest font-bold group-hover:translate-x-1 transition-transform">
              EXPLORE →
            </span>
          </div>

        </div>
      </Html>
    </group>
  );
}

export default function ProjectWall(props) {
  // 4 Project Cards arranged 2x2 on the Left Wall (Positions & Mesh 100% UNTOUCHED)
  const cards = [
    { project: PROJECTS[0], pos: [-0.95, 2.35, 0] }, // BUILD_001 — SPENDR (Top-Left)
    { project: PROJECTS[1], pos: [0.95, 2.35, 0] },  // BUILD_002 — CAMPUSCARE (Top-Right)
    { project: PROJECTS[2], pos: [-0.95, 1.15, 0] }, // BUILD_003 — CAMPUSCARE (Bottom-Left)
    { project: PROJECTS[3], pos: [0.95, 1.15, 0] },  // BUILD_004 — SEARCHX (Bottom-Right)
  ];

  return (
    <group {...props}>
      {/* Wall Header Plaque */}
      <group position={[0, 3.1, 0]}>
        <Html center transform distanceFactor={2.5} className="pointer-events-none select-none">
          <div className="font-mono text-xs tracking-[0.25em] text-[#111111] uppercase border-b border-black/15 pb-1 whitespace-nowrap font-semibold">
            PROJECT ARCHIVE · 2024–2026
          </div>
        </Html>
      </group>

      {/* 4 Encapsulated Full-Size Project Cards */}
      {cards.map(({ project, pos }) => (
        <SingleProjectCard key={project.id} project={project} position={pos} />
      ))}
    </group>
  );
}
