"use client";

import React, { useRef, useMemo, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three-stdlib";
import * as THREE from "three";
import { useScroll } from "framer-motion";
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
    console.warn("3D Canvas error caught safely:", error);
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
          color: "#f8fafc",
          roughness: 0.25,
          metalness: 0.85,
          envMapIntensity: 1.2,
        });
      }
    });
  }, [obj]);

  const { scrollYProgress } = useScroll();

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();

      // Floating motion (Sine wave on Y and slight dondolio on X/Z)
      meshRef.current.position.y = Math.sin(t * 0.5) * 2;
      meshRef.current.position.x = Math.cos(t * 0.3) * 1;

      // Subtle rotation noise
      meshRef.current.rotation.x = 0.1 + Math.sin(t * 0.4) * 0.05;
      meshRef.current.rotation.z = Math.cos(t * 0.3) * 0.04;

      // Scroll-linked rotation + slow constant spin
      const scrollRot = scrollYProgress.get() * Math.PI * 2;
      const constantSpin = t * 0.15;
      meshRef.current.rotation.y = scrollRot + constantSpin;
    }
  });

  return (
    <Center>
      <primitive ref={meshRef} object={obj} scale={1.2} />
    </Center>
  );
}

export function Hero3DAntenna() {
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [webGLOk, setWebGLOk] = useState(true);

  useEffect(() => {
    setMounted(true);
    setWebGLOk(isWebGLAvailable());
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  if (!mounted || !isDesktop) {
    return null;
  }

  if (!webGLOk) {
    // Fallback elegante se WebGL non è abilitato nel browser dell'utente
    return (
      <div className="w-full h-full relative z-10 flex items-center justify-center p-8">
        <div className="relative w-48 h-48 rounded-full border border-zefiro-cyan/30 flex items-center justify-center animate-pulse">
          <div className="w-32 h-32 rounded-full border border-zefiro-cyan/50 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-zefiro-cyan/20 flex items-center justify-center text-zefiro-cyan">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ThreeErrorBoundary>
      <div className="w-full h-full relative z-10 flex items-center justify-center">
        <Canvas
          camera={{ position: [0, 0, 40], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          <ambientLight intensity={0.7} />
          {/* Luci con colori brandizzati per dare riflessi azzurri e ottanio */}
          <directionalLight position={[10, 10, 5]} intensity={2.5} color="#00CEDB" />
          <directionalLight position={[-10, 5, -5]} intensity={1.8} color="#17556A" />
          <directionalLight position={[0, -10, 0]} intensity={1.2} color="#ffffff" />
          <pointLight position={[0, 5, 10]} intensity={1.5} color="#38bdf8" />

          {/* Ambiente 100% offline generato con Lightformer GPU: zero chiamate di rete esterne */}
          <Suspense fallback={null}>
            <AntennaMesh />
            <Environment resolution={256}>
              <group rotation={[-Math.PI / 3, 0, 1]}>
                <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} color="#00CEDB" />
                <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} color="#17556A" />
                <Lightformer form="circle" intensity={3} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} color="#ffffff" />
              </group>
            </Environment>
          </Suspense>

          {/* Disabilitiamo zoom e pan. Rotazione libera su desktop */}
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
        </Canvas>
      </div>
    </ThreeErrorBoundary>
  );
}
