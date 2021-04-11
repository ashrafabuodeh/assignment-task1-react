import React, { Component } from "react";
import './CardItems.css';

class CardItem extends Component {
  render() {
    const { alt, brief, src, title } = this.props ;

    return (
      <>
        <div className="coffee-item">
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
