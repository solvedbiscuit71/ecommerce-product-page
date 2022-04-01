import React from 'react';
function Gallery(props) {
  return (
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
  );
}

export default Gallery;