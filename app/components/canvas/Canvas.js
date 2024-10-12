'use client'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Environment, Html, OrbitControls, Sky } from '@react-three/drei'
import SceneC from '../scene/SceneC'
import { Perf } from 'r3f-perf'


const CanvasC = () => {
  return (
    <>
      {/* <Canvas shadows  > */}
      <Canvas shadows gl={{ logarithmicDepthBuffer: true, antialias: false }}>
      <Perf position='top-left'/>
        {/* <OrbitControls /> */}
        {/* <axesHelper args={[5]} /> */}
        {/* <Environment preset="forest" /> */}
        {/* <color attach="background" args={['green']} /> */}
        <color attach="background" args={['#15151a']} />

        <Suspense fallback={
          <Html fullscreen>
            <div className="text-center p-4 flex flex-col justify-center items-center text-blue-400 border w-screen h-screen">
              <div className="text-3xl mb-4">Loading, please wait...</div>
              <p className="text-lg">
                Welcome to the Tesla Model Showcase! 🚗
              </p>
              <p className="mt-2 text-sm">
                Discover the innovation and engineering excellence of Tesla vehicles. From the groundbreaking Model S to the versatile Model 3, we’re excited to share their unique features, sustainability efforts, and the future of electric mobility.
                We're loading your experience, and it will be worth the wait!
              </p>
            </div>
          </Html>
        }>
          <SceneC />
        </Suspense>
      </Canvas>
    </>
  )
}

export default CanvasC