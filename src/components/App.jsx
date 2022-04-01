import { Global } from '@emotion/react';
import React, { useState } from 'react';
import Cart from './Cart';
import Slide from './Slide';
import Header from './Header';
import Content from './Content';
function App(props) {
  const [count,setCount] = useState(0)
  const [showCart,setShowCart] = useState(false)

  return (
    <>
      <Global styles={`
      @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');

      *,*::before,*::after {
        box-sizing: border-box;
      }

      html,body {
        margin: 0;
        padding: 0;
        font-family: "Kumbh Sans";
      }
      `}/>

      <Header count={count} toggleCart={_ => setShowCart(showCart ? false : true)}/>
      <Cart count={count} resetCount={_ => setCount(0)} show={showCart}/>
      <Slide/>
      <Content updateCart={count => setCount(count)}/>
    </>
  );
}

export default App;