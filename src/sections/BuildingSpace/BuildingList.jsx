/* eslint-disable react/prop-types */
import React from "react";
import { useDrop } from "react-dnd";
import DroppedBlock from "./DroppedBlock";
import { IMAGES } from "../../config/assetImports";
import ClearListButton from "./ClearListButton";
import SectionTitle from "../../config/SectionTitle";
import BuildingListInfo from "./BuildingListInfo";
import jokerListInfoText from "../../config/JokerListInfoText";

const BuldingList = ({ blockType, updateLua }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [infoText, setInfoText] = React.useState(null);
  const [droppedItem, setDroppedItem] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const [backgroundImage, setBackgroundImage] = React.useState(null);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const [, drop] = useDrop({
    accept: blockType,
    drop: (item) => {
      console.log("Item dropped:", item);
      setDroppedItem(item);
    },
    collect: () => ({}),
  });

  React.useEffect(() => {
    switch (blockType) {
      case "context-block":
        setBackgroundImage(IMAGES.contextListBackground);
        setTitle("Context Blocks");
        setInfoText(jokerListInfoText.context);
        break;
      case "condition-block":
        setBackgroundImage(IMAGES.conditionListBackground);
        setTitle("Condition Blocks");
        setInfoText(jokerListInfoText.condition);
        break;
      case "results-block":
        setTitle("Result Blocks");
        setBackgroundImage(IMAGES.resultsListBackground);
        setInfoText(jokerListInfoText.results);
        break;
    }
  }, [setBackgroundImage, setTitle, setInfoText, blockType]);

  return (
    <div
      className={`building-list`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SectionTitle text={title} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "solid 5px aliceblue",
            backgroundColor: "aliceblue",
            color: "black",
            height: "38px",
            width: "38px",
            borderRadius: "50%",
            userSelect: "none",
            clipPath:
              "polygon(0px calc(100% - 8px), 4px calc(100% - 8px), 4px calc(100% - 4px), 8px calc(100% - 4px), 8px 100%, calc(100% - 8px) 100%, calc(100% - 8px) calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) calc(100% - 8px), 100% calc(100% - 8px), 100% 8px,calc(100% - 4px) 8px,calc(100% - 4px) 4px,calc(100% - 8px) 4px,calc(100% - 8px) 0px,8px 0px,8px 4px,4px 4px,4px 8px,0px 8px",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
        >
          i
        </div>
        {isHovered && (
          <BuildingListInfo infoText={infoText} mousePosition={mousePosition} />
        )}
      </div>
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
