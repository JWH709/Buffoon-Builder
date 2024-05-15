/* eslint-disable react/prop-types */
import JokerCostTab from "./JokerCost";
const JokerPreview = ({ jokerName, jokerEffect, jokerRarity, jokerCost }) => {
  return (
    <>
      <div>
        <JokerCostTab jokerCost={jokerCost} />
        <div className="joker-preview">
          <h2 className="joker-preview-name">{jokerName}</h2>
          <div className="joker-preview-effect-container">
            <p className="joker-preview-effect">{jokerEffect}</p>
          </div>
          <div className="joker-preview-rarity-container">
            <h3 className="joker-preview-rarity">{jokerRarity}</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default JokerPreview;
