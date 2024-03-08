
// App.js
import React from 'react';
import ProductList from './Components/ProductList'
import './App.css'; // Import default App.css for basic styling

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="app">
     <NavBar/>
      <ProductList />
      <Footer/>
    </div>
  );
};

export default App;

