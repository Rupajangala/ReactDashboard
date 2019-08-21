import React, { Component } from "react";

const item = {
  border: "1px solid #474645",
  backgroundColor: "#415f77",
  marginLeft: "5px",
  marginRight: "5px",
  width: "40%",
  heigth: "auto",
  padding: "50px 10px",
  borderRadius: "5px",
  boxShadow: "5px 5px 3px #474645"
};
const content = {
  padding: "10px 0",
  color: "white"
};
const ListItems = ({ items }) => (
  <li style={item}>
    <div style={content}>{items.id}</div>
    <div style={content}>{items.firstname}</div>
    <div style={content}>{items.lastname}</div>
    <div style={content}>{items.year}</div>
  </li>
);

export default ListItems;
