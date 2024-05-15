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

  return (
    <div
      className="hoverable-dropped-art"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={artSrc} alt={artName} />
      {isHovered && (
        <JokerPreview
          jokerName={dataFromName}
          jokerEffect={dataFromDescription}
          jokerRarity={dataFromRarity}
          jokerCost={dataFromCost}
        />
      )}
    </div>
  );
};

export default DroppedArt;
