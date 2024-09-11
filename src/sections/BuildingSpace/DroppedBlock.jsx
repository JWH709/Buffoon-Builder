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
  return (
    <div
      className="logic-block"
      key={id}
      style={{
        backgroundColor: styles[0],
        textShadow: styles[1],
        height: "auto",
        padding: "5px",
        whiteSpace: "normal",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "90%",
      }}
    >
      <h2
        style={{
          userSelect: "none",
          overflowWrap: "break-word",
          wordWrap: "break-word",
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
