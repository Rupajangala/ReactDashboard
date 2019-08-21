import React, { Component } from "react";
import ListItems from "./ListItems";

const itemList = {
  listStyleType: "none",
  display: "flex",
  flexDirection: "row",
  margin: 0,
  padding: 0,
  marginTop: "50px"
};
const List = ({ listItems }) => (
  <ul style={itemList}>
    {listItems.map(items => (
      <ListItems key={items.id} items={items} />
    ))}
  </ul>
);

export default List;
