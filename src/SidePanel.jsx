/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css"; //This breaks the rows
import "./main.css";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import BlockTab from "./BlockTab.jsx";
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
          <BlockTab />
        </Tab>
        <Tab eventKey="value" title="Value"></Tab>
        <Tab eventKey="conditions" title="Conditions"></Tab>
        <Tab eventKey="results" title="Results"></Tab>
      </Tabs>
    </div>
  );
}

export default SidePanel;
