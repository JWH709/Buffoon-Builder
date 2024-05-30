/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css"; //This breaks the rows
import "./main.css";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import BlockTab from "./BlockTab.jsx";
import valueBlocks from "./blocksValueBlocks";
import contextBlocks from "./blocksContextBlocks.js";
import conditionBlocks from "./blocksConditionBlocks.js";
import resultBlocks from "./blocksResultBlocks.js";
import { ItemTypes } from "./Constants.jsx";
function SidePanel() {
  const [key, setKey] = useState("home");
  return (
    <div className="tab-container">
      <Tabs
        id="controlled-tab"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Context">
          <BlockTab
            blockArray={contextBlocks}
            blockType={ItemTypes.CONTEXTBLOCK}
          />
        </Tab>
        <Tab eventKey="value" title="Value">
          <BlockTab blockArray={valueBlocks} blockType={ItemTypes.VALUEBLOCK} />
        </Tab>
        <Tab eventKey="conditions" title="Conditions">
          <BlockTab
            blockArray={conditionBlocks}
            blockType={ItemTypes.CONDITIONBLOCK}
          />
        </Tab>
        <Tab eventKey="results" title="Results">
          <BlockTab
            blockArray={resultBlocks}
            blockType={ItemTypes.RESULTSBLOCK}
          />
        </Tab>
      </Tabs>
    </div>
  );
}

export default SidePanel;
