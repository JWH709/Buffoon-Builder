/* eslint-disable react/prop-types */
import React from "react";

const SectionTitle = ({ text }) => {
  const textRef = React.useRef(null);
  const [isOverflowing, setIsOverflowing] = React.useState(false);

  const checkOverflow = () => {
    const element = textRef.current;
    if (element) {
      const isOverflow =
        element.scrollWidth > element.clientWidth ||
        element.scrollHeight > element.clientHeight;
      setIsOverflowing(isOverflow);
    }
  };

  React.useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, [text]);

  React.useEffect(() => {
    checkOverflow();
  }, [text]);

  const commonStyles = {
    color: "aliceblue",
    fontFamily: "balatro",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  return isOverflowing ? (
    <h4 ref={textRef} style={commonStyles}>
      {text}
    </h4>
  ) : (
    <h2 ref={textRef} style={commonStyles}>
      {text}
    </h2>
  );
};

export default SectionTitle;
