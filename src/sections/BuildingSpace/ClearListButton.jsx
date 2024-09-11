/* eslint-disable react/prop-types */
import React from "react";

const ClearListButton = ({
  setDroppedItem,
  updateLua,
  isMobile,
  setBlockMemory,
  droppedItem,
  setExceptionLua,
  blockMemory,
}) => {
  //Set up state for button styles & create handler for click:
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    if (isMobile) {
      setBlockMemory(null);
      setDroppedItem(null);
      updateLua(null);
      if (blockMemory?.exception && blockMemory.exception != "none") {
        setExceptionLua("none");
      }
    } else {
      setDroppedItem(null);
      updateLua(null);
      if (droppedItem?.exception && droppedItem.exception != "none") {
        setExceptionLua("none");
      }
    }
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  return (
    <div
      style={{
        height: "10%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        className={
          isClicked ? "clear-list-button-clicked" : "clear-list-button"
        }
        onClick={() => {
          handleClick();
        }}
        style={{
          userSelect: "none",
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default ClearListButton;
