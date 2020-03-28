import React from 'react'

import './ProductList.css'

const products = [
    { id:1, title: "Product1", price: 9500 },
    { id:2, title: "Product2", price: 4200 },
    { id:3, title: "Product3", price: 6000 },
]

const ProductList = () => {
    return (
        <div className="product-list">
            <h3>Product List</h3>
        </div>
    )
}

export default ProductList