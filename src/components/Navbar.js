import React from 'react';
import CartIcon from './CartIcon'

const Navbar = (props) => {
  return (
    <nav className="navbar green">
      <div className="container">
        <span className="brand-logo">fresh fruits</span>
        <ul className="right">
          <li><CartIcon/></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;