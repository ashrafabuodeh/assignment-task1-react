import React, { Component } from "react";
import CardItem from "../CardItem/CardItems";
import "./GridItems.css";
import  cardInfo  from "../../data/griditems";

class GridItems extends Component {
  render() {
    return (
      <div className="grid-items">
        {cardInfo.map((item) => 
          <CardItem
            alt = {item.img}
            brief = {item.brief}
            key = {item.id}
            src = {item.src}
            title = {item.title}
          ></CardItem>
        )}
      </div>
    );
  }
}

export default GridItems;
