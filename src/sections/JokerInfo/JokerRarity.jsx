/* eslint-disable react/prop-types */
import React from "react";
import { IMAGES } from "../../config/assetImports.js";
import { useSpring, animated } from "@react-spring/web";

const JokerRarity = ({ handler }) => {
  // Set up shake effect for icons:
  const [shakeState, setShakeState] = React.useState({
    id: null,
    shake: false,
  });

  const { x } = useSpring({
    from: { x: 0 },
    to: shakeState.shake ? { x: 1 } : { x: 0 },
    reset: shakeState.shake,
    onRest: () => {
      if (shakeState.shake) {
        setShakeState((shakeState) => ({
          ...shakeState,
          shake: false,
        }));
      }
    },
  });

  const xInterpolate = x.to(
    [0.0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
    [0, -10, 10, -10, 10, -10, 10, 0]
  );

  // Set States for rarity and button styles:
  const [rarity, setRarity] = React.useState(1);
  const [minusIsClicked, setMinusIsClicked] = React.useState(false);
  const [plusIsClicked, setPlusIsClicked] = React.useState(false);

  // Create handler for changing button styles on click:
  const handleMinusClickStyle = () => {
    setMinusIsClicked(true);
    setTimeout(() => {
      setMinusIsClicked(false);
    }, 200);
  };
  const handlePlusClickStyle = () => {
    setPlusIsClicked(true);
    setTimeout(() => {
      setPlusIsClicked(false);
    }, 200);
  };

  // Create functions to handle each button click, plus or minus:
  const handleMinusClick = () => {
    handleMinusClickStyle();
    setShakeState({ id: Date.now(), shake: true }); // Trigger shake
    if (rarity === 1) {
      setRarity(4);
      handler(4);
    } else {
      setRarity(rarity - 1);
      handler(rarity - 1);
    }
  };
  const handlePlusClick = () => {
    handlePlusClickStyle();
    setShakeState({ id: Date.now(), shake: true }); // Trigger shake
    if (rarity === 4) {
      setRarity(1);
      handler(1);
    } else {
      setRarity(rarity + 1);
      handler(rarity + 1);
    }
  };

  // Create function for getting a rarity based on a corresponding number
  const getRarityImg = () => {
    switch (rarity) {
      case 1:
        return IMAGES.common;
      case 2:
        return IMAGES.uncommon;
      case 3:
        return IMAGES.rare;
      case 4:
        return IMAGES.legendary;
    }
  };
  const getRarityText = () => {
    switch (rarity) {
      case 1:
        return "Common";
      case 2:
        return "Uncommon";
      case 3:
        return "Rare";
      case 4:
        return "Legendary";
    }
  };

  // Return component:
  return (
    <>
      <div className="rarity-button-container">
        <button
          className={
            minusIsClicked ? "rarity-buttons-clicked" : "rarity-buttons"
          }
          onClick={handleMinusClick}
        >
          {"<"}
        </button>
        <animated.div
          className="rarity-icon"
          style={{
            transform: xInterpolate.to((x) => `translate3d(${x}px, 0, 0)`),
            backgroundImage: `url(${getRarityImg()})`,
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
          <h3>{getRarityText()}</h3>
        </animated.div>
        <button
          className={
            plusIsClicked ? "rarity-buttons-clicked" : "rarity-buttons"
          }
          onClick={handlePlusClick}
        >
          {">"}
        </button>
      </div>
    </>
  );
};

export default JokerRarity;
