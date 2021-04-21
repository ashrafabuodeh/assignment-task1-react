import { Link } from "react-router-dom";
import propTypes from "prop-types";
import React from "react";
import "./NavBar.css";

function NavBar({ handleActiveItem, href, id, name, nameOfClass }) {
  
  return (
    <>
      <Link
        className={nameOfClass}
        id={id}
        onClick={() => handleActiveItem(id)}
        to={href}
      >
        {name}
      </Link>
    </>
  );
}

NavBar.protoTypes = {
  handleActiveItem: propTypes.func,
  href: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  nameOfClass: propTypes.string.isRequired,
};

NavBar.defaultProps = {
  handleActiveItem: null,
};



export default NavBar;
