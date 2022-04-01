import React from 'react';
import CartWrapper from '../styles/CartWrapper';
import Button from '../styles/Button'
function Cart(props) {
  const isEmpty = false
  return (
    <CartWrapper isEmpty={isEmpty}>
      <h2>Cart</h2>

      <div>
        {
          isEmpty ?
          "Your cart is empty." :
          <div className="cart">
            <div className="cart-info">
              <div>
                <img src="images/thumbnail-product-1.jpg" alt="product image" />
                <div>
                  <h3>Autumn Limited Edition...</h3>
                  <p>$125.00 x 3 <span>$375.00</span></p>
                </div>
              </div>
              <img src="images/icon-delete.svg" alt="delete icon" />
            </div>
            <Button>Checkout</Button>
          </div>
        }
      </div>
    </CartWrapper>
  );
}

export default Cart;