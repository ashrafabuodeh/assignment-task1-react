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
            key={item.id}
            src={item.src}
            alt={item.img}
            title={item.title}
            brief={item.brief}
          ></CardItem>
        )}
      </div>
    );
  }
}

export default GridItems;
