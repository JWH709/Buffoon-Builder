import { useDrag } from "react-dnd";
import { ItemTypes } from "./Constants";

export const useBlockDrag = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BLOCK,
    item: { type: ItemTypes.BLOCK },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return { isDragging, drag };
};
