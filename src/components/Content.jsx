import React, { useState } from 'react';
import Button from '../styles/Button';
import ContentWrapper from '../styles/ContentWrapper';
function Content(props) {
  const [count,setCount] = useState(0)
  const inc = _ => {
    setCount(count + 1)
  }

  const dec = _ => {
    if (count - 1 >= 0) {
      setCount(count - 1)
    }
  }

  return (
    <ContentWrapper>
      <span>SNEAKER COMPANY</span>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>

      <div className='price'>
        <div>
          $125.00 <span>50 %</span>
        </div>
        <div>
          $250.00
        </div>
      </div>
      <div className='input'>
        <img onClick={dec} src="images/icon-minus.svg" alt="minus icon" className='clickable' />
        { count }
        <img onClick={inc} src="images/icon-plus.svg" alt="plus icon" className='clickable' />
      </div>
      <Button onClick={_ => props.updateCart(count)} className='btn clickable'>
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffffff" fillRule="nonzero"/></svg>
        Add to cart
      </Button>
    </ContentWrapper>
  );
}

export default Content;