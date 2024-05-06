import "./main.css";
import logo from "./assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar-div">
      <img src={logo} alt="" />
      <h1 className="title">Buffoon Builder</h1>
    </div>
  );
};

export default Navbar;
