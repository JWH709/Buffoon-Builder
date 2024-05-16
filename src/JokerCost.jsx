/* eslint-disable react/prop-types */
const JokerCostTab = ({ jokerCost }) => {
  const getCostWithSign = () => {
    if (jokerCost.length > 0) {
      return jokerCost + "$";
    } else {
      return 0 + "$";
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
