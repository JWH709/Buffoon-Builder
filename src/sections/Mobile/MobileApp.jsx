/* eslint-disable react/prop-types */
import React from "react";
import BuldingList from "../BuildingSpace/BuildingList";
import LuaDownloader from "../BuildingSpace/LuaDownloader";
import SidePanel from "../SidePanel/SidePanel";
import JokerInfo from "../JokerInfo/JokerInfo";
import ItemTypes from "../../config/ItemTypes";

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
                border: "1px solid aliceblue",
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
                  updateLua={setContextLua}
                />
              )}
              {currentList == ItemTypes.RESULTSBLOCK && (
                <BuldingList
                  blockType={ItemTypes.RESULTSBLOCK}
                  updateLua={setContextLua}
                />
              )}
              <button
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
                border: "1px solid aliceblue",
              }}
            >
              <button
                onClick={() => {
                  if (currentTab) {
                    setCurrentTab(false);
                  } else {
                    setCurrentTab(true);
                  }
                }}
              >
                Switch to Details
              </button>
              <LuaDownloader
                jokerName={dataFromName}
                jokerEffect={luaJokerEffect}
                localVariables={luaLocals}
                tableInsert={luaTableInsert}
                image={image}
              />
            </div>
          </div>
          <SidePanel />
        </div>
      )}
      {!currentTab && (
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
          <JokerInfo />
        </div>
      )}
    </>
  );
};
export default MobileApp;
