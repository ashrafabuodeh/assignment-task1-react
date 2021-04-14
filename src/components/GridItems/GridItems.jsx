import  { cardInfo }  from "../../data";
import { CardItem } from "../../components";
import { Link } from 'react-router-dom';
import React from "react";
import "./GridItems.css";

function GridItems() {

    return (
      <div className="grid-items">
        {cardInfo.map((item) => 
        <Link to = {"AboutUs/" + item.id } key={item.id} >
          <CardItem
            alt = { item.img }
            brief = { item.brief }
            key = { item.id }
            src = { item.src }
            title = { item.title }
          />
          </Link>
        )}
      </div>
    );
  }

export default GridItems;
