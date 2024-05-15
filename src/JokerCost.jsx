/* eslint-disable react/prop-types */
const JokerCostTab = ({ jokerCost }) => {
  return (
    <>
      <div className="joker-cost-container">
        <div className="joker-cost-oval">
          <h2>{jokerCost}</h2>
        </div>
      </div>
    </>
  );
};

export default JokerCostTab;
