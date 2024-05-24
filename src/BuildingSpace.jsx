/* eslint-disable react/prop-types */
import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./Constants";

const BuildingSpace = ({ updateLuaJokerEffect, jokername }) => {
  const [droppedItem, setDroppedItem] = React.useState(null);

  const [, drop] = useDrop({
    accept: ItemTypes.BLOCK,
    drop: (item) => {
      console.log("Item dropped:", item);
      setDroppedItem(item);
    },
    collect: () => ({}),
  });
  //Need to edit this section to create a DroppedBlock when a block is dropped
  return (
    <div ref={drop} className={`building-space`}>
      {droppedItem && (
        <div className="dropped-item">
          <DroppedBlock styles={droppedItem.styles} title={droppedItem.title} />
        </div>
      )}
    </div>
  );
};

const DroppedBlock = ({ styles, title }) => {
  return (
    <div className={styles}>
      <h2>{title}</h2>
    </div>
  );
};

export default BuildingSpace;
