/* eslint-disable react/prop-types */
import JSZip from "jszip";
import { saveAs } from "file-saver";
import React from "react";
import { IMAGES } from "../../config/assetImports.js";
import { Tilt } from "@jdion/tilt-react";
import { useSpring, animated } from "@react-spring/web";
import JokerPreview from "../JokerInfo/JokerPreview.jsx";

const LuaDownloader = ({
  jokerEffect,
  localVariables,
  tableInsert,
  jokerName,
  image,
  isMobile,
  currentTab,
  setCurrentTab,
  activeAnimationTarget,
  setActiveAnimationTarget,
  step,
  setStep,
  dataFromDescription,
  dataFromCost,
  dataFromRarity,
}) => {
  const [manifest, setManifest] = React.useState(null);
  const modFile = localVariables + jokerEffect + tableInsert;
  const [isClicked, setIsClicked] = React.useState(false);
  const [rotate, setRotate] = React.useState(false);
  const [voucherClicked, setVoucherClicked] = React.useState(false);
  const [downloadState, setDownloadState] = React.useState(false);

  const getJokerID = (name) => {
    if (name == null) {
      //do nothing
    } else {
      const jokerLC = name.toLowerCase();
      const jokerID = jokerLC.replace(" ", "_");
      return jokerID;
    }
  };

  React.useEffect(() => {
    if (downloadState) {
      const jokerID = getJokerID(jokerName);
      setManifest(`{
  "id": "${jokerID}",
  "name": "${jokerName}",
  "version": "1.0.0",
  "description": [
      "BuffoonBuilder Mod"
  ],
  "author": "BuffoonBuilder",
  "load_before": [],
  "load_after": []
}`);
    }
  }, [downloadState, jokerName]);

  const props = useSpring({
    to: async (next) => {
      if (rotate) {
        await next({ transform: "rotate(5deg)" });
        await next({ transform: "rotate(-5deg)" });
        await next({ transform: "rotate(5deg)" });
        await next({ transform: "rotate(-5deg)" });
        await next({ transform: "rotate(0deg)" });
        setRotate(false);
      }
    },
    config: { duration: 25 },
  });

  React.useEffect(() => {
    if (
      jokerEffect == null ||
      localVariables == null ||
      jokerName == null ||
      image == null
    ) {
      setDownloadState(false);
    } else {
      setDownloadState(true);
    }
  }, [jokerEffect, localVariables, jokerName, image]);

  const handleClick = () => {
    setRotate(true);
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 200); // Change back after 200ms
  };

  const zip = new JSZip();
  const modFolder = zip.folder(`${getJokerID(jokerName)}`);
  const assets = modFolder.folder("assets");

  modFolder.file(`main.lua`, modFile);
  modFolder.file(`manifest.json`, manifest);

  if (image) {
    const base64Data = image.split(",")[1];
    const binaryString = atob(base64Data);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    assets
      .folder("textures")
      .folder("1x")
      .file(`${"j_" + getJokerID(jokerName)}.png`, bytes, { binary: true });
    assets
      .folder("textures")
      .folder("2x")
      .file(`${"j_" + getJokerID(jokerName)}.png`, bytes, { binary: true });
  }

  const downloadJoker = () => {
    handleClick();
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, `${getJokerID(jokerName)}.zip`);
    });
  };

  const missingInfoAlert = () => {
    console.log("Missing info!"); //replace with alert
  };

  let voucherHeight = "100%";
  if (isMobile) {
    voucherHeight = "80%";
  }
  return (
    <div
      className="downloader-button-wrapper"
      style={{
        backgroundImage: `url(${IMAGES.downloaderBg})`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          height: "95%",
          margin: "1%",
        }}
      >
        {/* ToDo: onClick styles for button */}
        {isMobile && (
          <button
            className="mobile-switch-button"
            style={{
              height: "20%",
              width: "180%",
              marginBottom: "10%",
            }}
            onClick={() => {
              if (activeAnimationTarget === 1 && step === 0) {
                setStep(1);
              } else if (activeAnimationTarget === 2 && step === 0) {
                setStep(1);
              } else if (activeAnimationTarget === 2 && step === 1) {
                setActiveAnimationTarget(1);
                setStep(0);
              }
              if (currentTab) {
                setCurrentTab(true);
              } else {
                setCurrentTab(false);
              }
            }}
          >
            Switch to Details
          </button>
        )}
        {!isMobile && (
          <animated.div
            style={{
              ...props,
            }}
          >
            <Tilt
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: voucherHeight,
                margin: "0 auto",
              }}
            >
              <img
                src={IMAGES.jokerVoucher}
                alt="A custom joker voucher"
                style={{
                  height: "100%",
                  margin: "0 auto",
                  userSelect: "none",
                }}
              />
            </Tilt>
          </animated.div>
        )}
        {isMobile && (
          <img
            src={IMAGES.jokerVoucher}
            alt="A custom joker voucher"
            style={{
              height: "65%",
              margin: "0 auto",
              userSelect: "none",
            }}
            onClick={() => {
              setVoucherClicked(!voucherClicked);
            }}
          />
        )}
        {isMobile && voucherClicked && (
          <JokerPreview
            jokerName={jokerName}
            jokerEffect={dataFromDescription}
            jokerRarity={dataFromRarity}
            jokerCost={dataFromCost}
            isMobile={isMobile}
          />
        )}
        <button
          className={
            isClicked ? "downloader-button-clicked" : "downloader-button"
          }
          style={{
            marginTop: "3%",
            userSelect: "none",
          }}
          onClick={() => {
            downloadState ? downloadJoker() : missingInfoAlert();
          }}
        >
          Download Joker!
        </button>
      </div>
    </div>
  );
};

export default LuaDownloader;
