// src/components/ModelCanvas.jsx
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const gltf = useGLTF('/model.glb');
  const modelRef = useRef();

  // Continuous rotation
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={modelRef} object={gltf.scene} scale={1} />;
}

export default function ModelCanvas() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [14, 4, 10], fov: 40 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} /> {/* Zoom disabled */}
      </Canvas>
    </div>
  );
}
