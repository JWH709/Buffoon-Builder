import "../../styles/main.css";
import { IMAGES } from "../../config/assetImports.js";

const Navbar = () => {
  return (
    <div className="navbar-div">
      <img src={IMAGES.logo} alt="" />
      <h1 className="title">Buffoon Builder</h1>
    </div>
  );
};

export default Navbar;
