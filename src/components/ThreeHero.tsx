"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sphere, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x = state.clock.elapsedTime * 0.25;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.35;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.8, 2]} />

        <meshStandardMaterial
          color="#6366f1"
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

function InnerSphere() {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={1}
    >
      <Sphere args={[1.25, 64, 64]}>
        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
    </Float>
  );
}

export default function ThreeHero() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={1} />

        <directionalLight
          position={[3, 3, 5]}
          intensity={3}
        />

        <pointLight
          position={[-3, -2, 3]}
          intensity={2}
          color="#6366f1"
        />

        <Stars
          radius={50}
          depth={30}
          count={1500}
          factor={3}
          saturation={0}
          fade
          speed={0.5}
        />

        <AnimatedSphere />
        <InnerSphere />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}