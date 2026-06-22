import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function FloatingShape({
  position,
  color,
  scale = 1,
  speed = 1,
  distort = 0.4,
}: {
  position: [number, number, number]
  color: string
  scale?: number
  speed?: number
  distort?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

function ParticleField() {
  const count = 200
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30
    }
    return pos
  }, [])

  const pointsRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#06b6d4" transparent opacity={0.6} />
    </points>
  )
}

function TorusRing() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.15
      ref.current.rotation.z = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={ref} position={[3, -1, -2]}>
        <torusGeometry args={[1.2, 0.15, 16, 48]} />
        <meshStandardMaterial color="#8b5cf6" metalness={0.9} roughness={0.1} wireframe />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#06b6d4" />
      <pointLight position={[-10, -5, -5]} intensity={0.5} color="#8b5cf6" />

      <Stars radius={80} depth={50} count={3000} factor={3} saturation={0} fade speed={0.5} />
      <ParticleField />

      <FloatingShape position={[-2.5, 1, 0]} color="#06b6d4" scale={0.8} speed={0.8} />
      <FloatingShape position={[2, 0.5, -1]} color="#22d3ee" scale={0.6} speed={1.2} distort={0.3} />
      <FloatingShape position={[0, -1.5, 1]} color="#8b5cf6" scale={0.5} speed={0.6} distort={0.5} />
      <TorusRing />
    </>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-transparent to-surface pointer-events-none" />
    </div>
  )
}
