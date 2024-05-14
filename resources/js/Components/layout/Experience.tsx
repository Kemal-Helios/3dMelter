import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Obj from '../objLoader/Obj';
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';

const Experience = () => (
    <div className='canvasClass relative z-0'>
        <Canvas flat linear>
            <fog attach="fog" args={['#272730', 16, 30]} />
            <ambientLight intensity={1} />
            <directionalLight intensity={3} />
            <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
                <pointLight intensity={3} position={[-10, -25, -10]} />
                <spotLight castShadow intensity={4} angle={0.2} penumbra={1} position={[-25, 20, -15]} shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001} />
            </PerspectiveCamera>
            <Suspense fallback={null}>
                <Obj />
            </Suspense>
            <OrbitControls autoRotate autoRotateSpeed={0.5} enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            <Stars radius={500} depth={50} count={1000} factor={10} />
        </Canvas>
    </div>
)

export default Experience;
