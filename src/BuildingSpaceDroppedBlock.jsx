/* eslint-disable react/prop-types */
import React from "react";

const DroppedBlock = ({
  styles,
  title,
  lua,
  id,
  additionalInput,
  blockType,
  updateLua,
}) => {
  const [inputValue, setInputValue] = React.useState(null);
  const handleInputUpdate = (event) => {
    setInputValue(lua + event.target.value);
  };

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
          ${inputValue},
          card = card
      }
  end`);
    }
  }, [blockType, lua, inputValue, updateLua]);

  return (
    <div className={styles} key={id}>
      <h2>{title}</h2>
      {additionalInput === "number" && (
        <input
          className="logic-block-input"
          type="number"
          maxLength="2"
          placeholder="0"
          onChange={handleInputUpdate}
        />
      )}
    </div>
  );
};

export default DroppedBlock;
