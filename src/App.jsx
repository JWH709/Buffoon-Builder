import SidePanel from "./sections/SidePanel/SidePanel";
import BuildingSpace from "./sections/BuildingSpace/BuildingSpace";
import JokerInfo from "./sections/JokerInfo/JokerInfo";
import React from "react";

const App = () => {
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
        <JokerInfo
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

export default App;
