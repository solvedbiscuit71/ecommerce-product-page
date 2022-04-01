import React from 'react';
import NavbarWrapper from '../styles/NavbarWrapper';
function Navbar(props) {
  return (
    <NavbarWrapper className='navbar'>
      <div>
        <img src="images/icon-close.svg" alt="close icon" />

        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </NavbarWrapper>
  );
}

export default Navbar;