import React from 'react';
import './FlexItems.css';

function FlexItems(props) {

  const { alt, brief, cardItemClass, src, title } = props;

  return (
    <div className={ cardItemClass }>
      <div>
        <img src={ src } alt={ alt } />
        <p className="product-sans-font">{ title }</p>
        <p className="google-sans-font">
          { brief }
        </p>
      </div>
    </div>
  );
}


export default FlexItems;
