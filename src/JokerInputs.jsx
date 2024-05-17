/* eslint-disable react/prop-types */
import inputRight from "./assets/input_right.png";
import inputLeft from "./assets/input_left.png";
const JokerInput = ({ inputTitle, inputType, handler, length, type }) => {
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
              backgroundImage: `url(${inputLeft})`,
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
            onChange={sendDataToPreview}
            maxLength={length}
          />
          <div
            className="input-right"
            style={{
              backgroundImage: `url(${inputRight})`,
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
