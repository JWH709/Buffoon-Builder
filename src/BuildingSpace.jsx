import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./Constants";

const BuildingSpace = () => {
  const [droppedItem, setDroppedItem] = React.useState(null);

  const [, drop] = useDrop({
    accept: ItemTypes.BLOCK,
    drop: (item) => {
      console.log("Item dropped:", item);
      setDroppedItem(item);
    },
    collect: () => ({}),
  });

  return (
    <div ref={drop} className={`building-space`}>
      {droppedItem && <div className="dropped-item">{droppedItem.type}</div>}
    </div>
  );
};

export default BuildingSpace;
