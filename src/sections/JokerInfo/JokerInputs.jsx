/* eslint-disable react/prop-types */

const JokerInput = ({ inputType, handler, length, type, defaultValue }) => {
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
          <input
            type={type}
            className={inputType}
            onChange={handleInputChange}
            maxLength={length}
            value={defaultValue}
          />
        </div>
      </div>
    </>
  );
};

export default JokerInput;
