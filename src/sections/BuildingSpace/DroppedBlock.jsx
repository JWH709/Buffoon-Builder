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
  blockType,
  updateLua,
}) => {
  const [inputUpdate, setInputUpdate] = React.useState(null);

  React.useEffect(() => {
    switch (blockType) {
      case "context-block":
        updateLua("and " + lua);
        break;
      case "condition-block":
        updateLua(" then if " + lua);
        break;
      case "results-block":
        updateLua(` then return {
          ${lua + inputUpdate},
          card = card
      }
  end`);
    }
  }, [blockType, lua, inputUpdate, updateLua]);

  return (
    <div
      className="logic-block"
      key={id}
      style={{
        backgroundColor: styles[0],
        textShadow: styles[1],
      }}
    >
      <h2>{title}</h2>
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
