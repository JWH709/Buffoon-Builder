/* eslint-disable react/prop-types */
import React from "react";

const LogicBlockInput = ({ setInputUpdate, inputType }) => {
  const [inputValue, setInputValue] = React.useState(0);

  const setModiferValue = () => {
    if (inputType === "mult") {
      return 1;
    } else {
      return 10;
    }
  };

  const modiferValue = setModiferValue();

  const handleOnClick = (context) => {
    if (context === "-") {
      let n = inputValue - modiferValue;
      if (n <= 0) {
        setInputValue(0);
      } else {
        setInputValue(n);
      }
    } else {
      let n = inputValue + modiferValue;
      setInputValue(n);
    }
    setInputUpdate(inputValue);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "8x",
        marginRight: "8px",
      }}
    >
      <h2
        style={{
          marginLeft: "8x",
          marginRight: "8px",
          userSelect: "none",
        }}
      >
        {inputValue}
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          className="logic-block-input-button"
          onClick={() => handleOnClick("+")}
          style={{
            userSelect: "none",
          }}
        >
          +
        </button>
        <button
          className="logic-block-input-button"
          onClick={() => handleOnClick("-")}
          style={{
            userSelect: "none",
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default LogicBlockInput;
