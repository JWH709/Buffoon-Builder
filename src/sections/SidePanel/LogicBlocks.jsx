/* eslint-disable react/prop-types */
import { useDrag } from "react-dnd";

function Block(additionalInput, id, inputType, lua, styles, title) {
  (this.additionalInput = additionalInput),
    (this.id = id),
    (this.inputType = inputType),
    (this.lua = lua),
    (this.styles = styles),
    (this.title = title);
}

const LogicBlock = ({
  title,
  styles,
  blockType,
  id,
  lua,
  additionalInput,
  inputType,
  isMobile,
  setBlockMemory,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: blockType,
    item: { title, styles, id, lua, additionalInput, inputType },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const handleClick = () => {
    let newBlock = new Block(
      additionalInput,
      id,
      inputType,
      lua,
      styles,
      title
    );
    setBlockMemory(newBlock);
  };

  return (
    <>
      {isMobile && (
        <div
          className={"logic-block"}
          style={{
            fontSize: 25,
            fontWeight: "bold",
            cursor: "move",
            backgroundColor: styles[0],
            textShadow: styles[1],
          }}
          onClick={handleClick}
        >
          <h2 className="logic-block-title">{title}</h2>
        </div>
      )}
      {!isMobile && (
        <div
          className={"logic-block"}
          ref={drag}
          style={{
            opacity: isDragging ? 0.5 : 1,
            fontSize: 25,
            fontWeight: "bold",
            cursor: "move",
            backgroundColor: styles[0],
            textShadow: styles[1],
          }}
        >
          <h2 className="logic-block-title">{title}</h2>
        </div>
      )}
    </>
  );
};

export default LogicBlock;
