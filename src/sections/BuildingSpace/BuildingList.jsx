/* eslint-disable react/prop-types */
import React from "react";
import { useDrop } from "react-dnd";
import DroppedBlock from "./DroppedBlock";
import { IMAGES } from "../../config/assetImports";
import ClearListButton from "./ClearListButton";

const BuldingList = ({ blockType, updateLua }) => {
  const [droppedItem, setDroppedItem] = React.useState(null);

  const [, drop] = useDrop({
    accept: blockType,
    drop: (item) => {
      console.log("Item dropped:", item);
      setDroppedItem(item);
    },
    collect: () => ({}),
  });

  let backgroundImage = null;
  let title = null;
  switch (blockType) {
    case "context-block":
      backgroundImage = IMAGES.contextListBackground;
      title = "Context Blocks";
      break;
    case "condition-block":
      backgroundImage = IMAGES.conditionListBackground;
      title = "Condition Blocks";
      break;
    case "results-block":
      title = "Result Blocks";
      backgroundImage = IMAGES.resultsListBackground;
      break;
  }
  return (
    <div
      className={`building-list`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>{title}</h2>
      <div
        ref={drop}
        style={{
          height: "66%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {droppedItem && (
          <DroppedBlock
            styles={droppedItem.styles}
            title={droppedItem.title}
            lua={droppedItem.lua}
            id={droppedItem.id}
            additionalInput={droppedItem.additionalInput}
            inputType={droppedItem.inputType}
            blockType={blockType}
            updateLua={updateLua}
          />
        )}
      </div>
      <ClearListButton setDroppedItem={setDroppedItem} updateLua={updateLua} />
    </div>
  );
};

export default BuldingList;
