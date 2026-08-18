# 3D Assets Directory

This directory is intended for your custom 3D models (`.glb` files) for the Digital Workbench scene.

## How to use custom models

When you are ready to replace the stylized Three.js primitives with your final 3D models, follow these steps:

1. Place your highly optimized `.glb` files in this directory.
2. Name them exactly as follows:
   - `desk.glb`
   - `monitor.glb`
   - `keyboard.glb`
3. Open the corresponding component in `src/components/3d/models/` (e.g., `Desk.jsx`).
4. Uncomment the `useGLTF` import and usage lines.
5. Replace the primitive `<mesh>` or `<group>` return block with `<primitive object={gltf.scene} />`.

> **Note**: Ensure your GLB models have their origin points properly centered at the bottom of the mesh to avoid positioning issues when dropping them in.
