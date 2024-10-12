import { useLoader } from '@react-three/fiber'
import { EffectComposer, SSR, Bloom, LUT } from '@react-three/postprocessing'
import { useControls } from 'leva'
import { LUTCubeLoader } from 'postprocessing'

export function Effects() {
  const texture = useLoader(LUTCubeLoader, '/models/F-6800-STD.cube')

  return (
      <EffectComposer disableNormalPass>
        <SSR   />
        <Bloom luminanceThreshold={0.2} mipmapBlur luminanceSmoothing={0} intensity={1.75} />
        <LUT lut={texture} />
      </EffectComposer>

  )
}
