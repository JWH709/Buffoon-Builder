/* eslint-disable react/prop-types */

const CrtToggle = ({ toggleButton, setToggleButton }) => {
  return (
    <label className="switch">
      <input type="checkbox" onClick={() => setToggleButton(!toggleButton)} />
      <span className="slider"></span>
    </label>
  );
};

export default CrtToggle;
