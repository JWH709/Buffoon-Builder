import SidePanel from "./SidePanel";
import BuildingSpace from "./BuildingSpace";
import JokerDetails from "./JokerDetails";
import React from "react";

const BuilderWrapper = () => {
  const [luaJokerEffect, setLuaJokerEffect] = React.useState(null);
  const [luaLocals, setLuaLocals] = React.useState(null);
  const [luaTableInsert, setLuaTableInsert] = React.useState(null);
  const [dataFromName, setDataFromName] = React.useState(null);
  const [image, setImage] = React.useState(null);
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
          jokerEffect={luaJokerEffect}
          localVariables={luaLocals}
          tableInsert={luaTableInsert}
          image={image}
        />
        <JokerDetails
          updateLuaLocals={setLuaLocals}
          updateLuaTableInsert={setLuaTableInsert}
          dataFromName={dataFromName}
          handleDataFromName={handleDataFromName}
          image={image}
          setImage={setImage}
        />
      </div>
    </>
  );
};

export default BuilderWrapper;
