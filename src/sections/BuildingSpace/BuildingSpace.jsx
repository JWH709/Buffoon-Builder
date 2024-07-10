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
}) => {
  const jokerEffectDeclaration = `local function jokerEffect(card, context)
  if card.ability.name == "${jokerName}" `;
  const jokerEffectEnd = `    
      ends
  end`;
  let [contextLua, setContextLua] = React.useState(null);
  let [conditionsLua, setConditionsLua] = React.useState(null);
  let [resultsLua, setResultsLua] = React.useState(null);

  React.useEffect(() => {
    if (contextLua == null || conditionsLua == null || resultsLua == null) {
      updateLuaJokerEffect(null);
    } else {
      updateLuaJokerEffect(
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
    updateLuaJokerEffect,
    jokerEffectDeclaration,
    jokerEffectEnd,
  ]);

  return (
    <div className="building-space">
      <div className="building-space-row">
        <BuildingList
          updateLua={setContextLua}
          blockType={ItemTypes.CONTEXTBLOCK}
        />
        <BuildingList
          updateLua={setConditionsLua}
          blockType={ItemTypes.CONDITIONBLOCK}
        />
      </div>
      <div className="building-space-row">
        <BuildingList
          updateLua={setResultsLua}
          blockType={ItemTypes.RESULTSBLOCK}
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
