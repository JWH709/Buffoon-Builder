/* eslint-disable react/prop-types */
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
          <textarea
            style={{
              resize: "none",
            }}
            name="effect"
            id=""
            className={inputType}
            onChange={sendDataToPreview}
            maxLength={66}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default JokerDescription;
