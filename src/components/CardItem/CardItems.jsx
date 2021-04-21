import propTypes from "prop-types";
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

CardItem.protoTypes = {
  alt: propTypes.string.isRequired,
  brief: propTypes.string.isRequired,
  src: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default CardItem;
