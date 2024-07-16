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

  const handleDataFromDescription = (data) => {
    setDataFromDescription(data);
  };
  const handleDataFromCost = (data) => {
    setDataFromCost(data);
  };
  React.useEffect(() => {
    if (dataFromName && dataFromDescription && dataFromCost) {
      const luaJokerNameLower = dataFromName.toLowerCase();
      const luaJokerID = luaJokerNameLower.replaceAll(" ", "_");
      updateLuaLocals(`--All mods made using the center_hook api (https://github.com/nicholassam6425/balatro-mods)

        local mod_id = "${luaJokerID}"
        local mod_name = "${dataFromName}"
        local mod_version = "1.0"
        local mod_author = "BuffoonBuilder"`);

      const luaJokerTableID = "j_" + luaJokerID;
      updateLuaTableInsert(`
        
        table.insert(mods, {
          mod_id = mod_id,
          name = mod_name,
          version = mod_version,
          author = mod_author,
          enabled = true,
          on_enable = function()
              centerHook.addJoker(self, "${luaJokerTableID}", -- id
              '${dataFromName}', -- name
              jokerEffect, -- effect function
              nil, -- order
              true, -- unlocked
              true, -- discovered
              ${dataFromCost}, -- cost
              {
                  x = 0,
                  y = 0
              }, -- sprite position
              nil, -- internal effect description
              {
                  extra = {
                      x_mult = 2
                  }
              }, -- config
              {'${dataFromDescription}'}, -- description text
              ${dataFromRarity}, -- rarity
              true, -- blueprint compatibility
              true, -- eternal compatibility
              nil, -- exclusion pool flag
              nil, -- inclusion pool flag
              nil, -- unlock condition
              true, -- collection alert
              "pack", -- sprite path
              ("${luaJokerID}.png"), -- sprite name
              {
                  px = 71,
                  py = 95
              } -- sprite size
              )
          end,
          on_disable = function()
              centerHook.removeJoker(self, "${luaJokerTableID}")
          end
      })`);
    }
  }, [
    dataFromName,
    dataFromDescription,
    dataFromCost,
    dataFromRarity,
    updateLuaLocals,
    updateLuaTableInsert,
  ]);
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
        <JokerRarity setDataFromRarity={setDataFromRarity} />
      </div>
    </>
  );
};

export default JokerInfo;
