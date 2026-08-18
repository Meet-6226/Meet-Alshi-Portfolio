import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ============================================================
// STREAMLINED 3D INTRO CAMERA STATES (DOOR -> DESK -> MONITOR ZOOM)
// ============================================================
export const INTRO_CAMERA_STATES = {
  // 01. DOOR (Outside closed door in hallway)
  door: {
    cam: [0, 1.7, 12.0],
    look: [0, 1.7, 6.0],
    doorAngle: 0,
  },
  // 02. ENTER (Passing doorway as door swings open)
  enter: {
    cam: [0, 1.7, 6.5],
    look: [0, 1.5, 0.0],
    doorAngle: -Math.PI * 0.55,
  },
  // 03. WORKSPACE (Approaching workstation at eye level)
  workspace: {
    cam: [0.4, 1.6, 2.6],
    look: [0, 1.45, -0.35],
    doorAngle: -Math.PI * 0.55,
  },
  // 04. MONITOR (Stops in front of monitor screen)
  monitor: {
    cam: [0.0, 1.55, 1.6],
    look: [0.0, 1.55, -0.35],
    doorAngle: -Math.PI * 0.55,
  },
  // 05. DIGITAL PORTFOLIO ZOOM (Pushes directly into monitor screen display plane)
  digital: {
    cam: [0.0, 1.55, 0.08],
    look: [0.0, 1.55, -0.35],
    doorAngle: -Math.PI * 0.55,
  },
};

export default function JourneyCamera({ doorHingeRef }) {
  const { camera } = useThree();
  const cameraTarget = useRef(new THREE.Vector3(0, 1.7, 6.0));

  // Trajectory Proxy object scrubbed by GSAP ScrollTrigger
  const journey = useRef({
    camX: INTRO_CAMERA_STATES.door.cam[0],
    camY: INTRO_CAMERA_STATES.door.cam[1],
    camZ: INTRO_CAMERA_STATES.door.cam[2],
    lookX: INTRO_CAMERA_STATES.door.look[0],
    lookY: INTRO_CAMERA_STATES.door.look[1],
    lookZ: INTRO_CAMERA_STATES.door.look[2],
    doorAngle: 0,
  }).current;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      journey.camX = INTRO_CAMERA_STATES.digital.cam[0];
      journey.camY = INTRO_CAMERA_STATES.digital.cam[1];
      journey.camZ = INTRO_CAMERA_STATES.digital.cam[2];
      journey.lookX = INTRO_CAMERA_STATES.digital.look[0];
      journey.lookY = INTRO_CAMERA_STATES.digital.look[1];
      journey.lookZ = INTRO_CAMERA_STATES.digital.look[2];
      journey.doorAngle = -Math.PI * 0.55;
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#intro-3d-scroll-area',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.0,
      },
    });

    // ============================================================
    // CINEMATIC 3D INTRO TIMELINE (DOOR -> DESK -> MONITOR SCREEN ZOOM)
    // ============================================================

    // 01 -> 02: DOOR -> ENTER (0.00 -> 0.25)
    tl.to(journey, {
      doorAngle: INTRO_CAMERA_STATES.enter.doorAngle,
      camX: INTRO_CAMERA_STATES.enter.cam[0],
      camY: INTRO_CAMERA_STATES.enter.cam[1],
      camZ: INTRO_CAMERA_STATES.enter.cam[2],
      lookX: INTRO_CAMERA_STATES.enter.look[0],
      lookY: INTRO_CAMERA_STATES.enter.look[1],
      lookZ: INTRO_CAMERA_STATES.enter.look[2],
      ease: 'power2.inOut',
      duration: 0.25,
    }, 0);

    // 02 -> 03: ENTER -> WORKSPACE (0.25 -> 0.55)
    tl.to(journey, {
      camX: INTRO_CAMERA_STATES.workspace.cam[0],
      camY: INTRO_CAMERA_STATES.workspace.cam[1],
      camZ: INTRO_CAMERA_STATES.workspace.cam[2],
      lookX: INTRO_CAMERA_STATES.workspace.look[0],
      lookY: INTRO_CAMERA_STATES.workspace.look[1],
      lookZ: INTRO_CAMERA_STATES.workspace.look[2],
      ease: 'power2.inOut',
      duration: 0.30,
    }, 0.25);

    // 03 -> 04: WORKSPACE -> MONITOR (0.55 -> 0.80)
    tl.to(journey, {
      camX: INTRO_CAMERA_STATES.monitor.cam[0],
      camY: INTRO_CAMERA_STATES.monitor.cam[1],
      camZ: INTRO_CAMERA_STATES.monitor.cam[2],
      lookX: INTRO_CAMERA_STATES.monitor.look[0],
      lookY: INTRO_CAMERA_STATES.monitor.look[1],
      lookZ: INTRO_CAMERA_STATES.monitor.look[2],
      ease: 'power2.out',
      duration: 0.25,
    }, 0.55);

    // 04 -> 05: MONITOR -> PUSH INTO DIGITAL SCREEN PLANE (0.80 -> 1.00)
    tl.to(journey, {
      camX: INTRO_CAMERA_STATES.digital.cam[0],
      camY: INTRO_CAMERA_STATES.digital.cam[1],
      camZ: INTRO_CAMERA_STATES.digital.cam[2],
      lookX: INTRO_CAMERA_STATES.digital.look[0],
      lookY: INTRO_CAMERA_STATES.digital.look[1],
      lookZ: INTRO_CAMERA_STATES.digital.look[2],
      ease: 'power2.in',
      duration: 0.20,
    }, 0.80);

    return () => {
      tl.kill();
    };
  }, []);

  useFrame((state, delta) => {
    // 1. Update door hinge rotation
    if (doorHingeRef?.current) {
      doorHingeRef.current.rotation.y = journey.doorAngle;
    }

    // 2. Subtle pointer parallax
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const parallaxX = isReduced ? 0 : state.pointer.x * 0.04;
    const parallaxY = isReduced ? 0 : state.pointer.y * 0.02;

    // 3. Smooth, responsive camera tracking
    camera.position.lerp(
      new THREE.Vector3(journey.camX + parallaxX, journey.camY + parallaxY, journey.camZ),
      delta * 8.0
    );

    cameraTarget.current.lerp(
      new THREE.Vector3(journey.lookX, journey.lookY, journey.lookZ),
      delta * 9.0
    );

    camera.lookAt(cameraTarget.current);
  });

  return null;
}
