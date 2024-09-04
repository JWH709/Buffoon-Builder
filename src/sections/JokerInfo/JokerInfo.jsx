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
    if (dataFromName && dataFromDescription && dataFromCost != null) {
      const luaJokerNameLower = dataFromName.toLowerCase();
      const luaJokerID = luaJokerNameLower.replaceAll(" ", "_");
      updateLuaLocals(`local mod_id = "${luaJokerID}"

-- logger
local logging = require("logging")
local logger = logging.getLogger(mod_id)

-- APIs
local joker = require('joker')

-- config
local mod_config = {}`);

      const luaJokerTableID = "j_" + luaJokerID;
      updateLuaTableInsert(`        
       local function on_enable()
    -- Add an example joker
    joker.add({
        mod_id = mod_id,
        id = "${luaJokerTableID}",
        name = "${dataFromName}",
        desc = {'${dataFromDescription}'},
        rarity = ${dataFromRarity},
        effect = "${dataFromDescription}",
        calculate_joker_effect = jokerEffect,
        unlocked = true,
        discovered = true,
        cost = ${dataFromCost},
        blueprint_compat = true
    })
end

local function on_disable()
    joker.remove("${luaJokerID}")
end

return {
    on_enable = on_enable,
    on_disable = on_disable
}`);
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
                isMobile={isMobile}
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
              isMobile={isMobile}
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
              isMobile={isMobile}
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
