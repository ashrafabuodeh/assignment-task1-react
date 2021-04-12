import React from "react";
import './CardItems.css';

function CardItem(props) {

    const { alt, brief, src, title } = props ;

    return (
      <>
        <div className="coffee-item">
            <img src ={ src } alt = { alt } />
            <p className ="product-sans-font">
              {title}
            </p>
            <p className ="google-sans-font">
            { brief }
            </p>
        </div>
      </>
    );
  }
export default CardItem;
