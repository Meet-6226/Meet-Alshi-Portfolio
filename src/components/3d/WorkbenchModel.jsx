import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useStore } from '../../utils/store';
import Desk from './models/Desk';
import Monitor from './models/Monitor';
import Keyboard from './models/Keyboard';
import ProjectArtifacts from './models/ProjectArtifacts';

export default function WorkbenchModel() {
  const groupRef = useRef();
  const scrollPhase = useStore((state) => state.scrollPhase);

  useEffect(() => {
    if (groupRef.current) {
      // Very smooth, premium entrance animation
      gsap.from(groupRef.current.position, {
        y: -4,
        duration: 2.5,
        ease: 'power3.out'
      });
      gsap.from(groupRef.current.rotation, {
        x: -0.05,
        y: 0.02,
        duration: 2.5,
        ease: 'power2.out'
      });
    }
  }, []);
  
  const isMonitorActive = scrollPhase > 0;
  
  return (
    <group ref={groupRef}>
      
      {/* 
        The Emissive Monitor Glow casting onto the desk components.
        This represents the light coming FROM the screen.
      */}
      <spotLight 
        position={[0, 2.2, 0.2]} 
        target-position={[0, -0.5, 2]}
        angle={Math.PI / 2.5}
        penumbra={0.6}
        intensity={isMonitorActive ? 5 : 0.5} 
        color={isMonitorActive ? "#F2F1EC" : "#92949A"} 
        distance={10} 
        decay={2}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />

      <Desk position={[0, -0.1, 0]} />
      
      {/* Pushed monitor slightly back so keyboard fits well */}
      <Monitor position={[0, 0.05, -2]} />
      
      <Keyboard position={[0, 0.05, 1.5]} />
      
      <ProjectArtifacts />
      
    </group>
  );
}
