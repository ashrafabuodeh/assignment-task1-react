import React, { Component } from 'react';
import './FlexItems.css';

class FlexItems extends Component {
    render() { 
        const {cardItemClass,src,alt,title,brief} = this.props;
        return ( 
            <div className={cardItemClass}>
              <div>
                <img src={src} alt={alt} />
                <p className="product-sans-font">{title}</p>
                <p className="google-sans-font">
                  Coffee is a brewed drink prepared from roasted coffee beans,
                  the seeds of berries from certain Coffea species.
                </p>
              </div>
            </div>
         );
    }
}
 
export default FlexItems;
