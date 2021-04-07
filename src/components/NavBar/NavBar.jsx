import React, { Component } from "react";
import navItem from "../../data/navbar";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <>
        <a
           className={"nav-items menu-item "}
          onClick={()=>this.props.handleActiveItem(this.props.id)}
          id={this.props.id}
        >
          {this.props.name}
        </a>
      </>
    );
  }
}

export default NavBar;
