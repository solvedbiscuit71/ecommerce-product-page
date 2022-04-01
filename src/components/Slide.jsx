import React from 'react';
import SlideWrapper from '../styles/SlideWrapper';
function Slide(props) {
  return (
    <SlideWrapper>
      <div className='slide-image'>
        <img src="images/image-product-1.jpg" alt="product image" />
        <img src="images/image-product-2.jpg" alt="product image" />
        <img src="images/image-product-3.jpg" alt="product image" />
        <img src="images/image-product-4.jpg" alt="product image" />
      </div>
      <div className='btn'><img src="images/icon-previous.svg" alt="previous icon" /></div>
      <div className='btn'><img src="images/icon-next.svg" alt="next icon" /></div>
    </SlideWrapper>
  );
}

export default Slide;