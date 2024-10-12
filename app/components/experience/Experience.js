import { ContactShadows, Environment, Lightformer, RandomizedLight, useGLTF } from '@react-three/drei';
import { applyProps, useThree,} from '@react-three/fiber';
import {  useMemo } from 'react';

const CarModel = () => {
    const { scene, nodes, materials } = useGLTF('models/car.gltf')
    let carMaterial = scene.children[0].children[0].children[0]

    useMemo(() => {
        applyProps(carMaterial.material, { metalness: 1, roughness: 0, color: 'black' })
    }, [])

    const { viewport } = useThree();
    const scale = viewport.width < 7 ? 0.015 : 0.03;  // Scale down for mobile screens (width < 640px)

    return (
        <primitive object={scene} scale={scale} />
    );
};

const Experience = () => {
    // const cameraposition = [0, 5, -3.9]
    // const { cameraposition } = useControls({
    //     cameraposition: {
    //         value: [3.6,1.4,-3.9],// default position
    //         step: 0.1, // adjust the step size for finer control
    //         min: -10,
    //         max: 10,
    //     },
    // });

    // const { camera } = useThree();

    // useEffect(() => {
    //     // Update camera position dynamically based on the Leva control
    //     camera.position.set(...cameraposition);
    //     camera.fav = 45
    //     camera.lookAt(0, 1, 0); // Make sure the camera looks at the model (center)
    // }, [cameraposition, camera]);

    return (
        <>
            <CarModel />
            <hemisphereLight intensity={0.5} />
            <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={15} blur={0.5} opacity={1} far={20} />
            <mesh scale={4} position={[3, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0.9, 1, 4, 1]} />
                <meshStandardMaterial color="white" roughness={0.75} />
            </mesh>
            <mesh scale={4} position={[-3, 0, 0.2]} rotation={[-Math.PI / 2, 0, Math.PI / 2.0]}>
                <ringGeometry args={[0.9, 1, 3, 1]} />
                <meshStandardMaterial color="white" roughness={0.75} />
            </mesh>
            <Environment resolution={512}>
                {/* Ceiling */}
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
                {/* Sides */}
                <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
                <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
                {/* Key */}
                <Lightformer form="ring" color="red" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
            </Environment>

            {/* <Effects /> */}
        </>
    );
};


export default Experience;
