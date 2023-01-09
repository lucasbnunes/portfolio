import * as THREE from 'three'
import { useMemo } from "react"
import { Word } from './Word';

interface CloudProps {
  count: number,
  radius: number,
  words: string[]
}

export function Cloud({ count = 4, radius = 20, words }: CloudProps) {
  // repeat words until the array length equals count * count 
  const wordsArr: string[] = []
  for (let i = 0; i < count * count; i++) {
    wordsArr.push(words[i % words.length]);
  }

  // Create a count x count words with spherical distribution
  const wordsWithCoordinates = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    let wordsIndex = 0
    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), wordsArr[wordsIndex]]);
        wordsIndex++
      }
    }

    return temp;
  }, [count, radius, words]);

  return <>
    {wordsWithCoordinates.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)}
  </>
}
