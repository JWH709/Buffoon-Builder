/* eslint-disable react/prop-types */
import JSZip from "jszip";
import center_hook from "../../assets/center_hook.jsx";
import { saveAs } from "file-saver";
import React from "react";

const LuaDownloader = ({
  jokerEffect,
  localVariables,
  tableInsert,
  jokerName,
  image,
}) => {
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

  return (
    <div className="downloader-button-wrapper">
      <button
        className={
          isClicked ? "downloader-button-clicked" : "downloader-button"
        }
        onClick={() => {
          downloadJoker();
        }}
      >
        Download Joker!
      </button>
    </div>
  );
};

export default LuaDownloader;
