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
          toneMappingExposure: 1.0,
          outputColorSpace: THREE.SRGBColorSpace,
          antialias: true,
        }}
      >
        {/* Background: Seamless Near-Black #050505 */}
        <color attach="background" args={['#050505']} />

        {/* ============================================================ */}
        {/* WARM COZY EVENING DEVELOPER WORKSPACE LIGHTING              */}
        {/* ============================================================ */}
        
        {/* 1. Gentle Ambient Light (Preserves natural wall, floor & curtain visibility) */}
        <ambientLight intensity={0.75} color="#FFF8F0" />

        {/* 2. Soft Evening Key Light (15-20% reduction from original to preserve depth) */}
        <directionalLight 
          position={[-20, 30, -5]} 
          intensity={1.15} 
          color="#F5F8FC"
          castShadow
          shadow-bias={-0.0001}
          shadow-mapSize={[2048, 2048]}
        />

        {/* 3. Desk Warm Focal Glow (Soft warm evening light keeping desk as focal point) */}
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
