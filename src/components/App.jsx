import React from 'react';
function App(props) {
  return (
    <>
      <header>
        <div>
          <div>
            <img src="images/icon-menu.svg" alt="menu icon" />
            <img src="images/logo.svg" alt="logo" />
          </div>
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
        </div>
        <div>
          <div>
            <img src="images/icon-cart.svg" alt="cart icon" />
            <span>3</span>
          </div>
          <img src="images/image-avatar.png" alt="avatar" />
        </div>
      </header>

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

      <section>
        <div>
          <img src="images/image-product-1.jpg" alt="product image" />
          <img src="images/image-product-2.jpg" alt="product image" />
          <img src="images/image-product-3.jpg" alt="product image" />
          <img src="images/image-product-4.jpg" alt="product image" />
        </div>
        <div><img src="images/icon-previous.svg" alt="previous icon" /></div>
        <div><img src="images/icon-next.svg" alt="next icon" /></div>
      </section>

      <section>
        <span>SNEAKER COMPANY</span>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>

        <div>
          <div>
            $125.00 <span>50 %</span>
          </div>
          $250.00
        </div>
        <div>
          <img src="images/icon-minus.svg" alt="minus icon" />
          0
          <img src="images/icon-plus.svg" alt="plus icon" />
        </div>
        <button>
          <img src="images/icon-cart.svg" alt="cart icon" />
          Add to cart
        </button>
      </section>
    </>
  );
}

export default App;