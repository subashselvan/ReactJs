//Comp with Arrow Function 
import React from 'react';

// functional comp with Arrow Fn 
const Menu = () => {
  return(
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
    </ul>
  )
}

export default Menu;
