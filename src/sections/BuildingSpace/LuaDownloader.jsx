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
}) => {
  // Create shake effect to apply to voucher when download button is clicked:
  const [shakeState, setShakeState] = React.useState({
    id: null,
    shake: false,
  });

  const { x, y } = useSpring({
    from: { x: 0, y: 0 },
    to: shakeState.shake ? { x: 1, y: 1 } : { x: 0, y: 0 },
    reset: shakeState.shake,
    onRest: () => {
      if (shakeState.shake) {
        setShakeState((shakeState) => ({
          ...shakeState,
          shake: false,
        }));
      }
    },
  });

  const xInterpolate = x.to(
    [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
    [-10, 10, -10, 10, -10, 10, -10, 10]
  );

  const yInterpolate = y.to(
    [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
    [-5, 5, -5, 5, -5, 5, -5, 5]
  );

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
    setShakeState({ id: Date.now(), shake: true });
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
        <animated.div
          style={{
            transform: xInterpolate.to(
              (x) => `translate3d(${x}px, ${yInterpolate.get()}px, 0)`
            ),
            position: "relative", // the styling on this is voodoo, however, animated.divs really don't like being centered.
            top: "0%",
            left: "7%",
            margin: "8%",
          }}
        >
          <Tilt
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
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
        <button
          className={
            isClicked ? "downloader-button-clicked" : "downloader-button"
          }
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
