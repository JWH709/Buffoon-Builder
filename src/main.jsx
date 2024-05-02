import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import BuildingSpace from "./BuildingSpace.jsx";
import SidePanel from "./SidePanel.jsx";
import Navbar from "./Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <div className="main-flex-row">
      <BuildingSpace />
      <SidePanel />
    </div>
  </React.StrictMode>
);
