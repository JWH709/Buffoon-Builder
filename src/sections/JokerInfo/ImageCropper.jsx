/* eslint-disable react/prop-types */
import React from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { IMAGES } from "../../config/assetImports";

const ImageCropper = ({ image, setImage, setIsCropped, isMobile }) => {
  const [crop, setCrop] = React.useState({
    unit: "px",
    width: 142,
    height: 190,
    x: 0,
    y: 0,
  });

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

    imageElement.onload = () => {
      const canvas = document.createElement("canvas");
      const scaleX = imageElement.naturalWidth / imageElement.width;
      const scaleY = imageElement.naturalHeight / imageElement.height;

      canvas.width = crop.width * scaleX;
      canvas.height = crop.height * scaleY;
      const ctx = canvas.getContext("2d");

      ctx.drawImage(
        imageElement,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        canvas.width,
        canvas.height
      );

      const croppedImage = canvas.toDataURL("image/jpeg");
      setImage(croppedImage);
      setIsCropped(true);

      localStorage.setItem("croppedImage", croppedImage);
      localStorage.setItem("isCropped", "true");
    };
  };

  return (
    <div
      style={{
        zIndex: "1",
        position: "fixed",
        top: isMobile ? "10%" : "5%",
        left: isMobile ? "5%" : "10%",
        height: isMobile ? "80%" : "90%",
        width: isMobile ? "90%" : "80%",
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
        <img
          src={image}
          style={{
            maxWidth: isMobile ? "100%" : "auto",
            maxHeight: isMobile ? "80vh" : "auto",
          }}
        />
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
            marginTop: "2%",
            zIndex: "2",
            position: "fixed",
            width: "50%",
            height: "8%",
            bottom: "60px",
          }}
        >
          Crop
        </button>
      </div>
    </div>
  );
};
export default ImageCropper;
