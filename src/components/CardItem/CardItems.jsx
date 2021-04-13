import React from "react";
import "./CardItems.css";

function CardItem({ alt, brief, src, title }) {

  return (
    <>
      <div className="coffee-item">
        <img src={src} alt={alt} />
        <p className="product-sans-font">{title}</p>
        <p className="google-sans-font">{brief}</p>
      </div>
    </>
  );
}
export default CardItem;
