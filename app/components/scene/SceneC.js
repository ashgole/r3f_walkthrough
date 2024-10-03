import { Scroll, ScrollControls } from '@react-three/drei';
import React from 'react';
import { UI } from '../UI';
import CameraAnimatiom from '../cameraAnimatiom/CameraAnimatiom';
import Experience from '../experience/Experience';

const SceneC = () => {

    return (
        <>
            <ScrollControls pages={5}>
                {/* <CameraAnimatiom /> */}
                <Experience />
                <Scroll html>
                    <UI />
                </Scroll>
            </ScrollControls>
        </>
    );
};

export default SceneC;
