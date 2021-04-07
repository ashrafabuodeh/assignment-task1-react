import React, { Component } from "react";
import './Main.css';
import mochaLateLarge from '../../assets/mocha-late-large.png';
import icedCoffee from '../../assets/iced-coffee.png';
import caramelFrappe from '../../assets/caramel-frappe.png';
import mochaLate from '../../assets/mocha-late.png';
import viewMore from '../../assets/view-more.png';


class Main extends Component {
  render() { 
    return (  
      <>
      <div className="main">
        <div className="hero-image">
          <img src={mochaLateLarge} alt="mocha late" />
          <div className="hero-text">
            <p className="product-sans-font">Mocha Late</p>
            <p className="google-sans-font">
              Coffee is a brewed drink prepared from roasted coffee beans, the
              seeds of berries from certain Coffea species.
            </p>
            <div className="product-sans-font price">
            <p className="bag"> 1Bag </p>
            <p>$69.99</p>
              </div>
          </div>
        </div>
        <div className="hero-banner">
          <div className="text-banner">
            <p className="text-banner-color">Be Active</p>
            <p className="product-sans-font title-barsley-coffee">
              Barnsley Brew Coffee
            </p>
            <p className="google-sans-font text-below-barnsley-coffee">
              Coffee is a brewed drink prepared from roasted coffee beans, the
              seeds of berries from certain Coffea species. When coffee berries
              turn from.
            </p>
            <p>Top Packs</p>
          </div>
          <div className="coffee-list">
            <div className="coffee-item ">
              <div>
                <img src={icedCoffee} alt="iced coffee" />
                <p className="product-sans-font">Iced Coffee</p>
                <p className="google-sans-font">
                  Coffee is a brewed drink prepared from roasted coffee beans,
                  the seeds of berries from certain Coffea species.
                </p>
              </div>
            </div>
            <div className="coffee-item caramel-frappe-coffee">
              <div>
                <img src={caramelFrappe} alt="caramel frappe" />
                <p className="product-sans-font">Caramel Frappe</p>
                <p className="google-sans-font">
                  Coffee is a brewed drink prepared from roasted coffee beans,
                  the seeds of berries from certain Coffea species.
                </p>
              </div>
            </div>
            <div className="coffee-item mocha-late-coffee">
              <div>
                <img src={mochaLate} alt="mocha late" />
                <p className="product-sans-font">Mocha Late</p>
                <p className="google-sans-font">
                  Coffee is a brewed drink prepared from roasted coffee beans,
                  the seeds of berries from certain Coffea species.
                </p>
              </div>
            </div>
            <div className="view-more-img">
              <img src={viewMore} alt="view more" />
              <p className="product-sans-font">View More</p>
            </div>
          </div>
        </div>
      </div>
    </>

    );
  }
}
 
export default Main;
