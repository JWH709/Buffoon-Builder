/* eslint-disable react/prop-types */
import React from "react";
import { IMAGES } from "../../config/assetImports.js";
import { useSpring, animated } from "@react-spring/web";

const JokerRarity = ({ setDataFromRarity, dataFromRarity, isMobile }) => {
  const [shakeState, setShakeState] = React.useState(false);

  const shakeStyles = useSpring({
    from: { x: 0 },
    to: async (next) => {
      if (shakeState) {
        await next({ x: 2.5 });
        await next({ x: -2.5 });
        await next({ x: 2.5 });
        await next({ x: -2.5 });
        await next({ x: 0 });
        setShakeState(false);
      }
    },
    config: { duration: 25 },
  });

  const [minusIsClicked, setMinusIsClicked] = React.useState(false);

  const [plusIsClicked, setPlusIsClicked] = React.useState(false);

  const handleClickStyle = (type) => {
    if (type === "minus") {
      setMinusIsClicked(true);
      setTimeout(() => {
        setMinusIsClicked(false);
      }, 200);
    } else if (type === "plus") {
      setPlusIsClicked(true);
      setTimeout(() => {
        setPlusIsClicked(false);
      }, 200);
    }
  };

  const handleRarityClick = (type) => {
    handleClickStyle(type);
    setShakeState(true);
    if (type == "plus") {
      if (dataFromRarity == 4) {
        setDataFromRarity(1);
      } else {
        setDataFromRarity(dataFromRarity + 1);
      }
    } else {
      if (dataFromRarity == 1) {
        setDataFromRarity(4);
      } else {
        setDataFromRarity(dataFromRarity - 1);
      }
    }
  };

  const getRarityImg = React.useMemo(() => {
    switch (dataFromRarity) {
      case 1:
        return IMAGES.common;
      case 2:
        return IMAGES.uncommon;
      case 3:
        return IMAGES.rare;
      case 4:
        return IMAGES.legendary;
      default:
        return IMAGES.common;
    }
  }, [dataFromRarity]);

  const getRarityText = React.useMemo(() => {
    switch (dataFromRarity) {
      case 1:
        return "Common";
      case 2:
        return "Uncommon";
      case 3:
        return "Rare";
      case 4:
        return "Legendary";
      default:
        return "Common";
    }
  }, [dataFromRarity]);

  return (
    <div className="rarity-button-container">
      <button
        className={minusIsClicked ? "rarity-buttons-clicked" : "rarity-buttons"}
        onClick={() => handleRarityClick("minus")}
        style={{ userSelect: "none" }}
      >
        {"<"}
      </button>
      <animated.div
        className="rarity-icon"
        style={{
          transform: shakeStyles.x.to((x) => `translate3d(${x}px, 0, 0)`),
          backgroundImage: `url(${getRarityImg})`,
          backgroundSize: "80% 80%",
          backgroundRepeat: "no-repeat",
          imageRendering: "pixelated",
          overflow: "hidden",
          backgroundPosition: "center",
          width: "230px",
          height: "60px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isMobile && <h4 style={{ userSelect: "none" }}>{getRarityText}</h4>}
        {!isMobile && <h3 style={{ userSelect: "none" }}>{getRarityText}</h3>}
      </animated.div>
      <button
        className={plusIsClicked ? "rarity-buttons-clicked" : "rarity-buttons"}
        onClick={() => handleRarityClick("plus")}
        style={{ userSelect: "none" }}
      >
        {">"}
      </button>
    </div>
  );
};

export default JokerRarity;
