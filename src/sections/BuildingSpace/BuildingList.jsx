/* eslint-disable react/prop-types */
import React from "react";
import { useDrop } from "react-dnd";
import DroppedBlock from "./DroppedBlock";

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
  return (
    <div ref={drop} className={`building-list-${blockType}`}>
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
