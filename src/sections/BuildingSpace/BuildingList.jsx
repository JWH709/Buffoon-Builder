/* eslint-disable react/prop-types */
import React from "react";
import { useDrop } from "react-dnd";
import DroppedBlock from "./DroppedBlock";
import { IMAGES } from "../../config/assetImports";
import ClearListButton from "./ClearListButton";
import SectionTitle from "../../config/SectionTitle";
import BuildingListInfo from "./BuildingListInfo";
import JokerListInfoText from "../../config/JokerListInfoText";
import { animated, useSpring } from "@react-spring/web";

const BuldingList = ({
  blockType,
  updateLua,
  isMobile,
  blockMemory,
  setBlockMemory,
  setExceptionLua,
  exceptionLua,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [infoText, setInfoText] = React.useState(null);
  const [droppedItem, setDroppedItem] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const [backgroundImage, setBackgroundImage] = React.useState(null);
  const [displaySwipeInfo, setDisplaySwipeInfo] = React.useState(true);

  React.useEffect(() => {
    if (displaySwipeInfo) {
      setTimeout(() => {
        setDisplaySwipeInfo(false);
      }, 3000);
    }
  }, [displaySwipeInfo, setDisplaySwipeInfo]);

  const fadeOut = useSpring({
    opacity: 0,
    from: { opacity: 1 },
    config: { duration: 3000 },
  });

  const handleMouseMove = (e) => {
    if (!isMobile) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleBlockMemory = React.useCallback(
    (i) => {
      setBlockMemory(i);
    },
    [setBlockMemory]
  );

  const [, drop] = useDrop({
    accept: blockType,
    drop: (item) => {
      if (isMobile) {
        setDroppedItem(item);
        handleBlockMemory(item);
      } else {
        setDroppedItem(item);
      }
    },
    collect: () => ({}),
  });

  React.useEffect(() => {
    switch (blockType) {
      case "context-block":
        setBackgroundImage(IMAGES.contextListBackground);
        setTitle("Context Blocks");
        setInfoText(JokerListInfoText.context);
        break;
      case "condition-block":
        setBackgroundImage(IMAGES.conditionListBackground);
        setTitle("Condition Blocks");
        setInfoText(JokerListInfoText.condition);
        break;
      case "results-block":
        setTitle("Result Blocks");
        setBackgroundImage(IMAGES.resultsListBackground);
        setInfoText(JokerListInfoText.results);
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
        {isMobile && (
          <h5
            style={{
              color: "aliceblue",
              fontFamily: "balatro",
              userSelect: "none",
              marginRight: "4px",
            }}
          >
            {title}
          </h5>
        )}
        {!isMobile && <SectionTitle text={title} />}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "solid 5px aliceblue",
            backgroundColor: "aliceblue",
            marginBottom: "2%",
            color: "black",
            height: "38px",
            width: "38px",
            borderRadius: "50%",
            userSelect: "none",
            clipPath:
              "polygon(0px calc(100% - 8px), 4px calc(100% - 8px), 4px calc(100% - 4px), 8px calc(100% - 4px), 8px 100%, calc(100% - 8px) 100%, calc(100% - 8px) calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) calc(100% - 8px), 100% calc(100% - 8px), 100% 8px,calc(100% - 4px) 8px,calc(100% - 4px) 4px,calc(100% - 8px) 4px,calc(100% - 8px) 0px,8px 0px,8px 4px,4px 4px,4px 8px,0px 8px",
          }}
          onMouseEnter={() => (isMobile ? "" : setIsHovered(true))}
          onMouseLeave={() => (isMobile ? "" : setIsHovered(false))}
          onMouseMove={handleMouseMove}
          onClick={() => (isMobile ? setIsHovered(true) : "")}
        >
          i
        </div>
        {isHovered && (
          <BuildingListInfo
            infoText={infoText}
            mousePosition={mousePosition}
            isMobile={isMobile}
            setIsHovered={setIsHovered}
          />
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "66%",
        }}
      >
        <div
          ref={drop}
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isMobile && displaySwipeInfo && (
            <animated.h3
              style={{
                color: "aliceblue",
                margin: "7%",
                zIndex: "2",
                position: "fixed",
                ...fadeOut,
              }}
            >
              Swipe to change tabs
            </animated.h3>
          )}
          {droppedItem && !isMobile && (
            <DroppedBlock
              styles={droppedItem.styles}
              title={droppedItem.title}
              lua={droppedItem.lua}
              id={droppedItem.id}
              additionalInput={droppedItem.additionalInput}
              inputType={droppedItem.inputType}
              exception={droppedItem.exception}
              blockType={blockType}
              updateLua={updateLua}
              setExceptionLua={setExceptionLua}
              exceptionLua={exceptionLua}
            />
          )}
          {blockMemory && isMobile && (
            <>
              <DroppedBlock
                styles={blockMemory.styles}
                title={blockMemory.title}
                lua={blockMemory.lua}
                id={blockMemory.id}
                additionalInput={blockMemory.additionalInput}
                inputType={blockMemory.inputType}
                exception={blockMemory.exception}
                blockType={blockType}
                updateLua={updateLua}
                setExceptionLua={setExceptionLua}
                exceptionLua={exceptionLua}
              />
            </>
          )}
        </div>
      </div>
      <ClearListButton
        setDroppedItem={setDroppedItem}
        updateLua={updateLua}
        isMobile={isMobile}
        setBlockMemory={setBlockMemory}
        droppedItem={droppedItem}
        setExceptionLua={setExceptionLua}
        blockMemory={blockMemory}
      />
    </div>
  );
};

export default BuldingList;
