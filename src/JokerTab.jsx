/* eslint-disable react/prop-types */
import React from "react";
import jokers from "./jokers";
import Search from "./ItemSearch";
import JokerArt from "./JokerArt";

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
      <div className="column container">
        <Search
          search={searchTerms}
          onSearch={handleSearch}
          title={"Jokers"}
          pHold={"Filter Jokers..."}
        />
        <ItemDisplay items={searchedItem} itemImage={getItemImage} />
      </div>
    </>
  );
};

const ItemDisplay = ({ items, itemImage }) => {
  let allItems = [];
  let rows = [];
  items.map((item) => {
    allItems.push(<JokerArt getImgSrc={itemImage} jokerItem={item} />);
  });
  let numberOfRows = Math.round(allItems.length / 3);
  if (numberOfRows < allItems.length / 3) {
    numberOfRows++;
  }
  for (let i = 0; i < numberOfRows; i++) {
    rows.push(
      <div className="item-row">
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

export default JokerTab;
