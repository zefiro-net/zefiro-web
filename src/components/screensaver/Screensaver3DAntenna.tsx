"use client";

import React, { useRef, useMemo, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three-stdlib";
import * as THREE from "three";
import { Environment, Lightformer, OrbitControls, Center } from "@react-three/drei";

function isWebGLAvailable(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl2") || canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

class ThreeErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: unknown) {
    console.warn("Screensaver 3D Canvas error caught safely:", error);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || null;
    }
    return this.props.children;
  }
}

function AntennaMesh() {
  const obj = useLoader(OBJLoader, "/media/antenna.obj");
  const meshRef = useRef<THREE.Group>(null);

  useMemo(() => {
    obj.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = new THREE.MeshStandardMaterial({
          color: "#ffffff",
          roughness: 0.2,
          metalness: 0.9,
          envMapIntensity: 1.5,
        });
      }
    });
  }, [obj]);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();

      // Gentle floating sine wave motion
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
      <primitive ref={meshRef} object={obj} scale={1.0} />
    </Center>
  );
}

export function Screensaver3DAntenna() {
  const [mounted, setMounted] = useState(false);
  const [webGLOk, setWebGLOk] = useState(true);

  useEffect(() => {
    setMounted(true);
    setWebGLOk(isWebGLAvailable());
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-2 border-zefiro-cyan/20 border-t-zefiro-cyan animate-spin"></div>
      </div>
    );
  }

  if (!webGLOk) {
    return (
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="w-24 h-24 rounded-full border border-zefiro-cyan/40 flex items-center justify-center text-zefiro-cyan">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <ThreeErrorBoundary>
      <div className="w-full h-full relative z-10 flex items-center justify-center">
        <Canvas
          camera={{ position: [0, 1, 56], fov: 38 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          <ambientLight intensity={0.6} />
          {/* Cinematic brand glow lighting */}
          <directionalLight position={[12, 12, 8]} intensity={3.5} color="#00CEDB" />
          <directionalLight position={[-12, 8, -6]} intensity={2.2} color="#17556A" />
          <directionalLight position={[0, -12, 4]} intensity={1.5} color="#38bdf8" />
          <pointLight position={[0, 0, 15]} intensity={1.2} color="#ffffff" />

          {/* Ambiente 100% offline generato via GPU Lightformer */}
          <Suspense fallback={null}>
            <AntennaMesh />
            <Environment resolution={256}>
              <group rotation={[-Math.PI / 3, 0, 1]}>
                <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} color="#00CEDB" />
                <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} color="#17556A" />
                <Lightformer form="circle" intensity={3} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} color="#38bdf8" />
              </group>
            </Environment>
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
    </ThreeErrorBoundary>
  );
}
