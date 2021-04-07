import React, { Component } from "react";
import './CardItems.css';
class CardItem extends Component {

  render() {
    return (
      <>
        <div className="coffee-item">
            <img src={this.props.src} alt={this.props.alt} />
            <p className="product-sans-font">
              {this.props.title}
            </p>
            <p className="google-sans-font">
            {this.props.brief}
            </p>
        </div>
      </>
    );
  }
}

export default CardItem;
