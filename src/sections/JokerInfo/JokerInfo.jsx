/* eslint-disable react/prop-types */
import React from "react";
import "../../styles/main.css";
import Rarity from "./JokerRarity";
import JokerInput from "./JokerInputs";
import JokerDescription from "./JokerDescription";
import JokerImageUploader from "./JokerImageUploader";
const JokerInfo = ({
  updateLuaLocals,
  updateLuaTableInsert,
  dataFromName,
  handleDataFromName,
  image,
  setImage,
}) => {
  const [dataFromRarity, setDataFromRarity] = React.useState(1);
  const [dataFromDescription, setDataFromDescription] = React.useState(null);
  const [dataFromCost, setDataFromCost] = React.useState(null);
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
      <div className="joker-details-container">
        <div className="art-asset-container">
          <div className="dropped-art-container">
            <JokerImageUploader
              dataFromName={dataFromName}
              dataFromCost={dataFromCost}
              dataFromDescription={dataFromDescription}
              dataFromRarity={dataFromRarity}
              updateLuaLocals={updateLuaLocals}
              updateLuaTableInsert={updateLuaTableInsert}
              image={image}
              setImage={setImage}
            />
          </div>
        </div>
        <div className="container-name-rarity">
          <JokerInput
            inputTitle={"Joker Name:"}
            inputType={"input-joker-name"}
            handler={handleDataFromName}
            length={18}
            type={"text"}
          />
          <Rarity handler={handleDataFromRarity} />
        </div>
        <div className="container-effect-cost">
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
            type={"number"}
          />
        </div>
      </div>
    </>
  );
};

export default JokerInfo;
