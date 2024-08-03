/* eslint-disable react/prop-types */
import React from "react";

const SectionTitle = ({ text }) => {
  const [textSize, setTextSize] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      const screenSize = window.innerWidth;
      console.log(screenSize);
      if (screenSize > 1670) {
        setTextSize(false);
      } else if (screenSize < 1670 && screenSize >= 1500) {
        setTextSize(3);
      } else if (screenSize < 1500 && screenSize >= 1340) {
        setTextSize(2);
      } else if (screenSize < 1340) {
        setTextSize(1);
      } else {
        setTextSize(false);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setTextSize, textSize]);

  return (
    <div className="auto-resize-container">
      {!textSize && (
        <h2
          className="auto-resize-text"
          style={{
            color: "aliceblue",
            fontFamily: "balatro",
            userSelect: "none",
          }}
        >
          {text}
        </h2>
      )}
      {textSize == 3 && (
        <h3
          className="auto-resize-text"
          style={{
            color: "aliceblue",
            fontFamily: "balatro",
            userSelect: "none",
          }}
        >
          {text}
        </h3>
      )}
      {textSize == 2 && (
        <h4
          className="auto-resize-text"
          style={{
            color: "aliceblue",
            fontFamily: "balatro",
            userSelect: "none",
          }}
        >
          {text}
        </h4>
      )}
      {textSize == 1 && (
        <h5
          className="auto-resize-text"
          style={{
            color: "aliceblue",
            fontFamily: "balatro",
            userSelect: "none",
          }}
        >
          {text}
        </h5>
      )}
    </div>
  );
};

export default SectionTitle;
