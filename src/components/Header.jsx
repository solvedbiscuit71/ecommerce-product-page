import React from 'react';
import Navbar from './Navbar';
function Header(props) {
  return (
    <header>
      <div>
        <div>
          <img src="images/icon-menu.svg" alt="menu icon" />
          <img src="images/logo.svg" alt="logo" />
        </div>
        <Navbar/>
      </div>
      <div>
        <div>
          <img src="images/icon-cart.svg" alt="cart icon" />
          <span>3</span>
        </div>
        <img src="images/image-avatar.png" alt="avatar" />
      </div>
    </header>
  );
}

export default Header;