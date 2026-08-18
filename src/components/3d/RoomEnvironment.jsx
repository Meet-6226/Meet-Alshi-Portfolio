import { RoundedBox, Html } from '@react-three/drei';
import Workstation from './Workstation';
import ProjectWall from './ProjectWall';
import AchievementWall from './AchievementWall';

export default function RoomEnvironment({ doorHingeRef }) {
  // Realistic Architectural Studio Material Palette
  const wallMat = (
    <meshStandardMaterial color="#F3F1EC" roughness={0.85} metalness={0.02} />
  );

  const hallwayWallMat = (
    <meshStandardMaterial color="#E8E7E2" roughness={0.85} metalness={0.02} />
  );

  const roomFloorMat = (
    <meshStandardMaterial color="#D8D5CE" roughness={0.85} metalness={0.05} />
  );

  const hallwayFloorMat = (
    <meshStandardMaterial color="#DDDCD7" roughness={0.8} metalness={0.05} />
  );

  const doorMat = (
    <meshStandardMaterial color="#292725" roughness={0.7} metalness={0.1} />
  );

  const trimMat = (
    <meshStandardMaterial color="#45433F" roughness={0.6} metalness={0.1} />
  );

  const handleMat = (
    <meshStandardMaterial color="#8C8C86" roughness={0.3} metalness={0.85} />
  );

  return (
    <group>
      {/* ============================================================ */}
      {/* 1. HALLWAY & EXTERIOR (Z > 8)                                */}
      {/* ============================================================ */}
      {/* Hallway Floor */}
      <mesh position={[0, -0.01, 13]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[12, 10]} />
        {hallwayFloorMat}
      </mesh>

      {/* Hallway Left Wall */}
      <mesh position={[-4.5, 2.5, 13]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[10, 5.5]} />
        {hallwayWallMat}
      </mesh>

      {/* Hallway Right Wall */}
      <mesh position={[4.5, 2.5, 13]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[10, 5.5]} />
        {hallwayWallMat}
      </mesh>

      {/* ============================================================ */}
      {/* 2. DOORWAY WALL & HINGED DOOR (Z = 8)                        */}
      {/* ============================================================ */}
      {/* Left Wall Segment (Width 5.5) */}
      <RoundedBox args={[5.5, 5.0, 0.2]} radius={0.02} position={[-4.0, 2.5, 8]} receiveShadow castShadow>
        {wallMat}
      </RoundedBox>

      {/* Right Wall Segment (Width 5.5) */}
      <RoundedBox args={[5.5, 5.0, 0.2]} radius={0.02} position={[4.0, 2.5, 8]} receiveShadow castShadow>
        {wallMat}
      </RoundedBox>

      {/* Lintel above door */}
      <RoundedBox args={[2.5, 2.0, 0.2]} radius={0.02} position={[0, 4.0, 8]} receiveShadow castShadow>
        {wallMat}
      </RoundedBox>

      {/* Door Frame Trim */}
      <RoundedBox args={[0.08, 3.0, 0.24]} radius={0.01} position={[-1.24, 1.5, 8]}>{trimMat}</RoundedBox>
      <RoundedBox args={[0.08, 3.0, 0.24]} radius={0.01} position={[1.24, 1.5, 8]}>{trimMat}</RoundedBox>
      <RoundedBox args={[2.56, 0.08, 0.24]} radius={0.01} position={[0, 3.0, 8]}>{trimMat}</RoundedBox>

      {/* HINGED DOOR (Pivots at X = -1.2, Z = 8) */}
      <group ref={doorHingeRef} position={[-1.2, 0, 8]}>
        {/* Door Panel */}
        <RoundedBox args={[2.4, 2.96, 0.08]} radius={0.02} position={[1.2, 1.48, 0]} castShadow receiveShadow>
          {doorMat}
        </RoundedBox>

        {/* Minimal Door Plaque (MEET / DEV) */}
        <group position={[1.2, 1.65, 0.045]}>
          <RoundedBox args={[0.8, 0.28, 0.01]} radius={0.005}>
            <meshStandardMaterial color="#292725" roughness={0.5} metalness={0.1} />
          </RoundedBox>
          <Html position={[0, 0, 0.01]} center transform distanceFactor={5} style={{ pointerEvents: 'none' }}>
            <div className="flex items-center gap-1.5 px-3 py-1 font-mono text-[9px] tracking-[0.25em] uppercase select-none border rounded-[2px] shadow-sm text-[#F3F1EC] border-white/10 bg-[#292725]">
              <span>MEET</span>
              <span className="text-[#B8F500] font-bold">/</span>
              <span>DEV</span>
            </div>
          </Html>
        </group>

        {/* Brushed Metal Door Handle */}
        <group position={[2.2, 1.3, 0.06]}>
          <RoundedBox args={[0.04, 0.25, 0.04]} radius={0.01}>{handleMat}</RoundedBox>
          <RoundedBox args={[0.12, 0.03, 0.03]} radius={0.005} position={[-0.05, 0.08, 0.02]}>{handleMat}</RoundedBox>
        </group>
      </group>

      {/* ============================================================ */}
      {/* 3. ROOM ENCLOSURE (Z <= 8)                                   */}
      {/* ============================================================ */}
      {/* Room Floor */}
      <mesh position={[0, -0.02, 1.5]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[14, 14]} />
        {roomFloorMat}
      </mesh>

      {/* Rear Wall at Z = -4.8 */}
      <mesh position={[0, 2.8, -4.8]} receiveShadow>
        <planeGeometry args={[14, 6]} />
        {wallMat}
      </mesh>

      {/* Left Wall at X = -6.0 */}
      <mesh position={[-6.0, 2.8, 1.5]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[14, 6]} />
        {wallMat}
      </mesh>

      {/* Right Wall at X = 6.0 */}
      <mesh position={[6.0, 2.8, 1.5]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[14, 6]} />
        {wallMat}
      </mesh>

      {/* Baseboards */}
      <RoundedBox args={[14, 0.15, 0.06]} radius={0.01} position={[0, 0.075, -4.75]}>{trimMat}</RoundedBox>
      <RoundedBox args={[0.06, 0.15, 13]} radius={0.01} position={[-5.95, 0.075, 1.5]}>{trimMat}</RoundedBox>
      <RoundedBox args={[0.06, 0.15, 13]} radius={0.01} position={[5.95, 0.075, 1.5]}>{trimMat}</RoundedBox>

      {/* ============================================================ */}
      {/* 4. WORKSPACE ZONES (Separated onto dedicated walls)          */}
      {/* ============================================================ */}
      {/* Main Developer Workstation (Center / Front) */}
      <Workstation position={[0, 0, 0]} />

      {/* Project Archive Wall (Mounted flush on LEFT WALL facing +X) */}
      <ProjectWall position={[-5.88, 0, -0.5]} rotation={[0, Math.PI / 2, 0]} />

      {/* Honors & Achievement Wall (Mounted flush on RIGHT WALL facing -X) */}
      <AchievementWall position={[5.88, 0, -0.5]} rotation={[0, -Math.PI / 2, 0]} />
    </group>
  );
}
