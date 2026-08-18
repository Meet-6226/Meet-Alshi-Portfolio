import { useRef, useEffect } from 'react';
import { RoundedBox } from '@react-three/drei';
import gsap from 'gsap';
import { useStore } from '../../../utils/store';

export default function Keyboard(props) {
  // === GLB REPLACEMENT INSTRUCTIONS ===
  // 1. Place keyboard.glb in public/assets/3d/
  // 2. Uncomment the line below
  // const { scene } = useGLTF('/assets/3d/keyboard.glb');
  // 3. To preserve the glowing keys effect, you would need to traverse the GLTF scene and find the specific key meshes.
  // For now, this primitive layout serves as the interactive keyboard.
  
  const scrollPhase = useStore((state) => state.scrollPhase);
  
  // Refs for specific keys we want to animate
  const meetKeysRef = useRef([]);
  const devKeysRef = useRef([]);
  const spendrKeysRef = useRef([]); // S, P, E
  const campusKeysRef = useRef([]); // C, A, M
  
  useEffect(() => {
    // Initial Load Sequence
    const tl = gsap.timeline({ delay: 1 });
    
    // Pulse M-E-E-T
    tl.to(meetKeysRef.current, { emissiveIntensity: 1, duration: 0.2, stagger: 0.1 })
      .to(meetKeysRef.current, { emissiveIntensity: 0, duration: 0.4, stagger: 0.1 }, "+=0.2");
      
    // Pulse D-E-V
    tl.to(devKeysRef.current, { emissiveIntensity: 1, duration: 0.2, stagger: 0.1 }, "-=0.3")
      .to(devKeysRef.current, { emissiveIntensity: 0, duration: 0.4, stagger: 0.1 }, "+=0.2");
      
  }, []);
  
  useEffect(() => {
    // Scroll phase interactions
    // Reset all
    gsap.to([...spendrKeysRef.current, ...campusKeysRef.current], { emissiveIntensity: 0, duration: 0.3 });
    
    if (scrollPhase === 1) { // Spendr
      gsap.to(spendrKeysRef.current, { emissiveIntensity: 0.8, duration: 0.4, stagger: 0.1 });
    } else if (scrollPhase === 2) { // CampusCare
      gsap.to(campusKeysRef.current, { emissiveIntensity: 0.8, duration: 0.4, stagger: 0.1 });
    }
  }, [scrollPhase]);

  const keyMat = <meshStandardMaterial color="#17181A" roughness={0.8} emissive="#C8F36A" emissiveIntensity={0} />;
  
  return (
    <group {...props}>
      {/* Base Chassis */}
      <RoundedBox args={[3.2, 0.1, 1.2]} radius={0.02} position={[0, 0, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#0B0B0C" roughness={0.9} />
      </RoundedBox>
      
      {/* Abstracted Key Layout */}
      <group position={[-1.4, 0.08, -0.4]}>
        {/* Row 1 */}
        {Array.from({ length: 14 }).map((_, i) => (
          <RoundedBox key={`r1-${i}`} args={[0.16, 0.06, 0.16]} radius={0.01} position={[i * 0.2, 0, 0]} castShadow>
            {i === 2 ? <meshStandardMaterial ref={(el) => (campusKeysRef.current[1] = el)} color="#17181A" emissive="#C8F36A" emissiveIntensity={0} /> : <meshStandardMaterial color="#17181A" emissive="#C8F36A" emissiveIntensity={0} />}
          </RoundedBox>
        ))}
        {/* Row 2 */}
        {Array.from({ length: 13 }).map((_, i) => (
          <RoundedBox key={`r2-${i}`} args={[0.16, 0.06, 0.16]} radius={0.01} position={[i * 0.2 + 0.1, 0, 0.22]} castShadow>
             {i === 1 ? <meshStandardMaterial ref={(el) => (spendrKeysRef.current[0] = el)} color="#17181A" emissive="#C8F36A" emissiveIntensity={0} /> // S
              : i === 2 ? <meshStandardMaterial ref={(el) => (devKeysRef.current[0] = el)} color="#17181A" emissive="#C8F36A" emissiveIntensity={0} /> // D
              : i === 7 ? <meshStandardMaterial ref={(el) => (meetKeysRef.current[0] = el)} color="#17181A" emissive="#C8F36A" emissiveIntensity={0} /> // M
              : i === 8 ? <meshStandardMaterial ref={(el) => (meetKeysRef.current[1] = el)} color="#17181A" emissive="#C8F36A" emissiveIntensity={0} /> // E
              : i === 9 ? <meshStandardMaterial ref={(el) => (meetKeysRef.current[2] = el)} color="#17181A" emissive="#C8F36A" emissiveIntensity={0} /> // E
              : i === 10 ? <meshStandardMaterial ref={(el) => (meetKeysRef.current[3] = el)} color="#17181A" emissive="#C8F36A" emissiveIntensity={0} /> // T
              : i === 3 ? <meshStandardMaterial ref={(el) => (devKeysRef.current[1] = el)} color="#17181A" emissive="#C8F36A" emissiveIntensity={0} /> // E
              : i === 4 ? <meshStandardMaterial ref={(el) => (devKeysRef.current[2] = el)} color="#17181A" emissive="#C8F36A" emissiveIntensity={0} /> // V
              : i === 5 ? <meshStandardMaterial ref={(el) => (spendrKeysRef.current[1] = el)} color="#17181A" emissive="#C8F36A" emissiveIntensity={0} /> // P
              : i === 6 ? <meshStandardMaterial ref={(el) => (spendrKeysRef.current[2] = el)} color="#17181A" emissive="#C8F36A" emissiveIntensity={0} /> // E
              : i === 11 ? <meshStandardMaterial ref={(el) => (campusKeysRef.current[0] = el)} color="#17181A" emissive="#C8F36A" emissiveIntensity={0} /> // C
              : i === 12 ? <meshStandardMaterial ref={(el) => (campusKeysRef.current[2] = el)} color="#17181A" emissive="#C8F36A" emissiveIntensity={0} /> // M
              : <meshStandardMaterial color="#17181A" emissive="#C8F36A" emissiveIntensity={0} />
             }
          </RoundedBox>
        ))}
        {/* Spacebar Row */}
        <RoundedBox args={[1.2, 0.06, 0.16]} radius={0.01} position={[1.4, 0, 0.66]} castShadow>
          {keyMat}
        </RoundedBox>
      </group>
    </group>
  );
}
