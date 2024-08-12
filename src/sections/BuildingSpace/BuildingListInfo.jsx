/* eslint-disable react/prop-types */
import { IMAGES } from "../../config/assetImports";

const BuildingListInfo = ({ infoText, mousePosition, isMobile }) => {
  return (
    <div
      style={{
        zIndex: "9999",
        position: "fixed",
        backgroundImage: `url(${IMAGES.previewBackground})`,
        top: isMobile ? "0" : mousePosition.y + 10,
        left: isMobile ? "0" : mousePosition.x + 10,
        height: isMobile ? "100%" : "272px",
        width: isMobile ? "100%" : "202px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "transparent",
        imageRendering: "pixelated",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <img
        src={IMAGES.logo}
        alt="Buffoon Builder forman"
        style={{
          width: "62.4px",
          height: "68.8px",
        }}
      />
      <div
        style={{
          margin: "5%",
          height: "60%",
          width: "90%",
          backgroundColor: "aliceblue",
          borderRadius: "15px",
          border: "2px solid aliceblue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          clipPath:
            "polygon(0px calc(100% - 15px), 3px calc(100% - 15px), 3px calc(100% - 9px), 6px calc(100% - 9px), 6px calc(100% - 6px), 9px calc(100% - 6px), 9px calc(100% - 3px), 15px calc(100% - 3px), 15px 100%, calc(100% - 15px) 100%, calc(100% - 15px) calc(100% - 3px), calc(100% - 9px) calc(100% - 3px), calc(100% - 9px) calc(100% - 6px), calc(100% - 6px) calc(100% - 6px), calc(100% - 6px) calc(100% - 9px), calc(100% - 3px) calc(100% - 9px), calc(100% - 3px) calc(100% - 15px), 100% calc(100% - 15px), 100% 15px, calc(100% - 3px) 15px, calc(100% - 3px) 9px, calc(100% - 6px) 9px, calc(100% - 6px) 6px, calc(100% - 9px) 6px, calc(100% - 9px) 3px, calc(100% - 15px) 3px, calc(100% - 15px) 0px, 15px 0px, 15px 3px, 9px 3px, 9px 6px, 6px 6px, 6px 9px, 3px 9px, 3px 15px, 0px 15px)",
        }}
      >
        <p
          style={{
            color: "black",
          }}
        >
          {infoText}
        </p>
      </div>
    </div>
  );
};

export default BuildingListInfo;
