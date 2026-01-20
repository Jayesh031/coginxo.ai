"use client"
import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, Cylinder, Float, Glow, PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"

const Droid = () => {
  const headRef = useRef()
  const bodyRef = useRef()
  const eyesRef = useRef()

  useFrame((state) => {
    // Get mouse position (x, y are between -1 and 1)
    const mouseX = state.mouse.x
    const mouseY = state.mouse.y

    // Smoothly rotate head to face mouse
    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, mouseX * 0.8, 0.1)
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -mouseY * 0.5, 0.1)
    }

    // Body follows slightly less for natural feel
    if (bodyRef.current) {
      bodyRef.current.rotation.y = THREE.MathUtils.lerp(bodyRef.current.rotation.y, mouseX * 0.3, 0.1)
    }
  })

  return (
    <group scale={1.2}>
      {/* Floating Animation Wrapper */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        
        {/* HEAD GROUP */}
        <group ref={headRef} position={[0, 0.8, 0]}>
          {/* Main Head Shell */}
          <mesh castShadow receiveShadow>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial color="white" roughness={0.3} metalness={0.8} />
          </mesh>
          
          {/* Visor Area (Black Glass) */}
          <mesh position={[0, 0, 0.65]}>
            <capsuleGeometry args={[0.3, 0.8, 4, 16]} />
            <meshStandardMaterial color="#111" roughness={0.2} metalness={1} rotation={[0,0, Math.PI / 2]} />
          </mesh>

          {/* Glowing Eyes */}
          <group ref={eyesRef} position={[0, 0, 0.85]}>
             {/* Left Eye */}
            <mesh position={[-0.2, 0.05, 0]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} toneMapped={false} />
            </mesh>
            {/* Right Eye */}
            <mesh position={[0.2, 0.05, 0]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} toneMapped={false} />
            </mesh>
          </group>

          {/* Antenna */}
          <mesh position={[0, 0.8, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.5]} />
            <meshStandardMaterial color="gray" />
          </mesh>
          <mesh position={[0, 1.05, 0]}>
            <sphereGeometry args={[0.05]} />
            <meshStandardMaterial color="red" emissive="red" emissiveIntensity={1} />
          </mesh>
        </group>

        {/* BODY GROUP */}
        <group ref={bodyRef} position={[0, -0.8, 0]}>
           {/* Main Torso */}
           <mesh castShadow>
             <sphereGeometry args={[0.6, 32, 32]} />
             <meshStandardMaterial color="white" roughness={0.3} metalness={0.8} />
           </mesh>
           {/* Tech Ring Details */}
           <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
             <torusGeometry args={[0.7, 0.05, 16, 100]} />
             <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.5} />
           </mesh>
        </group>

      </Float>
    </group>
  )
}

export default function RobotCanvas() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="blue" />
        <Droid />
      </Canvas>
    </div>
  )
}