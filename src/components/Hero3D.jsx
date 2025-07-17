// Hero3DText.jsx
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Text3D, Environment } from '@react-three/drei'
import { Suspense } from 'react'

export default function Hero3DText() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 60 }}>
      <color attach="background" args={['#0f172a']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />

      <Suspense fallback={null}>
        {/* Environment component removed to avoid missing HDR file errors */}
        <Float speed={1.5} floatIntensity={2} rotationIntensity={2}>
          <Text3D font={'public\fonts\gentilis_bold.typeface.json'} size={1} height={0.5} bevelEnabled bevelSize={0.02}>
            Harshwardhan
            <meshStandardMaterial color="#facc15" emissive="#facc15" emissiveIntensity={0.6} />
          </Text3D>
        </Float>
      </Suspense>

      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
