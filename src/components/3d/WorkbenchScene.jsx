import { Canvas } from '@react-three/fiber';
import { BakeShadows } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import RoomEnvironment from './RoomEnvironment';
import JourneyCamera from './JourneyCamera';

export default function WorkbenchScene() {
  const doorHingeRef = useRef();

  return (
    <div className="w-full h-full" id="canvas-container">
      <Canvas 
        dpr={[1, 2]} 
        camera={{ position: [0, 1.7, 12.0], fov: 42 }}
        shadows
        gl={{
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
          outputColorSpace: THREE.SRGBColorSpace,
          antialias: true,
        }}
      >
        {/* Background: Architectural Warm Off-White #F3F1EC */}
        <color attach="background" args={['#F3F1EC']} />

        {/* ============================================================ */}
        {/* SOFT ARCHITECTURAL STUDIO LIGHTING                           */}
        {/* ============================================================ */}
        {/* 1. Soft Warm Ambient Light */}
        <ambientLight intensity={0.7} color="#FDFBF7" />

        {/* 2. Soft Key Sunlight / Studio Light */}
        <directionalLight 
          position={[-6, 12, 6]} 
          intensity={1.1} 
          color="#FFFDF8"
          castShadow
          shadow-bias={-0.0001}
          shadow-mapSize={[2048, 2048]}
        />

        {/* 3. Soft Architectural Fill Light */}
        <directionalLight position={[8, 8, -4]} intensity={0.35} color="#D8D5CE" />

        {/* 4. Front Bounce Fill Light */}
        <directionalLight position={[2, 4, 10]} intensity={0.25} color="#F3F1EC" />

        <Suspense fallback={null}>
          <RoomEnvironment doorHingeRef={doorHingeRef} />
          <BakeShadows />
        </Suspense>

        <JourneyCamera doorHingeRef={doorHingeRef} />
      </Canvas>
    </div>
  );
}
