import { useRef, useState } from 'react';
import { RoundedBox, Html } from '@react-three/drei';
import { useStore } from '../../../utils/store';
import gsap from 'gsap';

const PROJECTS = [
  { id: 'spendr', name: 'SPENDR', metadata: 'BUILD_001 · FINTECH', position: [4.5, 0.15, -0.5], color: '#222326' },
  { id: 'campuscare', name: 'CAMPUSCARE', metadata: 'BUILD_002 · HEALTH', position: [5.8, 0.15, 0.8], color: '#222326' },
  { id: 'campuscare', name: 'CAMPUSCARE', metadata: 'BUILD_003 · SAFETY', position: [-4.5, 0.15, -0.5], color: '#222326' },
  { id: 'searchx', name: 'SEARCHX', metadata: 'BUILD_004 · SYSTEMS', position: [-5.8, 0.15, 0.8], color: '#222326' }
];

function ProjectBlock({ project }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const setActiveProject = useStore((state) => state.setActiveProject);

  const handlePointerOver = (e) => {
    e.stopPropagation();
    setHovered(true);
    document.body.style.cursor = 'pointer';
    
    // Smooth, restrained upward shift and contrast bump
    gsap.to(meshRef.current.position, { y: 0.35, duration: 0.3, ease: 'power2.out' });
    gsap.to(meshRef.current.rotation, { y: 0.05, duration: 0.3 });
  };

  const handlePointerOut = (e) => {
    e.stopPropagation();
    setHovered(false);
    document.body.style.cursor = 'auto';
    
    // Return to rest
    gsap.to(meshRef.current.position, { y: project.position[1], duration: 0.4, ease: 'power2.out' });
    gsap.to(meshRef.current.rotation, { y: 0, duration: 0.4 });
  };

  const handleClick = (e) => {
    e.stopPropagation();
    setActiveProject(project.id);
  };

  return (
    <group position={project.position} ref={meshRef}>
      <RoundedBox 
        args={[1.4, 0.3, 1]} 
        radius={0.05}
        castShadow 
        receiveShadow
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <meshStandardMaterial 
          color={hovered ? '#333538' : project.color} 
          roughness={0.6}
          metalness={0.3}
          emissive={hovered ? '#C8F36A' : '#000000'}
          emissiveIntensity={hovered ? 0.15 : 0}
        />
      </RoundedBox>
      
      {/* HTML Tooltip strictly appearing on hover */}
      {hovered && (
        <Html position={[0, 0.6, 0]} center style={{ pointerEvents: 'none' }}>
          <div className="bg-surface border border-border/50 p-4 flex flex-col min-w-[180px] shadow-surface-hover backdrop-blur-sm">
            <span className="text-[10px] font-mono text-primary-muted tracking-widest uppercase mb-1">
              {project.metadata}
            </span>
            <span className="text-base font-heading font-bold text-primary tracking-tight mb-3">
              {project.name}
            </span>
            <span className="text-xs font-mono text-accent uppercase flex items-center gap-2">
              EXPLORE <span className="text-lg leading-none">→</span>
            </span>
          </div>
        </Html>
      )}
    </group>
  );
}

export default function ProjectArtifacts() {
  return (
    <group>
      {PROJECTS.map(p => (
        <ProjectBlock key={p.id} project={p} />
      ))}
    </group>
  );
}
