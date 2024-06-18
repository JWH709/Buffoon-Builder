/* eslint-disable react/prop-types */

const ClearListButton = ({ setDroppedItem }) => {
  return (
    <div
      style={{
        height: "10%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={() => {
          setDroppedItem(null);
        }}
        style={{
          width: "50%",
          height: "98%",
          textAlign: "center",
          backgroundColor: "rgb(255, 76, 76)",
          textShadow: "2px 2px #ff0000",
          color: "aliceblue",
          border: "none",
          borderRadius: "15px",
          filter: "drop-shadow(5px 5px rgb(63, 63, 63))",
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default ClearListButton;
