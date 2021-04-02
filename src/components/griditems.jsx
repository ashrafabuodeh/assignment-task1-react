import React, { Component } from "react";
import '../style.css';
import mochaLate from '../assets/mocha-late.png';
import doubleEspresso from '../assets/double-espresso.png'



class GridItems extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
      <div className="grid-items">
        <div className="coffee-item">
          <div>
            <img src={mochaLate} alt="mocha late" />
            <p className="product-sans-font">Mocha Late</p>
            <p className="google-sans-font">
              Coffee is a brewed drink prepared from roasted coffee beans, the
              seeds of berries from certain Coffea species.
            </p>
          </div>
        </div>
        <div className="coffee-item">
          <div>
            <img src={mochaLate} alt="mocha late" />
            <p className="product-sans-font">Mocha Late</p>
            <p className="google-sans-font">
              Coffee is a brewed drink prepared from roasted coffee beans, the
              seeds of berries from certain Coffea species.
            </p>
          </div>
        </div>
        <div className="coffee-item">
          <div>
            <img src={mochaLate} alt="mocha late" />
            <p className="product-sans-font">Mocha Late</p>
            <p className="google-sans-font">
              Coffee is a brewed drink prepared from roasted coffee beans, the
              seeds of berries from certain Coffea species.
            </p>
          </div>
        </div>
        <div className="coffee-item">
          <div>
            <img src={mochaLate} alt="mocha late" />
            <p className="product-sans-font">Mocha Late</p>
            <p className="google-sans-font">
              Coffee is a brewed drink prepared from roasted coffee beans, the
              seeds of berries from certain Coffea species.
            </p>
          </div>
        </div>
        <div className="coffee-item">
          <div>
            <img src={doubleEspresso} alt="double espresso" />
            <p className="product-sans-font">Double Espresso</p>
            <p className="google-sans-font">
              Coffee is a brewed drink prepared from roasted coffee beans, the
              seeds of berries from certain Coffea species.
            </p>
          </div>
        </div>
        <div className="coffee-item">
          <div>
            <img src={doubleEspresso} alt="double espresso" />
            <p className="product-sans-font">Double Espresso</p>
            <p className="google-sans-font">
              Coffee is a brewed drink prepared from roasted coffee beans, the
              seeds of berries from certain Coffea species.
            </p>
          </div>
        </div>
        <div className="coffee-item">
          <div>
            <img src={doubleEspresso} alt="double espresso" />
            <p className="product-sans-font">Double Espresso</p>
            <p className="google-sans-font">
              Coffee is a brewed drink prepared from roasted coffee beans, the
              seeds of berries from certain Coffea species.
            </p>
          </div>
        </div>
        <div className="coffee-item">
          <div>
            <img src={doubleEspresso} alt="double espresso" />
            <p className="product-sans-font">Double Espresso</p>
            <p className="google-sans-font">
              Coffee is a brewed drink prepared from roasted coffee beans, the
              seeds of berries from certain Coffea species.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
     );
  }
}
 
export default GridItems;
