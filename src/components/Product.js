import React, { useContext } from 'react'

import './Product.css'
import { CartContext } from '../shared/context/cart-context'
const Product = (props) => {

    const [,setCartItems] = useContext(CartContext)

    const addToCart = () => {
        const product = {
            title: props.title,
            price: props.price
        }
        setCartItems((currentState) => {
            return [...currentState, product]
        })
    }

    return(
        <div className="product">
            <p>{ props.title }</p>
            <p>{ props.price }</p>
            <button
                className="btn"
                onClick={addToCart}
            >
                Add to Cart
            </button>
        </div>
    )
}

export default Product