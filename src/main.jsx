import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import BuildingSpace from "./BuildingSpace.jsx";
import SidePanel from "./SidePanel.jsx";
import Navbar from "./Navbar.jsx";
import JokerDetails from "./JokerDetails.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <DndProvider backend={HTML5Backend}>
      <div className="main-flex-row">
        <SidePanel />
        <BuildingSpace />
        <JokerDetails />
      </div>
    </DndProvider>
  </React.StrictMode>
);
