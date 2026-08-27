/* eslint-disable react-hooks/purity, react-hooks/refs */
"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleSwarm = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const totalCount = 600; // Constant amount of particles (few, elegant)

  const mouseRef = useRef({ x: -9999, y: -9999 });

  React.useEffect(() => {
    const handleMouseMove = (e: PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      // Calculate position relative to the container for accurate tracking even during scroll
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      mouseRef.current = { x, y };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };
    window.addEventListener('pointermove', handleMouseMove);
    window.addEventListener('pointerleave', handleMouseLeave);
    return () => {
      window.removeEventListener('pointermove', handleMouseMove);
      window.removeEventListener('pointerleave', handleMouseLeave);
    };
  }, [containerRef]);

  const baseYsRef = useRef<Float32Array>(new Float32Array(totalCount));

  // Initializing particle positions and velocities
  const [positions, speeds, phases] = useMemo(() => {
    const pos = new Float32Array(totalCount * 3);
    const spd = new Float32Array(totalCount);
    const phs = new Float32Array(totalCount);

    for (let i = 0; i < totalCount; i++) {
      pos[i * 3 + 0] = -viewport.width + (Math.random() * viewport.width * 2); // x
      const y = (Math.random() - 0.5) * viewport.height * 2;
      pos[i * 3 + 1] = y; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10; // z (depth)

      baseYsRef.current[i] = y;

      // Base speeds (will be multiplied during gust)
      spd[i] = 0.5 + Math.random() * 1.5;

      phs[i] = Math.random() * Math.PI * 2;
    }

    return [pos, spd, phs];
  }, [totalCount]); // Removed viewport dependency to prevent "jumping" on mobile URL bar resize

  useFrame((state) => {
    if (!pointsRef.current) return;

    const positionsAttribute = pointsRef.current.geometry.attributes.position;
    const array = positionsAttribute.array as Float32Array;

    const time = state.clock.getElapsedTime();

    // Smoothly slow down the wind after 3 seconds
    let speedMultiplier = 1.0;
    if (time < 3.0) {
      speedMultiplier = 6.0; // Fast gust
    } else if (time < 6.0) {
      // Lerp from 6.0 to 1.0 over 3 seconds
      const progress = (time - 3.0) / 3.0;
      speedMultiplier = 6.0 - (progress * 5.0);
    }

    const mouseX = (mouseRef.current.x * viewport.width) / 2;
    const mouseY = (mouseRef.current.y * viewport.height) / 2;

    for (let i = 0; i < totalCount; i++) {
      const i3 = i * 3;

      array[i3 + 0] += speeds[i] * speedMultiplier * 0.02;

      // Wrap around logic
      if (array[i3 + 0] > viewport.width) {
        array[i3 + 0] = -viewport.width - (Math.random() * 2);
        // Scramble Y slightly on wrap around
        const newY = (Math.random() - 0.5) * viewport.height * 2;
        baseYsRef.current[i] = newY;
        array[i3 + 1] = newY;
      }

      // Physics and Collider Logic
      const dx = array[i3 + 0] - mouseX;
      const dy = array[i3 + 1] - mouseY;
      const distSq = dx * dx + dy * dy;

      let pushX = 0;
      let pushY = 0;
      const radius = 3.5; // Slightly larger radius for better flow
      const radiusSq = radius * radius;

      // Aerodynamic repulsion force (pass around, don't stop)
      if (distSq < radiusSq && distSq > 0.01) {
        const dist = Math.sqrt(distSq);
        const force = Math.pow((radius - dist) / radius, 2) * 4.0;

        pushX = (dx / dist) * force;
        // Never push backwards against the wind (prevents particles from stopping)
        if (pushX < 0) pushX = 0;

        // If particle is perfectly centered, give it a nudge to split up/down
        const safeDy = Math.abs(dy) < 0.1 ? (dy >= 0 ? 0.1 : -0.1) : dy;
        pushY = (safeDy / Math.abs(safeDy)) * force * (Math.abs(safeDy) / dist + 0.5);
      }

      // Base Target Y with sine wave movement
      const targetY = baseYsRef.current[i] + Math.sin(time * 2 + phases[i]) * 0.5;

      // Apply X displacement (only forward pushes allowed from mouse)
      array[i3 + 0] += pushX * 0.1;

      // Smoothly lerp Y towards its natural wave + the mouse push
      const targetYWithPush = targetY + pushY;
      array[i3 + 1] += (targetYWithPush - array[i3 + 1]) * 0.15;
    }

    positionsAttribute.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={totalCount}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#00D2D3"
        transparent={true}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
};

export const DataBreath3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div ref={containerRef} className="absolute inset-0 z-10 pointer-events-none opacity-70">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 1.5]}>
        <ParticleSwarm containerRef={containerRef} />
      </Canvas>
    </div>
  );
};
