import RealRoomModel from './RealRoomModel';

export default function RoomEnvironment({ doorHingeRef }) {
  return (
    <group>
      {/* ============================================================ */}
      {/* AUTHENTIC 3D ROOM MODEL (my_room.glb) ONLY                   */}
      {/* All old primitive shapes, walls, doors, & cards REMOVED      */}
      {/* ============================================================ */}
      <RealRoomModel doorHingeRef={doorHingeRef} position={[0, 0, 0]} />
    </group>
  );
}
