import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import ResizeObserver from "resize-observer-polyfill";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./gaming_desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.25} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={isMobile ? 1.0 : 1.5} // Adjust intensity for mobile
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={isMobile ? 1.0 : 1.2} color="#ffffff" />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75} // Adjusted for smaller screens
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef();

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth <= 500) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    const observer = new ResizeObserver(() => {
      updateSize();
    });

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    updateSize(); // Call on mount to set initial size

    return () => {
      if (canvasRef.current) {
        observer.unobserve(canvasRef.current);
      }
    };
  }, []);

  return (
    <div ref={canvasRef} style={{ width: "100%", height: "100vh" }}>
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: isMobile ? [20, 3, 5] : [30, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 4}
            minPolarAngle={Math.PI / 4}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
