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
          toneMappingExposure: 1.1,
          outputColorSpace: THREE.SRGBColorSpace,
          antialias: true,
        }}
      >
        {/* Background: Near-Black #050505 (Seamless matching with main portfolio background) */}
        <color attach="background" args={['#050505']} />

        {/* ============================================================ */}
        {/* VIBRANT ATMOSPHERIC LIGHTING SETUP (MATCHING MODEL MATERIALS)*/}
        {/* ============================================================ */}
        {/* 1. Warm Bright Ambient Light */}
        <ambientLight intensity={1.1} color="#FFF8F0" />

        {/* 2. Main Window Daylight */}
        <directionalLight 
          position={[-20, 30, -5]} 
          intensity={1.5} 
          color="#FFFFFF"
          castShadow
          shadow-bias={-0.0001}
          shadow-mapSize={[2048, 2048]}
        />

        {/* 3. Bright Cyan Monitor Glow */}
        <pointLight 
          position={[0.0, 8.5, -8.5]} 
          intensity={4.5} 
          distance={15} 
          color="#00F0FF" 
          decay={2}
        />

        {/* 4. Warm Pink/Magenta Curtain Spotlight */}
        <spotLight 
          position={[-11.0, 14.0, -2.0]} 
          target-position={[-11.0, 8.0, -6.0]}
          intensity={4.0} 
          color="#FF6688" 
          angle={Math.PI / 3} 
          penumbra={0.4}
        />

        {/* 5. Front Fill Light */}
        <directionalLight position={[15, 18, 20]} intensity={0.5} color="#E2E8F0" />

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
