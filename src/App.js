import React from 'react';

import './App.css';
import ProductList from './components/ProductList'

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
