import "../../styles/main.css";
import { IMAGES } from "../../config/assetImports.js";
import CrtToggle from "./CrtToggle.jsx";

const Navbar = () => {
  return (
    <div className="navbar-div">
      <img src={IMAGES.logo} alt="" />
      <h1 className="title">Buffoon Builder</h1>
      <CrtToggle />
    </div>
  );
};

export default Navbar;
