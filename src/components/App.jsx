import { Global, ThemeProvider } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Slide from './Slide';
import Header from './Header';
import Content from './Content';
const theme = {
  color: {
    orange: 'hsl(26, 100%, 55%)',
    paleOrange: 'hsl(25, 100%, 94%)',
    grayishBlue: 'hsl(223, 64%, 98%)'
  },
  text: {
    bold: 'hsl(220, 13%, 13%)',
    normal: 'hsl(219, 9%, 45%)',
    light: 'hsl(220, 14%, 75%)'
  }
}

function App(props) {
  const [count,setCount] = useState(0)
  const [showCart,setShowCart] = useState(false)

  useEffect(_ => {
    document.addEventListener('click',event => {
      setShowCart(show => {
        // check:whether it's opened
        if (!show) {
          return show
        }
        // check:whether we are'nt clicking any "clickable"
        const clickable = [...document.getElementsByClassName('clickable')]
        const isClickable = clickable.find(item => {
          if (item == event.target) {
            return true
          }
          return item.contains(event.target)
        })
        if (isClickable) {
          return show
        }

        // check:whether we clicked inside the cart
        const cart = document.getElementById('cart-container').getBoundingClientRect()
        const {clientX: x,clientY: y} = event
        if (x > cart.left && x < cart.right && y > cart.top && y < cart.bottom) {
          return show
        }
        return false
      })
    })
  },[])

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

      <ThemeProvider theme={theme}>
        <Header count={count} toggleCart={_ => setShowCart(showCart ? false : true)}/>
        <Cart count={count} resetCount={_ => setCount(0)} show={showCart}/>
        <Slide/>
        <Content updateCart={count => setCount(old => old + count)}/>
      </ThemeProvider>
    </>
  );
}

export default App;