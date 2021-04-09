import { NavBar } from "../../../components"
import { navItem } from "../../../data";
import coffeeBeans from "../../../assets/coffee-beans.png";
import iconMenu from "../../../assets/menu.png";
import profileImage from "../../../assets/profile-image.png";
import React, { Component } from "react";
import shoppingCart from "../../../assets/shopping-cart.png";
import "./Header.css";

class Header extends Component {
  state = {
    navbar: navItem,
  };
  handleBurgerIconClick = () => {
    if (document.getElementById("all-links-navbar").style.visibility === 'hidden')
      document.getElementById("all-links-navbar").style.visibility = "visible";
    else
      document.getElementById("all-links-navbar").style.visibility = "hidden";

  };

  handleItem = (id) => {
    navItem.map(
      (item) => ((item.activeItem = "nav-items menu-item"))
    );
    navItem[id].activeItem = "nav-items menu-item active";
    this.setState(navItem);
  };
  render() {

    return (
      <>
        <div className="header">
          <div className="coffee-bens">
            <img
              alt="coffee beans"
              className="coffee-bens-size"
              src={coffeeBeans}
            />
          </div>
          <img
            alt="icon menu"
            className={"icon-menu"}
            onClick={() => this.handleBurgerIconClick()}
            src={iconMenu}
          />
          <div id="all-links-navbar">
            {navItem.map((item) => (
              <NavBar
                handleActiveItem={() => this.handleItem(item.id)}
                href={item.href}
                id={item.id}
                key={item.id}
                name={item.name}
                nameOfClass={item.activeItem}
              ></NavBar>
            ))}
          </div>
          <div className="left-header-images">
            <img
              alt="shopping cart "
              className="shopping-cart-size"
              src={shoppingCart}
            />
            <img
              alt="profile image"
              className="profile-image"
              src={profileImage}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Header;

