import React from "react";
import { useSpring } from "@react-spring/web";

const ScreenShake = () => {
  const shakeFactor = 5;

  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const handleMouseMove = (event) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    document.getElementById("root").style.left = `${x * shakeFactor}px`;
    document.getElementById("root").style.top = `${y * shakeFactor}px`;
  };

  const handleMousein = (event) => {
    const x = (event.clientX / window.innerWidth) * shakeFactor;
    const y = (event.clientY / window.innerHeight) * shakeFactor;
    api.start({ x: x, y: y });
  };

  React.useEffect(() => {
    const root = document.getElementById("root");
    root.addEventListener("mouseenter", handleMousein);

    return () => {
      root.removeEventListener("mouseenter", handleMousein);
    };
  });

  React.useEffect(() => {
    const root = document.getElementById("root");
    root.style.transform = `translate(${x.get()}px, ${y.get()}px)`;
  }, [x, y]);

  React.useEffect(() => {
    const root = document.getElementById("root");
    root.addEventListener("mousemove", handleMouseMove);
    const initializeMousePosition = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * shakeFactor;
      const y = (event.clientY / window.innerHeight - 0.5) * shakeFactor;
      if (root) {
        root.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    root.addEventListener("mousemove", initializeMousePosition);

    return () => {
      root.removeEventListener("mousemove", handleMouseMove);
      root.removeEventListener("mousemove", initializeMousePosition);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default ScreenShake;

//UseMemo for MouseMover
//UseEffect to add/remove the event listener
//ratio = x/y / window.x/y
// return null to return nothing
//use spring to add interpolation on pageOut
