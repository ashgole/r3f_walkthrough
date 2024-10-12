import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";

const CameraAnimation = () => {
    const scroll = useScroll();
    const { camera } = useThree();

    // Define the spline curve
    const points = [
        new Vector3(0.3, 6.9, -1.1),
        // new Vector3(3.6, 1.4, -3.9),
        new Vector3(0.1, 1.4, -3.9),
        new Vector3(-5.1, 2.1, 0.0),
        new Vector3(-1.4, 1.4, 2.1),
        new Vector3(3.0, 0.8, 2.9),
        new Vector3(5.1, 1.9, -0.1),
    ];

    const totalSections = points.length;

    useFrame(() => {
        // Calculate the current position based on the scroll offset
        const currentPosition = scroll.offset * (totalSections - 1);
        const sectionIndex = Math.floor(currentPosition);
        const nextIndex = Math.min(sectionIndex + 1, totalSections - 1); // Avoid going out of bounds

        const startPoint = points[sectionIndex];
        const endPoint = points[nextIndex];

        // Interpolate camera position based on the scroll offset
        const t = currentPosition - sectionIndex; // Fractional value between 0 and 1
        const interpolatedPosition = new Vector3().lerpVectors(startPoint, endPoint, t);

        // Update camera position
        camera.position.copy(interpolatedPosition);
        camera.lookAt(0, 1, 0); // Adjust the target to keep the camera focused
    });

    return null;
};

export default CameraAnimation;
