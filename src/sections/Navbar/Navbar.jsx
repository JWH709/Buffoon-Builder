/* eslint-disable react/prop-types */
import "../../styles/main.css";
import { IMAGES } from "../../config/assetImports.js";
import CrtToggle from "./CrtToggle.jsx";
import React from "react";

const Navbar = ({ toggleButton, setToggleButton, setHelpPageVisible }) => {
  const memoizedSetHelpPage = React.useCallback(() => {
    setHelpPageVisible(true);
  }, [setHelpPageVisible]);

  return (
    <div className="navbar-div">
      <img
        src={IMAGES.logo}
        alt="A joker wearing a hardhat and forman's attire"
        style={{
          userSelect: "none",
          cursor: "pointer",
        }}
        onClick={memoizedSetHelpPage}
      />
      <h1
        className="title"
        style={{
          userSelect: "none",
        }}
      >
        Buffoon Builder
      </h1>
      <CrtToggle
        toggleButton={toggleButton}
        setToggleButton={setToggleButton}
      />
    </div>
  );
};

export default Navbar;
