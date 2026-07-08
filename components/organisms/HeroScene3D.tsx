"use client";

import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

type BubbleProps = {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  distort: number;
};

function Bubble({ position, scale, color, speed, distort }: BubbleProps) {
  return (
    <Float speed={speed} rotationIntensity={0.35} floatIntensity={1.4}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[1, 48, 48]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.42}
          distort={distort}
          speed={2.2}
          roughness={0.08}
          metalness={0.85}
          envMapIntensity={0.9}
        />
      </mesh>
    </Float>
  );
}

function HeroOrbs() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.pointer.x * 0.22;
    groupRef.current.rotation.x = -state.pointer.y * 0.12;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.08;
  });

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 5]} intensity={0.9} color="#6EE7A8" />
      <pointLight position={[-4, -2, 3]} intensity={0.55} color="#CFF5D2" />
      <pointLight position={[2, -4, -2]} intensity={0.35} color="#1F5F4A" />

      <group ref={groupRef}>
        <Bubble position={[2.8, 0.6, -1.5]} scale={1.35} color="#6EE7A8" speed={1.4} distort={0.38} />
        <Bubble position={[1.2, -0.8, -0.5]} scale={0.75} color="#B8F5CE" speed={1.8} distort={0.45} />
        <Bubble position={[3.6, -1.1, -2.2]} scale={0.55} color="#CFF5D2" speed={2.1} distort={0.52} />
        <Bubble position={[0.2, 1.4, -1.8]} scale={0.45} color="#6EE7A8" speed={2.4} distort={0.3} />
        <Bubble position={[4.2, 0.2, -0.8]} scale={0.35} color="#ffffff" speed={2.8} distort={0.28} />
      </group>

      <Sparkles
        count={90}
        scale={[14, 10, 6]}
        size={2.5}
        speed={0.25}
        opacity={0.45}
        color="#B8F5CE"
      />
    </>
  );
}

export function HeroScene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      className="h-full w-full"
    >
      <HeroOrbs />
    </Canvas>
  );
}
