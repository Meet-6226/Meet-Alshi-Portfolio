import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Production Clean Mode
const DEBUG_CAMERA = false;

export default function JourneyCamera({ sceneRef, onDebugUpdate }) {
  const { camera, size: viewportSize } = useThree();
  const targetRef = useRef(new THREE.Vector3(-1.28, 13.45, -1.20));

  // Keyframe Matrix (Shot 01 adjusted ~7% lower to eye-level; Shots 02-05 remain 100% UNTOUCHED)
  const cameraKeyframes = useMemo(() => {
    let center = new THREE.Vector3(-0.78, 10.85, -0.70);
    let size = new THREE.Vector3(25.71, 21.72, 25.59);
    let radius = 18.2;

    if (sceneRef?.current) {
      const box = new THREE.Box3().setFromObject(sceneRef.current);
      if (!box.isEmpty()) {
        box.getCenter(center);
        box.getSize(size);
        const sphere = box.getBoundingSphere(new THREE.Sphere());
        radius = sphere.radius;
      }
    }

    // Shot 01 Distance: Wide establishing distance showing complete room
    const fovRad = (48 * Math.PI) / 180;
    const fitDistance = (radius / Math.sin(fovRad / 2)) * 1.22; // ~50.0 units

    // Slightly lower direction vector (dir01.y = 0.45 instead of 0.55) for natural eye-level perspective
    const dir01 = new THREE.Vector3(0.68, 0.40, 0.70).normalize();
    const shot01Cam = center.clone().add(dir01.multiplyScalar(fitDistance));
    const shot01Look = new THREE.Vector3(center.x - 0.5, center.y + size.y * 0.12, center.z - 0.5);

    return [
      // 0% — SHOT 01: Eye-Level Wide 3/4 Establishing Overview
      {
        progress: 0.00,
        name: 'SHOT 01 — ESTABLISHING OVERVIEW (0%)',
        cam: [shot01Cam.x, shot01Cam.y, shot01Cam.z],
        look: [shot01Look.x, shot01Look.y, shot01Look.z],
      },
      // 18% — SHOT 02: Approach Entrance (UNTOUCHED)
      {
        progress: 0.18,
        name: 'SHOT 02 — APPROACH ENTRANCE (18%)',
        cam: [center.x + size.x * 0.48, center.y + size.y * 0.06, center.z + size.z * 0.58],
        look: [center.x - 0.22, center.y - 1.65, center.z - 1.80],
      },
      // 40% — SHOT 03: Enter Room at Human Eye Level Y=8.0 (UNTOUCHED)
      {
        progress: 0.40,
        name: 'SHOT 03 — ENTER ROOM (40%)',
        cam: [center.x + 2.98, 8.0, center.z + 9.20],
        look: [0.0, 8.2, -6.5],
      },
      // 65% — SHOT 04: Workspace Reveal with Rich Context (UNTOUCHED)
      {
        progress: 0.65,
        name: 'SHOT 04 — WORKSPACE REVEAL (65%)',
        cam: [center.x + 1.38, 8.25, 1.20],
        look: [0.0, 8.48, -9.0],
      },
      // 100% — SHOT 05: Final Focus Directly Facing Right Physical Monitor Display Glass (UNTOUCHED)
      {
        progress: 1.00,
        name: 'SHOT 05 — RIGHT MONITOR & WORKSTATION HERO (100%)',
        cam: [2.14, 8.68, -5.30],
        look: [2.14, 8.65, -9.30],
      },
    ];
  }, [sceneRef]);

  // Master Proxy object scrubbed by GSAP
  const journey = useRef({
    camX: cameraKeyframes[0].cam[0],
    camY: cameraKeyframes[0].cam[1],
    camZ: cameraKeyframes[0].cam[2],
    lookX: cameraKeyframes[0].look[0],
    lookY: cameraKeyframes[0].look[1],
    lookZ: cameraKeyframes[0].look[2],
    progress: 0,
    shotName: cameraKeyframes[0].name,
  }).current;

  // Responsive Aspect Ratio update (Constant FOV = 48)
  useEffect(() => {
    camera.aspect = viewportSize.width / viewportSize.height;
    camera.fov = 48;
    camera.updateProjectionMatrix();
  }, [camera, viewportSize]);

  useEffect(() => {
    // 1. Initial Shot 01 Setup
    camera.position.set(...cameraKeyframes[0].cam);
    targetRef.current.set(...cameraKeyframes[0].look);
    camera.lookAt(targetRef.current);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const last = cameraKeyframes[4];
      journey.camX = last.cam[0];
      journey.camY = last.cam[1];
      journey.camZ = last.cam[2];
      journey.lookX = last.look[0];
      journey.lookY = last.look[1];
      journey.lookZ = last.look[2];
      return;
    }

    // 2. Single Master GSAP ScrollTrigger Timeline with Exact Timing (0%, 18%, 40%, 65%, 100%)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero-3d-scroll-area',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.0,
        onUpdate: (self) => {
          journey.progress = self.progress;

          // Determine active stage name
          let currentStage = cameraKeyframes[0].name;
          if (self.progress >= 0.65) currentStage = cameraKeyframes[4].name;
          else if (self.progress >= 0.40) currentStage = cameraKeyframes[3].name;
          else if (self.progress >= 0.18) currentStage = cameraKeyframes[2].name;
          else if (self.progress > 0) currentStage = cameraKeyframes[1].name;

          if (journey.shotName !== currentStage) {
            journey.shotName = currentStage;
            console.log(`[CameraTimeline] ${currentStage} | Progress: ${(self.progress * 100).toFixed(1)}%`);
          }

          if (onDebugUpdate && DEBUG_CAMERA) {
            onDebugUpdate({
              show: DEBUG_CAMERA,
              progress: self.progress,
              stageName: journey.shotName,
              camPos: [journey.camX, journey.camY, journey.camZ],
              targetPos: [journey.lookX, journey.lookY, journey.lookZ],
            });
          }
        },
      },
    });

    // Keyframe 0 -> Keyframe 1 (0% -> 18%): Establishing -> Approach
    tl.to(journey, {
      camX: cameraKeyframes[1].cam[0],
      camY: cameraKeyframes[1].cam[1],
      camZ: cameraKeyframes[1].cam[2],
      lookX: cameraKeyframes[1].look[0],
      lookY: cameraKeyframes[1].look[1],
      lookZ: cameraKeyframes[1].look[2],
      ease: 'power1.inOut',
      duration: 0.18,
    }, 0);

    // Keyframe 1 -> Keyframe 2 (18% -> 40%): Approach -> Enter Room
    tl.to(journey, {
      camX: cameraKeyframes[2].cam[0],
      camY: cameraKeyframes[2].cam[1],
      camZ: cameraKeyframes[2].cam[2],
      lookX: cameraKeyframes[2].look[0],
      lookY: cameraKeyframes[2].look[1],
      lookZ: cameraKeyframes[2].look[2],
      ease: 'power1.inOut',
      duration: 0.22,
    }, 0.18);

    // Keyframe 2 -> Keyframe 3 (40% -> 65%): Enter Room -> Workspace Reveal
    tl.to(journey, {
      camX: cameraKeyframes[3].cam[0],
      camY: cameraKeyframes[3].cam[1],
      camZ: cameraKeyframes[3].cam[2],
      lookX: cameraKeyframes[3].look[0],
      lookY: cameraKeyframes[3].look[1],
      lookZ: cameraKeyframes[3].look[2],
      ease: 'power2.inOut',
      duration: 0.25,
    }, 0.40);

    // Keyframe 3 -> Keyframe 4 (65% -> 100%): Workspace Reveal -> Right Monitor Focus
    tl.to(journey, {
      camX: cameraKeyframes[4].cam[0],
      camY: cameraKeyframes[4].cam[1],
      camZ: cameraKeyframes[4].cam[2],
      lookX: cameraKeyframes[4].look[0],
      lookY: cameraKeyframes[4].look[1],
      lookZ: cameraKeyframes[4].look[2],
      ease: 'power2.in',
      duration: 0.35,
    }, 0.65);

    return () => {
      tl.kill();
    };
  }, [camera, cameraKeyframes, onDebugUpdate]);

  useFrame((_, delta) => {
    // Continuous smooth lerping for position & lookAt target
    camera.position.lerp(
      new THREE.Vector3(journey.camX, journey.camY, journey.camZ),
      delta * 8.0
    );

    targetRef.current.lerp(
      new THREE.Vector3(journey.lookX, journey.lookY, journey.lookZ),
      delta * 9.0
    );

    camera.lookAt(targetRef.current);
  });

  return null;
}
