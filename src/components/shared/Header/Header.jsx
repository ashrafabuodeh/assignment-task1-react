import React, { Component } from "react";
import "./Header.css";
import NavBar from "../../NavBar/NavBar";
import navItem from "../../../data/navbar";
import coffeeBeans from "../../../assets/coffee-beans.png";
import iconMenu from "../../../assets/menu.png";
import shoppingCart from "../../../assets/shopping-cart.png";
import profileImage from "../../../assets/profile-image.png";

class Header extends Component {
  state = {
    isClicked: false,
    navbar: navItem,
  };
  handleBurgerIconClick = () => {

    this.setState({ isClicked: !this.state.isClicked });
  };

  handleItem = (id) => {
    navItem.map(
      (item) => ((item.activeItem = "nav-items menu-item"))
    );
    navItem[id - 1].activeItem = "nav-items menu-item active";
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
                href= {item.href}
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

