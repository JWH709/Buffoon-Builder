/* eslint-disable react/prop-types */
import React from "react";
import JokerPreview from "./JokerPreview";
import { Tilt } from "@jdion/tilt-react";

const DroppedArt = ({
  artSrc,
  dataFromName,
  dataFromRarity,
  dataFromCost,
  dataFromDescription,
  isMobile,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [showPreviewMobile, setShowPreviewMobile] = React.useState(false);

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
      {!isMobile && (
        <Tilt>
          <img src={artSrc} alt="Uploaded Art" />
        </Tilt>
      )}
      {!isMobile && isHovered && (
        <JokerPreview
          jokerName={dataFromName}
          jokerEffect={dataFromDescription}
          jokerRarity={dataFromRarity}
          jokerCost={dataFromCost}
          position={mousePosition}
        />
      )}
      {isMobile && (
        <img
          src={artSrc}
          alt="Uploaded Art"
          onClick={() => {
            setShowPreviewMobile(!showPreviewMobile);
          }}
        />
      )}
      {isMobile && showPreviewMobile && (
        <JokerPreview
          jokerName={dataFromName}
          jokerEffect={dataFromDescription}
          jokerRarity={dataFromRarity}
          jokerCost={dataFromCost}
          isMobile={isMobile}
        />
      )}
    </div>
  );
};

export default DroppedArt;
