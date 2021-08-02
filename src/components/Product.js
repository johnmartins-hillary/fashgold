import React from 'react'
import '../styles/Product.css'
import pic1 from '../images/pic1.webp'

function Product() {
    return (
        <div className="product">
            <h4 className="desc">This is a product</h4>
            <img src={pic1} className="product-image" />
            <p className="price">$200</p>
            <button className="add-product">Add to cart</button>
        </div>
    )
}

export default Product
