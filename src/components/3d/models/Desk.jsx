// import { useGLTF } from '@react-three/drei';
import { RoundedBox } from '@react-three/drei';

export default function Desk(props) {
  // === GLB REPLACEMENT INSTRUCTIONS ===
  // 1. Place desk.glb in public/assets/3d/
  // 2. Uncomment the line below
  // const { scene } = useGLTF('/assets/3d/desk.glb');
  // 3. Replace the return statement with: return <primitive object={scene} {...props} />

  // Premium dark graphite material
  const deskMat = <meshStandardMaterial color="#17181A" roughness={0.8} metalness={0.2} />;

  return (
    <group {...props}>
      {/* Main desk surface with subtle bevels */}
      <RoundedBox args={[16, 0.3, 10]} radius={0.05} receiveShadow castShadow position={[0, -0.15, 0]}>
        {deskMat}
      </RoundedBox>
    </group>
  );
}
