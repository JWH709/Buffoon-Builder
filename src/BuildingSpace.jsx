/* eslint-disable react/prop-types */
import React from "react";
import BuildingList from "./BuildingList";
import { ItemTypes } from "./Constants";

const BuildingSpace = ({ updateLuaJokerEffect, jokerName }) => {
  const jokerEffectDeclaration = `local function jokerEffect(card, context)
  if card.ability.name == "${jokerName}" `;
  const jokerEffectEnd = `    
      end
  end`;
  let [contextLua, setContextLua] = React.useState(null);
  let [conditionsLua, setConditionsLua] = React.useState(null);
  let [resultsLua, setResultsLua] = React.useState(null);

  if ((contextLua /= null) && (conditionsLua /= null) && (resultsLua /= null)) {
    updateLuaJokerEffect(
      jokerEffectDeclaration +
        contextLua +
        conditionsLua +
        resultsLua +
        jokerEffectEnd
    );
  }
  console.log(
    jokerEffectDeclaration +
      contextLua +
      conditionsLua +
      resultsLua +
      jokerEffectEnd
  );

  return (
    <div className="building-space ">
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
      </div>
    </div>
  );
};

export default BuildingSpace;
