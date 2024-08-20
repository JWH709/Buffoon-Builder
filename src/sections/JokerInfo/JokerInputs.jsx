/* eslint-disable react/prop-types */

const JokerInput = ({
  inputType,
  handler,
  length,
  type,
  defaultValue,
  isMobile,
}) => {
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
          {inputType == "input-joker-name" && (
            <input
              type={type}
              className={inputType}
              onChange={handleInputChange}
              maxLength={length}
              value={defaultValue}
            />
          )}
          {inputType == "input-joker-cost" && (
            <select
              name="joker cost"
              id="joker-cost"
              className="input-joker-cost"
              style={{
                width: isMobile ? "154px" : "200px",
                height: isMobile ? "63px" : "63px",
              }}
              onChange={handleInputChange}
            >
              {[...Array(100)].map((_, i) => (
                <option key={i} value={i} style={{ textAlign: "center" }}>
                  {i}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
    </>
  );
};

export default JokerInput;
