/* eslint-disable react/prop-types */
import JokerCostTab from "./JokerCost";
import { IMAGES } from "../../config/assetImports.js";

const JokerPreview = ({
  jokerName,
  jokerEffect,
  jokerRarity,
  jokerCost,
  position,
}) => {
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
        top: position.y + 10,
        left: position.x + 10,
      }}
    >
      <JokerCostTab jokerCost={jokerCost} />
      <div
        className="joker-preview-background"
        style={{ backgroundImage: `url(${IMAGES.previewBackground})` }}
      >
        <h2 className="joker-preview-name">{jokerName}</h2>
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
