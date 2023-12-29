import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Preload } from '@react-three/drei'
import { Model } from '../components/Avatar_typing.jsx';


const CanvasModel = () => {
  return (
    <Canvas
         camera={{ position: [2, 0, 12.25], fov: 15 }}
         style={{
            backgroundColor: '#111a21',
            width: '100vw',
            height: '100vh',
         }}
      >
         <ambientLight intensity={5} />
         <directionalLight intensity={1.25} />
         <Suspense fallback={null}>
            <Model position={[0.025, -0.9, 0]} />
            <Preload all/>
          </Suspense>
         <OrbitControls />
    </Canvas>
    )
}

export default CanvasModel