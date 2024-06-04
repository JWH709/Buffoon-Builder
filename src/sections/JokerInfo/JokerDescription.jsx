/* eslint-disable react/prop-types */
import { IMAGES } from "../../config/assetImports.js";
const JokerDescription = ({ inputTitle, inputType, handler }) => {
  const sendDataToPreview = () => {
    const data = event.target.value;
    handler(data);
  };

  return (
    <>
      <div className="joker-input-container">
        <h4>{inputTitle}</h4>
        <div className="input-wrapper">
          <div
            className="input-left"
            style={{
              backgroundImage: `url(${IMAGES.inputLeft})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              imageRendering: "pixelated",
              width: "18px",
              height: "100px",
            }}
          ></div>
          <textarea
            name="effect"
            id=""
            className={inputType}
            onChange={sendDataToPreview}
            maxLength={66}
          ></textarea>
          <div
            className="input-right"
            style={{
              backgroundImage: `url(${IMAGES.inputRight})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              imageRendering: "pixelated",
              width: "18px",
              height: "100px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default JokerDescription;
