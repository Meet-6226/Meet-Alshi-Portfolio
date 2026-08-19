import { Canvas } from '@react-three/fiber';
import { BakeShadows } from '@react-three/drei';
import { Suspense, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import RoomEnvironment from './RoomEnvironment';
import JourneyCamera from './JourneyCamera';

export default function WorkbenchScene({ onDebugUpdate }) {
  const doorHingeRef = useRef();
  const containerRef = useRef();
  const [isInView, setIsInView] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // 1. Mobile / Low-Tier Device Detection
  useEffect(() => {
    const checkMobile = () => {
      const mobileUA = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const smallScreen = window.innerWidth < 768;
      setIsMobile(mobileUA || smallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 2. Viewport Visibility Observer — Pause GPU rendering when scrolled out of view
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full bg-[#050505]" id="canvas-container">
      <Canvas 
        dpr={isMobile ? [1, 1] : [1, 1.5]}
        frameloop={isInView ? 'always' : 'never'}
        camera={{ position: [26.5, 23.8, 28.5], fov: 48, near: 0.1, far: 1000 }}
        shadows={!isMobile}
        gl={{
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
          outputColorSpace: THREE.SRGBColorSpace,
          antialias: !isMobile,
          powerPreference: 'high-performance',
        }}
      >
        {/* Background: Seamless Near-Black #050505 */}
        <color attach="background" args={['#050505']} />

        {/* ============================================================ */}
        {/* WARM COZY EVENING DEVELOPER WORKSPACE LIGHTING              */}
        {/* ============================================================ */}
        
        {/* 1. Gentle Ambient Light */}
        <ambientLight intensity={0.75} color="#FFF8F0" />

        {/* 2. Soft Evening Key Light */}
        <directionalLight 
          position={[-20, 30, -5]} 
          intensity={1.15} 
          color="#F5F8FC"
          castShadow={!isMobile}
          shadow-bias={-0.0001}
          shadow-mapSize={isMobile ? [512, 512] : [1024, 1024]}
        />

        {/* 3. Desk Warm Focal Glow */}
        <pointLight 
          position={[0.0, 8.5, -8.5]} 
          intensity={2.2} 
          distance={15} 
          color="#FFDDAA" 
          decay={2}
        />

        {/* 4. Warm Curtain & Background Accent Spotlight */}
        <spotLight 
          position={[-11.0, 14.0, -2.0]} 
          target-position={[-11.0, 8.0, -6.0]}
          intensity={1.8} 
          color="#FFAA88" 
          angle={Math.PI / 3} 
          penumbra={0.4}
        />

        {/* 5. Soft Front Fill Light */}
        <directionalLight position={[15, 18, 20]} intensity={0.4} color="#E8EEF5" />

        {/* 6. Gentle Silhouette Rim Light */}
        <directionalLight position={[25, 20, -15]} intensity={0.5} color="#E2E8F0" />

        <Suspense fallback={null}>
          <RoomEnvironment doorHingeRef={doorHingeRef} />
          <BakeShadows />
        </Suspense>

        {/* Master Camera Controller */}
        <JourneyCamera doorHingeRef={doorHingeRef} onDebugUpdate={onDebugUpdate} />
      </Canvas>
    </div>
  );
}
