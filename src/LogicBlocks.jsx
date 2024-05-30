/* eslint-disable react/prop-types */
import { useDrag } from "react-dnd";
const LogicBlock = ({ title, styles, blockType, id, lua }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: blockType,
    item: { title, styles, id, lua },
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
