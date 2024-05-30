/* eslint-disable react/prop-types */
import React from "react";
import BuildingList from "./BuildingList";
import { ItemTypes } from "./Constants";

const BuildingSpace = ({ updateLuaJokerEffect, jokerName }) => {
  const jokerEffectDeclaration = `local function jokerEffect(card, context)
  if card.ability.name == "${jokerName}" then`;
  const jokerEffectEnd = "end end";
  let [contextLua, setContextLua] = React.useState(null);
  let [conditionsLua, setConditionsLua] = React.useState(null);
  let [resultsLua, setResultsLua] = React.useState(null);

  const assembleLuaFunction = () => {
    if (
      (contextLua /= null) &&
      (conditionsLua /= null) &&
      (resultsLua /= null)
    ) {
      updateLuaJokerEffect(
        jokerEffectDeclaration +
          contextLua +
          conditionsLua +
          resultsLua +
          jokerEffectEnd
      );
    }
  };
  console.log(ItemTypes.CONDITIONBLOCK);
  assembleLuaFunction();

  return (
    <div className="building-space ">
      <div className="building-space-row">
        <BuildingList
          updateLuaContext={setContextLua}
          blockType={ItemTypes.CONTEXTBLOCK}
        />
        <BuildingList
          updateLuaConditions={setConditionsLua}
          blockType={ItemTypes.CONDITIONBLOCK}
        />
      </div>
      <div className="building-space-row">
        <BuildingList
          updateLuaResults={setResultsLua}
          blockType={ItemTypes.RESULTSBLOCK}
        />
      </div>
    </div>
  );
};

export default BuildingSpace;
