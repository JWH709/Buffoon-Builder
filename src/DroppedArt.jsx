/* eslint-disable react/prop-types */
import React from "react";
import JokerPreview from "./JokerPreview";

const DroppedArt = ({
  artSrc,
  artName,
  dataFromName,
  dataFromRarity,
  dataFromCost,
  dataFromDescription,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="hoverable-dropped-art"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <img src={artSrc} alt={artName} />
      {isHovered && (
        <JokerPreview
          jokerName={dataFromName}
          jokerEffect={dataFromDescription}
          jokerRarity={dataFromRarity}
          jokerCost={dataFromCost}
          position={mousePosition}
        />
      )}
    </div>
  );
};

export default DroppedArt;
