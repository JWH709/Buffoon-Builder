import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import Navbar from "./sections/Navbar/Navbar.jsx";
import App from "./App.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ScreenShake from "./ScreenShake.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div
      className="crt-filter"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Navbar />
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
      <ScreenShake />
    </div>
  </React.StrictMode>
);
