/* eslint-disable react/prop-types */
import JSZip from "jszip";
import center_hook from "../../assets/center_hook.jsx";
import { saveAs } from "file-saver";
import React from "react";
import { IMAGES } from "../../config/assetImports.js";
import { Tilt } from "@jdion/tilt-react";
import { useSpring, animated } from "@react-spring/web";

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
}) => {
  // Create shake effect to apply to voucher when download button is clicked:
  const [rotate, setRotate] = React.useState(false);

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

  // Create state to determine if everything required for download is present:
  const [downloadState, setDownloadState] = React.useState(false);
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

  // Set up state for button styles & create handler for click:
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    setRotate(true);
    console.log(rotate);
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 200); // Change back after 200ms
  };

  // Create zip file:
  const zip = new JSZip();
  const pack = zip.folder("pack");
  // If there's no name, deny the download. I need to add the denial in the if true statement:
  const getJokerID = (name) => {
    if (name == null) {
      //do nothing
    } else {
      const jokerLC = name.toLowerCase();
      const jokerID = jokerLC.replace(" ", "_");
      return jokerID;
    }
  };

  // This creates an ID for the joker filename and compiles the main mod file, adding the ID to the appropriate places:
  const jokerID = getJokerID(jokerName);
  const modFile = localVariables + jokerEffect + tableInsert;

  // Create correct paths for Balamod compatibility. Add the center hook api to the zip:
  zip.folder("mods").file(`${jokerID}.lua`, modFile);
  zip.folder("apis").file(`center_hook.lua`, center_hook);

  // Verify the image, then convert it (needs to be converted in order to be downloaded properly) & add it to the zip under the correct paths:
  if (image) {
    const base64Data = image.split(",")[1];
    const binaryString = atob(base64Data);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    pack.folder("1x").file(`${jokerID}.png`, bytes, { binary: true });
    pack.folder("2x").file(`${jokerID}.png`, bytes, { binary: true });
  }

  // Download the joker to the user's computer:
  const downloadJoker = () => {
    handleClick();
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, `${jokerID}.zip`);
    });
  };

  // Set up an alert to let the user know they're missing required info:
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
            }}
          />
        )}
        <button
          className={
            isClicked ? "downloader-button-clicked" : "downloader-button"
          }
          style={{
            marginTop: "3%",
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
