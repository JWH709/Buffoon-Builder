/* eslint-disable react/prop-types */
const JokerDescription = ({
  inputTitle,
  inputType,
  setDataFromDescription,
}) => {
  const sendDataToPreview = (event) => {
    let data = event.target.value;
    let escapedData = data.replace(/[\\'"]/g, "");
    setDataFromDescription(escapedData);
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
