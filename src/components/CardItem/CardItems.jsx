import React, { Component } from "react";
import './CardItems.css';

class CardItem extends Component {
  render() {
    const {src,alt,title,brief,key} = this.props ;
    return (
      <>
        <div className="coffee-item" key={key}>
            <img src={src} alt={alt} />
            <p className="product-sans-font">
              {title}
            </p>
            <p className="google-sans-font">
            {brief}
            </p>
        </div>
      </>
    );
  }
}

export default CardItem;
