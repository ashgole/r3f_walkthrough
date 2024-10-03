import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useState } from "react";

const CameraAnimatiom = () => {
    const scroll = useScroll();
    const { camera } = useThree();
    const [activeSection, setActiveSection] = useState(null)

    const changePosition = (x1, y1, z1) => {
        gsap.to(camera.position, {
            x: x1,
            y: y1,
            z: z1,
            duration: 1.5,
            ease: 'power2.inOut',
            onUpdate: () => {
                camera.lookAt(0, 0, 0)
            }
        });
    };
    useFrame(() => {

        let currentPosition = scroll.offset * 100
        if (currentPosition > 10 && currentPosition < 20 && activeSection !== 4) {
            setActiveSection(4)
            changePosition(0, 1, 4)
        }
        else if (currentPosition > 20 && currentPosition < 40 && activeSection !== 1) {
            setActiveSection(1)
            changePosition(1, 1, 1)
        }
        else if (currentPosition > 40 && currentPosition < 60 && activeSection !== 2) {
            setActiveSection(2)
            changePosition(2, 2, 2)
        }
        else if (currentPosition > 60 && currentPosition < 80 && activeSection !== 3) {
            setActiveSection(3)
            changePosition(-3, 3, 3)
        }
    })
    return null;
};
export default CameraAnimatiom