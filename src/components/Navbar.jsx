import React, { useState, useEffect } from 'react';
import NavbarWrapper from '../styles/NavbarWrapper';
function Navbar(props) {
  const [show,setShow] = useState(false)
  const [transition,setTransition] = useState(false)
  useEffect(_ => {
    if (props.show) {
      setTimeout(_ => {
        setTransition(true)
      },8)
      setShow(true)
      return
    }
    setTransition(false)
    setTimeout(() => {
      setShow(false)
    }, 200);
  },[props.show])

  return (
    <NavbarWrapper className='navbar clickable' show={show} transition={transition} >
      <div>
        <img src="images/icon-close.svg" alt="close icon" onClick={props.closeNav} />

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