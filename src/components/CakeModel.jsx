import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Stage } from "@react-three/drei";

const Model = (props) => {
  const { scene } = useGLTF("/models/cake.glb");
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // Slow rotation
    }
  });

  return <primitive object={scene} ref={ref} {...props} />;
};

const CakeModel = () => {
  return (
    <div className="h-16 w-16 cursor-grab active:cursor-grabbing">
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <Stage environment="city" intensity={0.6}>
          <Model scale={0.8} />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  );
};

export default CakeModel;
