import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { RobotHead } from './RobotHead';
import { Suspense } from 'react';

export function RobotScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{
          background: 'transparent',
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <RobotHead />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}