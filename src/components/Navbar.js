import React from 'react';

const Navbar = (props) => {
  return (
    <nav className="navbar green">
      <div className="container">
        <span className="brand-logo">fresh fruits</span>
        <ul className="right">
          <li>Cart</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;