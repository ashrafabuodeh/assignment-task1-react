import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";

function NavBar(props) {

  const { handleActiveItem, href, id, name, nameOfClass } = props;
  
  return (
    <>
      <Link to = { href }
        className = { nameOfClass }
        onClick ={ () => handleActiveItem(id) }
        id={ id }
      >
        { name }
      </Link>
    </>
  );
}


export default NavBar;

