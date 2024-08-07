/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css"; //This breaks the rows
import "../../styles/main.css";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import BlockTab from "./BlockTab.jsx";
import contextBlocks from "../../config/contextBlocks.js";
import conditionBlocks from "../../config/conditionBlocks.js";
import resultBlocks from "../../config/resultBlocks.js";
import ItemTypes from "../../config/ItemTypes.jsx";
function SidePanel({
  isMobile,
  setConditionsMemory,
  setResultsMemory,
  setContextMemory,
}) {
  const [key, setKey] = useState("home");
  return (
    <div className="tab-container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "2%",
          width: "95%",
          height: "95%",
        }}
      >
        {
          //ToDo: if isMobile, make the tabs switch with the active building list
        }
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
              isMobile={isMobile}
              setBlockMemory={setContextMemory}
            />
          </Tab>
          <Tab eventKey="conditions" title="Conditions">
            <BlockTab
              blockArray={conditionBlocks}
              blockType={ItemTypes.CONDITIONBLOCK}
              isMobile={isMobile}
              setBlockMemory={setConditionsMemory}
            />
          </Tab>
          <Tab eventKey="results" title="Results">
            <BlockTab
              blockArray={resultBlocks}
              blockType={ItemTypes.RESULTSBLOCK}
              isMobile={isMobile}
              setBlockMemory={setResultsMemory}
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default SidePanel;
