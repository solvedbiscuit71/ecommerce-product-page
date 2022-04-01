import React, { useEffect, useState } from 'react';
import CartWrapper from '../styles/CartWrapper';
import Button from '../styles/Button'
function Cart(props) {
  const [show,setShow] = useState(false)
  const [transition,settransition] = useState(false)
  useEffect(_ => {
    if (props.show) {
      setTimeout(_ => {
        settransition(true)
      },5)
      setShow(true)
      return
    }
    settransition(false)
    setTimeout(() => {
      setShow(false)
    }, 200);
  },[props.show])

  return (
    <CartWrapper isEmpty={props.count === 0} show={show} transition={transition}>
      <h2>Cart</h2>

      <div>
        {
          props.count === 0 ?
          "Your cart is empty." :
          <div className="cart">
            <div className="cart-info">
              <div>
                <img src="images/thumbnail-product-1.jpg" alt="product image" />
                <div>
                  <h3>Autumn Limited Edition...</h3>
                  <p>$125.00 x {props.count} <span>${125 * props.count}.00</span></p>
                </div>
              </div>
              <img onClick={props.resetCount} src="images/icon-delete.svg" alt="delete icon" />
            </div>
            <Button>Checkout</Button>
          </div>
        }
      </div>
    </CartWrapper>
  );
}

export default Cart;