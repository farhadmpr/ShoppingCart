import React from 'react'

import './Product.css'

const Product = (props) => {
    return(
        <div className="product">
            <p>{ props.title }</p>
            <p>{ props.price }</p>
            <button>Add to Cart</button>
        </div>
    )
}

export default Product