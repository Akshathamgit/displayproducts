
// ProductList.js
import React, { useState, useEffect } from 'react';
import Product from './Product';
import './ProductList.css'

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the JSONPlaceholder API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))

      /* .then(data => {
        const mappedProducts = data.map(item => ({
          id: item.id,
          title: item.title,
          image: item.image,
          price: item.price
        }));

        setProducts(mappedProducts);
      })  */
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <Product
         key={product.id}
          title={product.title}
          image={product.image}
          price={product.price} 
          ></Product>
      ))}
    </div>
  );
};

export default ProductList;

