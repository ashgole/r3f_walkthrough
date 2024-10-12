import { AccumulativeShadows, Gltf, RandomizedLight } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { useControls } from 'leva'; // Assuming you are using Leva for controls

const CarModel = () => {
    return (
        <group  >
            <Gltf src="models/car.gltf" scale={0.03} castShadow />
            <AccumulativeShadows
                temporal
                frames={35}
                alphaTest={0.75}
                scale={10}
                position={[0, 0, 0]}
                color="#EFBD4E"
            >
                <RandomizedLight castShadow amount={8} frames={30} position={[5, 5, 5]} />
            </AccumulativeShadows>
        </group>
    );
};

const Experience = () => {
    const { cameraposition } = useControls({
        cameraposition: {
            value: [3.6,1.4,-3.9],// default position
            step: 0.1, // adjust the step size for finer control
            min: -10,
            max: 10,
        },
    });

    const { camera } = useThree();

    useEffect(() => {
        // Update camera position dynamically based on the Leva control
        camera.position.set(...cameraposition);
        camera.fav=45
        camera.lookAt(0, 1, 0); // Make sure the camera looks at the model (center)
    }, [cameraposition, camera]);

    return (
        <>
            <CarModel />
        </>
    );
};


export default Experience;
