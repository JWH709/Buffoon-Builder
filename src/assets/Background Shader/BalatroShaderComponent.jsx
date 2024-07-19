/* eslint-disable react/no-unknown-property */
import React from "react";
import { useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";
import * as THREE from "three";
import { balatroMaterial } from "./BalatroShaderMaterial";

extend({ PlaneGeometry: THREE.PlaneGeometry });

const BalatroShaderComponent = () => {
  const meshRef = React.useRef();

  React.useEffect(() => {
    const handleResize = () => {
      balatroMaterial.uniforms.iResolution.value.set(
        window.innerWidth,
        window.innerHeight
      );
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame(({ clock }) => {
    balatroMaterial.uniforms.iTime.value = clock.elapsedTime;
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[window.innerWidth, window.innerHeight]} />
      <primitive object={balatroMaterial} attach="material" />
    </mesh>
  );
};

export default BalatroShaderComponent;
