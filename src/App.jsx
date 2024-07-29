import SidePanel from "./sections/SidePanel/SidePanel";
import BuildingSpace from "./sections/BuildingSpace/BuildingSpace";
import JokerInfo from "./sections/JokerInfo/JokerInfo";
import React from "react";
import MobileApp from "./sections/Mobile/MobileApp";

const App = () => {
  const [luaJokerEffect, setLuaJokerEffect] = React.useState(null);
  const [luaLocals, setLuaLocals] = React.useState(null);
  const [luaTableInsert, setLuaTableInsert] = React.useState(null);
  const [dataFromName, setDataFromName] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const handleDataFromName = (data) => {
    setDataFromName(data);
  };

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      const screenSize = [window.innerHeight, window.innerWidth];
      if (screenSize[0] < 769 || screenSize[1] < 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsMobile]);

  return (
    <>
      {!isMobile && (
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
      )}
      {isMobile && (
        <MobileApp
          setLuaJokerEffect={setLuaJokerEffect}
          handleDataFromName={handleDataFromName}
          dataFromName={dataFromName}
          luaJokerEffect={luaJokerEffect}
          setLuaLocals={setLuaLocals}
          luaLocals={luaLocals}
          setLuaTableInsert={setLuaTableInsert}
          luaTableInsert={luaTableInsert}
          setImage={setImage}
          image={image}
          isMobile={isMobile}
        />
      )}
    </>
  );
};

export default App;
