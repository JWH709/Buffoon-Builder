/* eslint-disable react/prop-types */
import { ItemTypes } from "./Constants";
import { useDrag } from "react-dnd";
const LogicBlock = ({ title, styles }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BLOCK,
    item: { title, styles },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      className={styles}
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold",
        cursor: "move",
      }}
    >
      <h2 className="logic-block-title">{title}</h2>
    </div>
  );
};

export default LogicBlock;
