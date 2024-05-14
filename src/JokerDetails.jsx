/* eslint-disable react/prop-types */
import React from "react";
import "./main.css";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./Constants";
import Rarity from "./RarityStickers";
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
    <div className="column container joker-details-container">
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
      <input type="text" className="joker-details-input" />
      <Rarity />
      <input type="text" className="joker-details-input" />
      <input type="text" className="joker-details-input" />
    </div>
  );
};

const DroppedArt = ({ artSrc, artName }) => {
  return <img src={artSrc} alt={artName} />;
};

export default JokerDetails;
