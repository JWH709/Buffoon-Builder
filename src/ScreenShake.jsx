/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "./sections/Navbar/Navbar.jsx";
import App from "./App.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSpring, animated, to } from "@react-spring/web";
import { Canvas } from "@react-three/fiber";
import BalatroShaderComponent from "./assets/Background Shader/BalatroShaderComponent.jsx";
const ScreenShake = () => {
  const shakeFactor = 5;
  const shakeRef = React.useRef(null);

  const handleMouseMove = (event) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    shakeRef.current.style.left = `${x * shakeFactor}px`;
    shakeRef.current.style.top = `${y * shakeFactor}px`;
  };

  React.useEffect(() => {
    const shakeElement = shakeRef.current;
    const initializeMousePosition = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * shakeFactor;
      const y = (event.clientY / window.innerHeight - 0.5) * shakeFactor;
      shakeElement.style.transform = `translate(${x}px, ${y}px)`;
    };
    shakeElement.addEventListener("mousemove", handleMouseMove);
    shakeElement.addEventListener("mousemove", initializeMousePosition);

    return () => {
      shakeElement.removeEventListener("mousemove", handleMouseMove);
      shakeElement.removeEventListener("mousemove", initializeMousePosition);
    };
  }, []);

  //ToDo: UseSpring hell:

  const [storedIn, setStoredIn] = React.useState([0, 0]);
  const [storedOut, setStoredOut] = React.useState([0, 0]);

  React.useEffect(() => {
    const shakeElement = shakeRef.current;

    const handleMouseOut = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      setStoredOut([x, y]);
    };

    shakeElement.addEventListener("mouseout", handleMouseOut);

    const handleMouseIn = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      setStoredIn([x, y]);
    };

    shakeElement.addEventListener("mouseenter", handleMouseIn);

    return () => {
      shakeElement.removeEventListener("mouseout", handleMouseOut);
      shakeElement.removeEventListener("mouseenter", handleMouseIn);
    };
  }, []);

  const springProps = useSpring({
    from: { x: storedOut[0], y: storedOut[1] },
    to: async (next) => {
      await next({ x: storedIn[0], y: storedIn[1] });
    },
    reset: true,
    config: { duration: 300 },
  });

  return (
    <>
      <Canvas
        style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
        gl={{ antialias: true }}
      >
        <BalatroShaderComponent />
      </Canvas>
      <animated.div
        ref={shakeRef}
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
          transform: `translate(${to(
            springProps.x,
            (value) => `${value}px`
          )}, ${to(springProps.y, (value) => `${value}px`)})`,
        }}
      >
        <Navbar />
        <DndProvider backend={HTML5Backend}>
          <App />
        </DndProvider>
      </animated.div>
    </>
  );
};

export default ScreenShake;
