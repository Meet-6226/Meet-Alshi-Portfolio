import { useGLTF } from '@react-three/drei';
import { useMemo, useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import MonitorScreen from './MonitorScreen';

export default function RealRoomModel(props) {
  // Load public/assets/3d/my_room.glb
  const { scene } = useGLTF('/assets/3d/my_room.glb', true, true);
  const [monitorTransform, setMonitorTransform] = useState(null);
  const groupRef = useRef();

  // Clone scene, enable shadows, and darken monitor glass surfaces to sleek dark graphite
  const clonedScene = useMemo(() => {
    if (!scene) return null;
    const cloned = scene.clone(true);

    cloned.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        
        // Darken monitor display glass meshes to sleek dark graphite (#06080C)
        if (child.name.includes('monitor') || child.name.includes('comp')) {
          if (child.material) {
            child.material = child.material.clone();
            child.material.color = new THREE.Color('#06080C');
            child.material.emissive = new THREE.Color('#020304');
            child.material.needsUpdate = true;
          }
        } else if (child.material) {
          child.material.needsUpdate = true;
        }
      }
    });

    return cloned;
  }, [scene]);

  // Derive EXACT 3D World Position, Quaternion, and Bounding Box of monitor3_blinn1_0 screen mesh
  useEffect(() => {
    if (!clonedScene) return;

    // Force update matrix world for 100% precise world transforms
    clonedScene.updateMatrixWorld(true);

    let monitor3Mesh = null;
    clonedScene.traverse((child) => {
      if (child.isMesh && (child.name === 'monitor3_blinn1_0' || child.name.includes('monitor3'))) {
        monitor3Mesh = child;
      }
    });

    if (monitor3Mesh) {
      const worldPos = new THREE.Vector3();
      const worldQuat = new THREE.Quaternion();
      const box = new THREE.Box3().setFromObject(monitor3Mesh);
      const size = new THREE.Vector3();
      const center = new THREE.Vector3();

      monitor3Mesh.getWorldPosition(worldPos);
      monitor3Mesh.getWorldQuaternion(worldQuat);
      box.getSize(size);
      box.getCenter(center);

      console.log('[my_room.glb] monitor3_blinn1_0 World Center:', center);
      console.log('[my_room.glb] monitor3_blinn1_0 World Size (W x H x D):', size);

      setMonitorTransform({
        // Centered on the glass screen, offset 0.04 units in front along normal to prevent z-fighting
        position: [center.x, center.y + 0.15, box.max.z + 0.04],
        quaternion: worldQuat,
        width: size.x * 0.92,
        height: size.y * 0.88,
      });
    }
  }, [clonedScene]);

  if (!clonedScene) return null;

  return (
    <group ref={groupRef} {...props}>
      {/* Authentic 3D GLB Room Model with Native Materials */}
      <primitive object={clonedScene} />

      {/* Portfolio Display mapped DIRECTLY to RIGHT PHYSICAL MONITOR SCREEN MESH (monitor3_blinn1_0) */}
      {monitorTransform ? (
        <group position={monitorTransform.position} quaternion={monitorTransform.quaternion}>
          <MonitorScreen width={monitorTransform.width} height={monitorTransform.height} />
        </group>
      ) : (
        <group position={[2.23, 8.55, -9.30]}>
          <MonitorScreen />
        </group>
      )}
    </group>
  );
}

useGLTF.preload('/assets/3d/my_room.glb');
