import SidePanel from "./SidePanel";
import BuildingSpace from "./BuildingSpace";
import JokerDetails from "./JokerDetails";
import LuaDownloader from "./LuaDownloader";
import React from "react";

const BuilderWrapper = () => {
  const [luaJokerEffect, setLuaJokerEffect] = React.useState(null);
  const [luaLocals, setLuaLocals] = React.useState(null);
  const [luaTableInsert, setLuaTableInsert] = React.useState(null);
  const [dataFromName, setDataFromName] = React.useState(null);
  const handleDataFromName = (data) => {
    setDataFromName(data);
  };
  return (
    <>
      <div className="builder-wrapper">
        <SidePanel />
        <BuildingSpace
          updateLuaJokerEffect={setLuaJokerEffect}
          jokerName={dataFromName}
        />
        <JokerDetails
          updateLuaLocals={setLuaLocals}
          updateLuaTableInsert={setLuaTableInsert}
          dataFromName={dataFromName}
          handleDataFromName={handleDataFromName}
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
