import React from 'react';

import './App.css';
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { CartProvider } from './shared/context/cart-context'

function App() {
  return (
    <CartProvider>
      <div className="main">
        <header className="main-header">
          <h2>Shopping Cart</h2>
        </header>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
