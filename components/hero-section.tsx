"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import Link from "next/link";
import * as THREE from 'three';

interface AnimatedShapeProps {
  position?: [number, number, number]; 
  color?: string;
}

function AnimatedSphere({ position = [0, 0, 0], color = "#ff49db" }: AnimatedShapeProps) {
 
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Now TypeScript knows meshRef.current is a Mesh (if not null)
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    // Position prop now matches the expected type [number, number, number]
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.8} />
    </mesh>
  );
}

function AnimatedTorus({ position = [0, 0, 0], color = "#0070f3" }: AnimatedShapeProps) {
  // Initialize useRef with null and provide Mesh type argument
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Now TypeScript knows meshRef.current is a Mesh (if not null)
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    // Position prop now matches the expected type [number, number, number]
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[1.5, 0.4, 16, 32]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
    </mesh>
  );
}

function AnimatedTriangle({ position = [0, 0, 0], color = "#50c878" }: AnimatedShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <tetrahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.6} />
    </mesh>
  );
}

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          {/* The <Float> error might resolve with the above fixes.
              If it persists, check library versions (fiber, drei, three, @types/three). */}
          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <AnimatedSphere position={[-3, 1, -2]} color="#ff49db" />
            <AnimatedTorus position={[4, -1, -1]} color="#0070f3" />
            <AnimatedSphere position={[5, 2, -5]} color="#7928ca" />
            <AnimatedTorus position={[-2, -2, -3]} color="#ff4d4d" />
            <AnimatedTriangle position={[0, 3, -2]} color="#50c878" />
            <AnimatedTriangle position={[2, -2, -2]} color="#50c878" />
          </Float>
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-start px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block">Crafting Digital</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Experiences That Inspire
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            We blend creativity with technology to deliver stunning designs and immersive digital experiences that
            elevate your brand.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button size="lg" variant="ghost">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.5,
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-foreground rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}