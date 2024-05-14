/* eslint-disable react/prop-types */
const JokerInput = ({ inputTitle }) => {
  return (
    <>
      <div className="joker-input-container">
        <h4>{inputTitle}</h4>
        <input type="text" />
      </div>
    </>
  );
};

export default JokerInput;
