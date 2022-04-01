import React from 'react';
function Cart(props) {
  return (
    <section>
      <h2>Cart</h2>

      <div>
        <div>
          <img src="images/thumbnail-product-1.jpg" alt="product image" />
          <h3>Autumn Limited Edition...</h3>
          <p>$125.00 x 3 <span>$375.00</span></p>
        </div>
        <img src="images/icon-delete.svg" alt="delete icon" />
      </div>
      <button>Checkout</button>
    </section>
  );
}

export default Cart;