"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three-stdlib";
import { useRef, useMemo, Suspense, useState, useEffect } from "react";
import * as THREE from "three";
import { useScroll } from "framer-motion";
import { Environment, OrbitControls, Center } from "@react-three/drei";

function AntennaMesh() {
  const obj = useLoader(OBJLoader, "/media/antenna.obj");
  const meshRef = useRef<THREE.Group>(null);

  useMemo(() => {
    obj.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = new THREE.MeshStandardMaterial({
          color: "#f8fafc",
          roughness: 0.2,
          metalness: 0.9,
          envMapIntensity: 1.5,
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
      <primitive
        ref={meshRef}
        object={obj}
        scale={1.2}
      />
    </Center>
  );
}

function Loader() {
  return null; // Il modello è piccolo, non mettiamo fallback invasivi
}

export function Hero3DAntenna() {
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  return (
    <div className="w-full h-full relative z-10 flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 40], fov: 45 }}>
        <ambientLight intensity={0.5} />
        {/* Luci con colori brandizzati per dare dei riflessi azzurri/ottanio sul metallo bianco */}
        <directionalLight position={[10, 10, 5]} intensity={2.5} color="#00CEDB" />
        <directionalLight position={[-10, 5, -5]} intensity={1.5} color="#17556A" />
        <directionalLight position={[0, -10, 0]} intensity={1} color="#ffffff" />

        <Suspense fallback={null}>
          <AntennaMesh />
          <Environment preset="studio" />
        </Suspense>
        {/* Disabilitiamo zoom e pan. Rotazione libera su desktop */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
        />
      </Canvas>
    </div>
  );
}
