import React from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";

function NavBar({ handleActiveItem, href, id, linkName, nameOfClass }) {

  return (
    <>
      <Link to={href}
        className={nameOfClass}
        onClick={() => handleActiveItem(id)}
        id={id}
      >
        {linkName}
      </Link>
    </>
  );
}


export default NavBar;

