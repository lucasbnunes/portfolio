import React from 'react'
import { Canvas, ThreeEvent } from '@react-three/fiber'
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

// Adapted from this awesome snippet https://codesandbox.io/embed/spherical-word-cloud-yup2o
export function WordSphere({ words, count = 6 }: WordSphereProps) {
  const fullConfig = resolveConfig(tailwindConfig) as any

  const [isGrabbing, setIsGrabbing] = React.useState(false)
  const handleMouseDown = () => setIsGrabbing(true)
  const handleMouseUp = () => setIsGrabbing(false)

  // Change the mouse cursor on grab
  React.useEffect(() => {
    console.log('a')
    //document.body.style.cursor = hovered ? 'grab' : 'auto'
    document.body.style.cursor = isGrabbing ? 'grabbing' : 'grab'
  }, [isGrabbing])

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      <fog attach="fog" args={[fullConfig.theme?.colors?.phantom[400], 0, 80]} />
      <Cloud words={words} count={count} radius={20} />
      <OrbitControls autoRotate autoRotateSpeed={0.5} minDistance={10} maxDistance={35} enablePan={false} />
    </Canvas>
  )
}
