/* eslint-disable react/prop-types */
import React from "react";
import BuildingList from "./BuildingList";
import ItemTypes from "../../config/ItemTypes";
import LuaDownloader from "./LuaDownloader";

const BuildingSpace = ({
  updateLuaJokerEffect,
  jokerName,
  jokerEffect,
  localVariables,
  tableInsert,
  image,
  exceptionLua,
  setExceptionLua,
  contextMemory,
  setContextMemory,
  conditionsMemory,
  setConditionsMemory,
  resultsMemory,
  setResultsMemory,
}) => {
  const [contextLua, setContextLua] = React.useState(null);
  const [conditionsLua, setConditionsLua] = React.useState(null);
  const [resultsLua, setResultsLua] = React.useState(null);

  React.useEffect(() => {
    if (contextLua == null || conditionsLua == null || resultsLua == null) {
      updateLuaJokerEffect(null);
    } else {
      switch (exceptionLua) {
        case "retrigger":
          updateLuaJokerEffect(
            `local function jokerEffect(card, context)
              if context.repetition then 
            ` +
              contextLua +
              ` if card.ability.name == "${jokerName}" and ` +
              conditionsLua +
              resultsLua +
              `                 end
     end
  end`
          );
          break;
        case "none":
          updateLuaJokerEffect(
            `local function jokerEffect(card, context)
  if card.ability.name == "${jokerName}" ` +
              contextLua +
              conditionsLua +
              resultsLua +
              `    
      end
  end`
          );
          break;
      }
    }
  }, [
    contextLua,
    conditionsLua,
    resultsLua,
    updateLuaJokerEffect,
    exceptionLua,
    jokerName,
  ]);

  return (
    <div className="building-space">
      <div className="building-space-row">
        <BuildingList
          updateLua={setContextLua}
          blockType={ItemTypes.CONTEXTBLOCK}
          exceptionLua={exceptionLua}
          setExceptionLua={setExceptionLua}
          blockMemory={contextMemory}
          setBlockMemory={setContextMemory}
        />
        <BuildingList
          updateLua={setConditionsLua}
          blockType={ItemTypes.CONDITIONBLOCK}
          exceptionLua={exceptionLua}
          setExceptionLua={setExceptionLua}
          conditionsMemory={conditionsMemory}
          setBlockMemory={setConditionsMemory}
        />
      </div>
      <div className="building-space-row">
        <BuildingList
          updateLua={setResultsLua}
          blockType={ItemTypes.RESULTSBLOCK}
          exceptionLua={exceptionLua}
          setExceptionLua={setExceptionLua}
          resultsMemory={resultsMemory}
          setBlockMemory={setResultsMemory}
        />
        <LuaDownloader
          jokerName={jokerName}
          jokerEffect={jokerEffect}
          localVariables={localVariables}
          tableInsert={tableInsert}
          image={image}
        />
      </div>
    </div>
  );
};

export default BuildingSpace;
