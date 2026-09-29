import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Html } from '@react-three/drei'
const CODE = [['</>', [2.3, 1.1, 0]], ['{ }', [-2.4, 0.5, 0.5]], ['[ ]', [1.9, -1.5, 0.5]], ['=>', [-1.7, -1.4, 0]]]
function Scene({ still, compact }) {
  const g = useRef(), r1 = useRef(), r2 = useRef()
  const pts = useMemo(() => Float32Array.from({ length: compact ? 150 : 360 }, () => (Math.random() - 0.5) * 9), [compact])
  useFrame((s, dt) => {
    const k = 1 - Math.pow(0.001, dt) // frame-rate independent easing
    g.current.rotation.x += (s.pointer.y * 0.35 - g.current.rotation.x) * k * 0.5
    g.current.rotation.y += (s.pointer.x * 0.5 - g.current.rotation.y) * k * 0.5
    if (!still) { g.current.children[0].rotation.y += dt * 0.15; r1.current.rotation.z += dt * 0.25; r2.current.rotation.x -= dt * 0.2 }
  })
  return (<>
    <ambientLight intensity={0.4} /><pointLight position={[4, 4, 4]} intensity={40} color="#8b5cf6" /><pointLight position={[-4, -2, 3]} intensity={30} color="#22d3ee" />
    <Float speed={still ? 0 : 1.5} floatIntensity={0.6}><group ref={g}>
      <group>
        <mesh><icosahedronGeometry args={[1.5, 1]} /><meshBasicMaterial wireframe color="#8b5cf6" transparent opacity={0.6} /></mesh>
        <mesh><sphereGeometry args={[1.05, 32, 32]} /><meshPhysicalMaterial color="#9fb4ff" transmission={0.9} thickness={1} roughness={0.05} ior={1.4} transparent opacity={0.9} /></mesh>
        <mesh scale={1.9}><icosahedronGeometry args={[1, 0]} /><meshBasicMaterial wireframe color="#22d3ee" transparent opacity={0.15} /></mesh></group>
      <mesh ref={r1} rotation={[1.2, 0, 0]}><torusGeometry args={[2.1, 0.008, 8, 96]} /><meshBasicMaterial color="#22d3ee" transparent opacity={0.6} /></mesh>
      <mesh ref={r2} rotation={[0, 1.1, 0.4]}><torusGeometry args={[2.5, 0.008, 8, 96]} /><meshBasicMaterial color="#8b5cf6" transparent opacity={0.5} /></mesh>
    </group></Float>
    {!compact && CODE.map(([t, p]) => <Float key={t} speed={still ? 0 : 2} position={p}><Html center distanceFactor={8} style={{ pointerEvents: 'none' }}><code className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-sm text-cyan-200/80 backdrop-blur">{t}</code></Html></Float>)}
    <points><bufferGeometry><bufferAttribute attach="attributes-position" count={pts.length / 3} array={pts} itemSize={3} /></bufferGeometry><pointsMaterial size={0.03} color="#a5b4fc" transparent opacity={0.6} /></points>
  </>)
}
export default function Hero3D({ still, compact }) {
  return <Canvas eventSource={document.getElementById("root")} eventPrefix="client" dpr={compact ? 1 : [1, 1.5]} camera={{ position: [0, 0, compact ? 6.5 : 5], fov: 50 }} gl={{ antialias: !compact, powerPreference: 'low-power' }}><Scene still={still} compact={compact} /></Canvas>
}
