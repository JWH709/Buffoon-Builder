/* eslint-disable react/prop-types */
import React from "react";

const ClearListButton = ({ setDroppedItem, updateLua }) => {
  //Set up state for button styles & create handler for click:
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    setDroppedItem(null);
    updateLua(null);
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 200); // Change back after 200ms
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
      >
        Clear
      </button>
    </div>
  );
};

export default ClearListButton;
