import React from "react";

const ScreenShake = () => {
  const root = document.getElementById("root");
  const shakeFactor = 5;

  const handleMouseMove = (event) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    root.style.left = `${x * shakeFactor}px`;
    root.style.top = `${y * shakeFactor}px`;
  };

  React.useEffect(() => {
    root.addEventListener("mousemove", handleMouseMove);

    return () => {
      root.removeEventListener("mousemove", handleMouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default ScreenShake;

//UseMemo for MouseMover
//UseEffect to add/remove the event listener
//ratio = x/y / window.x/y
// return null to return nothing
//use spring to add interpolation on pageOut
