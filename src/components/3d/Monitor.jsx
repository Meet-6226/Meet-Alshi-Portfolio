import { useRef } from 'react';
import { RoundedBox, Cylinder, Html } from '@react-three/drei';
import { useStore } from '../../utils/store';
import { PROJECTS } from '../../data/projects';

export default function Monitor(props) {
  const scrollPhase = useStore((state) => state.scrollPhase);
  const activeProject = useStore((state) => state.activeProject);
  const setActiveProject = useStore((state) => state.setActiveProject);
  const openCaseStudy = useStore((state) => state.openCaseStudy);

  // Active project data (defaults to Spendr during scroll sequence)
  const currentProject = PROJECTS.find(p => p.id === activeProject) || PROJECTS[0];
  const isWoken = scrollPhase >= 2 || activeProject !== null;

  return (
    <group {...props}>
      {/* Base (#101112) */}
      <Cylinder args={[0.55, 0.75, 0.08, 32]} position={[0, 0.04, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#101112" roughness={0.7} metalness={0.4} />
      </Cylinder>

      {/* Stand Arm */}
      <RoundedBox args={[0.22, 1.7, 0.18]} radius={0.02} position={[0, 0.9, -0.05]} castShadow receiveShadow>
        <meshStandardMaterial color="#101112" roughness={0.7} metalness={0.4} />
      </RoundedBox>

      {/* Monitor Body Frame (#101112) */}
      <RoundedBox args={[6.0, 3.5, 0.15]} radius={0.06} position={[0, 2.2, 0.12]} castShadow receiveShadow>
        <meshStandardMaterial color="#101112" roughness={0.65} metalness={0.4} />
      </RoundedBox>

      {/* Emissive Screen Light casting onto the desk surface & keyboard */}
      <spotLight 
        position={[0, 2.2, 0.25]} 
        target-position={[0, -0.5, 2.5]}
        angle={Math.PI / 2.8}
        penumbra={0.7}
        intensity={isWoken ? 4.5 : 0.6} 
        color={isWoken ? "#F2F1EC" : "#85878A"} 
        distance={9} 
        decay={2}
        castShadow
      />

      {/* Dynamic Screen Surface using Drei Html */}
      <Html
        transform
        occlude
        position={[0, 2.2, 0.21]}
        scale={0.4}
        className="w-[620px] h-[350px] bg-[#070808] border border-border/40 overflow-hidden flex flex-col justify-between p-8 pointer-events-none select-none transition-colors duration-500 rounded-sm"
      >
        {/* Top Telemetry Header */}
        <div className="flex justify-between items-start font-mono text-xs tracking-widest text-primary-muted uppercase z-10 relative border-b border-border/30 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent font-semibold">{isWoken ? currentProject.sysId : 'SYS_000'}</span>
            <span className="text-primary-muted/50">|</span>
            <span>{isWoken ? currentProject.category : 'SYSTEM · IDLE'}</span>
          </div>
          <span>2026</span>
        </div>

        {/* Dynamic Display Content */}
        {!isWoken ? (
          /* SYS_000 Idle State */
          <div className="flex flex-col justify-center my-auto z-10 relative">
            <span className="font-mono text-xs text-accent tracking-widest uppercase mb-2">
              MEET/DEV
            </span>
            <h2 className="font-heading font-bold text-4xl text-primary tracking-tight leading-tight">
              BUILDING <br /> DIGITAL PRODUCTS
            </h2>
            <p className="font-sans text-primary-muted text-sm max-w-xs mt-3 leading-relaxed">
              Interactive developer workstation. Scroll to explore built artifacts.
            </p>
          </div>
        ) : (
          /* Active Project Screen State (Spendr / Projects) */
          <div className="flex flex-col justify-between h-full pt-4 z-10 relative">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[11px] text-accent uppercase font-bold">
                  {currentProject.buildId}
                </span>
                <span className="text-xs text-primary-muted font-sans">• {currentProject.year}</span>
              </div>
              <h2 className="font-heading font-bold text-5xl text-primary tracking-tight mb-2">
                {currentProject.name}
              </h2>
              <p className="font-sans text-primary-muted text-sm max-w-md leading-relaxed">
                {currentProject.tagline}
              </p>
            </div>

            {/* Visual Preview / Dashboard Simulation */}
            <div className="my-3 bg-surface-secondary/80 border border-border/40 p-3 rounded flex flex-col gap-2">
              <div className="flex justify-between items-center text-[11px] font-mono text-primary-muted">
                <span>SIMULATED MARKET TICKER</span>
                <span className="text-accent">+14.2% LOW LATENCY</span>
              </div>
              <div className="flex items-end gap-1.5 h-10 pt-2">
                {[40, 65, 30, 85, 55, 95, 70, 100, 80].map((h, i) => (
                  <div key={i} className="flex-1 bg-accent/20 hover:bg-accent transition-colors rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            {/* Tech Stack Chips & CTA */}
            <div className="flex items-center justify-between pt-2 border-t border-border/30">
              <div className="flex gap-2">
                {currentProject.techStack.slice(0, 4).map((tech, i) => (
                  <span key={i} className="text-[10px] font-mono bg-surface-keyboard text-primary-muted px-2 py-0.5 rounded border border-border/40">
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Explore Case Study CTA */}
              <button 
                onClick={() => openCaseStudy(currentProject.id)}
                className="pointer-events-auto cursor-pointer font-mono text-xs font-bold bg-accent text-background px-4 py-2 uppercase tracking-wider hover:bg-accent-hover transition-all flex items-center gap-1 shadow-accent-glow"
              >
                EXPLORE CASE STUDY →
              </button>
            </div>
          </div>
        )}

        {/* Bottom Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-secondary">
          <div 
            className="h-full bg-accent transition-all duration-500 ease-out"
            style={{ width: isWoken ? '100%' : '15%' }}
          />
        </div>
      </Html>
    </group>
  );
}
