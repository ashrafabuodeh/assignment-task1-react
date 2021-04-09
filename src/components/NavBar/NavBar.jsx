import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";

class NavBar extends Component {
  render() {

    const { handleActiveItem, href, id, name, nameOfClass } = this.props;
    return (
      <>
        <Link to={href}
           className={nameOfClass}
          onClick={()=>handleActiveItem(this.props.id)}
          id={id}
        >
          {name}
        </Link>
      </>
    );
  }
}

export default NavBar;

