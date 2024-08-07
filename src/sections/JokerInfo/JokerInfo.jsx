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
  setCurrentTab,
  currentTab,
  dataFromRarity,
  setDataFromRarity,
  dataFromDescription,
  setDataFromDescription,
  dataFromCost,
  setDataFromCost,
  isCropped,
  setIsCropped,
  isMobile,
  activeAnimationTarget,
  setActiveAnimationTarget,
  step,
  setStep,
}) => {
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

  let defaultCost = 0;
  if (dataFromCost) {
    defaultCost = dataFromCost;
  }
  let defaultName = "";
  if (dataFromName) {
    defaultName = dataFromName;
  }
  let defaultDescription = "";
  if (dataFromDescription) {
    defaultDescription = dataFromDescription;
  }
  return (
    <>
      <div className="joker-details-container">
        {currentTab && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
            }}
          >
            <JokerRarity
              setDataFromRarity={setDataFromRarity}
              dataFromRarity={dataFromRarity}
              isMobile={isMobile}
            />

            <button
              className="mobile-switch-button"
              style={{
                height: "80%",
                width: "30%",
              }}
              onClick={() => {
                if (activeAnimationTarget === 1 && step === 0) {
                  setStep(1);
                } else if (activeAnimationTarget === 2 && step === 0) {
                  setStep(1);
                } else if (activeAnimationTarget === 2 && step === 1) {
                  setActiveAnimationTarget(1);
                  setStep(0);
                }
                if (currentTab) {
                  setCurrentTab(true);
                } else {
                  setCurrentTab(false);
                }
              }}
            >
              Switch Tab
            </button>
          </div>
        )}
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
                isCropped={isCropped}
                setIsCropped={setIsCropped}
              />
            </div>
          </div>

          <div className="container-effect">
            <div className="joker-info-title-wrapper">
              <SectionTitle text={"Joker Effect"} />
            </div>
            <JokerDescription
              inputType={"input-joker-effect"}
              setDataFromDescription={setDataFromDescription}
              dataFromDescription={dataFromDescription}
              defaultDescription={defaultDescription}
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
              dataFromName={dataFromName}
              defaultValue={defaultName}
            />
          </div>
          <div className="container-cost">
            <div className="joker-info-title-wrapper">
              <SectionTitle text={"Joker Cost"} />
            </div>
            <JokerInput
              inputType={"input-joker-cost"}
              handler={setDataFromCost}
              length={3}
              type={"number"}
              dataFromCost={dataFromCost}
              defaultValue={defaultCost}
            />
          </div>
        </div>
        {!currentTab && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
            }}
          >
            <JokerRarity
              setDataFromRarity={setDataFromRarity}
              dataFromRarity={dataFromRarity}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default JokerInfo;
