/* eslint-disable react/prop-types */
import React from "react";
import "./main.css";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./Constants";
import Rarity from "./JokerRarity";
import JokerInput from "./JokerInputs";
import JokerDescription from "./JokerDescription";
import DroppedArt from "./DroppedArt";
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

  const [dataFromName, setDataFromName] = React.useState(null);
  const [dataFromRarity, setDataFromRarity] = React.useState(1);
  const [dataFromDescription, setDataFromDescription] = React.useState(null);
  const [dataFromCost, setDataFromCost] = React.useState(null);
  const handleDataFromName = (data) => {
    setDataFromName(data);
  };
  const handleDataFromRarity = (data) => {
    setDataFromRarity(data);
  };
  const handleDataFromDescription = (data) => {
    setDataFromDescription(data);
  };
  const handleDataFromCost = (data) => {
    setDataFromCost(data);
  };
  return (
    <>
      <div className="column container joker-details-container">
        <div className="art-asset-container" ref={drop}>
          {droppedItem && (
            <div className="dropped-art-container">
              <DroppedArt
                artSrc={droppedItem.artSrc}
                artName={droppedItem.artName}
                dataFromName={dataFromName}
                dataFromCost={dataFromCost}
                dataFromDescription={dataFromDescription}
                dataFromRarity={dataFromRarity}
              />
            </div>
          )}
        </div>
        <JokerInput
          inputTitle={"Joker Name:"}
          inputType={"input-joker-name"}
          handler={handleDataFromName}
          length={18}
          pat={""}
        />
        <Rarity handler={handleDataFromRarity} />
        <JokerDescription
          inputTitle={"Joker Effect:"}
          inputType={"input-joker-effect"}
          handler={handleDataFromDescription}
        />
        <JokerInput
          inputTitle={"Joker Cost:"}
          inputType={"input-joker-cost"}
          handler={handleDataFromCost}
          length={3}
          pat={"[0-9]{4}"}
        />
      </div>
    </>
  );
};

export default JokerDetails;
