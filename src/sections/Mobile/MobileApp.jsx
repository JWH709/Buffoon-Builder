/* eslint-disable react/prop-types */
import React from "react";
import BuldingList from "../BuildingSpace/BuildingList";
import LuaDownloader from "../BuildingSpace/LuaDownloader";
import SidePanel from "../SidePanel/SidePanel";
import JokerInfo from "../JokerInfo/JokerInfo";
import ItemTypes from "../../config/ItemTypes";
import { IMAGES } from "../../config/assetImports";

const MobileApp = ({
  setLuaJokerEffect,
  handleDataFromName,
  dataFromName,
  luaJokerEffect,
  setLuaLocals,
  luaLocals,
  setLuaTableInsert,
  luaTableInsert,
  setImage,
  image,
  isMobile,
}) => {
  const jokerEffectDeclaration = `local function jokerEffect(card, context)
    if card.ability.name == "${dataFromName}" `;
  const jokerEffectEnd = `    
        end
    end`;
  let [contextLua, setContextLua] = React.useState(null);
  let [conditionsLua, setConditionsLua] = React.useState(null);
  let [resultsLua, setResultsLua] = React.useState(null);

  React.useEffect(() => {
    if (contextLua == null || conditionsLua == null || resultsLua == null) {
      setLuaJokerEffect(null);
    } else {
      setLuaJokerEffect(
        jokerEffectDeclaration +
          contextLua +
          conditionsLua +
          resultsLua +
          jokerEffectEnd
      );
    }
  }, [
    contextLua,
    conditionsLua,
    resultsLua,
    setLuaJokerEffect,
    jokerEffectDeclaration,
    jokerEffectEnd,
  ]);

  //
  const [currentTab, setCurrentTab] = React.useState(true);

  //Switches displayed BuildingList
  const [currentList, setCurrentList] = React.useState(ItemTypes.CONTEXTBLOCK);

  return (
    <>
      {!currentTab && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "80%",
            fontFamily: "balatro",
            backgroundImage: `url(${IMAGES.builderBackground})`,
            imageRendering: "pixelated",
            backgroundSize: " 100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
                height: "100%",
              }}
            >
              <button
                onClick={() => {
                  switch (currentList) {
                    case ItemTypes.CONTEXTBLOCK:
                      setCurrentList(ItemTypes.RESULTSBLOCK);
                      break;
                    case ItemTypes.CONDITIONBLOCK:
                      setCurrentList(ItemTypes.CONTEXTBLOCK);
                      break;
                    case ItemTypes.RESULTSBLOCK:
                      setCurrentList(ItemTypes.CONDITIONBLOCK);
                      break;
                    default:
                      setCurrentList(ItemTypes.CONTEXTBLOCK);
                      break;
                  }
                }}
              >
                -
              </button>
              {currentList == ItemTypes.CONTEXTBLOCK && (
                <BuldingList
                  blockType={ItemTypes.CONTEXTBLOCK}
                  updateLua={setContextLua}
                />
              )}
              {currentList == ItemTypes.CONDITIONBLOCK && (
                <BuldingList
                  blockType={ItemTypes.CONDITIONBLOCK}
                  updateLua={setConditionsLua}
                />
              )}
              {currentList == ItemTypes.RESULTSBLOCK && (
                <BuldingList
                  blockType={ItemTypes.RESULTSBLOCK}
                  updateLua={setResultsLua}
                />
              )}
              <button
                style={{
                  width: "5%",
                  height: "90%",
                }}
                onClick={() => {
                  switch (currentList) {
                    case ItemTypes.CONTEXTBLOCK:
                      setCurrentList(ItemTypes.CONDITIONBLOCK);
                      break;
                    case ItemTypes.CONDITIONBLOCK:
                      setCurrentList(ItemTypes.RESULTSBLOCK);
                      break;
                    case ItemTypes.RESULTSBLOCK:
                      setCurrentList(ItemTypes.CONTEXTBLOCK);
                      break;
                    default:
                      setCurrentList(ItemTypes.CONTEXTBLOCK);
                      break;
                  }
                }}
              >
                +
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "50%",
                height: "100%",
              }}
            >
              <LuaDownloader
                jokerName={dataFromName}
                jokerEffect={luaJokerEffect}
                localVariables={luaLocals}
                tableInsert={luaTableInsert}
                image={image}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
                isMobile={isMobile}
              />
            </div>
          </div>
          <SidePanel />
        </div>
      )}
      {currentTab && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "80%",
          }}
        >
          <JokerInfo
            setCurrentTab={setCurrentTab}
            currentTab={currentTab}
            handleDataFromName={handleDataFromName}
            dataFromName={dataFromName}
            image={image}
            setImage={setImage}
            updateLuaLocals={setLuaLocals}
            updateLuaTableInsert={setLuaTableInsert}
          />
        </div>
      )}
    </>
  );
};
export default MobileApp;
