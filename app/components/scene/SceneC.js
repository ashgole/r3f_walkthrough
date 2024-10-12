import { Scroll, ScrollControls } from '@react-three/drei';
import React from 'react';
import { UI } from '../ui/UI';
import CameraAnimatiom from '../cameraAnimatiom/CameraAnimatiom_with_scroll';
import Experience from '../experience/Experience';

const SceneC = () => {

    return (
        <>
            <ScrollControls pages={6}>
                <CameraAnimatiom />
                <Experience />
                <Scroll html>
                    <UI />
                </Scroll>
            </ScrollControls>
        </>
    );
};

export default SceneC;
