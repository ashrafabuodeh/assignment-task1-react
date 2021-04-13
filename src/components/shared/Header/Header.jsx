import { NavBar } from "../../../components"
import { navItem } from "../../../data";
import coffeeBeans from "../../../assets/coffee-beans.png";
import iconMenu from "../../../assets/menu.png";
import profileImage from "../../../assets/profile-image.png";
import React, { useState } from "react";
import shoppingCart from "../../../assets/shopping-cart.png";
import "./Header.css";

function Header() {

  const [isClicked, setClickedIcon] = useState(false);
  const [navItems, setNavItem] = useState(navItem);

  const toggleDisplay = () => {
    return isClicked ? "displayNavItems" : "";
  }

  const handleBurgerIconClick = () => {
    setClickedIcon(!isClicked);
  };

  const handleItem = (id) => {
    const allNavItems = navItems.map(
      (item) => item.activeItem = "nav-items menu-item"
    );
    navItems[id].activeItem = allNavItems[id] + " active";
    setNavItem([...navItems]);
  };


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
          onClick={() => handleBurgerIconClick()}
          src={iconMenu}
        />
        <div className={"all-links-navbar " + toggleDisplay()}>
          {navItems.map((item) => (
            <NavBar
              handleActiveItem={handleItem}
              href={item.href}
              id={item.id}
              key={item.id}
              linkName={item.linkName}
              nameOfClass={item.activeItem}
            />
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


export default Header;

