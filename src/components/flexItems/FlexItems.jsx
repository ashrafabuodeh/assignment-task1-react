import React, { Component } from 'react';
import './FlexItems.css';

class FlexItems extends Component {
    render() { 
        const { alt, brief, cardItemClass, src, title } = this.props;

        return ( 
            <div className={cardItemClass}>
              <div>
                <img src={src} alt={alt} />
                <p className="product-sans-font">{title}</p>
                <p className="google-sans-font">
                 {brief}
                </p>
              </div>
            </div>
         );
    }
}
 
export default FlexItems;
