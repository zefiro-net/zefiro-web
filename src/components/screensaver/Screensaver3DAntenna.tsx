"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three-stdlib";
import { useRef, useMemo, Suspense, useState, useEffect } from "react";
import * as THREE from "three";
import { Environment, OrbitControls, Center } from "@react-three/drei";

function AntennaMesh() {
  const obj = useLoader(OBJLoader, "/media/antenna.obj");
  const meshRef = useRef<THREE.Group>(null);

  useMemo(() => {
    obj.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = new THREE.MeshStandardMaterial({
          color: "#ffffff",
          roughness: 0.15,
          metalness: 0.95,
          envMapIntensity: 2.0,
        });
      }
    });
  }, [obj]);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();

      // Gentle floating sine wave motion (constrained to avoid vertical clipping)
      meshRef.current.position.y = Math.sin(t * 0.4) * 0.8;
      meshRef.current.position.x = Math.cos(t * 0.25) * 1.0;

      // Subtle wobble on X/Z
      meshRef.current.rotation.x = 0.08 + Math.sin(t * 0.3) * 0.04;
      meshRef.current.rotation.z = Math.cos(t * 0.25) * 0.03;

      // Continuous, smooth 360-degree rotation
      meshRef.current.rotation.y = t * 0.22;
    }
  });

  return (
    <Center>
      <primitive
        ref={meshRef}
        object={obj}
        scale={1.0}
      />
    </Center>
  );
}

export function Screensaver3DAntenna() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-2 border-zefiro-cyan/20 border-t-zefiro-cyan animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative z-10 flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 1, 56], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.6} />
        {/* Cinematic brand glow lighting (cyan rim light + teal fill) */}
        <directionalLight position={[12, 12, 8]} intensity={3.5} color="#00CEDB" />
        <directionalLight position={[-12, 8, -6]} intensity={2.2} color="#17556A" />
        <directionalLight position={[0, -12, 4]} intensity={1.5} color="#38bdf8" />
        <pointLight position={[0, 0, 15]} intensity={1.2} color="#ffffff" />

        <Suspense fallback={null}>
          <AntennaMesh />
          <Environment preset="night" />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
          rotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}
