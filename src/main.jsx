import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Navbar from "./Navbar.jsx";
import BuilderWrapper from "./BuilderWrapper.jsx";
import LuaDownloader from "./LuaDownloader.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <DndProvider backend={HTML5Backend}>
      <BuilderWrapper />
    </DndProvider>
    <LuaDownloader />
  </React.StrictMode>
);
