/* eslint-disable react/prop-types */
import React from "react";
import DroppedArt from "./DroppedArt";
import ImageCropper from "./ImageCropper";

const JokerImageUploader = ({
  dataFromName,
  dataFromCost,
  dataFromDescription,
  dataFromRarity,
  image,
  setImage,
}) => {
  React.useEffect(() => {
    const savedImage = localStorage.getItem("uploadedImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, [setImage]);

  const [isCropped, setIsCropped] = React.useState(false);

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
      const image = new Image();

      image.onload = () => {
        const width = image.width;
        const height = image.height;
        console.log(width);

        if (width < 142 || width > 1000 || height < 190 || height > 1000) {
          alert(
            "Image dimensions must be between 142px and 700px in width, and between 190px and 700px in height."
          );
          return;
        }

        setImage(reader.result);
        localStorage.setItem("uploadedImage", reader.result);
      };

      image.src = reader.result;
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
    setIsCropped(false);
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
            {"Drag and drop an image here or click to upload"} <br />
          </label>
        </>
      )}
      {image && !isCropped && (
        <div style={{ position: "relative", display: "inline-block" }}>
          <ImageCropper
            image={image}
            setIsCropped={setIsCropped}
            setImage={setImage}
          />
          <button className="button-delete-image" onClick={handleDeleteImage}>
            &times;
          </button>
        </div>
      )}
      {image && isCropped && (
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
