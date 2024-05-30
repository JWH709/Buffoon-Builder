/* eslint-disable react/prop-types */
const DroppedBlock = ({ styles, title, lua, id }) => {
  const blockLogic = lua;
  return (
    <div className={styles} key={id} onClick={console.log(blockLogic)}>
      <h2>{title}</h2>
    </div>
  );
};

export default DroppedBlock;
