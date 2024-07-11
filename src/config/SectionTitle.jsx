/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const SectionTitle = ({ text }) => {
  const textRef = useRef();
  const [fontSize, setFontSize] = useState(30);

  //This is pretty Jank and gets screwed up easily. Need to think of a way for it to react more instantaneously. Add Something that detects when I'm maximizing the window.
  useEffect(() => {
    const resizeText = () => {
      const containerWidth = textRef.current.parentElement.clientWidth;
      const textWidth = textRef.current.scrollWidth;

      if (textWidth > containerWidth) {
        setFontSize((prevFontSize) => prevFontSize - 1);
      } else {
        setFontSize((prevFontSize) => Math.min(prevFontSize + 1, 30));
      }
    };

    resizeText();
    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, [text]);

  return (
    <div className="auto-resize-container">
      <h2
        ref={textRef}
        className="auto-resize-text"
        style={{
          fontSize: `${fontSize}px`,
          color: "aliceblue",
          fontFamily: "balatro",
          userSelect: "none",
        }}
      >
        {text}
      </h2>
    </div>
  );
};

export default SectionTitle;
