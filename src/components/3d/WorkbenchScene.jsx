import { Canvas } from '@react-three/fiber';
import { BakeShadows } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import RoomEnvironment from './RoomEnvironment';
import JourneyCamera from './JourneyCamera';

export default function WorkbenchScene({ onDebugUpdate }) {
  const doorHingeRef = useRef();

  return (
    <div className="w-full h-full bg-[#050505]" id="canvas-container">
      <Canvas 
        dpr={[1, 2]} 
        camera={{ position: [26.5, 23.8, 28.5], fov: 48, near: 0.1, far: 1000 }}
        shadows
        gl={{
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 0.8,
          outputColorSpace: THREE.SRGBColorSpace,
          antialias: true,
        }}
      >
        {/* Background: Seamless Near-Black #050505 */}
        <color attach="background" args={['#050505']} />

        {/* ============================================================ */}
        {/* REFINED LOW-KEY ARCHITECTURAL LIGHTING SETUP                */}
        {/* ============================================================ */}
        
        {/* 1. Muted Ambient Light (Prevents washed out surfaces, preserves deep contrast) */}
        <ambientLight intensity={0.35} color="#DDE4ED" />

        {/* 2. Main Window Key Light (Reduced intensity to reveal form without glare) */}
        <directionalLight 
          position={[-20, 30, -5]} 
          intensity={0.85} 
          color="#F0F4F8"
          castShadow
          shadow-bias={-0.0001}
          shadow-mapSize={[2048, 2048]}
        />

        {/* 3. Subtle Desk Ambient Fill (Replaces bright cyan with natural muted tone) */}
        <pointLight 
          position={[0.0, 8.5, -8.5]} 
          intensity={1.2} 
          distance={12} 
          color="#A6B84A" 
          decay={2}
        />

        {/* 4. Subtle Wall Accent Spot Light (Replaces bright magenta with warm architectural fill) */}
        <spotLight 
          position={[-11.0, 14.0, -2.0]} 
          target-position={[-11.0, 8.0, -6.0]}
          intensity={0.8} 
          color="#D4AF37" 
          angle={Math.PI / 3} 
          penumbra={0.5}
        />

        {/* 5. Soft Front Fill Light */}
        <directionalLight position={[15, 18, 20]} intensity={0.3} color="#D0D7DE" />

        {/* 6. Subtle Rim Light (Preserves model silhouette against black background) */}
        <directionalLight position={[25, 20, -15]} intensity={0.75} color="#C2D2E8" />

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
