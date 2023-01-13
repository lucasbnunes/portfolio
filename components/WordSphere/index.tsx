import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
import { Cloud } from './Cloud'

interface WordSphereProps {
  words: string[],
  /**
   * The number of words displayed is count^2. Default is 6. If words.length < count^2, some words will be repeated. If words.length > count^2, some words won't be displayed.
   */
  count?: number
}

export function WordSphere({ words, count = 6 }: WordSphereProps) {
  const fullConfig = resolveConfig(tailwindConfig) as any

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={[fullConfig.theme?.colors?.phantom[400], 0, 80]} />
      <Cloud words={words} count={count} radius={20} />
      <OrbitControls autoRotate autoRotateSpeed={0.5} minDistance={10} maxDistance={35} enablePan={false} />
    </Canvas>
  )
}
