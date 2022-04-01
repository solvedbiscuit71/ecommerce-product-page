import React from 'react';
import Cart from './Cart';
import Gallery from './Gallery';
import Header from './Header';
function App(props) {
  return (
    <>
      <Header/>
      <Cart/>
      <Gallery/>

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