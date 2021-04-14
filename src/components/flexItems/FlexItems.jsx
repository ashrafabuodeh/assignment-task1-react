import propTypes from 'prop-types';
import React from 'react';
import './FlexItems.css';

function FlexItems({ alt, brief, cardItemClass, src, title }) {

  return (
    <div className={ cardItemClass }>
      <div>
        <img alt={alt} src={src} />
        <p className="product-sans-font">{ title }</p>
        <p className="google-sans-font">
          { brief }
        </p>
      </div>
    </div>
  );
}

FlexItems.propTypes = {
  alt: propTypes.string.isRequired,
  brief: propTypes.string.isRequired,
  cardItemClass: propTypes.string.isRequired,
  title: propTypes.string.isRequired
}



export default FlexItems;
