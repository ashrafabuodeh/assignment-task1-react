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
  };
  handleBurgerIconClick = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  handleItem = (id) => {
    navItem.map((item) => (item.isClicked = false));
    navItem[id - 1].isClicked = true;
    console.log(navItem[id - 1]);
    navItem.filter((item) =>
      id === item.id ? (item.activeItem = "active") : (item.activeItem = "")
    );
  };
  render() {
    const isClicked = this.state.isClicked;
    return (
      <>
        <div className="header">
          <div className="coffee-bens">
            <img
              src={coffeeBeans}
              alt="coffee beans"
              className="coffee-bens-size"
            />
          </div>
          <img
            src={iconMenu}
            alt="icon menu"
            className={"icon-menu"}
            onClick={() => this.handleBurgerIconClick()}
          />
          {isClicked ? (
            <div id="all-links-navbar" style={{ visibility: "visible" }}>
              {navItem.map((item) => (
                <NavBar
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  isClick={item.isClicked}
                  className={item.activeItem}
                  handleActiveItem={() => this.handleItem(item.id)}
                ></NavBar>
              ))}
            </div>
          ) : (
            <div id="all-links-navbar" style={{ visibility: "hidden" }}>
              {navItem.map((item) => (
                <NavBar
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  isClick={item.isClicked}
                  className={item.activeItem}
                  handleActiveItem={() => this.handleItem(item.id)}
                ></NavBar>
              ))}
            </div>
          )}
          <div className="left-header-images">
            <img
              src={shoppingCart}
              alt="shopping cart "
              className="shopping-cart-size"
            />
            <img
              src={profileImage}
              alt="profile image"
              className="profile-image"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Header;
