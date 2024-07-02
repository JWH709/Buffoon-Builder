/* eslint-disable react/prop-types */
import JSZip from "jszip";
import center_hook from "../../assets/center_hook.jsx";
import { saveAs } from "file-saver";
import React from "react";
import { IMAGES } from "../../config/assetImports.js";
import { Tilt } from "@jdion/tilt-react";

const LuaDownloader = ({
  jokerEffect,
  localVariables,
  tableInsert,
  jokerName,
  image,
}) => {
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

  //Set up state for button styles & create handler for click:
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 200); // Change back after 200ms
  };

  //Create zip file:
  const zip = new JSZip();
  const pack = zip.folder("pack");

  //If there's no name, deny the download. I need to add the denial in the if true statement:
  const getJokerID = (name) => {
    if (name == null) {
      //do nothing
    } else {
      const jokerLC = name.toLowerCase();
      const jokerID = jokerLC.replace(" ", "_");
      return jokerID;
    }
  };

  //This creates an ID for the joker filename and complies the main mod file, adding the ID the to appropriate places:
  const jokerID = getJokerID(jokerName);
  const modFile = localVariables + jokerEffect + tableInsert;

  //Create correct paths for Balamod compatability. Add the center hook api to the zip:
  zip.folder("mods").file(`${jokerID}.lua`, modFile);
  zip.folder("apis").file(`center_hook.lua`, center_hook);

  //Verify the image, then convert it (needs to be converted in order to be downloaded properly) & add it to the zip under the correct paths:
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

  //Download the joker to the user's computer:
  const downloadJoker = () => {
    handleClick();
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, `${jokerID}.zip`);
    });
  };

  //Set up an alert to let the user know they're missing required info:
  const missingInfoAlert = () => {
    console.log("Missing info!"); //replace with alert
  };
  return (
    <div
      className="downloader-button-wrapper"
      style={{
        backgroundImage: `url(${IMAGES.downloaderBg})`,
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
        <Tilt
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "65%",
            margin: "8%",
          }}
        >
          <img
            src={IMAGES.jokerVoucher}
            alt="A custom joker voucher"
            style={{
              height: "100%",
            }}
          />
        </Tilt>
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
