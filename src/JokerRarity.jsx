/* eslint-disable react/prop-types */
import React from "react";
import common from "./assets/rarity/common.png";
import uncommon from "./assets/rarity/uncommon.png";
import rare from "./assets/rarity/rare.png";
import legendary from "./assets/rarity/legendary.png";

const Rarity = ({ handler }) => {
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
        return common;
      case 2:
        return uncommon;
      case 3:
        return rare;
      case 4:
        return legendary;
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
            backgroundSize: "cover",
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

export default Rarity;
