import React from 'react';
function Navbar(props) {
  return (
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
  );
}

export default Navbar;