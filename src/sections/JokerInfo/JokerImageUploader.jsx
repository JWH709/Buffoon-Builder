/* eslint-disable react/prop-types */
import React from "react";
import DroppedArt from "./DroppedArt";
import ImageCropper from "./ImageCropper";
import { useSpring, animated } from "@react-spring/web";

const JokerImageUploader = ({
  dataFromName,
  dataFromCost,
  dataFromDescription,
  dataFromRarity,
  image,
  setImage,
  isCropped,
  setIsCropped,
}) => {
  React.useEffect(() => {
    const savedImage = localStorage.getItem("uploadedImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, [setImage]);

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
            "Image dimensions must be between 142px and 1000px in width, and between 190px and 1000px in height."
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

  const cropperAnimation = useSpring({
    from: { transform: "translateY(-100%)", opacity: 0 },
    to: {
      transform: image && !isCropped ? "translateY(0%)" : "translateY(-100%)",
      opacity: image && !isCropped ? 1 : 0,
    },
    config: { duration: 300 },
  });

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
        <animated.div
          key={image}
          style={{
            ...cropperAnimation,
            position: "fixed",
            top: "5%",
            left: "5%",
            height: "90%",
            width: "90%",
            zIndex: "1",
          }}
        >
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
        </animated.div>
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
