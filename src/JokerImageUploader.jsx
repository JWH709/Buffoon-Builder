/* eslint-disable react/prop-types */
import React from "react";
import DroppedArt from "./DroppedArt";

const JokerImageUploader = ({
  dataFromName,
  dataFromCost,
  dataFromDescription,
  dataFromRarity,
  updateLuaLocals,
  updateLuaTableInsert,
}) => {
  const [image, setImage] = React.useState(null);

  React.useEffect(() => {
    const savedImage = localStorage.getItem("uploadedImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  React.useEffect(() => {
    if (dataFromName && dataFromDescription && dataFromCost) {
      const luaJokerNameLower = dataFromName.toLowerCase();
      const luaJokerID = luaJokerNameLower.replaceAll(" ", "_");
      updateLuaLocals(`
        --All mods made using the center_hook api (https://github.com/nicholassam6425/balatro-mods)

        local mod_id = "${luaJokerID}"
        local mod_name = "${dataFromName}"
        local mod_version = "1.0"
        local mod_author = "BuffoonBuilder"`);

      const luaJokerTableID = "j_" + luaJokerID;
      updateLuaTableInsert(`
        table.insert(mods, {
          mod_id = mod_id,
          name = mod_name,
          version = mod_version,
          author = mod_author,
          enabled = true,
          on_enable = function()
              centerHook.addJoker(self, "${luaJokerTableID}", -- id
              '${dataFromName}', -- name
              ${dataFromDescription}, -- effect function
              nil, -- order
              true, -- unlocked
              true, -- discovered
              ${dataFromCost}, -- cost
              {
                  x = 0,
                  y = 0
              }, -- sprite position
              nil, -- internal effect description
              {
                  extra = {
                      x_mult = 2
                  }
              }, -- config
              {"${dataFromDescription}"}, -- description text
              ${dataFromRarity}, -- rarity
              true, -- blueprint compatibility
              true, -- eternal compatibility
              nil, -- exclusion pool flag
              nil, -- inclusion pool flag
              nil, -- unlock condition
              true, -- collection alert
              "pack", -- sprite path
              ("${luaJokerID}"), -- sprite name
              {
                  px = 71,
                  py = 95
              } -- sprite size
              )
          end,
          on_disable = function()
              centerHook.removeJoker(self, "${luaJokerTableID}")
          end
      })`);
    }
  }, [
    dataFromName,
    dataFromDescription,
    dataFromCost,
    dataFromRarity,
    updateLuaLocals,
    updateLuaTableInsert,
  ]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    readImageFile(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    readImageFile(file);
  };

  const readImageFile = (file) => {
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
      localStorage.setItem("uploadedImage", reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDeleteImage = () => {
    setImage(null);
    localStorage.removeItem("uploadedImage");
  };

  return (
    <div>
      {!image && (
        <>
          <input
            type="file"
            onChange={handleImageChange}
            style={{ display: "none" }}
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            style={{
              padding: "20px",
              display: "block",
              textAlign: "center",
              cursor: "pointer",
              fontFamily: "balatro",
              color: "aliceblue",
            }}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            Drag and drop an image here or click to upload
          </label>
        </>
      )}
      {image && (
        <div style={{ position: "relative", display: "inline-block" }}>
          <DroppedArt
            artSrc={image}
            dataFromName={dataFromName}
            dataFromCost={dataFromCost}
            dataFromDescription={dataFromDescription}
            dataFromRarity={dataFromRarity}
          />
          <button className="button-delete-image" onClick={handleDeleteImage}>
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default JokerImageUploader;
