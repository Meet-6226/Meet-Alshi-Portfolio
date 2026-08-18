// import { useGLTF } from '@react-three/drei';
import { RoundedBox, Cylinder } from '@react-three/drei';
import MonitorScreen from '../MonitorScreen';

export default function Monitor(props) {
  // === GLB REPLACEMENT INSTRUCTIONS ===
  // 1. Place monitor.glb in public/assets/3d/
  // 2. Uncomment the line below
  // const { scene } = useGLTF('/assets/3d/monitor.glb');
  // 3. Remove the primitives below but KEEP <MonitorScreen /> positioned appropriately inside the new mesh.

  const monitorMat = <meshStandardMaterial color="#0B0B0C" roughness={0.7} metalness={0.5} />;

  return (
    <group {...props}>
      {/* Base */}
      <Cylinder args={[0.6, 0.8, 0.1, 32]} position={[0, 0.05, 0]} castShadow receiveShadow>
        {monitorMat}
      </Cylinder>
      {/* Stand */}
      <RoundedBox args={[0.2, 1.8, 0.2]} radius={0.02} position={[0, 0.9, 0]} castShadow receiveShadow>
        {monitorMat}
      </RoundedBox>
      {/* Screen Frame */}
      <RoundedBox args={[6.2, 3.6, 0.15]} radius={0.05} position={[0, 2.2, 0.15]} castShadow receiveShadow>
        {monitorMat}
      </RoundedBox>
      
      {/* HTML Screen component positioned on the face of the monitor frame */}
      {/* Re-using the same abstract UI component as before */}
      <group position={[0, 2.2, 0.23]}>
         <MonitorScreen />
      </group>
    </group>
  );
}
