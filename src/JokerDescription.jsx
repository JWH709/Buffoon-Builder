/* eslint-disable react/prop-types */
import inputRight from "./assets/input_right.png";
import inputLeft from "./assets/input_left.png";
const JokerDescription = ({ inputTitle, inputType }) => {
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
              height: "100px",
              width: "18px",
            }}
          ></div>
          <textarea name="effect" id="" className={inputType}></textarea>
          <div
            className="input-right"
            style={{
              backgroundImage: `url(${inputRight})`,
              backgroundSize: "cover",
              height: "100px",
              width: "18px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default JokerDescription;
