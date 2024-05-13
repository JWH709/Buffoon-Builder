import blocks from "./blocks";
import LogicBlock from "./LogicBlocks";
const BlockTab = () => {
    return (
      <>
        <div className="column container">
          <LogicBlock title={blocks[0].title} styles={blocks[0].styles} />
          <LogicBlock title={blocks[1].title} styles={blocks[1].styles} />
        </div>
      </>
    );
  };

  export default BlockTab