/* eslint-disable react/prop-types */
import JSZip from "jszip";
import center_hook from "./assets/center_hook.jsx";
import { saveAs } from "file-saver";

const LuaDownloader = ({
  jokerEffect,
  localVariables,
  tableInsert,
  jokerName,
  image,
}) => {
  const zip = new JSZip();
  const pack = zip.folder("pack");
  const getJokerID = (name) => {
    if (name == null) {
      //do nothing
    } else {
      const jokerLC = name.toLowerCase();
      const jokerID = jokerLC.replace(" ", "_");
      return jokerID;
    }
  };
  const jokerID = getJokerID(jokerName);
  const modFile = localVariables + jokerEffect + tableInsert;
  zip.folder("mods").file(`${jokerID}.lua`, modFile);
  zip.folder("apis").file(`center_hook.lua`, center_hook);
  pack.folder("1x").file(`${jokerID}.png`, image);
  pack.folder("2x").file(`${jokerID}.png`, image);

  const downloadJoker = () => {
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, `${jokerID}.zip`);
    });
  };

  return (
    <div className="downloader-button-wrapper">
      <button
        className="downloader-button"
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
