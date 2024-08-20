/* eslint-disable react/prop-types */
import JokerCostTab from "./JokerCost";
import { IMAGES } from "../../config/assetImports.js";
import React from "react";

const JokerPreview = ({
  jokerName,
  jokerEffect,
  jokerRarity,
  jokerCost,
  position,
  isMobile,
  setVoucherClicked,
}) => {
  const handleXClick = React.useCallback(() => {
    setVoucherClicked(false);
  }, [setVoucherClicked]);

  let rarityTitle = "Common";
  let rarityImg = IMAGES.common;

  const getInitRarity = () => {
    switch (jokerRarity) {
      case 1:
        rarityTitle = "Common";
        rarityImg = IMAGES.common;
        break;
      case 2:
        rarityTitle = "Uncommon";
        rarityImg = IMAGES.uncommon;
        break;
      case 3:
        rarityTitle = "Rare";
        rarityImg = IMAGES.rare;
        break;
      case 4:
        rarityTitle = "Legendary";
        rarityImg = IMAGES.legendary;
        break;
    }
  };
  getInitRarity();

  return (
    <div
      className="joker-preview"
      style={{
        position: "fixed",
        top: isMobile ? 0 : position.y + 10,
        left: isMobile ? 0 : position.x + 10,
        zIndex: "1",
      }}
    >
      <JokerCostTab jokerCost={jokerCost} />
      <div
        className="joker-preview-background"
        style={{ backgroundImage: `url(${IMAGES.previewBackground})` }}
      >
        <h2 className="joker-preview-name">{jokerName}</h2>
        {isMobile && (
          <h2
            style={{
              color: "black",
              position: "fixed",
              top: "80px",
              right: "200px",
            }}
            onClick={handleXClick}
          >
            X
          </h2>
        )}
        <div
          className="joker-preview-effect-container"
          style={{ backgroundImage: `url(${IMAGES.previewEffect})` }}
        >
          <p className="joker-preview-effect">{jokerEffect}</p>
        </div>
        <div
          className="joker-preview-rarity-container"
          style={{ backgroundImage: `url(${rarityImg})` }}
        >
          <h3 className="joker-preview-rarity">{rarityTitle}</h3>
        </div>
      </div>
    </div>
  );
};

export default JokerPreview;
