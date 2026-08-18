import { useRef, useEffect } from 'react';
import { RoundedBox } from '@react-three/drei';
import gsap from 'gsap';
import { useStore } from '../../utils/store';

export default function Keyboard(props) {
  const scrollPhase = useStore((state) => state.scrollPhase);
  
  const meetKeysRef = useRef([]);
  const devKeysRef = useRef([]);
  const spendrKeysRef = useRef([]);

  useEffect(() => {
    // Check reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Subtle load sequence: M-E-E-T then D-E-V
    const tl = gsap.timeline({ delay: 0.8 });
    
    tl.to(meetKeysRef.current, { emissiveIntensity: 1, duration: 0.25, stagger: 0.08 })
      .to(meetKeysRef.current, { emissiveIntensity: 0.1, duration: 0.3, stagger: 0.08 }, '+=0.1')
      .to(devKeysRef.current, { emissiveIntensity: 1, duration: 0.25, stagger: 0.08 }, '-=0.2')
      .to(devKeysRef.current, { emissiveIntensity: 0.1, duration: 0.3, stagger: 0.08 }, '+=0.1');

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (scrollPhase >= 1) {
      gsap.to(spendrKeysRef.current, { emissiveIntensity: 0.8, duration: 0.3, stagger: 0.08 });
    } else {
      gsap.to(spendrKeysRef.current, { emissiveIntensity: 0, duration: 0.3 });
    }
  }, [scrollPhase]);

  return (
    <group {...props}>
      {/* Keyboard Base Chassis (#202124) */}
      <RoundedBox args={[3.2, 0.1, 1.25]} radius={0.03} position={[0, 0, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#202124" roughness={0.75} metalness={0.2} />
      </RoundedBox>

      {/* Keys Grid with subtle contrast */}
      <group position={[-1.35, 0.07, -0.42]}>
        {/* Function Row */}
        {Array.from({ length: 13 }).map((_, i) => (
          <RoundedBox key={`fn-${i}`} args={[0.16, 0.05, 0.14]} radius={0.01} position={[i * 0.21, 0, 0]} castShadow>
            <meshStandardMaterial color="#292B2D" roughness={0.6} />
          </RoundedBox>
        ))}

        {/* Row 1: M E E T keys */}
        {Array.from({ length: 13 }).map((_, i) => {
          const isM = i === 6;
          const isE1 = i === 2;
          const isE2 = i === 7;
          const isT = i === 4;
          const isMeet = isM || isE1 || isE2 || isT;

          return (
            <RoundedBox key={`r1-${i}`} args={[0.16, 0.05, 0.14]} radius={0.01} position={[i * 0.21, 0, 0.2]} castShadow>
              <meshStandardMaterial 
                ref={(el) => {
                  if (isMeet && el) meetKeysRef.current.push(el);
                }}
                color="#1E1F22" 
                roughness={0.6} 
                emissive="#C8F36A" 
                emissiveIntensity={0} 
              />
            </RoundedBox>
          );
        })}

        {/* Row 2: D E V / S P E N D R keys */}
        {Array.from({ length: 13 }).map((_, i) => {
          const isD = i === 2;
          const isV = i === 3;
          const isDev = isD || isV;

          const isS = i === 1;
          const isP = i === 9;
          const isSpendr = isS || isP;

          return (
            <RoundedBox key={`r2-${i}`} args={[0.16, 0.05, 0.14]} radius={0.01} position={[i * 0.21, 0, 0.4]} castShadow>
              <meshStandardMaterial 
                ref={(el) => {
                  if (isDev && el) devKeysRef.current.push(el);
                  if (isSpendr && el) spendrKeysRef.current.push(el);
                }}
                color="#1E1F22" 
                roughness={0.6} 
                emissive="#C8F36A" 
                emissiveIntensity={0} 
              />
            </RoundedBox>
          );
        })}

        {/* Spacebar */}
        <RoundedBox args={[1.3, 0.05, 0.16]} radius={0.01} position={[1.25, 0, 0.65]} castShadow>
          <meshStandardMaterial color="#292B2D" roughness={0.6} />
        </RoundedBox>
      </group>
    </group>
  );
}
