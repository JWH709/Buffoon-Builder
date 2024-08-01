/* eslint-disable react/prop-types */
import SidePanel from "./sections/SidePanel/SidePanel";
import BuildingSpace from "./sections/BuildingSpace/BuildingSpace";
import JokerInfo from "./sections/JokerInfo/JokerInfo";
import MobileApp from "./sections/Mobile/MobileApp";

const App = ({
  isMobile,
  luaJokerEffect,
  setLuaJokerEffect,
  luaLocals,
  setLuaLocals,
  luaTableInsert,
  setLuaTableInsert,
  dataFromName,
  setDataFromName,
  image,
  setImage,
  contextMemory,
  setContextMemory,
  conditionsMemory,
  setConditionsMemory,
  resultsMemory,
  setResultsMemory,
}) => {
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
            handleDataFromName={setDataFromName}
            image={image}
            setImage={setImage}
          />
        </div>
      )}
      {isMobile && (
        <MobileApp
          setLuaJokerEffect={setLuaJokerEffect}
          handleDataFromName={setDataFromName}
          dataFromName={dataFromName}
          luaJokerEffect={luaJokerEffect}
          setLuaLocals={setLuaLocals}
          luaLocals={luaLocals}
          setLuaTableInsert={setLuaTableInsert}
          luaTableInsert={luaTableInsert}
          setImage={setImage}
          image={image}
          isMobile={isMobile}
          contextMemory={contextMemory}
          setContextMemory={setContextMemory}
          conditionsMemory={conditionsMemory}
          setConditionsMemory={setConditionsMemory}
          resultsMemory={resultsMemory}
          setResultsMemory={setResultsMemory}
        />
      )}
    </>
  );
};

export default App;
