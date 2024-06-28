/* eslint-disable react/prop-types */
import React from "react";
import { IMAGES } from "../../config/assetImports.js";

const JokerRarity = ({ handler }) => {
  //Set States for rarity and button styles:

  const [rarity, setRarity] = React.useState(1);
  const [minusIsClicked, setMinusIsClicked] = React.useState(false);
  const [plusIsClicked, setPlusIsClicked] = React.useState(false);

  //Create handler for changing button styles on click:
  const handleMinusClickStyle = () => {
    setMinusIsClicked(true);
    setTimeout(() => {
      setMinusIsClicked(false);
    }, 200);
  };
  const handlePlusClickStyle = () => {
    setPlusIsClicked(true);
    setTimeout(() => {
      setPlusIsClicked(false);
    }, 200);
  };

  //Create functions to handle each button click, plus or minus:
  const handleMinusClick = () => {
    handleMinusClickStyle();
    if (rarity == 1) {
      setRarity(4);
      handler(4);
    } else {
      setRarity(rarity - 1);
      handler(rarity - 1);
    }
  };
  const handlePlusClick = () => {
    handlePlusClickStyle();
    if (rarity == 4) {
      setRarity(1);
      handler(1);
    } else {
      setRarity(rarity + 1);
      handler(rarity + 1);
    }
  };

  //Create function for getting a rarity based on a corresponding number
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

  //Return component:
  return (
    <>
      <div className="rarity-button-container">
        <button
          className={
            minusIsClicked ? "rarity-buttons-clicked" : "rarity-buttons"
          }
          onClick={handleMinusClick}
        >
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
        <button
          className={
            plusIsClicked ? "rarity-buttons-clicked" : "rarity-buttons"
          }
          onClick={handlePlusClick}
        >
          {">"}
        </button>
      </div>
    </>
  );
};

export default JokerRarity;
