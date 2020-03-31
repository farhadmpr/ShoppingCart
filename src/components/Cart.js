import React, { useContext } from 'react'

import './Cart.css'
import { CartContext } from "../shared/context/cart-context";

const Cart = () => {
    const [cartItems, ] = useContext(CartContext)

    return (
        <div className="cart">
            <p>Items in cart: {cartItems.length}</p>
            <p>Total price: 0</p>
        </div>
    )
}

export default Cart
