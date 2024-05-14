/* eslint-disable react/prop-types */
import React from "react";
import "./main.css";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./Constants";
import Rarity from "./RarityStickers";
import JokerCostTab from "./JokerCost";
import JokerInput from "./JokerInputs";
const JokerDetails = () => {
  const [droppedItem, setDroppedItem] = React.useState(null);

  const [, drop] = useDrop({
    accept: ItemTypes.ART,
    drop: (item) => {
      console.log("Item dropped:", item);
      setDroppedItem(item);
    },
    collect: () => ({}),
  });

  return (
    <>
      <div className="column container joker-details-container">
        <JokerCostTab />
        <div className="art-asset-container" ref={drop}>
          {droppedItem && (
            <div className="dropped-art-container">
              <DroppedArt
                artSrc={droppedItem.artSrc}
                artName={droppedItem.artName}
              />
            </div>
          )}
        </div>
        <JokerInput inputTitle={"Joker Name:"} />
        <Rarity />
        <JokerInput inputTitle={"Joker Cost:"} />
        <JokerInput />
      </div>
    </>
  );
};

const DroppedArt = ({ artSrc, artName }) => {
  return <img src={artSrc} alt={artName} />;
};

export default JokerDetails;
