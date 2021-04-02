import React, { Component } from 'react';
import '../style.css';
import coffeeBeans from '../assets/coffee-beans.png';
import iconMenu from '../assets/menu.png';
import shoppingCart from '../assets/shopping-cart.png';
import profileImage from '../assets/profile-image.png';

class NavBar extends Component {
    state = {      
    }
    onMenuItemClick=()=>{};
    handleBurgerIconClick =()=>{};
    render() { 
        return ( 
            <React.Fragment>
            <div className="header">
            <div className="coffee-bens">
                <img src={coffeeBeans} alt="coffee beans"
                    className="coffee-bens-size"/>
            </div>
            <img src={iconMenu} alt="icon menu" className="icon-menu" onclick={this.handleBurgerIconClick('toggle')}
                id="#toggle"/>
            <div id="all-links-navbar">
                <a className="nav-items menu-item  " onclick={this.onMenuItemClick('item-home')} id="item-home">Home</a>
                <a className="nav-items menu-item " onclick={this.onMenuItemClick('item-about-us')} id="item-about-us">About
                    Us</a>
                <a className="nav-items menu-item " onclick={this.onMenuItemClick('item-our-lands')}
                    id="item-our-lands">Ourlands</a>
                <a className="nav-items menu-item " onclick={this.onMenuItemClick('item-suppliers')}
                    id="item-suppliers">Suppliers</a>
                <a className="nav-items menu-item " onclick={this.onMenuItemClick('item-products')}
                    id="item-products">Products</a>
                <a className="nav-items menu-item" onclick={this.onMenuItemClick('item-contact-us')}
                    id="item-contact-us">Contact Us</a>
            </div>
            <div className="left-header-images">
                <img src={shoppingCart} alt="shopping cart " className="shopping-cart-size"/>
                <img src={profileImage} alt="profile image" className="profile-image"/>
            </div>
        </div>
        </React.Fragment>
    
    
         );
    }
}
 
export default NavBar;
