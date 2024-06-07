/* eslint-disable react/prop-types */
import React from "react";
import { useDrop } from "react-dnd";
import DroppedBlock from "./DroppedBlock";
import { IMAGES } from "../../config/assetImports";

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

  switch (blockType) {
    case "context-block":
      backgroundImage = IMAGES.contextListBackground;
      break;
    case "condition-block":
      backgroundImage = IMAGES.conditionListBackground;
      break;
    case "results-block":
      backgroundImage = IMAGES.resultsListBackground;
      break;
  }
  return (
    <div
      ref={drop}
      className={`building-list`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {droppedItem && (
        <div className="dropped-item">
          <DroppedBlock
            styles={droppedItem.styles}
            title={droppedItem.title}
            lua={droppedItem.lua}
            id={droppedItem.id}
            additionalInput={droppedItem.additionalInput}
            blockType={blockType}
            updateLua={updateLua}
          />
        </div>
      )}
    </div>
  );
};

export default BuldingList;
