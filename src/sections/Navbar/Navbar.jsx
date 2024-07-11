import "../../styles/main.css";
import { IMAGES } from "../../config/assetImports.js";
import CrtToggle from "./CrtToggle.jsx";

const Navbar = () => {
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
      <CrtToggle />
    </div>
  );
};

export default Navbar;
