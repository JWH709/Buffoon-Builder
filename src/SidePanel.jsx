/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import { useState } from "react";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import jokers from "./jokers.js";

function SidePanel() {
  const [key, setKey] = useState("home");

  return (
    <div className="container-column side-panel-container">
      <Tabs
        id="controlled-tab"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Blocks">
          <BlockTab />
        </Tab>
        <Tab eventKey="profile" title="Jokers">
          <JokerTab />
        </Tab>
      </Tabs>
    </div>
  );
}

const BlockTab = () => {
  return (
    <div className="container-column grey-box">
      <h1>hi</h1>
    </div>
  );
};

const JokerTab = () => {
  const [searchTerms, setSearchTerms] = React.useState("");
  const handleSearch = (event) => {
    setSearchTerms(event.target.value);
  };
  const searchedItem = jokers.filter((card) =>
    card.Joker.toLowerCase().includes(searchTerms.toLowerCase())
  );
  const getItemImage = (item) => {
    let itemPath = item.Joker.replace(/ /g, "_");
    return `/Jokers/${itemPath}.png`;
  };
  return (
    <>
      <Search search={searchTerms} onSearch={handleSearch} />
      <ItemDisplay items={searchedItem} itemImage={getItemImage} />
    </>
  );
};

const Search = ({ search, onSearch }) => (
  <div className="container text-center">
    <h2>Jokers</h2>
    <input
      type="text"
      onChange={onSearch}
      value={search}
      placeholder="Filter Jokers..."
    />
  </div>
);

const ItemDisplay = ({ items, itemImage }) => {
  let allItems = [];
  let rows = [];
  items.map((item) => {
    allItems.push(
      <div>
        <img src={itemImage(item)} />
        <h6>{item.Joker}</h6>
      </div>
    );
  });
  let numberOfRows = Math.round(allItems.length / 3);
  if (numberOfRows < allItems.length / 3) {
    numberOfRows++;
  }
  for (let i = 0; i < numberOfRows; i++) {
    rows.push(
      <div className="row item-row">
        {allItems[i * 3]}
        {allItems[i * 3 + 1]}
        {allItems[i * 3 + 2]}
      </div>
    );
  }
  return (
    <div id="item-results" className="container text-center">
      {rows}
    </div>
  );
};
export default SidePanel;
