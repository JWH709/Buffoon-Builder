/* eslint-disable react/prop-types */
import React from "react";
import { IMAGES } from "../../config/assetImports.js";

const JokerRarity = ({ handler }) => {
  const [rarity, setRarity] = React.useState(1);
  const handleMinusClick = () => {
    if (rarity == 1) {
      setRarity(4);
      handler(4);
    } else {
      setRarity(rarity - 1);
      handler(rarity - 1);
    }
  };
  const handlePlusClick = () => {
    if (rarity == 4) {
      setRarity(1);
      handler(1);
    } else {
      setRarity(rarity + 1);
      handler(rarity + 1);
    }
  };
  const getRarityImg = () => {
    switch (rarity) {
      case 1:
        return IMAGES.common;
      case 2:
        return IMAGES.uncommon;
      case 3:
        return IMAGES.rare;
      case 4:
        return IMAGES.legendary;
    }
  };
  const getRarityText = () => {
    switch (rarity) {
      case 1:
        return "Common";
      case 2:
        return "Uncommon";
      case 3:
        return "Rare";
      case 4:
        return "Legendary";
    }
  };
  return (
    <>
      <div className="rarity-button-container">
        <button className="rarity-buttons" onClick={handleMinusClick}>
          {"<"}
        </button>
        <div
          className="rarity-icon"
          style={{
            backgroundImage: `url(${getRarityImg()})`,
            backgroundSize: "100% 100%",
            imageRendering: "pixelated",
            backgroundPosition: "center",
            width: "230px",
            height: "60px",
          }}
        >
          <h3>{getRarityText()}</h3>
        </div>
        <button className="rarity-buttons" onClick={handlePlusClick}>
          {">"}
        </button>
      </div>
    </>
  );
};

export default JokerRarity;
