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
            updateLuaLocals={updateLuaLocals}
            updateLuaTableInsert={updateLuaTableInsert}
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
