/* eslint-disable react/prop-types */
import LogicBlock from "./LogicBlocks";
const BlockTab = ({ blockArray, blockType, isMobile, setBlockMemory }) => {
  let background = null;
  switch (blockType) {
    case "context-block":
      background = "rgb(156, 94, 0)";
      break;
    case "condition-block":
      background = "rgb(30, 63, 49)";
      break;
    case "results-block":
      background = "rgb(134, 34, 28)";
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
              inputType={block.inputType}
              blockType={blockType}
              isMobile={isMobile}
              setBlockMemory={setBlockMemory}
            />
          );
        })}
      </div>
    </>
  );
};

export default BlockTab;
