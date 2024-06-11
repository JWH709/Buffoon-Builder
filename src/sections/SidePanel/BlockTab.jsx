/* eslint-disable react/prop-types */
import LogicBlock from "./LogicBlocks";
const BlockTab = ({ blockArray, blockType }) => {
  let background = null;
  switch (blockType) {
    case "context-block":
      background = "rgb(156, 94, 0)";
      break;
    case "condition-block":
      background = "rgb(30, 63, 49)";
      break;
    case "results-block":
      background = "rgb(255, 0, 0)";
      break;
  }
  return (
    <>
      <div
        className="block-container"
        style={{
          backgroundColor: background,
        }}
      >
        {blockArray.map((block) => {
          return (
            <LogicBlock
              title={block.title}
              key={block.id}
              id={block.id}
              lua={block.LUA}
              styles={block.styles}
              additionalInput={block.additionalInput}
              blockType={blockType}
            />
          );
        })}
      </div>
    </>
  );
};

export default BlockTab;
