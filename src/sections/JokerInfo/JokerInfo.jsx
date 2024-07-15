/* eslint-disable react/prop-types */
import React from "react";
import "../../styles/main.css";
import JokerRarity from "./JokerRarity";
import JokerInput from "./JokerInputs";
import JokerDescription from "./JokerDescription";
import JokerImageUploader from "./JokerImageUploader";
import SectionTitle from "../../config/SectionTitle";
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
  const handleDataFromRarity = React.useCallback(
    (data) => {
      setDataFromRarity(data);
    },
    [setDataFromRarity]
  );
  const handleDataFromDescription = (data) => {
    setDataFromDescription(data);
  };
  const handleDataFromCost = (data) => {
    setDataFromCost(data);
  };
  return (
    <>
      <div className="joker-details-container">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "95%",
            height: "40%",
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: "2%",
          }}
        >
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

          <div className="container-effect">
            <div className="joker-info-title-wrapper">
              <SectionTitle text={"Joker Effect"} />
            </div>
            <JokerDescription
              inputType={"input-joker-effect"}
              handler={handleDataFromDescription}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "95%",
            height: "40%",
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: "2%",
          }}
        >
          <div className="container-name-rarity">
            <div className="joker-info-title-wrapper">
              <SectionTitle text={"Joker Name"} />
            </div>
            <JokerInput
              inputType={"input-joker-name"}
              handler={handleDataFromName}
              length={18}
              type={"text"}
            />
          </div>
          <div className="container-cost">
            <div className="joker-info-title-wrapper">
              <SectionTitle text={"Joker Cost"} />
            </div>
            <JokerInput
              inputType={"input-joker-cost"}
              handler={handleDataFromCost}
              length={3}
              type={"number"}
            />
          </div>
        </div>
        <JokerRarity handleDataFromRarity={handleDataFromRarity} />
      </div>
    </>
  );
};

export default JokerInfo;
