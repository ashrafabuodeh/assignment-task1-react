import { cardInfo } from "../../data";
import { CardItem } from "../../components";
import React from "react";
import "./GridItems.css";

function GridItems() {

  return (
    <div className="grid-items">
      {cardInfo.map((item) => (
        <CardItem
          alt={item.img}
          brief={item.brief}
          key={item.id}
          src={item.src}
          title={item.title}
        ></CardItem>
      ))}
    </div>
  );
}

export default GridItems;
