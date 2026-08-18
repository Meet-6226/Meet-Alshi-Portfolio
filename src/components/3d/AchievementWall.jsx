import { RoundedBox, Html } from '@react-three/drei';

export default function AchievementWall(props) {
  const frameMat = (
    <meshStandardMaterial color="#151515" roughness={0.6} metalness={0.3} />
  );

  const certMat = (
    <meshStandardMaterial color="#F8F7F3" roughness={0.4} metalness={0.05} />
  );

  return (
    <group {...props}>
      {/* Wall Header Plaque */}
      <group position={[0, 3.1, 0]}>
        <Html center transform distanceFactor={2.5} className="pointer-events-none select-none">
          <div className="font-mono text-xs tracking-[0.25em] text-[#111111] uppercase border-b border-black/15 pb-1 whitespace-nowrap font-semibold">
            HONORS & CERTIFICATIONS
          </div>
        </Html>
      </group>

      {/* 1. Certificate Frame 1 (Hackathon Winner) */}
      <group position={[-0.85, 2.0, 0]}>
        <RoundedBox args={[1.35, 1.0, 0.05]} radius={0.02} castShadow receiveShadow>
          {frameMat}
        </RoundedBox>
        <mesh position={[0, 0, 0.028]}>
          <planeGeometry args={[1.25, 0.9]} />
          {certMat}
        </mesh>
        <Html 
          transform 
          distanceFactor={2.2}
          position={[0, 0, 0.035]} 
          className="pointer-events-none select-none"
        >
          <div className="w-[300px] h-[200px] bg-[#F8F7F3] text-[#111111] p-5 flex flex-col justify-center items-center text-center rounded border border-black/10 shadow-md">
            <span className="text-[10px] font-mono tracking-widest text-[#B8F500] uppercase block mb-1 font-bold bg-[#151515] px-2 py-0.5 rounded-[2px]">
              HACKATHON 2025
            </span>
            <span className="text-lg font-heading font-bold block mb-1 text-[#111111]">
              1ST PLACE WINNER
            </span>
            <span className="text-[11px] font-sans text-[#666666] block">
              Full-Stack Innovation & Architecture
            </span>
          </div>
        </Html>
      </group>

      {/* 2. Certificate Frame 2 (Cloud / Systems Certification) */}
      <group position={[0.85, 2.0, 0]}>
        <RoundedBox args={[1.35, 1.0, 0.05]} radius={0.02} castShadow receiveShadow>
          {frameMat}
        </RoundedBox>
        <mesh position={[0, 0, 0.028]}>
          <planeGeometry args={[1.25, 0.9]} />
          {certMat}
        </mesh>
        <Html 
          transform 
          distanceFactor={2.2}
          position={[0, 0, 0.035]} 
          className="pointer-events-none select-none"
        >
          <div className="w-[300px] h-[200px] bg-[#F8F7F3] text-[#111111] p-5 flex flex-col justify-center items-center text-center rounded border border-black/10 shadow-md">
            <span className="text-[10px] font-mono tracking-widest text-[#B8F500] uppercase block mb-1 font-bold bg-[#151515] px-2 py-0.5 rounded-[2px]">
              CERTIFIED ENGINEER
            </span>
            <span className="text-lg font-heading font-bold block mb-1 text-[#111111]">
              DISTRIBUTED SYSTEMS
            </span>
            <span className="text-[11px] font-sans text-[#666666] block">
              Cloud Architecture & Scalability
            </span>
          </div>
        </Html>
      </group>
    </group>
  );
}
