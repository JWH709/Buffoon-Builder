/* eslint-disable react/prop-types */
import React from "react";
import "../../styles/main.css";
import JokerRarity from "./JokerRarity";
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "95%",
            justifyContent: "space-evenly",
            margin: "2%",
          }}
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
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
          </div>
          <div className="container-effect">
            <h2
              style={{
                fontFamily: "balatro",
                color: "aliceblue",
              }}
            >
              Joker Effect:
            </h2>
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
            justifyContent: "center",
            margin: "2%",
          }}
        >
          <div className="container-name-rarity">
            <h2
              style={{
                fontFamily: "balatro",
                color: "aliceblue",
              }}
            >
              Joker Name:
            </h2>
            <JokerInput
              inputType={"input-joker-name"}
              handler={handleDataFromName}
              length={18}
              type={"text"}
            />
            <JokerRarity handler={handleDataFromRarity} />
          </div>
          <div className="container-cost">
            <h2
              style={{
                fontFamily: "balatro",
                color: "aliceblue",
              }}
            >
              Joker Cost:
            </h2>
            <JokerInput
              inputType={"input-joker-cost"}
              handler={handleDataFromCost}
              length={3}
              type={"number"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default JokerInfo;
