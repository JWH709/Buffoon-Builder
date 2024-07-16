/* eslint-disable react/prop-types */
import React from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { IMAGES } from "../../config/assetImports";

const ImageCropper = ({ image, setImage, setIsCropped }) => {
  const [crop, setCrop] = React.useState({
    unit: "px",
    aspect: 71 / 95,
    width: 142,
    height: 190,
    x: 0,
    y: 0,
  });

  //Button:
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    setIsClicked(true);
    cropImage();
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  const cropImage = () => {
    const imageElement = document.createElement("img");
    imageElement.src = image;

    const canvas = document.createElement("canvas");
    const scaleX = imageElement.naturalWidth / imageElement.width;
    const scaleY = imageElement.naturalHeight / imageElement.height;

    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      imageElement,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const croppedImage = canvas.toDataURL("image/jpeg");
    setImage(croppedImage);
    setIsCropped(true);
  };

  return (
    <div
      style={{
        zIndex: "1",
        position: "fixed",
        height: "40%",
        width: "20%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${IMAGES.builderBackground})`,
        imageRendering: "pixelated",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <ReactCrop crop={crop} onChange={(c) => setCrop(c)} locked>
        <img src={image} />
      </ReactCrop>
      <div
        style={{
          height: "10%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className={
            isClicked ? "clear-list-button-clicked" : "clear-list-button"
          }
          onClick={handleClick}
          style={{
            userSelect: "none",
            fontFamily: "balatro",
            marginTop: "5%",
          }}
        >
          Crop
        </button>
      </div>
    </div>
  );
};
export default ImageCropper;
