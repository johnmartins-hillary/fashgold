import React from 'react'
import Product from './Product.js'
import '../styles/ProductContainer.css'

function ProductContainer() {
    return (
        <div className="product-container">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    )
}

export default ProductContainer
