import { useRef } from 'react';
import { RoundedBox, Html } from '@react-three/drei';
import { PROJECTS } from '../../data/projects';

function SingleArtifact({ project, position, rotation }) {
  const meshRef = useRef();

  return (
    <group position={position} rotation={rotation} ref={meshRef}>
      {/* Physical Beveled Block (#202225) */}
      <RoundedBox 
        args={[0.85, 0.14, 0.6]} 
        radius={0.03}
        castShadow 
        receiveShadow
      >
        <meshStandardMaterial 
          color="#202225" 
          roughness={0.65}
          metalness={0.2}
        />
      </RoundedBox>
      
      {/* Status LED dot on top of block */}
      <mesh position={[0.3, 0.08, -0.2]}>
        <sphereGeometry args={[0.022, 16, 16]} />
        <meshBasicMaterial color="#85878A" />
      </mesh>

      {/* Compact Technical Label (~110px wide, ~30% smaller) */}
      <Html position={[0, 0.22, 0]} center style={{ pointerEvents: 'none' }}>
        <div className="bg-[#101113]/90 border border-white/10 px-2 py-1 flex flex-col min-w-[95px] max-w-[115px] rounded-sm shadow-md backdrop-blur-sm">
          <span className="text-[7.5px] font-mono text-accent tracking-widest uppercase mb-0.5 font-semibold">
            {project.buildId}
          </span>
          <span className="text-[10px] font-heading font-bold text-primary tracking-tight truncate">
            {project.name}
          </span>
        </div>
      </Html>
    </group>
  );
}

export default function ProjectArtifact() {
  // Asymmetrical desk arrangement around keyboard for 90° rotated workstation
  const positions = [
    { pos: [0.75, 0.05, 1.25], rot: [0, 0.08, 0] },    // SPENDR (Foreground / left of viewer)
    { pos: [0.75, 0.05, -1.25], rot: [0, -0.08, 0] },   // CAMPUSCARE (Foreground / right of viewer)
    { pos: [-0.15, 0.05, 1.65], rot: [0, 0.12, 0] },   // CAMPUSCARE (Middle / left)
    { pos: [-0.15, 0.05, -1.65], rot: [0, -0.12, 0] }   // SEARCHX (Middle / right)
  ];

  return (
    <group>
      {PROJECTS.map((project, idx) => (
        <SingleArtifact 
          key={project.id} 
          project={project} 
          position={positions[idx].pos} 
          rotation={positions[idx].rot}
        />
      ))}
    </group>
  );
}
