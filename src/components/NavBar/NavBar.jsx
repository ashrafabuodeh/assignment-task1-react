import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import React from "react";
import "./NavBar.css";

function NavBar({ handleActiveItem, href, id, label, nameOfClass }) {

  return (
    <>
      <Link to={href}
        className={nameOfClass}
        onClick={() => handleActiveItem(id)}
        id={id}
      >
        {label}
      </Link>
    </>
  );
}

NavBar.propTypes = {
  handleActiveItem: propTypes.func.isRequired,
  href: propTypes.string.isRequired,
  id: propTypes.number.isRequired ,
  label: propTypes.string.isRequired ,
  nameOfClass: propTypes.string.isRequired 
}

export default NavBar;

