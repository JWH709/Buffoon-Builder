/* eslint-disable react/prop-types */
import { ItemTypes } from "./Constants";
import { useDrag } from "react-dnd";

const JokerArt = ({ getImgSrc, jokerItem }) => {
  const artSrc = getImgSrc(jokerItem);
  const artName = jokerItem.Joker;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ART,
    item: { artSrc, artName },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      className="item-image-title"
      key={jokerItem.Joker}
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold",
        cursor: "move",
      }}
    >
      <img src={getImgSrc(jokerItem)} />
      <h6>{jokerItem.Joker}</h6>
    </div>
  );
};

export default JokerArt;