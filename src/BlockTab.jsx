/* eslint-disable react/prop-types */
import LogicBlock from "./LogicBlocks";
const BlockTab = ({ blockArray, blockType }) => {
  return (
    <>
      <div className="block-container">
        {blockArray.map((block) => {
          return (
            <LogicBlock
              title={block.title}
              key={block.id}
              id={block.id}
              lua={block.LUA}
              styles={block.styles}
              blockType={blockType}
            />
          );
        })}
      </div>
    </>
  );
};

export default BlockTab;
