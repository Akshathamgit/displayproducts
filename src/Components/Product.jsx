// Product.js
import React from 'react';
import  './Product.css'

const Product = ({ title, image,price }) => {
  return (
    <div className="product">
      <h5>{title}</h5>
    <img src={image} alt="" height={100} width={200}/>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
