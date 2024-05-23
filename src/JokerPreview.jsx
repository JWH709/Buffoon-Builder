/* eslint-disable react/prop-types */
import JokerCostTab from "./JokerCost";
import common from "./assets/rarity/common.png";
import uncommon from "./assets/rarity/uncommon.png";
import rare from "./assets/rarity/rare.png";
import legendary from "./assets/rarity/legendary.png";
import previewBackground from "./assets/preview_bg.png";
import previewEffect from "./assets/preview_effect.png";

const JokerPreview = ({
  jokerName,
  jokerEffect,
  jokerRarity,
  jokerCost,
  position,
  updateLuaLocals,
  updateLuaTableInsert,
}) => {
  let rarityTitle = "Common";
  let rarityImg = common;

  const getInitRarity = () => {
    switch (jokerRarity) {
      case 1:
        rarityTitle = "Common";
        rarityImg = common;
        break;
      case 2:
        rarityTitle = "Uncommon";
        rarityImg = uncommon;
        break;
      case 3:
        rarityTitle = "Rare";
        rarityImg = rare;
        break;
      case 4:
        rarityTitle = "Legendary";
        rarityImg = legendary;
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
        style={{ backgroundImage: `url(${previewBackground})` }}
      >
        <h2 className="joker-preview-name">{jokerName}</h2>
        <div
          className="joker-preview-effect-container"
          style={{ backgroundImage: `url(${previewEffect})` }}
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
