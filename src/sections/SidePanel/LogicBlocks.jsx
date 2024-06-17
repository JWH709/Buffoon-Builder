/* eslint-disable react/prop-types */
import { useDrag } from "react-dnd";
const LogicBlock = ({
  title,
  styles,
  blockType,
  id,
  lua,
  additionalInput,
  inputType,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: blockType,
    item: { title, styles, id, lua, additionalInput, inputType },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
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
  );
};

export default LogicBlock;
