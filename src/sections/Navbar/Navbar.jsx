/* eslint-disable react/prop-types */
import "../../styles/main.css";
import { IMAGES } from "../../config/assetImports.js";
import CrtToggle from "./CrtToggle.jsx";
import React from "react";

const Navbar = ({
  toggleButton,
  setToggleButton,
  setHelpPageVisible,
  isMobile,
}) => {
  const [gitHubHovered, setGitHubHovered] = React.useState(false);

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
      {!isMobile && (
        <a
          href="https://github.com/JWH709/Buffoon-Builder"
          target="_blank"
          title="Buffoon Builder repo"
        >
          <img
            src={gitHubHovered ? IMAGES.gitHubWhite : IMAGES.gitHubBlack}
            alt=""
            style={{
              height: "40px",
              right: "1.2%",
              position: "fixed",
              cursor: "pointer",
              border: "1px solid black",
              borderRadius: "100%",
            }}
            onMouseEnter={() => {
              setGitHubHovered(true);
            }}
            onMouseOut={() => {
              setGitHubHovered(false);
            }}
          />
        </a>
      )}
    </div>
  );
};

export default Navbar;
