import { RoundedBox, Cylinder } from '@react-three/drei';
import MonitorScreen from './MonitorScreen';

export default function Workstation(props) {
  // Realistic Object-Specific Material Palette
  const deskTopMat = (
    <meshStandardMaterial color="#3A3028" roughness={0.5} metalness={0.05} />
  );

  const deskLegMat = (
    <meshStandardMaterial color="#24201C" roughness={0.6} metalness={0.05} />
  );

  const metalFrameMat = (
    <meshStandardMaterial color="#252525" roughness={0.4} metalness={0.7} />
  );

  const monitorFrameMat = (
    <meshStandardMaterial color="#242424" roughness={0.5} metalness={0.2} />
  );

  const keyboardMat = (
    <meshStandardMaterial color="#292929" roughness={0.6} metalness={0.2} />
  );

  const laptopMat = (
    <meshStandardMaterial color="#9A9A96" roughness={0.4} metalness={0.7} />
  );

  const lampMat = (
    <meshStandardMaterial color="#777873" roughness={0.35} metalness={0.8} />
  );

  const bookMat1 = (
    <meshStandardMaterial color="#D0CBC1" roughness={0.7} />
  );

  const bookMat2 = (
    <meshStandardMaterial color="#817B72" roughness={0.7} />
  );

  const bookMat3 = (
    <meshStandardMaterial color="#4A4742" roughness={0.7} />
  );

  const plantMat = (
    <meshStandardMaterial color="#365C3A" roughness={0.8} />
  );

  const potMat = (
    <meshStandardMaterial color="#D7D0C5" roughness={0.75} metalness={0.05} />
  );

  // Ergonomic Office Chair Materials
  const chairFabricMat = (
    <meshStandardMaterial color="#4A4844" roughness={0.75} metalness={0.05} />
  );

  const chairFrameMat = (
    <meshStandardMaterial color="#252525" roughness={0.6} metalness={0.2} />
  );

  const chairBaseMat = (
    <meshStandardMaterial color="#3A3A38" roughness={0.35} metalness={0.8} />
  );

  return (
    <group {...props}>
      {/* ============================================================ */}
      {/* 1. DEVELOPER DESK (Dark Espresso Walnut #3A3028)             */}
      {/* ============================================================ */}
      {/* Desktop Surface */}
      <RoundedBox args={[3.8, 0.1, 1.8]} radius={0.02} position={[0, 1.05, 0]} castShadow receiveShadow>
        {deskTopMat}
      </RoundedBox>

      {/* Structural Steel Frame & Legs */}
      <RoundedBox args={[0.08, 1.0, 1.6]} radius={0.01} position={[-1.75, 0.5, 0]} castShadow receiveShadow>{deskLegMat}</RoundedBox>
      <RoundedBox args={[0.08, 1.0, 1.6]} radius={0.01} position={[1.75, 0.5, 0]} castShadow receiveShadow>{deskLegMat}</RoundedBox>
      <RoundedBox args={[3.4, 0.06, 0.06]} radius={0.01} position={[0, 0.95, -0.7]}>{deskLegMat}</RoundedBox>

      {/* Side Storage Drawer Unit */}
      <RoundedBox args={[0.8, 0.7, 1.4]} radius={0.02} position={[1.3, 0.45, 0]} castShadow receiveShadow>
        {deskLegMat}
      </RoundedBox>

      {/* Under-Desk Compact PC Workstation */}
      <RoundedBox args={[0.4, 0.65, 0.9]} radius={0.02} position={[-1.25, 0.45, 0]} castShadow receiveShadow>
        {metalFrameMat}
      </RoundedBox>

      {/* ============================================================ */}
      {/* 2. ULTRAWIDE DEVELOPER MONITOR (#242424 Graphite Frame)      */}
      {/* ============================================================ */}
      <group position={[0, 1.65, -0.35]}>
        {/* Articulated Arm Stand Clamped to Desk */}
        <Cylinder args={[0.04, 0.04, 0.55, 16]} position={[0, -0.35, -0.2]}>{metalFrameMat}</Cylinder>
        <RoundedBox args={[0.16, 0.16, 0.25]} radius={0.02} position={[0, -0.1, -0.1]}>{metalFrameMat}</RoundedBox>

        {/* Curved Ultrawide Display Frame */}
        <RoundedBox args={[2.8, 1.15, 0.08]} radius={0.03} position={[0, 0, 0]} castShadow receiveShadow>
          {monitorFrameMat}
        </RoundedBox>

        {/* Screen Display Surface */}
        <group position={[0, 0, 0.042]}>
          <MonitorScreen />
        </group>
      </group>

      {/* ============================================================ */}
      {/* 3. KEYBOARD, MOUSE & DESK PAD                                */}
      {/* ============================================================ */}
      {/* Felt Desk Mat */}
      <RoundedBox args={[2.2, 0.015, 0.85]} radius={0.02} position={[0, 1.11, 0.3]} receiveShadow>
        {metalFrameMat}
      </RoundedBox>

      {/* Mechanical Keyboard */}
      <group position={[0, 1.135, 0.32]}>
        <RoundedBox args={[0.95, 0.035, 0.35]} radius={0.01} castShadow>
          {keyboardMat}
        </RoundedBox>
      </group>

      {/* Ergonomic Mouse */}
      <group position={[0.68, 1.135, 0.35]}>
        <RoundedBox args={[0.16, 0.04, 0.26]} radius={0.02} castShadow>
          {keyboardMat}
        </RoundedBox>
      </group>

      {/* ============================================================ */}
      {/* 4. SECONDARY LAPTOP (Satin Aluminum #9A9A96)                 */}
      {/* ============================================================ */}
      <group position={[-1.15, 1.12, 0.15]} rotation={[0, 0.25, 0]}>
        <RoundedBox args={[0.65, 0.02, 0.45]} radius={0.01} castShadow>
          {laptopMat}
        </RoundedBox>
        <RoundedBox args={[0.65, 0.42, 0.02]} radius={0.01} position={[0, 0.2, -0.22]} rotation={[-0.2, 0, 0]} castShadow>
          {laptopMat}
        </RoundedBox>
      </group>

      {/* ============================================================ */}
      {/* 5. HEADPHONES ON STAND (Left Rear)                           */}
      {/* ============================================================ */}
      <group position={[-1.4, 1.11, -0.45]}>
        <Cylinder args={[0.1, 0.12, 0.02, 16]} position={[0, 0.01, 0]}>{lampMat}</Cylinder>
        <Cylinder args={[0.018, 0.018, 0.38, 16]} position={[0, 0.2, 0]}>{lampMat}</Cylinder>
        <RoundedBox args={[0.22, 0.04, 0.16]} radius={0.02} position={[0, 0.38, 0]}>{keyboardMat}</RoundedBox>
      </group>

      {/* ============================================================ */}
      {/* 6. STACK OF TECHNICAL BOOKS (Right Rear)                     */}
      {/* ============================================================ */}
      <group position={[1.2, 1.11, -0.4]}>
        <RoundedBox args={[0.45, 0.06, 0.6]} radius={0.01} position={[0, 0.03, 0]} castShadow>{bookMat1}</RoundedBox>
        <RoundedBox args={[0.42, 0.055, 0.58]} radius={0.01} position={[0.02, 0.088, 0.02]} rotation={[0, 0.08, 0]} castShadow>{bookMat2}</RoundedBox>
        <RoundedBox args={[0.4, 0.05, 0.55]} radius={0.01} position={[-0.01, 0.14, -0.01]} rotation={[0, -0.05, 0]} castShadow>{bookMat3}</RoundedBox>
      </group>

      {/* ============================================================ */}
      {/* 7. DESK LAMP (Brushed Metallic #777873)                      */}
      {/* ============================================================ */}
      <group position={[1.45, 1.11, -0.2]}>
        <Cylinder args={[0.12, 0.14, 0.025, 16]} position={[0, 0.015, 0]}>{lampMat}</Cylinder>
        <Cylinder args={[0.02, 0.02, 0.45, 16]} position={[0, 0.24, 0]}>{lampMat}</Cylinder>
        <RoundedBox args={[0.3, 0.04, 0.12]} radius={0.01} position={[-0.1, 0.48, 0]} rotation={[0, 0, -0.25]}>{lampMat}</RoundedBox>
      </group>

      {/* ============================================================ */}
      {/* 8. NOTEBOOK & PEN (Front Left)                               */}
      {/* ============================================================ */}
      <group position={[-0.68, 1.115, 0.48]} rotation={[0, -0.12, 0]}>
        <RoundedBox args={[0.32, 0.02, 0.44]} radius={0.01} castShadow>{bookMat3}</RoundedBox>
      </group>

      {/* ============================================================ */}
      {/* 9. SMALL POTTED PLANT (Ceramic #D7D0C5, Leaf #365C3A)       */}
      {/* ============================================================ */}
      <group position={[1.5, 1.11, 0.45]}>
        <Cylinder args={[0.08, 0.06, 0.16, 16]} position={[0, 0.08, 0]} castShadow>{potMat}</Cylinder>
        <Cylinder args={[0.12, 0.04, 0.18, 8]} position={[0, 0.22, 0]}>{plantMat}</Cylinder>
      </group>

      {/* ============================================================ */}
      {/* 10. ERGONOMIC OFFICE CHAIR (#4A4844 Upholstery, #3A3A38 Base) */}
      {/* ============================================================ */}
      <group position={[0.35, 0, 1.6]} rotation={[0, -0.15, 0]}>
        {/* Star Base & Wheels */}
        <Cylinder args={[0.25, 0.28, 0.04, 5]} position={[0, 0.02, 0]}>{chairBaseMat}</Cylinder>
        <Cylinder args={[0.035, 0.035, 0.45, 16]} position={[0, 0.25, 0]}>{chairBaseMat}</Cylinder>

        {/* Seat Cushion */}
        <RoundedBox args={[0.55, 0.08, 0.52]} radius={0.03} position={[0, 0.52, 0]} castShadow receiveShadow>
          {chairFabricMat}
        </RoundedBox>

        {/* Mesh Backrest */}
        <RoundedBox args={[0.52, 0.65, 0.05]} radius={0.03} position={[0, 0.9, -0.23]} rotation={[-0.08, 0, 0]} castShadow>
          {chairFabricMat}
        </RoundedBox>

        {/* Armrests */}
        <RoundedBox args={[0.06, 0.25, 0.35]} radius={0.02} position={[-0.3, 0.68, 0]}>{chairFrameMat}</RoundedBox>
        <RoundedBox args={[0.06, 0.25, 0.35]} radius={0.02} position={[0.3, 0.68, 0]}>{chairFrameMat}</RoundedBox>
      </group>
    </group>
  );
}
