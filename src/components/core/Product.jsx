/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './css/Product.css';

const Product = ({ item }) => {
  return (
    <div class='Cart-Items'>
      {/* <div class='image-box'>
        <img src={src} style={{ height: '120px' }} />
      </div> */}
      <div class='about'>
        <img src={item.image} style={{ height: '30px' }} />
        <h5 class='title'>{item.title}</h5>
        <h3 class='subtitle'>{item.price}</h3>
      </div>
      {/* <div class='counter'></div>
      <div class='prices'></div> */}
    </div>
  );
};

export default Product;
