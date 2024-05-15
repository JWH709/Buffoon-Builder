/* eslint-disable react/prop-types */
import React from "react";
import "./main.css";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./Constants";
import Rarity from "./JokerRarity";
import JokerCostTab from "./JokerCost";
import JokerInput from "./JokerInputs";
import JokerDescription from "./JokerDescription";
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
        <JokerInput inputTitle={"Joker Name:"} inputType={"input-joker-name"} />
        <Rarity />
        <JokerDescription
          inputTitle={"Joker Effect:"}
          inputType={"input-joker-effect"}
        />
        <JokerInput inputTitle={"Joker Cost:"} inputType={"input-joker-cost"} />
      </div>
    </>
  );
};

const DroppedArt = ({ artSrc, artName }) => {
  return <img src={artSrc} alt={artName} />;
};

export default JokerDetails;
