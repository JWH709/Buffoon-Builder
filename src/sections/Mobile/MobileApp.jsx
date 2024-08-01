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
  isMobile,
  contextMemory,
  setContextMemory,
  conditionsMemory,
  setConditionsMemory,
  resultsMemory,
  setResultsMemory,
  dataFromRarity,
  setDataFromRarity,
  dataFromDescription,
  setDataFromDescription,
  dataFromCost,
  setDataFromCost,
  isCropped,
  setIsCropped,
}) => {
  const jokerEffectDeclaration = `local function jokerEffect(card, context)
    if card.ability.name == "${dataFromName}" `;
  const jokerEffectEnd = `    
        end
    end`;
  let [contextLua, setContextLua] = React.useState(null);

  let [conditionsLua, setConditionsLua] = React.useState(null);

  let [resultsLua, setResultsLua] = React.useState(null);

  const [currentTab, setCurrentTab] = React.useState(true);

  const [currentList, setCurrentList] = React.useState(ItemTypes.CONTEXTBLOCK);

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
          }}
        >
          <div className="mobile-container">
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
                {currentList == ItemTypes.CONTEXTBLOCK && (
                  <BuldingList
                    blockType={ItemTypes.CONTEXTBLOCK}
                    updateLua={setContextLua}
                    isMobile={isMobile}
                    setCurrentList={setCurrentList}
                    currentList={currentList}
                    blockMemory={contextMemory}
                    setBlockMemory={setContextMemory}
                  />
                )}
                {currentList == ItemTypes.CONDITIONBLOCK && (
                  <BuldingList
                    blockType={ItemTypes.CONDITIONBLOCK}
                    updateLua={setConditionsLua}
                    isMobile={isMobile}
                    setCurrentList={setCurrentList}
                    currentList={currentList}
                    blockMemory={conditionsMemory}
                    setBlockMemory={setConditionsMemory}
                  />
                )}
                {currentList == ItemTypes.RESULTSBLOCK && (
                  <BuldingList
                    blockType={ItemTypes.RESULTSBLOCK}
                    updateLua={setResultsLua}
                    isMobile={isMobile}
                    setCurrentList={setCurrentList}
                    currentList={currentList}
                    blockMemory={resultsMemory}
                    setBlockMemory={setResultsMemory}
                  />
                )}
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
            dataFromRarity={dataFromRarity}
            dataFromCost={dataFromCost}
            dataFromDescription={dataFromDescription}
            setDataFromRarity={setDataFromRarity}
            setDataFromCost={setDataFromCost}
            setDataFromDescription={setDataFromDescription}
            isCropped={isCropped}
            setIsCropped={setIsCropped}
          />
        </div>
      )}
    </>
  );
};
export default MobileApp;
