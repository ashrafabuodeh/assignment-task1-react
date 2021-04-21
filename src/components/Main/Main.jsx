import { cardItemInfo } from "../../data";
import { FlexItems } from "../../components";
import mochaLateLarge from "../../assets/mocha-late-large.png";
import React from "react";
import viewMore from "../../assets/view-more.png";
import "./Main.css";

function Main() {

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
            {cardItemInfo.map((item) => (
              <FlexItems
                brief={item.brief}
                cardItemClass={item.cardItemClass}
                key={item.id}
                src={item.src}
                title={item.title}
              ></FlexItems>
            ))}
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

export default Main;
