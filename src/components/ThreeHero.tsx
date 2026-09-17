"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sphere,
  Stars,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Orb() {
  const orb = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!orb.current) return;

    orb.current.rotation.x =
      state.clock.elapsedTime * 0.15;

    orb.current.rotation.y =
      state.clock.elapsedTime * 0.25;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1.5}
    >
      <group>
        {/* Outer wireframe */}
        <mesh ref={orb}>
          <icosahedronGeometry args={[2, 2]} />

          <meshBasicMaterial
            color="#7c3aed"
            wireframe
            transparent
            opacity={0.75}
          />
        </mesh>

        {/* Inner glowing sphere */}
        <Sphere args={[1.35, 64, 64]}>
          <meshStandardMaterial
            color="#4338ca"
            emissive="#4f46e5"
            emissiveIntensity={1.5}
            metalness={0.8}
            roughness={0.15}
            transparent
            opacity={0.9}
          />
        </Sphere>

        {/* Inner wireframe */}
        <mesh rotation={[0.5, 0.5, 0]}>
          <icosahedronGeometry args={[1.5, 1]} />

          <meshBasicMaterial
            color="#a855f7"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Ring() {
  const ring = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ring.current) return;

    ring.current.rotation.z =
      state.clock.elapsedTime * 0.6;
  });

  return (
    <mesh
      ref={ring}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, -2.2, 0]}
    >
      <torusGeometry args={[1.8, 0.025, 16, 100]} />

      <meshBasicMaterial
        color="#6366f1"
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

function FloatingParticle({
  position,
  size = 0.08,
}: {
  position: [number, number, number];
  size?: number;
}) {
  return (
    <Float
      speed={1.5}
      floatIntensity={2}
      rotationIntensity={1}
    >
      <mesh position={position}>
        <sphereGeometry args={[size, 16, 16]} />

        <meshBasicMaterial color="#8b5cf6" />
      </mesh>
    </Float>
  );
}

export default function ThreeHero() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 45,
        }}
        dpr={[1, 2]}
      >
        {/* Lights */}
        <ambientLight intensity={0.4} />

        <pointLight
          position={[3, 3, 4]}
          intensity={5}
          color="#6366f1"
        />

        <pointLight
          position={[-3, -2, 2]}
          intensity={4}
          color="#a855f7"
        />

        {/* Stars */}
        <Stars
          radius={50}
          depth={40}
          count={1800}
          factor={3}
          saturation={0}
          fade
          speed={0.5}
        />

        {/* Main 3D object */}
        <Orb />

        {/* Platform ring */}
        <Ring />

        {/* Floating particles */}
        <FloatingParticle
          position={[3.2, 1.8, 0]}
          size={0.12}
        />

        <FloatingParticle
          position={[-3, -1, 0]}
          size={0.09}
        />

        <FloatingParticle
          position={[3.4, -1.2, 0]}
          size={0.07}
        />

        <FloatingParticle
          position={[-2.5, 2, 0]}
          size={0.06}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.35}
        />
      </Canvas>
    </div>
  );
}