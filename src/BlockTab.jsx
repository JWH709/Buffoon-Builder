import valueBlocks from "./blocksValueBlocks";
import LogicBlock from "./LogicBlocks";
const BlockTab = () => {
  return (
    <>
      <div className="block-container">
        <LogicBlock
          title={valueBlocks[0].title}
          styles={valueBlocks[0].styles}
        />
        <LogicBlock
          title={valueBlocks[1].title}
          styles={valueBlocks[1].styles}
        />
      </div>
    </>
  );
};

export default BlockTab;
