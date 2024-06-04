/* eslint-disable react/prop-types */
const JokerCostTab = ({ jokerCost }) => {
  const getCostWithSign = () => {
    if (jokerCost == null) {
      return 0 + "$";
    } else {
      return jokerCost + "$";
    }
  };

  const costPreview = getCostWithSign();

  return (
    <>
      <div className="joker-cost-container">
        <div className="joker-cost-oval">
          <h2>{costPreview}</h2>
        </div>
      </div>
    </>
  );
};

export default JokerCostTab;
