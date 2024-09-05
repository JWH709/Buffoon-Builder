/* eslint-disable react/prop-types */
import React from "react";
import LogicBlockInput from "./LogicBlockInput";

const DroppedBlock = ({
  styles,
  title,
  lua,
  id,
  additionalInput,
  inputType,
  exception,
  blockType,
  updateLua,
  setExceptionLua,
  exceptionLua,
}) => {
  const [inputUpdate, setInputUpdate] = React.useState(null);

  React.useEffect(() => {
    if (exception == "none") {
      setExceptionLua("none");
    } else {
      setExceptionLua(exception);
    }
    switch (blockType) {
      case "context-block":
        if (exceptionLua == "retrigger") {
          updateLua(`if context.cardarea == G.play then `);
        } else {
          updateLua("and " + lua);
        }
        break;
      case "condition-block":
        if (exceptionLua == "retrigger") {
          updateLua(lua);
        } else {
          updateLua(" then if " + lua);
        }
        break;
      case "results-block":
        updateLua(` then return {
          ${lua + inputUpdate},
          card = card
      }
  end`);
    }
  }, [
    blockType,
    lua,
    inputUpdate,
    updateLua,
    exception,
    setExceptionLua,
    exceptionLua,
    id,
  ]);
  let blockHeight = "50px";
  if (title.length > 15) {
    blockHeight = "100px";
  }
  return (
    <div
      className="logic-block"
      key={id}
      style={{
        backgroundColor: styles[0],
        textShadow: styles[1],
        height: blockHeight,
        padding: "5px",
      }}
    >
      <h2
        style={{
          userSelect: "none",
        }}
      >
        {title}
      </h2>
      {additionalInput === "number" && (
        <LogicBlockInput
          setInputUpdate={setInputUpdate}
          inputType={inputType}
        />
      )}
    </div>
  );
};

export default DroppedBlock;
