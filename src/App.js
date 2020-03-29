import React from 'react';

import './App.css';
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {
  return (
    <div className="main">
      <header className="main-header">
        <h2>Shopping Cart</h2>        
      </header>
      <ProductList />
    </div>
  );
}

export default App;
