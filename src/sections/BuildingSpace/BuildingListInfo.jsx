/* eslint-disable react/prop-types */
import { IMAGES } from "../../config/assetImports";

const BuildingListInfo = ({ infoText, mousePosition }) => {
  return (
    <div
      style={{
        zIndex: "1",
        position: "fixed",
        top: mousePosition.y + 10,
        left: mousePosition.x + 10,
        backgroundImage: `url(${IMAGES.previewBackground})`,
        height: "272px",
        width: "202px",
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
      <img src={IMAGES.logo} alt="Jimmy" />
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
