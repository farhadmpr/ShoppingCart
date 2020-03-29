import React from 'react'

import './Product.css'

const Product = (props) => {

    const addToCart = () => {
        console.log('Clicked')
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