import React, { useEffect } from "react";

const CrtToggle = () => {
  const [toggleButton, setToggleButton] = React.useState(true);

  const bodyBeforeStyles = {
    content: '" "',
    display: "block",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background:
      "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
    zIndex: 2,
    backgroundSize: "100% 2px, 3px 100%",
    pointerEvents: "none",
  };

  const bodyAfterStyles = {
    content: '" "',
    display: "block",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: "rgba(18, 16, 16, 0.1)",
    opacity: 0,
    zIndex: 2,
    pointerEvents: "none",
    animation: "flicker 0.15s infinite",
  };

  useEffect(() => {
    const beforeElement = document.createElement("div");
    const afterElement = document.createElement("div");

    Object.assign(beforeElement.style, bodyBeforeStyles);
    Object.assign(afterElement.style, bodyAfterStyles);

    if (toggleButton) {
      document.body.appendChild(beforeElement);
      document.body.appendChild(afterElement);
    } else {
      if (document.body.contains(beforeElement)) {
        document.body.removeChild(beforeElement);
      }
      if (document.body.contains(afterElement)) {
        document.body.removeChild(afterElement);
      }
    }

    return () => {
      if (document.body.contains(beforeElement)) {
        document.body.removeChild(beforeElement);
      }
      if (document.body.contains(afterElement)) {
        document.body.removeChild(afterElement);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleButton]);

  return (
    <label className="switch">
      <input type="checkbox" onClick={() => setToggleButton(!toggleButton)} />
      <span className="slider"></span>
    </label>
  );
};

export default CrtToggle;
