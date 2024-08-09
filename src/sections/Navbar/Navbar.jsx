/* eslint-disable react/prop-types */
import "../../styles/main.css";
import { IMAGES } from "../../config/assetImports.js";
import CrtToggle from "./CrtToggle.jsx";

const Navbar = ({ toggleButton, setToggleButton }) => {
  return (
    <div className="navbar-div">
      <img
        src={IMAGES.logo}
        alt=""
        style={{
          userSelect: "none",
        }}
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
