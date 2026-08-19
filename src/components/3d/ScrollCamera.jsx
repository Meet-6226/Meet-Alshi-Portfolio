import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Vector3 } from 'three';
import { useStore } from '../../utils/store';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollCamera() {
  const cameraTarget = useRef(new Vector3(0, 0, 0));
  const setScrollPhase = useStore((state) => state.setScrollPhase);
  
  // Starting position (Elevated three-quarter angle targeting the monitor)
  const proxy = useRef({
    camX: 2.5, camY: 6, camZ: 14, 
    lookX: 0, lookY: 0.5, lookZ: 0,
  }).current;

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects-scroll-area",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          // Normalize scroll progress into the exact 6 stages
          const p = self.progress;
          let phase = 0; // Stage 1 (Intro) + Stage 2 (Approach) + Stage 3 (Wake)
          if (p > 0.3) phase = 1; // Stage 4 (SPENDR) + Stage 5 (Explore)
          if (p > 0.5) phase = 2; // CAMPUSCARE
          if (p > 0.7) phase = 3; // CAMPUSCARE
          if (p > 0.9) phase = 4; // SEARCHX
          setScrollPhase(phase);
        }
      }
    });

    // Stage 1 -> 2: APPROACH (Camera slowly moves closer, keyboard enters foreground)
    tl.to(proxy, { camX: 1, camY: 4.5, camZ: 11, lookY: 1.5, ease: "power1.inOut" }, 0);
    
    // Stage 2 -> 3: WAKE (Monitor activates, subtle glow. Camera holds mostly still)
    tl.to(proxy, { camZ: 9.5, ease: "none" }, 0.2);

    // Stage 4-5: BUILD_001 -> EXPLORE (Cycle through projects, maintain strong framing on monitor)
    tl.to(proxy, { camX: 0.5, ease: "none" }, 0.4);
    tl.to(proxy, { camX: -0.5, ease: "none" }, 0.6);
    tl.to(proxy, { camX: 0, camZ: 8.5, ease: "none" }, 0.8);

    // Stage 6: TRANSITION (Monitor/preview expands toward HTML interface)
    // We dolly in aggressively toward the screen surface
    tl.to(proxy, { camY: 2.2, camZ: -1.5, lookY: 2.2, ease: "power2.in" }, 0.9);

    return () => {
      tl.kill();
    };
  }, [setScrollPhase]);

  useFrame((state, delta) => {
    const targetX = proxy.camX;
    const targetY = proxy.camY;
    const targetZ = proxy.camZ;

    // Extremely subtle parallax (premium, not gaming)
    const parallaxX = (state.pointer.x * 0.15);
    const parallaxY = (state.pointer.y * 0.15);

    state.camera.position.lerp(
      new Vector3(targetX + parallaxX, targetY + parallaxY, targetZ),
      delta * 2.5
    );

    cameraTarget.current.lerp(
      new Vector3(proxy.lookX, proxy.lookY, proxy.lookZ),
      delta * 5
    );
    state.camera.lookAt(cameraTarget.current);
  });

  return null;
}
