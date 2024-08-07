/* eslint-disable react/prop-types */
import React from "react";
import BuldingList from "../BuildingSpace/BuildingList";
import LuaDownloader from "../BuildingSpace/LuaDownloader";
import SidePanel from "../SidePanel/SidePanel";
import JokerInfo from "../JokerInfo/JokerInfo";
import ItemTypes from "../../config/ItemTypes";
import { animated, useSpring, config } from "@react-spring/web";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MobileApp = ({
  setLuaJokerEffect,
  handleDataFromName,
  dataFromName,
  luaJokerEffect,
  setLuaLocals,
  luaLocals,
  setLuaTableInsert,
  luaTableInsert,
  setImage,
  image,
  isMobile,
  contextMemory,
  setContextMemory,
  conditionsMemory,
  setConditionsMemory,
  resultsMemory,
  setResultsMemory,
  dataFromRarity,
  setDataFromRarity,
  dataFromDescription,
  setDataFromDescription,
  dataFromCost,
  setDataFromCost,
  isCropped,
  setIsCropped,
}) => {
  const jokerEffectDeclaration = `local function jokerEffect(card, context)
    if card.ability.name == "${dataFromName}" `;
  const jokerEffectEnd = `    
        end
    end`;
  let [contextLua, setContextLua] = React.useState(null);

  let [conditionsLua, setConditionsLua] = React.useState(null);

  let [resultsLua, setResultsLua] = React.useState(null);

  const [currentTab, setCurrentTab] = React.useState(true);

  const [currentList, setCurrentList] = React.useState(ItemTypes.CONTEXTBLOCK);

  React.useEffect(() => {
    if (contextLua == null || conditionsLua == null || resultsLua == null) {
      setLuaJokerEffect(null);
    } else {
      setLuaJokerEffect(
        jokerEffectDeclaration +
          contextLua +
          conditionsLua +
          resultsLua +
          jokerEffectEnd
      );
    }
  }, [
    contextLua,
    conditionsLua,
    resultsLua,
    setLuaJokerEffect,
    jokerEffectDeclaration,
    jokerEffectEnd,
  ]);

  const [activeAnimationTarget, setActiveAnimationTarget] = React.useState(1);

  const [step, setStep] = React.useState(0);

  const firstTabProps = useSpring({
    transform:
      activeAnimationTarget === 1
        ? step === 0
          ? "translateX(0%)"
          : "translateX(100%)"
        : "translateX(0%)",
    config: config.stiff,
    onRest: () => {
      if (activeAnimationTarget === 1 && step === 0) {
        setStep(1);
      } else if (activeAnimationTarget === 1 && step === 1) {
        setActiveAnimationTarget(2);
        setStep(0);
      }
    },
  });

  const secondTabProps = useSpring({
    transform:
      activeAnimationTarget === 2
        ? step === 0
          ? "translateX(0%)"
          : "translateX(100%)"
        : "translateX(0%)",
    config: config.stiff,
    onRest: () => {
      if (activeAnimationTarget === 2 && step === 0) {
        setStep(1);
      } else if (activeAnimationTarget === 2 && step === 1) {
        setActiveAnimationTarget(1);
        setStep(0);
      }
    },
  });

  return (
    <>
      <animated.div
        style={{
          width: "100%",
          height: "80%",
          position: "absolute",
          zIndex: activeAnimationTarget === 1 ? 2 : 1,
          ...firstTabProps,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            fontFamily: "balatro",
          }}
        >
          <div className="mobile-container">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "50%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50%",
                  height: "100%",
                  marginLeft: "1%",
                }}
              >
                <Swiper
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SwiperSlide>
                    <BuldingList
                      blockType={ItemTypes.CONTEXTBLOCK}
                      updateLua={setContextLua}
                      isMobile={isMobile}
                      setCurrentList={setCurrentList}
                      currentList={currentList}
                      blockMemory={contextMemory}
                      setBlockMemory={setContextMemory}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <BuldingList
                      blockType={ItemTypes.CONDITIONBLOCK}
                      updateLua={setConditionsLua}
                      isMobile={isMobile}
                      setCurrentList={setCurrentList}
                      currentList={currentList}
                      blockMemory={conditionsMemory}
                      setBlockMemory={setConditionsMemory}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <BuldingList
                      blockType={ItemTypes.RESULTSBLOCK}
                      updateLua={setResultsLua}
                      isMobile={isMobile}
                      setCurrentList={setCurrentList}
                      currentList={currentList}
                      blockMemory={resultsMemory}
                      setBlockMemory={setResultsMemory}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50%",
                  height: "100%",
                }}
              >
                <LuaDownloader
                  jokerName={dataFromName}
                  jokerEffect={luaJokerEffect}
                  localVariables={luaLocals}
                  tableInsert={luaTableInsert}
                  image={image}
                  currentTab={currentTab}
                  setCurrentTab={setCurrentTab}
                  isMobile={isMobile}
                  activeAnimationTarget={activeAnimationTarget}
                  setActiveAnimationTarget={setActiveAnimationTarget}
                  step={step}
                  setStep={setStep}
                />
              </div>
            </div>
            <SidePanel
              isMobile={isMobile}
              setResultsMemory={setResultsMemory}
              setConditionsMemory={setConditionsMemory}
              setContextMemory={setContextMemory}
            />
          </div>
        </div>
      </animated.div>
      <animated.div
        style={{
          width: "100%",
          height: "80%",
          position: "absolute",
          zIndex: activeAnimationTarget === 2 ? 2 : 1,
          ...secondTabProps,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <JokerInfo
            setCurrentTab={setCurrentTab}
            currentTab={currentTab}
            handleDataFromName={handleDataFromName}
            dataFromName={dataFromName}
            image={image}
            setImage={setImage}
            updateLuaLocals={setLuaLocals}
            updateLuaTableInsert={setLuaTableInsert}
            dataFromRarity={dataFromRarity}
            dataFromCost={dataFromCost}
            dataFromDescription={dataFromDescription}
            setDataFromRarity={setDataFromRarity}
            setDataFromCost={setDataFromCost}
            setDataFromDescription={setDataFromDescription}
            isCropped={isCropped}
            setIsCropped={setIsCropped}
            isMobile={isMobile}
            activeAnimationTarget={activeAnimationTarget}
            setActiveAnimationTarget={setActiveAnimationTarget}
            step={step}
            setStep={setStep}
          />
        </div>
      </animated.div>
    </>
  );
};
export default MobileApp;
