import { Global } from '@emotion/react';
import React, { useState } from 'react';
import Cart from './Cart';
import Slide from './Slide';
import Header from './Header';
import Content from './Content';
function App(props) {
  const [cart,setCart] = useState(0)

  return (
    <>
      <Global styles={`
      @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');

      html,body {
        margin: 0;
        padding: 0;
        font-family: "Kumbh Sans";
      }
      `}/>

      <Header count={cart}/>
      <Cart count={cart} resetCount={_ => setCart(0)}/>
      <Slide/>
      <Content updateCart={count => setCart(count)}/>
    </>
  );
}

export default App;