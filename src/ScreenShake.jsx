/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "./sections/Navbar/Navbar.jsx";
import App from "./App.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSpring, animated, to } from "@react-spring/web";
import { Canvas } from "@react-three/fiber";
import BalatroShaderComponent from "./assets/Background Shader/BalatroShaderComponent.jsx";
import { Suspense } from "react";
const ScreenShake = () => {
  const shakeFactor = 5;
  const shakeRef = React.useRef(null);

  const handleMouseMove = (event) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    shakeRef.current.style.left = `${x * shakeFactor}px`;
    shakeRef.current.style.top = `${y * shakeFactor}px`;
  };
  //ToDo: Figure out why screenshake breaks when going from desktop -> mobile -> desktop
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

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      const screenSize = [window.innerHeight, window.innerWidth];
      if (screenSize[0] < 769 || screenSize[1] < 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsMobile]);

  const [luaJokerEffect, setLuaJokerEffect] = React.useState(null);
  const [luaLocals, setLuaLocals] = React.useState(null);
  const [luaTableInsert, setLuaTableInsert] = React.useState(null);
  const [dataFromName, setDataFromName] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [dataFromRarity, setDataFromRarity] = React.useState(1);
  const [dataFromDescription, setDataFromDescription] = React.useState(null);
  const [dataFromCost, setDataFromCost] = React.useState(null);
  const [isCropped, setIsCropped] = React.useState(false);

  const [contextMemory, setContextMemory] = React.useState(null);
  const [conditionsMemory, setConditionsMemory] = React.useState(null);
  const [resultsMemory, setResultsMemory] = React.useState(null);

  return (
    <>
      <Suspense fallback={null}>
        <Canvas
          dpr={[1, 1]}
          style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
          gl={{ antialias: true }}
        >
          <BalatroShaderComponent />
        </Canvas>
        {!isMobile && (
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
              <App
                isMobile={isMobile}
                luaJokerEffect={luaJokerEffect}
                setLuaJokerEffect={setLuaJokerEffect}
                luaLocals={luaLocals}
                setLuaLocals={setLuaLocals}
                luaTableInsert={luaTableInsert}
                setLuaTableInsert={setLuaTableInsert}
                dataFromName={dataFromName}
                setDataFromName={setDataFromName}
                image={image}
                setImage={setImage}
                dataFromRarity={dataFromRarity}
                dataFromCost={dataFromCost}
                dataFromDescription={dataFromDescription}
                setDataFromRarity={setDataFromRarity}
                setDataFromCost={setDataFromCost}
                setDataFromDescription={setDataFromDescription}
                isCropped={isCropped}
                setIsCropped={setIsCropped}
              />
            </DndProvider>
          </animated.div>
        )}
        {isMobile && (
          <div
            style={{
              height: "100%",
              width: "100%",
              position: "relative",
            }}
          >
            <Navbar />
            <DndProvider backend={HTML5Backend}>
              <App
                isMobile={isMobile}
                luaJokerEffect={luaJokerEffect}
                setLuaJokerEffect={setLuaJokerEffect}
                luaLocals={luaLocals}
                setLuaLocals={setLuaLocals}
                luaTableInsert={luaTableInsert}
                setLuaTableInsert={setLuaTableInsert}
                dataFromName={dataFromName}
                setDataFromName={setDataFromName}
                image={image}
                setImage={setImage}
                contextMemory={contextMemory}
                setContextMemory={setContextMemory}
                conditionsMemory={conditionsMemory}
                setConditionsMemory={setConditionsMemory}
                resultsMemory={resultsMemory}
                setResultsMemory={setResultsMemory}
                dataFromRarity={dataFromRarity}
                dataFromCost={dataFromCost}
                dataFromDescription={dataFromDescription}
                setDataFromRarity={setDataFromRarity}
                setDataFromCost={setDataFromCost}
                setDataFromDescription={setDataFromDescription}
                isCropped={isCropped}
                setIsCropped={setIsCropped}
              />
            </DndProvider>
          </div>
        )}
      </Suspense>
    </>
  );
};

export default ScreenShake;
