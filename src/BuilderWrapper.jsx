import SidePanel from "./SidePanel";
import BuildingSpace from "./BuildingSpace";
import JokerDetails from "./JokerDetails";
import LuaDownloader from "./LuaDownloader";
import React from "react";

const BuilderWrapper = () => {
  const [luaJokerEffect, setLuaJokerEffect] = React.useState(null);
  const [luaLocals, setLuaLocals] = React.useState(null);
  const [luaTableInsert, setLuaTableInsert] = React.useState(null);
  return (
    <>
      <div className="main-flex-row">
        <SidePanel />
        <BuildingSpace updateLuaJokerEffect={setLuaJokerEffect} />
        <JokerDetails
          updateLuaLocals={setLuaLocals}
          updateLuaTableInsert={setLuaTableInsert}
        />
      </div>
      <LuaDownloader
        jokerEffect={luaJokerEffect}
        localVariables={luaLocals}
        tableInsert={luaTableInsert}
      />
    </>
  );
};

export default BuilderWrapper;
