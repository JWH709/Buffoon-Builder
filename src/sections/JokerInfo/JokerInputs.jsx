/* eslint-disable react/prop-types */
import { IMAGES } from "../../config/assetImports.js";

const JokerInput = ({ inputType, handler, length, type }) => {
  const handleInputChange = (event) => {
    if (inputType == "input-joker-cost") {
      if (event.target.value <= 0) {
        event.target.value = 0;
      }
    }
    sendDataToPreview();
  };

  const sendDataToPreview = () => {
    const data = event.target.value;
    handler(data);
  };

  return (
    <>
      <div className="joker-input-container">
        <div className="input-wrapper">
          <div
            className="input-left"
            style={{
              backgroundImage: `url(${IMAGES.inputLeft})`,
              backgroundSize: "cover",
              imageRendering: "pixelated",
              backgroundPosition: "center",
              height: "63px",
              width: "18px",
            }}
          ></div>
          <input
            type={type}
            className={inputType}
            onChange={handleInputChange}
            maxLength={length}
          />
          <div
            className="input-right"
            style={{
              backgroundImage: `url(${IMAGES.inputRight})`,
              backgroundSize: "cover",
              imageRendering: "pixelated",
              backgroundPosition: "center",
              height: "63px",
              width: "18px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default JokerInput;
