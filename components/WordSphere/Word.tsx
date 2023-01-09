import * as THREE from 'three'
import { ThreeEvent, useFrame } from "@react-three/fiber"
import { useRef, useState, useEffect, ReactNode } from "react"
import { Text } from '@react-three/drei'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

type TextRef = {
  quaternion: {
    copy: (quat: THREE.Quaternion) => {}
  },
  material: {
    color: {
      set: (color: string) => {}
    }
  }
}

interface WordProps {
  children: THREE.Vector3 | string,
  position: any
}

export function Word({ children, ...props }: WordProps) {
  const fullConfig = resolveConfig(tailwindConfig) as any

  const fontProps = { font: 'Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef<TextRef>({} as TextRef)
  const [hovered, setHovered] = useState(false)
  const over = (e: ThreeEvent<PointerEvent>) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  // Change the mouse cursor on hover
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)

    // Animate font color
    ref.current.material.color.set(fullConfig.theme?.colors?.phantom[900])
  })

  return <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...props} {...fontProps} children={children as ReactNode} />
}