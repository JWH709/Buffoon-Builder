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
    <Navbar />
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
    <ScreenShake />
  </React.StrictMode>
);
