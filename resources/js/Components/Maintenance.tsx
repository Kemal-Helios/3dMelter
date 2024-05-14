import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';
import DevWeb from "./objLoader/objWeb";


const Maintenance = () => (
    <div className='h-screen w-screen '>
        <Canvas flat linear>
            <ambientLight intensity={3} />
            <directionalLight intensity={3} />
            <PerspectiveCamera  makeDefault position={[0, 0, 16]} fov={50}>
                <pointLight intensity={3} position={[-10, -25, -10]} />
                <spotLight castShadow intensity={4} angle={0.2} penumbra={1} position={[-25, 20, -15]} shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001} />
            </PerspectiveCamera>
            <Suspense fallback={null}>
                <DevWeb />
            </Suspense>
            <OrbitControls />
        </Canvas>
    </div>
)

export default Maintenance
